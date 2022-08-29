<template>
	<div>
		<NavBar />
		<div class="container mt-4 text-center">
			<h2>Berhasil Dipesan</h2>		
			<h4>Pesanan Anda sedang diproses..</h4>
		</div>
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";

	export default {
		name: "PesananSuksesView",

		components: {
			NavBar,
		}
	};
</script>