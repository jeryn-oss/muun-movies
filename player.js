const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var episode = 1;
var season = 1;
var nextAndBack = []
var episodes_list = []
var list_first_episodes = []

var select;

const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

async function start() {
    if (!urlParams.has('test')) {
        if (!urlParams.has('id')) {
            window.location.href = "index.html"
        }
    }
    //check if has id
    if (urlParams.has('type')) {
        if (urlParams.get('type') == "movie") {
            $("body").css("align-items", "center")
            $(".video-holder").append(`
                <button onclick="backToSearch()" class="back-btn-movie">
                <span class="material-symbols-outlined">
                    keyboard_backspace
                </span>
                back to search
            </button>
             `)

            $('.player').remove();
            //set video src to first episode
            $(".video_src").attr("src", "https://vidsrc.to/embed/movie/" + urlParams.get('id'));
            var id = urlParams.get('id');
            var info = await fetch("https://jprojects.space/title/" + id).then(function (response) {
                return response.json();
            })
            var title = info['title'];
            $(".title-movie").text(title + " - " + info['year']);
            $(".year-movie").text(info['genre'] + " - " + info['contentRating']);
            $(".plot-movie").text(info['plot']);
        } else if (urlParams.get('type') == "tvSeries") {
            //set video src to first episode
            $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/1/1");
            var id = urlParams.get('id');

            var info = await fetch("https://jprojects.space/title/" + id).then(function (response) {
                return response.json();
            })
            console.log(info);
            var title = info['title'];
            var seasons = info['all_seasons'].length;
            $(".title-movie").text(title + " - " + info['year']);
            $(".year-movie").text(info['genre'] + " - " + info['contentRating']);
            $(".plot-movie").text(info['plot']);

            $(".player-holder").append(`
                <select id="select" class="select wide">
                </select>
                `)
            for (var i = 1; i < seasons + 1; i++) {
                $(".select").append(`
                <option value="` + i + `">Season ` + i + `</option>
                `)
            }
            select = NiceSelect.bind(document.getElementById('select'));
            for (var i = 1; i < seasons + 1; i++) {
                var episodes = await fetch("https://jprojects.space/title/" + id + "/season/" + i).then(function (response) {
                    return response.json();
                })
                if (i == 1) {
                    $(".episode-title").text(episodes['episodes'][0]['title'])
                }

                try {
                    if (episodes['episodes'].length == 0) {
                        window.location.href = "index.html"
                    }
                } catch (error) {
                    console.log(error);
                    $(".player-holder").append(`
                        <div class="episodes">
                            ` + episodes_list[0] + `
                        </div> 
                        `)
                    $(".episode").first().addClass('active');
                    return;
                }
                

                episodes = episodes['episodes'];
        
                console.log(episodes);
                nextAndBack.push(episodes.length);
                console.log(episodes[0]);
                list_episodes = ``;
                for (var j = 0; j < episodes.length; j++) {
                    if (j == 0) {
                        list_first_episodes.push(episodes[j]['title']);
                    }
                    list_episodes += `
                    <div class="episode" onclick="watchEpisode('` + id + `/` + i + `/` + (j + 1) + `', '` + episodes[j]["title"] + `')">
                        <div class="ep-image" style="background-image: url('` + episodes[j]["image"] + `')"> 
                        <span class="blur-episode"></span>
                        <span class="play-button-episode material-symbols-outlined">
                                    play_circle
                                </span>
                        </div>
                        <div class="ep-info">
                        <p class="small">S` + i + ` E` + (j + 1) + `</p>
                        <p>` + episodes[j]['title'] + `</p>
                        </div>
                    </div>
                    `
                }
                episodes_list.push(list_episodes);
            }
            $(".player-holder").append(`
            <div class="episodes">
                ` + episodes_list[0] + `
            </div> 
            `)
            //set video first ep to active
            $(".episode").first().addClass('active');
        }
    }
}

//reach into iframe and start autoplay 

//simulate click on iframe after 1 second
setTimeout(function () {
    var iframe = document.getElementById('videoIframe');
    iframe.click();
}, 2000);


$('body').on('click', '.null', function () {
    select.update()
    changeSeason();
});

$('body').on('click', '.episode', function () {
    this.classList.add('active');
    $(this).siblings().removeClass('active');
});

async function changeSeason() {
    fake_loader();
    await delay(1000);
    var selectn = document.getElementsByClassName('select');
    var season = selectn[0].value;
    $(".episode-title").text(list_first_episodes[season - 1]);
    $(".episodes").html(episodes_list[season - 1]);
    //set video first ep to active
    $(".episode").first().addClass('active');
    $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + urlParams.get('id') + "/" + season + "/1");
}



function fake_loader() {
    $('.video_src').attr('src', '');
    var span = document.createElement("span");
    span.classList.add("fake-loader");
    document.body.appendChild(span);

    // Trigger the animation after appending to ensure it starts from left: 0
    setTimeout(function () {
        span.style.width = "100%";
    }, 100); // A slight delay to ensure the CSS is applied

    //fade out the span after the animation duration
    setTimeout(function () {
        span.style.opacity = "0";
    }, 1100); // Slightly longer than the CSS animation to ensure it completes

    // Remove the span after the animation duration
    setTimeout(function () {
        span.remove();
    }, 2100); // Slightly longer than the CSS animation to ensure it completes
}

async function watchEpisode(src, name) {
    fake_loader();
    await delay(1000);
    $('.episode-title').text(name);
    $(".video_src").attr("src", "https://vidsrc.to/embed/tv/" + src);
    episode = src.split("/")[2];
    season = src.split("/")[1];
}

function backToSearch() {
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




start();