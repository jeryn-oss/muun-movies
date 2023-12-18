const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('search')) {
    $(".search-results").addClass("active-search-results");
    $(".searchbar").val(urlParams.get('search'));
    displayResults(urlParams.get('search'));
}

//add install event chrome


$(".search-btn").on("click", function () {
    if ($(".searchbar").val() != "") {
        $(".search-results").addClass("active-search-results");
        urlParams.set('search', $(".searchbar").val());
        window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        displayResults(urlParams.get('search'));
    }
});

$(".searchbar").on("input", function () {
    if ($(".searchbar").val() == "") {
        $(".search-results").removeClass("active-search-results");
        urlParams.delete('search');
        window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        $(".searchbar").val("");
        $(".search-results").html("");
    }
});

$('body').keypress(function (e) {
    var key = e.which;
    if ($(".searchbar").is(":focus")) {
        if ($(".searchbar").val() != "") {
            if (key == 13) // the enter key code
            {
                $(".search-results").addClass("active-search-results");
                urlParams.set('search', $(".searchbar").val());
                window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
                displayResults(urlParams.get('search'));
                return false;
            }
        }
    }
});

$(".clear-search").on("click", function () {
    $(".search-results").removeClass("active-search-results");
    urlParams.delete('search');
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
    $(".searchbar").val("");
    $(".search-results").html("");
});

$("input").on("click", function () {
    $(".search-results").removeClass("active-search-results");
    urlParams.delete('search');
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
});

async function displayResults(query) {
    $(".search-results").html("")
    $(".no-results").remove();
    var sArraypre = await fetch("https://jprojects.space/search?query=" + query).then(function (response) {
        return response.json();
    });

    var sArray = await sArraypre['results']
    console.log(await sArray);
    if (sArray.length == 0) {
        console.log("no results");
        $(".search-results").append(`
        <div class="no-results">
            <h2>No results found</h2>
        </div>
        `)
        setTimeout(function () {
            $(".no-results").addClass("active");
        }, 100);
    } else {
        for (var i = 0; i < sArray.length; i++) {
            accesable = true;

            if (accesable) {
                if (sArray[i]["type"] == 'movie' || sArray[i]["type"] == 'tvSeries') {
                    if (sArray[i]["image"] == null) {

                    } else {
                        $(".search-results").append(`
                    <div onclick="goTo('player.html?id=` + sArray[i]["id"] + `&search=` + urlParams.get("search") + `&type=` + sArray[i]['type'] + `')" class="movie-card">
                        <img class="poster" src="` + sArray[i]["image"] + `" alt="img">
                            <div class="title-holder">
                                <p class="year">` + sArray[i]["year"] + ` - ` + sArray[i]['type'] + `</p>
                                <p class="title">` + sArray[i]["title"] + `</p>
                            <button onclick="goTo('player.html?id=` + sArray[i]["id"] + `&search=` + urlParams.get("search") + `&type=` + sArray[i]['type'] + `')">watch</button>
                        </div>
                    </div>
            `)
                    }
                }
            }
        }
    }
    //add class active to all elements with class movie-card
    $(".movie-card").addClass("active");

    /*/for every .movie-card.active ad "    animation-delay: (n * .5)s;
    -webkit-animation-delay: (n * .5)s;"
    /*/
    var delay = 0;
    $(".movie-card.active").each(function () {
        $(this).css("animation-delay", delay + "s");
        $(this).css("-webkit-animation-delay", delay + "s"); /* Safari and Chrome */
        $(this).css("-moz-animation-delay", delay + "s"); /* Firefox */
        $(this).css("-o-animation-delay", delay + "s"); /* Opera */
        $(this).css("-ms-animation-delay", delay + "s"); /* Internet Explorer */
        delay += 0.1;
    });
}

function goTo(url) {
    location.href = url;
}