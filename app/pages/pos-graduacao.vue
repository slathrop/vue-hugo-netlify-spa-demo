<template>
	<div>
		<div slot="submenu" class="fill-with">
			<FaculdadeSubmenu></FaculdadeSubmenu>
		</div>
		<Banner
			txt1="PÓS"
			txt2="GRADUAÇÃO"
			img="/faculdade.jpg"
			height="calc(60vh + 50px)"
			ref="banner"
		></Banner>

		<PosCarousel></PosCarousel>
		<PosFluxograma></PosFluxograma>
	</div>
</template>

<script>
	export default {}
</script>

<style>
</style>