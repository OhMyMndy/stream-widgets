<script setup lang="ts">
const config = useRuntimeConfig();
const origin = useRequestURL().origin +  config.app.baseURL

const props = defineProps({
  id: {type: String, default: null},
  lat: {type: String, default: null},
  lng: {type: String, default: null},
  right: {type: String, default: null},
  region: {type: String, default: null},
  country: {type: String, default: null},
  description: {type: String, default: null},
  textSize: {type: String, default: null}
})

function generateURL() {
  let url = new URL(origin + 'rtirl')

  let params = {}
  if (props.id) {
    params.id = props.id
  }
  if (props.lat) {
    params.lat = props.lat
  }
  if (props.lng) {
    params.lng = props.lng
  }
  if (props.right) {
    params.right = props.right
  }
  if (props.region) {
    params.region = props.region
  }
  if (props.country) {
    params.country = props.country
  }
  if (props.textSize) {
    params.size = props.textSize
  }
  url.search = new URLSearchParams(params).toString()
  return url.href
}

let url = ref(generateURL())
</script>
<template>

  <div class="mb-4">
    <p class="font-bold">{{ description }}</p>
    <a :href="url">{{ url }}</a>
    <iframe :src="url" class="w-full mt-2" style="height: 80px"></iframe>

  </div>
  <div class="divider-black"></div>
</template>