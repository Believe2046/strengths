# Talent Profile 个人优势画像测试

这是一个可部署到 GitHub Pages 的静态 React 测评网站模板。项目采用自建题库、自建维度和本地计分逻辑，适合本地研究、课程作业、产品原型和二次开发。

> 注意：本项目没有复制任何第三方测评网站的题库、报告文案、品牌名称或商标资源。你可以基于这个模板继续改成自己的研究版本。

## 一、功能说明

1. 首页：展示测评介绍、维度分类和开始测试入口。
2. 测试页：双陈述题、五档选择、自动进入下一题、进度条显示。
3. 结果页：展示 Top 5 优势、完整维度排序、分数条和行动建议。
4. 本地保存：使用 localStorage 保存答题进度。
5. 数据导出：支持导出 JSON 格式结果。
6. 静态部署：无需后端，可部署到 GitHub Pages、Vercel、Netlify 或本地服务器。

## 二、项目结构

```txt
.
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ .github/workflows/deploy.yml
└─ src
   ├─ main.tsx
   ├─ App.tsx
   ├─ styles.css
   ├─ components
   │  ├─ ProgressBar.tsx
   │  ├─ QuestionCard.tsx
   │  └─ TraitCard.tsx
   ├─ data
   │  ├─ questions.ts
   │  └─ traits.ts
   ├─ pages
   │  ├─ Home.tsx
   │  ├─ Exam.tsx
   │  └─ Result.tsx
   └─ utils
      └─ scoring.ts
```

## 三、本地运行

### 1. 安装 Node.js

建议使用 Node.js 20 或更高版本。

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发环境

```bash
npm run dev
```

浏览器打开终端提示的本地地址，例如：

```txt
http://localhost:5173
```

### 4. 打包

```bash
npm run build
```

打包后的静态文件会生成到：

```txt
dist/
```

### 5. 本地预览打包结果

```bash
npm run preview
```

## 四、部署到 GitHub Pages

### 1. 创建 GitHub 仓库

例如仓库名：

```txt
talent-profile-github
```

### 2. 上传项目

```bash
git init
git add .
git commit -m "init talent profile app"
git branch -M main
git remote add origin https://github.com/你的用户名/talent-profile-github.git
git push -u origin main
```

### 3. 设置 GitHub Pages

进入仓库：

```txt
Settings -> Pages
```

Build and deployment 选择：

```txt
Source: GitHub Actions
```

### 4. 等待 Actions 自动部署

项目已内置：

```txt
.github/workflows/deploy.yml
```

每次 push 到 main 分支，GitHub Actions 会自动构建并部署。

### 5. base 路径说明

当前 `vite.config.ts` 使用：

```ts
base: './'
```

这种写法适合 GitHub Pages 项目页部署。若你使用自定义域名或根路径部署，可以改成：

```ts
base: '/'
```

## 五、修改题库

题库位置：

```txt
src/data/questions.ts
```

题目格式：

```ts
{
  id: 1,
  left: '我喜欢先确定清晰目标，再集中精力推进。',
  right: '我更喜欢根据现场变化灵活调整方向。',
  leftTrait: '目标驱动',
  rightTrait: '创意联想'
}
```

`leftTrait` 和 `rightTrait` 必须对应 `src/data/traits.ts` 里的 `key`。

## 六、修改维度

维度位置：

```txt
src/data/traits.ts
```

维度格式：

```ts
{
  key: '目标驱动',
  title: '目标驱动',
  group: '执行力',
  summary: '你善于聚焦关键目标，并把愿景拆解为可执行步骤。',
  detail: '目标驱动型的人通常对结果敏感，愿意围绕重要任务持续投入。',
  advice: '给自己设置阶段性里程碑，并定期检查任务是否仍服务于核心目标。'
}
```

## 七、计分规则

计分文件：

```txt
src/utils/scoring.ts
```

默认规则：

```txt
选择 1：左侧维度 +2
选择 2：左侧维度 +1
选择 3：两侧均 +0
选择 4：右侧维度 +1
选择 5：右侧维度 +2
```

你可以按研究需求改成：

1. 1-7 档量表。
2. 每题不同权重。
3. 反向题。
4. 维度归一化。
5. 可信度检测题。
6. 完成时间过滤。

## 八、后续可扩展功能

1. 增加 60-120 道题，提升测评稳定性。
2. 增加用户基本信息表单。
3. 增加报告截图或 PDF 导出。
4. 增加 Supabase 后端保存答题记录。
5. 增加后台题库编辑器。
6. 增加移动端分享海报。
7. 增加多语言支持。

## 九、免责声明

本项目仅为测评类网站原型模板，不构成专业心理测评、职业诊断、医学判断或官方认证结果。
