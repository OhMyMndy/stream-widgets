<script setup lang="ts">
let origin = useRequestURL().origin
</script>

<template>
  <div>
    <header>

    </header>
    <main
        class="relative isolate px-6 pt-14 lg:px-8">

      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Streamer widgets</h1>

        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          This is a collection of hand crafted widgets for your stream.
        </p>

<!--        <a :href="origin + '/rtirl/test'">Test</a>-->
      </div>

      <div>

      </div>

    </main>
  </div>
</template>
