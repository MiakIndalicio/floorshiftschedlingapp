const generatorButton = document.querySelector(".generate");
const table = document.getElementById("load-unload");
const editButton = document.querySelector(".edit");

const employees = [
  {'Diana': 'fast'}, 
  {'Lina': 'fast'}, 
  {'Keith': 'slow'}, 
  {'Kristy': 'fast'}, 
  {'Angelo': 'slow'}, 
  {'Jacob': 'slow'},
  {'Ryan': 'slow'}
];

generatorButton.addEventListener("click", () => {
  generatorButton.textContent = "Generating...";

  for (let r=1; r < table.rows.length; r++) {
    const row = table.rows[r];
    const employeeName = row.cells[1].textContent.trim();
    let eligibleRows = [];
    let unloadsPerEmployee = {};

    if (row.cells[1].textContent.trim() === 'N/A') {
      for (let c=2; c <= 6; c++) {
        
        if (employeeName === 'N/A') {
          row.cells[c].textContent = 'N/A';
        } else {
          row.cells[c].textContent = ''
          eligibleRows.push(row);
        }
      }
      continue;
    }

    eligibleRows.sort(() => Math.random() - 0.5);
    //let unloadAssigned = 0;

    for (let row of eligibleRows) {
      const employeeName = row.cells[1].textContent.trim();
    

      for (let c = 2; c <= 6; c++) {
        //let unloadCount = 0;
        let unloadAssigned = 0

        for (let emp of employees) {
          const name = Object.keys(emp)[0];
          unloadsPerEmployee[name] = 0;
        }

        //for (let i = 1; i < table.rows.length; i++) {
          //if (table.rows[i].cells[c].textContent === 'Unload') {
            //unloadCount++;
          //}
        //}
          
          if (c === 2) {
            //let assignment = Math.random() < 0.5 ? 'Load' : 'Unload';
            if (unloadAssigned < 3 && unloadsPerEmployee[employeeName] < 2) {
              row.cells[c].textContent = 'Unload';
              unloadAssigned++
              unloadsPerEmployee[employeeName]++
            } else {
              row.cells[c].textContent = 'Load';
            }
           

          
          } 
          
          if (c === 3) {
            if (unloadAssigned < 3 && unloadsPerEmployee[employeeName] < 2) {
              row.cells[c].textContent = 'Unload';
              unloadAssigned++
              unloadsPerEmployee[employeeName]++
            } else {
              row.cells[c].textContent = 'Load';
            }
          } 
          
          if (c === 4) {
             if (unloadAssigned < 3 && unloadsPerEmployee[employeeName] < 2) {
              row.cells[c].textContent = 'Unload';
              unloadAssigned++
              unloadsPerEmployee[employeeName]++
            } else {
              row.cells[c].textContent = 'Load';
            }
          }
          
          if (c === 5) {
            if (unloadAssigned < 3 && unloadsPerEmployee[employeeName] < 2) {
              row.cells[c].textContent = 'Unload';
              unloadAssigned++
              unloadsPerEmployee[employeeName]++
            } else {
              row.cells[c].textContent = 'Load';
            }
          }

          if (c === 6) {
            if (unloadAssigned < 3 && unloadsPerEmployee[employeeName] < 2) {
              row.cells[c].textContent = 'Unload';
              unloadAssigned++
              unloadsPerEmployee[employeeName]++
            } else {
              row.cells[c].textContent = 'Load';
            }
          }

        
        }

      } 
    }
    
  generatorButton.textContent = 'Generate';
 
});