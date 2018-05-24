$(document).ready(function () {
    var win = $(window);
    var done = false;
    let buttonnode;
    var isButton = false;

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
                    var button = document.createElement("button");
                    button.innerHTML = "Abrir Hexeosis";
                    var body = document.getElementsByTagName("body")[0];
                    body.appendChild(button);
                    button.addEventListener("click", function () {
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
                    });
                    isButton = true;
                }
        }
    });
});