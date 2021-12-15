<template>
	<div
		class="black fill-width banner d-flex align-center spl-24"
		style="top: 0; height: 100vh"
	>
		<div class="spl-20">
			<div
				class="white--text titulo-banner font-100 mt-10 sml-24 spl-24"
				style="text-shadow: 0 0 10px black"
			>
				<span class="font-200">APRENDIZAGEM</span> <br />
				<b class="font-800">EVOLUTIVA</b>
			</div>
		</div>
	</div>
</template>

<script>
	// export default {
	//   async asyncData({ $http }) {
	//     const blogs = JSON.parse(await $http.$get('/blog/index.json'))

	//     return { blogs }
	//   },
	// }
</script>

<style lang="scss">
	.banner {
		background: linear-gradient(#000000c2, #000000e0),
			url('/banner-bg.jpg') center/cover;
	}
</style>