const IMG={
 "r1c0": "images/r1c0.jpg",
 "r1c2": "images/r1c2.jpg",
 "r1c3": "images/r1c3.jpg",
 "r1c4": "images/r1c4.jpg",
 "r1c5": "images/r1c5.jpg",
 "r1c6": "images/r1c6.jpg",
 "r2c0": "images/r2c0.jpg",
 "r2c1": "images/r2c1.jpg",
 "r2c2": "images/r2c2.jpg",
 "r2c3": "images/r2c3.jpg",
 "r2c4": "images/r2c4.jpg",
 "r2c5": "images/r2c5.jpg",
 "r2c6": "images/r2c6.jpg",
 "r2c7": "images/r2c7.jpg",
 "r3c0": "images/r3c0.jpg",
 "r3c1": "images/r3c1.jpg",
 "r3c2": "images/r3c2.jpg",
 "r3c3": "images/r3c3.jpg",
 "r3c4": "images/r3c4.jpg",
 "r3c5": "images/r3c5.jpg",
 "r3c6": "images/r3c6.jpg",
 "r3c7": "images/r3c7.jpg"
};
const PHOTO={'classic:Jus Alpukat':'r2c4','classic:Jus Mangga':'r2c2','classic:Jus Strawberry':'r2c5','classic:Jus Pisang':'r1c2','classic:Jus Jambu':'r2c0','classic:Jus Nanas':'r3c7','classic:Jus Naga':'r3c6','classic:Jus Sirsak':'r2c1',
 'cekek:Jus Alpukat':'r2c4','cekek:Jus Mangga':'r2c2','cekek:Jus Strawberry':'r2c5','cekek:Jus Jambu':'r2c0','cekek:Jus Nanas':'r3c7','cekek:Jus Naga':'r3c6','cekek:Jus Sirsak':'r2c1',
 'lemon:Lemon':'r1c3','lemon:Monberry':'r2c7','oat:Melon Oatmilk':'r3c1','oat:Peach Oatmilk':'r3c4',
 'crimson:Velvet Crush':'r1c4','crimson:Berry Blush':'r2c3','crimson:Mango Ruby':'r3c2','crimson:Guava Rose':'r3c3','crimson:Dragon Crimson':'r3c5'};
document.querySelectorAll('img[data-img]').forEach(i=>i.src=IMG[i.dataset.img]);
const rp = n => 'Rp' + n.toLocaleString('id-ID');
const E = {alpukat:'🥑',mangga:'🥭',strawberry:'🍓',jambu:'🍐',nanas:'🍍',naga:'🐉',sirsak:'🍈',pisang:'🍌',jeruk:'🍊',belimbing:'⭐',melon:'🍈',semangka:'🍉',
  lemon:'🍋',kiwi:'🥝',raspberry:'🍓',passionfruit:'🥭',peach:'🍑',blackberry:'🫐',blueberry:'🫐','blue curacao':'💧',orange:'🍊',pineapple:'🍍',
  banana:'🍌',watermelon:'🍉',dragonfruit:'🐉',dragon:'🐉',guava:'🍐',soursop:'🍈',oatmilk:'🌾',strawberry_:'🍓'};
const emo = (name, combo) => {
  if(combo){
    const parts = combo.toLowerCase().split(' x ').map(s=>s.trim());
    return parts.filter(p=>p!=='oatmilk').slice(0,2).map(p=>E[p]||'🍹').join('') || '🍹';
  }
  const k = name.toLowerCase().replace('jus ','').replace('es ','');
  return E[k] || '🍹';
};

