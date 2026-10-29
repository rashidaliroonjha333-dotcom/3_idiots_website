const PRODUCTS = [
{id:'s1',name:'Street Runner Sneakers',category:'Shoes',price:6490,tag:'Bestseller',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',desc:'Everyday comfort, bold colour.'},
{id:'s2',name:'Classic Court Low',category:'Shoes',price:5290,tag:'New',image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85',desc:'A clean, versatile everyday sneaker.'},
{id:'s3',name:'Urban High-Top',category:'Shoes',price:7290,tag:'Limited',image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85',desc:'Street-ready style with extra attitude.'},
{id:'s4',name:'Everyday Canvas',category:'Shoes',price:3990,tag:'Easy wear',image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85',desc:'Lightweight canvas for everyday plans.'},
{id:'c1',name:'Essential Oversized Tee',category:'Clothes',price:1890,tag:'Bestseller',image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',desc:'Soft cotton, relaxed fit.'},
{id:'c2',name:'Everyday Denim Jacket',category:'Clothes',price:4990,tag:'New',image:'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85',desc:'An easy layer for cooler evenings.'},
{id:'c3',name:'Relaxed Cargo Pants',category:'Clothes',price:3290,tag:'Popular',image:'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=85',desc:'Utility pockets, laid-back fit.'},
{id:'c4',name:'Everyday Hoodie',category:'Clothes',price:3590,tag:'Comfort',image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',desc:'Your favourite layer for slow days.'},
{id:'p1',name:'Cloud Slide Slippers',category:'Slippers',price:1490,tag:'Bestseller',image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85',desc:'Cushioned comfort for daily wear.'},
{id:'p2',name:'Minimal Everyday Slides',category:'Slippers',price:1190,tag:'Easy wear',image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85',desc:'Simple slides for home and beyond.'},
{id:'p3',name:'Weekend Flip-Flops',category:'Slippers',price:990,tag:'Value pick',image:'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85',desc:'Light, easy, and ready for the weekend.'},
{id:'p4',name:'Sport Comfort Slides',category:'Slippers',price:1690,tag:'New',image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85',desc:'A sporty look with a soft feel.'}
];
const money = n => 'Rs. ' + Number(n).toLocaleString('en-PK');
function getCart(){try{return JSON.parse(localStorage.getItem('idiotsCart')||'[]')}catch(e){return []}}
function saveCart(cart){localStorage.setItem('idiotsCart',JSON.stringify(cart));updateCartCount()}
function updateCartCount(){let count=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count)}
function addToCart(id){let p=PRODUCTS.find(x=>x.id===id);if(!p)return;let cart=getCart();let item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart(cart);showToast(p.name+' added to your bag')}
function showToast(msg){let t=document.querySelector('.toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
function productCard(p){return `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="badge">${p.tag}</span></div><div class="product-info"><div class="product-title-row"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div><p class="muted">${p.desc}</p><button onclick="addToCart('${p.id}')">Add to bag <span>＋</span></button></div></article>`}
function renderProducts(target,items){let el=document.querySelector(target);if(el)el.innerHTML=items.map(productCard).join('')}
document.addEventListener('DOMContentLoaded',()=>{updateCartCount();let toggle=document.querySelector('.menu-toggle');let links=document.querySelector('.nav-links');if(toggle&&links)toggle.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear())});
function subscribe(e){e.preventDefault();let note=document.querySelector('#newsletter-note');if(note){note.textContent='Thanks for joining the 3 Idiots list!';note.classList.add('show')}e.target.reset()}
