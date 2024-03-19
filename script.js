document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll('.toggle-answer');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log("Pulsante cliccato"); // Verifica se il pulsante viene cliccato

      const answer = this.parentElement.nextElementSibling;
      console.log(answer); // Verifica se l'elemento della risposta è selezionato correttamente
      
      if (answer) {
        answer.classList.toggle('show');
        console.log(answer.classList); // Verifica se le classi vengono aggiunte/rimosse correttamente
        this.querySelector('.plus-symbol').textContent = answer.classList.contains('show') ? '-' : '+';
        console.log("Testo del pulsante cambiato"); // Verifica se il testo del pulsante viene cambiato correttamente
      } else {
        console.log("Elemento della risposta non trovato");
      }
    });
  });
});
