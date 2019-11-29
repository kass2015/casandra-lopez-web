(() => {

	'use strict';

	/**************** gulpfile.js configuration ****************/

	const

		// development or production
		devBuild  = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

		// directory locations
		dir = {
		src         : 'src/',
		build       : 'public/'
		},

		// modules
		gulp          = require('gulp'),
		noop          = require('gulp-noop'),
		newer         = require('gulp-newer'),
		size          = require('gulp-size'),
		imagemin      = require('gulp-imagemin'),
		sass          = require('gulp-sass'),
		postcss       = require('gulp-postcss'),
		sourcemaps    = devBuild ? require('gulp-sourcemaps') : null,
		browsersync   = devBuild ? require('browser-sync').create() : null;

		console.log('Gulp', devBuild ? 'development' : 'production', 'build');

	/**************** images task ****************/

	const imgConfig = {
		src           : dir.src + 'img/**/*',
		build         : dir.build + 'img/',

		minOpts: {
			optimizationLevel: 5
		}
	};

	gulp.task('images', () =>
		gulp.src(imgConfig.src)
			.pipe(newer(imgConfig.build))
			.pipe(imagemin(imgConfig.minOpts))
			.pipe(size({ showFiles:true }))
			.pipe(gulp.dest(imgConfig.build))
	);

/**************** CSS task ****************/

const cssConfig = {

    src         : dir.src + 'scss/style.scss',
    watch       : dir.src + 'scss/**/*',
    build       : dir.build + 'css/',
    sassOpts: {
		sourceMap       : devBuild,
		outputStyle     : 'nested',
		imagePath       : '/img/',
		precision       : 3,
		errLogToConsole : true
    },

    postCSS: [
      require('postcss-assets')({
        loadPaths: ['img/'],
        basePath: dir.build
      }),
      require('autoprefixer')({
        browsers: ['> 1%']
      })
    ]

  };

  // remove unused selectors and minify production CSS
  if (!devBuild) {

    cssConfig.postCSS.push(
      require('usedcss')({ html: ['index.html'] }),
      require('cssnano')
    );

  }

  gulp.task('css', () =>
    gulp.src(cssConfig.src)
      .pipe(sourcemaps ? sourcemaps.init() : noop())
      .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
      .pipe(postcss(cssConfig.postCSS))
      .pipe(sourcemaps ? sourcemaps.write() : noop())
      .pipe(size({ showFiles:true }))
      .pipe(gulp.dest(cssConfig.build))
      .pipe(browsersync ? browsersync.reload({ stream: true }) : noop())
  );

  gulp.task('watch', () => {
    return gulp.watch('src/scss/**/*.scss', gulp.series('css'));
});


})();
