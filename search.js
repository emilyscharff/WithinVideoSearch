
console.log("Hello, world!");
var $x;

var searchResults;
var index = 0;
var ready = false;
var serializer = new XMLSerializer();
var video = $("video")[0];
var video_id = video.baseURI.split("?v=")[1]
var xmlLink = "https://www.youtube.com/api/timedtext?v=" + video_id + "&lang=en"
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
    if (len)
    index = 0;

}

//moves the video to the current search result
function skip(dir) {
    if (index + dir >= searchResults.length) {
        index = 0
        console.log("end")
    }
    if (index + dir < 0) {
        index = searchResults.length - 1;
        console.log("beg")
    }
    time = searchResults[index + dir].attributes.start;
    video.currentTime = serializer.serializeToString(time)

    index += dir;
}

//Listens for Search Input from Omnibar
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (ready) {




    occurrences = search(request.msg, $x);
    skip(0);

    }




  });


addEventListener("keydown", function(e) {
    if (e.code == "KeyD") {
        skip(1)
    }
    if (e.code == "KeyS") {
        skip(-1)
    }
});






