// ═══════════════════════════════════════════════════════
// DATA — Real AI Tools
// ═══════════════════════════════════════════════════════
const CATEGORIES = [
  { id:'all',      label:'All',             icon:'⚡', color:'#4f46e5' },
  { id:'image',    label:'Image Generation',icon:'🖼️', color:'#7c3aed' },
  { id:'video',    label:'Text to Video',   icon:'🎬', color:'#e11d48' },
  { id:'present',  label:'Presentation',    icon:'📊', color:'#d97706' },
  { id:'medical',  label:'Medical AI',      icon:'🩺', color:'#059669' },
  { id:'travel',   label:'Travel Planner',  icon:'✈️', color:'#0284c7' },
  { id:'code',     label:'Code Assistant',  icon:'💻', color:'#0d9488' },
];
 
const TOOLS = [
  // ── IMAGE GENERATION ──────────────────────────────────
  { id:'midjourney',  name:'Midjourney',         cat:'image',   icon:'🎨', accent:'#7c3aed',
    desc:'World-class AI image generation. Create stunning art, photography, and illustrations from text prompts.',
    url:'https://www.midjourney.com', free:false,
    tags:['Art','Photorealism','Illustration'],
    prompts:['A cinematic photo of a neon-lit Tokyo street at night, rain, bokeh','Hyperrealistic portrait of a medieval knight, dramatic lighting, 8K','Abstract fluid art in purple and gold, luxury aesthetic'] },
  { id:'dalle3',      name:'DALL·E 3 (ChatGPT)', cat:'image',   icon:'🖼️', accent:'#10a37f',
    desc:'OpenAI\'s latest image model inside ChatGPT. Excellent at following detailed text instructions.',
    url:'https://chatgpt.com', free:true,
    tags:['Free tier','Versatile','Detailed'],
    prompts:['Watercolor painting of a mountain cabin in autumn, cozy atmosphere','Futuristic cityscape with flying cars, cyberpunk style, vivid colors','3D render of a cute robot reading a book under a tree'] },
  { id:'ideogram',    name:'Ideogram',           cat:'image',   icon:'✏️', accent:'#0d9488',
    desc:'Best AI tool for generating images with accurate text and typography. Great for logos and posters.',
    url:'https://ideogram.ai', free:true,
    tags:['Free','Text in images','Logos'],
    prompts:['Modern startup logo with the word "NeuralBay" in bold sans-serif','Movie poster for a sci-fi film called "Horizon Zero", dramatic style','Vintage travel poster for Paris with Eiffel Tower'] },
  { id:'leonardo',    name:'Leonardo AI',        cat:'image',   icon:'🦁', accent:'#f59e0b',
    desc:'Professional AI image platform with fine-tuned models for game assets, concept art, and portraits.',
    url:'https://leonardo.ai', free:true,
    tags:['Free tier','Game art','Concept art'],
    prompts:['Fantasy game character, elf warrior, detailed armor, concept art style','Product mockup of a luxury perfume bottle on marble surface','Architectural exterior render of a modern villa with pool'] },
  { id:'adobe-firefly',name:'Adobe Firefly',     cat:'image',   icon:'🔥', accent:'#e84d0e',
    desc:'Adobe\'s generative AI. Commercially safe images with deep integration into Photoshop and Illustrator.',
    url:'https://firefly.adobe.com', free:true,
    tags:['Commercial safe','Adobe','Design'],
    prompts:['Corporate flat-lay product photo, white background, clean','Social media banner for a fitness app, energetic colors, modern','Texture pattern for fabric design, tropical leaves, vibrant'] },
  { id:'stablediffusion',name:'Stable Diffusion (online)',cat:'image',icon:'🌊',accent:'#6366f1',
    desc:'Open-source image model. Run online via Clipdrop or DreamStudio for detailed, customizable outputs.',
    url:'https://clipdrop.co/stable-diffusion', free:true,
    tags:['Open source','Free','Customizable'],
    prompts:['Steampunk inventor\'s laboratory, detailed, warm lighting','Surreal dreamscape with floating islands and waterfalls','Anime-style character illustration, soft colors, detailed'] },
  { id:'canva-ai',    name:'Canva AI (Text to Image)',cat:'image',icon:'🎭',accent:'#7c3aed',
    desc:'Built directly into Canva. Perfect for non-designers who want quick AI images for presentations and social media.',
    url:'https://www.canva.com/ai-image-generator/', free:true,
    tags:['Free','Easy','Canva'],
    prompts:['Minimalist business card background, geometric shapes, navy blue','Instagram post background, pastel gradient, aesthetic','YouTube thumbnail background, bold colors, tech theme'] },
  { id:'gemini-img',  name:'Gemini (Google)',    cat:'image',   icon:'♊', accent:'#1a73e8',
    desc:'Google\'s multimodal AI. Generate images and have conversations about them in the same chat.',
    url:'https://gemini.google.com', free:true,
    tags:['Free','Google','Multimodal'],
    prompts:['A photorealistic sunrise over the Himalayas, golden hour','Infographic illustration of the water cycle, educational style','Birthday card illustration with balloons and confetti, cheerful'] },
 
  // ── TEXT TO VIDEO ─────────────────────────────────────
  { id:'runway',      name:'Runway Gen-3',       cat:'video',   icon:'🎥', accent:'#e11d48',
    desc:'Industry-leading AI video generation. Create cinematic clips from text or images. Used by Hollywood studios.',
    url:'https://runwayml.com', free:false,
    tags:['Cinematic','Professional','Industry standard'],
    prompts:['A lone astronaut walking on Mars, dusty red landscape, cinematic','Time-lapse of a city skyline from day to night, golden hour transition','Ocean waves crashing on rocks, slow motion, dramatic lighting'] },
  { id:'kling',       name:'Kling AI',           cat:'video',   icon:'🎞️', accent:'#9333ea',
    desc:'High-quality AI video generation with excellent motion and realistic physics. Up to 2 minutes per clip.',
    url:'https://klingai.com', free:true,
    tags:['Free tier','Long clips','Realistic'],
    prompts:['A dragon flying over a medieval castle, epic fantasy style','Cherry blossoms falling in slow motion, Japanese garden','A chef cooking in a modern kitchen, close-up of hands, cinematic'] },
  { id:'pika',        name:'Pika Labs',          cat:'video',   icon:'⚡', accent:'#f59e0b',
    desc:'Fast, creative AI video generation. Excellent for short social media clips, ads, and creative experiments.',
    url:'https://pika.art', free:true,
    tags:['Free','Social media','Fast'],
    prompts:['A coffee cup with steam rising, cozy morning atmosphere','A futuristic car driving through neon-lit streets at night','Flowers blooming in fast motion, vibrant spring colors'] },
  { id:'hailuo',      name:'Hailuo AI (MiniMax)',cat:'video',   icon:'🌊', accent:'#0284c7',
    desc:'Chinese AI video model producing highly realistic videos. Excellent at human motion and facial expressions.',
    url:'https://hailuoai.video', free:true,
    tags:['Free','Realistic people','High quality'],
    prompts:['A woman dancing on a rooftop at sunset, elegant, cinematic','A young entrepreneur presenting on stage to a large audience','Two friends laughing at a cozy coffee shop, warm lighting'] },
  { id:'sora',        name:'Sora (OpenAI)',      cat:'video',   icon:'🎬', accent:'#10a37f',
    desc:'OpenAI\'s flagship video model. Create stunning 1080p videos up to 20 seconds with incredible detail.',
    url:'https://sora.com', free:false,
    tags:['Premium','1080p','Best quality'],
    prompts:['A cat wearing sunglasses riding a surfboard, fun and colorful','Aerial drone shot of a tropical beach at sunrise, crystal water','A timelapse of clouds forming over mountain peaks'] },
  { id:'luma',        name:'Luma Dream Machine', cat:'video',   icon:'💫', accent:'#8b5cf6',
    desc:'Create smooth, high-quality videos from text or images. Known for excellent camera movement and realism.',
    url:'https://lumalabs.ai/dream-machine', free:true,
    tags:['Free tier','Camera movement','Smooth'],
    prompts:['A lighthouse during a storm, waves crashing, lightning in sky','Interior of a luxury hotel lobby, camera slowly panning','A hummingbird hovering near tropical flowers, macro lens feel'] },
  { id:'invideo',     name:'InVideo AI',         cat:'video',   icon:'📹', accent:'#e11d48',
    desc:'Full AI video editor. Turn scripts and ideas into complete videos with voiceover, stock footage, and captions.',
    url:'https://invideo.io', free:true,
    tags:['Free','Full videos','Voiceover'],
    prompts:['Create a 60-second explainer video about blockchain technology','YouTube intro video for a cooking channel, upbeat and colorful','Product promo video for wireless earbuds, sleek and modern'] },
 
  // ── PRESENTATION ──────────────────────────────────────
  { id:'gamma',       name:'Gamma App',          cat:'present', icon:'⚡', accent:'#7c3aed',
    desc:'The best AI presentation maker. Generate complete slide decks from a single prompt in under 30 seconds.',
    url:'https://gamma.app', free:true,
    tags:['Free','Best','Fast'],
    prompts:['10-slide pitch deck for an AI-powered fitness app targeting Gen Z','Presentation on climate change solutions for a corporate audience','Product launch slides for a new SaaS CRM tool'] },
  { id:'beautiful-ai',name:'Beautiful.ai',       cat:'present', icon:'✨', accent:'#e11d48',
    desc:'AI-powered presentation design. Smart templates that automatically adjust layout as you add content.',
    url:'https://www.beautiful.ai', free:false,
    tags:['Smart design','Templates','Professional'],
    prompts:['Quarterly business review presentation for Q3 2025','Workshop slides: Introduction to Machine Learning for beginners','Company culture deck for new employee onboarding'] },
  { id:'tome',        name:'Tome',               cat:'present', icon:'📖', accent:'#0d9488',
    desc:'AI storytelling and presentation tool. Creates narrative-driven presentations with rich media embedding.',
    url:'https://tome.app', free:true,
    tags:['Free tier','Storytelling','Rich media'],
    prompts:['Brand story presentation for a sustainable fashion startup','Research findings presentation on remote work productivity trends','Investor update deck: startup growth metrics and roadmap'] },
  { id:'canva-pres',  name:'Canva Presentations',cat:'present', icon:'🎨', accent:'#9333ea',
    desc:'AI-assisted presentation builder with thousands of templates, animations, and one-click design suggestions.',
    url:'https://www.canva.com/presentations/', free:true,
    tags:['Free','Templates','Easy'],
    prompts:['Social media marketing strategy presentation for small business','Science project presentation on the human brain for high school','Travel itinerary presentation for a 10-day Europe trip'] },
  { id:'slidesai',    name:'SlidesAI',           cat:'present', icon:'📊', accent:'#f59e0b',
    desc:'Google Slides add-on that generates presentations from text using AI. Works directly in your Google Drive.',
    url:'https://www.slidesai.io', free:true,
    tags:['Free tier','Google Slides','Add-on'],
    prompts:['5 slides on the future of renewable energy, executive summary style','Lesson plan presentation: Introduction to Python Programming','Nonprofit fundraising pitch: clean water access in rural India'] },
 
  // ── MEDICAL AI ────────────────────────────────────────
  { id:'ada',         name:'Ada Health',         cat:'medical', icon:'🩺', accent:'#059669',
    desc:'AI-powered symptom checker used by millions. Get a personalized health assessment based on your symptoms.',
    url:'https://ada.com', free:true,
    tags:['Free','Symptom checker','Trusted'],
    prompts:['I have a headache, mild fever, and fatigue for 2 days — what could it be?','What are the common causes of lower back pain in a 30-year-old?','I feel short of breath when climbing stairs — should I see a doctor?'] },
  { id:'meditron',    name:'ChatGPT (Medical Q&A)',cat:'medical',icon:'💊',accent:'#10a37f',
    desc:'Use ChatGPT with a medical prompt for evidence-based health information, drug interactions, and wellness guidance.',
    url:'https://chatgpt.com', free:true,
    tags:['Free','Evidence-based','General'],
    prompts:['Explain the difference between Type 1 and Type 2 diabetes simply','What are the side effects of ibuprofen with long-term use?','What lifestyle changes help manage high blood pressure naturally?'] },
  { id:'healthtap',   name:'HealthTap',          cat:'medical', icon:'❤️', accent:'#e11d48',
    desc:'AI doctor consultation platform. Get answers from AI trained on millions of doctor-patient interactions.',
    url:'https://www.healthtap.com', free:true,
    tags:['Free tier','Doctor-trained AI','Q&A'],
    prompts:['Is it normal to feel dizzy after standing up quickly?','My child has a rash on their arm after being outside — what is it?','How long does it take to recover from a common cold?'] },
  { id:'infermedica', name:'Infermedica',        cat:'medical', icon:'🔬', accent:'#0284c7',
    desc:'Clinical-grade AI triage tool. Used by hospitals for patient triage and preliminary diagnosis support.',
    url:'https://infermedica.com', free:false,
    tags:['Clinical grade','Triage','Professional'],
    prompts:['Patient has chest tightness, sweating, and left arm pain — triage priority?','Differential diagnosis for persistent dry cough in non-smoker, age 45','Post-surgical fever on day 3 — common causes and red flags?'] },
  { id:'perplexity-med',name:'Perplexity Health', cat:'medical',icon:'🧠',accent:'#8b5cf6',
    desc:'Use Perplexity AI for up-to-date medical research, drug info, and health questions with cited sources.',
    url:'https://www.perplexity.ai', free:true,
    tags:['Free','Cited sources','Research'],
    prompts:['Latest research on intermittent fasting and metabolic health 2024','Evidence-based supplements for improving sleep quality','What does current research say about the gut-brain connection?'] },
 
  // ── TRAVEL PLANNER ────────────────────────────────────
  { id:'roamr',       name:'Wanderlog',          cat:'travel',  icon:'🗺️', accent:'#0284c7',
    desc:'AI travel planner that creates day-by-day itineraries, maps, and collaborative trip planning.',
    url:'https://wanderlog.com', free:true,
    tags:['Free','Itinerary','Maps'],
    prompts:['7-day itinerary for Japan, first time visitor, mix of Tokyo and Kyoto','Budget backpacking route through Southeast Asia for 3 weeks','Family-friendly 5-day trip to London with kids aged 8 and 12'] },
  { id:'tripadvisor-ai',name:'Trips by Tripadvisor',cat:'travel',icon:'✈️',accent:'#00aa6c',
    desc:'AI itinerary builder from Tripadvisor. Pulls in real reviews, restaurant ratings, and attraction data.',
    url:'https://www.tripadvisor.com/trips', free:true,
    tags:['Free','Real reviews','Trusted'],
    prompts:['Weekend getaway to Paris, focus on food and museums, no tourist traps','Honeymoon itinerary for Bali, 10 days, luxury and romance','Solo travel plan for Iceland, 7 days, Northern Lights and waterfalls'] },
  { id:'chatgpt-travel',name:'ChatGPT Travel',   cat:'travel',  icon:'💬', accent:'#10a37f',
    desc:'Use ChatGPT to generate custom travel itineraries, packing lists, budget breakdowns, and local tips.',
    url:'https://chatgpt.com', free:true,
    tags:['Free','Custom','Detailed'],
    prompts:['Create a complete 10-day Italy itinerary with daily budget breakdown','Best street food guide for Bangkok with neighborhood recommendations','Packing list for a 2-week monsoon trip to Kerala, India'] },
  { id:'layla',       name:'Layla AI Travel',    cat:'travel',  icon:'🌴', accent:'#f59e0b',
    desc:'AI travel assistant that finds flights, hotels, and activities in one conversation. Books directly.',
    url:'https://justasklayla.com', free:true,
    tags:['Free','Booking','All-in-one'],
    prompts:['Find me a beach holiday in Thailand under $1500 for one week','Plan a weekend road trip from Mumbai, within 300km radius','Best hill stations to visit in India during summer, family trip'] },
  { id:'guidegeek',   name:'GuideGeek',          cat:'travel',  icon:'🧭', accent:'#0d9488',
    desc:'WhatsApp-based AI travel guide. Get destination tips, local secrets, and travel advice on WhatsApp.',
    url:'https://guidegeek.com', free:true,
    tags:['Free','WhatsApp','Local tips'],
    prompts:['Hidden gems in Barcelona that tourists usually miss','Best time to visit Rajasthan and what not to miss','Local food guide for New Orleans beyond the tourist spots'] },
 
  // ── CODE ASSISTANT ────────────────────────────────────
  { id:'github-copilot',name:'GitHub Copilot',  cat:'code',    icon:'🐙', accent:'#0d9488',
    desc:'The most widely used AI coding assistant. Autocomplete, chat, and code generation inside VS Code and more.',
    url:'https://github.com/features/copilot', free:false,
    tags:['VS Code','Autocomplete','Industry standard'],
    prompts:['Write a Node.js Express API with JWT authentication','Create a React custom hook for fetching data with loading and error states','Write a Python script to scrape product prices from a webpage'] },
  { id:'cursor',       name:'Cursor AI Editor',  cat:'code',    icon:'✏️', accent:'#7c3aed',
    desc:'AI-first code editor. Edit entire files with natural language, chat with your codebase, and auto-fix bugs.',
    url:'https://cursor.com', free:true,
    tags:['Free tier','Editor','Codebase chat'],
    prompts:['Refactor this function to use async/await instead of callbacks','Add TypeScript types to this entire JavaScript file','Explain what this complex regex pattern does and suggest improvements'] },
  { id:'v0',           name:'v0 by Vercel',      cat:'code',    icon:'▲', accent:'#0d0f1a',
    desc:'Generate full React UI components and pages from text descriptions. Outputs clean Tailwind + shadcn code.',
    url:'https://v0.dev', free:true,
    tags:['Free','React UI','Tailwind'],
    prompts:['Build a modern dashboard with sidebar, stats cards, and a data table','Create a landing page hero section with CTA button for a SaaS product','Design a pricing page with 3 tiers, toggle annual/monthly billing'] },
  { id:'bolt',         name:'Bolt.new',          cat:'code',    icon:'⚡', accent:'#f59e0b',
    desc:'Full-stack AI app builder. Describe your app and get complete working code with frontend, backend, and DB.',
    url:'https://bolt.new', free:true,
    tags:['Free','Full-stack','App builder'],
    prompts:['Build a todo app with React, local storage, and dark mode','Create a simple expense tracker with categories and monthly charts','Build a recipe finder app with search and favorites feature'] },
  { id:'codeium',      name:'Windsurf (Codeium)',cat:'code',    icon:'🏄', accent:'#0284c7',
    desc:'Free AI coding assistant and editor. Unlimited free autocomplete with excellent multi-file context awareness.',
    url:'https://codeium.com/windsurf', free:true,
    tags:['Free','Unlimited','Multi-file'],
    prompts:['Write unit tests for this authentication service using Jest','Optimize this database query to reduce N+1 problem','Add error handling and input validation to this API endpoint'] },
  { id:'replit-ai',   name:'Replit AI',          cat:'code',    icon:'♻️', accent:'#f97316',
    desc:'AI coding in the browser. Build, run, and deploy apps without any local setup. Great for beginners.',
    url:'https://replit.com', free:true,
    tags:['Free','Browser-based','Beginner friendly'],
    prompts:['Build a simple Python chatbot that remembers the last 5 messages','Create a basic REST API with Flask and SQLite database','Make a web scraper that extracts news headlines from any website'] },
];
 
// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let activeCategory = 'all';
let modalTool = null;
let clicks = parseInt(localStorage.getItem('nb_clicks') || '0');
 
// ═══════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════
function getFiltered() {
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  return TOOLS.filter(t => {
    const catMatch = activeCategory === 'all' || t.cat === activeCategory;
    const qMatch   = !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.tags.some(g => g.toLowerCase().includes(q));
    return catMatch && qMatch;
  });
}
 
function renderCats() {
  const bar = document.getElementById('cat-tabs');
  bar.innerHTML = CATEGORIES.map(c => {
    const count = c.id === 'all' ? TOOLS.length : TOOLS.filter(t => t.cat === c.id).length;
    const isActive = c.id === activeCategory;
    return `<button class="cat-tab${isActive?' active':''}" style="--cat-color:${c.color}"
      onclick="setCategory('${c.id}')">
      <span class="tab-icon">${c.icon}</span>
      ${c.label}
      <span class="tab-count">${count}</span>
    </button>`;
  }).join('');
}
 
function renderGrid() {
  const list  = getFiltered();
  const grid  = document.getElementById('tools-grid');
  const label = document.getElementById('grid-label');
  const count = document.getElementById('grid-count');
  const cat   = CATEGORIES.find(c => c.id === activeCategory);
 
  label.textContent = cat ? cat.label + ' Tools' : 'All Tools';
  count.textContent = list.length + ' tool' + (list.length !== 1 ? 's' : '');
 
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>No tools found</h3>
      <p>Try a different search or category</p>
    </div>`;
    return;
  }
 
  grid.innerHTML = list.map(t => `
    <div class="tool-card" style="--tc-accent:${t.accent}">
      <div class="tc-header">
        <div class="tc-logo" style="background:${t.accent}18">${t.icon}</div>
        <div class="tc-meta">
          <div class="tc-name">${t.name}</div>
          <span class="tc-cat" style="background:${t.accent}18;color:${t.accent}">${getCatLabel(t.cat)}</span>
        </div>
      </div>
      <div class="tc-desc">${t.desc}</div>
      <div class="tc-tags">
        <span class="tc-tag ${t.free ? 'tc-free' : 'tc-paid'}">${t.free ? '✓ Free' : '$ Paid'}</span>
        ${t.tags.map(g => `<span class="tc-tag">${g}</span>`).join('')}
      </div>
      <div class="tc-actions">
        <button class="btn-open" style="background:${t.accent}" onclick="openDirect('${t.id}')">
          Open Tool ↗
        </button>
        <button class="btn-prompt" onclick="openModal('${t.id}')" title="Add a prompt first">
          💬
        </button>
      </div>
      <div class="tc-rating-row">
        <div class="stars-display">${renderStarsDisplay(getAvgRating(t.id))}</div>
        <span class="rating-text">${getRatingText(t.id)}</span>
        <button class="btn-review" onclick="openReviewModal('${t.id}')">★ Review</button>
      </div>
    </div>
  `).join('');
}
 
function render() {
  renderGrid();
  updateStats();
}
 
function updateStats() {
  const free = TOOLS.filter(t => t.free).length;
  document.getElementById('s-tools').textContent = TOOLS.length;
  document.getElementById('s-free').textContent  = free;
  document.getElementById('s-clicks').textContent = clicks;
}
 
function getCatLabel(catId) {
  return CATEGORIES.find(c => c.id === catId)?.label || catId;
}
 
function setCategory(id) {
  activeCategory = id;
  renderCats();
  renderGrid();
}
 
// ═══════════════════════════════════════════════════════
// OPEN TOOL DIRECTLY
// ═══════════════════════════════════════════════════════
function openDirect(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;
  trackClick();
  window.open(tool.url, '_blank', 'noopener,noreferrer');
  showToast('Opening ' + tool.name + ' ↗');
}
 
// ═══════════════════════════════════════════════════════
// PROMPT MODAL
// ═══════════════════════════════════════════════════════
function openModal(toolId) {
  modalTool = TOOLS.find(t => t.id === toolId);
  if (!modalTool) return;
 
  document.getElementById('m-icon').textContent      = modalTool.icon;
  document.getElementById('m-icon').style.background = modalTool.accent + '18';
  document.getElementById('m-name').textContent      = modalTool.name;
  document.getElementById('m-url').textContent       = modalTool.url.replace('https://','');
  document.getElementById('m-prompt').value          = '';
  document.getElementById('m-go-btn').style.background = modalTool.accent;
 
  const sugsEl = document.getElementById('m-suggestions');
  sugsEl.innerHTML = (modalTool.prompts || []).map(p =>
    `<button class="modal-sug" onclick="fillSug(this)">${p}</button>`
  ).join('');
 
  document.getElementById('modal-bg').classList.add('open');
  setTimeout(() => document.getElementById('m-prompt').focus(), 200);
}
 
function fillSug(btn) {
  document.getElementById('m-prompt').value = btn.textContent;
  document.getElementById('m-prompt').focus();
}
 
function openTool() {
  if (!modalTool) return;
  const prompt = document.getElementById('m-prompt').value.trim();
 
  // Copy prompt to clipboard so user can paste it in the tool
  if (prompt) {
    navigator.clipboard.writeText(prompt).catch(() => {});
  }
 
  trackClick();
  window.open(modalTool.url, '_blank', 'noopener,noreferrer');
  closeModal();
  showToast(prompt ? '✓ Prompt copied! Opening ' + modalTool.name + ' ↗' : 'Opening ' + modalTool.name + ' ↗');
}
 
function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  modalTool = null;
}
 
function handleModalBgClick(e) {
  if (e.target === document.getElementById('modal-bg')) closeModal();
}
 
// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
function trackClick() {
  clicks++;
  localStorage.setItem('nb_clicks', clicks);
  document.getElementById('s-clicks').textContent = clicks;
}
 
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}
 
// Keyboard: Esc closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeReviewModal(); }
});
 
// ═══════════════════════════════════════════════════════
// AI TOOL RECOMMENDER
// ═══════════════════════════════════════════════════════
 
// Keyword → tool mapping rules
const REC_RULES = [
  // Image Generation
  { keywords:['image','photo','picture','illustration','art','draw','generate image','visual','poster','logo','design image','graphic','painting','wallpaper','avatar','thumbnail','banner'],cats:['image'] },
  // Video
  { keywords:['video','movie','clip','animation','reel','film','cinematic','short video','youtube video','ad video','promo video','text to video','script to video'],cats:['video'] },
  // Presentation
  { keywords:['presentation','ppt','slides','pitch','deck','slide deck','powerpoint','keynote','present','pitch deck','investor deck'],cats:['present'] },
  // Medical
  { keywords:['health','symptom','medical','doctor','disease','medicine','diagnosis','wellness','sick','pain','fever','treatment','hospital','drug','tablet','pill'],cats:['medical'] },
  // Travel
  { keywords:['travel','trip','itinerary','holiday','vacation','tour','destination','hotel','flight','visit','journey','plan travel','explore'],cats:['travel'] },
  // Code
  { keywords:['code','coding','program','developer','debug','bug','function','api','software','app','website','react','python','javascript','build app','web app'],cats:['code'] },
  // Cross-category specifics
  { keywords:['free','no cost','budget','without paying'],cats:['image','video','present','medical','travel','code'], freeOnly:true },
  { keywords:['best','top','popular','recommend','suggest'],cats:['image','video','present','code'] },
  { keywords:['logo','brand','branding'],cats:['image'],boost:['ideogram','canva-ai','adobe-firefly'] },
  { keywords:['instagram','social media','tiktok','reel','short'],cats:['image','video'],boost:['pika','canva-ai','invideo'] },
  { keywords:['blog','article','content','write'],cats:['present','code'],boost:['gamma','tome'] },
  { keywords:['game','gaming','character','concept art'],cats:['image'],boost:['leonardo','midjourney'] },
  { keywords:['realistic','photorealistic','real photo'],cats:['image'],boost:['midjourney','dalle3','stablediffusion'] },
  { keywords:['text in image','typography','word','quote'],cats:['image'],boost:['ideogram'] },
  { keywords:['youtube','tutorial','explainer'],cats:['video','present'],boost:['invideo','gamma'] },
  { keywords:['startup','pitch','business plan','investor'],cats:['present'],boost:['gamma','beautiful-ai','tome'] },
  { keywords:['symptom','sick','fever','pain','headache'],cats:['medical'],boost:['ada','healthtap'] },
  { keywords:['japan','paris','bali','europe','trip','itinerary'],cats:['travel'],boost:['roamr','chatgpt-travel','layla'] },
  { keywords:['react','javascript','frontend','ui','component'],cats:['code'],boost:['v0','bolt','cursor'] },
  { keywords:['python','backend','api','database'],cats:['code'],boost:['github-copilot','cursor','codeium'] },
];
 
function scoreTools(query) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/);
  const scores = {};
  const boosted = new Set();
  let matchedCats = new Set();
  let freeOnly = false;
 
  // Apply rules
  REC_RULES.forEach(rule => {
    const matched = rule.keywords.some(kw => q.includes(kw));
    if (!matched) return;
    if (rule.freeOnly) freeOnly = true;
    rule.cats.forEach(c => matchedCats.add(c));
    if (rule.boost) rule.boost.forEach(id => boosted.add(id));
  });
 
  // If no category matched, do fuzzy match across all
  if (matchedCats.size === 0) {
    TOOLS.forEach(t => {
      const haystack = (t.name + ' ' + t.desc + ' ' + t.tags.join(' ')).toLowerCase();
      const sc = words.filter(w => w.length > 2 && haystack.includes(w)).length;
      if (sc > 0) scores[t.id] = sc;
    });
  } else {
    // Score tools in matched categories
    TOOLS.forEach(t => {
      if (!matchedCats.has(t.cat)) return;
      if (freeOnly && !t.free) return;
      let sc = 10; // base score for category match
      if (boosted.has(t.id)) sc += 15; // boosted tools rank higher
      // Extra: match words in name/desc
      const haystack = (t.name + ' ' + t.desc + ' ' + t.tags.join(' ')).toLowerCase();
      sc += words.filter(w => w.length > 2 && haystack.includes(w)).length * 3;
      // Rating bonus
      const avg = getAvgRating(t.id);
      if (avg > 0) sc += avg;
      scores[t.id] = sc;
    });
  }
 
  // Sort and return top 6
  return Object.entries(scores)
    .sort((a,b) => b[1] - a[1])
    .slice(0,6)
    .map(([id, score]) => ({ tool: TOOLS.find(t => t.id === id), score, isTop: boosted.has(id) }))
    .filter(x => x.tool);
}
 
function whyRecommended(tool, query) {
  const q = query.toLowerCase();
  // Generate a short human-readable reason
  if (q.includes('free') && tool.free) return '<strong>Free to use</strong> — no payment needed';
  if (q.includes('logo') && tool.id === 'ideogram') return 'Best for <strong>text & logo generation</strong>';
  if (q.includes('realistic') && tool.id === 'midjourney') return 'Industry leader in <strong>photorealistic images</strong>';
  if (q.includes('startup') || q.includes('pitch')) return 'Perfect for <strong>startup pitch decks</strong>';
  if (q.includes('symptom') || q.includes('health')) return 'Trusted <strong>symptom checker</strong> used by millions';
  if (q.includes('react') || q.includes('ui')) return 'Generates <strong>React components</strong> from text';
  if (q.includes('video') && tool.free) return '<strong>Free</strong> AI video generation';
  if (tool.tags.includes('Free') || tool.free) return '<strong>Free tier available</strong> — great starting point';
  const catLabel = getCatLabel(tool.cat);
  return `Top-rated tool in <strong>${catLabel}</strong>`;
}
 
function recommend() {
  const query = document.getElementById('rec-input').value.trim();
  if (!query) { showToast('⚠ Please describe what you need!'); return; }
  showRecResults(query);
}
 
function quickRec(query) {
  document.getElementById('rec-input').value = query;
  showRecResults(query);
}
 
function showRecResults(query) {
  const results = scoreTools(query);
  const resultsEl = document.getElementById('rec-results');
  const cardsEl   = document.getElementById('rec-cards');
  document.getElementById('rec-query-label').textContent = '"' + query + '"';
 
  if (!results.length) {
    cardsEl.innerHTML = `<div class="rec-no-result">😕 No matching tools found. Try different keywords like "image", "video", "code", "travel"…</div>`;
  } else {
    cardsEl.innerHTML = results.map(({ tool: t, score, isTop }, i) => `
      <div class="rec-card">
        ${i === 0 ? '<div class="rec-match-badge top">⭐ Best Match</div>' : (isTop ? '<div class="rec-match-badge">Top Pick</div>' : '')}
        <div class="rec-card-top">
          <div class="rec-card-icon" style="background:${t.accent}22">${t.icon}</div>
          <div>
            <div class="rec-card-name">${t.name}</div>
            <div class="rec-card-cat">${getCatLabel(t.cat)} · ${t.free ? '✓ Free' : '$ Paid'}</div>
          </div>
        </div>
        <div class="rec-card-why">Why: ${whyRecommended(t, query)}</div>
        <div class="rec-card-actions">
          <button class="rec-open-btn" style="background:${t.accent}" onclick="trackClick();window.open('${t.url}','_blank');showToast('Opening ${t.name} ↗')">
            Open Tool ↗
          </button>
          <button class="rec-open-btn" style="background:rgba(255,255,255,.1);flex:0;padding:8px 12px" onclick="closeRec();openModal('${t.id}')" title="Add prompt">💬</button>
        </div>
      </div>
    `).join('');
  }
 
  resultsEl.classList.add('show');
  resultsEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
}
 
function clearRec() {
  document.getElementById('rec-results').classList.remove('show');
  document.getElementById('rec-input').value = '';
}
 
function closeRec() {
  document.getElementById('rec-results').classList.remove('show');
}
 
// ═══════════════════════════════════════════════════════
// REVIEW SYSTEM
// ═══════════════════════════════════════════════════════
let reviewTool = null;
let pickedStar = 0;
 
function getReviews(toolId) {
  try { return JSON.parse(localStorage.getItem('nb_reviews_' + toolId) || '[]'); }
  catch(e) { return []; }
}
function saveReviews(toolId, reviews) {
  localStorage.setItem('nb_reviews_' + toolId, JSON.stringify(reviews));
}
function getAvgRating(toolId) {
  const reviews = getReviews(toolId);
  if (!reviews.length) return 0;
  return reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
}
function getRatingText(toolId) {
  const reviews = getReviews(toolId);
  const avg = getAvgRating(toolId);
  if (!reviews.length) return 'No reviews yet';
  return avg.toFixed(1) + ' (' + reviews.length + ' review' + (reviews.length > 1 ? 's' : '') + ')';
}
function renderStarsDisplay(avg) {
  return [1,2,3,4,5].map(i =>
    `<span class="star-d${i <= Math.round(avg) ? ' filled' : ''}">★</span>`
  ).join('');
}
 
function openReviewModal(toolId) {
  reviewTool = TOOLS.find(t => t.id === toolId);
  if (!reviewTool) return;
  pickedStar = 0;
 
  document.getElementById('rv-icon').textContent = reviewTool.icon;
  document.getElementById('rv-icon').style.background = reviewTool.accent + '18';
  document.getElementById('rv-tool-name').textContent = reviewTool.name;
  document.getElementById('rv-submit-btn').style.background = reviewTool.accent;
  document.getElementById('rv-name').value = '';
  document.getElementById('rv-role').value = '';
  document.getElementById('rv-text').value = '';
  updateStarPicker(0);
  renderReviewList(toolId);
  document.getElementById('rv-modal-bg').classList.add('open');
  setTimeout(() => document.getElementById('rv-name').focus(), 200);
}
 
function closeReviewModal() {
  document.getElementById('rv-modal-bg').classList.remove('open');
  reviewTool = null;
}
 
function handleRvBgClick(e) {
  if (e.target === document.getElementById('rv-modal-bg')) closeReviewModal();
}
 
function pickStar(val) {
  pickedStar = val;
  updateStarPicker(val);
}
 
function updateStarPicker(val) {
  document.querySelectorAll('.star-pick').forEach((btn, i) => {
    btn.classList.toggle('active', i < val);
  });
}
 
function submitReview() {
  if (!reviewTool) return;
  const name   = document.getElementById('rv-name').value.trim();
  const role   = document.getElementById('rv-role').value.trim();
  const text   = document.getElementById('rv-text').value.trim();
 
  if (!pickedStar) { showToast('⚠ Please pick a star rating!'); return; }
  if (!name)        { showToast('⚠ Please enter your name!'); return; }
  if (!text)        { showToast('⚠ Please write a review!'); return; }
 
  const reviews = getReviews(reviewTool.id);
  reviews.unshift({
    name, role, text,
    rating: pickedStar,
    date: new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }),
  });
  saveReviews(reviewTool.id, reviews);
 
  // Reset form
  pickedStar = 0;
  updateStarPicker(0);
  document.getElementById('rv-name').value = '';
  document.getElementById('rv-role').value = '';
  document.getElementById('rv-text').value = '';
 
  renderReviewList(reviewTool.id);
  renderGrid(); // refresh cards to show updated rating
  showToast('✓ Review submitted for ' + reviewTool.name + '!');
}
 
function renderReviewList(toolId) {
  const reviews = getReviews(toolId);
  const listEl  = document.getElementById('rv-list');
  const countEl = document.getElementById('rv-list-count');
  countEl.textContent = reviews.length ? reviews.length + ' total' : '';
 
  if (!reviews.length) {
    listEl.innerHTML = `<div class="rv-empty">
      <div class="rv-empty-icon">💬</div>
      Be the first to review this tool!
    </div>`;
    return;
  }
  listEl.innerHTML = reviews.map(r => `
    <div class="rv-item">
      <div class="rv-item-head">
        <div class="rv-avatar">${r.name.slice(0,2).toUpperCase()}</div>
        <div>
          <div class="rv-item-name">${escHTML(r.name)}${r.role ? ' <span style="font-weight:400;color:var(--muted)">· ' + escHTML(r.role) + '</span>' : ''}</div>
        </div>
        <div class="rv-item-date">${r.date}</div>
      </div>
      <div class="rv-item-stars">${[1,2,3,4,5].map(i => `<span style="color:${i<=r.rating?'#f59e0b':'#e5e7eb'}">★</span>`).join('')}</div>
      <div class="rv-item-text">${escHTML(r.text)}</div>
    </div>
  `).join('');
}
 
function escHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
 
// ── INIT ──
renderCats();
render();