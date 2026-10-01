/**
 * IIT Patna My Update Portal — Task 01
 * portal.js — Filter, search, render, and export logic
 *
 * Architecture:
 *   task-master.js loads first (defines masterDataset, loadMasterDataset,
 *   renderIITSections, updateTotals, applyFilters) and auto-calls
 *   loadMasterDataset() on DOMContentLoaded.
 *
 *   portal.js loads AFTER task-master.js. It overrides renderIITSections,
 *   updateTotals, and applyFilters BEFORE task-master.js's DOMContentLoaded
 *   listener fires (since both scripts are loaded synchronously and
 *   DOMContentLoaded fires after all synchronous script execution).
 */

'use strict';

// ============================================================
// CONSTANTS
// ============================================================

const IIT_SEQUENCE = [
    'IIT Madras',
    'IIT Delhi',
    'IIT Bombay',
    'IIT Kanpur',
    'IIT Kharagpur',
    'IIT Roorkee',
    'IIT Hyderabad',
    'IIT Guwahati',
    'IIT (BHU) Varanasi',
    'IIT Indore',
    'IIT Mandi',
    'IIT Jodhpur',
    'IIT Ropar',
    'IIT Bhubaneswar',
    'IIT Jammu',
    'IIT Tirupati',
    'IIT Palakkad',
    'IIT Patna',
    'IIT Gandhinagar',
    'IIT Dharwad',
    'IIT Bhilai',
    'IIT Goa',
    'IIT (ISM) Dhanbad'
];

const IIT_FULL_NAMES = {
    'IIT Madras':          'Indian Institute of Technology Madras',
    'IIT Delhi':           'Indian Institute of Technology Delhi',
    'IIT Bombay':          'Indian Institute of Technology Bombay',
    'IIT Kanpur':          'Indian Institute of Technology Kanpur',
    'IIT Kharagpur':       'Indian Institute of Technology Kharagpur',
    'IIT Roorkee':         'Indian Institute of Technology Roorkee',
    'IIT Hyderabad':       'Indian Institute of Technology Hyderabad',
    'IIT Guwahati':        'Indian Institute of Technology Guwahati',
    'IIT (BHU) Varanasi':  'Indian Institute of Technology (BHU) Varanasi',
    'IIT Indore':          'Indian Institute of Technology Indore',
    'IIT Mandi':           'Indian Institute of Technology Mandi',
    'IIT Jodhpur':         'Indian Institute of Technology Jodhpur',
    'IIT Ropar':           'Indian Institute of Technology Ropar',
    'IIT Bhubaneswar':     'Indian Institute of Technology Bhubaneswar',
    'IIT Jammu':           'Indian Institute of Technology Jammu',
    'IIT Tirupati':        'Indian Institute of Technology Tirupati',
    'IIT Palakkad':        'Indian Institute of Technology Palakkad',
    'IIT Patna':           'Indian Institute of Technology Patna',
    'IIT Gandhinagar':     'Indian Institute of Technology Gandhinagar',
    'IIT Dharwad':         'Indian Institute of Technology Dharwad',
    'IIT Bhilai':          'Indian Institute of Technology Bhilai',
    'IIT Goa':             'Indian Institute of Technology Goa',
    'IIT (ISM) Dhanbad':   'Indian Institute of Technology (ISM) Dhanbad'
};

// ============================================================
// STATE — portal-level filtered view
// ============================================================

let _portalFilteredData = [];

// ============================================================
// OVERRIDE task-master.js functions
// (These are executed synchronously before DOMContentLoaded fires)
// ============================================================

/**
 * Called by task-master.js after masterDataset is populated.
 * We use this as our hook to initialise the portal UI.
 */
window.renderIITSections = function () {
    onDataReady();
};

/**
 * Called by task-master.js after each filter operation.
 * We override to prevent it from writing stale numbers.
 */
window.updateTotals = function () {
    updateStatCards();
};

/**
 * Override the filter function from task-master.js so our full-text
 * search (across all five fields) works.
 */
window.applyFilters = function () {
    applyFilters();
};

// ============================================================
// CALLED WHEN DATA IS READY
// ============================================================

function onDataReady() {
    const ds = window.masterDataset;
    if (!ds || ds.length === 0) {
        showError();
        return;
    }

    _portalFilteredData = [...ds];
    updateStatCards();
    populateDynamicFilters();
    renderTable(_portalFilteredData);
    updateResultCount(_portalFilteredData.length, ds.length);
}

