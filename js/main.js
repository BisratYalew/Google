var onGoogle = false;
var onImage = false;
var onYoutube = false;

function on_youtube() {

    onYoutube = true;
    onImage = false;
    onGoogle = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Search YouTube';
    document.getElementById("search").style.borderBottom = "4px #b32400 solid";
    document.title = "Search Youtube";

}

function on_image() {

    onImage = true;
    onYoutube = false;
    onGoogle = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Search Google Images';
    document.getElementById('search').style.borderBottom = "4px #0073e6 solid";
    document.title = "Google Images";

}

function on_google() {

    onImage = false;
    onYoutube = false;
    onGoogle = true;
    document.getElementsByName('searchbox')[0].placeholder = 'Search Google';
    document.getElementById("search").style.borderBottom = "4px #2eb82e solid";
    document.getElementsByName('searchbox')[0].style.color = 'red';

    document.title = "Google Search";

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

    switch(url) {
        case onImage:
            url = googleImagesSearchUrl.concat(input);

        case onGoogle:
            url = googleSearchUrl.concat(input);

        case onYoutube:
            url = youtubeSearchUrl.concat(input);

        default:
            return;
    }

   

    if (e.keyCode == 13 && input != "") {
        window.location = url;
    }

}
