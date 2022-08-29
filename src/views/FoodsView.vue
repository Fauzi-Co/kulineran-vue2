<template>
  <div>
    <NavBar />

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <b-input-group class="mb-3">
            <b-form-input v-model="search" @keyup="searchFood" placeholder="Cari makanan..."></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-success">
                <b-icon-search></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>
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
import NavBar from "@/components/NavBar.vue";
import CardProduk from "@/components/CardProduk.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavBar,
    CardProduk
  },

  data() {
    return {
      produks: [],
      search: ""
    };
  },

  methods: {
    setProduk(data) {
      this.produks = data;
    },

    searchFood() {
      axios
        .get("http://localhost:3000/produks?q=" + this.search)
        .then(res => this.setProduk(res.data))
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/produks")
      .then(res => this.setProduk(res.data))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>