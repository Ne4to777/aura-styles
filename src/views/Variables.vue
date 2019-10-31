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
		<h1>Line height</h1>
		<div class="line-height">
			<table>
				<tr>
					<th v-for="(lineHeight,i) in lineHeights" :key="i">{{lineHeight}}</th>
				</tr>
				<td v-for="(lineHeight,i) in lineHeights" :key="i">
					<div
						class="item"
						:class="`line-height_${lineHeight}`"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
				</td>
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
	'smallest',
	'smaller',
	'small',
	'base',
	'large',
	'larger',
	'largest'
]
export default {
	data() {
		return {
			colors: [
				'white',
				'darkwhite',
				'lightgrey',
				'grey',
				'darkgrey',
				'lightblack',
				'black',
				'lightblue',
				'blue',
				'darkblue',
				'lightgreen',
				'green',
				'darkgreen',
				'lightred',
				'red',
				'lightyellow',
				'yellow',
				'darkyellow'
			],
			fonts: {
				size: sizes,
				weight: sizes.slice(1)
			},
			lineHeights: sizes,
			paddings: sizes,
			margins: sizes,
			borders: {
				width: sizes.slice(3, 5),
				radius: sizes
			},
			opacities: sizes,
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

.darkwhite
	background-color $darkwhite
	color $darkwhite

.lightgrey
	background-color $lightgrey
	color $lightgrey

.grey
	background-color $grey
	color $grey

.darkgrey
	background-color $darkgrey
	color $darkgrey

.lightblack
	background-color $lightblack
	color $lightblack

.black
	background-color $black
	color $black

.lightblue
	background-color $lightblue
	color $lightblue

.blue
	background-color $blue
	color $blue

.darkblue
	background-color $darkblue
	color $darkblue

.lightgreen
	background-color $lightgreen
	color $lightgreen

.green
	background-color $green
	color $green

.darkgreen
	background-color $darkgreen
	color $darkgreen

.lightred
	background-color $lightred
	color $lightred

.red
	background-color $red
	color $red

.lightyellow
	background-color $lightyellow
	color $lightyellow

.yellow
	background-color $yellow
	color $yellow

.darkyellow
	background-color $darkyellow
	color $darkyellow

// FONT SIZE
.fonts table
	tr
		height $font-size_largest

	td
		padding 0 10px

.font-size_smallest
	font-size $font-size_smallest

.font-size_smaller
	font-size $font-size_smaller

.font-size_small
	font-size $font-size_small

.font-size_base
	font-size $font-size_base

.font-size_large
	font-size $font-size_large

.font-size_larger
	font-size $font-size_larger

.font-size_largest
	font-size $font-size_largest

// FONT WEIGHT
.font-weight_smaller
	font-weight $font-weight_smaller

.font-weight_small
	font-weight $font-weight_small

.font-weight_base
	font-weight $font-weight_base

.font-weight_large
	font-weight $font-weight_large

.font-weight_larger
	font-weight $font-weight_larger

.font-weight_largest
	font-weight $font-weight_largest

// LINE HEIGHT
.line-height .item
	margin $margin_small

.line-height_smallest
	line-height $line-height_smallest

.line-height_smaller
	line-height $line-height_smaller

.line-height_small
	line-height $line-height_small

.line-height_base
	line-height $line-height_base

.line-height_large
	line-height $line-height_large

.line-height_larger
	line-height $line-height_larger

.line-height_largest
	line-height $line-height_largest

// PADDING
.paddings-and-margins .item
	display inline-block
	border 1px solid $lightgrey
	background-color $lightgreen

.padding_smallest
	padding 0 $padding_smallest

.padding_smaller
	padding 0 $padding_smaller

.padding_small
	padding 0 $padding_small

.padding_base
	padding 0 $padding_base

.padding_large
	padding 0 $padding_large

.padding_larger
	padding 0 $padding_larger

.padding_largest
	padding 0 $padding_largest

// MARGIN
.margin_smallest
	margin 0 $margin_smallest

.margin_smaller
	margin 0 $margin_smaller

.margin_small
	margin 0 $margin_small

.margin_base
	margin 0 $margin_base

.margin_large
	margin 0 $margin_large

.margin_larger
	margin 0 $margin_larger

.margin_largest
	margin 0 $margin_largest

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

.border-radius_smallest
	border-radius $border-radius_smallest

.border-radius_smaller
	border-radius $border-radius_smaller

.border-radius_small
	border-radius $border-radius_small

.border-radius_base
	border-radius $border-radius_base

.border-radius_large
	border-radius $border-radius_large

.border-radius_larger
	border-radius $border-radius_larger

.border-radius_largest
	border-radius $border-radius_largest

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

.opacity_smallest
	opacity $opacity_smallest

.opacity_smaller
	opacity $opacity_smaller

.opacity_small
	opacity $opacity_small

.opacity_base
	opacity $opacity_base

.opacity_large
	opacity $opacity_large

.opacity_larger
	opacity $opacity_larger

.opacity_largest
	opacity $opacity_largest

// SHADOW
.shadow .item
	margin $margin_largest
	padding $padding_largest

.shadow_base
	box-shadow $shadow_base

// TRANSITION
.transition
	.item
		margin $margin_largest
		padding $padding_largest

		&:hover
			background-color $black
			color $white

.transition-duration_small
	transition-duration $transition-duration_small

.transition-duration_base
	transition-duration $transition-duration_base
</style>
