let preprocessor = 'sass';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');


function browsersync() {
	browserSync.init({ 
		server: { baseDir: 'app/' },
		notify: false,
		online: true 
	})
}

function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.min.js',
		'app/libs/fullpage/fullpage.js',
		'app/js/app.js',
		])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js/'))
	.pipe(browserSync.stream())
}

function styles() {
	return src('app/' + preprocessor + '/main.' + preprocessor + '') 
	.pipe(eval(preprocessor)())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream())
}

function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/js/**/*.min.js',
		'app/**/*.html',
	], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
		.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.build = series(styles, scripts, buildcopy);
exports.default = parallel(styles, scripts, browsersync, startwatch);

function startwatch() {
 
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/' + preprocessor + '/**/*', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
 
}