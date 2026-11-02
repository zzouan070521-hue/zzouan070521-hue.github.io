# Fiona Zou 个人主页

这是一份根据 ZOU Zhiyan (Fiona) 的简历与个人照片制作的静态个人主页。以英文为默认语言，支持简体中文切换，并适配电脑与手机。

## 内容

- 个人介绍、照片与简历下载
- Experience 作为个人介绍后的首个栏目，合并两段金融实践与三项学生组织、社群经历
- 每项经历以时间、机构 Logo、职位与说明排列；HKUST 两项经历统一使用 HKUST Logo
- 教育背景与课程
- 拓普集团股票投资推介、759 阿信屋与溢达集团研究、FinFirst HK 商业案例
- 技能与联系方式

## 本地查看

解压交付的压缩包，双击 `index.html` 即可查看，无需安装依赖。保持 `assets` 文件夹、`styles.css`、`script.js` 与 `index.html` 的相对位置不变。

也可以在解压目录中运行 `python3 -m http.server 8000`，然后在浏览器打开 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 登录你希望使用的 GitHub 账号。如果尚未注册账号，请先在 GitHub 官网自行完成注册与邮箱验证。
2. 创建一个公开仓库，名称为 `你的GitHub用户名.github.io`。这里的“你的GitHub用户名”需要替换成真实用户名，并使用小写字母；它不是页面上显示的姓名。
3. 将压缩包内的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹以及 `.nojekyll` 上传到仓库根目录，提交到 `main` 分支。不要再套一层同名文件夹。
4. 进入仓库 **Settings → Pages**。在 **Build and deployment → Source** 中选择 **Deploy from a branch**，分支选择 `main`，文件夹选择 `/(root)`，保存。
5. 等待 GitHub 完成部署后，在该页面点击 **Visit site** 查看正式地址。

部署说明参考：[GitHub Pages 快速入门](https://docs.github.com/en/pages/quickstart)与[创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

## 后续修改

| 需要修改的内容 | 文件 |
| --- | --- |
| 英文介绍、经历、项目与日期 | `index.html` |
| 中文内容、语言切换与邮箱复制 | `script.js` 中的 `zh` 对象及相关逻辑 |
| 配色、字体、间距与响应式布局 | `styles.css` |
| 个人照片 | `assets/portrait.webp` |
| 可下载简历 | `assets/ZOU_Zhiyan_CV.docx` |

修改邮箱时，需要同时修改 `index.html` 的邮箱文字及 `mailto:` 链接，以及 `script.js` 的 `email` 值。

可下载的简历已按你的批注更新：港科大学业时间为 2025–2029，中学学业时间为 2019–2025，并删除 GPA；保留了原文件中的联系方式。网页展示内容来自这份简历；目前没有添加尚未提供的论文、GitHub 项目链接或 LinkedIn 地址。

## 技术说明

纯 HTML / CSS / JavaScript，无需构建、API 密钥、数据库或第三方字体。所有图片和简历都随页面一并提供。页面使用相对资源路径，也可放入 GitHub Pages 的项目子目录。

源码项目中的 `.openai/hosting.json` 用于当前预览站点；交付的 GitHub Pages 压缩包不包含该配置。压缩包内容已将源码中的 `dist/` 展开到根目录，可直接上传。

## 机构 Logo 来源

- HKMUAA：中国港澳同学会 Logo 使用用户提供的图片。
- HKUST：使用[香港科技大学品牌资产部](https://brand.hkust.edu.hk/)官网的 HKUST Logo。
- 中国建设银行：使用[中国建设银行官网](https://www.ccb.com/cn/home/indexv3.html)的标识图片。
- Sinotrans：使用[中国外运官方形象规范](https://logistics.sinotrans.com/col/col6917/index.html)中的中国外运标识。

所有 Logo 均作为本地静态资源随网站提供。未填写起止日期的社群和校园职务不显示日期。
