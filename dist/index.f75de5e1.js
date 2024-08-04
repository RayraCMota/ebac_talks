AOS.init(); //acessa a biblioteca que movimenta as seções
const dataDoEvento = new Date("Aug 30, 2024 19:00:00"); //essa linha registra a data do evento, é necessario que se escreva dentro dos parenteses a data em 3 primeiras letras do mês em ingles, dia, ano hr:min:sec.
const timeStampDoEvento = dataDoEvento.getTime(); //essa linha transforma o "objeto" que esta inserido em DataDoEvento e os da a propriedade de data e hr de fato
const contaAsHoras = setInterval(function() {
    const agora = new Date(); //faz parte da function
    const timeStampAtual = agora.getTime(); //faz parte da function
    const dias = 86400000; //transforma os milissegundo em dias
    const horas = 3600000; //transforma os milissegundo em horas
    const minutos = 60000; //transforma os milissegundos em minutos
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual; //faz a conta entre o dia do evento e o dia de hj, É IMPORTANTE FRIZAR QUE A DATA DO EVENTE SEMPRE VEM NA FRENTE!!!
    const diasParaEvento = Math.floor(distanciaAteEvento / dias); //transforma o numero bruto de milissegundos gerado pela const distanciaAteEvent em dias, tirando o resto e arredondando para um numero inteiro
    const horasParaEvento = Math.floor(distanciaAteEvento % dias / horas); //transforma o numero bruto de milissegundos gerado pela const distanciaAteEvent em horas, tirando o resto e arredondando para um numero inteiro
    const minutosParaEvento = Math.floor(distanciaAteEvento % horas / minutos); //transforma o numero bruto de milissegundos gerado pela const distanciaAteEvent em minutos, tirando o resto e arredondando para um numero inteiro
    const segundosParaEvento = Math.floor(distanciaAteEvento % minutos / 1000); //transforma o numero bruto de milissegundos gerado pela const distanciaAteEvent em segundos, tirando o resto e arredondando para um numero inteiro
    document.getElementById("contador").innerHTML = `${diasParaEvento} dias  ${horasParaEvento}h ${minutosParaEvento}m ${segundosParaEvento}s.` //essa linha de codigo acessa o local no arquivo html e escreve no espaço registrado pelo id o que queremos.
    ;
    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras); //essa linha limpa a const contaAsHoras
        document.getElementById("hero__text").innerHTML = `Evento encerrado.` // essa linha escreve no html a alteração do contador.
        ;
    }
}, 1000); //esse 1000 serve para atualizar a função a cada 1 segundo ou 1000 milisegundos.

//# sourceMappingURL=index.f75de5e1.js.map
