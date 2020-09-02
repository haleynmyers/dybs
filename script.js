var bookSrch = $(".input-group-field").val().trim();

function gBooksMinority() {
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=minority+authors+of+childrens+books" + bookSrch;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){

        console.log(response);
    });
}

function gBooks() {
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=childrens+books+diversity" + bookSrch;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){ 
        console.log(response);
    });
}

$("#sharing").on("click", function(event){
    event.preventDefault();
    bookSrch = "sharing";
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});

$("#friendship").on("click", function(event){
    event.preventDefault();
    bookSrch = "friendship";
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});

$("#culture").on("click", function(event){
    event.preventDefault();
    bookSrch = "culture";
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});

$("#history").on("click", function(event){
    event.preventDefault();
    bookSrch = "history";
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});

$("#kindness").on("click", function(event){
    event.preventDefault();
    bookSrch = "kindness";
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});

$(".input-group-button").on("click", function(event){
    event.preventDefault();
    gBooksMinority(bookSrch);
    gBooks(bookSrch);
});