const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('search')) {
    if (urlParams.get('search') != "") {
        $(".search-results").addClass("active-search-results");
        $(".searchbar").val(urlParams.get('search'));
        displayResults(urlParams.get('search'));
    }
}



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
    //let default behavior happen when key is pressed in searchbar
    //if backspace call displayResults
    if ($(".searchbar").is(":focus")) {
        // Immediately return true to allow the default behavior (character input)
        // The rest of the logic will be executed after the character has been inputted
        setTimeout(function () {
            $(".search-results").addClass("active-search-results");
            urlParams.set('search', $(".searchbar").val());
            window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
            displayResults($(".searchbar").val());
        }, 0);
        return true; // This ensures the key press event is not blocked
    }
});

//keydownbackspace

$('body').keydown(function (e) {

    if (e.key == "Backspace") {
        if ($(".searchbar").val() == "") {
            // Immediately return true to allow the default behavior (character input)
            // The rest of the logic will be executed after the character has been inputted
            setTimeout(function () {
                urlParams.set('search', $(".searchbar").val());
                window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
                displayResults($(".searchbar").val());
            }, 0);
        }
    }
});

async function displayResults(query) {

    var sArraypre = await fetch("https://jprojects.space/search?query=" + query + "&page=20").then(function (response) {
        return response.json();
    });

    var sArray = await sArraypre['results']
    $(".search-results").html("")
    $(".no-results").remove();
    if (sArray.length == 0) {
        console.log("no results");
        $(".search-results").append(`
        <div class="no-results">
            <h2>No results found</h2>
        </div>
        `)
        setTimeout(function () {
            $(".no-results").addClass("active");
        }, 0);
    } else {
        for (var i = 0; i < sArray.length; i++) {
            accesable = true;

            if (accesable) {
                if (sArray[i]["type"] == 'movie' || sArray[i]["type"] == 'tvSeries') {
                    if (sArray[i]["image"] == null) {

                    } else {
                        $(".search-results").append(`
                    <div onclick="goTo('player.html?id=` + sArray[i]["id"] + `&search=` + urlParams.get("search") + `&type=` + sArray[i]['type'] + `')" class="movie-card" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 1) 80%), url(` + sArray[i]['image'] + `)">
                                <span class="blur"></span>
                                <span class="play-button material-symbols-outlined">
                                    play_circle
                                </span>
                                <p class="year">` + sArray[i]["year"] + ` - ` + sArray[i]['type'] + `</p>
                                <p class="title">` + sArray[i]["title"] + `</p>
        
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
        delay += 0.05;
    });
}

function goTo(url) {
    location.href = url;
}