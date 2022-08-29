<template>
  <div class="row">
    <div class="col-md-6 d-none d-md-block">
      <div class="d-flex flex-column justify-content-center h-100">
        <h2>
          <strong>Delicious Food Menu,</strong>
          <br />In Your Gadget.
        </h2>
        <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
        <div class>
          <b-button to="/foods" variant="success" style="color: #fff !important">
            <b-icon-arrow-right></b-icon-arrow-right>Pesan
          </b-button>
        </div>
        <!-- <router-link to="/" class="btn btn-success btn-sm" text-white>
          <b-icon-arrow-right></b-icon-arrow-right>Pesan
        </router-link>-->
      </div>
    </div>

    <div class="col-md-6">
      <img src="../assets/hero.png" class="img-fluid" alt />
    </div>

    <div class="col-md-6 d-flex align-self-center justify-content-center d-sm-block d-md-none">
      <div>
        <h2>
          <strong>Delicious Food Menu,</strong>
          <br />In Your Gadget.
        </h2>
        <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
        <b-button to="/" variant="success" style="color: #fff !important">
          <b-icon-arrow-right></b-icon-arrow-right>Pesan
        </b-button>
        <!-- <router-link to="/" class="btn btn-success btn-sm" text-white>
          <b-icon-arrow-right></b-icon-arrow-right>Pesan
        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComp"
};
</script>

<style>
</style>