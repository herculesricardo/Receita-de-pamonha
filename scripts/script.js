const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const counter = document.getElementById('counter');
const cornAmount = document.getElementById('corn-amount');
const sugarAmount = document.getElementById('sugar-amount');
const butterAmount = document.getElementById('butter-amount');

// Adicionar evento de clique aos botões
decreaseBtn.addEventListener('click', decreaseCounter);
increaseBtn.addEventListener('click', increaseCounter);

// Função para diminuir o contador e atualizar a quantidade de ingredientes
function decreaseCounter() {
  let currentCount = parseInt(counter.textContent);
  if (currentCount > 1) {
    currentCount--;
    counter.textContent = currentCount;
    updateIngredientList(currentCount);
  }
}

// Função para aumentar o contador e atualizar a quantidade de ingredientes
function increaseCounter() {
  let currentCount = parseInt(counter.textContent);
  currentCount++;
  counter.textContent = currentCount;
  updateIngredientList(currentCount);
}

// Função para atualizar a quantidade de ingredientes na lista
function updateIngredientList(count) {
  cornAmount.textContent = count;
  sugarAmount.textContent = count;
  butterAmount.textContent = count;
}