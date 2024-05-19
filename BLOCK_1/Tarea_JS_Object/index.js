// Iteration 1

const person = {
  firstName : 'Luis' ,
  lastName: 'Burón'
}

function fullName(obj) {
  return obj.firstName + ' ' + obj.lastName
}

console.log(fullName(person))

// Iteration 2

const online = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 600
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 2320
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 4320
  }
]

function isOnline (obj) {
  const result = {}
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].status === 'online' && obj[i].lastActivity <= 600) {
      result['online'] = obj[i].username
    } else if (obj[i].status === 'online' && obj[i].lastActivity > 600) {
      result['afk'] = obj[i].username
    } else {
      result['offline'] = obj[i].username
    }
  }
  return result
}

console.log(isOnline(online))

// Iteration 3

const yourComputer = { 
  cpu : 25,
  gpu : 45,
  motherBase : 15,
  dvdDriver : 25,
  rom : 5,
  ram : 10,
}
const maxTemperatures = { 
  cpu : 33,
  gpu : 42,
  motherBase : 20,
  dvdDriver : 20,
  rom : 10,
  ram : 20,
}

function overheating(obj1, obj2) {
  const result = {...obj1}
  const booleans = []
  let values = Object.values(obj1)
  let values2 = Object.values(obj2)
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values2.length; j++) {
      i === j && values[i] <= values2[j] ? booleans.push(true) : i === j && values[i] > values2[j] ? booleans.push(false) : booleans
    }
  }
  result.cpu = booleans[0]; result.gpu = booleans[1]; result.motherBase = booleans[2]; result.dvdDriver = booleans[3]; result.rom = booleans[4]; result.ram = booleans[5]
  return result
}

console.log(overheating(yourComputer, maxTemperatures))

// Bonus strCount

const strObj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
}

function strCount(obj) {
  let values = Object.values(obj)
  let counter = 0
  for(let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'object' && values[i] !== null){
      for (let j = 0; j < values[i].length; j++) {
        if (typeof values[i][j] === 'string') {
          counter++
        }
      }
    } else if (typeof values[i] === 'string') {
      counter++
    }
  }
  return counter
}

console.log(strCount(strObj))

// Bonus fullNameFormatted 

const person1 = {
  firstName : 'luis',
  lastName: 'burón'
}

function fullNameFormatted(obj) {
  let first = obj.firstName.split('')
  let second = obj.lastName.split('')
  const upperFirst = first.map((item, index) => item === item.toLowerCase() && index === 0 ? item.toUpperCase() : item)
  const upperSecond = second.map((item, index) => item === item.toLowerCase() && index === 0 ? item.toUpperCase() : item)
  return upperFirst.join('') + ' ' + upperSecond.join('')
}

console.log(fullNameFormatted(person1)) 

// Bonus fullNameFormattedv2

const person2 = {
  firstName : 'luis álvaro',
  lastName: 'burón mejías'
}

function fullNameFormattedv2(obj) {
  let first = obj.firstName.split(' ')
  let second = obj.lastName.split(' ')
  const upperFirst = first.map((item, index) => {
    if (item[0] === item[0].toLowerCase()) return item[0].toUpperCase() + item.slice(1) + ' '
  }) 
  const upperSecond = second.map((item, index) => {
    if (item === item.toLowerCase()) return item[0].toUpperCase() + item.slice(1) + ' '
  })
                                 
  return upperFirst.join('') + upperSecond.join('').trim()
}

console.log(fullNameFormattedv2(person2))