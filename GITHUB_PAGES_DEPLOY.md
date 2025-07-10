# GitHub Pages 部署指南

## 问题说明

您的Next.js博客应用无法在GitHub Pages上正常显示，这是因为：

1. **GitHub Pages只支持静态文件**：GitHub Pages只能托管静态HTML、CSS、JavaScript文件
2. **Next.js需要服务器环境**：Next.js应用通常需要Node.js服务器来运行
3. **当前显示README**：GitHub Pages找不到入口文件，所以显示了README.md

## 解决方案

我已经为您的项目配置了静态导出功能，这样Next.js应用就可以在GitHub Pages上正常运行。

### 已完成的配置

1. **修改了 `next.config.js`**：
   - 添加了 `output: 'export'` 用于静态导出
   - 添加了 `trailingSlash: true` 确保URL正确
   - 设置 `images.unoptimized: true` 兼容静态导出

2. **创建了GitHub Actions工作流**：
   - 文件位置：`.github/workflows/deploy.yml`
   - 自动构建和部署到GitHub Pages

### 部署步骤

1. **推送代码到GitHub**：
   ```bash
   git add .
   git commit -m "配置GitHub Pages部署"
   git push origin main
   ```

2. **配置GitHub Pages**：
   - 进入您的GitHub仓库
   - 点击 "Settings" 标签
   - 在左侧菜单找到 "Pages"
   - 在 "Source" 部分选择 "GitHub Actions"

3. **等待自动部署**：
   - GitHub Actions会自动构建您的应用
   - 构建完成后会自动部署到GitHub Pages
   - 您可以在 "Actions" 标签中查看部署进度

### 验证部署

部署完成后，访问 `https://izawarie.github.io/MyBlog/` 应该能看到您的博客网站，而不是README文件。

### 本地测试

您可以在本地测试静态导出：

```bash
# 构建静态文件
npm run build

# 查看out目录中的静态文件
ls out/
```

### 注意事项

1. **图片优化**：由于静态导出的限制，图片优化功能被禁用
2. **动态功能**：一些需要服务器的功能（如API路由）在静态导出中不可用
3. **路由**：所有页面都会生成对应的HTML文件

### 故障排除

如果部署后仍然显示README：

1. 检查GitHub Actions是否成功运行
2. 确认GitHub Pages设置中选择了"GitHub Actions"作为源
3. 等待几分钟让部署生效
4. 清除浏览器缓存后重新访问

### 更新网站

每次推送代码到main分支时，GitHub Actions都会自动重新构建和部署您的网站。 