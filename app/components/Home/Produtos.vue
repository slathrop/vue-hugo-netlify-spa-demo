<template>
	<v-layout>
		<v-flex xs12 md4 lg3 class="c-primary">
			<v-img
				class="mx-auto fill-height pattern-produtos"
				cover
				src="/pattern.jpg"
			></v-img>
		</v-flex>
		<v-flex xs12 md8 lg9 class="white elevation-4 produtos" style="z-index: 2">
			<HomeProdutosItems></HomeProdutosItems>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	.pattern-produtos .v-image__image {
		background-color: #ffdf42;
		background-blend-mode: luminosity;
		opacity: 0.3;
		background-attachment: fixed;
		background-size: 35%;
		background-position: left !important;
	}
	.produtos {
		@media (max-width: 1600px) {
			min-height: 440px;
		}
	}
</style>