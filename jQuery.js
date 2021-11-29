function createElements0JQ(){
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).click(function)</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements1JQ(){
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).dblclick(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<p id='p'>Click twice to inner a new text</p>")
    $("#p").css("cursor", "pointer")
    $(document).ready(function(){
        $("#p").dblclick(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements2JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>There are three options: keydown, keypress, o keyup<br>Example with keypress<br>$(selector).keypress(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<input id='input'>")
    $(document).ready(function(){
        $("#input").keypress(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements3JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>There are a lot of options: mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup<br>Example with mouseover<br>$(selector).mouseover(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<p id='p'>Move the cursor on this paragraph</p>")
    $(document).ready(function(){
        $("#p").mouseover(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements4JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).change(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<input id='input' placeholder='Change text to do an action'>")
    $(document).ready(function(){
        $("#input").change(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements5JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).on('load', function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img' src='assets/LOGO-ORG.png'>")
    $(document).ready(function(){
        $("#img").on("load", function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("This will be showed if image has been loaded")
        })
    })
}
function createElements6JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).on('error', function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img' src='a'>")
    $("#img").css("width", "150")
    $("#img").css("height", "150")
    $(document).ready(function(){
        $("#img").on("error", function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("This will be showed if image has been not loaded")
        })
    })
}
function createElements7JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).submit(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<form id='form' action=''></form>")
    $("#form").append("<input>")
    $("#form").append("<input id='submit' type='submit'>")
    $(document).ready(function(){
        $("#submit").on("submit", function(){
            alert("Your form has been submitted")
        })
    })
}
function createElements8JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).submit(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<select id='select'></select>")
    $("#select").append("<option>Car</option>")
    $("#select").append("<option>Bus</option>")
    $("#select").append("<option>Motorbike</option>")
    $(document).ready(function(){
        $("#select").change(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("You changed the option")
        })
    })
}
function createElements9JQ() {
$("#contentJQuery").append("<div id='divJQ'></div>")
$("#divJQ").append("<p>There are a lot of options: mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup<br>Example with mouseover<br>$(selector).mouseover(function)</p>")
$("#divJQ").append("<br>")
$("#divJQ").append("<p id='p'>Move the cursor on this paragraph</p>")
$(document).ready(function(){
    $("#p").mouseover(function(){
        $("#divJQ").append("<br>")
        $("#divJQ").append("Hello")
    })
})
}
function createElements10JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).prop(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<input id='input' type='checkbox'>")
    $(document).ready(function(){
        $("#input").click(function(){
        if($("#input").prop("checked")) {
            $("#divJQ").append("<br>")
            $("#divJQ").append("The checkbox is checked")
        } else {
            $("#divJQ").append("<br>")
            $("#divJQ").append("The checkbox is not checked")
        }
    })
})
}
function createElements11JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).click(function)</p>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<li id='car' class='li'>Car</li>")
    $("#divJQ").append("<li id='bus' class='li'>Bus</li>")
    $("#divJQ").append("<li id='motorbike' class='li'>Motorbike</li>")
    $(".li").css("cursor", "pointer")
    $(document).ready(function(){
        $("#car").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Car")
        })
        $("#bus").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Bus")
        })
        $("#motorbike").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Motorbike")
        })
    })
}
function createElements12JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).on('load', function)</p>")
    $(document).ready(function(){
        $("html").html(("load", function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("HTML loaded, you can manipulate the JS")
        }))
})
}
function createElements13JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).remove();</p>")
    $("#divJQ").append("<button id='btn'>Create element</button>")
    $("#divJQ").append("<button id='btn2'>Remove element</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<p>Hello</p>")
        })
        $("#btn2").click(function(){
            $("#divJQ").children().last().remove()
})
})
}
function createElements14JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).append(node);")
    $("#divJQ").append("<button id='btn'>Click me to append</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements15JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).prepend(node);")
    $("#divJQ").append("<button id='btn'>Click me to prepend</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").prepend("<br>")
            $("#divJQ").prepend("Hello")
        })
    })
}
function createElements16JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).after(node);")
    $("#divJQ").append("<button id='btn'>Click me to write after</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements17JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).before(node);")
    $("#divJQ").append("<button id='btn'>Click me to write before</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").prepend("<br>")
            $("#divJQ").prepend("Hello")
        })
    })
}
function createElements18JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).clone(node);")
    $("#divJQ").append("<button id='btn'>Click me to clone hello</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}
function createElements19JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).addClass(classname,function(index,currentclass));")
    $("#divJQ").append(br)
    $("#divJQ").append("<button id='btn'>Click me to add red background clas</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#btn").addClass("red")
        })
    })
}
function createElements20JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>$(selector).removeClass(classname,function(index,currentclass));")
    $("#divJQ").append("<button id='btn'>Click me to remove red background clas</button>")
    $("#btn").addClass("red")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#btn").removeClass("red")
        })
    })
}
function createElements21JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).toggleClass(classname,function(index,currentclass),switch)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Click me to toggle red background clas</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#btn").toggleClass("red")
        })
    })
}
function createElements22JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).prop('disabled', true/false)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Click me to toggle red background clas</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#btn").prop("disabled", true)
        })
    })
}
function createElements23JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).prop('disabled', true/false)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Disabled button</button>")
    $("#divJQ").append("<button id='btn1'>Click to enable</button>")
    $("#btn").prop("disabled", true)
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#btn").prop("disabled", false)
        })
    })
}
function createElements24JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).attr('data-src', 'set the name')")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img'src='assets/LOGO-ORG.png'></img>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Click me to set data-src</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#img").attr("data-src", "CREATED")
        })
    })
}
function createElements25JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).removeAttr('data-src')")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img'src='assets/LOGO-ORG.png' data-src='CREATED'></img>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Click me to set data-src</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#img").removeAttr("data-src")
        })
    })
}
function createElements26JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).hide(speed)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Click me to hide this button</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#btn").hide("slow")
        })
    })
}
function createElements27JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).show(speed)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<button id='btn'>Hello</button>")
    $("#btn").hide()
    $("#divJQ").append("<button id='btn1'>Click me to show the other button</button>")
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#btn").show("slow")
        })
    })
}
function createElements28JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).fadeIn(speed)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img'src='assets/LOGO-ORG.png'></img>")
    $("#img").hide()
    $("#divJQ").append(br)
    $("#divJQ").append("<button id='btn1'>Click me to fade in the image</button>")
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#img").fadeIn(3000)
        })
    })
}
function createElements29JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("$(selector).fadeOut(speed)")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<img id='img'src='assets/LOGO-ORG.png'></img>")
    $("#divJQ").append(br)
    $("#divJQ").append("<button id='btn1'>Click me to fade out the image</button></button>")
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#img").fadeOut(3000)
        })
    })
}
function createElements30JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(.selector).css()</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $("#divJQ").append("<li class='liClassJq'>List Element with class liClassJq</li>")
    $("#divJQ").append("<li class='liClassJq'>List Element with class liClassJq</li>")
    $("#divJQ").append("<li>List Element with no class</li>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $(".liClassJq").css("background-color", "yellow")
        })
    })
}
function createElements31JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).append('text')</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $("#divJQ").append("<p id='p1'>I'm the parent</p>")
    $("#p1").append("<p id='p2'>I'm the son</p>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#p2").parent().css("fontSize", "25px")
        })
    })
}
function createElements32JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).chlidren().css()</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $("#divJQ").append("<p id='p1'>I'm the parent</p>")
    $("#p1").append("<p id='p2'>I'm the son</p>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#p1").children().css("fontSize", "25px")
        })
    })
}
function createElements33JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(.selector).css()</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $("#divJQ").append("<li class='liJq'>List Element with class liJq</li>")
    $("#divJQ").append("<li class='liJq'>List Element with class liJq</li>")
    $("#divJQ").append("<li>List Element with no class</li>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $(".liJq").css("font-size", "25px")
        })
    })
}
function createElements34JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).chlidren().css()</p>")
    $("#divJQ").append("<button id='btn'>Change css of id sP</button>")
    $("#divJQ").append("<p id='fP'>My id is fP</p>")
    $("#divJQ").append("<p id='sP'>My id is sP</p>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#sP").css("font-size", "25px")
        })
    })
}
function createElements35JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).css()</p>")
    $("#divJQ").append("<button id='btn'>Display block</button>")
    $("#divJQ").append("<p id='helloPjs'>Now you can see me</p>")
    $("#divJQ").append("<p id='helloSjs'>Now you can see me, and in green</p>")
    $("#helloPjs").css("display", "none")
    $("#helloSjs").css("display", "none")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#helloPjs").css("display", "block")
            $("#helloSjs").css("display", "block")
            $("#helloSjs").css("color", "green")
        })
    })
}
function createElements36JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>var x = $('selector').val()</p>")
    $("#divJQ").append("<button id='btn'>Alert selected</button>")
    $("#divJQ").append("<select id='select'></select>")
    $("#select").append("<option>Car</option>")
    $("#select").append("<option>Bus</option>")
    $("#select").append("<option>Motorbike</option>")
    $(document).ready(function(){
        $("#btn").click(function(){
            var x = $("#select").val()
            alert(x)
        })
    })
}
function createElements37JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).find('a:first').attr('href', 'link')</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $("#divJQ").append("<a class='entire'>I'm a link element</a>")
    $("#divJQ").append("<a class='entire'>I'm a link element</a>")
    $("#divJQ").append("<a class='entire'>I'm a link element</a>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $('#divJQ').find("a:first").attr("href", "https://www.google.com")
        })
    })
}
function createElements38JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).val()</p>")
    $("#divJQ").append("<button id='btn'>Alert input</button>")
    $("#divJQ").append("<br>")
    $("#divJQ").append("<input id='input22'></input>")
    $(document).ready(function(){
        $("#btn").click(function(){
            var x = $("#input22").val()
            alert(x)
        })
    })
}
function createElements39JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(.selector).remove()</p>")
    $("#divJQ").append("<button id='btn'>Remove listJq class elements</button>")
    $("#divJQ").append("<li class='listJq'>List Element with class listJq</li>")
    $("#divJQ").append("<li class='listJq'>List Element with class listJq</li>")
    $("#divJQ").append("<li>List Element with no class</li>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $(".listJq").remove()
        })
    })
}
function createElements40JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).on('load', function(setTimeout(function(), time)))</p>")
    $("#divJQ").append("<p id='p'>Wait 2 seconds</p>")
    $(document).ready(function(){
        $("#divJQ").on("load", changeColor())
            function changeColor() {
                setTimeout(function() {
                    $("#p").css("color", "blue")
                    $("#p").css("font-size", "30px")}, 2000)
                }
        }
    )}
function createElements41JQ() {
    $("#contentJQuery").append("<div id='divJQ'></div>")
    $("#divJQ").append("<p>(selector).append('text')</p>")
    $("#divJQ").append("<button id='btn'>Click me</button>")
    $(document).ready(function(){
        $("#btn").click(function(){
            $("#divJQ").append("<br>")
            $("#divJQ").append("Hello")
        })
    })
}