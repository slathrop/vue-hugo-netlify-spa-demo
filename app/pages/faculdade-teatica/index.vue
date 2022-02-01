<template>
	<div class="white">
		<div slot="submenu" class="fill-with">
			<FaculdadeSubmenu
				:isup="isup"
				:onFooter="onFooter"
				:banner="banner"
			></FaculdadeSubmenu>
		</div>
		<Banner
			txt1="FACULDADE"
			txt2="TEÁTICA"
			img="/faculdade.jpg"
			height="calc(60vh + 50px)"
			ref="banner"
		></Banner>
		<div class="spx-24">
			<PosCarousel></PosCarousel>
			<FaculdadeCarouselPresencial></FaculdadeCarouselPresencial>
			<CarouselEmBreve titulo="Graduação Digital"></CarouselEmBreve>
		</div>

		<BlogSectionBlogNoticia></BlogSectionBlogNoticia>

		<FaculdadeMetodologia></FaculdadeMetodologia>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				banner: {},
			}
		},
		computed: {
			isup() {
				return this.$attrs.isup
			},
			onFooter() {
				return this.$attrs.onFooter
			},
		},
		mounted() {
			setTimeout(() => {
				this.banner = this.$refs.banner
			}, 500)
		},
	}
</script>

<style lang="scss">
	.submenu {
		.v-btn {
			font-size: 13px;
		}
	}
</style>

