const t={body:document.body,startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},o=document.createElement("h1");o.style.fontSize="18px",o.textContent="To start color change of background color press 'Start' button and to stop color change press 'Stop' button.",t.startBtn.before(o);let e=null,n="";t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,console.log(`Body random background color change was started with inerval ${timerInterval/1e3} second:`),e=setInterval((()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=o,n=o,console.log(`Color was changed to ${o}`)}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e),console.log(`Body random background color change was stopped on ${n} color.`)}));
//# sourceMappingURL=01-color-switcher.5c5ab1d5.js.map