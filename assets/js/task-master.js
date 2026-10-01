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
        
        // Load IIT Kharagpur data
        const kharagpurData = loadKharagpurData();
        
        // Load IIT Roorkee data
        const roorkeeData = loadRoorkeeData();
        
        // Load IIT Hyderabad data
        const hyderabadData = loadHyderabadData();
        
        // Load IIT Guwahati data
        const guwahatiData = loadGuwahatiData();
        
        // Load IIT (BHU) Varanasi data
        const varanasiData = loadVaranasiData();
        
        // Load IIT Indore data
        const indoreData = loadIndoreData();
        
        // Load IIT Mandi data
        const mandiData = loadMandiData();
        
        // Load IIT Ropar data
        const roparData = loadRoparData();
        
        // Load IIT Bhubaneswar data
        const bhubaneswarData = loadBhubaneswarData();
        
        // Load IIT Jammu data
        const jammuData = loadJammuData();
        
        // Load IIT Tirupati data
        const tirupatiData = loadTirupatiData();
        
        // Load IIT Palakkad data
        const palakkadData = loadPalakkadData();
        
        // Load IIT Patna data
        const patnaData = loadPatnaData();
        
        // Load IIT Gandhinagar data
        const gandhinagarData = loadGandhinagarData();
        
        // Load IIT Dharwad data
        const dharwadData = loadDharwadData();
        
        // Load IIT Bhilai data
        const bhilaiData = loadBhilaiData();
        
        // Load IIT Goa data
        const goaData = loadGoaData();
        
        // Load IIT (ISM) Dhanbad data
        const dhanbadData = loadDhanbadData();
        
        // Merge all datasets
        masterDataset = [...madrasData, ...delhiData, ...bombayData, ...kanpurData, ...kharagpurData, ...roorkeeData, ...hyderabadData, ...guwahatiData, ...varanasiData, ...indoreData, ...mandiData, ...roparData, ...bhubaneswarData, ...jammuData, ...tirupatiData, ...palakkadData, ...patnaData, ...gandhinagarData, ...dharwadData, ...bhilaiData, ...goaData, ...dhanbadData];
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

// IIT Kharagpur data
function loadKharagpurData() {
    return [
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Amrita Sen", "designation": "Assistant Professor Grade-I", "subjectArea": "Sociology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Anubhab Pattanayak", "designation": "Assistant Professor Grade-I", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Anuradha Choudry", "designation": "Associate Professor", "subjectArea": "Indian Knowledge Systems"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Anway Mukhopadhyay", "designation": "Assistant Professor Grade-I", "subjectArea": "Indic Studies"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Anwesha Aditya", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Archana Patnaik", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Bhagirath Behera", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Bimal Kishore Sahoo", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Binita Tiwari", "designation": "Assistant Professor Grade-I", "subjectArea": "Psychology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Bornini Lahiri", "designation": "Assistant Professor Grade-I", "subjectArea": "Linguistics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Dripta Piplai (Mondal)", "designation": "Assistant Professor Grade-I", "subjectArea": "Linguistics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Dripto Bakshi", "designation": "Assistant Professor Grade-I", "subjectArea": "To be determined"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Gourishankar S Hiremath", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "H S Komalesha", "designation": "Professor", "subjectArea": "English Literature"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Inder Sekhar Yadav", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Jenia Mukherjee", "designation": "Associate Professor", "subjectArea": "Environmental Humanities"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Jitendra Mahakud", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Kailash Bihari Lal Srivastava", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Kishor Goswami", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Krittika Banerjee", "designation": "Assistant Professor Grade-I", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Mahima Raina", "designation": "Assistant Professor Grade-I", "subjectArea": "Psychology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Mantu Kumar Mahalik", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Mukkamala Kameshwar Rao", "designation": "Professor", "subjectArea": "Management"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Narayan Chandra Nayak", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Prantik Bagchi", "designation": "Assistant Professor Grade-I", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Priyadarshi Patnaik", "designation": "Professor", "subjectArea": "Digital Humanities"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Pulak Mishra", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Rabindra Kumar Pradhan", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Rishabh Rai", "designation": "Assistant Professor Grade-I", "subjectArea": "Psychology"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Saswat Samay Das", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Seema Singh", "designation": "Associate Professor", "subjectArea": "English Literature"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Siddhartha Chattopadhyay", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Sunandan Ghosh", "designation": "Assistant Professor Grade-I", "subjectArea": "Economics"},
        {"iitName": "IIT Kharagpur", "department": "Department of Humanities and Social Sciences", "facultyName": "Vikas Thakur", "designation": "Associate Professor", "subjectArea": "Management"}
    ];
}

