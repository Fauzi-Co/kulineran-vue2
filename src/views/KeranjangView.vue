<template>
  <div>
    <NavBar :updateKeranjang="keranjangs.length" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <b-breadcrumb class="bg-white">
            <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
            <b-breadcrumb-item to="/foods" class="text-success">Foods</b-breadcrumb-item>
            <b-breadcrumb-item active>Keranjang</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <h2>
            Keranjang
            <strong>Saya</strong>
          </h2>

          <div class="table-responsive mt-3">
            <table class="table table-striped">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Foto</td>
                  <td>Makanan</td>
                  <td>Keterangan</td>
                  <td>Jumlah</td>
                  <td>Harga</td>
                  <td>Total</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in keranjangs" :key="'item_'+item.id">
                  <td>{{ 1 + i }}</td>
                  <td>
                    <img :src="getImgUrl(item.produk.gambar)" class="rounded" width="100" alt />
                  </td>
                  <td>{{ item.produk.nama }}</td>
                  <td>{{ item.keterangan }}</td>
                  <td>{{ item.jumlah }}</td>
                  <td>{{ toRupiah(item.produk.harga) }}</td>
                  <td>{{ toRupiah(item.produk.harga * item.jumlah) }}</td>
                  <td>
                    <b-button
                      size="sm"
                      variant="none"
                      class="text-danger"
                      @click="hapusKeranjang(item.id)"
                    >
                      <b-icon-trash></b-icon-trash>
                    </b-button>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">Total Harga</td>
                  <td colspan="2">
                    <strong>{{ toRupiah(totalPesanan) }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end" v-if="keranjangs.length">
        <div class="col-md-6">

          <!-- <h2>{{ produks.nama }}</h2> -->
          <form action class="mt-4" v-on:submit.prevent="checkout">
            <b-form-group id="input-group-1" label="Nama" label-for="input-1">
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Masukan Jumlah Pesanan"
                v-model="pesanan.nama"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="No. Meja" label-for="input-1">
              <b-form-input
                id="input-1"
                type="number"
                placeholder="Masukan Jumlah Pesanan"
                v-model="pesanan.meja"
              ></b-form-input>
            </b-form-group>


            <b-button variant="warning" class="mt-3 float-right" type="submit">
              <b-icon-cart></b-icon-cart>
              <span>Checkout</span>
            </b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "KeranjangView",

  components: {
    NavBar
  },

  data() {
    return {
      keranjangs: [],
      totalPesanan: "",
      pesanan: {
        nama: "",
        meja: "",
      }
    };
  },

  mounted() {
    axios.get("http://localhost:3000/keranjang").then(res => {
      this.setKeranjang(res.data);
      this.setTotalPesanan(res.data);
    });
  },

  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },

    hapusKeranjang(id) {
      axios.delete("http://localhost:3000/keranjang/" + id).then(() => {
        this.$toast.error("Item berhasil dihapus.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
        this.keranjangs = this.keranjangs.filter(item => item.id != id);
        this.setTotalPesanan(this.keranjangs);
      });
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

    setTotalPesanan(data) {
      this.totalPesanan = data.reduce((item, data) => {
        return item + data.produk.harga * data.jumlah;
      }, 0);
    },

    checkout() {
      let { nama, meja } = this.pesanan
      if (nama && meja) {
        
        this.pesanan.keranjangs = this.keranjangs

        axios
          .post("http://localhost:3000/pesanan", this.pesanan)
          .then(() => {
            this.keranjangs.map(item => {
               axios.delete("http://localhost:3000/keranjang/" + item.id)
            });
            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Berhasil Dipesan.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => console.log("Gagal", err));

      } else {
        this.$toast.error("Harap Isi Nama dan Nomor Meja.", {
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