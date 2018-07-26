
window.openTranslate = (res) => {
    // Get item's content url
    let resContent = JSON.stringify(res);

    console.log(res);

    let readerWinUrl = `file://${__dirname}/translate.html?res=${resContent}`;

    // open item in new proxy window
    let readerWin = window.open(readerWinUrl);
}
