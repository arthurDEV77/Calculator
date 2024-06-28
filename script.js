// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

function clearDisplayScientific() {
    document.getElementById('display-scientific').value = '';
}

function appendToDisplayScientific(value) {
    document.getElementById('display-scientific').value += value;
}

function calculateScientific() {
    const display = document.getElementById('display-scientific');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

function changeCalculator() {
    const select = document.getElementById('calculator-select');
    const basicCalculator = document.getElementById('basic-calculator');
    const scientificCalculator = document.getElementById('scientific-calculator');
    
    if (select.value === 'basic') {
        basicCalculator.style.display = 'block';
        scientificCalculator.style.display = 'none';
    } else if (select.value === 'scientific') {
        basicCalculator.style.display = 'none';
        scientificCalculator.style.display = 'block';
    }
}

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Escuro';
    }
});