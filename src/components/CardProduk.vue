<template>
  <div>
    <b-card
      :title="produk.nama"
      :img-src="getImgUrl(produk.gambar)"
      :img-alt="produk.nama"
      img-top
      tag="article"
      class="mb-2 shadow border-0"
    >
      <b-card-text>{{ toRupiah(produk.harga) }}</b-card-text>

      <b-button :to="'/foods/' + produk.id" variant="success" size="sm">
        <b-icon-cart></b-icon-cart>
        <span>Pesan</span>
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["produk"],
  name: "CardProduk",
  methods: {
    getImgUrl(img) {
      let images = require.context("../assets/", false);
      return images("./" + img);
    },

    toRupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
    }
  }
};
</script>

<style>
</style>