// IIT Roorkee data
function loadRoorkeeData() {
    return [
        // Economics
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Rishman Jot Kaur Chahal", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "D. Bharat", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Rachita Gulati", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Pratap Chandra Mohanty", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Diptimayee Nayak", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Falguni Pattanaik", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Shruti Sengupta", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Subir Sen", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Aparajita Singh", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Hari Venkatesh", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Aviral Marwal", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Abhishek Samantray", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Manish Kumar Singh", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Dinesh K Nauriyal", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "S. P. Singh", "designation": "Professor", "subjectArea": "Economics"},
        // English
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Smita Jha", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Nagendra Kumar", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Rashmi Gaur", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Binod Mishra", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Sarbani Banerjee", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Sanjit Kumar Mishra", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Sonal Jha", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Aruni Mahapatra", "designation": "Assistant Professor", "subjectArea": "English"},
        // Psychology
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Pooja Garg", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Manish Kumar Asthana", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Ram Manohar Singh", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Tony Thomas", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        // Sociology
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Anindya Jayanta Mishra", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Lalatendu Keshari Das", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Roluahpuia", "designation": "Associate Professor", "subjectArea": "Sociology"},
        // Sanskrit
        {"iitName": "IIT Roorkee", "department": "Department of Humanities and Social Sciences", "facultyName": "Pavankumar Satuluri", "designation": "Assistant Professor", "subjectArea": "Sanskrit"}
    ];
}

// IIT Hyderabad data (Department of Liberal Arts)
function loadHyderabadData() {
    return [
        // Regular Faculty
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Aalok Khandekar", "designation": "Associate Professor", "subjectArea": "Anthropology / Sociology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Aardra Surendran", "designation": "Assistant Professor", "subjectArea": "Development Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Amrita Deb", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Amrita Datta", "designation": "Associate Professor", "subjectArea": "Development Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Anandita Pan", "designation": "Assistant Professor", "subjectArea": "Gender Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Anindita Majumdar", "designation": "Associate Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Badri Narayan Rath", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Chandan Bose", "designation": "Associate Professor", "subjectArea": "Anthropology / Sociology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Dinabandhu Sethi", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Gaurav Dhamija", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Haripriya Narasimhan", "designation": "Associate Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Indira Jalli", "designation": "Associate Professor", "subjectArea": "Cultural Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "K. P. Prabheesh", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "M. P. Ganesh", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Mahati Chittem", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Neeraj Kumar", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Prakash Mondal", "designation": "Associate Professor", "subjectArea": "Linguistics / Cognitive Science"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Rashmi Singh", "designation": "Assistant Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Shubha Ranganathan", "designation": "Associate Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Shuhita Bhattacharjee", "designation": "Associate Professor", "subjectArea": "English Literature"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Srirupa Chatterjee", "designation": "Associate Professor", "subjectArea": "English Literature"},
        // Distinguished Professors
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Paresh Kumar Narayan", "designation": "Distinguished Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Pramod K Nayar", "designation": "Distinguished Professor", "subjectArea": "English Literature"},
        // Adjunct Professors
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Irudaya Rajan", "designation": "Adjunct Professor", "subjectArea": "Demography"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Anjal Prakash", "designation": "Adjunct Professor", "subjectArea": "Development Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Mridula Anand", "designation": "Adjunct Professor", "subjectArea": "Cultural Studies"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Nanda Kishore Kannuri", "designation": "Adjunct Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Jandhyala Tilak", "designation": "Adjunct Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Timothy Marthand", "designation": "Adjunct Professor", "subjectArea": "Education"},
        {"iitName": "IIT Hyderabad", "department": "Department of Liberal Arts", "facultyName": "Yuka Kataoka", "designation": "Adjunct Professor", "subjectArea": "Education"}
    ];
}

