document.getElementById('applicationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  fetch('https://formsubmit.co/your-email@example.com', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    window.location.href = 'confirmation.html';
  })
  .catch(error => {
    alert('Submission failed. Please try again.');
  });
});
