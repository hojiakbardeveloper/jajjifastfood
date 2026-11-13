/* Jajji Fast Food — vanilla JS. Edit CONFIG and the data arrays below; no other code needs changing. */
'use strict';

/* ===== EDITABLE CONTENT (sample data: replace with real info) ===== */
const CONFIG = {
  telegramUser: 'jajjifastfood',            // Telegram username (without @) that receives orders
  telegramUrl: 'https://t.me/metaitschool',
  instagramUrl: 'https://instagram.com/metaitschool',
  address: 'Manzil: Andijon shahar, Leninskiy ko\'chasi',
  phone: '+998 90 123 23 23',
  hours: 'Har kuni 09:00 — 22:00',
  mapSrc: ''                                 // paste Google Maps embed URL here
};
const CATEGORIES = ['Barchasi', 'Burgerlar', 'Lavashlar', 'Hot-doglar', 'Pitsalar', 'Fri va gazaklar', 'Ichimliklar'];
// price in UZS (sample); tag: 'TOP' | 'Yangi' | ''; featured: show in popular carousel
const PRODUCTS = [
  { id: 1, cat: 'Burgerlar', name: 'Jajji Burger', desc: 'Mol go\'shti kotleti, pishloq, yangi sabzavotlar.', price: 32000, img: 'lavash.jpg', tag: 'TOP', featured: true },
  { id: 2, cat: 'Burgerlar', name: 'Double Burger', desc: 'Ikki qavat kotlet va maxsus sous.', price: 45000, img: 'burger-2.jpg', tag: '', featured: true },
  { id: 3, cat: 'Burgerlar', name: 'Chicken Burger', desc: 'Qarsildoq tovuq filesi va salat.', price: 30000, img: 'burger-3.jpg', tag: 'Yangi' },
  { id: 4, cat: 'Lavashlar', name: 'Mol go\'shtli lavash', desc: 'Yumshoq go\'sht, sabzavot va sous.', price: 34000, img: 'lavash-1.jpg', tag: 'TOP', featured: true },
  { id: 5, cat: 'Lavashlar', name: 'Tovuqli lavash', desc: 'Tovuq go\'shti, pishloq va yangi sabzavotlar.', price: 30000, img: 'lavash-2.jpg', tag: '' },
  { id: 6, cat: 'Hot-doglar', name: 'Klassik hot-dog', desc: 'Sosiska, sous va qovurilgan piyoz.', price: 18000, img: 'hotdog-1.jpg', tag: '', featured: true },
  { id: 7, cat: 'Hot-doglar', name: 'Pishloqli hot-dog', desc: 'Eritilgan pishloq bilan.', price: 22000, img: 'hotdog-2.jpg', tag: 'Yangi' },
  { id: 8, cat: 'Pitsalar', name: 'Margarita pitsa', desc: 'Pomidor sousi va mozzarella.', price: 60000, img: 'pizza-1.jpg', tag: '' },
  { id: 9, cat: 'Pitsalar', name: 'Pepperoni pitsa', desc: 'Pepperoni va ko\'p pishloq.', price: 75000, img: 'pizza-2.jpg', tag: 'TOP', featured: true },
  { id: 10, cat: 'Fri va gazaklar', name: 'Kartoshka fri', desc: 'Oltin rangli, qarsildoq.', price: 15000, img: 'fries-1.jpg', tag: '' },
  { id: 11, cat: 'Fri va gazaklar', name: 'Nagetslar', desc: '6 dona tovuq nagetsi, sous bilan.', price: 25000, img: 'nuggets-1.jpg', tag: '' },
  { id: 12, cat: 'Ichimliklar', name: 'Gazli ichimlik', desc: 'Sovuq, 0.5 l.', price: 8000, img: 'drink-1.jpg', tag: '' },
  { id: 13, cat: 'Ichimliklar', name: 'Limonad', desc: 'Uy sharoitidagi limonad, 0.4 l.', price: 14000, img: 'drink-2.jpg', tag: 'Yangi' }
];
const PROMOS = [
  { title: 'Kombo to\'plam', off: '-20%', text: 'Burger + fri + ichimlik. Taklif muddati cheklangan.', img: 'kombo.avif' },
  { title: 'Oilaviy pitsa', off: '2=1', text: 'Ikkita pitsa buyurtma qiling, bittasi sovg\'a (misol).', img: 'pitsa.jpg' }
];
const STATS = [['X+', 'Mamnun mijozlar'], ['X+', 'Menyu turlari'], ['X+', 'Xizmat yillari']];
const ICONS = {
  taste: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  quality: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  fast: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  price: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>'
};
const WHY = [
  ['taste', 'Mazali ta\'m', 'Har bir taomga alohida e\'tibor.'],
  ['quality', 'Sifatli mahsulotlar', 'Taom tayyorlashda sifatga ustuvor ahamiyat.'],
  ['fast', 'Tezkor xizmat', 'Buyurtmalarni imkon qadar tez tayyorlash.'],
  ['price', 'Qulay narxlar', 'Har xil did va ehtiyojga mos takliflar.']
];
const GALLERY = [1, 2, 3, 4, 5, 6].map(n => ({ img: `gallery-${n}.jpg`, cap: `Galereya rasmi ${n}` }));
const REVIEWS = [  // SAMPLE reviews: replace with real customer feedback
  { name: 'Mijoz ismi 1', stars: 5, text: 'Namuna matn: bu yerga haqiqiy mijoz fikrini kiriting.', img: 'avatar-1.jpg' },
  { name: 'Mijoz ismi 2', stars: 5, text: 'Namuna matn: bu yerga haqiqiy mijoz fikrini kiriting.', img: 'avatar-2.jpg' },
  { name: 'Mijoz ismi 3', stars: 4, text: 'Namuna matn: bu yerga haqiqiy mijoz fikrini kiriting.', img: 'avatar-3.jpg' },
  { name: 'Mijoz ismi 4', stars: 5, text: 'Namuna matn: bu yerga haqiqiy mijoz fikrini kiriting.', img: 'avatar-4.jpg' }
];

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IMG = f => `images/${f}`;
const money = n => n.toLocaleString('ru-RU') + ' so\'m';
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const imgTag = (f, alt) => `<img src="${IMG(f)}" alt="${esc(alt)}" loading="lazy">`;

