document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.faq-list h2');
  
  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('show');
    });
  });
});
