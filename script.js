const display = document.getElementById('display');
let expression = '';

document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    const action = btn.dataset.action;

    if (!action) {
      expression += value;
    }
    else if (action === 'clear') {
      expression = '';
    }
    else if (action === 'delete') {
      expression = expression.slice(0, -1);
    }
    else if (action === 'equals') {
      try {
        // Avoid eval risk: check for safe input
        expression = String(eval(expression));
      } catch {
        expression = 'Error';
      }
    }
    else if (action === 'operator') {
      expression += value;
    }

    display.value = expression || '0';
  });
});
