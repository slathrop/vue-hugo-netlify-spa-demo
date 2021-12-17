<template>
	<v-app>
		<v-app-bar
			fixed
			app
			class=""
			:class="isup ? 'transparent elevation-0' : 'black elevation-2'"
		>
			<v-flex xs12 md4 lg3>
				<v-img
					contain
					class="fill-height flex-0 sml-22"
					style="width: 170px"
					src="/teatica-logo-n.png"
				></v-img>
				<v-spacer></v-spacer>
			</v-flex>
			<v-flex xs12 md8 lg9>
				<div class="c-primary spr-24 spl-10 menu-btns d-flex justify-end">
					<v-btn
						class="
							fill-height
							black--text
							transparent
							spx-5
							spy-10
							no-radius
							mx-0
						"
						depressed
						x-large
					>
						<small>QUEM SOMOS</small>
					</v-btn>
					<v-btn
						class="
							fill-height
							black--text
							transparent
							spx-5
							spy-10
							no-radius
							mx-0
						"
						depressed
						x-large
					>
						<small>ACONTECEU NA TEÁTICA</small>
					</v-btn>
					<v-btn
						class="
							fill-height
							black--text
							transparent
							spx-5
							spy-10
							no-radius
							mx-0
						"
						depressed
						x-large
					>
						<small>BLOG TEÁTICA</small>
					</v-btn>
					<v-btn
						class="
							fill-height
							black--text
							transparent
							spx-5
							spy-10
							no-radius
							mx-0
						"
						depressed
						x-large
					>
						<small>CONTATO</small>
					</v-btn>
					<v-btn
						class="hidden-md-and-up"
						icon
						@click.stop="rightDrawer = !rightDrawer"
					>
						<v-icon>mdi-menu</v-icon>
					</v-btn>
				</div>
			</v-flex>
		</v-app-bar>
		<v-main class="pa-0">
			<NuxtChild />
		</v-main>
		<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
			<v-list>
				<v-list-item @click.native="right = !right">
					<v-list-item-action>
						<v-icon light> mdi-repeat </v-icon>
					</v-list-item-action>
					<v-list-item-title>Switch drawer (click me)</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-footer>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				isup: true,
				items: [
					{
						icon: 'mdi-apps',
						title: 'Welcome',
						to: '/',
					},
					{
						icon: 'mdi-chart-bubble',
						title: 'Inspire',
						to: '/inspire',
					},
				],

				right: true,
				rightDrawer: false,
			}
		},
		mounted() {
			addEventListener('scroll', () => {
				if (scrollY > 200) {
					this.isup = false
				} else {
					this.isup = true
				}
			})
		},
	}
</script>

<style lang="scss">
	.v-main {
		top: 0;
	}
	.v-toolbar__content,
	.v-toolbar__extension {
		padding: 0;
	}
	.menu-btns {
		overflow: hidden;
		.v-btn::after {
			height: 4px;
			width: 100%;
			content: '';
			background: black;
			position: absolute;
			bottom: -6px;
			transition: all 0.3s;
		}
		.v-btn:hover {
			&:after {
				bottom: 0;

				transition: all 0.3s;
			}
			&::before {
				opacity: 0 !important;
			}
		}
	}
</style>
