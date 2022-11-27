[Ant Design](https://ant.design/) と [CSS Modules](https://github.com/css-modules/css-modules) / [styled-components](https://styled-components.com/) / [Emotion](https://emotion.sh/docs/introduction) の併用方法を検証するためのリポジトリです。

## 概要
Ant Design の Modal を用いて、「最大化機能」を持つモーダルを、以下の4つの方法で実装しました。公式では最大化機能は提供されてないので、Ant Designのスタイルを一部上書きしました。

* CSS Modules (Sass) 
* styled-component
* @emotion/react
* @emotion/styled

## 起動方法
1. `yarn install`
2. `yarn start`

## 動作環境
以下のバージョンで動作を確認しています。
```
$ node -v
v16.14.0

$ yarn -v
1.22.18
```