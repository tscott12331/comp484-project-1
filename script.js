/* 
    * here i'm fetching the select element from the DOM by using
    * a document function that gets an element by a given ID.
*/
const selectEl = document.getElementById('nav-select')
/*
    * here i'm setting the initial value of the select element
    * to the current page that i'm on.
    * this is purely for looks so that the select element always
    * matches the page that you're on.
*/
selectEl.value = window.location.pathname.split('/').at(-1);

function onSelectChange(select) {
    /*
        * when an option element is selected, the value
        * of the select element changes and subsequently this
        * event is fired.
        * on the select element's onchange event, I passed in
        * the select element itself as a parameter using the "this" keyword.
        * with this, i can access the value of the select element, which
        * represents the option that was chosen, and change the window's
        * location to that value
    */
    window.location = select.value;
}
