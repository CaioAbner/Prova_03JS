let tamanhoTurma = Number(prompt('Professor, digite qual a quantidade de alunos existem em sua turma.'))
let cont = 1
let soma = 0
let maiorNota = 0
let menorNota = Infinity

while (cont <= tamanhoTurma) {
    const notasAlunos = Number(prompt('Agora, digite as notas de cada aluno.'))
    if (notasAlunos > maiorNota) {
        maiorNota = notasAlunos
    } else {
        console.log('Deu ruim.');
    }
    if (notasAlunos < menorNota) {
        menorNota = notasAlunos
    } else {
        console.log('Deu ruim.');
    }
    soma += notasAlunos
    cont++
}

let media = soma / tamanhoTurma
console.log(`A média da sua turma foi de: ${media}`);
console.log(`A maior nota da sua turma foi de: ${maiorNota}`);
console.log(`A menor nota da sua turma foi de: ${menorNota}`);
window.alert(`A média da sua turma foi de: ${media}`)
window.alert(`A maior nota da sua turma foi de: ${maiorNota}`)
window.alert(`A menor nota da sua turma foi de: ${menorNota}`)