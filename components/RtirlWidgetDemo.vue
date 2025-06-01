<script setup lang="ts">
let origin = ""
if (window !== undefined) {
  origin = window.location.origin
}
const props = defineProps({
  id: {type: String, default: null},
  lat: {type: String, default: null},
  lng: {type: String, default: null},
  right: {type: String, default: null},
  description: {type: String, default: null}
})

function generateURL() {
  let url = new URL(origin + '/rtirl')
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
  url.search = new URLSearchParams(params).toString()
  return url.toString()
}

let url = ref(generateURL())
</script>
<template>
  <div class="mb-4">
    <p class="font-bold">{{ description }}</p>
    <i>{{ url }}</i>
    <iframe :src="url" class="w-full" style="height: 44px"></iframe>

  </div>
  <div class="divider-black"></div>
</template>