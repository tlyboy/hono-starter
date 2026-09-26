# hono-starter

🚀 Hono 模板

| 分类   | 技术栈                               |
| ------ | ------------------------------------ |
| 框架   | Hono                                 |
| 运行时 | Node.js（可迁移到 Vercel / Workers） |
| 语言   | TypeScript（ESM）                    |

## 安装

```bash
npx degit tlyboy/hono-starter my-project
cd my-project
pnpm install
```

## 使用说明

### 开发

```bash
pnpm dev
```

服务监听 `http://localhost:3000`，设置 `PORT` 环境变量可以换端口。

路由写在 `src/app.ts`，它只导出 Hono app，不用 Node.js 专属的 API；`src/node.ts` 负责在 Node.js 上启动它。保持这样的拆分，同一个 app 才能在不同平台之间迁移。

### 构建

```bash
pnpm build
pnpm start
```

### 部署到 VPS

构建后用 Node.js 24 运行 `pnpm start`，放在反向代理后面或者打包成容器都可以。

### 部署到 Vercel

在 Vercel 导入仓库即可。Vercel 会识别 `src/app.ts`，零配置部署它默认导出的 app。

### 部署到 Cloudflare Workers

```bash
pnpm add -D wrangler
```

新建 `wrangler.jsonc`：

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

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © tlyboy
