# [baconbao.github.io](https://baconbao.github.io)

## Setup

```
$ cd <project>
$ npm install --save
```

## Commands and Flows

### Launch dev

```
(Linwx)
$ NODE_OPTIONS=--openssl-legacy-provider && npm run dev
(Windows on CMD)
$ set NODE_OPTIONS=--openssl-legacy-provider && npm run dev
```

Then browsing `localhost:3000`.

### Export static HTML files

```
$ npm run build && npm run export
```

The exported site will be placed on `out` folder.

### Deploy to 'gh-pages' branch

```
$ npm run deploy
```

(Note) The command will re-build and re-export the HTML files.

## Author

BaconBao
