function getAgeInDays(age) {
    return age * 365;
}

function createCreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
        "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
}
console.log(createCreeting("Giomar", 30))