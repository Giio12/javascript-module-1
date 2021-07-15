let years=[1964, 2008, 1999, 2005, 1978, 1985, 1919];
function edad(year) {
    return 2021- year
}
edad(years)
years.forEach(year =>console.log(`Si naciste en el año ${year} tienes ${edad(year)} años`))