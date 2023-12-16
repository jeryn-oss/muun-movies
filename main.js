
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
    $(".search-results").html("");
});

$("input").on("click", function () {
    $(".search-results").removeClass("active-search-results");
    urlParams.delete('search');
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
});

async function displayResults(query) {
    $(".search-results").html("")
    var sArraypre = await fetch("https://jprojects.space/search?query=" + query).then(function (response) {
        return response.json();
    });

    var sArray = await sArraypre['results']
    console.log(sArray);
    for (var i = 0; i < sArray.length; i++) {
        accesable = true;

        if (accesable) {
            if (sArray[i]["type"] == 'movie' || sArray[i]["type"] == 'tvSeries') {
                if (sArray[i]["image"] == null) {
                    
                } else {


                    $(".search-results").append(`
                    <div class="movie-card">
                        <img class="poster" src="`+ sArray[i]["image"] + `" alt="img">
                            <div class="title-holder">
                                <p class="year">`+ sArray[i]["year"] + ` - ` + sArray[i]['type'] +`</p>
                                <p class="title">`+ sArray[i]["title"] + `</p>
                            <button onclick="goTo('player.html?id=`+ sArray[i]["id"] + `&search=` + urlParams.get("search") + `&type=`+ sArray[i]['type'] +`')">watch</button>
                        </div>
                    </div>
            `)
                }
            }
        }
    }
}

function goTo(url) {
    location.href = url;
}