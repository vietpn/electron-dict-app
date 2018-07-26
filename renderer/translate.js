
window.openTranslate = (url) => {
    // Get item's content url
    let url = encodeURIComponent(url);

    let readerWinUrl = `file://${__dirname}/translate.html?url=${resContent}`;

    // open item in new proxy window
    let readerWin = window.open(readerWinUrl);
}
