
window.openTranslate = () => {

    // Only if items have been added
    if (!this.toreadItems.length) return

    // Get selected item
    let targetItem = $('.read-item.is-active')

    // Get item's content url
    let contentURL = encodeURIComponent(targetItem.data('url'));

    // Get item index to pass to proxy window
    let itemIndex = targetItem.index() - 1;

    let readerWinUrl = `file://${__dirname}/render.html?url=${contentURL}&itemIndex=${itemIndex}`;

    // open item in new proxy window
    let readerWin = window.open(readerWinUrl);
}