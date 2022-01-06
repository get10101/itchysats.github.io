const getOs = () => {
    let os = "Unsupported";
    if (navigator.appVersion.indexOf('Win') !== -1) {
        os = "Windows";
    } else if (navigator.appVersion.indexOf('Mac') !== -1) {
        os = "Darwin";
    } else if (navigator.appVersion.indexOf('Linux') !== -1) {
        os = "Linux";
    }

    return os;
};

const GITHUB_RELEASE_URL = 'https://api.github.com/repos/itchysats/itchysats/releases/latest';

$(document).ready(function(){
    $.ajax( {
        url : GITHUB_RELEASE_URL,
        dataType : "jsonp",
        success : function ( response ) {
            $.each( response.data.assets, function ( i, asset ) {
                if (asset.name.startsWith('taker') && asset.name.includes(getOs())) {
                    $('a[href^="https://github.com/itchysats/itchysats/releases/latest"]').each(function() {
                        $(this).attr("href", asset.browser_download_url);
                        $(this).attr("target", "_self");
                    });
                }
            });
        }
    });
});
