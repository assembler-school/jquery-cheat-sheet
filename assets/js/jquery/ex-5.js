$(document).on('mousemove',(e)=> {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    $("#move").html(coor);
});
