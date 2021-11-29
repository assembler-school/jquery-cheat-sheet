//! Events

function htmlLoadedElementfunctionIdJq() {
    let textodelhtml = $("<p></p>").text("Document HTML loaded")
    $("#HTMLLoadedElementIdTestResultjq").append(textodelhtml)
}

function clickElementfunctionIdJq() {
    let textodelhtml = $("<p></p>").text("click")
    $("#clickElementIdTestResultjq").append(textodelhtml)
}

function dblclickElementfunctionIdJq() {
    $("#dblclickElementfunctionIdJq").dblclick(() => {
        let textoadelhtml = $("<p></p>").text("double click")
        $("#dblclickElementIdTestResultjq").html(textoadelhtml)
    })
}

function keyListenerjq() {
    $("#keyElementfunctionIdJq").keypress(function (e) {
        let pruebajq = document.createElement("p")
        pruebajq = ` You pressed ${e.key}`
        $("#keyElementIdTestResultjq").html(pruebajq)
    })
}

function cursorElementfunctionIdJq() {
    $("#cursorElementfunctionIdJq").bind("mousemove", function (e) {
        let cursor = $("<p></p>").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
        $("#cursorElementIdTestResultjq").html(cursor)
    });
}
function valueInputElementfunctionIdJq() {
    let input = $("<input>")
    $("#valueInputElementIdTestResultjq").append(input)
    $("#valueInputElementIdTestResultjq").on("change", function () {
        alert("Input Changed")
    })
}
function imageloadInputElementfunctionIdJq() {
    var inputfoto = $("<input>").attr("type", "file")
    let imageloading = $("#imageloadInputElementIdTestResultjq")
    imageloading.append(inputfoto)
    imageloading.on("change", () => {
        alert("Image Loaded")
        foto = inputfoto[0].files[0]
        let imageType = /image.*/;
        if (foto.type.match(imageType)) {
            let reader = new FileReader()
            reader.onload = function (e) {
                let prueba1 = ""
                $("#imageloadInputElementIdTestResultjq").html(prueba1)
                imageloading.html(prueba1)
                let img = new Image()
                img.src = reader.result;
                $("#imageloadInputElementIdTestResultjq").append(img)
            }
            reader.readAsDataURL(foto)
        } else {
            let not = "File not supported!"
            $("#imageloadInputElementIdTestResultjq").html(not)
        }
    })
}

function failImageloadInputElementIdTestResultjq() {
    let inputimage = $("<input>").attr("type", "file");
    let imageload = $("#failImageloadInputElementIdTestResultjq")
    imageload.html(inputimage)
    imageload.on("change", () => {
        alert("image failed")
        let texto = "image failed to load"
        imageload.append(texto)
    })
}
function formSubmloadInputElementfunctionIdJq() {
    let inputformjq = $("<input>").attr("type", "submit")
    let inputid = $("#formSubmloadInputElementIdTestResultjq")
    let texto = "submit"
    $(inputformjq).attr("value", texto)
    inputid.html(inputformjq)
    inputid.on("click", () => {
        let content = "Your form has been submited"
        inputid.append(content);
    })
}
function changSelectInputElementfunctionIdJq() {
    // $("")
    let s = $('<select/>');
    let o = [1, 2, 3];
    for (var i in o) {
        s.append($('<option/>').html(o[i]));
    }
    let changeselecet = $('#changSelectInputElementIdTestResultjq')
    changeselecet.append(s);
    changeselecet.on("change", (e) => {
        console.log(e)
        alert("input changed")
    })
}

function posiMouseElementfunctionIdJq() {
    let boton = $("<button>mouseoverinJQ</button>")
    $("#posiMouseElementIdTestResultjq").append(boton)
    $("#posiMouseElementIdTestResultjq").on("mouseover", () => {
        let texto = $("<p>mouser over detected</p>")
        $("#posiMouseElementIdTestResultjq").append(texto)
    })
}


function checkboxElementfunctionIdJq() {
    let input = $("<input>").attr("type", "checkbox")
    let resultid = $("#checkboxElementIdTestResultjq")
    resultid.append(input)
    resultid.on("change", () => {
        if ($("input").is(":checked") == true) {
            alert("you have checked the box")
        } else if ($("input").is(":checked") == false) {
            alert("you have unchecked the box")
        }
    })
}

function ullistElementfunctionIdJq() {
    let uljq = $("<ul></ul>")
    let lijq1 = $("<li>·option 1</li>")
    let lijq2 = $("<li>·option 2</li>")
    lijq1.attr("id", "liq1id")
    lijq2.attr("id", "liq2id")
    console.log(lijq1)
    lijq1.css("color", "black")
    lijq2.css("color", "black")
    uljq.append(lijq1)
    uljq.append(lijq2)
    $("#ullistElementIdTestResultjq").append(uljq)
    lijq1.on("click", () => {
        alert("first")
    })
    lijq2.on("click", () => {
        alert("second")
    }
    )
}
