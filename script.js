var bookSrch = $("#mainsearch");
var resultsGroup = $("#results-container")

function gBooksMinority(value) {
    resultsGroup.empty();
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=minority+authors+of+childrens+books" + value;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        fillIt(response);
    });
}

function gBooks(value) {
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=childrens+books+diversity" + value;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
       fillIt(response);
    });
}

$("#sharing").on("click", function (event) {
    event.preventDefault();
    gBooksMinority("sharing");
    gBooks("sharing");
});

$("#friendship").on("click", function (event) {
    event.preventDefault();
    gBooksMinority("friendship");
    gBooks("friendship");
});

$("#culture").on("click", function (event) {
    event.preventDefault();
    gBooksMinority("culture");
    gBooks("culture");
});

$("#history").on("click", function (event) {
    event.preventDefault();
    gBooksMinority("history");
    gBooks("history");
});

$("#kindness").on("click", function (event) {
    event.preventDefault();
    gBooksMinority("kindness");
    gBooks("kindness");
});

$(".searchbtn").on("click", function (event) {
    event.preventDefault();
    gBooksMinority(bookSrch.val().trim());
    gBooks(bookSrch.val().trim());
});

function fillIt(response) {

    var items = response.items;

    for (var i = 0; i < response.items.length; i++) {
       
        var plot = '';
        if (items[i].searchInfo) {
            plot = items[i].searchInfo.textSnippet;
            console.log('INFO: ', items[i].searchInfo);
        }
        var author = response.items[i].volumeInfo.authors;
        var title = response.items[i].volumeInfo.title;
        var imgSource = response.items[i].volumeInfo.imageLinks.thumbnail;
        var card = $("<div class='card' id='results'>");
        var cardContent = $("<div class='card-content'>");
        var mainGroup = $("<div class='columns'>");
        var imgGroup = $("<div class='column is-one-third'>");
        var thumbNail = $("<img class='is-square' src='" + imgSource + "' alt='" + title + "'/>");
        var infoGroup = $("<div class='column is-two-thirds'>");
        var titleGroup = $("<h6 class='title'>");
        var authorGroup = $("<p class='author subtitle'>");
        var plotGroup = $("<p class='plot'>");
        // var shelfBtn = $("<button class='button is-primary is-rounded'>+ DYBS</button>")

        $(resultsGroup).append(card);
        $(card).append(cardContent);
        $(cardContent).append(mainGroup);
        $(mainGroup).append(imgGroup);
        $(imgGroup).append(thumbNail);
        $(mainGroup).append(infoGroup);
        $(infoGroup).append(titleGroup);
        $(titleGroup).text(title);
        $(infoGroup).append(authorGroup);
        $(authorGroup).text(author);
        $(infoGroup).append(plotGroup);
        $(plotGroup).html(plot);
        // $(imgGroup).append(shelfBtn);

    }
}