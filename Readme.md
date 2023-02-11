# cid-binary-resolver

## How to Run the worker

1. Deploy cid-binary-resolver to Cloudflare
1. Make a base64 string from the file.
2. `PUT` the base64 strings to **ixo-cid-binary-resolver**.
3. Image binary will converted to a data based base64 representation of the CID.

```
User => Image => base64 => cid-binary-resolver => CID
```

## Prerequisites

* Cloudflare Account
* Wrangler CLI (v2)
* Custom domain (* Cache API is not available in `*.workers.dev` domain)



========================
Copy `wrangler.example.toml` to `wrangler.toml`:

```
cp wrangler.example.toml wrangler.toml
```

Edit `wrangler.toml`.

## Usage

Develop

```
yarn dev
```

Test

```
yarn test
```

Deploy

```
yarn deploy
```

Prebuild

```
yarn build
```


## Endpoints

### `/getcid`

Body: Base64 string of image binary.

```json
{
  "body": "Base64 Text..."
}
```
### Test
1. Grab any file .
2. Upload to getcid endpoint.
```
echo '{"body" : "'"$( cat /tmp/1.jpg | base64)"'"}' | curl -XPUT -H "Content-Type: application/json" -d @-  https://cid-binary-resolver.ixo-api.workers.dev/getcid -vvv
```

## Author

Andrew Margetts <https://github.com/demondayza>

## License

MIT
