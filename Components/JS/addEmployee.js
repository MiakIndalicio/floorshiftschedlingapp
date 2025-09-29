let employees = JSON.parse(localStorage.getItem('employees')) || [
  { name: 'Diana', speed: 'fast' },
  { name: 'Lina', speed: 'fast' },
  { name: 'Keith', speed: 'slow' },
  { name: 'Kristy', speed: 'fast' },
  { name: 'Angelo', speed: 'slow' },
  { name: 'Ryan', speed: 'slow' }
];

const saveEmployees = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
}

const renderEmployeeList = () => {
    const list = document.getElementById('employee-list');
    list.innerHTML = '';
    
    employees.forEach((emp, index) => {
        const name = Object.keys(emp)[0];
        const li = document.createElement('li');
        li.textContent = `${name} (${emp[name]})`;
        li.innerHTML += `<button onClick="removeEmployee(${index})">Remove</button>`;
        list.appendChild(li);
    })
}

document.getElementById('add-employee-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('employee-name').value.trim();
    const speed = document.getElementById('employee-speed').value;

    if (!name) return;

    employees.push({ [name]: speed });
    saveEmployees();
    renderEmployeeList();
    e.target.reset();
});



renderEmployeeList();