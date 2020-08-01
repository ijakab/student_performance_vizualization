const numericFields = {
    age: 'Broj godina',
    Medu: 'Edukacija majke',
    Fedu: 'Edukacija oca',
    traveltime: 'Vrijeme putovanja',
    studytime: 'Vrijeme učenja',
    freetime: 'Slobodno vrijeme',
    goout: 'Vrijeme izlazaka',
    absences: 'Izostanci',
    G3: 'Uspjeh',
}

const keywords = {
    sex: 'Spol',
    famsize: 'Veličina obitelji',
    Mjob: 'Posao majke',
    Fjob: 'Posao oca',
    activities: 'Izvannastavne aktivnosti',
    higher: 'Zeli nastaviti školovanje',
}

const allFields = {
    ...numericFields,
    ...keywords
}

class Analyzer {
    constructor(filterContainer) {
        this.filterContainer = filterContainer
        this.filters = [];
    }
    
    addFilter(filter) {
        this.filters.push(filter)
        this.getFilterHtml()
    }
    
    getFilterHtml() {
        let i = -1
        const htmlArr = this.filters.map(filter => {
            i++
            return `<span class="badge badge-danger" data-index="${i}">${allFields[filter.field]} ${filter.operator} ${filter.value} X</span>`
        })
        this.filterContainer.innerHTML = htmlArr.join(' ');
    }
    
    removeFilter(element) {
        const index = element.getAttribute('data-index')
        this.filters.splice(index, 1)
        this.getFilterHtml()
    }
    
    getFilteredSubset() {
        if(!this.filters.length) return dataset
        return dataset.filter(d => {
            for(const filter of this.filters) {
                const valueToCheck = d[filter.field]
                const targetValue = filter.value
                if(filter.operator === 'equals' && valueToCheck != targetValue) return false
                if(filter.operator === 'greater than' && valueToCheck <= targetValue) return false
                if(filter.operator === 'less than' && valueToCheck >= targetValue) return false
            }
            return true
        })
    }
    
    getNumericPoints(field1, field2) {
        const raw = []
        for (const dataSample of this.getFilteredSubset()) {
            const x = dataSample[field1]
            const y = dataSample[field2]
            const existing = raw.find(d => d.x === x && d.y === y)
            if (existing) existing.count ++
            else raw.push({
                x, y,
                count: 1,
                sex: dataSample.sex
            })
        }
        
        // raw.sort(function(a, b){return a.x-b.x});
        return {
            raw: raw,
            x: raw.map(d => d.x),
            y: raw.map(d => d.y),
            xField: allFields[field1],
            yField: allFields[field2]
        }
    }
    
    getBarData(field) {
        const final = {}
        for (const row of this.getFilteredSubset()) {
            const value = row[field]
            if(final[value]) final[value] ++
            else final[value] = 1
        }
        return final
    }
}
