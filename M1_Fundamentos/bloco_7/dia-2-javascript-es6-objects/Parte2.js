const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addItens(object, chave, valor) {
  object.chave = valor;
  console.log(object);
}
addItens(lesson2, 'turno', 'manhã');

function listKeys(object) {
  console.log(Object.keys(object));
}
listKeys(lesson1);

function sizeObject(object) {
  console.log(Object.keys(object).length);
}
sizeObject(lesson2);

function listValues(object) {
  console.log(Object.values(object));
}
listValues(lesson3);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 } );

console.log(allLessons);

function numberOfStudents() {
  const studentsL1 = lesson1.numeroEstudantes;
  const studentsL2 = lesson2.numeroEstudantes;
  const studentsL3 = lesson3.numeroEstudantes;
  const studentsNumber = studentsL1 + studentsL2 + studentsL3;
  console.log(studentsNumber);
}
numberOfStudents();

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

function verify(object, chave, valor) {
  const arrayChave = Object.keys(object);
  const arrayValor = Object.values(object);
  if (arrayChave.includes(chave) || arrayValor.includes(valor)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
verify(lesson1, 'noite', 'turno');
verify(lesson3, 'materia', 'Maria Clara');
