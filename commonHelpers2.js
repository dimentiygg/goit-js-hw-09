import"./assets/styles-7f31be37.js";const t=document.querySelector(".feedback-form"),o="feedback-form-state",l=e=>{const s=e.email.value,r=e.message.value;return{email:s,message:r}};t.addEventListener("input",e=>{localStorage.setItem(o,JSON.stringify(l(t)))});const a=localStorage.getItem(o);if(a){const e=JSON.parse(a);t.email.value=e.email,t.message.value=e.message}t.addEventListener("submit",e=>{e.preventDefault(),localStorage&&console.log(JSON.parse(a)),localStorage.clear(),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
