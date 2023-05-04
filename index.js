const Aluno = require('./Aluno');

const davis = new Aluno('Davis', 8);
const ana = new Aluno('Ana', 9);
const pedro = new Aluno('Pedro', 7);
const daniel = new Aluno('Daniel', 5);
const priscila = new Aluno('Priscila', 6);
const igor = new Aluno('Igor', 10);
const paulo = new Aluno('Paulo', 3);
const gabriela = new Aluno('Gabriela', 0);
const aline = new Aluno('Aline', 4);

const alunos = [
  davis,
  ana,
  pedro,
  daniel,
  priscila,
  igor,
  paulo,
  gabriela,
  aline,
];

const listaDeAprovados = alunosAprovados(alunos);

console.table(listaDeAprovados);

function alunosAprovados(alunos) {
  const aprovados = alunos.filter(({ nota }) => nota >= 6);
  return aprovados;
}
