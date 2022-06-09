document.querySelector('button[type=submit]').addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let description = document.querySelector('#description').value;
    let data = { name, email, description };
    console.log(JSON.stringify(data))
    fetch('../contact-form/contact-form.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
})
