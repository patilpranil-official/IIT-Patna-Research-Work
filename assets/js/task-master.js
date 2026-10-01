// Master task handler for multiple IITs
let masterDataset = [];
let filteredData = [];

// Load all faculty data
async function loadMasterDataset() {
    try {
        // Load IIT Madras
        const madrasResponse = await fetch('data/faculty.json');
        const madrasData = await madrasResponse.json();
        
        // Load IIT Bombay data
        const bombayData = loadBombayData();
        
        // Load IIT Delhi data
        const delhiData = loadDelhiData();
        
        // Load IIT Kanpur data
        const kanpurData = loadKanpurData();
        
        // Merge all datasets
        masterDataset = [...madrasData, ...delhiData, ...bombayData, ...kanpurData];
        filteredData = [...masterDataset];
        
        // Render IIT sections
        renderIITSections();
        
        // Update totals
        updateTotals();
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// IIT Bombay data
function loadBombayData() {
    return [
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "A. P. Rajaram", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Ahonaa Roy", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Amrita Banerjee", "designation": "Associate Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Anush Kapadia", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Azizuddin Khan", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "C. D. Sebastian", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Deepak Naorem", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Ilito H. Achumi", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "K. Ramasubramanian", "designation": "Professor", "subjectArea": "CISTS"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Kushal Deb", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Mahendra Shahare", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Malhar A. Kulkarni", "designation": "Professor", "subjectArea": "CISTS"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Mrinal Kaul", "designation": "Associate Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Mrinmoyi Kulkarni", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Naina Manjrekar", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Neha Chatterji", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "P. G. Jung", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Paulomi Chakraborty", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Pooja Purang", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Rachel A. Varghese", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Raile R. Ziipao", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Rajakishore Nath", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Ramesh Bairy T S", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Ranjan K. Panda", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Rashmi Gupta", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Ratikanta Panda", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Rowena Robinson", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Sarmistha Pattanaik", "designation": "Professor", "subjectArea": "Interdisciplinary"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Sharmila", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Sharmistha Saha", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Shweta Chawak", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Siby K George", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Smriti Haricharan", "designation": "Associate Professor", "subjectArea": "History"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Suddhaseel Sen", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Sudha Shastri", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Suryakant Waghmore", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Tanmay Bhattacharya", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Vaijayanthi Sarma", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Bombay", "department": "Department of Humanities and Social Sciences", "facultyName": "Vikram Singh Sirola", "designation": "Professor", "subjectArea": "Philosophy"}
    ];
}

// Render sections for each IIT
function renderIITSections() {
    const container = document.getElementById('iitSectionsContainer');
    const iits = [...new Set(filteredData.map(f => f.iitName))].sort();
    
    container.innerHTML = '';
    
    iits.forEach(iitName => {
        const iitFaculty = filteredData.filter(f => f.iitName === iitName);
        const section = createIITSection(iitName, iitFaculty);
        container.appendChild(section);
    });
}

// Create IIT section
function createIITSection(iitName, faculty) {
    const section = document.createElement('div');
    section.className = 'iit-section';
    section.setAttribute('data-iit', iitName);
    
    const fullName = getFullIITName(iitName);
    
    section.innerHTML = `
        <div class="iit-header">
            <div class="iit-full-name">${fullName}</div>
            <div class="iit-short-name">${iitName}</div>
            <div class="iit-dept-name">Department of Humanities and Social Sciences</div>
            <div class="iit-stats">
                <div>Total Faculty: <span>${faculty.length}</span></div>
                <div>Professors: <span>${faculty.filter(f => f.designation === 'Professor').length}</span></div>
                <div>Associate Professors: <span>${faculty.filter(f => f.designation === 'Associate Professor').length}</span></div>
                <div>Assistant Professors: <span>${faculty.filter(f => f.designation === 'Assistant Professor').length}</span></div>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>IIT Name</th>
                        <th>HSS Department</th>
                        <th>Faculty Name</th>
                        <th>Designation</th>
                        <th>Broad Subject Area</th>
                    </tr>
                </thead>
                <tbody>
                    ${faculty.map(f => `
                        <tr>
                            <td>${f.iitName}</td>
                            <td>${f.department}</td>
                            <td>${f.facultyName}</td>
                            <td>${f.designation}</td>
                            <td>${f.subjectArea}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    return section;
}

// IIT Delhi data
function loadDelhiData() {
    return [
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Abhijit Banerji", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Angelie Multani", "designation": "Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Ankush Agrawal", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Arjun Ghosh", "designation": "Professor", "subjectArea": "Interdisciplinary"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Arudra Burra", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Ashwini Vaidya", "designation": "Associate Professor", "subjectArea": "Interdisciplinary"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Bharati Puri", "designation": "Associate Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Debasis Mondal", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Deepak Alok", "designation": "Assistant Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Dickens Leonard", "designation": "Assistant Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Divya Dwivedi", "designation": "Professor", "subjectArea": "Literature / Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Don Dcruz", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Farhana Ibrahim", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Ishan Anand", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Jayan Jose Thomas", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Kamlesh Singh", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Madhulika Sonkar", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Mahuya Bandyopadhyay", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Milind Wakankar", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Naveen Thayyil", "designation": "Associate Professor", "subjectArea": "Interdisciplinary"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Paroma Sanyal", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Pritha Chandra", "designation": "Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Purnima Singh", "designation": "Professor Emeritus", "subjectArea": "Psychology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Rakesh Chaturvedi", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Ravinder Kaur", "designation": "Professor Emerita", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Reetika Khera", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Richa Kumar", "designation": "Associate Professor", "subjectArea": "Sociology / Interdisciplinary"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Rohit Kumar", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Rukmini Bhaya Nair", "designation": "Honorary Professor", "subjectArea": "Linguistics / Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sahiinii Veikho", "designation": "Assistant Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Samar Husain", "designation": "Associate Professor", "subjectArea": "Interdisciplinary"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sanil V", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Saptarshi Mukherjee", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sarbeswar Sahoo", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Simona Sawhney", "designation": "Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sisir Debnath", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sneha Lamba", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sourabh B Paul", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Stuti Khanna", "designation": "Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sumitava Mukherjee", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Sunny Kumar", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Tsering Nurboo", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Varsha Singh", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Vibha Arora", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Vinay Suhalka", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Delhi", "department": "Department of Humanities and Social Sciences", "facultyName": "Yashpal Jogdand", "designation": "Associate Professor", "subjectArea": "Psychology"}
    ];
}

// IIT Kanpur data
function loadKanpurData() {
    return [
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Mini Chandran", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "T. Ravichandran", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Sayan Chattopadhyay", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Feroz Hassan", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Suchitra Mathur", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "G. Neelakantan", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Chaithra Puttaswamy", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "N. P. Sudharshana", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Usha Udaar", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Lakshmana Rao Pinninti", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Muthukumar M", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Chinmay Dharurkar", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Sh. Francis Monsang", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Ritwij Bhowmik", "designation": "Associate Professor", "subjectArea": "Fine Arts"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Koumudi Patil", "designation": "Associate Professor", "subjectArea": "Fine Arts"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Rajarshi Sengupta", "designation": "Assistant Professor", "subjectArea": "Fine Arts"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Prashant Bagad", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Vineet Sahu", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "A V Ravishankar Sarma", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Lalit Saraswat", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Sushruth Ravish", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Braj Bhushan", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Shikha Dixit", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Kumar Ravi Priya", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Anindita Chakrabarti", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Esha Chatterjee", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Munmun Jha", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Binay K Pattnaik", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Jillet Sarah Sam", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Pradip Swarnakar", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kanpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Thounaojam Somokanta", "designation": "Assistant Professor", "subjectArea": "Sociology"}
    ];
}

// Get full IIT name
function getFullIITName(shortName) {
    const map = {
        'IIT Madras': 'INDIAN INSTITUTE OF TECHNOLOGY MADRAS',
        'IIT Delhi': 'INDIAN INSTITUTE OF TECHNOLOGY DELHI',
        'IIT Bombay': 'INDIAN INSTITUTE OF TECHNOLOGY BOMBAY',
        'IIT Kanpur': 'INDIAN INSTITUTE OF TECHNOLOGY KANPUR'
    };
    return map[shortName] || shortName.toUpperCase();
}

// Apply filters
function applyFilters() {
    const iitFilter = document.getElementById('filterIIT').value;
    const designationFilter = document.getElementById('filterDesignation').value;
    const subjectFilter = document.getElementById('filterSubject').value;
    const searchTerm = document.getElementById('searchFaculty').value.toLowerCase();
    
    filteredData = masterDataset.filter(f => {
        return (!iitFilter || f.iitName === iitFilter) &&
               (!designationFilter || f.designation === designationFilter) &&
               (!subjectFilter || f.subjectArea.includes(subjectFilter)) &&
               (!searchTerm || f.facultyName.toLowerCase().includes(searchTerm));
    });
    
    renderIITSections();
    updateTotals();
}

// Update totals
function updateTotals() {
    document.getElementById('totalRecords').textContent = masterDataset.length;
}

// Export functions
function exportExcel() {
    const ws = XLSX.utils.json_to_sheet(masterDataset.map(f => ({
        'IIT Name': f.iitName,
        'HSS Department': f.department,
        'Faculty Name': f.facultyName,
        'Designation': f.designation,
        'Broad Subject Area': f.subjectArea
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'HSS Faculty');
    XLSX.writeFile(wb, 'IIT_HSS_Faculty_Mapping.xlsx');
}

function exportCSV() {
    const headers = ['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area'];
    const rows = masterDataset.map(f => [f.iitName, f.department, f.facultyName, f.designation, f.subjectArea]);
    
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
        csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'IIT_HSS_Faculty_Mapping.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4');
    
    doc.setFontSize(16);
    doc.text('HSS Faculty Mapping Across IITs', 14, 15);
    
    doc.setFontSize(10);
    doc.text('Task 01 - Reference Date: 30 September 2026', 14, 22);
    
    const iits = [...new Set(masterDataset.map(f => f.iitName))].sort();
    let startY = 30;
    
    iits.forEach((iitName, index) => {
        if (index > 0) {
            doc.addPage();
            startY = 15;
        }
        
        const iitData = masterDataset.filter(f => f.iitName === iitName);
        
        doc.setFontSize(14);
        doc.text(iitName, 14, startY);
        
        const tableData = iitData.map(f => [f.iitName, f.department, f.facultyName, f.designation, f.subjectArea]);
        
        doc.autoTable({
            head: [['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area']],
            body: tableData,
            startY: startY + 5,
            styles: { fontSize: 7 },
            headStyles: { fillColor: [26, 26, 46] }
        });
        
        startY = doc.lastAutoTable.finalY + 10;
    });
    
    doc.save('IIT_HSS_Faculty_Mapping.pdf');
}

function printDataset() {
    window.print();
}

// Initialize
document.addEventListener('DOMContentLoaded', loadMasterDataset);
