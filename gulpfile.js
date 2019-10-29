const gulp = require('gulp')
const stylus = require('gulp-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const rucksack = require('rucksack-css')

gulp.task('stylus', () => gulp
	.src('./src/assets/stylus/classes.styl')
	.pipe(stylus({
		use: [
			poststylus([autoprefixer, rucksack])
		]
	}))
	.pipe(gulp.dest('./dist')))

gulp.task('default', gulp.series('stylus'))
