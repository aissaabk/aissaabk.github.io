document.getElementById("lang-switch").addEventListener("change", e=>{
  setLanguage(e.target.value);
});
window.addEventListener("DOMContentLoaded", ()=>{
  setLanguage("ar");
  observeSections();
});
function setLanguage(lang){
 document.documentElement.dir = (lang==="ar") ? "rtl" : "ltr";
 document.querySelectorAll("[data-ar]").forEach(el=>{
   el.textContent = el.getAttribute("data-"+lang);
 });
}
function observeSections(){
 const obs=new IntersectionObserver(entries=>{
   entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("section-visible"); });
 });
 document.querySelectorAll(".section").forEach(sec=>obs.observe(sec));
}
