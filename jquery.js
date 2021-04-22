let events = ['When the HTML document has been loaded and you can manipulate it with JavaScript', 'When an HTML item has been clicked', 'When an HTML item has been double clicked', 'When the user presses a key on the keyboard',
    'When the user moves the mouse cursor', 'When the user changes a value of an text input', 'When an image is loaded', 'When an image fails to load', 'When a form is submitted', 'When the user changes the option of a select element', 'When you position the mouse over an element',
    'When a checkbox is checked or unchecked', 'When a ul list item is clicked, show the item that was clicked'];

let data = ['Create an HTML element with any text value', 'Remove an HTML element with any text value', 'Append an HTML element with any text value to a parent element', 'Prepend an HTML element with any text value to a parent element',
    'Create and add an HTML element with any text value after another element', 'Create and add an HTML element with any text value before another element', 'Clone an HTML element within other element',
    'Add a class to an HTML item', 'Remove a class to an HTML item', 'Toggle a class of an HTML item', 'Add a disabled attribute to an HTML button', 'Remove the disabled attribute of an HTML button',
    'Set a data-src attribute to a img element', 'Remove the data-src attribute of the img element', 'Hide an HTML element on click (display: none)', 'Show an HTML element on click (display: block)',
    'Fade in an HTML element using jQuery', 'Fade out an HTML element using jQuery', 'Iterate a collection of elements and apply a change of style on them',];

let selectors = ['Get the parent element of a certain element and change its font weight', 'Get the collection of children of a certain element and change its font weight', 'Get all the elements that have a certain class and change their font weight',
    'Get an item by id and change its font weight', 'Get all the elements that have a certain class and the display property of none and change their font color', 'Get the options of a select element that are selected (attribute selected)',
    'Change the href attribute of the first link element', 'Show an alert with the value of the first input of the page',
    'Remove all items from a specific selector', 'Animate an item after 2 seconds from the initial page load',];

let itemsData = [];
loadData();

function loadData() {
    let list1, item1;
    list1 = $('<ul>');
    list1.attr('id', 'eventList')
    $('#eventFunctions').append(list1);
    for (let i = 0; i < events.length; i++) {
        localStorage.setItem("e" + i, events[i]);
        item1 = $('<li>');
        item1.attr('id', 'event' + i);
        $('#eventList').append(item1);
        item1.html(events[i]);
    }

    let list2, item2;
    list2 = $('<ul>');
    list2.attr('id', 'dataList');
    $('#listFunctions').append(list2);
    for (let i = 0; i < data.length; i++) {
        localStorage.setItem("f" + i, data[i]);
        item2 = $('<li>');
        item2.attr('id', 'data' + i);
        $('#dataList').append(item2);
        item2.html(data[i]);

    }

    let list3, item3;
    list3 = $('<ul>');
    list3.attr('id', 'selectorList');
    $('#selectFunctions').append(list3);
    for (let i = 0; i < selectors.length; i++) {
        localStorage.setItem("s" + i, selectors[i]);
        item3 = $('<li>');
        item3.attr('id', 'select' + i);
        $('#selectorList').append(item3);
        item3.html(selectors[i]);
    }

    setData('#eventList');
    setData('#dataList');
    setData('#selectorList');
}

function setData(ulID) {
    $(ulID + ' li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
}

$('input').on('keyup', function () {
    var searchTerm = $(this).val().toLowerCase();
    $('#eventList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });

    $('#dataList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });

    $('#selectorList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });
});

$('#searchInput').focus(function () {
    $(this).animate({
        width: '100%',
    }, 'slow', function () {
        $(this).css("backgroundColor", "#101010");
        $(this).css("border-radius", "0px");
    });
}).blur(function () {
    $(this).animate({ width: '70px' }, 'slow');
    $(this).animate({}, function () {
        $(this).css("backgroundColor", "white");
        $(this).css("border-radius", "5px");
    });
});

function showModal() {
    let newModal = document.querySelector("template.templateModal");
    const importNewEvent = document.importNode(newModal.content, true);
    $("body").append(importNewEvent);

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    $('#closeButton').click(function () {
        closeModal();
    });
}

function closeModal() {
    document.querySelector("body").removeChild(document.getElementById("modal"));
}

$('#selectorList li').each(function () {
    $(this).click(function () {
        showModal();
    });
});

$('#listFunctions li').each(function () {
    $(this).click(function () {
        showModal();
    });
});

$('#eventFunctions li').each(function () {
    $(this).click(function () {
        showModal();
    });
});