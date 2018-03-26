function highlight(selector) {
    let deepestPath = 0;
    let deepestElement;
    let allLeafElement = $(`${selector} *:not(:has(*))`);
    allLeafElement.each(function(index, element) {
        let currentDeepnestLevel = 0;
        let originalLeaf = element
        while (element) {
            currentDeepnestLevel++;
            element = $(element).parent()[0];
        }

        if (currentDeepnestLevel > deepestPath) {
            deepestPath = currentDeepnestLevel;
            deepestElement = originalLeaf;
        }
    })

    let selectedElement = $(selector)[0]

    while (deepestElement && deepestElement !== selectedElement) {
        $(deepestElement).addClass('highlight')
        deepestElement = $(deepestElement).parent()[0];
    }
    $(selector).addClass('highlight')
}