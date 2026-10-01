# Task 01: HSS Faculty Mapping Across IITs

## Task Information

**Status:** In Progress  
**Reference Date:** 30 September 2026  
**Assigned By:** Dr. Priyanka Tripathi  
**Dataset Type:** Faculty Information Database

## Objective

Comprehensive compilation of Humanities and Social Sciences faculty information across all Indian Institutes of Technology (IITs) with their designations and broad subject areas.

## Dataset Overview

**Total Faculty Records:** 137  
**IITs Completed:** 4

### IITs Included:
1. **IIT Madras** - 18 faculty members
2. **IIT Delhi** - 47 faculty members  
3. **IIT Bombay** - 41 faculty members
4. **IIT Kanpur** - 31 faculty members

### Upcoming IITs:
- IIT Kanpur
- IIT Kharagpur
- IIT Roorkee
- IIT Hyderabad
- IIT Guwahati
- IIT (BHU) Varanasi
- IIT Indore
- And more...

## Required Dataset Fields

This task maintains exactly these five primary columns for all IITs:

1. **IIT Name** - Name of the IIT
2. **HSS Department** - Full official department name
3. **Faculty Name** - Faculty member's official full name
4. **Designation** - Academic position/title
5. **Broad Subject Area** - Primary research or teaching domain

## Structure

The task page displays data in sequentially organized IIT sections:

```
TASK 01 - HSS Faculty Mapping Across IITs
├── IIT Madras Section
│   ├── Header (Full name, short name, department)
│   ├── Statistics
│   └── Faculty Table
│
├── IIT Delhi Section
│   ├── Header
│   ├── Statistics
│   └── Faculty Table
│
├── IIT Bombay Section
│   ├── Header
│   ├── Statistics
│   └── Faculty Table
│
├── IIT Kanpur Section
│   ├── Header
│   ├── Statistics
│   └── Faculty Table
│
└── [Future IITs to be appended sequentially]
```

## Features

### Filtering & Search
- **Filter by IIT** - View faculty from specific IIT
- **Filter by Designation** - Professor, Associate, Assistant, etc.
- **Filter by Subject Area** - Economics, Literature, Philosophy, etc.
- **Search Faculty Name** - Find specific faculty members
- **Global Search** - Search across all fields

### Export Options
- **Excel (.xlsx)** - Complete dataset with all IITs
- **CSV (.csv)** - Raw data export
- **PDF (.pdf)** - IIT-wise formatted report
- **Print** - Optimized print layout

### Data Management
- All IIT data stored in unified dataset
- Automatic IIT-wise grouping and display
- Real-time filtering and search
- Comprehensive statistics per IIT

## Data Files

- **Master Dataset:** `data/faculty.json` (IIT Madras)
- **Supplementary:** Various JSON files for each IIT
- **Merged View:** Programmatically combined on page load

## Adding New IITs

When adding new IIT faculty data:

1. Data is appended to the master dataset
2. New IIT section automatically appears
3. Filters update to include new IIT
4. Statistics recalculate automatically
5. Export functions include all data

**DO NOT** create separate task pages for each IIT. This is ONE master task covering ALL IITs.

## Subject Area Classification

Faculty subject areas include:
- Economics
- Literature / English
- Philosophy
- Psychology
- Sociology
- Linguistics
- History
- Anthropology
- Political Science
- Interdisciplinary / Multi. Disc.
- CISTS (Cell for Indian Science and Technology in Sanskrit)
- And more...

## Current Status

### IIT Madras (18 faculty)
- Professors: 8
- Associate Professors: 4
- Assistant Professors: 2
- Adjunct Faculty: 2
- Status: Verified

### IIT Delhi (47 faculty)
- Professors: 19
- Associate Professors: 13
- Assistant Professors: 13
- Professor Emeritus/Emerita: 2
- Honorary Professor: 1
- Status: Complete

### IIT Bombay (41 faculty)
- Professors: 16
- Associate Professors: 10
- Assistant Professors: 11
- Status: Complete

### IIT Kanpur (31 faculty)
- Professors: 14
- Associate Professors: 5
- Assistant Professors: 12
- Status: Complete

## Sources

All faculty data compiled from official IIT HSS department websites and faculty directories.

## Update Instructions

To add new IIT data:

1. Research faculty from official IIT website
2. Add records to master dataset maintaining five-column structure
3. System automatically creates new IIT section
4. Update statistics in config.json
5. Document sources appropriately

## Notes

- This is a living dataset that grows with each IIT added
- All IITs display on ONE page with clear visual separation
- Broad Subject Area is a core required field
- Maintain consistency in designation terminology
- Preserve special designations (Emeritus, Honorary, Adjunct, etc.)

---

*Task created: 30 September 2026*  
*Last updated: 01 October 2026*  
*Status: In Progress - 4 IITs completed*
