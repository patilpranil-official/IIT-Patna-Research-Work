# Task 01: HSS Faculty Mapping Across IITs

## Task Information

**Status:** In Progress  
**Reference Date:** 30 September 2026  
**Assigned By:** Dr. Priyanka Tripathi  
**Dataset Type:** Faculty Information Database

## Objective

Compilation of IIT-wise Humanities and Social Sciences faculty information with their designations and broad subject areas.

## Required Dataset Fields

This task focuses on five primary data fields:

1. **IIT Name** - Name of the Indian Institute of Technology
2. **HSS Department** - Full name of the Humanities and Social Sciences department
3. **Faculty Name** - Full name of the faculty member
4. **Designation** - Academic position/title
5. **Broad Subject Area** - Primary research or teaching domain

## Data Files

### Primary Dataset
- **Location:** `data/faculty.json`
- **Format:** JSON array with objects containing the five required fields
- **Usage:** Main dataset for display and export

### Sources
- **Location:** `sources.json`
- **Format:** JSON array with source references
- **Fields:** iitName, title, url, type, accessDate

## Adding Data

### Adding Faculty Entries

Edit `data/faculty.json`:

```json
[
  {
    "iitName": "IIT Name",
    "department": "Department Name",
    "facultyName": "Faculty Name",
    "designation": "Designation",
    "subjectArea": "Subject Area"
  }
]
```

### Adding Sources

Edit `sources.json`:

```json
[
  {
    "iitName": "IIT Name",
    "title": "Source Document/Page Title",
    "url": "https://source-url.com",
    "type": "Official Website | Faculty Page | Department Directory",
    "accessDate": "YYYY-MM-DD"
  }
]
```

## Export Capabilities

The task page provides multiple export formats:

- **Excel (.xlsx)** - Full dataset with all five columns
- **CSV (.csv)** - Raw data export
- **PDF (.pdf)** - Formatted academic report
- **Print** - Browser print with optimized layout

## Features

- **Search** - Real-time search across all fields
- **Sort** - Click column headers to sort
- **Filter** - Search box filters dataset instantly
- **Pagination** - Handles large datasets efficiently
- **Responsive** - Works on all devices

## Data Collection Guidelines

When collecting faculty data:

1. Verify information from official institutional sources
2. Record source URLs for every entry
3. Use consistent naming conventions
4. Record access dates for all sources
5. Maintain the exact five-field structure
6. Do not add additional primary fields to the main dataset

## Status Updates

Update task status in `/config.json`:

```json
{
  "tasks": [
    {
      "id": "01",
      "status": "In Progress | Completed | Under Review"
    }
  ]
}
```

## Notes

- Placeholder data is clearly marked as example content
- Actual research data should replace placeholder entries
- Maintain academic integrity in all data collection
- Document all sources properly

---

*Task assigned: 30 September 2026*
