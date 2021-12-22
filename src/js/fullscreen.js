export function toggleFullscreen(apiEndpoint) {
    let fullscreenClass = 'opui-app-is-fullscreen';
    let isFullscreen = document.body.classList.contains(fullscreenClass);

    // Check if class exists in list
    if (!isFullscreen) {
        document.body.classList.add(fullscreenClass);
        isFullscreen = true;
    } else {
        document.body.classList.remove(fullscreenClass);
        isFullscreen = false;
    }

    // Send toggle request to API backend if needed
    if (apiEndpoint) {
        fetch(apiEndpoint, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
            },
            body: new URLSearchParams({
                action: 'op3toggleFullScreen',
                nonce: OpsScriptData.nonce,
                isFullScreen: isFullscreen ? 1 : 0,
            }),
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
