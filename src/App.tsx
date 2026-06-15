import {
  caseStudies,
  navItems,
  projects,
  stackGroups,
  stats,
  timeline,
} from "./data/siteContent";

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <header className="topbar">
        <nav className="nav frame" aria-label="主导航">
          <a className="brand" href="#hero">
            <span className="brand-mark" aria-hidden="true">
              BL
            </span>
            <span className="brand-copy">
              <strong>Basketball Lab</strong>
              <span>Basketball x AI x Product Systems</span>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section" id="hero">
          <div className="hero-grid">
            <div className="hero-copy frame">
              <p className="eyebrow">JULIUS PROJECT ECOSYSTEM</p>
              <h1>Basketball Lab</h1>
              <p className="lead">
                为篮球产品、AI 视频分析与球队工作流搭建一条从运营工具到视觉模型的实验链路。
              </p>
              <p className="hero-text">
                这里不是模板站，而是一组正在成型的篮球产品试验场：分组管理、小程序流程、视频教练与防守识别模型相互连接，指向同一个方向。
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  查看项目矩阵
                </a>
                <a className="button button-secondary" href="#ecosystem">
                  理解生态路线
                </a>
              </div>
            </div>

            <aside className="hero-panel frame" aria-label="核心信号">
              <div className="panel-header">
                <span className="panel-dot" aria-hidden="true"></span>
                <span>Lab Signal</span>
              </div>

              <div className="signal-list">
                <div>
                  <strong>Production demos running</strong>
                  <span>线上产品与在线 demo 已能直接展示能力路径。</span>
                </div>
                <div>
                  <strong>AI video loop in motion</strong>
                  <span>从 Visual Coach 到 Defense Model，产品与模型双向推进。</span>
                </div>
                <div>
                  <strong>Mobile workflow validated</strong>
                  <span>微信小程序 MVP 已覆盖导入、登录与个人管理。</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" aria-labelledby="metrics-heading">
          <div className="section-heading">
            <p className="eyebrow">SIGNAL METRICS</p>
            <h2 id="metrics-heading">四条产品与研究信号</h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card frame" key={stat.label}>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-note">{stat.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">PROJECT MATRIX</p>
            <h2 id="projects-heading">项目矩阵</h2>
            <p>
              四个项目分别对应球队管理、移动端工作流、AI 视频分析与计算机视觉研究。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const ctaProps = project.ctaHref
                ? { href: project.ctaHref, target: "_blank", rel: "noreferrer" }
                : { href: "#footer" };

              return (
                <article className="project-card frame" key={project.title}>
                  <div className="project-head">
                    <p className="eyebrow">{project.kicker}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>

                  <div className="project-meta">
                    <div>
                      <h4>Stack</h4>
                      <ul className="chip-list" aria-label={`${project.title} 技术栈`}>
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {project.ai ? (
                      <div>
                        <h4>AI</h4>
                        <ul className="chip-list" aria-label={`${project.title} AI 能力`}>
                          {project.ai.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="project-bottom">
                    <p className="status-line">
                      <span>Status</span>
                      <strong>{project.status}</strong>
                    </p>
                    <ul className="value-list">
                      {project.value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a className="button button-secondary project-link" {...ctaProps}>
                      {project.ctaLabel}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="ecosystem" aria-labelledby="ecosystem-heading">
          <div className="section-heading">
            <p className="eyebrow">ECOSYSTEM ROUTE</p>
            <h2 id="ecosystem-heading">从分组工具到模型研究的连接路径</h2>
            <p>每个项目不是孤立作品，而是在同一个篮球产品实验室里逐步扩张。</p>
          </div>

          <ol className="timeline" aria-label="Basketball Lab 生态路线">
            {timeline.map((step) => (
              <li className="timeline-step frame" key={step.title}>
                <span className="timeline-index">{step.yearLabel}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-heading">
          <div className="section-heading">
            <p className="eyebrow">STACK MATRIX</p>
            <h2 id="stack-heading">技术栈矩阵</h2>
            <p>产品、移动、AI 与模型方向采用不同层次的技术组合，但目标统一。</p>
          </div>

          <div className="stack-matrix frame">
            {stackGroups.map((group) => (
              <section className="stack-row" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="chip-list" aria-label={`${group.category} 技术项`}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="section" id="cases" aria-labelledby="cases-heading">
          <div className="section-heading">
            <p className="eyebrow">CASE STUDIES</p>
            <h2 id="cases-heading">解决了哪些真实问题</h2>
            <p>这些项目都从具体摩擦点出发，而不是为了堆技术而堆技术。</p>
          </div>

          <div className="case-grid">
            {caseStudies.map((caseStudy) => (
              <article className="case-card frame" key={caseStudy.problem}>
                <h3>{caseStudy.problem}</h3>
                <p>
                  <strong>Approach:</strong> {caseStudy.approach}
                </p>
                <p>
                  <strong>Outcome:</strong> {caseStudy.outcome}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section" id="footer">
        <div className="footer-card frame">
          <div>
            <p className="eyebrow">NEXT PLAY</p>
            <h2>继续扩展 Basketball Lab</h2>
            <p>
              如果你想看在线能力，先打开 Visual Coach。想追踪更多项目演进，则从 GitHub profile 开始。
            </p>
          </div>

          <div className="footer-actions">
            <a
              className="button button-primary"
              href="https://visual-coach-tn4f1e9grkbq.edgeone.cool"
              target="_blank"
              rel="noreferrer"
            >
              打开 Visual Coach
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/julius19910613"
              target="_blank"
              rel="noreferrer"
            >
              打开 GitHub Profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
