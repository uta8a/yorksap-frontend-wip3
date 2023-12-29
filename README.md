# yorksap-frontend-wip3
Take 3

# 本番環境

```
docker build -t yorksap-frontend-wip3 .
docker run -p 3000:3000 yorksap-frontend-wip3
```

localhost:3000 で立ち上がるので、reverse proxyを噛ませてserver側と連携できるようにしてください。
(デフォルトでlocalhost:3000へアクセスると、`failed to load` が出ますがこれはバックエンドがないので正常な挙動です)

# 開発サーバを立てる && yorksap backendと連携

1. `app/api` を `app/hoge` にrename
2. `next.config.js` を見て、以下のようにrewritesが設定されていることを確認

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*", // yorksap backendへルーティングする。 `:path*` はそこにマッチするパスをそのままsourceからdestinationに渡すという意味なので必要。
      },
    ];
  },
};

module.exports = nextConfig;
```

3. 開発サーバを立ち上げる

```sh
npm run dev
```

# 開発サーバを立てる && ハリボテJSONで開発

1. `app/hoge` を `app/api` にrename
2. `app/api` 以下のファイルを参考にしてJSONを仮で返すようにする
3. `next.config.js` を見て、以下のようにrewritesがコメントアウトされていることを確認

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:8080/api/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
```

4. 開発サーバを立ち上げる

```sh
npm run dev
```
