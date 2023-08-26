

// //
// //     /*
// //     Neste exemplo: será usado o mesmo parametro cujo o nome é *operaão*
// //     porém a estrutura lógica criada é um pouco diferente, tem o objetivo de ser mais otimizada,
// //     mas enxuta, tem um padrão mais limpo da escrita do código.

// //     aqui o código inicia a partir do *if* considerando que as função já havia sido criada,
// //     respectivamente como as variáveis que vem logo abaixo, conforme exemplo 1
// //     */

// if (operacao == 'saque' || operacao == 'transferencia') {
//     if (valorUsuario > valorSaldo)
//         alert('xiii, deu ruim!, Saldo Insuficiente')
// } else {
//     let atualizaSaldo = valorUsuario - valorSaldo
//     document.querySelector('#saldo').innerHTML = atualizaSaldo

//     //Aqui abaixo, já seria operação de depósito
// } if (operacao == 'deposito') {
//     let atualizaSaldo = valorUsuario + valorSaldo
//     alert('Seu depósito foi realizado')
//     document.querySelector('#saldo').innerHTML = atualizaSaldo
// }

// //     /*
// //     Neste exemplo abaixo, está sendo aplicado um elemento chamado *switch case*
// //     é um código aplicado para casos de estrutura de decisão, assim como o *if else*,
// //     porém, o switch case é utilizado em casos que se tem múltiplas condições de decisões.

// //     Fica um código mais organizada e limpo, estrutura mais otimizada.
// //     */

// switch (operacao){
//     case 'saque':
//         if (valorUsuario > valorSaldo)
//             alert('Azedou. Saque insuficiente')
// } else {
//     let atualizaSaldo = valorUsuario - valorSaldo
//     alert('Deu bom. Operação realizado!')
//     document.querySelector("#saldo").innerHTML = atualizaSaldo
// }

//     case 'deposito':
// let atualizaSaldo = valorUsuario + valorSaldo
// alert('Depósito realizado')
// document.querySelector('#saldo').innerHTML = atualizaSaldo

// case 'transferencia':
//     let atualizaSaldo = valorUsuario > valorSaldo
//     alert('saldo insuficiente para realizar transferências')
//     document.querySelector('#saldo').innerHTML = atualizaSaldo


/*-------------------------------------------------------------------------
script 
1 - pegar o valor do usuário
2 - calcular valor, (criar condicional)
3 - apresentar msg no display

código
1.criar função com a chama dos buttons(saque, transferencia, deposito)
2.criar parametro aonde irá atribuir o valor de cada button
3.criar variavel atribuindo o valor do usuario
4.criar variavel e atribuir o valor do saldo atualizado

5.criar for e dentro criar condicional
6.criar if (se para alguma) e (se para outra coisa) conforme operação solicitada
7. apresentar uma mensagem para o usuario
8. atualizar o saldo

*/

function atualizaSaldo(financeiro) {
    let valorCliente = parseFloat(prompt("Digite o valor de:" + financeiro))
    let saldo = parseFloat(document.querySelector('#telaSaldo').innerText)

    if (financeiro == 'saque' || financeiro == 'transferencia') {
        if (valorCliente > saldo) {
            alert('Saldo indisponível')
        } else {

            let atualizaSaldo = saldo - valorCliente
            alert('Operação realizada com sucesso!')
            document.querySelector('#telaSaldo').innerHTML = atualizaSaldo
        }


    }
    if (financeiro == 'deposito') {
        alert('Depósito realizado')
        let saldoAtualizado = valorCliente + saldo
        document.querySelector("telaSaldo").innerHTML = saldoAtualizado
    }

}

























