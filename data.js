const numericFields = {
    age: 'Broj godina',
    Medu: 'Edukacija majke',
    Fedu: 'Edukacija oca',
    traveltime: 'Vrijeme putovanja',
    studytime: 'Vrijeme u;enja',
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

class Analyzer {
    constructor(props) {
        this.filters = [];
    }
    
    getNumericPoints(field1, field2) {
        const raw = dataset.map(d => {
            return {
                x: d[field1],
                y: d[field2]
            }
        })
        raw.sort(function(a, b){return a.x-b.x});
        return raw
    }
}
