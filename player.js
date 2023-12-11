const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

async function start() {
    if (!urlParams.has('test')) {
        if (!urlParams.has('id')) {
            window.location.href = "index.html"
        }
    }
    //check if has id
    if (urlParams.has('type')) {
        if (urlParams.get('type') == "movie") {
            $(".player").append('<iframe src="https://vidsrc.to/embed/movie/' + urlParams.get('id') + '" ><iframe>')

            $(".back-btn").on("click", function () {
                window.location.href = "index.html?search=" + urlParams.get('search');
            });
        }
        else if (urlParams.get('type') == "tvSeries") {
            var id = urlParams.get('id');
            seasons = await fetch("https://jprojects.space/title/" + id).then(function (response) {
                return response.json();
            })
            title = seasons['title'];
            seasons = seasons['all_seasons'].length;
            console.log(seasons);
            for (var i = 1; i < seasons + 1; i++) {
                episodes = await fetch("https://jprojects.space/title/" + id + "/season/" + i).then(function (response) {
                    return response.json();
                })
                episodes = episodes['episodes'];
                console.log(episodes);
                list_episodes = ``;
                for (var j = 0; j < episodes.length; j++) {
                    list_episodes += `
                    <button> `+ (j+1) +` - `+ episodes[j]["title"] +` </button>
                    `
                }
                $(".player").append(`
                <div class="series-viewer">
                     <h2>season - `+ i +`</h2>
                    <div class="button-holder">
               `+ list_episodes +`
                    </div>
                </div>
                `)
            }
        }
    }
}

function watchEpisode(src){
    location.href = src;
}

start();