// IIT Guwahati data
function loadGuwahatiData() {
    return [
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Abhishek Kashyap", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Agnirup Sarkar", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Amarjyoti Mahanta", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Anamika Barua", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Arupjyoti Saikia", "designation": "Professor", "subjectArea": "History"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Bhaskar Jyoti Neog", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Bidisha Som", "designation": "Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Bodhisattva Sengupta", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Debapriya Basu", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Debarshi Das", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Dilwar Hussain", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "John Thomas", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Kiran Keshavamurthy", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Liza Das", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Mithilesh Kumar Jha", "designation": "Assistant Professor", "subjectArea": "Political Science"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Mrinal Kanti Dutta", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Naveen Kashyap", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Ngamjahao Kipgen", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Pahi Saikia", "designation": "Professor", "subjectArea": "Political Science"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Prabhu Venkataraman", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Priyankoo Sarmah", "designation": "Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Rajshree Bedamatta", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Ranu", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Rituparna Patgiri", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Rohini Mokashi-Punekar", "designation": "Professor", "subjectArea": "English"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Sambit Mallick", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Sawmya Ray", "designation": "Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Shakuntala Mahanta", "designation": "Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Sukanya Sharma", "designation": "Professor", "subjectArea": "Archaeology"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Vasundhara Jairath", "designation": "Assistant Professor", "subjectArea": "Development Studies"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Vipul Dutta", "designation": "Assistant Professor", "subjectArea": "History"},
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Visakh Madhusoodanan Subha", "designation": "Assistant Professor", "subjectArea": "Sociology"},
        // Visiting Faculty
        {"iitName": "IIT Guwahati", "department": "Department of Humanities and Social Sciences", "facultyName": "Robin Coningham", "designation": "Visiting Professor", "subjectArea": "Archaeology"}
    ];
}

// IIT (BHU) Varanasi data
function loadVaranasiData() {
    return [
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Ajit Kumar Mishra", "designation": "Professor", "subjectArea": "Medical & Health Humanities / Film & Cultural Studies"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Amrita Dwivedi", "designation": "Associate Professor", "subjectArea": "Environmental Studies / Geography"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Anil Kumar Thakur", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "K V Cybil", "designation": "Associate Professor", "subjectArea": "Sociology / Anthropology"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Kavya Krishna K. R.", "designation": "Assistant Professor", "subjectArea": "Cultural Studies / Gender Studies"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Manhar Charan", "designation": "Assistant Professor", "subjectArea": "Religious Studies"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Nirmalya Guha", "designation": "Associate Professor", "subjectArea": "Philosophy / Logic"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Prasanta Kumar Panda", "designation": "Professor", "subjectArea": "Literary Theory / Professional Communication"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Sanjukta Ghosh", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Satish Kanaujia", "designation": "Assistant Professor", "subjectArea": "Physical Education / Sports"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Shail Shankar", "designation": "Assistant Professor", "subjectArea": "Humanities"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Sukhada", "designation": "Assistant Professor", "subjectArea": "Indian Knowledge Systems / Linguistics"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Swasti Mishra", "designation": "Assistant Professor", "subjectArea": "Sociolinguistics / Computational Linguistics"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Tara Chand", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Vinita Chandra", "designation": "Professor", "subjectArea": "History"},
        // Visiting Faculty
        {"iitName": "IIT (BHU) Varanasi", "department": "Department of Humanistic Studies", "facultyName": "Sanjaya Kumar Lenka", "designation": "Visiting Faculty", "subjectArea": "Linguistics"}
    ];
}

// IIT Indore data
function loadIndoreData() {
    return [
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Ruchi Sharma", "designation": "Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Nirmala Menon", "designation": "Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Sanjram Premjit Khangamba", "designation": "Professor", "subjectArea": "Psychology / Human Factors"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "C. Upendra", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Ashok Kumar Mocherla", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Akshaya Kumar", "designation": "Associate Professor", "subjectArea": "Media Studies"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Ananya Ghoshal", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Shomik Dasgupta", "designation": "Associate Professor", "subjectArea": "History"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Kalandi Charan Pradhan", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Aratrika Das", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Kedarmal Verma", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Thapasya J.", "designation": "Assistant Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Sansuma Brahma", "designation": "Assistant Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Dishari Chattaraj", "designation": "Assistant Professor", "subjectArea": "Education / Linguistics"},
        {"iitName": "IIT Indore", "department": "School of Humanities and Social Sciences", "facultyName": "Abhishek Yadav", "designation": "Assistant Professor", "subjectArea": "Philosophy"}
    ];
}

