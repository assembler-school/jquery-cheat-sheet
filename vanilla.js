
/*
cuando seleccione ver que tabla es y luego el numero de hijo, 
en switch ir alli i crear la demo 
*/
var printJSCode=document.getElementById("show-js-code");
var printJSDemo=document.getElementById("show-js-demo");
var p=document.createElement("p");
var btn=document.createElement("button");
var inpt=document.createElement("input");
var img=document.createElement("img");
img.setAttribute("src","https://e7.pngegg.com/pngimages/199/348/png-clipart-javascript-programmer-programming-language-computer-programming-node-js-angle-text.png");
img.setAttribute("id","im");
inpt.setAttribute("type","text");
inpt.setAttribute("id","inpt");
btn.setAttribute("id","btn");
btn.innerHTML="button";
var evento= $("#event").children().children();
$(document).ready(function(){
    $("section div ul ").on("click","li",function(e){
        //let parent=$(e.currentTarget).parent();
        printJSCode.innerHTML="contenido codigo JS";
        printJSDemo.innerHTML="demo JS";
        let selected= $(e.currentTarget)[0];
        if($.inArray(selected, evento)>-1){
            switch(selected.id){
                case "item-1":  printJSCode.innerHTML="window.onload=(event)=>{//code}";
                                printJSDemo.innerHTML="";
                                printJSDemo.appendChild(btn);
                        break;
                case "item-2":  printJSCode.innerHTML=' document.getElementById("myBtn").addEventListener("click", function);';
                                printJSDemo.innerHTML="";
                                printJSDemo.appendChild(btn);
                                btn.addEventListener("click", event);
                                function event(){
                                    p.innerHTML="button has been clicked";
                                    printJSDemo.appendChild(p);
                                }
                                break;
                case "item-3":  printJSCode.innerHTML='<p ondblclick="myFunction()">'+'Double-click this paragraph to trigger a function.'+'</p>';
                                printJSDemo.innerHTML="";
                                btn.innerHTML="double click on me"
                                printJSDemo.appendChild(btn);
                                btn.addEventListener("dblclick", event2);
                                function event2(){
                                    p.innerHTML="button double times has been clicked";
                                    printJSDemo.appendChild(p);
                                }
                            break;
                case "item-4":  printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("keydown", function )';
                                printJSDemo.innerHTML="";
                                printJSDemo.appendChild(inpt);
                                inpt.addEventListener("keydown", event3);

                                function event3(){
                                    p.innerHTML="pressed key on board";
                                    printJSDemo.appendChild(p);
                                }
                            break;
                case "item-5": printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("mouseover", function )';
                                printJSDemo.innerHTML="put cursor here";

                                document.getElementById("show-js-demo").addEventListener("mouseover",event4);
                                function event4(){
                                    p.innerHTML="mouse over div";
                                    printJSDemo.appendChild(p);
                                }
                            break;
                case "item-6": printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("change", function )';
                                inpt.value="value change";
                                printJSDemo.appendChild(inpt);
                                inpt.addEventListener("change",event5);
                                function event5(){
                                    p.innerHTML="input value has changed";
                                    printJSDemo.appendChild(p);
                                }
                            break;
                case "item-7": printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("load", function )';
                                printJSDemo.innerHTML="";
                                printJSDemo.appendChild(img);
                                img.addEventListener("load", event6);
                                //no load??
                                function event6(){
                                    p.innerHTML="image has loaded";
                                    printJSDemo.appendChild(p);
                                }
                                
                            break;
                case "item-8": printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("unload", function )';
                                printJSDemo.innerHTML="";
                                img.setAttribute("src","..https://e7.pngegg.com/pngimages/199/348/png-clipart-javascript-programmer-programming-language-computer-programming-node-js-angle-text.png");
                                printJSDemo.appendChild(img);
                                img.addEventListener("unload", event7);
                                //no load??
                                function event7(){
                                    p.innerHTML="image has no load";
                                    printJSDemo.appendChild(p);
                                };
                            break;
                case "item-9": printJSCode.innerHTML='<button type="submit">'
                                +'let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("submit", function )';
                                let form =document.createElement("form")
                                printJSDemo.innerHTML="";
                                btn.setAttribute("type","submit");
                                printJSDemo.appendChild(form);
                                form.appendChild(inpt);
                                form.appendChild(btn);
                                form.addEventListener("submit", event8);
                                function event8(){
                                    p.innerHTML="has submitted";
                                    printJSDemo.appendChild(p);
                                }

                            break;
                case "item-10":  printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                'elem.addEventListener("mouseover", function )';
                                printJSDemo.innerHTML="put cursor here";
                                
                                document.getElementById("show-js-demo").addEventListener("mouseover",event4);
                                function event4(){
                                    p.innerHTML="mouse over div";
                                    printJSDemo.appendChild(p);
                                }
                            break;
                case "item-11":   printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                                    'elem.addEventListener("change", function )'+
                                    'myFunction(){}'+'if(this.checked){'+
                                        'p.innerHTML="checked";'+
                                        'printJSDemo.appendChild(p);'+
                                    '}else{'+
                                       'p.innerHTML="unchecked";'+
                                        'printJSDemo.appendChild(p);'+
                                    '}';
                                printJSDemo.innerHTML="";
                                let check=document.createElement("input");
                                check.setAttribute("type","checkbox");
                                printJSDemo.appendChild(check);
                                check.addEventListener("change", event9);
                                function event9(){
                                    if(this.checked){
                                        p.innerHTML="checked";
                                        printJSDemo.appendChild(p);
                                    }else{
                                        p.innerHTML="unchecked";
                                        printJSDemo.appendChild(p);
                                    }
                                   
                                }
                            break;
                case "item-12":  printJSCode.innerHTML='let elem = document.getElementById("type-here");'+
                'elem.addEventListener("click", function )'+
                'myFunction()}{element.innerHTML=this.innerHTML}';
                                printJSDemo.innerHTML="";
                                let u=document.createElement("ul");
                                let li=document.createElement("li");
                                let li2=document.createElement("li");
                                let li3=document.createElement("li");
                                li.innerHTML="i am list";
                                li2.innerHTML="i am other";
                                li3.innerHTML="i am the last";
                                li.setAttribute("id","list");
                                printJSDemo.appendChild(u);
                                u.appendChild(li);
                                u.appendChild(li2);
                                u.appendChild(li3);
                                li.addEventListener("click",event10);
                                li2.addEventListener("click",event10);
                                li3.addEventListener("click",event10);
                                function event10(e){

                                    p.innerHTML=this.innerHTML;
                                    printJSDemo.appendChild(p);
                                }
                            break;
            }
        }
    });
});