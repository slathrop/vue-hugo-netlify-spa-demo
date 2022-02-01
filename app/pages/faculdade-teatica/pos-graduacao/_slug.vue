<template>
	<div class="white">
		<div slot="submenu" class="fill-with">
			<FaculdadeSubmenu
				:isup="isup"
				:onFooter="onFooter"
				:banner="banner"
			></FaculdadeSubmenu>
		</div>
		<PosShowTopo :curso="curso" ref="banner"></PosShowTopo>
		<div class="white relative spx-xl-24" style="z-index: 1">
			<PosShowSobre :curso="curso"></PosShowSobre>
		</div>
		<div class="white relative" style="z-index: 1">
			<PosShowFormSaibaMais :curso="curso"></PosShowFormSaibaMais>
			<div class="spx-24">
				<PosShowComponenteCurricular
					v-if="curso.matriz && curso.matriz.length"
					:curso="curso"
				></PosShowComponenteCurricular>
				<PosCarousel></PosCarousel>
			</div>
			<PosFluxograma
				style="margin-bottom: calc(-48px - 2.4vw); z-index: 3"
			></PosFluxograma>

			<FaculdadeMetodologia></FaculdadeMetodologia>
		</div>
	</div>
</template>
<script>
	import pos from '@/data/pos.js'

	export default {
		data() {
			return {
				curso: {},
				banner: {},
			}
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.setPos(to.params.slug)
			})
		},
		beforeRouteUpdate(to, from, next) {
			this.setPos(to.params.slug)
			next()
		},
		methods: {
			setPos(to) {
				this.curso = pos.find((c) => c.slug === to)
					? pos.find((c) => c.slug === to)
					: open('/404', '_self')
			},
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
			let path = location.pathname.split('/')[3]

			setTimeout(() => {
				this.banner = this.$refs.banner
				this.setPos(path)
			}, 500)
		},
	}
</script>
<style lang='scss'>
</style>