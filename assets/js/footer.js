fetch('../assets/components/footer.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector('footer').innerHTML = data;
  });
