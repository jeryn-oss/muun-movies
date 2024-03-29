const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var episode = 1;
var season = 1;
var nextAndBack = []

async function start() {
    if (!urlParams.has('test')) {
        if (!urlParams.has('id')) {
            window.location.href = "index.html"
        }
    }
    //check if has id
    if (urlParams.has('type')) {
        if (urlParams.get('type') == "movie") {
            $('.button-holder-ep').remove();
            //set video src to first episode
            $(".video_src").attr("src", "https://vidsrc.to/embed/movie/" + urlParams.get('id'));
            var id = urlParams.get('id');
            var title = await fetch("https://jprojects.space/title/" + id).then(function (response) {
                return response.json();
            })
            title = title['title'];
            $(".player").append(`
                <div class="title-holder-tv">
                    <h1 class="title-tv">` + title + `</h1>
                </div>
                `)
            $(".player").append(`
                <div class="series-viewer">
                    <div style="margin-top:10px" class="button-holder">
                    <button class="ep-btn"> ` + title + ` </button>
                    </div>
                </div>
                `)
        } else if (urlParams.get('type') == "tvSeries") {
            //set video src to first episode
            $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/1/1");
            var id = urlParams.get('id');
            var seasons = await fetch("https://jprojects.space/title/" + id).then(function (response) {
                return response.json();
            })
            title = seasons['title'];
            seasons = seasons['all_seasons'].length;
            $(".player").append(`
                <div class="title-holder-tv">
                    <h1 class="title-tv">` + title + `</h1>
                </div>
                `)
            for (var i = 1; i < seasons + 1; i++) {
                var episodes = await fetch("https://jprojects.space/title/" + id + "/season/" + i).then(function (response) {
                    return response.json();
                })
                episodes = episodes['episodes'];
                nextAndBack.push(episodes.length);
                console.log(episodes);
                list_episodes = ``;
                for (var j = 0; j < episodes.length; j++) {
                    list_episodes += `
                    <button onclick="watchEpisode('` + id + `/` + i + `/` + (j + 1) + `')" class="ep-btn"> ` + (j + 1) + ` - ` + episodes[j]["title"] + ` </button>
                    `
                }
                $(".player").append(`
                <div class="series-viewer">
                     <h2>season - ` + i + `</h2>
                    <div class="button-holder">
               ` + list_episodes + `
                    </div>
                </div>
                `)
            }
        }
    }
}

function watchEpisode(src) {
    $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + src);
    episode = src.split("/")[2];
    season = src.split("/")[1];
}

function backTosearch() {
    window.location.href = "index.html?search=" + urlParams.get('search');
}

function nextEpisode() {
    if (episode < nextAndBack[season - 1]) {
        episode++;
        $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/" + season + "/" + episode);
    } else if (nextAndBack[season]) {
        if (season - 1 < nextAndBack.length) {
            season++;
            episode = 1;
            $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/" + season + "/" + episode);
        }
    }
}

function backEpisode() {
    if (episode > 1) {
        episode--;
        $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/" + season + "/" + episode);
    } else if (season > 1) {
        season--;
        episode = nextAndBack[season - 1];
        $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/" + season + "/" + episode);
    }
}

const beforeUnloadHandler = (event) => {
    // Recommended
    event.preventDefault();

    // Included for legacy support, e.g. Chrome/Edge < 119
    event.returnValue = true;
};



start();