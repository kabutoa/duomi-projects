const profile = {
  name: "谷优",
  role: "Web 前端工程师",
  years: "7 年",
  phone: "17854238392",
  email: "yinyun97@163.com",
  education: "青岛大学 / 本科 / CET-6",
  site: "https://51pse.com",
  summary:
    "长期负责 Free Fire 游戏活动、官网、赛事可视化与内部数据平台前端开发，擅长把复杂业务做成稳定、可扩展、性能可靠的 Web 产品。",
};

const navItems = [
  { label: "精选项目", href: "#projects" },
  { label: "项目能力", href: "#capabilities" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];

const featuredStats = [
  { value: "4", label: "核心项目案例" },
  { value: "7y", label: "前端交付经验" },
  { value: "AI", label: "RAG / Streaming Chat" },
  { value: "SSR", label: "多语言官网与 SEO" },
];

const projects = [
  {
    name: "DI Dashboard",
    tag: "数据分析平台",
    impact: "双端交付 / 微前端 / AI Log",
    description:
      "负责 DI Dashboard 数据分析平台前端开发，参与 Data Source、Dataset、Dashboard、Data Portal 等核心模块，支持 PC / Mobile 双端以及微前端接入场景。",
    stack: ["React 16", "Mobx", "TypeScript", "ECharts", "Webpack", "Ant Design", "Cypress"],
    outcomes: [
      "搭建 PC + Mobile 双端交付形态，统一 K8s + Gitlab CI/CD 构建、路由鉴权与权限控制。",
      "通过 Webpack 构建拆分、Fetch TTL 缓存、SSE 流式分片渲染改善加载与渲染性能。",
      "接入 AI Chat 与 Streaming Log，支持日志流式传输、失败重试、缓存恢复及自定义渲染。",
      "使用 VitePress + Monorepo 重构团队文档体系，并集成 RAG 问答能力用于内部知识检索。",
    ],
    href: profile.site,
    preview: "dashboard",
  },
  {
    name: "Free Fire 官网",
    tag: "全球化 SSR 内容站",
    impact: "Nuxt SSR / SEO / 多语言发布",
    description:
      "负责 Free Fire 多语言官网前端开发，基于 Nuxt 2 构建 SSR 内容平台，覆盖首页、新闻、视频、角色、宠物、地图、武器等核心模块。",
    stack: ["Nuxt.js", "Sass", "GSAP", "Leaflet", "Swiper", "Winston", "Google Analytics"],
    outcomes: [
      "落地 SSR 与 SEO 方案，支持动态表单配置页面内容。",
      "实现语言识别与区域跳转逻辑，减少多语言站点重复维护成本。",
      "通过自定义 v-lazy 图片懒加载、路由级代码分割优化首屏体验。",
    ],
    href: "https://ff.garena.com/",
    preview: "website",
  },
  {
    name: "Player Track",
    tag: "赛事数据可视化",
    impact: "地图回放 / Web Worker / 大数据量交互",
    description:
      "Free Fire 赛事数据可视化系统，支持按 Match ID 拉取比赛数据，并在地图中回放队伍与选手轨迹、击杀事件、安全区变化等内容。",
    stack: ["Vue 2", "Webpack", "Axios", "Leaflet", "Web Worker", "anime.js", "Element UI"],
    outcomes: [
      "搭建地图回放能力，支持时间轴拖拽、倍速播放、分秒跳转、缩放与全屏等交互。",
      "基于 Leaflet 渲染队伍轨迹、跳点、死亡点、安全区与毒圈等赛事数据。",
      "使用 Web Worker 处理轨迹计算与活跃点分析，避免主线程阻塞。",
    ],
    href: profile.site,
    preview: "map",
  },
  {
    name: "Magic Gashapon",
    tag: "游戏内活动页",
    impact: "活动模板 / 动效音效 / 多区域 RTL",
    description:
      "游戏内扭蛋活动页面，包含抽奖、兑换、领奖、历史记录等功能，支持多区域、多语言及 RTL 布局适配，并集成动效、音效、埋点统计与客户端交互能力。",
    stack: ["Vue 3", "Vite", "Axios", "Sass", "Howler", "anime.js", "Google Analytics"],
    outcomes: [
      "封装活动页通用开发模板，统一请求层、Hooks、Native Bridge 与 Vite 工程配置。",
      "减少同类活动初始化与联调成本，提升多区域活动页交付效率。",
      "基于 anime.js 与 Howler 实现抽奖过程中的动画与音效联动。",
    ],
    href: "https://youtu.be/YbgMCe6p2T8",
    preview: "event",
  },
];

const capabilities = [
  {
    title: "复杂前端产品",
    detail:
      "覆盖数据平台、赛事可视化、国际化内容站与高流量活动页，能处理权限、路由、状态、双端适配和跨端交互。",
    points: ["React / Vue", "TypeScript", "PC / Mobile", "Micro Frontend"],
  },
  {
    title: "工程化与性能",
    detail:
      "熟悉 Vite、Webpack、Docker、Gitlab CI/CD、K8s 构建链路，具备页面加载、构建效率和大数据量交互优化经验。",
    points: ["Webpack split", "Fetch TTL", "SSE streaming", "Web Worker"],
  },
  {
    title: "AI 与全栈实践",
    detail:
      "熟悉 Node.js Web 框架与 AI 应用开发，具备 RAG、Streaming Chat、Streaming Log、MCP 与 AI 辅助开发提效实践。",
    points: ["Node.js", "RAG", "Streaming Chat", "Cursor / Codex / MCP"],
  },
];

const experience = [
  {
    time: "2020.04 - 至今",
    company: "Garena",
    role: "Web 前端工程师",
    detail:
      "负责 Free Fire 游戏活动、官网及数据平台相关前端开发，涵盖高流量活动页、国际化站点、赛事可视化与内部数据工具等业务。",
  },
  {
    time: "2018.04 - 2019.09",
    company: "中瑞集团",
    role: "Web 前端工程师",
    detail:
      "负责 RCA 平台和跨端项目 LCRM，其中 RCA 项目曾获得青岛智慧城市奖。",
  },
];

function ProjectPreview({ type }: { type: string }) {
  if (type === "dashboard") {
    return (
      <div className="relative h-56 overflow-hidden rounded-md border border-cyan-300/20 bg-slate-950 p-4">
        <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="space-y-3">
            <div className="h-16 rounded bg-cyan-400/15 p-3">
              <div className="h-2 w-16 rounded bg-cyan-200/70" />
              <div className="mt-3 h-5 w-24 rounded bg-cyan-300/40" />
            </div>
            <div className="h-28 rounded bg-white/5 p-3">
              <div className="h-full rounded bg-[linear-gradient(135deg,rgba(34,211,238,.25),rgba(168,85,247,.08))]" />
            </div>
          </div>
          <div className="rounded bg-white/5 p-4">
            <div className="flex h-28 items-end gap-2">
              {[42, 78, 54, 96, 68, 118, 88].map((height) => (
                <div
                  key={height}
                  className="flex-1 rounded-t bg-cyan-300/60"
                  style={{ height }}
                />
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full rounded bg-white/20" />
              <div className="h-2 w-3/4 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="relative h-56 overflow-hidden rounded-md border border-lime-300/20 bg-[#07130f]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,204,22,.08)_1px,transparent_1px),linear-gradient(0deg,rgba(132,204,22,.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute left-8 top-10 h-28 w-44 rounded-full border border-lime-300/40" />
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border-2 border-rose-400/50" />
        <div className="absolute left-12 top-20 h-1 w-36 rotate-12 rounded bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,.8)]" />
        <div className="absolute left-32 top-32 h-1 w-44 -rotate-12 rounded bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)]" />
        <div className="absolute left-11 top-18 h-3 w-3 rounded-full bg-lime-200" />
        <div className="absolute bottom-16 right-20 h-3 w-3 rounded-full bg-rose-300" />
      </div>
    );
  }

  if (type === "event") {
    return (
      <div className="relative h-56 overflow-hidden rounded-md border border-fuchsia-300/20 bg-[#16051f] p-5">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-500/25 blur-2xl" />
        <div className="absolute -bottom-10 left-4 h-36 w-36 rounded-full bg-amber-300/20 blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-xs flex-col items-center justify-center rounded bg-white/8">
          <div className="h-24 w-24 rounded-full border border-amber-200/70 bg-[radial-gradient(circle,#fde68a_0,#a855f7_45%,#111827_70%)] shadow-[0_0_32px_rgba(217,70,239,.5)]" />
          <div className="mt-5 h-3 w-40 rounded bg-white/20" />
          <div className="mt-3 h-9 w-32 rounded bg-amber-300/80" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-md border border-sky-300/20 bg-[#06111f] p-4">
      <div className="h-full rounded bg-[linear-gradient(135deg,rgba(14,165,233,.35),rgba(15,23,42,.2)),linear-gradient(0deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:auto,100%_32px] p-4">
        <div className="h-6 w-40 rounded bg-white/80" />
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="h-24 rounded bg-white/20" />
          <div className="h-24 rounded bg-white/10" />
          <div className="h-24 rounded bg-white/20" />
        </div>
        <div className="mt-5 h-3 w-3/4 rounded bg-white/30" />
        <div className="mt-3 h-3 w-1/2 rounded bg-white/20" />
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,.22),transparent_34rem),radial-gradient(circle_at_90%_12%,rgba(217,70,239,.16),transparent_30rem),linear-gradient(180deg,#050816_0%,#07111f_46%,#050816_100%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#top"
            className="w-fit rounded-md font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {profile.name} / Project Lab
          </a>
          <nav aria-label="主导航">
            <ul className="flex flex-wrap gap-2 text-sm font-medium text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center rounded-md border border-transparent px-3 transition-colors hover:border-white/10 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Projects first, resume second
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              用项目讲清楚复杂前端交付能力。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(103,232,249,.24)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                进入项目展示
              </a>
              <a
                href={profile.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                访问 51pse.com
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={`#project-${index}`}
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  0{index + 1} / {project.tag}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {project.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.impact}
                </p>
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <dt className="text-sm text-slate-400">{stat.label}</dt>
              <dd className="mt-2 font-mono text-3xl font-semibold text-cyan-200">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Selected projects"
          title="项目是页面主角"
          description="重新组织后的页面把个人信息降到次级，把每个项目的业务场景、技术复杂度、结果和视觉预览放在主位，更适合面试官快速判断你的实战深度。"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              id={`project-${index}`}
              key={project.name}
              className="grid gap-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-cyan-950/30 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r lg:p-7">
                <ProjectPreview type={project.preview} />
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 lg:p-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Case 0{index + 1} / {project.tag}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-lg font-medium text-cyan-100">
                  {project.impact}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  查看项目链接
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Capability map"
          title="从项目沉淀出的能力"
          description="技能不再作为简历清单堆叠，而是围绕项目中真实出现过的复杂度组织，帮助面试交流更自然地展开。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{capability.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {capability.points.map((point) => (
                  <span key={point} className="rounded-md bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Resume compact"
          title="个人信息保持轻量"
          description="这部分只保留用于建立可信度的必要信息，把视觉和阅读焦点继续留给项目本身。"
        />
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>
            <p className="mt-2 text-cyan-200">{profile.role} / {profile.years}</p>
            <div className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              <p>{profile.education}</p>
              <p>电话：{profile.phone}</p>
              <p>邮箱：{profile.email}</p>
              <p>项目：51pse.com</p>
            </div>
          </aside>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={`${item.company}-${item.time}`} className="rounded-xl border border-white/10 bg-white/[0.06] p-6">
                <p className="font-mono text-sm font-semibold text-cyan-300">{item.time}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.company} / {item.role}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="rounded-xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,.16),rgba(217,70,239,.12))] p-6 sm:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
            如果你想聊复杂前端项目、游戏业务活动页、数据平台或 AI 工程化，我会很有话说。
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {profile.email}
            </a>
            <a
              href={profile.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              51pse.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
