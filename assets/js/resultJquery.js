
/**************** EVENTS ***************/

// Event 1 -
$(document).ready(function() {
    $('.event1-jquery').html('DOM with Jquery fully loaded!');
});

// Event 2
$('.btn__event-2--jquery').on('click', () => {
    alert('JQuery Button!');
})

// Event 3
$('.btn__event-3--jquery').on('dblclick', () => {
    alert('JQuery Button dblclick!');
})

// Event 4 
$(document).keyup(function(event) { 
    if (event.which === 66) { 
        alert('Jquery B is pressed!'); }})

// Event 5 
$('.event-5--jquery').on('mouseover', (event) => event.target.style.color = 'green');
$('.event-5--jquery').on('mouseout', (event) => event.target.style.color = 'black');

// Event 6  
$('.btn__event-6--jquery').on('click', () => $('.inputText').val('Chiaki'));

// Event 7 
$('.btn__event-7--jquery').on('click', checkImage);
function checkImage() {
    $("#myImgJquery").on('load', function() {
        alert('I loaded Jquery image!');
      }).attr('src', 'https://images.unsplash.com/photo-1508736375612-66c03035c629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80');
}

// Event 8
$('.btn__event-8--jquery').on('click', checkImageEvent8);
function checkImageEvent8() {
    $("#myImg8Jquery").on('error', function() {
        $('.event--8-jquery').html('Image Jquery fails to load');
      }).attr('src', 'https://images.unsplash.com/3to=format&fit=crop&w=1053&q=80');
}

// Event 9 
$("#myFormJquery").submit(function() { alert("The Jquery form has been submitted") })

// Event 10  
$(".target").change(function() { alert("You have choose another option with Jquery")})

// Event 11
$('.btn__event-11--jquery').on('mouseover', (event) => event.target.style.background = 'green');

// Event 12   
$(".check").click(function(){
    $("#myCheck").prop("checked", true);
});
$(".uncheck").click(function(){
    $("#myCheck").prop("checked", false);
});

// Event 13
$(".list-jquery li").click(function() { alert($(this).html()) })


/**************** FUNCTIONS ***************/

// Function 1
$('.btn__function-1--jquery').click(function() {
    $('.function1').append("<p>Santa Clause of Jquery is comming!</p>")
})

// Function 2
$('.btn__function-2--jquery').click(function() {
    $('#function2-jquery').remove()
})

// Function 3
$('.btn__function-3--jquery').click(function() {
    $('.function3').append("<p>Rabbit Jquery</p>")
})

// Function 4
$('.btn__function-4--jquery').click(function() {
    $('.function4').prepend("<p>Rabbit Jquery</p>")
})

// Function 5
$('.btn__function-5--jquery').click(function() {
    $('.function5').after("<p>Rabbit Jquery</p>")
})

// Function 6
$('.btn__function-6--jquery').click(function() {
    $('.function6').before("<p>Rabbit Jquery</p>")
})

// Function 7 
$('.btn__function-7--jquery').click(function() {
    let item = $('.list--2 li').last(); // Get the last item in the list
    let itemClone = item.clone();
    $('.list--1').append(itemClone)
})

// Function 8
$('.btn__function-8--jquery').click(function() {
    $('.function8').addClass('addClassJquery')
    alert('A Jquery class has been added')
})

// Function 9
$('.btn__function-9--jquery').click(function() {
    $('.function9').removeClass('removeClassJquery')
    alert('A Jquery class has been removed')
})

// Function 10
$('.btn__function-10--jquery').click(function() {
    $('.function10').toggleClass('toggleClassJquery')
    alert('A Jquery class has been toggeled')
})

// Function 11
$('.btn__function-11--jquery').click(function() {
    $('.btn__disabled11--jquery').prop('disabled', true)
})

// Function 12
$('.btn__function-12--jquery').click(function() {
    $('.btn__disabled12--jquery').prop('disabled', false)
})

// Function 13
$('.btn__function-13--jquery').click(function() {
    $('#img-13--jquery').attr('src', "assets/image/snoopy/snoopy11.svg")
})

// Function 14
$('.btn__function-14--jquery').click(function() {
    $('#img-14--jquery').removeAttr('src')
})

// Function 15
$('.btn__function-15--jquery').click(function() {
    $('#img-15--jquery').css('display', 'none')
})

// Function 16
$('.btn__function-16--jquery').click(function() {
    $('#img-16--jquery').css('display', 'block')
})

// Function 17
$('.btn__function-17-jquey').click(function() {
    $('#img-17--jquery').fadeIn(2000)
})

// Function 18
$('.btn__function-18--jquery').click(function() {
    $('#img-18--jquery').fadeOut(2000)
})

/**************** SeLECTORS ***************/
// Selector 1
$('.btn__selector-1--jquery').click(function() {
    $('.selector--1').each(function() {
        $( this ).css('color', 'red')
    })
})

// Selector 2
$('.btn__selector-2--jquery').click(function() {
    $('.span-selector--2').parent().css('font-weight', '900')
})

// Selector 3  
$('.btn__selector-3--jquery').click(function() {
    $('.list__selector-3').children().each(function() {
        $( this ).css('font-weight', '900')
    })
})

// Selector 4  
$('.btn__selector-4--jquery').click(function() {
    $('.item__selector-4').each(function() {
        $( this ).css('font-weight', '100')
    })
})

// Selector 5 
$('.btn__selector-5--jquery').click(function() {
    $('#quote__selector-5').css('font-weight', '200')
})

// Selector 6 
$('.btn__selector-6--jquery').click(function() {
    $('li.item__selector-6--jquery[style="display: none;"]').css({"display": "block", "color": "red"});
})

// Selector 7
$('.btn__selector-7--jquery').click(function() {
    let optionSelected = $('#characters').find(':selected').val();
    alert(`${optionSelected}`);
})

// Selector 8 
$('.btn__selector-8--jquery').click(function() {
    $('.bootcamp__list a:first-child').attr('href', 'https://www.skillshare.com/')
    $('.bootcamp__list a:first-child').html('SkillShare')
})

// Selector 9
$('.btn__selector-9--jquery').click(function() {
    var userName = window.prompt("Please Enter Your Name");
    if (userName != null) {
        alert(userName)
    }
})

// Selector 10
$('.btn__selector-10--jquery').click(function() {
    $('.list__selector-10--jquery').remove()
})

// Selector 11 
$(document).ready(function() {
    $('#selector-11').delay(5000).animate({width: "80px"})
})