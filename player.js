const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (!urlParams.has('id')) {
    window.location.href = "index.html"
}
$(".player").append('<iframe src="https://vidsrc.to/embed/movie/' + urlParams.get('id') + '" allow="autoplay; fullscreen" allowfullscreen="yes" frameborder="no" scrolling="no" ><iframe>')

$(".back-btn").on("click", function () {
    window.history.back();
});