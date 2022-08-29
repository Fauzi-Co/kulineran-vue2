<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow border-0">
          <div class="card-body">
            <h4 class="text-center mt-3">Login Admin</h4>

            <form action class="mt-4" v-on:submit.prevent="handleLogin">
              <b-form-input
                v-model="username"
                id="input-1"
                type="text"
                class="mb-3"
                placeholder="Username"
              ></b-form-input>
              <b-form-input v-model="password" id="input-2" type="password" placeholder="Password"></b-form-input>
              
              <div class="text-center">
              <b-button variant="light" to="/" class="mt-3 mb-3 mr-3" type="button">
                <span>Kembali</span>
              </b-button>
              <b-button variant="success" class="mt-3 mb-3" type="submit">
                <span>Login</span>
              </b-button>
              </div>

            </form>

            <p class="text-center">
              <small>Belum punya akun? <router-link to="/register">Daftar</router-link></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  mounted() {
    console.log(this.$store.state)
  },

  methods: {
    handleLogin() {
      if (this.username && this.password) {
        axios
          .get(
            `http://localhost:3000/users?user?username=${this.username}&password=${this.password}`
          )
          .then(res => {
            if (res.data.length) {

              let {id, role, username} = res.data[0];
              this.$store.commit('setIsLogin')
              this.$store.commit('setUsername', username)
              this.$store.commit('setUserID', id)
              this.$store.commit('setRole', role)

              this.$toast.success("Berhasil Login.", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true
              });

              console.log(this.$store.state)
            } else {
              this.$toast.success("Username atau password salah.", {
                type: "error",
                position: "top-right",
                duration: 3000,
                dismissible: true
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast.success("Harap lengkapi form.", {
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