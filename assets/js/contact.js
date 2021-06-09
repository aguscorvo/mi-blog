fetch('../assets/components/contact.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector('section.contact-main-container').innerHTML = data;
  });
