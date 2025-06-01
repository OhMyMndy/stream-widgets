<script setup lang="ts" >

import * as RealtimeIRL from '@rtirl/api';

let wrapperClasses = "";

const props = defineProps({
  id: {type: String, default: null},
  lat: {type: String, default: null},
  lng: {type: String, default: null},
  right: {type: String, default: null}
})

if (props.right) {
  wrapperClasses += " justify-end"
}

const route = ref("");
const locality = ref("")
const routeClasses = ref("bg-white outline-black text-black");
const localityClasses = ref("bg-white outline-black text-black");

const colorMappingRoute: Record<string, Record<string, string>> = {
  "BE": {
    "E[0-9]+": "bg-green-700 outline-white text-white",
    "A[0-9]+": "bg-white outline-black text-black",
    "R[0-9]+": "bg-white outline-black text-black",
    "N[0-9]+": "bg-blue-700 outline-white text-white",
  },

  "FR": {
    "E[0-9]+": "bg-green-700 outline-white text-white",
    "A[0-9]+": "bg-white outline-black text-black",
    "D[0-9]+": "bg-yellow-400 outline-black text-black",
  },

  "NL": {
    "E[0-9]+": "bg-green-700 outline-white text-white",
    "A[0-9]+": "bg-red-700 outline-white text-white",
    "N[0-9]+": "bg-yellow-400 outline-black text-black",
  },
}

const colorMappingLocality: Record<string, string> = {
  "BE": "bg-white outline-black text-black",
  "FR": "bg-white outline-red-900 text-black uppercase",
  "NL": "bg-blue-700 outline-white text-white",
}


function extractData(results: any) {
  const location_data: Record<string, Record<string, any>> = {};
  for (const result of results.results) {
    for (const type of result.types) {
      if (type == "route" || type == "street_address") {
        for (const address_component of result.address_components) {
          for (const address_component_type of address_component.types) {
            if (!location_data[type]) {
              location_data[type] = {};
            }

            location_data[type][address_component_type] =
                address_component;
          }
        }
      }
    }
  }
  return location_data;
}

async function setLocation(lat: number, lng: number) {
  const {Geocoder} = await google.maps.importLibrary("geocoding");

  const request = {
    location: new google.maps.LatLng(lat, lng),
  };

  routeClasses.value = "bg-white outline-black text-black";
  localityClasses.value = "bg-white outline-black text-black";

  const result = extractData(await new Geocoder().geocode(request));
  console.log(result)
  route.value = result?.route?.route?.short_name;


  locality.value = result?.route?.locality?.short_name

  if (!locality.value) {
    locality.value = result?.route?.administrative_area_level_2?.short_name

  }
  const countryShort = result.route?.country?.short_name;
  const routeName = result.route?.route?.short_name;


  localityClasses.value = colorMappingLocality[countryShort] || "bg-white outline-black text-black";

  const colorClasses = colorMappingRoute[countryShort] || {};

  for (const [prefix, colorClass] of Object.entries(colorClasses)) {
    if (routeName.match(new RegExp(prefix))) {
      routeClasses.value = colorClass;
      break;
    }
  }
}

type Location = {
  latitude: number;
  longitude: number;
}

if (props.id) {
  try {
    const streamer = RealtimeIRL.forStreamer("twitch", props.id)
    streamer.addLocationListener(async (location: Location) => {
      console.log(location)
      if (location) {
        await setLocation(location.latitude,
            location.longitude)
      } else {
        route.value = ""
        locality.value = ""
      }
    })
  } catch (e) {
    console.error(e)
  }
} else if (props.lat && props.lng) {
  await setLocation(Number(props.lat), Number(props.lng))
}
</script>


<template>
  <ClientOnly>
  <div class="flex text-lg bg-transparent" :class="wrapperClasses ">
    <div v-if="route" class="flex-none px-2 py-1 m-1 outline-4 rounded-md " :class="routeClasses">
      {{ route }}
    </div>
    <div class="ml-2">
    <div v-if="locality" class="flex-none px-2 py-1 m-1 font-bold outline-4 rounded-md " :class="localityClasses">
      {{ locality }}
    </div>
    </div>
  </div>
  </ClientOnly>
</template>