// Replace missing images with a labelled placeholder (shows the expected filename)
document.addEventListener('error', e => {
  const t = e.target;
  if (t.tagName !== 'IMG') return;
  const ph = document.createElement('div');
  ph.className = 'ph'; ph.setAttribute('role', 'img'); ph.setAttribute('aria-label', t.alt);
  ph.textContent = t.getAttribute('src').split('/').pop();
  t.replaceWith(ph);
}, true);

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ===== PRODUCT CARDS + CART ===== */
const cardHtml = p => `<article class="card"><div class="img">${p.tag ? `<span class="tag ${p.tag === 'Yangi' ? 'new' : ''}">${p.tag}</span>` : ''}${imgTag(p.img, p.name)}</div>
  <div class="body"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
  <div class="row"><span class="price">${money(p.price)}</span><button class="btn btn-sm" data-add="${p.id}">Buyurtma berish</button></div></div></article>`;

const cart = new Map(); // product id -> quantity
function renderCart() {
  const list = $('#cartList'); let total = 0, count = 0;
  list.innerHTML = cart.size ? '' : '<li class="empty">Savat bo\'sh. Menyudan taom tanlang.</li>';
  cart.forEach((q, id) => {
    const p = PRODUCTS.find(x => x.id === id); total += p.price * q; count += q;
    list.insertAdjacentHTML('beforeend', `<li><b>${esc(p.name)}</b><span class="price">${money(p.price * q)}</span>
      <div class="qty"><button data-dec="${id}" aria-label="Kamaytirish">−</button><span>${q}</span><button data-inc="${id}" aria-label="Ko'paytirish">+</button></div></li>`);
  });
  $('#cartTotal').textContent = money(total); $('#cartCount').textContent = count;
}
function toggleCart(open) {
  $('#cart').hidden = !open; $('#scrim').hidden = !open;
  if (open) $('#cartClose').focus();
}
function changeQty(id, d) {
  const q = (cart.get(id) || 0) + d;
  q > 0 ? cart.set(id, q) : cart.delete(id); renderCart();
}
function telegramLink(text) { return `https://t.me/${CONFIG.telegramUser}?text=${encodeURIComponent(text)}`; }

document.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.add) { changeQty(+b.dataset.add, 1); toast('Savatga qo\'shildi ✓'); }
  else if (b.dataset.inc) changeQty(+b.dataset.inc, 1);
  else if (b.dataset.dec) changeQty(+b.dataset.dec, -1);
  else if (b.id === 'cartBtn' || b.hasAttribute('data-open-cart')) toggleCart(true);
  else if (b.id === 'cartClose') toggleCart(false);
});
$('#scrim').addEventListener('click', () => toggleCart(false));
$('#checkout').addEventListener('click', () => {
  if (!cart.size) return toast('Avval savatga taom qo\'shing');
  const lines = [...cart].map(([id, q]) => { const p = PRODUCTS.find(x => x.id === id); return `${p.name} × ${q} = ${money(p.price * q)}`; });
  window.open(telegramLink(`Buyurtma:\n${lines.join('\n')}\nJami: ${$('#cartTotal').textContent}`), '_blank', 'noopener');
});

