# hono-starter

🚀 Hono starter

| Category  | Stack                                  |
| --------- | -------------------------------------- |
| Framework | Hono                                   |
| Runtime   | Node.js (portable to Vercel / Workers) |
| Language  | TypeScript (ESM)                       |

## Install

```bash
npx degit tlyboy/hono-starter my-project
cd my-project
pnpm install
```

## Usage

### Development

```bash
pnpm dev
```

The server listens on `http://localhost:3000`. Set `PORT` to use another port.

Routes live in `src/app.ts`, which only exports the Hono app and avoids Node.js-specific APIs. `src/node.ts` starts it on Node.js. Keep this split so the same app can move between platforms.

### Build

```bash
pnpm build
pnpm start
```

### Deploy to a VPS

Build and run `pnpm start` with Node.js 24, for example behind a reverse proxy or in a container.

### Deploy to Vercel

Import the repository in Vercel. It detects `src/app.ts` and deploys the default export with zero configuration.

### Deploy to Cloudflare Workers

```bash
pnpm add -D wrangler
```

Create `wrangler.jsonc`:

```jsonc
{
  "name": "hono-starter",
  "main": "src/app.ts",
  "compatibility_date": "2026-09-25",
}
```

```bash
pnpm wrangler dev
pnpm wrangler deploy
```

## License

[MIT](https://opensource.org/licenses/MIT) © tlyboy
