'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src([
      'src/js/uncompressed.js',
      'src/js/footer-map.js',
      'src/js/filter-map.js'])
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
