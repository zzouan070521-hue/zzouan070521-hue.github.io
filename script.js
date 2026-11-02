'use strict';

// Keep English in the HTML so the page remains usable without JavaScript.
const zh = {
  skip:'跳转到正文',navAbout:'关于我',navProjects:'研究项目',navExperience:'实践经历',navEducation:'教育背景',navContact:'联系我',
  heroEyebrow:'香港科技大学 · 工商管理本科生',heroFocus:'投资研究，量化思考。',
  heroDescription:'我就读于香港科技大学工商管理学士课程，关注投资研究、量化方法，以及 AI 在实际业务中的应用。',
  heroDescription2:'通过公司研究、金融实习与学生组织工作，我正在学习将严谨的分析与真实的商业决策联系起来。',
  viewWork:'了解我的项目',downloadCV:'下载简历',location:'中国香港',classYear:'香港科技大学 · 2029 届',portraitCaption:'关于我，以及我正在探索的方向。',
  sectionFoundation:'学习背景',educationTitle:'教育背景',hkustName:'香港科技大学',hkustDate:'2025 年 9 月 — 2029 年 6 月',degree:'工商管理学士',
  educationSummary:'以数学、编程与商业分析为基础，持续拓展研究能力。',quantLabel:'数学与统计课程',quantCourses:'概率论、应用统计、实分析、线性代数、微积分。',csLabel:'计算机相关课程',csCourses:'Python、数据结构与算法、人工智能、数据分析。',
  schoolName:'广州市第二中学',schoolDate:'2019 年 9 月 — 2025 年 9 月',schoolAchievement:'高考成绩位列广东省前 0.5%。',
  sectionResearch:'研究与项目',projectsTitle:'研究与项目',projectsIntro:'从企业与市场出发，理解商业表现及其背后的决策。',
  stockLabel:'股票投资研究',stockDate:'2026 年 3 月 — 4 月',stockTitle:'拓普集团 · 股票投资推介',stockContext:'Point72 × HKU Trading Group 股票投资推介比赛',stockDescription:'在四人团队中开展基本面研究，通过 Bloomberg 与 Wind 获取财务报表及公司数据，分析企业经营基本面与财务表现，为团队的投资判断与股票推介提供支持。',tagFundamental:'基本面分析',
  companyLabel:'独立公司研究',companyDate:'2026 年 1 月',companyTitle:'759 阿信屋与溢达集团',companyDescription:'独立完成两份公司研究报告，运用结构化商业分析框架，研究企业的商业模式、竞争地位，以及影响经营成败的关键因素。',tagBusiness:'商业模式',tagIndustry:'行业分析',tagCompetitive:'竞争定位',
  finfirstLabel:'商业案例',finfirstDate:'2025 年 10 月',finfirstAward:'全市前 8 强',finfirstContext:'周大福人寿 · 人才发展计划比赛',finfirstDescription:'为人才发展计划比赛提出“FinFirst HK”市场案例方案，入围城市级决赛，成为全市前八强项目之一。',tagMarket:'市场研究',tagCase:'案例策划',
  sectionPractice:'工作与校园经历',experienceTitle:'实践经历',ccbName:'中国建设银行',ccbDate:'2026 年 5 月 — 7 月',ccbRole:'投资银行部',ccbOffice:'广州分行',ccbPoint1:'参与广汽集团 IPO 相关支持工作，分析公司财务报表、整理财务信息，为投行业务项目分析提供支持。',ccbPoint2:'开展公司与行业研究，将研究结果整理为项目支持材料。',
  sinotransDate:'2025 年 12 月 — 2026 年 1 月',sinotransRole:'财务部',sinotransPoint1:'核对公司总账与中国银行（香港）交易结单，识别时间性差异及银行记录中尚未体现的交易。',sinotransPoint2:'编制调整表并检查其与总账的一致性，运用 AI 工具辅助重复性核查，同时保留人工复核。',
  association:'中国港澳同学会',associationRole:'项目合作副会长',associationDescription:'支持与企业开展 AI 相关合作及推广，并推动香港与大湾区的交流和实习机会。',studentUnion:'香港科技大学学生会',studentUnionRole:'外务秘书',studentUnionDescription:'负责对外沟通与联络，并主持学生分享及迎新活动。',ambassadorRole:'商学院学生大使',ambassadorDescription:'参与大学宣传活动，并作为学生助理支持推荐入学面试等工作。',
  sectionToolkit:'技能与兴趣',skillsTitle:'技能与兴趣',skillsProgramming:'编程与 AI',skillsProgrammingText:'Python（熟练）、ChatGPT、VS Code',skillsFinance:'金融数据与办公工具',skillsLanguages:'语言',skillsLanguagesText:'普通话（母语）、英语（流利）、粤语（听力）',skillsInterests:'课余兴趣',skillsInterestsText:'运动、音乐、旅行、行山',
  contactEyebrow:'保持联系',contactTitle:'期待与你交流。',contactDescription:'欢迎就投资研究、金融、AI 或合作机会与我交流。',copyEmail:'复制邮箱',footerLocation:'中国香港特别行政区 · 香港科技大学',backTop:'回到顶部'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const en = Object.fromEntries(nodes.map(node => [node.dataset.i18n, node.textContent]));
let language = 'en';
let toastTimer;

function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
  for (const node of nodes) {
    const value = language === 'zh' ? zh[node.dataset.i18n] : en[node.dataset.i18n];
    if (value !== undefined) node.textContent = value;
  }
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  document.querySelector('.primary-nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.querySelector('.portrait-frame img').alt = language === 'zh' ? 'Fiona Zou 的个人照片' : 'Portrait of Fiona Zou';
  document.title = language === 'zh' ? 'ZOU Zhiyan (Fiona) | 香港科技大学 · 个人主页' : 'ZOU Zhiyan (Fiona) | HKUST · Investment Research';
  try { localStorage.setItem('fiona-website-language', language); } catch (_) { /* Local files may block storage. */ }
  requestAnimationFrame(updateActiveNav);
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
try { if (localStorage.getItem('fiona-website-language') === 'zh') setLanguage('zh'); } catch (_) { /* Default to English. */ }

function notify(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}

document.getElementById('copy-email').addEventListener('click', async () => {
  const email = 'zzouan@connect.ust.hk';
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    notify(language === 'zh' ? '邮箱已复制' : 'Email address copied');
  } catch (_) {
    const range = document.createRange();
    const addressNode = document.querySelector('.email-link').firstChild;
    range.setStart(addressNode, 0);
    range.setEnd(addressNode, email.length);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    notify(language === 'zh' ? '请复制已选中的邮箱地址' : 'Please copy the selected email address');
  }
});

const navLinks = [...document.querySelectorAll('.primary-nav a')];
const observedSections = [...document.querySelectorAll('main > section[id]')];
function updateActiveNav() {
  const threshold = document.querySelector('.site-header').getBoundingClientRect().height + 45;
  let id = 'about';
  for (const section of observedSections) {
    if (section.getBoundingClientRect().top <= threshold) id = section.id;
  }
  if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) id = 'contact';
  const target = id === 'skills' ? 'projects' : id;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + target) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let navFrame = 0;
window.addEventListener('scroll', () => {
  if (navFrame) return;
  navFrame = requestAnimationFrame(() => { navFrame = 0; updateActiveNav(); });
}, { passive: true });
window.addEventListener('resize', updateActiveNav);
window.addEventListener('load', updateActiveNav);
requestAnimationFrame(updateActiveNav);
document.getElementById('year').textContent = new Date().getFullYear();
