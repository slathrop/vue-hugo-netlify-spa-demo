<template>
	<div
		class="black fill-width banner d-flex align-center spl-24"
		style="top: 0; height: calc(100vh + 50px)"
	>
		<div class="spl-20">
			<div
				class="white--text titulo-banner font-100 mt-10 sml-24 spl-24"
				style="text-shadow: 0 0 10px black"
			>
				<div class="font-200 txt1">APRENDIZAGEM</div>
				<div class="font-800 txt2">EVOLUTIVA</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				estasubindo: false,
				oldScroll: 2,
			}
		},
		mounted() {
			addEventListener('scroll', () => {
				let estasubindo = this.oldScroll > scrollY
				this.estasubindo = estasubindo
				this.oldScroll = scrollY

				if (this.estasubindo) {
					document.querySelector('.txt1').classList.remove('estadescendo')
					document.querySelector('.txt2').classList.remove('estadescendo')
					document.querySelector('.txt1').classList.add('estasubindo')
					document.querySelector('.txt2').classList.add('estasubindo')
				} else {
					document.querySelector('.txt1').classList.remove('estasubindo')
					document.querySelector('.txt2').classList.remove('estasubindo')
					document.querySelector('.txt1').classList.add('estadescendo')
					document.querySelector('.txt2').classList.add('estadescendo')
				}
			})
		},
	}
</script>

<style lang="scss">
	.banner {
		background: linear-gradient(#000000c2, #000000d4),
			url('/banner-bg.jpg') center/cover;
	}

	.txt1,
	.txt2 {
		animation: entrando 2s;
	}
	.txt2.estasubindo {
		animation: estasubindo 0.9s;
	}
	.txt2.estadescendo {
		animation: estadescendo 0.7s;
		margin-left: 100vw;
	}

	.txt1.estasubindo {
		animation: estasubindo 0.7s;
	}
	.txt1.estadescendo {
		animation: estadescendo 0.9s;
		margin-left: 100vw;
	}

	@keyframes entrando {
		0% {
			margin-left: -100vw;
		}
		50% {
			margin-left: -100vw;
		}
		100% {
			margin-left: 0;
		}
	}
	@keyframes estasubindo {
		from {
			margin-left: -100vw;
		}
		to {
			margin-left: 0;
		}
	}
	@keyframes estadescendo {
		from {
			margin-left: 0;
		}
		to {
			margin-left: 100vw;
		}
	}
</style>