/* ===== CAROUSEL (arrows, dots, swipe, looping) ===== */
function initCarousel(root) {
  const track = $('.track', root), dots = $('.dots', root);
  let i = 0;
  const pv = () => +getComputedStyle(root).getPropertyValue('--pv') || 1;
  const max = () => Math.max(0, track.children.length - pv());
  function go(n) {
    const m = max(); i = n > m ? 0 : n < 0 ? m : n; // wrap around
    track.style.transform = `translateX(${-i * 100 / pv()}%)`;
    $$('button', dots).forEach((d, k) => d.setAttribute('aria-current', k === i));
  }
  function build() {
    dots.innerHTML = '';
    for (let k = 0; k <= max(); k++) {
      const d = document.createElement('button'); d.setAttribute('aria-label', `Slayd ${k + 1}`);
      d.onclick = () => go(k); dots.append(d);
    }
    go(Math.min(i, max()));
  }
  $('.prev', root).onclick = () => go(i - 1);
  $('.next', root).onclick = () => go(i + 1);
  let x0 = null;
  const vp = $('.viewport', root);
  vp.addEventListener('pointerdown', e => { x0 = e.clientX; });
  vp.addEventListener('pointerup', e => {
    if (x0 !== null && Math.abs(e.clientX - x0) > 50) go(e.clientX < x0 ? i + 1 : i - 1);
    x0 = null;
  });
  vp.addEventListener('pointercancel', () => { x0 = null; });
  addEventListener('resize', build);
  build();
}

/* ===== RENDER SECTIONS ===== */
$('#featured .track').innerHTML = PRODUCTS.filter(p => p.featured).map(p => `<div>${cardHtml(p)}</div>`).join('');

const tabs = $('#tabs'), grid = $('#menuGrid');
tabs.innerHTML = CATEGORIES.map((c, k) => `<button role="tab" aria-selected="${k === 0}" data-cat="${c}">${c}</button>`).join('');
function showCategory(c) {
  const items = c === 'Barchasi' ? PRODUCTS : PRODUCTS.filter(p => p.cat === c);
  grid.innerHTML = items.map(cardHtml).join('');
  $$('.card', grid).forEach((el, k) => el.style.animationDelay = `${k * 40}ms`);
}
tabs.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('button', tabs).forEach(x => x.setAttribute('aria-selected', x === b));
  showCategory(b.dataset.cat);
});
showCategory('Barchasi');

$('#promos').innerHTML = PROMOS.map(p => `<article class="promo reveal"><div><span class="off">${p.off}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
  <button class="btn btn-light" data-open-cart>Buyurtma berish</button></div><div class="pimg">${imgTag(p.img, p.title)}</div></article>`).join('');
$('#stats').innerHTML = STATS.map(([n, l]) => `<div><dt>${n}</dt><dd>${l}</dd></div>`).join('');
$('#why').innerHTML = WHY.map(([ic, t, d]) => `<article class="reveal"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[ic]}</svg><h3>${t}</h3><p>${d}</p></article>`).join('');
$('#gallery .track').innerHTML = GALLERY.map((g, k) => `<div><button class="gitem" data-lb="${k}" aria-label="Kattalashtirish: ${g.cap}">${imgTag(g.img, g.cap)}</button></div>`).join('');
$('#reviews .track').innerHTML = REVIEWS.map(r => `<div><article class="rev"><div class="stars" role="img" aria-label="${r.stars} yulduz">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
  <p>${esc(r.text)}</p><div class="who"><span class="avatar">${imgTag(r.img, r.name)}</span><div><b>${esc(r.name)}</b><div class="sample">Namuna sharh</div></div></div></article></div>`).join('');
['#featured', '#gallery', '#reviews'].forEach(s => initCarousel($(s)));

const social = {
  ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  tg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/><path d="M9 13l8-6"/></svg>'
};
$('#info').innerHTML = `<li><b>Manzil</b><span>${esc(CONFIG.address)}</span></li>
  <li><b>Telefon</b><a href="tel:${CONFIG.phone.replace(/[^+\d]/g, '')}">${esc(CONFIG.phone)}</a></li>
  <li><b>Ish vaqti</b><span>${esc(CONFIG.hours)}</span></li>
  <li><b>Telegram</b><a href="${CONFIG.telegramUrl}" target="_blank" rel="noopener">${CONFIG.telegramUrl.replace('https://', '')}</a></li>
  <li><b>Instagram</b><a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener">${CONFIG.instagramUrl.replace('https://', '')}</a></li>`;
