fetch("http://www.omdbapi.com/?s=monkey&apikey=3bb1e43b").then(function(response) {
    return response.json();
}
).then(function(data) {
    return data["Search"]
});