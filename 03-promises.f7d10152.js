var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r={form:document.querySelector(".form"),submitBtn:document.querySelector('[type="submit"]')};let l=0,u=0,s=0;function d(e,o){const t=Math.random()>.3;new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),l)})).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}r.submitBtn.addEventListener("click",(function(e){e.preventDefault(),l=Number(r.form.delay.value),u=Number(r.form.step.value),s=Number(r.form.amount.value);for(let e=1;e<=s;e+=1)d(e,l),l+=u}));
//# sourceMappingURL=03-promises.f7d10152.js.map