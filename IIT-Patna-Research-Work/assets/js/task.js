// Task page functionality
let fullDataset = [];
let filteredDataset = [];
let currentPage = 1;
const rowsPerPage = 20;
let sortDirection = {};

// Load data on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadDataset();
    await loadSources();
    setupSearch();
});

// Load dataset
async function loadDataset() {
    try {
        const response = await fetch('data/faculty.json');
        if (response.ok) {
            fullDataset = await response.json();
            filteredDataset = [...fullDataset];
            renderTable();
        }
    } catch (error) {
        console.log('Using placeholder data');
    }
}

// Load sources
async function loadSources() {
    try {
        const response = await fetch('sources.json');
        if (response.ok) {
            const sources = await response.json();
            renderSources(sources);
        }
    } catch (error) {
        console.log('No sources data available');
    }
}

// Render sources
function renderSources(sources) {
    const sourcesList = document.getElementById('sourcesList');
    if (!sources || sources.length === 0) return;
    
    sourcesList.innerHTML = sources.map(source => `
        <div class="source-card">
            <div class="source-title">${source.iitName} - ${source.title}</div>
            <div class="source-meta">
                <span><strong>Type:</strong> ${source.type}</span>
                <span><strong>Accessed:</strong> ${formatDate(source.accessDate)}</span>
                <span><a href="${source.url}" target="_blank" class="source-link">View Source →</a></span>
            </div>
        </div>
    `).join('');
}

// Render table
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    
    if (filteredDataset.length === 0) {
        tableBody.innerHTML = `
            <tr class="no-data">
                <td colspan="5">
                    <div class="no-data-message">
                        <p><strong>No data available</strong></p>
                        <p>Add data to data/faculty.json to populate this table.</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredDataset.slice(start, end);
    
    tableBody.innerHTML = pageData.map(row => `
        <tr>
            <td>${row.iitName}</td>
            <td>${row.department}</td>
            <td>${row.facultyName}</td>
            <td>${row.designation}</td>
            <td>${row.subjectArea}</td>
        </tr>
    `).join('');
    
    renderPagination();
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredDataset.length / rowsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span>...</span>`;
        }
    }
    
    html += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
    `;
    
    pagination.innerHTML = html;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredDataset.length / rowsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTable();
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query === '') {
            filteredDataset = [...fullDataset];
        } else {
            filteredDataset = fullDataset.filter(row => 
                row.iitName.toLowerCase().includes(query) ||
                row.department.toLowerCase().includes(query) ||
                row.facultyName.toLowerCase().includes(query) ||
                row.designation.toLowerCase().includes(query) ||
                row.subjectArea.toLowerCase().includes(query)
            );
        }
        
        currentPage = 1;
        renderTable();
    });
}

// Sort table
function sortTable(columnIndex) {
    const columns = ['iitName', 'department', 'facultyName', 'designation', 'subjectArea'];
    const column = columns[columnIndex];
    
    sortDirection[column] = sortDirection[column] === 'asc' ? 'desc' : 'asc';
    
    filteredDataset.sort((a, b) => {
        const aVal = a[column].toLowerCase();
        const bVal = b[column].toLowerCase();
        
        if (aVal < bVal) return sortDirection[column] === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection[column] === 'asc' ? 1 : -1;
        return 0;
    });
    
    renderTable();
}

// View dataset (full screen modal could be added)
function viewDataset() {
    if (fullDataset.length === 0) {
        alert('No dataset available to view.');
        return;
    }
    window.scrollTo({ top: document.querySelector('.table-container').offsetTop - 100, behavior: 'smooth' });
}

// Export to Excel
function exportExcel() {
    if (filteredDataset.length === 0) {
        alert('No data available to export.');
        return;
    }
    
    const exportData = filteredDataset.map(row => ({
        'IIT Name': row.iitName,
        'HSS Department': row.department,
        'Faculty Name': row.facultyName,
        'Designation': row.designation,
        'Broad Subject Area': row.subjectArea
    }));
    
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Faculty Data');
    
    XLSX.writeFile(wb, 'HSS_Faculty_Mapping.xlsx');
}

// Export to CSV
function exportCSV() {
    if (filteredDataset.length === 0) {
        alert('No data available to export.');
        return;
    }
    
    const headers = ['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area'];
    const rows = filteredDataset.map(row => [
        row.iitName,
        row.department,
        row.facultyName,
        row.designation,
        row.subjectArea
    ]);
    
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
        csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'HSS_Faculty_Mapping.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Export to PDF
function exportPDF() {
    if (filteredDataset.length === 0) {
        alert('No data available to export.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4');
    
    // Add title
    doc.setFontSize(16);
    doc.text('HSS Faculty Mapping Across IITs', 14, 15);
    
    // Add metadata
    doc.setFontSize(10);
    doc.text('Task 01 - Reference Date: 30 September 2026', 14, 22);
    doc.text('Faculty Mentor: Dr. Priyanka Tripathi', 14, 28);
    
    // Add table
    const headers = [['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area']];
    const data = filteredDataset.map(row => [
        row.iitName,
        row.department,
        row.facultyName,
        row.designation,
        row.subjectArea
    ]);
    
    doc.autoTable({
        head: headers,
        body: data,
        startY: 35,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [26, 26, 46] }
    });
    
    doc.save('HSS_Faculty_Mapping.pdf');
}

// Print dataset
function printDataset() {
    window.print();
}

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    });
}
