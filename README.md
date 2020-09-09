# nuxt-sandbox

## Build Setup

### docker セットアップ
```bash
$ docker-compose build --no-cache
```
### docker 起動
```bash
$ docker-compose up -d
```

### frontend docker コンテナにはいる
```bash
$ docker exec -it nuxt_amplify bash
```

### docker コンテナ後

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
