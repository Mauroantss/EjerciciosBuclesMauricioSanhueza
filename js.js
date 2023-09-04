console.log("------- Desde un numero x a 0--------")

// Aca pido que el usuario ingrese el numero 
let numeroIngresado = (prompt("Ingresa un número entre 1 y 100:"))

// Condicional para ver si el numero otorgado esta dentro del rango permitido
if (numeroIngresado >= 1 && numeroIngresado <= 100) {
  // Bucle para que, segun el numero ingresado, imprima los numeros en la consola hasta llegar a 0
  for (let i = numeroIngresado; i >= 0; i--) {
    console.log(i)
  }
  // En caso de que el usuario no ingrese un numero o caracter dentro del rango ingresado
} else {
  console.log("El número ingresado está fuera del rango permitido.")
}

console.log("---- Multiplicacion numero x hasta 10----")

// Aca pido que el usuario ingrese un numero x para multiplicarlo
let numeroIngresado2 = (prompt("Ingresa un número entre 1 y 10:"))

// Verificar si el número ingresado está dentro del rango permitido
if (numeroIngresado2 >= 1 && numeroIngresado2 <= 10) {
  console.log(`Tabla de multiplicar del ${numeroIngresado2}:`)
  
  // Bucle para multiplicar el numero x hasta 10
  for (let i = 1; i <= 10; i++) {
    let resultado = numeroIngresado2 * i;
    console.log(`${numeroIngresado2} x ${i} = ${resultado}`)
  }
  // En caso de que el usuario no ingrese un numero o caracter dentro del rango ingresado
} else {
  console.log("El número ingresado está fuera del rango permitido.")
}


console.log("---- Ingresar numeros y sumar; 0 cierra----")

console.log("---- Mismo método do while ----")

let sumar = 0
let continuar = true

do {
  const entrada = prompt("Ejer 1 Ingrese un número (ingrese 0 para salir):")
  const numero = parseFloat(entrada)

  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.")
  } else {
    sumar += numero;
    if (numero === 0) {
      continuar = false
    }
  }
} while (continuar)

console.log(`La suma de los números ingresados es: ${sumar}`)



console.log("---- Mismo metodo do while----")

let suma = 0
let numero

do {
  const entrada = prompt(" Ejer2 Ingrese un número (ingrese 0 para salir):")
  
  if (entrada !== null) {
    numero = parseFloat(entrada)

    if (!isNaN(numero)) {
      suma += numero;
    } else {
      alert("Por favor, ingrese un número válido.")
    }
  } else {
    // El usuario canceló el ingreso, detenemos el bucle
    numero = 0
  }
} while (numero !== 0)

console.log(`La suma de los números ingresados es: ${suma}`)


console.log("---- numero secreto----")

console.log("Adivina el número secreto (tienes 3 intentos)")

const numeroSecreto = sumar
let intentos = 3
let adivinado = false

alert("Adivina el número secreto (tienes 3 intentos)")

while (intentos > 0 && !adivinado) {
  const entrada = prompt(`Intentos restantes: ${intentos}\nIngresa un número:`)
  const numeroUsuario = parseInt(entrada)

  if (isNaN(numeroUsuario)) {
    alert("Por favor, ingresa un número válido.")
  } else if (numeroUsuario === numeroSecreto) {
    adivinado = true;
    alert("¡Felicidades! Adivinaste el número secreto.")
  } else if (numeroUsuario < numeroSecreto) {
    alert("El número secreto es mayor.")
  } else {
    alert("El número secreto es menor.")
  }

  intentos--
}

if (!adivinado) {
  alert(`Agotaste tus intentos. El número secreto era: ${numeroSecreto}`)  
}



console.log("---- Divisores----")

const numeroIngre = parseInt(prompt("Ingrese un número:"))

if (isNaN(numeroIngre)) {
  console.log("Por favor, ingrese un número válido.")
} else {
  console.log(`Los divisores de ${numeroIngre} son:`)
  
  for (let i = 1; i <= numeroIngre; i++) {
    if (numeroIngre % i === 0) {
      console.log(`${i} es divisor de ${numeroIngre}`)
    }
  }
}


console.log("----Colores----")

const colores = ['Violeta', 'Rosado', 'Cafe', 'Azul', 'Burdeo']

for (const color of colores) {
  console.log(color)
}


console.log("----Doble de numeros----")

const numeros = [8, 23, 16, 5, 25]

for (const numero of numeros) {
  const doble = numero * 2
  console.log(`El doble de ${numero} es ${doble}`)
}


console.log("----Mensaje de presentacion----")


const familia = [
  { nombre: "Catalina", edad: 25, relacion: "Pareja" },
  { nombre: "Mauricio", edad: 29, relacion: "Pareja" },
  { nombre: "Patricia", edad: 51, relacion: "Suegra" },
  { nombre: "Sharon", edad: 4, relacion: "Mascota" }
];

for (const miembro of familia) {
  console.log(`Hola, soy ${miembro.nombre}, tengo ${miembro.edad} años y soy ${miembro.relacion}.`)
}


console.log("----Descripcion solo las propiedades ----")

const persona = {
  nombre: "Catalina",
  edad: 25,
  ciudad: "Santiago",
  profesion: "Contadora",
  hobbies: ["Salir", "Comer","Beber","Bailar", "Cantar","Tejer"]
};

for (const clave in persona) {
  console.log(clave)
}

console.log("----Descripcion solo las propiedades ----")

const persona1 = {
  nombre: "Catalina",
  edad: 25,
  ciudad: "Santiago",
  profesion: "Contadora",
  hobbies: ["Salir", "Comer","Beber","Bailar", "Cantar","Tejer"]
}

for (const clave in persona1) {
  const valor = persona1[clave]
  console.log(valor)
}

console.log("---suma pares e impares ----")


let sumaPares = 0
let sumaImpares = 0
let numer
let continua = true 

while (continua) {
  const entrada = prompt("Ingresa un número (ingresa 0 para salir):")
  numer = parseInt(entrada)

  if (isNaN(numer)) {
    alert("Por favor, ingresa un número válido.")
  } else {
    if (numer === 0) {
      continua = false 
    } else if (numer % 2 === 0) {
      sumaPares += numer 
    } else {
      sumaImpares += numer 
    }
  }
}

console.log(`Suma de números pares: ${sumaPares}`)
console.log(`Suma de números impares: ${sumaImpares}`)



console.log("---Numero mas grande de array ----")


const num = [28,29,25,19,18,8,15,69,11,13];
let numeroMasGrande = num[0]

for (let i = 1; i < num.length; i++) {
  if (num[i] > numeroMasGrande) {
    numeroMasGrande = num[i]
  }
}

console.log(`El número más grande en el array es: ${numeroMasGrande}`)


