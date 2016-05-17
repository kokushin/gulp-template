# gulp-template

- EJS、SASS(SCSS)のコンパイル
- BabelによるES6のトランスパイル
- ブラウザのオートリロード
- CSSのベンダープレフィックス補完
- CSS、JS、画像の圧縮

### インストール

必要なモジュールをインストールします。

```
$ npm install
```

※テスト用にjQUery1.11.3、bxSlider 最新版がインストールされます。  
不要な場合はpackage.jsonから削除してください。

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

- gulp-sourcemaps
- gulp-frontnote
- gulp-minify-html
