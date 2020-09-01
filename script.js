var bookSrch = "sharing";

function gBooksMinority(bookSrch) {
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=minority+authors+of+childrens+books" + bookSrch;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){ 
        console.log(response);
    });
}

function gBooks(bookSrch) {
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=childrens+books+diversity" + bookSrch;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){ 
        console.log(response);
    });
}

gBooksMinority();
gBooks();