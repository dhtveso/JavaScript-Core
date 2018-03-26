function exportData(employeesInfo) {
    let regex = new RegExp(/^([A-Z][A-Za-z]*) - ([1-9][0-9*]*) - ([A-Za-z0-9-_ ]+)$/, 'g');
    let match;
    
    for (let value of employeesInfo) {
        while (match = regex.exec(value)) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

exportData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']);