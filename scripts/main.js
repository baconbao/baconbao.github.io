const ready = (func) => {
    if (document.readyState !== 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}
ready(() => {
    // Append target=_blank attr to A element.
    const aLinks = document.querySelectorAll('a');
    Array.from(aLinks).map((a) => {
        if (a.classList.contains('no-blink') === false) {
            a.setAttribute('target', '_blank');
        }
    });
    // Track a.patent-link
    const patentLinks = document.querySelectorAll('a.patent-link');
    Array.from(patentLinks).map((link) => {
        const rmSpace = (t) => t.split(' ').join('');
        const text = rmSpace(link.innerText);
        if (typeof ga !== 'undefined') {
            link.addEventListener('click', () => {
                ga('send', 'event', 'link', `patent-${text.toLowerCase()}`);
            });
        }
    });
});
