<template>
  <div>
    <NavBar />

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <b-breadcrumb class="bg-white">
            <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
            <b-breadcrumb-item to="/foods" class="text-success">Foods</b-breadcrumb-item>
            <b-breadcrumb-item active>Detail</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <img
            :src="getImgUrl(produks.gambar)"
            class="img-fluid rounded shadow"
            :alt="produks.nama"
          />
        </div>
        <div class="col-md-6">
          <h2>{{ produks.nama }}</h2>
          <hr />
          <h4>{{ toRupiah(produks.harga) }}</h4>

          <form action class="mt-4" v-on:submit.prevent="pesan">
            <b-form-group id="input-group-1" label="Jumlah:" label-for="input-1">
              <b-form-input
                id="input-1"
                type="number"
                placeholder="Masukan Jumlah Pesanan"
                v-model="pesanan.jumlah"
              ></b-form-input>
            </b-form-group>

            <b-form-textarea
              v-model="pesanan.keterangan"
              id="textarea"
              placeholder="Keterangan..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>

            <b-button variant="success" class="mt-3" type="submit">
              <b-icon-cart></b-icon-cart>
              <span>Pesan</span>
            </b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Componnent
import NavBar from "@/components/NavBar.vue";
// Axios
import axios from "axios";

export default {
  name: "FoodDetailView",

  components: {
    NavBar
  },

  data() {
    return {
      produks: [],
      pesanan: {
        jumlah: "",
        keterangan: ""
      }
    };
  },

  // beforeCreate() {
  //   let { isLogin } = this.$store.state;

  //   if (!isLogin) {
  //     this.$router.push({ path: "/login" });
  //   }
  // },

  mounted() {
    axios
      .get("http://localhost:3000/produks/" + this.$route.params.id)
      .then(res => this.setProduk(res.data))
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    setProduk(data) {
      this.produks = data;
    },

    getImgUrl(img) {
      let images = require.context("../assets/", false);
      return images("./" + img);
    },

    toRupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
    },

    pesan() {
      if (this.pesanan.jumlah) {
        this.pesanan.produk = this.produks;
        axios
          .post("http://localhost:3000/keranjang", this.pesanan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Berhasil Masuk Keranjang.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => console.log("Gagal", err));
      } else {
        this.$toast.success("Harap lengkapi jumlah pesanan.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  }
};
</script>

<style>
</style>