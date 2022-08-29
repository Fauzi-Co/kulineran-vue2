<template>
  <div class>
    <h2>Beranda Admin</h2>
  </div>
</template>

<script>
export default {
  name: "BerandaView",
  components: {},
  data() {
    return {};
  },
  beforeCreate() {
    let { isLogin, user } = this.$store.state;

    if (!isLogin || user.role != "admin") {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style>
</style>