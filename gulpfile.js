const gulp = require('gulp')

pathInfo = {
  srcDir:'src',
  distDir: 'htdocs'
}

//srcからdistへの移動
//ディレクトリの作成も含む
gulp.task('move', () => {
  //ファイルの読み込み
  //完全再帰にする場合はディレクトリの深度分下記のようにかく
  //特定拡張子の場合は/*/*.scssなど
  gulp.src(pathInfo.srcDir + '/*/*')
  //パイプは単なる結合
  //destは吐き出し
      .pipe(gulp.dest(pathInfo.distDir + '/'))
})
