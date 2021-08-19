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

var picker = new Pikaday({ field: document.getElementById('datepicker') });