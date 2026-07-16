# OROX 官网原型

这是一个纯静态、响应式的品牌官网原型，无需安装依赖或执行构建命令。

## 本地预览

在项目目录执行：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## Cloudflare Pages 部署

### GitHub 自动部署

1. 将本目录上传到一个 GitHub 仓库。
2. 登录 Cloudflare，进入 **Workers & Pages**。
3. 选择 **Create application → Pages → Connect to Git**。
4. 选择仓库，构建设置填写：
   - Framework preset：`None`
   - Build command：留空
   - Build output directory：`/`
5. 部署完成后，在 **Custom domains** 中绑定正式域名。

### 直接上传

在 Cloudflare Pages 选择 **Upload assets**，上传整个目录即可。

## 上线前需要修改

- 将 `assets/` 中的临时参考图片替换为 OROX 自有版权产品图。
- 将页脚的 `hello@orox.example` 改为真实联系邮箱。
- 按真实产品参数校正文案和性能数据。
