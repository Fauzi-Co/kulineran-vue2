<template>
  <b-navbar toggleable="lg" type="light" variant>
    <div class="container">
      <b-navbar-brand href="#">Kulineran</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/foods">Foods</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/keranjang">
            Keranjang
            <b-icon-bag></b-icon-bag>
            <span
              class="badge badge-success ml-2"
            >{{ (updateKeranjang || updateKeranjang == 0) ? updateKeranjang : jumlah_keranjang }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import axios from "axios";

export default {
  props: ["updateKeranjang"],
  name: "NavBar",
  data() {
    return {
      jumlah_keranjang: 0
    };
  },

  methods: {
    setJumlah(jumlah) {
      this.jumlah_keranjang = jumlah;
    }
  },

  mounted() {
    axios.get("http://localhost:3000/keranjang").then(res => {
      this.setJumlah(res.data.length);
    });
  }
};
</script>

<style>
</style>