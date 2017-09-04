# webpack-playground
웹팩 기본 개념 이해하기

## yarn 설치
brew install yarn

## webpack 설치
yarn add --dev webpack

## hello would 생성하기
app/hello.js
app/world.js
app/entry.js

## 번들링 스크립트 추가하기
package.json
"scripts": { "build": "webpack entry.js bundle.js" }

## yarn으로 빌드하기
yarn build

## 생성된 작업 확인하기
index.html

## webpack option 지정하기
webpack.config.js
module.exports = {
  entry: {
    'entry': './app/entry.js'
  },
  output: {
    filename: 'bundle.js'
  }
};

package.json
"build": "webpack"

## css module 설치
css loader 설치
yarn add --dev style-loader css-loader

설정파일에 module 추가
module: {
    rules: [
      {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      }
    ]
  }

## css추가하기
app/text.css
app/common.css

app/entry.js <= require('./common.css');

<head>영역에 <style>요소로 추가된다.

##ES2015 babel 설치하기
yarn add --dev babel-loader babel-core babel-preset-env
webpack.conf <= {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ]]
        }
      }

##ES2015 추가하기
app/hello2015.js
app/world2015.js
app/entry2015.js

##Eslint 추가
yarn add --dev eslint
yarn add --dev eslint-loader

npm install -g eslint

eslint --init

vi .eslintrc.js
module.exports = {
    "extends": "airbnb-base",
     "plugins": [
        "import"
    ],
    "env": {
      "browser": true
    }
};

## 출처
https://hyunseob.github.io/2017/03/21/webpack2-beginners-guide/
