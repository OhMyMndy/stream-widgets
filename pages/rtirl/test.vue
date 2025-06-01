<script setup lang="ts">
  import RtirlWidgetDemo from "~/components/RtirlWidgetDemo.vue";

  const config = useRuntimeConfig();
  const origin = useRequestURL().origin + config.app.baseURL



</script>
<template>
  <div class="v-full container mx-auto p-2">
    <ClientOnly>
      <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl mb-4">RT IRL widgets</h1>


      <RtirlWidgetDemo description="Real time IRL for Twitch ID 885542539" id="885542539"/>



      <RtirlWidgetDemo description="Long street name and locality test" lat="50.673439" lng="4.558424"/>


      <RtirlWidgetDemo description="Belgian E-road test" lat="50.885804" lng="4.459308"/>


      <RtirlWidgetDemo description="Belgian A-road test" lat="51.298262" lng="4.393667"/>


      <RtirlWidgetDemo description="Belgian N-road test" lat="51.310663" lng="4.430697"/>

      <RtirlWidgetDemo description="Belgian regular street test" lat="51.205004" lng="4.433044"/>

      <RtirlWidgetDemo description="French D-road test" lat="49.490363" lng="2.151408"/>

      <RtirlWidgetDemo description="Dutch N-road test" lat="51.359333" lng="5.415079"/>

      <RtirlWidgetDemo description="Right align test" lat="51.359333" lng="5.415079" right="1"/>


      <div class="relative bg-[url(~/public/images/truck-cabin-view.png)] bg-contain bg-no-repeat max-w-4xl mb-4">
        <img src="../../public/images/truck-cabin-view.png"/>
        <iframe :src="origin + '/rtirl?lat=51.242661&lng=4.690678&right=1'" class="absolute bottom-2 right-2" style="height: 44px" />
      </div>

      <div class="relative bg-[url(~/public/images/truck-cabin-view.png)] bg-contain bg-no-repeat max-w-4xl">
        <img src="../../public/images/truck-cabin-view.png"/>
        <iframe :src="origin + '/rtirl?lat=51.242661&lng=4.690678&right=1'" class="absolute top-2 right-2" style="height: 44px" />
      </div>


    </ClientOnly>
  </div>
</template>
