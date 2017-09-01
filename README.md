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

