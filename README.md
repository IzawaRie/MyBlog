# 个人博客网站

一个现代化的个人博客网站，使用 Next.js 和 Tailwind CSS 构建。

## 功能特性

- 🎨 现代化设计，响应式布局
- 📱 移动端友好
- ⚡ 快速加载，SEO 优化
- 🎭 流畅的动画效果
- 📝 博客文章展示
- 💼 项目展示
- 📞 联系方式
- 🌙 支持深色模式

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Heroicons
- **字体**: Inter

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
# 或
pnpm start
```

## 项目结构

```
personal-blog/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── public/                # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── next.config.js         # Next.js 配置
└── tsconfig.json          # TypeScript 配置
```

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 自动部署完成

### Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 中导入项目
3. 构建命令: `npm run build`
4. 发布目录: `.next`

### 其他平台

项目支持部署到任何支持 Node.js 的平台。

## 自定义

### 修改个人信息

编辑 `app/page.tsx` 文件中的个人信息部分：

- 个人介绍
- 技能列表
- 联系方式
- 社交媒体链接

### 修改样式

- 编辑 `tailwind.config.js` 自定义主题
- 修改 `app/globals.css` 添加自定义样式

### 添加博客文章

在 `app/page.tsx` 中的 `blogPosts` 数组中添加新的文章数据。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！ 