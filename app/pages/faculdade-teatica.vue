<template>
	<div>
		<div slot="submenu" class="fill-with">
			<v-layout
				class="fill-width fixed"
				:class="isup ? 'elevation-0' : 'elevation-0'"
				style="z-index: 6; top: 64px"
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
		</div>
		<Banner
			txt1="FACULDADE"
			txt2="TEATICA"
			img="/faculdade.jpg"
			height="calc(100vh + 50px)"
		></Banner>

		<h1>Graduação Presencial</h1>
		<h1>Graduação Digital</h1>
		<h1>Pós Graduação</h1>
	</div>
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
		},
		mounted() {
			this.passoudobanner = innerHeight < scrollY
			addEventListener('scroll', () => {
				this.passoudobanner = innerHeight < scrollY
			})
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

