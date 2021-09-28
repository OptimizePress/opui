import {toggleFullscreen} from "../js/fullscreen";

document.addEventListener("DOMContentLoaded", function() {
    // Add fullscreen toggle event
    document.querySelector('.opui-fullscreen-btn').addEventListener('click', function (event) {
        event.preventDefault();
        toggleFullscreen('https://jsonplaceholder.typicode.com/posts/1');
    }, false);
});
