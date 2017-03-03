
console.log("Hello, world!");
var $x;

var ready = false;
var serializer = new XMLSerializer();
var video = $("video")[0];
var vidPlayer = document.getElementById("video")
console.log(video)
video.pause();
// var vidPlayer = document.getElementById("movie_player")
// console.log(vidPlayer)
// console.log(vidPlayer.getAudioTrack);
// var xmlLink = vidPlayer.getAudioTrack().captionTracks[0]["H"];
var xmlLink = "https://www.youtube.com/api/timedtext?v=6g4u0tsG-aA&key=yttt1&caps=-lyr&expire=1488586154&sparams=caps%2Cv%2Cexpire&hl=en_US&signature=DDE4B99A1720404F02DEE7DA9B4B7529C359E24E.D47BB97D1DA13871A43A159DBD9595C59580207E&lang=en"
var parser = new DOMParser();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    ready = true;
    var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
    $x = $(xmlDoc);

    }
};
xhttp.open("GET", xmlLink, true);
xhttp.send();






//Finds all occurrences of the keyword
function search(keyword) {
    console.log(keyword)
    searchResults = $x.find("text:contains(" + keyword + ")");

    return searchResults
    console.log(searchResults)
}

//moves the video to the current search result
function skip(searchResults) {
    console.log(searchResults[0])
    time = searchResults[0].attributes.start;
    video.currentTime = serializer.serializeToString(time)
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (ready) {
    console.log("listening");
    console.log(request.msg)




    occurrences = search(request.msg, $x);
    skip(occurrences);

    }




  });