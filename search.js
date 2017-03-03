var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


console.log("Hello, world!");


var serializer = new XMLSerializer();
var video = $("video")[0];
var vidPlayer = document.getElementById("movie_player")
console.log(vidPlayer)
console.log(vidPlayer.getAudioTrack);
// var xmlLink = vidPlayer.getAudioTrack().captionTracks[0]["H"];
var xmlLink = "https://www.youtube.com/api/timedtext?key=yttt1&signature=9D99E9AF61BA84B6D65944A470A0A73DDDA2E1CD.9DD7046F2748AFC85DD1F1946BDA0FCC187DE3&asr_langs=en%2Cnl%2Cja%2Cfr%2Cde%2Cit%2Cko%2Cpt%2Cru%2Ces&sparams=asr_langs%2Ccaps%2Cv%2Cexpire&hl=en_US&v=Q37H2l-TzWs&caps=asr&expire=1488539953&lang=en&name=Can+you+feel+the+love+tonight"
var parser = new DOMParser();
var xhttp = new XMLHttpRequest();
xhttp.open("GET", xmlLink, true);
xhttp.send();

var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
var $x = $(xmlDoc);




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

    console.log("listening");
    console.log(request.msg)




  	occurrences = search(request.msg, $x);
    skip(occurrences);


  });