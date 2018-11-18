var music = new Audio("sound/music.mp3");
var videos = new Audio("sound/videos.mp3");
var store = new Audio("sound/store.mp3");
var shows = new Audio("sound/shows.mp3");
var posters = new Audio("sound/posters.mp3");
var testing = new Audio("sound/testing.mp3");

function musicClick() {
  music.play();
  music.onended = function () {
    window.location.href = "music.html";
  }
}

function videosClick() {
  videos.play();
  videos.onended = function () {
    window.location.href = "videos.html";
  }
}

function storeClick() {
  store.play();
  store.onended = function () {
    window.location.href = "store.html";
  }
}

function showsClick() {
  shows.play();
  shows.onended = function () {
    window.location.href = "shows.html";
  }
}

function postersClick() {
  posters.play();
  posters.onended = function () {
    window.location.href = "posters.html";
  }
}

function signupClick() {
  testing.play();
  testing.onended = function () {
    window.location.href = "signup.html";
  }
}

function homeClick() {
  testing.play();
  testing.onended = function () {
    window.location.href = "/";
  }
}
