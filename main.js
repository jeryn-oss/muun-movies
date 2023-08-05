

$(".search-btn").on("click", function() {

    $(".search-results").addClass("active-search-results");
    displayResults($(".searchbar").val());
});

$("input").on("click", function() {

    $(".search-results").removeClass("active-search-results");
});

async function displayResults(query) {
    $(".search-results").html("")
    let search = []
    let sArray = await fetch("http://www.omdbapi.com/?s="+ query +"&apikey=3bb1e43b").then(function(response) {
        return response.json();
    }
    ).then(function(data) {
        return data["Search"]
    }); 
    for(var i = 0; i < sArray.length; i++){
        if(sArray[i]["Type"] == 'movie'){
            $(".search-results").append(`
            <div class="movie-card">
            <img class="poster" src="`+ sArray[i]["Poster"] +`" alt="img">
            <div class="title-holder">
                <h2>`+ sArray[i]["Title"] +`</h2>
                <a href="/player.html?id=`+ sArray[i]["imdbID"] +`">watch</a>
            </div>
        </div>
            `)
        }
    }
}