// console.log('teste inicial');

const contactForm = document.getElementById('contact-form');
const tableRow = document.getElementById('table-row');


contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone_number');
    alert(`Você inseriu na agenda o contato: ${nameInput.value} de número: ${phoneInput.value}`)
    addTable(nameInput.value, phoneInput.value);
});

function addTable(name, phone){
    const maxRow = 5;
    if(tableRow.rows.length <= maxRow){
        tableRow.innerHTML += `<tr>
            <td>${name}</td>
            <td>${phone}</td>
        </tr>`;
    }
    else{
        alert('Máximo de linhas já atingido !!')
    }
    contactForm.reset();

}