document.addEventListener('mousemove',function (e){
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    document.querySelector("#move").innerHTML = coor;
});