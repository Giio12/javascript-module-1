const messy = [100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN", ];

let result = messy.filter(item => typeof item === 'string')
  .map(item => item.toUpperCase() + "!")
console.log(result)