// fetches the form element using a document function to
// get the element by its id
const formEl = document.getElementById('email-form');

formEl.addEventListener('submit', (e) => {
    // prevents default behavior of submitting a form which
    // would refresh the page
    e.preventDefault();

    // initializes a data structure for the data in the form element
    const data = new FormData(formEl);
    // gets the value of 'message' in the form
    // 'message' comes from the name i gave to the textarea in the name attribute
    const message = data.get('message');
    
    // opens the users email client with a default subject and their message
    // the recipient is my email
    window.open(`mailto:t.scott12331@gmail.com?subject=${encodeURIComponent('My favorite trips')}&body=${encodeURIComponent(message)}`);
})
