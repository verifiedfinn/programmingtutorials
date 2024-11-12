$(document).ready(function() {
    console.log("Ready");
}); // end document ready

$.ajax({
    url: "data/idm.json",
    success: function(data) {
        console.log(data);
        $('.modules').html(''); // Clear any existing content
        for (let i = 0; i < data.module.length; i++) {
            $('.modules').append(data.module[i].lecturer + "<br>" + data.module[i].name + "<br>" + data.module[i].code + "<br>" + data.module[i].credits + "<br>");
        }
        /*hide an image upon clicking - will only work for one! */
    $("img").dblclick(function() {
        $(this).hide();
    });

    $(".colourblock").hover(function() {
        $(this).css("background-color", "green");
    },
    function() {
        $(this).css("background-color", "red");
    });

    $(".colourblockevents").on({
        mouseenter: function() {
            $(this).css("background-color", "green");
        },
        mouseleave: function() {
            $(this).css("background-color", "red");
        },
        click: function() {
            $(this).css("background-color", "orange");
        }
        
    });

    $(".sliderbutton").click(function() {
        $(".slidercontent").slideToggle("fast");
    });


    }


    
});