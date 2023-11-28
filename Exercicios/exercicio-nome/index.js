const writeName = (name) => {
    console.log(`Meu nome é ${name}`)
}

writeName("Marcelo");

const verifyAge = (idade) => {

    if(idade >= 18){
        console.log("Você é de maior!!")
    } else {
        console.log("Você ainda é de menor '-'")
    }
}

verifyAge(20);