// IIT Mandi data
function loadMandiData() {
    return [
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Ramna Thakur", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Manu V Devadevan", "designation": "Associate Professor", "subjectArea": "History"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Nilamber Chhetri", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Rajeshwari Dutt", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Shyamasree Dasgupta", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Suman", "designation": "Associate Professor", "subjectArea": "English Literature"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Surya Prakash Upadhyay", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Aruna Bommareddi", "designation": "Assistant Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Devika Sethi", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Karan Rai", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Masudul Hasan Adil", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Neethi Vadakkan Alexander", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Neha Kaushik", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Saumya Malviya", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Thirthankar Chakraborty", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Aparna Malviya", "designation": "Visiting Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Ingrid Shockey", "designation": "Visiting Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Juan Luis Toribio", "designation": "Visiting Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Mandi", "department": "School of Humanities and Social Sciences", "facultyName": "Chieko Hiroe", "designation": "Guest Faculty", "subjectArea": "To be determined"}
    ];
}

// IIT Ropar data
function loadRoparData() {
    return [
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Amritesh", "designation": "Assistant Professor", "subjectArea": "Management"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Aparna N", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Bhavesh Garg", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Dibyakusum Ray", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Kamal Kumar Choudhary", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Parwinder Singh", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Rano Ringo", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Ravi Kumar", "designation": "Assistant Professor", "subjectArea": "Management"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Samaresh Bardhan", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Smruti Ranjan Behera", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Somdev Kar", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Ropar", "department": "Department of Humanities and Social Sciences", "facultyName": "Sreekumar Jayadevan", "designation": "Assistant Professor", "subjectArea": "Philosophy"}
    ];
}

// IIT Bhubaneswar data
function loadBhubaneswarData() {
    return [
        // Economics
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Dukhabandhu Sahoo", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Naresh Chandra Sahu", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Madhusmita Dash", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Nihar Ranjan Jena", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Sitakanta Panda", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Avishek Bhandari", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Sayel Basel", "designation": "Assistant Professor", "subjectArea": "Economics"},
        // English
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Amrita Satapathy", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Punyashree Panda", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Akshaya Kumar Rath", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Rajakumar Guduru", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Ashna Jacob", "designation": "Assistant Professor", "subjectArea": "English"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Swathi Krishna S", "designation": "Assistant Professor", "subjectArea": "English"},
        // Psychology
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Anamitra Basu", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Aparna Pandey", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Prama Bhattacharya", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        // Philosophy
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Sreetama Misra", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "Richa Shukla", "designation": "Assistant Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Bhubaneswar", "department": "School of Humanities, Social Sciences and Management", "facultyName": "R Venkata Raghavan", "designation": "Assistant Professor", "subjectArea": "Philosophy"}
    ];
}

// IIT Jammu data
function loadJammuData() {
    return [
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Meenakshi Rajeev", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Amitash Ojha", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Ankit Kathuria", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Garima Singh", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Hardeep Singh", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Joby Varghese", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Malvika Sharma", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Muhammed Haneefa A.P.", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Quleen Kaur Bijral", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Sanchita Srivastava", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Shafkat Shafi Dar", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Sukanya Mondal", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Jammu", "department": "Department of Humanities and Social Sciences", "facultyName": "Bijoy H Boruah", "designation": "Advisor", "subjectArea": "To be determined"}
    ];
}

// IIT Tirupati data
function loadTirupatiData() {
    return [
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "A Raghuramaraju", "designation": "Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Chandra Sekhar Bahinipati", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Bharath Kumar", "designation": "Associate Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Rahul A. Sirohi", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Vaneet Kashyap", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Arvind Kumar Pandey", "designation": "Assistant Professor", "subjectArea": "Urban Planning"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Bibhuti Mary Kachhap", "designation": "Assistant Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Samyukta Bhupatiraju", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Shailendra Kumar Singh", "designation": "Assistant Professor", "subjectArea": "Literature / Gender Studies"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Varun Varghese", "designation": "Assistant Professor", "subjectArea": "Urban Planning"},
        {"iitName": "IIT Tirupati", "department": "Department of Humanities and Social Sciences", "facultyName": "Vishnu C. Rajan", "designation": "Assistant Professor", "subjectArea": "Management"}
    ];
}

