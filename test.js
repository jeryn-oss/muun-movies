//fethc https://imdb-api.projects.thetuhin.com/search?query= variable

function getIMDBdata(id) {
    fetch("https://jprojects.space/title/" + id + "/season/" + 1).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data['episodes']);
    });
}

getIMDBdata("tt2802850");