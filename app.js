window.onload = function () {
    const numericField1 = document.getElementById('numericSelect1')
    const numericField2 = document.getElementById('numericSelect2')
    
    const analyzer = new Analyzer()
    
    for(const select of document.getElementsByClassName('numeric-fields')) {
        for(const key of Object.keys(numericFields)) {
            select.options.add(new Option(numericFields[key], key))
        }
    }
    
    document.getElementById('numericForm').addEventListener('submit', function (e) {
        e.preventDefault()
        const field1 = getSelectValue(numericField1)
        const field2 = getSelectValue(numericField2)
        console.log(analyzer.getNumericPoints(field1, field2))
    }, false)
}

function getSelectValue(select) {
    return select.options[select.selectedIndex].value
}
