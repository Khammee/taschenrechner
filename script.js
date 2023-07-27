// Definiere eine Variable "expression" für den aktuellen Ausdruck
let expression = '';

// Referenz auf das HTML-Element für die Anzeige des Ausdrucksverlaufs
let historyDisplay = document.getElementById("history");

// Referenz auf das HTML-Element für die Ergebnisanzeige
let resultDisplay = document.getElementById("result");

// Funktion zum Anhängen einer Ziffer oder eines Operators an den aktuellen Ausdruck
function appendValue(value) {
  expression += value;
  resultDisplay.value = expression;
}

// Funktion zum Anhängen eines Operators an den aktuellen Ausdruck
function appendOperator(operator) {
  // Überprüfe, ob der Ausdruck bereits mit einem Operator endet
  // Wenn ja, entferne das vorherige Operator-Zeichen
  if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
    expression = expression.slice(0, -1);
  }
  expression += operator;
  resultDisplay.value = expression;
}

// Funktion zum Berechnen des Ergebnisses des aktuellen Ausdrucks
function calculate() {
  try {
    // Evaluiere den Ausdruck und berechne das Ergebnis
    let result = eval(expression);
    // Speichere den Ausdruck im Anzeigeverlauf
    historyDisplay.value = expression;
    expression = result.toString();
    resultDisplay.value = expression;
  } catch (error) {
    // Bei einem Fehler zeige "Error" in der Ergebnisanzeige an
    resultDisplay.value = 'Error';
  }
}

// Funktion zum Löschen aller Eingaben und Ausdrucke
function clearAll() {
  expression = '';
  historyDisplay.value = '';
  resultDisplay.value = '';
}

// Funktion zum Löschen des zuletzt eingegebenen Zeichens im Ausdruck
function clearEntry() {
  expression = expression.slice(0, -1);
  resultDisplay.value = expression;
}

// Funktion zum Umschalten des Vorzeichens des Ausdrucks
function toggleSign() {
  if (expression !== '' && expression !== '0') {
    if (expression[0] === '-') {
      expression = expression.slice(1);
    } else {
      expression = '-' + expression;
    }
    resultDisplay.value = expression;
  }
}

// Funktion zum Berechnen des Prozentsatzes des aktuellen Ausdrucks
function calculatePercentage() {
  try {
    // Evaluiere den Ausdruck mit "/100" für die Prozentrechnung
    let percent = eval(expression + '/100');
    expression = percent.toString();
    resultDisplay.value = expression;
  } catch (error) {
    // Bei einem Fehler zeige "Error" in der Ergebnisanzeige an
    resultDisplay.value = 'Error';
  }
}
