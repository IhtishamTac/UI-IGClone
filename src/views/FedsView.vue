<script setup>
import navComp from "../components/NavComponent.vue";
import statusComp from "../components/StatusComponent.vue";
import postComp from "../components/PostsComponent.vue";
import rightNav from "../components/RightNavComponent.vue";
</script>

<template>
  <main class="">
    <div class="d-flex">
      <navComp />
      <div class="rawur" style="margin-left: 20%;">
        <statusComp />
        <postComp />
      </div>
      <rightNav />
    </div>
  </main>
</template>
