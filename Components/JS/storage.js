const saveSchedule = () => {
    const table = document.getElementById('load-unload');
    let schedule = [];

    for (let r = 2; r < table.rows.length; r++ ) {
        let row = [];
        for (let c = 0; c < table.rows[r].cells.length; c++) {
            row.push(table.rows[r].cells[c].textContent.trim());
        }
        schedule.push(row);
    }

    localStorage.setItem('floorSchedule', JSON.stringify(schedule))
}

const loadSchedule = () => {
    const stored = localStorage.getItem('floorSchedule');
    if (!stored) return;

    const schedule = JSON.parse(stored);
    const table = document.getElementById('load-unload')

    for (let r = 2; r < table.rows[r].cells.length; r++) {
        for (let c = 0; c < table.rows[r].cells[c].length; c++) {
            table.rows[r].cells[c].textContent = schedule[r - 2][c];
        }
    }
}