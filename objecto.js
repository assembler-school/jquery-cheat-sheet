const exercisesArr= [
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ0(jQueryDiv),exerciseJS0(jScriptDiv)}
    },
    {
        dataset:1,
        tittle:"HTML item has been clicked",
        commandJQ:"on()",
        commandJS:"click",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ1(jQueryDiv),exerciseJS1(jScriptDiv)}
    },
    {
        dataset:2,
        tittle:"HTML item has been double clicked",
        commandJQ:"dblclick",
        commandJS:"dblclick",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ2(jQueryDiv),exerciseJS2(jScriptDiv)}
    },
    {
        dataset:3,
        tittle:"presses a key on the keyboard",
        commandJQ:"keypress()",
        commandJS:"keypress()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ3(jQueryDiv),exerciseJS3(jScriptDiv)}
    },
    {
        dataset:4,
        tittle:"user moves the mouse cursor",
        commandJQ:"mousemove()",
        commandJS:"movemouse()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ4(jQueryDiv),exerciseJS4(jScriptDiv)}
    },
    {
        dataset:5,
        tittle:"changes a value of an text input",
        commandJQ:"change()",
        commandJS:"change()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ5(jQueryDiv),exerciseJS5(jScriptDiv)}
    },
    {
        dataset:6,
        tittle:"image is loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ6(jQueryDiv),exerciseJS6(jScriptDiv)}
    },
    {
        dataset:7,
        tittle:"image fails to load",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ7(jQueryDiv),exerciseJS7(jScriptDiv)}
    },
    {
        dataset:8,
        tittle:"form is submitted",
        commandJQ:"submit()",
        commandJS:"submit()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ8(jQueryDiv),exerciseJS8(jScriptDiv)}
    },
    {
        dataset:9,
        tittle:"changes the option of a select element",
        commandJQ:"change()",
        commandJS:"change()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ9(jQueryDiv),exerciseJS9(jScriptDiv)}
    },
    {
        dataset:10,
        tittle:"position the mouse over an element",
        commandJQ:"mouseover()",
        commandJS:"mouseover()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ10(jQueryDiv),exerciseJS10(jScriptDiv)}
    },
    {
        dataset:11,
        tittle:"list item is clicked, show the item that was clicked",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ11(jQueryDiv),exerciseJS11(jScriptDiv)}
    },
    {
        dataset:12,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ12(jQueryDiv),exerciseJS12(jScriptDiv)}
    },
    {
        dataset:13,
        tittle:"Create an HTML element with any text value",
        commandJQ:"create()",
        commandJS:"createElement()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ13(jQueryDiv),exerciseJS13(jScriptDiv)}
    },
    {
        dataset:14,
        tittle:"Remove an HTML element with any text value",
        commandJQ:"remove()",
        commandJS:"removed()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ14(jQueryDiv),exerciseJS14(jScriptDiv)}
    },
    {
        dataset:15,
        tittle:"Append an HTML element ",
        commandJQ:"append()",
        commandJS:"append()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ15(jQueryDiv),exerciseJS15(jScriptDiv)}
    },
    {
        dataset:16,
        tittle:"Prepend an HTML element",
        commandJQ:"prepend()",
        commandJS:"prepend()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ16(jQueryDiv),exerciseJS16(jScriptDiv)}
    },
    {
        dataset:17,
        tittle:"Create and add an HTML with after",
        commandJQ:"after()",
        commandJS:"after()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ17(jQueryDiv),exerciseJS17(jScriptDiv)}
    },
    {
        dataset:18,
        tittle:"reate and add an HTML with beforer",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(jQueryDiv,jScriptDiv){exerciseJQ18(jQueryDiv),exerciseJS18(jScriptDiv)}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"onload()",
        functions: function(){exerciseJQ0(),exerciseJS0()}
    },
    
]