// IIT Palakkad data
function loadPalakkadData() {
    return [
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Amrita Roy", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sujatha G", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Reenu Punnoose", "designation": "Associate Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Anoop George", "designation": "Associate Professor", "subjectArea": "Philosophy"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Rahul Choragudi", "designation": "Associate Professor", "subjectArea": "Sociology"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sudarshan R Kottai", "designation": "Associate Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Biswajit Sarmah", "designation": "Associate Professor", "subjectArea": "History"},
        {"iitName": "IIT Palakkad", "department": "Department of Humanities and Social Sciences", "facultyName": "Manav Khaire", "designation": "Associate Professor", "subjectArea": "Political Science"}
    ];
}

// IIT Patna data
function loadPatnaData() {
    return [
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Nalin Bharti", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Smriti Singh", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Sweta Sinha", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Aditya Raj", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Priyanka Tripathi", "designation": "Associate Professor", "subjectArea": "English"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Richa Chaudhary", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Papia Raj", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Rajendra N. Paramanik", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Patna", "department": "Department of Humanities and Social Sciences", "facultyName": "Meghna Dutta", "designation": "Assistant Professor", "subjectArea": "To be determined"}
    ];
}

// IIT Gandhinagar data
function loadGandhinagarData() {
    return [
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Alok Kumar Kanungo", "designation": "Associate Research Professor", "subjectArea": "History"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Ambika Aiyadurai", "designation": "Associate Professor", "subjectArea": "Society and Culture"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Arka Chattopadhyay", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Arnapurna Rath", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "C N Pandey", "designation": "Professor of Practice", "subjectArea": "Environmental Studies"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Jaison A. Manjaly", "designation": "Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Madhumita Sengupta", "designation": "Associate Professor", "subjectArea": "History"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Sameer Sahasrabudhe", "designation": "Professor of Practice", "subjectArea": "Design"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Sharada C. V.", "designation": "Associate Professor", "subjectArea": "Archaeological Sciences"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Sharmita Lahiri", "designation": "Associate Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Tanka Bahadur Subba", "designation": "Visiting Professor", "subjectArea": "Anthropology"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "V.N. Prabhakar", "designation": "Professor", "subjectArea": "Archaeological Sciences"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Deepak Singhania", "designation": "Assistant Professor", "subjectArea": "Political Science"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Praharsh M. Patel", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Aditi Kothiyal", "designation": "Assistant Teaching Professor", "subjectArea": "Education"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Jooyoung Kim", "designation": "Assistant Teaching Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Malay Nitinkumar Dhamelia", "designation": "Assistant Professor", "subjectArea": "Design / Game Studies"},
        {"iitName": "IIT Gandhinagar", "department": "School of Humanities and Social Sciences", "facultyName": "Manasi Kanetkar", "designation": "Associate Teaching Professor", "subjectArea": "Design"}
    ];
}

// IIT Dharwad data
function loadDharwadData() {
    return [
        {"iitName": "IIT Dharwad", "department": "Department of Humanities, Economics, Arts and Rural Technologies", "facultyName": "Mohana Rao Balaga", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Dharwad", "department": "Department of Humanities, Economics, Arts and Rural Technologies", "facultyName": "Debalina Chakravarty", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Dharwad", "department": "Department of Humanities, Economics, Arts and Rural Technologies", "facultyName": "Gopal Sharan Parashari", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Dharwad", "department": "Department of Humanities, Economics, Arts and Rural Technologies", "facultyName": "Jolly Thomas", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Dharwad", "department": "Department of Humanities, Economics, Arts and Rural Technologies", "facultyName": "Ridhima Tewari", "designation": "Associate Professor", "subjectArea": "To be determined"}
    ];
}

// IIT Bhilai data
function loadBhilaiData() {
    return [
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Anubhav Pradhan", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Anindita Ghosh", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Sonal Jha", "designation": "Assistant Professor", "subjectArea": "Cultural Studies"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Sruthi Vinayan", "designation": "Assistant Professor", "subjectArea": "Literature"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Rekha Ravindran", "designation": "Assistant Professor", "subjectArea": "Psychology"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Sreelakshmi R.", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT Bhilai", "department": "Department of Liberal Arts", "facultyName": "Ritika Verma", "designation": "Assistant Professor", "subjectArea": "Literature"}
    ];
}