const data = [
  {id:'classic', label:'Our Classics', note:'Jus andalan yang paling sering dipesan. Harga bersahabat.', type:'price', items:[
    ['Jus Alpukat',12000,95],['Jus Mangga',11000,60],['Jus Strawberry',10000,32],['Jus Pisang',13000,45],
    ['Jus Jambu',9000,68],['Es Jeruk',7000],['Jus Nanas',10000,45],['Jus Belimbing',11000],
    ['Jus Melon',12000],['Jus Semangka',13000],['Jus Naga',11000,50],['Jus Sirsak',10000,66]]},
  {id:'cekek', label:'Cekek Series', note:'Versi Cekek dari jus favoritmu.', type:'price', items:[
    ['Jus Alpukat',23000],['Jus Mangga',21000],['Jus Strawberry',19000],['Jus Jambu',20000],
    ['Jus Nanas',11000],['Jus Naga',21000],['Jus Sirsak',19000]]},
  {id:'ocean', label:'Ocean Series', cls:'ocean', note:'Segar ala pantai dengan blue curacao.', type:'combo', items:[
    ['Sunset Gazing','Orange x blue curacao'],['Berry Surf','Strawberry x lemon x blue curacao'],['Sunny Day','Lemon x blue curacao'],
    ['Emerald Waves','Kiwi x lemon x blue curacao'],['Golden Pine','Pineapple x blue curacao']]},
  {id:'lemon', label:'Lemon Series', cls:'lemon', note:'Asem segar, cocok buat siang yang panas.', type:'combo', items:[
    ['Monrasp','Raspberry x lemon'],['Monberry','Strawberry x lemon'],['Monkiwi','Kiwi x lemon'],['Monpassion','Passionfruit x lemon'],
    ['Lemon','Lemon'],['Monpeach','Peach x lemon'],['Monblack','Blackberry x lemon'],['Monblue','Blueberry x lemon']]},
  {id:'oat', label:'Oatmilk Series', cls:'oat', note:'Buah segar dicampur oatmilk. Creamy tanpa susu sapi.', type:'combo', items:[
    ['Banana Oatmilk','Banana x oatmilk'],['Mango Oatmilk','Mango x oatmilk'],['Watermelon Oatmilk','Watermelon x oatmilk'],
    ['Strawberry Oatmilk','Strawberry x oatmilk'],['Melon Oatmilk','Melon x oatmilk'],['Peach Oatmilk','Peach x oatmilk'],
    ['Dragon Oatmilk','Dragonfruit x oatmilk'],['Guava Oatmilk','Guava x oatmilk']]},
  {id:'crimson', label:'Crimson Series', cls:'crimson', note:'Buah dicampur raspberry. Manis, asem, dan warnanya cantik.', type:'combo', items:[
    ['Velvet Crush','Banana x raspberry'],['Sour Berry Zest','Soursop x raspberry'],['Guava Rose','Guava x raspberry'],
    ['Berry Blush','Strawberry x raspberry'],['Mango Ruby','Mango x raspberry'],['Golden Crimson','Passionfruit x raspberry'],
    ['Dragon Crimson','Dragonfruit x raspberry']]},
  {id:'addon', label:'Add On', note:'Mau lebih manis atau lebih creamy? Tambahin aja.', type:'price', items:[
    ['Stevia',5000],['Skm Putih',2000],['Skm Cokelat',2000],['Madu',5000],['Tropicana Classic',5000]]}
];

const tabs = document.getElementById('tabs'), grid = document.getElementById('grid'), note = document.getElementById('note');
const addonEmo = {'Stevia':'🌿','Skm Putih':'🥛','Skm Cokelat':'🍫','Madu':'🍯','Tropicana Classic':'🧃'};

function show(id){
  const cat = data.find(d=>d.id===id);
  [...tabs.children].forEach(b=>b.setAttribute('aria-selected', b.dataset.id===id));
  note.textContent = cat.note;
  grid.innerHTML = '';
  cat.items.forEach(it=>{
    const el = document.createElement('article'); const ph = PHOTO[cat.id+':'+it[0]]; const pic = ph ? `<div class="thumb"><img src="${IMG[ph]}" alt="${it[0]}" loading="lazy"></div>` : null;
    el.className = 'item ' + (cat.cls||'');
    if(cat.type==='combo'){
      el.innerHTML = `${pic||`<div class="emo" aria-hidden="true">${emo(it[0],it[1])}</div>`}<h3>${it[0]}</h3><p class="desc">${it[1]}</p><div class="row"><span class="ask">Tanya harga di gerai</span></div>`;
    } else {
      const icon = cat.id==='addon' ? addonEmo[it[0]] : emo(it[0]);
      const k = it[2] ? `<span class="kkal">${it[2]} kkal</span>` : '';
      el.innerHTML = `${pic||`<div class="emo" aria-hidden="true">${icon}</div>`}<h3>${it[0]}</h3><div class="row"><span class="price">${rp(it[1])}</span>${k}</div>`;
    }
    grid.appendChild(el);
  });
}
data.forEach((d,i)=>{
  const b = document.createElement('button');
  b.className='tab'; b.role='tab'; b.dataset.id=d.id; b.textContent=d.label;
  b.addEventListener('click',()=>show(d.id));
  tabs.appendChild(b);
});
show('classic');
