const generatorButton = document.querySelector(".generate");
const table = document.getElementById("load-unload");
const editButton = document.querySelector(".edit-button");

const employees = [
  {'Diana': 'fast'}, 
  {'Lina': 'fast'}, 
  {'Keith': 'slow'}, 
  {'Kristy': 'fast'}, 
  {'Angelo': 'slow'}, 
  {'Ryan': 'slow'}
];

const daysOfWeek = {
  Monday: "slow",
  Tuesday: "busy",
  Wednesday: "busy",
  Thursday: "slow",
  Friday: "busy"
}

generatorButton.addEventListener('click', () => {
  generatorButton.textContent = 'Generating...';
  
  let unloadsPerEmployee = {};
  for (let emp of employees) {
    const name = Object.keys(emp)[0];
    unloadsPerEmployee[name] = 0;
  }

  const assignEmployees = (requiredFast, requiredSlow, fastPeople, slowPeople, usedToday) => {
    let fastCount = usedToday.filter(name => fastPeople.includes(name)).length;
    while (fastCount < requiredFast) {
      let availableFast = fastPeople.filter(person => !usedToday.includes(person));
      if (availableFast.length === 0) break;
      const randomFast = availableFast[Math.floor(Math.random() * availableFast.length)];
      usedToday.push(randomFast);
      fastCount = usedToday.filter(name => fastPeople.includes(name)).length;
    }

    let slowCount = usedToday.filter(name => slowPeople.includes(name)).length;
    while (slowCount < requiredSlow) {
      let availableSlow = slowPeople.filter(person => !usedToday.includes(person));
      if (availableSlow.length === 0) break;
      const randomSlow = availableSlow[Math.floor(Math.random() * availableSlow.length)];
      usedToday.push(randomSlow);
      slowCount = usedToday.filter(name => slowPeople.includes(name)).length; 
    }
    
    return usedToday;
  };
  
  // loop through columns (days)
  for (let c = 2; c <= 6; c++) {
    
    const dayName = table.rows[1].cells[c].textContent.trim();
    const dayType = daysOfWeek[dayName] || 'normal';
    
    let fastPeople = [];
    let slowPeople = [];
    let usedToday = [];
    // collect candidates
    for (let r = 1; r < table.rows.length; r++) {
      const row = table.rows[r];
      const employeeName = row.cells[1].textContent.trim();
      

      if (employeeName !== 'N/A' && unloadsPerEmployee[employeeName] < 2) {
        const empObj = employees.find(e => Object.keys(e)[0] === employeeName);
        const employeeSpeed = empObj ? empObj[employeeName] : 'normal'; 
        
   

        if (employeeSpeed === 'fast') {
          fastPeople.push(employeeName);
        }
        else if (employeeSpeed === 'slow') {
          slowPeople.push(employeeName);
        }
      }
    }

      if (dayName === 'Monday' && dayType === 'slow') {
          usedToday = assignEmployees(1, 1, fastPeople, slowPeople, usedToday);
        }
        else if (dayName === 'Tuesday' && dayType === 'busy') {
          usedToday = assignEmployees(2, 1, fastPeople, slowPeople, usedToday);
        }
        else if (dayName === 'Wednesday' && dayType === 'busy') {
          usedToday = assignEmployees(2, 1, fastPeople, slowPeople, usedToday);
        }
        else if (dayName === 'Thursday' && dayType === 'slow') {
          usedToday = assignEmployees(0, 3, fastPeople, slowPeople, usedToday);
        }
        else if (dayName === 'Friday' && dayType === 'busy') {
          usedToday = assignEmployees(2, 1, fastPeople, slowPeople, usedToday);
        }

    // assign Load/Unload/N/A
    for (let r = 2; r < table.rows.length; r++) {
      const row = table.rows[r];
      const employeeName = row.cells[1].textContent.trim();

      if (employeeName === 'N/A') {
        row.cells[c].textContent = 'N/A';
      }
      else if (usedToday.includes(employeeName)) {
        row.cells[c].textContent = 'Unload';
        unloadsPerEmployee[employeeName]++;
      } else {
        row.cells[c].textContent = 'Load';
      }
    }
  }

  generatorButton.textContent = 'Generate';
});


editButton.addEventListener('click', () => {
  for (let r=2; r < table.rows.length; r++) {
    const row = table.rows[r];

    for (let c=1; c <= 6; c++) {
      const cell = row.cells[c];

      if (cell.isContentEditable) {

        cell.contentEditable = 'false';
        cell.style.backgroundColor = '';
      } else {
        cell.contentEditable = 'true';
        cell.style.backgroundColor = '#ffffcc';
      }
    }
  }

  editButton.textContent = 
    editButton.textContent === 'Edit' ? "Done" : 'Edit';
})