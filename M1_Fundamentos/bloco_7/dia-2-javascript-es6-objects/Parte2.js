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