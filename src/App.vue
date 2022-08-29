<template>
  <div id="app">
    <router-view />

    <Footer />
  </div>
</template>

<script>
import FooterComp from "@/components/Footer.vue";

export default {
  components: {
    Footer: FooterComp
  }
};
</script>
