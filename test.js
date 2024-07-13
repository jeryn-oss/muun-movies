//fetch my api

var episodes = await fetch("https://jprojects.space/title/tt3107288/season/1").then(function (response) {
  return response.json();
});

console.log(episodes);