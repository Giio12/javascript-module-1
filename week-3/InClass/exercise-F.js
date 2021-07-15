let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function edad(year) {
    return 2021 - year
}

years.forEach(year => {
    if (edad(year) >= 17) {
        console.log(`Born in ${year} can drive `)
    } else {
        console.log(`Born in ${year} can drive in ${17-edad(year)} years`)
    }
})