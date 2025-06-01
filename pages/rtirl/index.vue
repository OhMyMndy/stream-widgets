<script setup lang="ts">

let id = "";
let lat = "";
let lng = "";
let alignRight = "";

if (window !== undefined) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  id = urlParams.get('id') as string;
  lat = urlParams.get('lat') as string;
  lng = urlParams.get('lng') as string;

  alignRight = urlParams.get('right') as string;

}
</script>
<template>
  <div class="bg-transparent h-full">
    <ClientOnly>
      <RtirlWidget :id="id" :lat="lat" :lng="lng" :right="alignRight"/>
    </ClientOnly>
  </div>
</template>