function showError() {
    const container = document.getElementById('iitSectionsContainer');
    if (container) {
        container.innerHTML = `
            <div class="error-state" role="alert">
                <strong>⚠ Dataset could not be loaded.</strong><br>
                Please check the data file or repository path, then refresh the page.
            </div>`;
    }
}

// ============================================================
// STAT CARDS
// ============================================================

function updateStatCards() {
    const ds = window.masterDataset || [];
    const iitsCovered  = new Set(ds.map(f => f.iitName)).size;
    const totalFaculty = ds.length;

    const elIITs  = document.getElementById('statIITsCovered');
    const elTotal = document.getElementById('statTotalFaculty');
    if (elIITs)  elIITs.textContent  = iitsCovered;
    if (elTotal) elTotal.textContent = totalFaculty;
}

// ============================================================
// DYNAMIC FILTER POPULATION
// ============================================================

function populateDynamicFilters() {
    const ds = window.masterDataset || [];

    // Designations — sorted alphabetically
    const designations = [...new Set(ds.map(f => f.designation))].sort();
    const designationSel = document.getElementById('filterDesignation');
    if (designationSel) {
        designationSel.innerHTML = '<option value="">All Designations</option>';
        designations.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            designationSel.appendChild(opt);
        });
    }

    // Subject Areas — sorted, 'To be determined' at end
    const definedSubjects = [...new Set(
        ds.map(f => f.subjectArea).filter(s => s && s !== 'To be determined')
    )].sort();
    const hasTBD = ds.some(f => f.subjectArea === 'To be determined');
    const subjects = hasTBD ? [...definedSubjects, 'To be determined'] : definedSubjects;

    const subjectSel = document.getElementById('filterSubject');
    if (subjectSel) {
        subjectSel.innerHTML = '<option value="">All Subject Areas</option>';
        subjects.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            subjectSel.appendChild(opt);
        });
    }
}

// ============================================================
// FILTERING & SEARCH
// ============================================================

function applyFilters() {
    const iitFilter         = (document.getElementById('filterIIT')?.value         || '').trim();
    const designationFilter = (document.getElementById('filterDesignation')?.value || '').trim();
    const subjectFilter     = (document.getElementById('filterSubject')?.value     || '').trim();
    const searchTerm        = (document.getElementById('searchFaculty')?.value     || '').trim().toLowerCase();

    const ds = window.masterDataset || [];

    _portalFilteredData = ds.filter(f => {
        const matchIIT         = !iitFilter         || f.iitName     === iitFilter;
        const matchDesignation = !designationFilter  || f.designation === designationFilter;
        const matchSubject     = !subjectFilter      || f.subjectArea === subjectFilter;
        const matchSearch      = !searchTerm         || [
            f.facultyName, f.iitName, f.department, f.designation, f.subjectArea
        ].some(field => (field || '').toLowerCase().includes(searchTerm));

        return matchIIT && matchDesignation && matchSubject && matchSearch;
    });

    renderTable(_portalFilteredData);
    updateResultCount(_portalFilteredData.length, ds.length);
}

