import {jsFuncData} from "/data.js";


const eventItems = document.querySelectorAll("#event td");
const functionItems = document.querySelectorAll("#function td");


export const jsDisplay = (index) => {
    document.getElementById(`jsFunc${index}`).innerText = jsFuncData[index]
}



