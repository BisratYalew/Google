var onGoogle = false;
var onImage = false;
var onYoutube = false;

function on_youtube() {

    console.log("ON YOUTUBE CLICKED")

    onYoutube = true;
    onImage = false;
    onGoogle = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Search YouTube';
    document.getElementById("search").style.borderBottom = "4px #b32400 solid";
    document.getElementsByName('searchbox')[0].style.color = '#b32400';

    document.title = "Search Youtube";

}

function on_image() {

    onImage = true;
    onYoutube = false;
    onGoogle = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Search Google Images';
    document.getElementById('search').style.borderBottom = "4px #0073e6 solid";
    document.getElementsByName('searchbox')[0].style.color = '#0073e6';

    document.title = "Google Images";

}

function on_google() {

    onImage = false;
    onYoutube = false;
    onGoogle = true;
    document.getElementsByName('searchbox')[0].placeholder = 'Search Google';
    document.getElementById("search").style.borderBottom = "4px #2eb82e solid";
    document.getElementsByName('searchbox')[0].style.color = '#2eb82e';

    document.title = "Google Search";

}

var url_social = {
    google: "https://www.google.com/search?q=",
    googleImages: "https://www.google.com/search?tbm=isch&q=",
    youtube: "https://www.youtube.com/results?search_query="
}

function open_url(e) {

    var url;
    var input = document.getElementById("search").value;
    input = input.trim();

    input = input.replace("+", "%2B");

    input = input.replace(" ", "+");
    input = input.replace("=", "%3D");
    input = input.replace("&", "%26");


    var googleSearchUrl = url_social.google;
    var googleImagesSearchUrl = url_social.googleImages;
    var youtubeSearchUrl = url_social.youtube;

    switch(true) {
        case onImage:
            url = googleImagesSearchUrl.concat(input);
            break;

        case onGoogle:
            url = googleSearchUrl.concat(input);
            break;

        case onYoutube:
            url = youtubeSearchUrl.concat(input);
            break;

        default:
            url = googleSearchUrl.concat(input);

    }

   

    if (e.keyCode == 13 && input != "") {
        window.location = url;
    }

}
