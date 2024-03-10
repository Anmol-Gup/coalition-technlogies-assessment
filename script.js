const button=document.querySelector('#dropdownButton')
const dropdown=document.querySelector('.dropdown-item')

function updateDropdown(e) {
    // Update the dropdown button text
    if(e.textContent==='MOUNTAIN 2'){
        button.innerText = 'MOUNTAIN 2';
        e.textContent='MOUNTAIN 1'
    }
    else{
        button.innerText = 'MOUNTAIN 1';
        e.textContent='MOUNTAIN 2'
    }
}

window.onload=()=>{
    if(button)
        button.textContent='MOUNTAIN 1'
    if(dropdown)
        dropdown.textContent='MOUNTAIN 2'
}