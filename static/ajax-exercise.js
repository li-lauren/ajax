"use strict";


// PART 1: SHOW A FORTUNE
//evt is the default funciton that reloads the page, so we need to prevent the default
function showFortune(evt) {
    evt.preventDefault();
    $.get("/fortune", (res) => {
        $("#fortune-text").html(res);
    })
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);
//event handler





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, (res) => {
        $('#weather-info').html(res['forecast'])
    })


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    
    let formData = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val()
    }
    
    $.post("/order-melons.json", formData, (res) => {
        console.log(res)
        //msg is one of the keys in the obj when you console.log on and run the site
        $("#order-status").html(res["msg"])
        if(res["code"] === "ERROR") {
            $("#order-status").addClass(".order-error")
        }
    });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


