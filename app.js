const svgW = 500, svgH = 500;

window.onload = function () {
    const numericField1 = document.getElementById('numericSelect1')
    const numericField2 = document.getElementById('numericSelect2')
    const filterContainer = document.getElementById('filter-container')
    const filterFieldSelect = document.getElementById('filterFieldSelect')
    const filterOperatorSelect = document.getElementById('filterOperatorSelect')
    const filterValueInput = document.getElementById('filterValueSelect')
    const filterForm = document.getElementById('filterForm')
    
    const analyzer = new Analyzer(filterContainer)
    analyzer.getFilterHtml()
    filterContainer.addEventListener('click', function (e) {
        analyzer.removeFilter(e.target)
    }, false)
    
    for(const select of document.getElementsByClassName('numeric-fields')) {
        fillSelectOptions(select, numericFields)
    }
    fillSelectOptions(filterFieldSelect, allFields)
    
    document.getElementById('numericForm').addEventListener('submit', function (e) {
        e.preventDefault()
        const field1 = getSelectValue(numericField1)
        const field2 = getSelectValue(numericField2)
        const scatterData = analyzer.getNumericPoints(field1, field2)
        const barData = analyzer.getBarData(field1)
        drawer.draw(scatterData, barData)
    }, false)
    
    filterForm.addEventListener('submit', function (e) {
        e.preventDefault()
        analyzer.addFilter({
            field: getSelectValue(filterFieldSelect),
            operator: getSelectValue(filterOperatorSelect),
            value: filterValueInput.value
        })
    }, false)
}

function getSelectValue(select) {
    return select.options[select.selectedIndex].value
}

function fillSelectOptions(select, fields) {
    for(const key of Object.keys(fields)) {
        select.options.add(new Option(fields[key], key))
    }
}
