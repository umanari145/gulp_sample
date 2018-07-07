const gulp = require('gulp')
const del = require('del')
const runSequence = require( 'run-sequence' ),

pathInfo = {
  srcDir:'src',
  distDir: 'htdocs'
}


//srcからdistへの移動
//ディレクトリの作成も含む
gulp.task('move', function() {
  console.log('--task move--')
  //ファイルの読み込み
  //完全再帰にする場合は下記のようにかく
  //特定拡張子の場合は/*/*.scssなど
  gulp.src(pathInfo.srcDir + '/**/*')
  //パイプは単なる結合
  //destは吐き出し
      .pipe(gulp.dest(pathInfo.distDir + '/'))
})

/**
 * 生成ファイルの削除(一番最初に行う)
 */
gulp.task('clean', function(){
  console.log('--task clear--')
  del([
    pathInfo.distDir
  ])
})

/**
 * defaultでは全処理を実装
 */
gulp.task('default', function(){
    //ブランチ２つを両方生かす
    console.log('--total task clean move --')
    console.log('--sample branch git command --')
  runSequence(
    'clean','move'
  )
})
