function focusToHide(e) {
    document.querySelector('#result-to-email span').innerHTML = '';
    // document.querySelector('#result-to-email i').classList.add('not-needed');
}
function validateEmail(email) {
    return String(email)
    .toLocaleLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
document.querySelector('#name').addEventListener('focus', (e) => focusToHide(e));
document.querySelector('#email').addEventListener('focus', (e) => focusToHide(e));
document.querySelector('#description').addEventListener('focus', (e) => focusToHide(e));

document.querySelector('button[type=submit]').addEventListener('click', (e) => {
    e.preventDefault();
    // document.querySelector('#result-to-email i').classList.toggle('not-needed');
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let description = document.querySelector('#description').value;
    if(name == '' || email == '' || description == '') {
        document.querySelector('#result-text').innerHTML = 'Fill out all inputs!';
        return;
    }
    if (email != '') {
        if (!validateEmail(email)) {
            document.querySelector('#result-text').innerHTML = 'Use a valid email!';
            return; 
       }
    }
    let data = { name, email, description };
    fetch('../contact-form/contact-form.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if(data.hasOwnProperty('type')) {
            if(data['type'] == 'success') {
                document.querySelector('#result-text').innerHTML = data['message'];
                return;
            }
            document.querySelector('#result-text').innerHTML = data['message'];
        }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
})
