# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 开发命令

- **开发服务器**: `npm run dev` (启动 Vite 开发服务器)
- **构建**: `npm run build` (构建生产版本)
- **代码检查**: `npm run lint` (对所有文件运行 ESLint)
- **预览**: `npm run preview` (预览生产构建版本)

## 项目架构

这是一个 React + TypeScript 投资计算器网页应用，帮助用户使用戴夫·拉姆西的复利原理计算每月投资金额。

### 技术栈
- **前端**: React 18 with TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS with PostCSS
- **路由**: React Router DOM
- **图表**: Chart.js with react-chartjs-2
- **动画**: Framer Motion
- **图标**: Lucide React

### 应用结构

**核心页面/路由:**
- `/` - 首页，包含营销内容和主要板块
- `/tool` - 投资计算器工具页面，提供滑块供用户输入
- `/result` - 结果页面，显示计算出的每月投资金额和预测

**附加内容页面:**
- `/guide/*` - 教育内容页面 (复利、投资基础、退休规划、应急基金)
- `/dave-ramsey/*` - 戴夫·拉姆西专门内容 (婴儿步骤、12%规则)

**组件组织:**
- `src/pages/` - 主要页面组件 (LandingPage, ToolPage, ResultPage)
- `src/pages/guide/` - 教育指南页面
- `src/pages/dave-ramsey/` - 戴夫·拉姆西专门内容页面
- `src/components/` - 可复用组件 (CalculatorPage)
- `src/App.tsx` - 主应用组件，包含路由
- `src/main.tsx` - 应用入口点

### 核心功能

**投资计算器:**
- 反向工程目标财务目标，确定所需的每月投资
- 使用复利公式和可自定义参数:
  - 目标金额 ($10K - $2M)
  - 当前储蓄 ($0 - $500K)
  - 年回报率 (6% - 15%，默认12%，依据戴夫·拉姆西建议)
  - 时间跨度 (1 - 50 年)

**数据流:**
1. 用户在 ToolPage 通过交互式滑块输入参数
2. 参数通过 URL 搜索参数传递给 ResultPage
3. ResultPage 使用复利公式计算每月投资
4. 交互式 Chart.js 可视化显示财富随时间增长

**计算逻辑:**
- 每月付款计算: `PMT = FV - PV(1+r)^n / [((1+r)^n - 1) / r]`
- 当前储蓄的未来价值: `FV = PV(1+r)^n`
- 按年生成图表，显示投资组合增长

### 内容策略

应用针对 SEO 进行了大量优化，包含戴夫·拉姆西相关关键词和关于投资原理、复利和财富积累的教育内容。内容强调实用的财务建议，面向搜索投资计算器和退休规划工具的用户。

### 样式模式

- 渐变背景 (靛蓝/紫色主题)
- 圆角 (xl, 2xl, 3xl 变体)
- 阴影效果增加深度
- 悬停动画和变换
- 响应式设计，移动优先方法
- JSX 样式块中的自定义滑块样式

## 项目更新日志

### 2025-07-11 - 内容翻译和优化 (Claude Code)

**已完成的重大更改:**

1. **导航系统全面英文化**
   - 将所有中文导航菜单项翻译为英文
   - "学习指南" → "Learning Guides"
   - "复利计算器详解" → "Compound Interest Guide"
   - "投资基础入门" → "Investment Basics"
   - "退休规划指南" → "Retirement Planning"
   - "应急基金建立" → "Emergency Fund Guide"
   - "戴夫·拉姆西七步法" → "Dave's 7 Baby Steps"
   - "12%回报率解析" → "The 12% Rule Explained"

2. **首页内容优化**
   - 修复了LandingPage.tsx中的中英混合内容问题
   - 移除了导航栏和移动菜单中的所有中文文本
   - 保持了原有的UI交互功能和响应式设计

3. **复利指南页面重写**
   - 完全重写了CompoundInterestGuide.tsx
   - 将全部中文内容翻译为自然流畅的英文
   - 移除了AI生成的机械化表达
   - 改进了SEO优化，避免关键词堆砌
   - 增加了实际案例和真实场景示例
   - 优化了内容结构，提高了可读性

4. **技术修复**
   - 清理了未使用的导入项，解决了ESLint错误
   - 确保项目构建成功无报错
   - 保持了所有现有功能和样式

**内容质量改进:**
- 移除了重复的关键词填充
- 改善了内容的自然度和可读性
- 增加了实用的投资建议和真实案例
- 优化了面向海外用户的内容本地化

**仍需完成的任务:**
- InvestmentBasics.tsx 翻译
- RetirementPlanning.tsx 翻译
- EmergencyFund.tsx 翻译
- BabySteps.tsx 翻译
- TwelvePercentRule.tsx 翻译
- HTML meta标签英文化
- 进一步优化AI生成内容的自然度

**技术状态:**
- 构建状态: ✅ 成功
- ESLint: ✅ 通过 (已修复导入问题)
- 功能测试: ✅ 所有导航和交互正常工作

这次更新显著提升了应用面向海外用户的可用性，移除了AI生成内容的机械感，并为后续的完整翻译工作奠定了基础。

### 2025-07-11 更新 - 投资基础指南翻译完成

**新增完成内容:**
- 完全翻译了InvestmentBasics.tsx页面
- 将"投资基础入门"重写为"Investment Basics for Beginners"
- 移除了AI生成的重复内容，改为自然的投资教育内容
- 增加了实用的投资类型解释和入门步骤
- 整合了Dave Ramsey的投资理念和方法

**当前翻译状态:**
- ✅ 导航系统 - 100%完成
- ✅ 首页内容 - 100%完成  
- ✅ 复利指南页面 - 100%完成
- ✅ 投资基础指南 - 100%完成
- ⏳ 退休规划指南 - 待翻译
- ⏳ 应急基金指南 - 待翻译
- ⏳ Dave Ramsey婴儿步骤 - 待翻译
- ⏳ 12%规则页面 - 待翻译

**技术状态:**
- 构建状态: ✅ 成功 (无错误)
- 文件大小: 616KB (JS) + 33KB (CSS)
- 功能完整性: ✅ 所有翻译页面正常工作