function resetFilters() {
    ['filterIIT', 'filterDesignation', 'filterSubject', 'searchFaculty'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    applyFilters();
}

// ============================================================
// TABLE RENDERING
// ============================================================

function renderTable(data) {
    const container = document.getElementById('iitSectionsContainer');
    if (!container) return;

    if (!data || data.length === 0) {
        container.innerHTML = `
            <div class="empty-state" role="status">
                <div class="empty-state-icon">🔍</div>
                <p>No matching faculty records found.</p>
                <p style="font-size:13px; margin-top:8px; color:#999;">
                    Try adjusting or resetting your filters.
                </p>
            </div>`;
        return;
    }

    // Group by IIT
    const grouped = {};
    data.forEach(f => {
        if (!grouped[f.iitName]) grouped[f.iitName] = [];
        grouped[f.iitName].push(f);
    });

    // Render in research sequence order; append any unlisted IITs at end
    const inSequence  = IIT_SEQUENCE.filter(iit => grouped[iit]);
    const notInSeq    = Object.keys(grouped).filter(iit => !IIT_SEQUENCE.includes(iit));
    const iitsToRender = [...inSequence, ...notInSeq];

    const html = iitsToRender.map(iitName => {
        const faculty  = grouped[iitName];
        const seqNum   = IIT_SEQUENCE.indexOf(iitName) + 1;
        const seqLabel = seqNum > 0
            ? `${String(seqNum).padStart(2, '0')} — ${IIT_FULL_NAMES[iitName] || iitName}`
            : IIT_FULL_NAMES[iitName] || iitName;

        const dept = faculty[0]?.department || 'Department of Humanities and Social Sciences';

        const profCount  = faculty.filter(f => f.designation === 'Professor').length;
        const assocCount = faculty.filter(f => f.designation === 'Associate Professor').length;
        const asstCount  = faculty.filter(f => f.designation === 'Assistant Professor').length;

        const rows = faculty.map(f => `
            <tr>
                <td>${escapeHtml(f.iitName)}</td>
                <td>${escapeHtml(f.department)}</td>
                <td>${escapeHtml(f.facultyName)}</td>
                <td>${escapeHtml(f.designation)}</td>
                <td>${escapeHtml(f.subjectArea)}</td>
            </tr>`).join('');

        return `
            <div class="iit-section">
                <div class="iit-header">
                    <div class="iit-seq-name">${escapeHtml(seqLabel)}</div>
                    <div class="iit-short-name">${escapeHtml(iitName)}</div>
                    <div class="iit-dept-name">${escapeHtml(dept)}</div>
                    <div class="iit-stats-row">
                        <div>Total Faculty: <span>${faculty.length}</span></div>
                        ${profCount  ? `<div>Professors: <span>${profCount}</span></div>` : ''}
                        ${assocCount ? `<div>Associate Professors: <span>${assocCount}</span></div>` : ''}
                        ${asstCount  ? `<div>Assistant Professors: <span>${asstCount}</span></div>` : ''}
                    </div>
                </div>
                <div class="table-wrapper">
                    <table class="data-table" aria-label="Faculty data for ${escapeHtml(iitName)}">
                        <thead>
                            <tr>
                                <th scope="col">IIT Name</th>
                                <th scope="col">HSS Department</th>
                                <th scope="col">Faculty Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Broad Subject Area</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>`;
    }).join('');

    container.innerHTML = html;
}

function updateResultCount(shown, total) {
    const el = document.getElementById('resultCount');
    if (!el) return;
    if (shown === total) {
        el.textContent = `Showing all ${total.toLocaleString()} faculty records across ${countIITs(window.masterDataset)} IITs.`;
    } else {
        el.textContent = `Showing ${shown.toLocaleString()} of ${total.toLocaleString()} faculty records.`;
    }
}

function countIITs(ds) {
    return new Set((ds || []).map(f => f.iitName)).size;
}

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ============================================================
// EXPORT — COMPLETE DATASET (window.masterDataset)
// ============================================================

// ---- Excel (.xlsx) ----
function exportExcel() {
    try {
        if (typeof XLSX === 'undefined') {
            alert('Excel export library (SheetJS) could not be loaded. Please check your internet connection and try again.');
            return;
        }
        const ds = window.masterDataset || [];
        if (ds.length === 0) { alert('No data to export.'); return; }

        const rows = ds.map(f => ({
            'IIT Name':           f.iitName        || '',
            'HSS Department':     f.department      || '',
            'Faculty Name':       f.facultyName     || '',
            'Designation':        f.designation     || '',
            'Broad Subject Area': f.subjectArea     || ''
        }));

        const ws = XLSX.utils.json_to_sheet(rows);

        // Column widths (characters)
        ws['!cols'] = [
            { wch: 22 },
            { wch: 56 },
            { wch: 36 },
            { wch: 32 },
            { wch: 32 }
        ];

        // Auto-filter on full table range
        ws['!autofilter'] = { ref: `A1:E${ds.length + 1}` };

        // Freeze first row
        ws['!freeze'] = { xSplit: 0, ySplit: 1 };

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'HSS Faculty Task 01');
        XLSX.writeFile(wb, 'IIT_HSS_Faculty_Task_01.xlsx');
    } catch (err) {
        console.error('Excel export error:', err);
        alert('Excel export could not be generated. Please try the CSV export instead.');
    }
}

