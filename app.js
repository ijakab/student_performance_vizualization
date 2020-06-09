window.onload = function () {
    for(const select of document.getElementsByClassName('numeric-fields')) {
        for(const key of Object.keys(numericFields)) {
            select.options.add(new Option(numericFields[key], key))
        }
    }
}
