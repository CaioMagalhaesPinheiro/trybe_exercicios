const selectState = document.getElementById('state');
let stateList = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function putState() {
  for (let index in stateList) {
    const stateItem = document.createElement('option');
    stateItem.value = stateList[index];
    stateItem.innerText = stateList[index];
    selectState.appendChild(stateItem);
  }
} putState();


function validarData() {
  const data = document.getElementById('date').value;
  const dataSeparada = data.split('/');
  
  let dia = dataSeparada[0];
  let mes = dataSeparada[1];
  let ano = dataSeparada[2];
  
  let diaValido = dia > 0 && dia <= 31;
  let mesValido = mes > 0 && mes <= 12;
  let anoValido = ano > 0;
  
  if (!diaValido || !mesValido || !anoValido) {
    alert('Erro na data');  
  }
}

const button = document.getElementById('submit');
button.addEventListener('click', function(event) {
  event.preventDefault();
  validarData();  
});

