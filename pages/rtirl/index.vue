<script setup lang="ts">

let id = "";
let lat = "";
let lng = "";
let alignRight = "";
let showRegion = "";
let showCountry = "";

if (window !== undefined) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  id = urlParams.get('id') as string;
  lat = urlParams.get('lat') as string;
  lng = urlParams.get('lng') as string;

  alignRight = urlParams.get('right') as string;
  showRegion = urlParams.get('region') as string;
  showCountry = urlParams.get('country') as string;


}
</script>
<template>
  <div class="bg-transparent h-full">
    <ClientOnly>
      <RtirlWidget :id="id" :lat="lat" :lng="lng" :right="alignRight" :country="showCountry" :region="showRegion"/>
    </ClientOnly>
  </div>
</template>
