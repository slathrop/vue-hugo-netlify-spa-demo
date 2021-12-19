<template>
	<div>
		<HomeBanner></HomeBanner>
		<HomeProdutos></HomeProdutos>
		<HomeContato></HomeContato>
	</div>
</template>

<script>
	export default {
		mounted() {
			AOS.init()
		},
	}
</script>

