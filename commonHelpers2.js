import"./assets/styles-f122b7d5.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state";function n(t){const o=t.email.value,r=t.message.value;return{email:o,message:r}}e.addEventListener("input",t=>{localStorage.setItem(l,JSON.stringify(n(e)))});const s=()=>localStorage.getItem(l),a=JSON.parse(s());e.addEventListener("submit",t=>{t.preventDefault(),e.email.value==0||e.message.value==0?window.alert("All the fields must be filled in!"):(console.log(JSON.parse(s())),localStorage.clear(),e.reset())});localStorage.length!==0&&(e.email.value=a.email,e.message.value=a.message);
//# sourceMappingURL=commonHelpers2.js.map
