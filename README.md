# gulp-template

gulp + webpack + sass の簡易的な構築環境

### インストール

必要なモジュールをインストールします。

```
$ npm install
```

### サーバー起動と監視

browserSyncによるサーバー構築、ファイルの変更を監視します。  
変更があった場合はコンパイル処理後にブラウザをリロードします。

```
$ gulp
```

### リリース用にビルド

`./build` ディレクトリ内にリリース用のファイルが生成されます。  
JS、CSS、画像は圧縮された状態で出力されます。

```
$ gulp build
```

### 追加検討中

- gulp-jade
- gulp-ejs
- gulp-sourcemaps
- gulp-frontnote
- gulp-minify-html
