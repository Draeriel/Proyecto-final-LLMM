$(document).ready(function() {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();

            $('#posts').append(randomPost());
            $('#loading').hide();
        }
    });
});
$(document).ready(function() {
    $.getJSON( "main.json", function( data ) {
        var items = [];
        var title = '';
        var id = '';
        var parrafo = [];
        for (var counter = 0; counter < data.length; counter++) {
        $.each( data[counter], function( key, val ) {
            if (key == "title") {
                title = val;
                items.push( "<h1 class='" + key + "'>" + val + "</h1>" )    
            }

            if (key == "id") {
                id = val;
                
            }
            
            if (key == "imgbig") {  
                  
                items.push( "<img src='" + val + "'data-toggle='modal' data-target='#" + id + "' />")
            }
            if (key == "text") {
                for (var frase = 0; frase < data[counter].text.length; frase++){
                    var element = '<p>'+data[counter].text[frase]+'</p>';
                    parrafo.push(element) 
                    parrafo.join("");
                    console.log(parrafo);                 
                };
                items.push("<div class='modal fade' id='" + id + "' role='dialog'> <div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>" + title + "</h4></div><div class='modal-body'>" + parrafo.join("") + "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
                parrafo = []
            }
            if (key == "date") {
                items.push( "<p class='" + key + "'>" + val + "</li>" );
                $( "<article/>",{
                    "class": "article",
                    html: items.join( "" )
                  }).appendTo( "#posts" );
                items=[];
            }
          
        });
    };
       
        
    });
});

// Generate a random post
function randomPost() {
    // Paragraphs that will appear in the post
    var paragraphs = [
        '<img src="images/1.png">',
        '<img src="images/2.jpg">',
        '<img src="images/3.png">',
        '<img src="images/4.png">',
        '<img src="images/5.png">',
        '<img src="images/6.png">',
        '<img src="images/7.png">',
        '<img src="images/8.jpg">',
        '<img src="images/9.png">',
        '<img src="images/10.jpg">',
        '<img src="images/12.jpg">',
        '<img src="images/13.jpg">',
        '<img src="images/14.jpg">',

        
    ];

    // Shuffle the paragraphs
    for (var i = paragraphs.length - 1; !!i; --i) {
        var j = Math.floor(Math.random() * i);
        var p = paragraphs[i];
        paragraphs[i] = paragraphs[j];
        paragraphs[j] = p;
    }


}