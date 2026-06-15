export type Stat = {
  label: string;
  value: string;
  note: string;
};

export type Project = {
  title: string;
  kicker: string;
  summary: string;
  stack: string[];
  ai?: string[];
  status: string;
  value: string[];
  ctaLabel: string;
  ctaHref?: string;
};

export type TimelineStep = {
  title: string;
  yearLabel: string;
  description: string;
};

export type StackGroup = {
  category: string;
  items: string[];
};

export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
};

export const navItems = [
  { label: "项目矩阵", href: "#projects" },
  { label: "生态路线", href: "#ecosystem" },
  { label: "技术栈", href: "#stack" },
  { label: "问题场景", href: "#cases" },
];

export const stats: Stat[] = [
  {
    label: "Projects",
    value: "04",
    note: "覆盖排班分组、微信端、视频分析、CV 模型",
  },
  {
    label: "Production Demos",
    value: "02",
    note: "Player Grouping 与 Visual Coach 已具备线上演示能力",
  },
  {
    label: "Mini Program",
    value: "MVP",
    note: "批量导入、静默登录、个人中心已完成",
  },
  {
    label: "Defense Model F1",
    value: "0.775",
    note: "PyTorch R(2+1)D v3 最佳表现",
  },
];

export const projects: Project[] = [
  {
    title: "Player Grouping",
    kicker: "Roster Ops / Production",
    summary:
      "篮球球员分组工具，面向 roster management、均衡组队与日常运营辅助。",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase PostgreSQL",
      "Vercel",
    ],
    ai: ["AI chat", "Function Calling", "BraveSearch"],
    status: "Online / production-ready",
    value: [
      "快速完成均衡分组与阵容分配",
      "支持 AI 辅助运营问答与流程处理",
      "为球队管理建立可扩展的数据入口",
    ],
    ctaLabel: "查看项目记录",
  },
  {
    title: "Basketball 微信小程序",
    kicker: "Mobile Workflow / MVP",
    summary:
      "原生微信小程序，聚焦移动端篮球球队与球员工作流，适配碎片化使用场景。",
    stack: ["WXML", "WXSS", "JavaScript", "WeChat CloudBase Free Tier"],
    status: "MVP complete",
    value: [
      "支持批量导入，降低建队初始化成本",
      "静默登录减少首次使用阻力",
      "个人中心打通移动端球员资料管理",
    ],
    ctaLabel: "待补链接",
  },
  {
    title: "Visual Coach",
    kicker: "AI Video / Live",
    summary:
      "篮球视频分析工具，结合 AI 视频理解与教练反馈，缩短从录像到建议的路径。",
    stack: [
      "Hono",
      "TypeScript",
      "Doubao API",
      "TOS",
      "EdgeOne Pages",
    ],
    status: "Online",
    value: [
      "上传视频后生成 AI 辅助解读",
      "支持更快整理训练反馈与复盘要点",
      "验证 AI + 视频工作流的产品方向",
    ],
    ctaLabel: "打开在线 Demo",
    ctaHref: "https://visual-coach-tn4f1e9grkbq.edgeone.cool",
  },
  {
    title: "Basketball Defense Analysis",
    kicker: "Computer Vision / Research",
    summary:
      "篮球防守动作识别与视频分析模型，作为防守分类研究方向的核心实验资产。",
    stack: ["PyTorch", "R(2+1)D", "Video Classification"],
    status: "Model v3 best E3 77.5% / F1=0.775",
    value: [
      "聚焦防守动作分类与理解",
      "为更强的视频教练工具提供研究底座",
      "验证从产品到模型再回流产品的闭环",
    ],
    ctaLabel: "研究记录整理中",
  },
];

export const timeline: TimelineStep[] = [
  {
    yearLabel: "01",
    title: "Grouping",
    description:
      "先从球队运营切入，用 Player Grouping 解决组队、平衡、数据录入的高频问题。",
  },
  {
    yearLabel: "02",
    title: "Mini Program",
    description:
      "把运营动作带到微信端，让导入、登录、个人管理在手机场景里更顺手。",
  },
  {
    yearLabel: "03",
    title: "Visual Coaching",
    description:
      "把视频理解能力接入产品层，向 AI 辅助教练与训练反馈迈进一步。",
  },
  {
    yearLabel: "04",
    title: "Defense Model",
    description:
      "继续向底层模型深入，用防守识别研究支撑更精细的视频分析与反馈系统。",
  },
];

export const stackGroups: StackGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "WXML / WXSS",
    ],
  },
  {
    category: "Backend / Infra",
    items: ["Supabase PostgreSQL", "Vercel", "Hono", "WeChat CloudBase", "TOS"],
  },
  {
    category: "AI / Search",
    items: ["AI chat", "Function Calling", "BraveSearch", "Doubao API"],
  },
  {
    category: "Modeling",
    items: ["PyTorch", "R(2+1)D", "Defense Action Recognition"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    problem: "临时组局、训练分队、内部对抗经常依赖人工拍脑袋分组。",
    approach:
      "Player Grouping 把 roster 数据、分组规则与 AI 辅助问答整合进一个线上工具。",
    outcome:
      "运营效率更稳，队伍更均衡，也为后续功能沉淀了统一数据入口。",
  },
  {
    problem: "篮球团队管理很多动作发生在手机里，桌面工具触达效率有限。",
    approach:
      "微信小程序用原生栈和 CloudBase 先把导入、登录、个人中心这些 MVP 环节跑通。",
    outcome:
      "证明 mobile-first 流程成立，后续可以继续承接通知、报名、数据查看等轻量动作。",
  },
  {
    problem: "录像复盘信息量大，教练与球员需要更短的理解路径。",
    approach:
      "Visual Coach 将视频上传、AI 理解与反馈输出连接起来，形成可直接体验的 Demo。",
    outcome:
      "验证 AI 视频产品方向，同时为未来更深的模型能力留出接入口。",
  },
  {
    problem: "通用 AI 难以直接替代专门的篮球防守识别能力。",
    approach:
      "Defense Analysis 用 PyTorch R(2+1)D 做垂直场景建模，推进防守动作分类精度。",
    outcome:
      "v3 在 E3 达到 77.5%，F1=0.775，具备继续深化到产品的研究价值。",
  },
];
