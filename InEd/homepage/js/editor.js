var Canvas = null;

function resizeCanvas() {
    $('#canvas').attr('width', window.innerWidth*95/100);
    $('#canvas').attr('height', window.innerHeight);
}

$(document).ready(function() {
    resizeCanvas();
    Canvas = new fabric.Canvas('canvas');

    // console.log(fabric)
    $("#export").click(function (e) {
        e.preventDefault();
        $("#exportContainer").toggle();
    });
    $("#exportSVG").click(function () {
        var data = Canvas.toSVG();
        $(this).attr('href', "data:application/octet-stream," + encodeURIComponent(data) );
    });
    $("#exportPNG").click(function () {
        var data = Canvas.toDataURL({
            format: 'png'
        });
        $(this).attr('href', data );

    });
    $("#exportJPG").click(function () {
        var data = Canvas.toDataURL({
            format: 'jpg'
        });
        $(this).attr('href', data );

    });

    $("#addText").click(function () {
        $("#textOptions").toggle();
    });

    $( "#paintText" ).click(function() {
        var newtxt =  new fabric.IText($( "#textInput" ).val() , {fontWeight: 'normal',fontFamily: $("#font-family").val(),stroke: $("#text-stroke-color").val()});
        Canvas.add(newtxt);
        $( "#textInput" ).val('');
    })

    // create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    });
    Canvas.add(rect);
});
