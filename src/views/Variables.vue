<template>
	<div>
		<h1>Colors</h1>
		<div class="colors">
			<div v-for="(item,i) in colors" :key="i" class="color-container" :class="item">
				<div class="title">{{item}}</div>
				<div class="color"></div>
			</div>
		</div>
		<h1>Fonts</h1>
		<div class="fonts">
			<table>
				<tr>
					<th>size/weight</th>
					<th v-for="(weight,i) in fonts.weight" :key="i">{{weight}}</th>
				</tr>
				<tr v-for="(size,i) in fonts.size" :key="i">
					<td>{{size}}</td>
					<td
						v-for="(weight,j) in fonts.weight"
						:key="j"
						:class="`font-size_${size} font-weight_${weight}`"
					>Sample</td>
				</tr>
			</table>
		</div>
		<h1>Paddings and Margins</h1>
		<div class="paddings-and-margins">
			<table>
				<tr>
					<th>padding/margin</th>
					<th v-for="(margin,i) in margins" :key="i">{{margin}}</th>
				</tr>
				<tr v-for="(padding,i) in paddings" :key="i">
					<td>{{padding}}</td>
					<td v-for="(margin,j) in margins" :key="j">
						<div class="item" :class="`padding_${padding} margin_${margin}`">Sample</div>
					</td>
				</tr>
			</table>
		</div>
		<h1>Borders</h1>
		<div class="borders">
			<table>
				<tr>
					<th>width/radius</th>
					<th v-for="(radius,i) in borders.radius" :key="i">{{radius}}</th>
				</tr>
				<tr v-for="(width,i) in borders.width" :key="i">
					<td>{{width}}</td>
					<td v-for="(radius,j) in borders.radius" :key="j">
						<div class="item" :class="`border-width_${width} border-radius_${radius}`">Sample</div>
					</td>
				</tr>
			</table>
		</div>
		<h1>Opacity</h1>
		<div class="opacity">
			<table>
				<tr>
					<th v-for="(opacity,i) in opacities" :key="i">{{opacity}}</th>
				</tr>
				<td v-for="(opacity,i) in opacities" :key="i">
					<div class="item">
						<div class="outside">Sample</div>
						<div class="inside" :class="`opacity_${opacity}`">Sample</div>
					</div>
				</td>
			</table>
		</div>
		<h1>Shadow</h1>
		<div class="shadow">
			<table>
				<tr>
					<th v-for="(shadow,i) in shadows" :key="i">{{shadow}}</th>
				</tr>
				<td v-for="(shadow,i) in shadows" :key="i">
					<div class="item" :class="`shadow_${shadow}`">Sample</div>
				</td>
			</table>
		</div>
		<h1>Transition</h1>
		<div class="transition">
			<table>
				<tr>
					<th v-for="(transition,i) in transitions" :key="i">{{transition}}</th>
				</tr>
				<td v-for="(transition,i) in transitions" :key="i">
					<div class="item" :class="`transition-duration_${transition}`">Sample</div>
				</td>
			</table>
		</div>
	</div>
</template>

<script>
/* eslint {max-len:0} */
const sizes = [
	'extra-small',
	'very-small',
	'small',
	'base',
	'large',
	'very-large',
	'extra-large'
]
export default {
	data() {
		return {
			colors: [
				'white',
				'ghostwhite',
				'whisper',
				'lightgrey',
				'grey',
				'gunpowder',
				'black',
				'blue',
				'green',
				'red',
				'lightgreen',
				'sunny'
			],
			fonts: {
				size: sizes,
				weight: sizes.slice(1)
			},
			paddings: sizes,
			margins: sizes,
			borders: {
				width: sizes.slice(3, 5),
				radius: [...sizes.slice(2, 4), 'half']
			},
			opacities: sizes.slice(2, 5),
			shadows: sizes.slice(3, 4),
			transitions: sizes.slice(2, 4)
		}
	}
}
</script>

<style lang="stylus">
@import './../assets/stylus/fonts.styl'
@import './../assets/stylus/variables.styl'

body
	font-family Roboto
	color $black
	padding 20px

h1
	font-size 28px
	font-family Arial
	color $gunpowder

table
	border-collapse collapse

	th, td
		border 1px solid $lightgrey

// COLOR
.color-container
	display inline-block
	font-family Arial
	width 90px

.colors
	.color
		height 30px

	.title
		background-color #737373

.white
	background-color $white
	color $white

.ghostwhite
	background-color $ghostwhite
	color $ghostwhite

.whisper
	background-color $whisper
	color $whisper

.lightgrey
	background-color $lightgrey
	color $lightgrey

.grey
	background-color $grey
	color $grey

.gunpowder
	background-color $gunpowder
	color $gunpowder

.black
	background-color $black
	color $black

.blue
	background-color $blue
	color $blue

.green
	background-color $green
	color $green

.red
	background-color $red
	color $red

.lightgreen
	background-color $lightgreen
	color $lightgreen

.sunny
	background-color $sunny
	color $sunny

// SIZE
.fonts table
	tr
		height $font-size_extra-large

	td
		padding 0 10px

.font-size_extra-small
	font-size $font-size_extra-small

.font-size_very-small
	font-size $font-size_very-small

.font-size_small
	font-size $font-size_small

.font-size_base
	font-size $font-size_base

.font-size_large
	font-size $font-size_large

.font-size_very-large
	font-size $font-size_very-large

.font-size_extra-large
	font-size $font-size_extra-large

// WEIGHT
.font-weight_very-small
	font-weight $font-weight_very-small

.font-weight_small
	font-weight $font-weight_small

.font-weight_base
	font-weight $font-weight_base

.font-weight_large
	font-weight $font-weight_large

.font-weight_very-large
	font-weight $font-weight_very-large

.font-weight_extra-large
	font-weight $font-weight_extra-large

// PADDING
.paddings-and-margins .item
	display inline-block
	border 1px solid $lightgrey
	background-color $lightgreen

.padding_extra-small
	padding 0 $padding_extra-small

.padding_very-small
	padding 0 $padding_very-small

.padding_small
	padding 0 $padding_small

.padding_base
	padding 0 $padding_base

.padding_large
	padding 0 $padding_large

.padding_very-large
	padding 0 $padding_very-large

.padding_extra-large
	padding 0 $padding_extra-large

// MARNIG
.margin_extra-small
	margin 0 $margin_extra-small

.margin_very-small
	margin 0 $margin_very-small

.margin_small
	margin 0 $margin_small

.margin_base
	margin 0 $margin_base

.margin_large
	margin 0 $margin_large

.margin_very-large
	margin 0 $margin_very-large

.margin_extra-large
	margin 0 $margin_extra-large

// BORDER
.borders .item
	margin $margin_base
	padding $padding_base
	border-style solid
	border-color $grey

.border-width_base
	border-width $border-width_base

.border-width_large
	border-width $border-width_large

.border-radius_small
	border-radius $border-radius_small

.border-radius_base
	border-radius $border-radius_base

.border-radius_half
	border-radius $border-radius_half

// OPACITY
.opacity
	.item
		position relative
		background-color $white

		.outside
			font-size 46px

		.inside
			position absolute
			top 0
			font-size 30px
			background-color $white

.opacity_large
	opacity $opacity_large

.opacity_base
	opacity $opacity_base

.opacity_small
	opacity $opacity_small

// SHADOW
.item
	margin $margin_small

.shadow_base
	box-shadow $shadow_base

// TRANSITION
.transition
	.item
		&:hover
			background-color $black
			color $white

.transition-duration_small
	transition-duration $transition-duration_small

.transition-duration_base
	transition-duration $transition-duration_base
</style>
