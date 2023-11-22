const rand = (min=0, max=5) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
};

const esperaAi = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(false);
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// const promises = [
//     'Primeiro valor',
//     esperaAi('Primise 1', 3000),
//     esperaAi('Primise 2', 500),
//     esperaAi('Primise 3', 1000),
//     // esperaAi(1000, 3000),
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     })

async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', rand());
            console.log(fase1);
        
        const fase2 = await esperaAi('Fase 2', rand());
            console.log(fase2);
        
        const fase3 = await esperaAi('Fase 3', rand());
            console.log(fase3);
        
        console.log(`Terminamos na fase: ${fase3}`)
    } catch(e){
        console.log(e);
    };
};
executa();