// IIT Goa data
function loadGoaData() {
    return [
        {"iitName": "IIT Goa", "department": "School of Humanities and Social Sciences", "facultyName": "Sunil Paul", "designation": "Associate Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Goa", "department": "School of Humanities and Social Sciences", "facultyName": "Anandarao Suvvari", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Goa", "department": "School of Humanities and Social Sciences", "facultyName": "Sabiha Hashami", "designation": "Assistant Professor", "subjectArea": "Linguistics"},
        {"iitName": "IIT Goa", "department": "School of Humanities and Social Sciences", "facultyName": "Vijay Victor", "designation": "Assistant Professor", "subjectArea": "Economics"},
        {"iitName": "IIT Goa", "department": "School of Humanities and Social Sciences", "facultyName": "Sundeep Kumar Nayak", "designation": "Professor of Practice", "subjectArea": "Public Policy"}
    ];
}

// IIT (ISM) Dhanbad data
function loadDhanbadData() {
    return [
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Ajit Kumar Behura", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Rajni Singh", "designation": "Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Gyan Prakash", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Md Mojibur Rahman", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Nirban Manna", "designation": "Associate Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Ahmed Sameer", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Debashrita Dey", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Deepika Sharma", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Dipannita Chand", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Indumathy J", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Rahul D R", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sanatan Mandal", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sangay Tamang", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sathya Narayana Sharma", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Shanmugapriya T", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Shonkholen Mate", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sruti Kanungo", "designation": "Assistant Professor", "subjectArea": "To be determined"},
        {"iitName": "IIT (ISM) Dhanbad", "department": "Department of Humanities and Social Sciences", "facultyName": "Sucharita Maji", "designation": "Assistant Professor", "subjectArea": "To be determined"}
    ];
}

// Get full IIT name
function getFullIITName(shortName) {
    const map = {
        'IIT Madras': 'INDIAN INSTITUTE OF TECHNOLOGY MADRAS',
        'IIT Delhi': 'INDIAN INSTITUTE OF TECHNOLOGY DELHI',
        'IIT Bombay': 'INDIAN INSTITUTE OF TECHNOLOGY BOMBAY',
        'IIT Kanpur': 'INDIAN INSTITUTE OF TECHNOLOGY KANPUR',
        'IIT Kharagpur': 'INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR',
        'IIT Roorkee': 'INDIAN INSTITUTE OF TECHNOLOGY ROORKEE',
        'IIT Hyderabad': 'INDIAN INSTITUTE OF TECHNOLOGY HYDERABAD',
        'IIT Guwahati': 'INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI',
        'IIT (BHU) Varanasi': 'INDIAN INSTITUTE OF TECHNOLOGY (BHU) VARANASI',
        'IIT Indore': 'INDIAN INSTITUTE OF TECHNOLOGY INDORE',
        'IIT Mandi': 'INDIAN INSTITUTE OF TECHNOLOGY MANDI',
        'IIT Ropar': 'INDIAN INSTITUTE OF TECHNOLOGY ROPAR',
        'IIT Bhubaneswar': 'INDIAN INSTITUTE OF TECHNOLOGY BHUBANESWAR',
        'IIT Jammu': 'INDIAN INSTITUTE OF TECHNOLOGY JAMMU',
        'IIT Tirupati': 'INDIAN INSTITUTE OF TECHNOLOGY TIRUPATI',
        'IIT Palakkad': 'INDIAN INSTITUTE OF TECHNOLOGY PALAKKAD',
        'IIT Patna': 'INDIAN INSTITUTE OF TECHNOLOGY PATNA',
        'IIT Gandhinagar': 'INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR',
        'IIT Dharwad': 'INDIAN INSTITUTE OF TECHNOLOGY DHARWAD',
        'IIT Bhilai': 'INDIAN INSTITUTE OF TECHNOLOGY BHILAI',
        'IIT Goa': 'INDIAN INSTITUTE OF TECHNOLOGY GOA',
        'IIT (ISM) Dhanbad': 'INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD'
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
