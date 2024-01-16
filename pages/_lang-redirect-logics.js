/* Lang redirect */
if (typeof window !== 'undefined') {
    const done = window.sessionStorage.getItem('lang_redirect_done');
    if (!done) {
        window.sessionStorage.setItem('lang_redirect_done', 'true');
        if (window.navigator.language) {
            if (window.navigator.language.substr(0, 2) !== 'zh') {
                window.location.href = '/en-us';
            }
        }
    }
}
