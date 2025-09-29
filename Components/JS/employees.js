let employees = JSON.parse(localStorage.getItem('employees')) || [
  { name: 'Diana', speed: 'fast' },
  { name: 'Lina', speed: 'fast' },
  { name: 'Keith', speed: 'slow' },
  { name: 'Kristy', speed: 'fast' },
  { name: 'Angelo', speed: 'slow' },
  { name: 'Ryan', speed: 'slow' }
];


const renderEmployees = () => {
    const tbody = document.getElementById('employee-list-body');
    tbody.innerHTML = '';

    employees.forEach((emp, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = emp.name;
        row.appendChild(nameCell);

        const speedCell = document.createElement('td');
        speedCell.textContent = emp.speed;
        row.appendChild(speedCell);

        const actionCell = document.createElement('td');
        const removeBtn = document.createElement('button');

        removeBtn.textContent = 'remove';
        removeBtn.style.color = 'white';
        removeBtn.style.background = 'red';
        removeBtn.onclick = () => removeEmployee(index);
        actionCell.appendChild(removeBtn);
        row.appendChild(actionCell);

        tbody.appendChild(row);
    })
}

const removeEmployee = (index) => {
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    renderEmployees();
}

renderEmployees();