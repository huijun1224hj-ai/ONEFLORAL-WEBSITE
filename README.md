# One Floral 花束 Website

这是一个可以直接上传 GitHub / Netlify 的静态网站。

## 怎样上新作品
1. 把新的照片放进 `assets` 文件夹。
2. 打开 `data.js`。
3. 在 `PRODUCTS` 里面复制一个产品区块，改：
   - `titleCN`
   - `titleEN`
   - `category`
   - `image`
4. 保存后上传 GitHub，Netlify 会自动更新。

## Netlify 使用方法
1. 登录 Netlify。
2. Add new site → Deploy manually。
3. 把整个 `one-floral-website` 文件夹拖进去。
4. 完成后会得到一个网站链接。

## GitHub + Netlify
1. 新建 GitHub repository。
2. 上传所有文件。
3. Netlify 选择 Import from Git。
4. Build command 留空，Publish directory 填：`.`
