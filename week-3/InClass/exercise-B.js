const classA = ['Maria Victoria', 'Matias', 'Juan de Sousa', 'Julian', 'Jesus', 'Wendy'];
const classB = ['Giomar', 'Caleb', 'Jaime', 'Gabriela', 'Genesis'];
let spanishClass = classA.concat(classB).sort()
// console.log(spanishClass)
function find(spanishClass, name) {
    if (spanishClass.includes(name)) {
       
        console.log(`${name} is at the class with ${spanishClass.join(", ")}`)
    } else {

        console.log(`${name} is not at the class with ${spanishClass.join(", ")}`)
    }
}
find(spanishClass, "Giomar")