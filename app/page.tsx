const publications = [
  {
    title: "Learning Transferable Dynamics Priors from Action to World Modeling",
    authors:
      "Ze Huang*, Jiahui Zhang*, Hairuo Liu, Chenxi Zhang, Ran Cheng, Li Zhang",
    venue: "European Conference on Computer Vision (ECCV), 2026",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2606.29501" },
      {
        label: "project",
        href: "https://logosroboticsgroup.github.io/A2World/",
      },
    ],
  },
  {
    title:
      "UniUGG: Unified 3D Understanding and Generation via Geometric-Semantic Encoding",
    authors:
      "Yueming Xu*, Jiahui Zhang*, Ze Huang*, Yurui Chen, Yanpeng Zhou, Zhenyu Chen, Yu-Jie Yuan, Pengxiang Xia, Guowei Huang, Xinyue Cai, Zhongang Qi, Xingyue Quan, Jianye Hao, Hang Xu, Li Zhang",
    venue:
      "International Conference on Learning Representations (ICLR), 2026",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2508.11952" },
      { label: "project", href: "https://fudan-zvg.github.io/UniUGG/" },
    ],
  },
  {
    title: "Reinforcing Action Policies by Prophesying",
    authors: "Jiahui Zhang*, Ze Huang*, Chun Gu, Zipei Ma, Li Zhang",
    venue: "arXiv preprint arXiv:2511.20633, 2025",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2511.20633" },
      {
        label: "project",
        href: "https://logosroboticsgroup.github.io/ProphRL/",
      },
    ],
  },
  {
    title:
      "4D-VLA: Spatiotemporal Vision-Language-Action Pretraining with Cross-Scene Calibration",
    authors:
      "Jiahui Zhang*, Yurui Chen*, Yueming Xu, Ze Huang, Yanpeng Zhou, Yu-Jie Yuan, Xinyue Cai, Guowei Huang, Xingyue Quan, Hang Xu, Li Zhang",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
    links: [{ label: "paper", href: "https://arxiv.org/abs/2506.22242" }],
  },
  {
    title:
      "From Flatland to Space: Teaching Vision-Language Models to Perceive and Reason in 3D",
    authors:
      "Jiahui Zhang*, Yurui Chen*, Yanpeng Zhou, Yueming Xu, Ze Huang, Jilin Mei, Junhui Chen, Yu-Jie Yuan, Xinyue Cai, Guowei Huang, Xingyue Quan, Hang Xu, Li Zhang",
    venue:
      "Advances in Neural Information Processing Systems (NeurIPS), Datasets and Benchmarks Track, 2025",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2503.22976" },
      {
        label: "project",
        href: "https://logosroboticsgroup.github.io/SPAR/",
      },
    ],
  },
  {
    title:
      "WoVoGen: World Volume-Aware Diffusion for Controllable Multi-Camera Driving Scene Generation",
    authors: "Jiachen Lu, Ze Huang, Zeyu Yang, Jiahui Zhang, Li Zhang",
    venue: "European Conference on Computer Vision (ECCV), 2024",
    links: [{ label: "paper", href: "https://arxiv.org/abs/2312.02934" }],
  },
];

function renderAuthors(authors: string) {
  return authors.split(/(Jiahui Zhang\*?)/g).map((part, index) =>
    part.startsWith("Jiahui Zhang") ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          JZ
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#blogs">Blogs</a>
        </nav>
      </header>

      <article id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <h1 id="intro-title">I’m Jiahui Zhang.</h1>
            <p className="lead">
              I am currently a Ph.D. student at Fudan University, advised by{" "}
              <a
                href="https://lzrobots.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Li Zhang
              </a>
              .
            </p>
            <p>
              Before joining Fudan, I completed my undergraduate studies at
              Central South University.
            </p>
            <p>
              Please feel free to reach out. I would be delighted to connect,
              exchange ideas, and explore potential collaborations.
            </p>
          </div>

          <figure className="portrait-wrap">
            <img
              className="portrait"
              src="/jiahui-zhang.png"
              alt="Jiahui Zhang standing in a grassland landscape"
            />
          </figure>
        </section>

        <section className="details" aria-labelledby="details-title">
          <h2 id="details-title">More information</h2>
          <ul className="link-list">
            <li>
              <span>Email</span>
              <span className="email-text">
                jiahzhang23 (at) m (dot) fudan (dot) edu (dot) cn
              </span>
            </li>
            <li>
              <span>Scholar</span>
              <a
                href="https://scholar.google.com/citations?hl=zh-CN&view_op=list_works&gmla=AO4B3js9ymliBvBNPutudO-IXVVcYnl77Hchyi57AQTqYxAsM5-PHmehmiNGCpfjQv7MmqDXkuisf-Z1pikXQ-qFjpM&user=yv0iFsIAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
          </ul>
        </section>

        <section id="research" aria-labelledby="research-title">
          <p className="section-number">01</p>
          <h2 id="research-title">Research</h2>
          <ul className="research-topics" aria-label="Research topics">
            <li>Open-world Embodied Intelligence</li>
            <li>Robotic Foundation Models</li>
            <li>Robot Data Scaling</li>
          </ul>
          <div className="prose">
            <p>
              My research focuses on building general-purpose robotic systems
              for the open world. I study how scalable model training and
              large, diverse robot datasets can enable agents to acquire
              transferable skills and generalize across tasks, environments,
              and embodiments.
            </p>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-title">
          <p className="section-number">02</p>
          <h2 id="publications-title">Publications</h2>
          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <p className="paper-title">{publication.title}</p>
                <p>{renderAuthors(publication.authors)}</p>
                <p className="venue">{publication.venue}</p>
                <p className="paper-links">
                  {publication.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      [{link.label}]
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ol>
          <p className="contribution-note">* Equal contribution.</p>
        </section>

        <section id="blogs" aria-labelledby="blogs-title">
          <p className="section-number">03</p>
          <h2 id="blogs-title">Blogs</h2>
          <p className="coming-soon">
            Current work: writing the first post. Stay tuned.
          </p>
        </section>
      </article>

      <footer>
        <p>© 2026 Jiahui Zhang</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
