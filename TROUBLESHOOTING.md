# 故障排除指南

## 常见问题

### 1. 网站显示README而不是博客

**问题**：访问 `https://izawarie.github.io/MyBlog/` 显示README文件内容

**解决方案**：
1. 确保GitHub Pages设置中选择了"GitHub Actions"作为源
2. 检查GitHub Actions是否成功运行
3. 等待几分钟让部署生效
4. 清除浏览器缓存

### 2. GitHub Actions构建失败

**问题**：Actions标签中显示构建失败

**解决方案**：
1. 检查Node.js版本（需要18或更高）
2. 确保所有依赖都正确安装
3. 查看构建日志中的具体错误信息
4. 确保代码中没有语法错误

### 3. 页面样式丢失

**问题**：页面显示但没有样式

**解决方案**：
1. 检查CSS文件是否正确加载
2. 确保Tailwind CSS配置正确
3. 检查浏览器控制台是否有错误

### 4. 图片不显示

**问题**：页面中的图片无法显示

**解决方案**：
1. 确保图片文件存在于public目录中
2. 检查图片路径是否正确
3. 对于外部图片，确保域名在next.config.js中配置

### 5. 路由不工作

**问题**：点击链接后页面无法加载

**解决方案**：
1. 确保使用了正确的相对路径
2. 检查trailingSlash配置
3. 确保所有页面都正确导出

## 调试步骤

### 1. 本地测试

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 检查out目录
ls out/
```

### 2. 检查GitHub Actions

1. 进入GitHub仓库
2. 点击"Actions"标签
3. 查看最新的工作流运行
4. 检查构建和部署步骤

### 3. 检查GitHub Pages设置

1. 进入仓库Settings
2. 找到Pages设置
3. 确认Source设置为"GitHub Actions"
4. 检查自定义域名设置（如果有）

### 4. 浏览器调试

1. 打开浏览器开发者工具
2. 检查Console标签中的错误
3. 检查Network标签中的资源加载
4. 清除缓存后重新加载

## 联系支持

如果以上步骤都无法解决问题，请：

1. 检查GitHub Issues中是否有类似问题
2. 查看Next.js官方文档
3. 在GitHub仓库中创建Issue描述问题

## 有用的链接

- [Next.js静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages文档](https://docs.github.com/en/pages)
- [GitHub Actions文档](https://docs.github.com/en/actions) 