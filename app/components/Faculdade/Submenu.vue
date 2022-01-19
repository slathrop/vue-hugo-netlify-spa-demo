<template>
	<v-layout
		class="fill-width fixed"
		:class="isup ? 'elevation-0' : 'elevation-0'"
		style="z-index: 6; top: 64px"
		:style="{
			marginTop: onFooter ? '-100px' : '0',
			transition: 'all 0.2s',
		}"
	>
		<v-flex xs12 md4 lg3 :class="passoudobanner ? 'white' : 'transparent'">
		</v-flex>
		<v-flex
			xs12
			md8
			lg9
			class="text-right spr-24 submenu"
			:class="passoudobanner ? 'white' : 'transparent'"
		>
			<v-btn
				depressed
				v-for="(item, i) in items"
				:key="i"
				:href="item.path"
				class="fill-height transparent spx-5 no-radius mx-0"
				:class="passoudobanner ? 'black--text' : 'white--text'"
				>{{ item.name }}</v-btn
			>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		data() {
			return {
				passoudobanner: false,
				items: [
					{ name: 'Graduação Presencial', path: '/graduacao-presencial' },
					{ name: 'Graduação Digital', path: '/graduacao-digital' },
					{ name: 'Pós-Graduação', path: '/pos-graduacao' },
					{ name: 'Extensão Digital', path: '/extensao-digital' },
					{ name: 'Metodologia', path: '/metodologia' },
				],
			}
		},
		computed: {
			isup() {
				return this.$attrs.isup
			},
			onFooter() {
				return this.$attrs.onFooter
			},
			banner() {
				return this.$refs.banner
			},
		},
		mounted() {
			let bh = this.banner.$el.offsetHeight - 76
			this.passoudobanner = bh < scrollY
			addEventListener('scroll', () => {
				this.passoudobanner = bh < scrollY
			})
		},
	}
</script>

<style>
</style>