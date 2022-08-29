<template>
  <div class="home">
    <NavBar />

    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>Foods</strong>
          </h2>
        </div>
        <div class="col d-flex align-self-center justify-content-end">
          <router-link to="/foods" class="float-right text-success">
            <b-icon-eye></b-icon-eye>
            <span class="ml-2">Lihat Semua</span>
          </router-link>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="produk in produks" :key="produk.id">
          <CardProduk :produk="produk" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HeroComp from "@/components/Hero.vue";
import CardProduk from "@/components/CardProduk.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Hero: HeroComp,
    CardProduk
  },

  data() {
    return {
      produks: []
    };
  },

  methods: {
    setProduk(data) {
      this.produks = data;
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/best-produks")
      .then(res => this.setProduk(res.data))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
