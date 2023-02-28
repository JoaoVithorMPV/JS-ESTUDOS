hours = new Date()
minute = new Date()
hora = hours.getHours()
minutos = minute.getMinutes()

console.log(`Agora são extamente ${hora} horas e ${minutos} minutos`)

if (hora < 5.59) {
    console.log("Boa noite!")
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log("Boa tarde!")
} else if (hora < 23.59) {
    console.log ("Boa noite!")
} 
