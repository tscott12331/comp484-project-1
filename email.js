const formEl = document.getElementById('email-form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const message = data.get('message');
    
    window.open(`mailto:t.scott12331@gmail.com?subject=${encodeURIComponent('My favorite trips')}&body=${encodeURIComponent(message)}`);
})
