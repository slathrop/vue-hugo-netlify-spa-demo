<template>
	<div>
		<div slot="submenu" class="fill-with">
			<FaculdadeSubmenu></FaculdadeSubmenu>
		</div>
		<Banner
			txt1="FACULDADE"
			txt2="TEATICA"
			img="/faculdade.jpg"
			height="calc(60vh + 50px)"
			ref="banner"
		></Banner>
		<div class="spx-24 pt-6">
			<PosCarousel></PosCarousel>

			<h1 class="font-300">Graduação Presencial</h1>
			<p>Em breve</p>
			<h1 class="font-300">Graduação Digital</h1>
			<p>Em breve</p>
		</div>
		<HomeMetodologia></HomeMetodologia>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	.submenu {
		.v-btn {
			font-size: 13px;
		}
	}
</style>

