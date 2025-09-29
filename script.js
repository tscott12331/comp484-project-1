const selectEl = document.getElementById('nav-select')
selectEl.value = window.location.pathname.split('/').at(-1);

function onSelectChange(select) {
    window.location = select.value;
}
