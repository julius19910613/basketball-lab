# Basketball Lab

`Basketball Lab` 是一个基于 `Vite + React + TypeScript` 的单页展示站，用来呈现 Julius 的篮球产品、AI 视频分析与防守识别研究生态。

## 项目内容

- `Player Grouping`：线上可用的篮球球员分组工具，强调 roster management、均衡组队与 AI 辅助运营。
- `Basketball 微信小程序`：原生微信小程序 MVP，已完成批量导入、静默登录、个人中心。
- `Visual Coach`：在线篮球视频分析工具，地址为 `https://visual-coach-tn4f1e9grkbq.edgeone.cool`。
- `Basketball Defense Analysis`：基于 `PyTorch R(2+1)D` 的防守动作识别研究，`v3 best E3 77.5% / F1=0.775`。

## 本地开发

```bash
npm install
npm run dev
```

默认本地地址通常为 `http://localhost:5173/`。生产部署到 GitHub Pages 后会使用 `/basketball-lab/` 子路径。

## 类型检查与构建

```bash
npm run typecheck
npm run build
npm run preview
```

构建产物输出到 `dist/`，适合直接部署到 GitHub Pages。

## GitHub Pages

- 仓库 Pages 子路径已配置为 `/basketball-lab/`，见 [`vite.config.ts`](./vite.config.ts)。
- 自动部署工作流位于 [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml)。
- 工作流使用官方 Actions：
  - `actions/checkout@v4`
  - `actions/setup-node@v4`
  - `actions/configure-pages@v5`
  - `actions/upload-pages-artifact@v3`
  - `actions/deploy-pages@v4`
- 已加入 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`，规避旧版 Node runtime 弃用问题。

## 目录说明

- `src/App.tsx`：单页内容结构与各版块。
- `src/data/siteContent.ts`：项目、指标、技术栈、案例文案数据。
- `src/styles.css`：Energetic 设计系统落地样式，包含 4px 边框、篮球橙配色、响应式布局与可访问焦点态。

## 注意事项

- 没有接入任何外部运行时 API，也没有放置任何密钥或敏感配置。
- `Player Grouping` 与 GitHub profile 的公开链接目前未知，因此页面使用中性 CTA 文案占位，避免虚构地址。
