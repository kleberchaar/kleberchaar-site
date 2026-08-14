const modal=document.getElementById("modal"),frame=document.getElementById("frame"),title=document.getElementById("title"),header=document.getElementById("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
document.querySelectorAll(".card img").forEach(img=>{
  if(img.dataset.local) img.src=img.dataset.local;
  img.addEventListener("error",()=>{if(img.dataset.local){img.src=img.dataset.local;delete img.dataset.local;return} if(img.dataset.fallback&&img.src!==img.dataset.fallback) img.src=img.dataset.fallback});
});
document.querySelectorAll("[data-video]").forEach(b=>b.onclick=()=>{frame.src="https://www.youtube-nocookie.com/embed/"+b.dataset.video+"?autoplay=1&rel=0&modestbranding=1&playsinline=1";title.textContent=b.dataset.title||"";modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");frame.src="";document.body.style.overflow=""}
document.getElementById("close").onclick=closeModal;modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.querySelectorAll("#filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.filter;document.querySelectorAll(".card").forEach(c=>c.style.display=f==="todos"||c.dataset.cat.includes(f)?"block":"none")});
document.getElementById("menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
