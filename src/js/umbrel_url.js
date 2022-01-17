const UMBREL_LOCAL_URL = 'http://umbrel.local';

$(document).ready(function(){
    // Distinguish CORS related error from other (unreachable) error to distinguish if we can use
    // Using native fetch allows us to distinguish:
    // https://stackoverflow.com/questions/19325314/how-to-detect-cross-origin-cors-error-vs-other-types-of-errors-for-xmlhttpreq
    if (window.fetch) {
        // must be chrome or firefox which have native fetch
        fetch(UMBREL_LOCAL_URL, {'mode':'no-cors'})
            .then(function () {
                // the request worked (CORS errors on the browser side are ignored)
                $('a[href^="https://itchysats.medium.com/itchysats-is-on-umbrel-eb079f467233"]').each(function() {
                    $(this).attr("href", "http://umbrel.local/app-store/itchysats");
                });
            })
            .catch(function () {
                // any other errors (i.e.404) are ignored, we keep the default URL
            });
    } else {
        // must be non-updated safari or older IE...
        // ignore
    }
});
