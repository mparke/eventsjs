var gulp = require('gulp');
var bump = require('gulp-bump');

var paths = {
  json: ['./bower.json', './package.json'],
  js: ['']
};

gulp.task('bump', function(){
  gulp.src(paths.json)
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function(){
  gulp.src(paths.json)
  .pipe(bump({ type: 'minor' }))
  .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function(){
  gulp.src(paths.json)
  .pipe(bump({ type: 'major' }))
  .pipe(gulp.dest('./'));
});
