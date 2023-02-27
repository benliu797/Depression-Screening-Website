JavaScript:

```javascript
function calculateScore() {
  // Get the values of each question
  const q1 = Number(document.getElementById('q1').value);
  const q2 = Number(document.getElementById('q2').value);
  const q3 = Number(document.getElementById('q3').value);
  const q4 = Number(document.getElementById('q4').value);
  const q5 = Number(document.getElementById('q5').value);
  const q6 = Number(document.getElementById('q6').value);
  const q7 = Number(document.getElementById('q7').value);

  // Calculate the total score
  const totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7;

  // Determine the severity of depression
  let severity = '';
  if (totalScore >= 0 && totalScore <= 4) {
    severity = 'Minimal or no depression';
  } else if (totalScore >= 5 && totalScore <= 9) {
    severity = 'Mild depression';
  } else if (totalScore >= 10 && totalScore <= 14) {
    severity = 'Moderate depression';
  } else if (totalScore >= 15 && totalScore <= 19) {
    severity = 'Moderately severe depression';
  } else {
    severity = 'Severe depression';
  }

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your score is ${totalScore}.<br>You have ${severity}.`;
}
