// Dependencies
import gulp from 'gulp';
import shell from 'gulp-shell';
import ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';

const PATHS = {
  server: './src',
  tsconfig: './tsconfig.json',
  outputDir: 'build'
}

gulp.task('server:ts', (done) => {
  const tsProject = ts.createProject(PATHS.tsconfig);
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest(PATHS.outputDir))
    .on('error', (error) => done(error))
    .on('end', () => done());
});

gulp.task('server:watch', (done) => {
  const stream = nodemon({
    script: 'build/index.js',
    env: { NODE_ENV: 'development' },
    ext: 'ts',
    watch: PATHS.server,
    tasks: ['server:ts'],
    stdout: true,
  });
  return stream.on('quit', function () {
    done();
  });
});

gulp.task('server:build:clean', shell.task('rm -rf build'))
gulp.task('server:build', gulp.series('server:build:clean', 'server:ts'));
gulp.task('server:dev', gulp.series('server:build:clean', 'server:ts', 'server:watch'));