$('#footInfo').innerHTML = `<p>${esc(CONFIG.address)}</p><p><a href="tel:${CONFIG.phone.replace(/[^+\d]/g, '')}">${esc(CONFIG.phone)}</a></p><p>${esc(CONFIG.hours)}</p>
  <div class="socials"><a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${social.ig}</a><a href="${CONFIG.telegramUrl}" target="_blank" rel="noopener" aria-label="Telegram">${social.tg}</a></div>`;
$('#map').innerHTML = CONFIG.mapSrc
  ? `<iframe src="${CONFIG.mapSrc}" title="Google xaritasi" loading="lazy" allowfullscreen></iframe>`
  : '<div class="ph">Google Maps xaritasi shu yerda (CONFIG.mapSrc)</div>';

/* ===== LIGHTBOX ===== */
let li = 0;
const lb = $('#lb');
function lbShow(n) {
  li = (n + GALLERY.length) % GALLERY.length;
  $('#lbImg').innerHTML = `<img src="${IMG(GALLERY[li].img)}" alt="${esc(GALLERY[li].cap)}">`;
  $('#lbCap').textContent = `${GALLERY[li].cap} (${li + 1}/${GALLERY.length})`;
}
let lastFocus;
function lbOpen(n) { lastFocus = document.activeElement; lbShow(n); lb.hidden = false; $('.lb-x').focus(); }
function lbClose() { lb.hidden = true; lastFocus && lastFocus.focus(); }
$('#gallery').addEventListener('click', e => { const b = e.target.closest('[data-lb]'); if (b) lbOpen(+b.dataset.lb); });
$('.lb-x').onclick = lbClose; $('.lb-p').onclick = () => lbShow(li - 1); $('.lb-n').onclick = () => lbShow(li + 1);
lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
let lx = null;
lb.addEventListener('pointerdown', e => { lx = e.clientX; });
lb.addEventListener('pointerup', e => { if (lx !== null && Math.abs(e.clientX - lx) > 60) lbShow(e.clientX < lx ? li + 1 : li - 1); lx = null; });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (!lb.hidden) lbClose(); toggleCart(false); closeNav(); }
  if (!lb.hidden) { if (e.key === 'ArrowLeft') lbShow(li - 1); if (e.key === 'ArrowRight') lbShow(li + 1); }
});

/* ===== NAV: burger, sticky, active link, back-to-top, reveal ===== */
const nav = $('#nav'), burger = $('#burger');
function closeNav() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
nav.addEventListener('click', e => { if (e.target.closest('a')) closeNav(); });

const onScroll = () => {
  $('#header').classList.toggle('stuck', scrollY > 10);
  $('#totop').hidden = scrollY < 600;
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();
$('#totop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

const navLinks = $$('.nav a');
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach(a => { const s = $(a.getAttribute('href')); s && spy.observe(s); });
// sections that have no nav link map to the nearest one visually; fine for this layout

const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } }), { threshold: .15 });
$$('.reveal').forEach(el => rv.observe(el));

/* ===== CONTACT FORM ===== */
const form = $('#form'), status = $('#formStatus');
const rules = {
  name: v => v.trim().length >= 2 ? '' : 'Iltimos, ismingizni kiriting (kamida 2 ta belgi).',
  phone: v => /^\+?[\d\s()-]{9,16}$/.test(v.trim()) ? '' : 'Telefon raqamni to\'g\'ri kiriting. Masalan: +998 90 123 45 67',
  note: v => v.length <= 500 ? '' : 'Izoh 500 belgidan oshmasligi kerak.'
};
function validate(el) {
  const msg = rules[el.name](el.value);
  el.classList.toggle('invalid', !!msg); el.setAttribute('aria-invalid', !!msg);
  el.parentElement.querySelector('.err').textContent = msg; return !msg;
}
$$('input,textarea', form).forEach(el => el.addEventListener('blur', () => validate(el)));
form.addEventListener('submit', e => {
  e.preventDefault();
  const ok = $$('input,textarea', form).map(validate).every(Boolean);
  status.className = 'status ' + (ok ? 'ok' : 'bad');
  if (!ok) { status.textContent = 'Iltimos, xatolarni to\'g\'rilang.'; $('.invalid', form)?.focus(); return; }
  const d = new FormData(form);
  window.open(telegramLink(`Ism: ${d.get('name')}\nTelefon: ${d.get('phone')}\nIzoh: ${d.get('note') || '—'}`), '_blank', 'noopener');
  status.textContent = 'Telegram ochildi. Buyurtma xabarini u yerda "Yuborish" tugmasi bilan yakunlang.';
  form.reset();
});
renderCart();
