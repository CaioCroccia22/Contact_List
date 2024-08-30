// console.log('teste inicial');

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone_number');
    alert(`Você inseriu na agenda o contato: ${nameInput.value} de número: ${phoneInput.value}`)
    addTable(nameInput.value, phoneInput.value);
});

function addTable(name, phone){
    const tableRow = document.getElementById('table-row');
    tableRow.innerHTML += `<tr>
        <td>${name}</td>
        <td>${phone}</td>
    </tr>'`

}