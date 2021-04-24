import { jsFuncData, jsEventData } from "/data.js";

const eventItems = document.querySelectorAll("#event td");
const functionItems = document.querySelectorAll("#function td");

export const jsDisplay = (index) => {
  if (document.querySelector(".modalContent").id === "functionModal") {
    document.getElementById(`jsFunc${index}`).innerText = jsFuncData[index];
  }
  if (document.querySelector(".modalContent").id === "eventModal") {
    document.getElementById(`jsEvent${index}`).innerText = jsEventData[index];
  }
};
