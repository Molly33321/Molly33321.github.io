const translations = {
  zh: {
    "nav.home":"首页","nav.story":"关于我","nav.gallery":"影集","nav.notes":"随笔","home.eyebrow":"PERSONAL ARCHIVE · 2026","home.title":"你好，我是<br><em>陈鱼眠</em>","home.lead":"在这里，收集成长的片段、想法与那些值得记住的日常。","home.genderLabel":"性别","home.gender":"女","home.location":"中国","home.explore":"认识更多","home.cardLabel":"ABOUT ME","home.cardText":"正在书写","home.vertical":"慢慢来，比较快。","home.scroll":"向下探索",
    "story.heading":"关于我","story.subheading":"那些塑造我的，小小的经历。","story.identity":"身份","story.name":"陈鱼眠","story.female":"女性","story.placeholder":"更多信息待补充","story.bio":"这是留给未来自己的空白页。你可以在这里写下喜欢的事物、性格、目标，或任何想被记住的自己。","story.education":"教育经历","edu.primary":"小学","edu.middle":"初中","edu.high":"高中","edu.university":"大学","edu.primarySchool":"厦门外国语附属小学","edu.middleSchool":"厦门外国语学校（思明校区）","edu.highSchool":"厦门外国语学校（海沧校区）","edu.universitySchool":"上海交通大学","story.awards":"获奖情况","story.awardTitle":"荣誉与闪光","story.awardCopy":"2026年“新生杯”最佳辩手<br>2026年“体总杯”羽毛球团体赛第五名<br>2026年上海半程马拉松志愿者<br>2026年外研社·国才杯综合能力赛项银奖",
    "gallery.heading":"影集","gallery.subheading":"把平凡的日子，收进相框。","gallery.photo1":"小狗的自由时刻","gallery.photo2":"时间的窗口","gallery.photo3":"凝望古典","gallery.photo4":"云落校园","gallery.tip":"四张照片，收集四种关于时间的片刻。","notes.heading":"随笔","notes.subheading":"写给生活的三句小诗。","notes.firstTitle":"时间带我旅行，但我就是时间。","notes.secondTitle":"我给你一个从未拥有信仰之人的忠诚。","notes.thirdTitle":"时间是组成我的物质。","footer":"PERSONAL CORNER"
  },
  en: {
    "nav.home":"Home","nav.story":"Profile","nav.gallery":"Gallery","nav.notes":"Notes","home.eyebrow":"PERSONAL ARCHIVE · 2026","home.title":"Hello, I am<br><em>Yumian Chen</em>","home.lead":"A small place for fragments of growth, thoughts, and days worth remembering.","home.genderLabel":"Gender","home.gender":"Female","home.location":"China","home.explore":"Discover more","home.cardLabel":"ABOUT ME","home.cardText":"Still writing","home.vertical":"Slow is fast.","home.scroll":"SCROLL TO EXPLORE",
    "story.heading":"About me","story.subheading":"Small experiences that made me who I am.","story.identity":"IDENTITY","story.name":"Yumian Chen","story.female":"Female","story.placeholder":"More to be added","story.bio":"A blank page reserved for my future self. Write here about the things you love, your personality, dreams, or anything worth keeping.","story.education":"EDUCATION","edu.primary":"Primary school","edu.middle":"Middle school","edu.high":"High school","edu.university":"University","edu.primarySchool":"Xiamen Foreign Language School Affiliated Primary School","edu.middleSchool":"Xiamen Foreign Language School · Siming Campus","edu.highSchool":"Xiamen Foreign Language School · Haicang Campus","edu.universitySchool":"Shanghai Jiao Tong University","story.awards":"AWARDS","story.awardTitle":"Honours & glimmers","story.awardCopy":"2026 Freshman Cup · Best Debater<br>2026 Sports Association Cup · 5th in Team Badminton<br>2026 Shanghai Half Marathon · Volunteer<br>2026 FLTRP · ETIC Cup · Silver Award, Integrated Skills",
    "gallery.heading":"Gallery","gallery.subheading":"Framing the ordinary days.","gallery.photo1":"A dog's carefree moment","gallery.photo2":"A window into time","gallery.photo3":"Looking into the classical","gallery.photo4":"Clouds over campus","gallery.tip":"Four photographs, four fragments of time.","notes.heading":"Notes","notes.subheading":"Three small poems for life.","notes.firstTitle":"Time takes me travelling, but I am time.","notes.secondTitle":"I give you the loyalty of one who has never had faith.","notes.thirdTitle":"Time is the matter I am made of.","footer":"PERSONAL CORNER"
  }
};

let lang = 'zh';
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? '陈鱼眠 · 个人主页' : 'Yumian Chen · Personal site';
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = translations[lang][el.dataset.i18n]);
  document.querySelectorAll('[data-i18n-html]').forEach(el => el.innerHTML = translations[lang][el.dataset.i18nHtml]);
}
document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.nav-link,.page').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.page).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}));
document.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => document.querySelector(`[data-page="${btn.dataset.go}"]`).click()));
document.getElementById('langSwitch').addEventListener('click', () => setLanguage(lang === 'zh' ? 'en' : 'zh'));
