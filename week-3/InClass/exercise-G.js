function valid(year) {
    const allowedYear= 2021-17
    return year <= allowedYear;
}
const birthYears=[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
const yearsValid = birthYears.filter(valid);

console.log(yearsValid); 