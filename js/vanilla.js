import { jsFuncData, jsEventData, jsEffectData } from "/data.js";

const javaScriptBtn =  document.getElementById("javaScriptBtn");
const jQueryBtn = document.getElementById("jQueryBtn");

export const jsDisplay = (index) => {
  if (document.querySelector(".modalContent").id === "functionModal") {
    document.getElementById(`jsFunc${index}`).innerText = jsFuncData[index];
     javaScriptBtnActivated();
  }
  if (document.querySelector(".modalContent").id === "eventModal") {
    document.getElementById(`jsEvent${index}`).innerText = jsEventData[index];
    javaScriptBtnActivated();
  }
  if (document.querySelector(".modalContent").id === "effectModal") {
    document.getElementById(`jsEffect${index}`).innerText = jsEffectData[index];
    javaScriptBtnActivated();
  }
};


const javaScriptBtnActivated = () => {
  javaScriptBtn.addEventListener("click", function(){
    jQueryBtn.classList.remove("activeBtn");
    javaScriptBtn.classList.add("activeBtn");
    javaScriptBtn.nextElementSibling.style.visibility="visible";
    });
}