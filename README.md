# IIT Patna – Academic Research Work

A structured repository documenting academic, research, and interdisciplinary engagements, scholarly activities, and project-based work.

## Faculty Mentor / Academic Association

**Dr. Priyanka Tripathi**  
Associate Professor of English  
Department of Humanities and Social Sciences  
Indian Institute of Technology Patna

## About This Repository

This repository serves as a structured documentation system for academic research activities, scholarly engagements, and project-based work. It provides a professional framework for organizing, tracking, and presenting research tasks with comprehensive data management and export capabilities.

## Repository Structure

```
.
├── index.html              # Main dashboard
├── tasks/                  # Research tasks directory
│   ├── task-01/           # HSS Faculty Mapping
│   │   ├── index.html     # Task page
│   │   ├── data/          # Task data files
│   │   └── sources.json   # Task sources
│   └── task-template/     # Template for new tasks
├── assets/                # Styles and scripts
│   ├── css/
│   └── js/
├── config.json            # Central configuration
└── README.md              # This file
```

## Current Research Tasks

### Task 01: HSS Faculty Mapping Across IITs
**Status:** In Progress  
**Reference Date:** 30 September 2026  

Compilation of IIT-wise Humanities and Social Sciences faculty information with their designations and broad subject areas.

## Features

- **Task Dashboard**: Overview of all research tasks with status tracking
- **Data Management**: Structured datasets with search, filter, and sort capabilities
- **Export Options**: Convert datasets to Excel, CSV, PDF formats
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Easy Updates**: Simple configuration system for adding new tasks
- **GitHub Pages Ready**: Fully deployable on GitHub Pages

## Deployment

### GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Select main branch as source
4. Save and wait for deployment

Your site will be available at: `https://patilpranil-official.github.io/IIT-Patna-Academic-Research-Work/`

### Local Development

Simply open `index.html` in a web browser. No build process or server required.

## Adding New Tasks

1. Open `config.json`
2. Add new task entry:
```json
{
  "id": "02",
  "title": "Task Title",
  "status": "Not Started",
  "referenceDate": "YYYY-MM-DD",
  "assignedBy": "Dr. Priyanka Tripathi",
  "path": "tasks/task-02"
}
```
3. Create task folder structure using `tasks/task-template/` as reference
4. Add task data files in appropriate format

## Task Status Options

- **Not Started**: Task assigned but not begun
- **In Progress**: Currently active
- **Completed**: Finished and verified
- **Under Review**: Awaiting feedback
- **Archived**: Completed and archived

## Data Management

Each task maintains:
- **Primary Dataset**: Core research data in CSV/JSON format
- **Sources**: Reference materials and citations
- **Exports**: Generated output files

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Data Format**: JSON, CSV
- **Export Libraries**: 
  - SheetJS (XLSX) for Excel export
  - jsPDF for PDF generation
  - PapaParse for CSV handling
- **Hosting**: GitHub Pages compatible

## Maintenance

Update the `lastUpdated` field in `config.json` when making changes:
```json
{
  "project": {
    "lastUpdated": "YYYY-MM-DD"
  }
}
```

## License

Academic research documentation. All rights reserved.

## Contact

For inquiries regarding this research work, please contact through official IIT Patna channels.

---

*Last Updated: 01 October 2026*
