export function toggleFullscreen(apiEndpoint) {
    let fullscreenClass = 'opui-app-is-fullscreen';
    let isFullscreen    = document.body.classList.contains(fullscreenClass);

    // Check if class exists in list
    if (! isFullscreen) {
        document.body.classList.add(fullscreenClass);
    } else {
        document.body.classList.remove(fullscreenClass);
    }

    // Send toggle request to API backend if needed
    if (apiEndpoint) {
        fetch(apiEndpoint)
            .then(function(response) {
                // console.log("Toggled fullscreen");
            });
    }
}

// Old functionality (need to add request to API)
// let $body = jQuery('body')
// $body.toggleClass('ops_isFullScreen')
//
// const params = new URLSearchParams()
// params.append('action', 'op3toggleFullScreen')
// params.append('isFullScreen', $body.hasClass('ops_isFullScreen'))
//
// this.$http.post(this.$store.state.settings.ajax_url, params)