// ---- CSV ----
function exportCSV() {
    try {
        const ds = window.masterDataset || [];
        if (ds.length === 0) { alert('No data to export.'); return; }
        _downloadCSV(ds, 'IIT_HSS_Faculty_Task_01.csv');
    } catch (err) {
        console.error('CSV export error:', err);
        alert('CSV export could not be generated. Please try again.');
    }
}

// ---- Export Filtered Data ----
function exportFilteredCSV() {
    try {
        if (!_portalFilteredData || _portalFilteredData.length === 0) {
            alert('No filtered records to export. Please adjust your filters first.');
            return;
        }
        _downloadCSV(_portalFilteredData, 'IIT_HSS_Faculty_Task_01_Filtered.csv');
    } catch (err) {
        console.error('Filtered CSV export error:', err);
        alert('Filtered export could not be generated. Please try again.');
    }
}

function _downloadCSV(dataset, filename) {
    const headers = ['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area'];
    const csvRows = [headers.map(csvQuote).join(',')];

    dataset.forEach(f => {
        csvRows.push([
            csvQuote(f.iitName),
            csvQuote(f.department),
            csvQuote(f.facultyName),
            csvQuote(f.designation),
            csvQuote(f.subjectArea)
        ].join(','));
    });

    const content = '\uFEFF' + csvRows.join('\r\n'); // UTF-8 BOM
    const blob    = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url     = URL.createObjectURL(blob);
    const a       = document.createElement('a');
    a.href        = url;
    a.download    = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 150);
}

function csvQuote(val) {
    const s = String(val === null || val === undefined ? '' : val);
    return '"' + s.replace(/"/g, '""') + '"';
}

// ---- PDF ----
function exportPDF() {
    try {
        const JsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
        if (!JsPDF) {
            alert('PDF library (jsPDF) could not be loaded. Please check your internet connection and try again.');
            return;
        }
        const ds = window.masterDataset || [];
        if (ds.length === 0) { alert('No data to export.'); return; }

        const doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        const pageW = doc.internal.pageSize.getWidth();

        // ---- Header ----
        doc.setFontSize(15);
        doc.setFont('helvetica', 'bold');
        doc.text('IIT Patna My Update Portal \u2014 Task 01', pageW / 2, 16, { align: 'center' });

        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text('HSS Faculty Mapping Across IITs', pageW / 2, 23, { align: 'center' });

        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.text('Reference Date: 30 September 2026', 14, 31);
        doc.text(
            'Faculty Mentor: Dr. Priyanka Tripathi, Associate Professor of English, Dept. of HSS, IIT Patna',
            14, 36
        );

        doc.setDrawColor(83, 52, 131);
        doc.setLineWidth(0.6);
        doc.line(14, 40, pageW - 14, 40);
        doc.setTextColor(0);

        // ---- Table ----
        const tableData = ds.map(f => [
            f.iitName        || '',
            f.department     || '',
            f.facultyName    || '',
            f.designation    || '',
            f.subjectArea    || ''
        ]);

        doc.autoTable({
            startY: 44,
            head: [['IIT Name', 'HSS Department', 'Faculty Name', 'Designation', 'Broad Subject Area']],
            body: tableData,
            styles:     { fontSize: 7.5, cellPadding: 2.5, overflow: 'linebreak' },
            headStyles: { fillColor: [83, 52, 131], textColor: 255, fontStyle: 'bold', fontSize: 8 },
            alternateRowStyles: { fillColor: [248, 249, 250] },
            columnStyles: {
                0: { cellWidth: 30 },
                1: { cellWidth: 70 },
                2: { cellWidth: 52 },
                3: { cellWidth: 42 },
                4: { cellWidth: 48 }
            },
            margin: { left: 14, right: 14 },
            didDrawPage: function (data) {
                const totalPages = doc.internal.getNumberOfPages();
                doc.setFontSize(7.5);
                doc.setTextColor(150);
                doc.text(
                    `IIT Patna My Update Portal | Task 01 | Page ${data.pageNumber}`,
                    pageW / 2,
                    doc.internal.pageSize.getHeight() - 8,
                    { align: 'center' }
                );
                doc.setTextColor(0);
            }
        });

        doc.save('IIT_HSS_Faculty_Task_01.pdf');
    } catch (err) {
        console.error('PDF export error:', err);
        alert('PDF export could not be generated. Error: ' + err.message);
    }
}

// ---- Print ----
function printDataset() {
    window.print();
}
