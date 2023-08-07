
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('search')) {
    $(".search-results").addClass("active-search-results");
    $(".searchbar").val(urlParams.get('search'));
    displayResults(urlParams.get('search'));
}
$(".player").append('<iframe src="https://vidsrc.to/embed/movie/' + urlParams.get('id') + '" allow="autoplay; fullscreen" allowfullscreen="yes" frameborder="no" scrolling="no" ><iframe>')


$(".search-btn").on("click", function () {
    if ($(".searchbar").val() != "") {
        $(".search-results").addClass("active-search-results");
        urlParams.set('search', $(".searchbar").val());
        window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        displayResults(urlParams.get('search'));
    }
});

$('body').keypress(function (e) {
    var key = e.which;
    if ($(".searchbar").val() != "") {
        if (key == 13)  // the enter key code
        {
            $(".search-results").addClass("active-search-results");
            urlParams.set('search', $(".searchbar").val());
            window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
            displayResults(urlParams.get('search'));
            return false;
        }
    }
});

$(".clear-search").on("click", function () {
    $(".search-results").removeClass("active-search-results");
    urlParams.delete('search');
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
    $(".searchbar").val("");
});

$("input").on("click", function () {
    $(".search-results").removeClass("active-search-results");
    urlParams.delete('search');
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
});

async function displayResults(query) {
    $(".search-results").html("")
    for (var o = 1; o < 10; o++) {
        let sArray = await fetch("http://www.omdbapi.com/?page=" + o + "&s=" + query + "&apikey=3bb1e43b").then(function (response) {
            return response.json();
        }
        ).then(function (data) {
            return data["Search"]
        });
        for (var i = 0; i < sArray.length; i++) {
            accesable = true;

            if (accesable) {
                if (sArray[i]["Type"] == 'movie') {
                    if (sArray[i]["Poster"] == "N/A") {
                        $(".search-results").append(`
            <div class="movie-card">
            <div class="poster-error"><i class="fa-solid fa-triangle-exclamation"><p class="error">error loading photo</p></i></div>
            <div class="title-holder">
                <p class="title">`+ sArray[i]["Title"] + `</p>
                <button onclick="goTo('/player.html?id=`+ sArray[i]["imdbID"] + `')">watch</button>
            </div>
        </div>`)
                    } else {


                        $(".search-results").append(`
            <div class="movie-card">
            <img class="poster" src="`+ sArray[i]["Poster"] + `" alt="img">
            <div class="title-holder">
                <p class="title">`+ sArray[i]["Title"] + `</p>
                <button onclick="goTo('/player.html?id=`+ sArray[i]["imdbID"] + `')">watch</button>
            </div>
        </div>
            `)
                    }
                }
            }
        }
    }
}

function goTo(url) {
    window.location.href = url;
}