<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow border-0">
          <div class="card-body">
            <h4 class="text-center mt-3">Daftar Pelanggan</h4>

            <form action class="mt-4" v-on:submit.prevent="handleRegister">
              <b-form-input
                v-model="username"
                id="input-1"
                type="text"
                class="mb-3"
                placeholder="Nama Lengkap"
              ></b-form-input>
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
                <span>Daftar</span>
              </b-button>
              </div>

            </form>

            <p class="text-center">
              <small>Sudah punya akun? <router-link to="/login">Login</router-link></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "RegisterView",

		components: {},
		
		data() {
			return {

			}
		},

		methods: {},
	};
</script>