$(document).ready(function () {
    var win = $(window);
    var done = false;
    let buttonnode;
    var isButton = false;
    

    let getUrlParameter = function getUrlParameter(sParam) {
        let sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;    for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? false : sParameterName[1];
            }
        }
    };
    let page = getUrlParameter('page');
    let news = getUrlParameter('news');


    if (page && news) {
        $('#posts').empty();
        $.getJSON( page + ".json", function (data) {
                var items = [];
                var title = '';
                var id = '';
                var parrafo = [];
                    $.each(data[news], function (key, val) {
                        if (key == "title") {
                            title = val;
                            items.push("<header><h1 class='" + key + "'>" + val + "</h1></header>")
                        }

                        if (key == "id") {
                            id = val;

                        }

                        if (key == "imgbig") {

                            items.push("<img src='" + val + "'data-toggle='modal' data-target='#" + id + "' />")
                        }
                        if (key == "text") {
                            for (var frase = 0; frase < data[news].text.length; frase++) {
                                var element = '<p>' + data[news].text[frase] + '</p>';
                                parrafo.push(element)
                                parrafo.join("");
                            };
                            items.push("<div class='modal fade' id='" + id + "' role='dialog'> <div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>" + title + "</h4></div><div class='modal-body'>" + parrafo.join("") + "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div></div></div>");
                            parrafo = []
                        }
                        if (key == "img") {
                            items.push("<img src='" + val + "' />")
                            $("<article/>", {
                                "class": "article",
                                html: items.join("")
                            }).appendTo("#posts");

                            items = [];
                        }
                        if (key == "video") {
                            items.push(val)
                            $("<article/>", {
                                "class": "article",
                                html: items.join("")
                            }).appendTo("#posts");

                            items = [];}
                            
                        if (key == "date") {
                            items.push("<p class='" + key + "'>" + val + "</li>");
                            $("<article/>", {
                                "class": "article",
                                html: items.join("")
                            }).appendTo("#posts");
                            items = [];
                        }

                    });



            });
            done = true;
        }
        



    win.scroll(function () {
        if ($(document).height() - win.height() == win.scrollTop()) {
            if (!done) {
                $.getJSON("main.json", function (data) {
                    var items = [];
                    var title = '';
                    var id = '';
                    var parrafo = [];
                    for (var counter = 0; counter < data.length; counter++) {
                        $.each(data[counter], function (key, val) {
                            if (key == "title") {
                                title = val;
                                items.push("<header><h1 class='" + key + "'>" + val + "</h1></header>")
                            }

                            if (key == "id") {
                                id = val;

                            }

                            if (key == "imgbig") {

                                items.push("<img src='" + val + "'data-toggle='modal' data-target='#" + id + "' />")
                            }
                            if (key == "text") {
                                for (var frase = 0; frase < data[counter].text.length; frase++) {
                                    var element = '<p>' + data[counter].text[frase] + '</p>';
                                    parrafo.push(element)
                                    parrafo.join("");
                                };
                                items.push("<div class='modal fade' id='" + id + "' role='dialog'> <div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>" + title + "</h4></div><div class='modal-body'>" + parrafo.join("") + "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div></div></div>");
                                parrafo = []
                            }
                            if (key == "date") {
                                items.push("<p class='" + key + "'>" + val + "</li>");
                                $("<article/>", {
                                    "class": "article",
                                    html: items.join("")
                                }).appendTo("#posts");
                                items = [];
                            }

                        });
                    };


                });
            }
            done = true;
            if (!isButton) {
                var boton = document.createElement("button");
                boton.setAttribute("id", "hex")
                boton.addEventListener("click", function () {
                    document.getElementById("hex").style.display = "none";
                });


                boton.innerHTML = "Abrir Hexeosis";
                var body = document.getElementsByTagName("body")[0];
                body.appendChild(boton);
                boton.addEventListener("click", function () {
                    $.getJSON("hexeosis.json", function (data) {
                        var items = [];
                        for (var counter = 0; counter < data.length; counter++) {
                            $.each(data[counter], function (key, val) {
                                if (key == "img") {
                                    items.push("<img src='" + val + "' />")
                                    $("<article/>", {
                                        "class": "article",
                                        html: items.join("")
                                    }).appendTo("#posts");

                                    items = [];
                                }
                            });
                        };

                    });
                    var boton = document.createElement("button");
                    boton.setAttribute("id", "carrero")
                    boton.addEventListener("click", function () {
                        document.getElementById("carrero").style.display = "none";
                    });


                    boton.innerHTML = "Memes Carrero Blanco";
                    var body = document.getElementsByTagName("body")[0];
                    body.appendChild(boton);
                    boton.addEventListener("click", function () {
                        $.getJSON("carrero.json", function (data) {
                            var items = [];
                            for (var counter = 0; counter < data.length; counter++) {
                                $.each(data[counter], function (key, val) {
                                    if (key == "img") {
                                        items.push("<img src='" + val + "' />")
                                        $("<article/>", {
                                            "class": "article",
                                            html: items.join("")
                                        }).appendTo("#posts");

                                        items = [];
                                    }
                                });
                            };
                        });
                        var boton = document.createElement("button");
                    boton.setAttribute("id", "youtube")
                    boton.addEventListener("click", function () {
                        document.getElementById("youtube").style.display = "none";
                    });


                    boton.innerHTML = "Videos Numberphile";
                    var body = document.getElementsByTagName("body")[0];
                    body.appendChild(boton);
                    boton.addEventListener("click", function () {
                        $.getJSON("youtube.json", function (data) {
                            var items = [];
                            for (var counter = 0; counter < data.length; counter++) {
                                $.each(data[counter], function (key, val) {
                                    if (key == "title") {
                                        title = val;
                                        items.push("<header><h1 class='" + key + "'>" + val + "</h1></header>")
                                    }
                                    if (key == "video") {
                                        items.push(val)
                                        $("<article/>", {
                                            "class": "article",
                                            html: items.join("")
                                        }).appendTo("#posts");

                                        items = [];
                                    }
                                });
                            };
                        });
                    });
                    });
                    
                });

                isButton = true;
            }
        }
    });
});

function cerrar() {
    document.getElementById("ban").style.display = "none";
}