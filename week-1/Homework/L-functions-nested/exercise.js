function totalPersons(numStudents, numMentors) {
    return numStudents + numMentors
}

function calculatePorcentage(numStudents, numMentors) {
    let total = totalPersons(numStudents, numMentors); //Utilizo la funcion de arriba para tener la suma de mentores y estudiantes
    let porcentageStudents = Math.round((numStudents / total) * 100); //Utilizo math.round para redondear y tener una cifra entera
    let porcentageMentors = Math.round((numMentors / total) * 100); //Utilizo math.round para redondear y tener una cifra entera
    return `El porcentaje de alumnos es:${porcentageStudents}% y el porcentaje de mentores es:${porcentageMentors}%`
}
console.log(calculatePorcentage(18, 9))