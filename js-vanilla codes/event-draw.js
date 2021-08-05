document.getElementById("draw-events").addEventListener("click", drawEventScreen)
let canvas = document.createElement("CANVAS")
function drawEventScreen(){

    addTemplate();

    canvas.classList.add("canvas")
    document.getElementById("working-place").appendChild(canvas)

    instruction.innerText = "Please do click to draw";
    comment.innerHTML="This is the part of the code that gets de movement of the cursor:"
    document.getElementById("js-code").insertAdjacentElement("beforebegin", comment)
    document.getElementById("js-code").innerText=`canvas.addEventListener(  'mousemove', e => {
        drawLine(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;});`

    document.getElementById("working-place").appendChild(instruction);

    let isDrawing = false;
    let x = 0;
    let y = 0;

    const context = canvas.getContext("2d");

    canvas.addEventListener('mousedown', e => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener('mousemove', e => {
        if (isDrawing === true) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    window.addEventListener('mouseup', e => {
        if (isDrawing === true) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 0.5;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
}
