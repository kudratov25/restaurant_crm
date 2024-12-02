<template>
  <div class="logo">
    <RouterLink to="/dashboard/analytics" aria-label="logo">
      <v-img
        :src="googleImg"
        alt="social icon"
        class="mr-2 d-inline-flex"
        style="vertical-align: text-top"
        width="180"
        height="50"
      />
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import googleImg from "@/assets/images/icons/logo.svg";
import { ref } from "vue";
import { RouterLink } from "vue-router";
const primary = ref("rgb(var(--v-theme-primary))");
</script>
