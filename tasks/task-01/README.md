# Task 01: HSS Faculty Mapping Across IITs

## Task Information

**Status:** In Progress  
**Reference Date:** 30 September 2026  
**Assigned By:** Dr. Priyanka Tripathi  
**Dataset Type:** Faculty Information Database

## Objective

Comprehensive compilation of Humanities and Social Sciences faculty information across all Indian Institutes of Technology (IITs) with their designations and broad subject areas.

## Dataset Overview

**Total Faculty Records:** 479  
**IITs Completed:** 22

### IITs Included:
1. **IIT Madras** - 18 faculty members
2. **IIT Delhi** - 47 faculty members  
3. **IIT Bombay** - 41 faculty members
4. **IIT Kanpur** - 31 faculty members
5. **IIT Kharagpur** - 34 faculty members
6. **IIT Roorkee** - 31 faculty members
7. **IIT Hyderabad** - 31 faculty members (Liberal Arts)
8. **IIT Guwahati** - 33 faculty members (including 1 Visiting Professor)
9. **IIT (BHU) Varanasi** - 16 faculty members (including 1 Visiting Faculty)
10. **IIT Indore** - 15 faculty members
11. **IIT Mandi** - 19 faculty members (including 3 Visiting Assistant Professors and 1 Guest Faculty)
12. **IIT Ropar** - 12 faculty members
13. **IIT Bhubaneswar** - 20 faculty members
14. **IIT Jammu** - 13 faculty members (including 1 Advisor)
15. **IIT Tirupati** - 11 faculty members
16. **IIT Palakkad** - 8 faculty members
17. **IIT Patna** - 9 faculty members
18. **IIT Gandhinagar** - 18 faculty members (including 1 Visiting Professor)
19. **IIT Dharwad** - 5 faculty members
20. **IIT Bhilai** - 7 faculty members
21. **IIT Goa** - 5 faculty members (including 1 Professor of Practice)
22. **IIT (ISM) Dhanbad** - 18 faculty members

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
├── IIT Kharagpur Section
│   ├── Header
│   ├── Statistics
│   └── Faculty Table
│
├── IIT Roorkee Section
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

### IIT Kharagpur (34 faculty)
- Professors: 13
- Associate Professors: 10
- Assistant Professors: 11
- Status: Complete

### IIT Roorkee (31 faculty)
- Professors: 9
- Associate Professors: 6
- Assistant Professors: 16
- Status: Complete

### IIT Hyderabad (31 faculty)
- Professors: 3
- Associate Professors: 11
- Assistant Professors: 5
- Distinguished Professors: 2
- Adjunct Professors: 7
- Status: Complete

### IIT Guwahati (33 faculty)
- Professors: 16
- Associate Professors: 5
- Assistant Professors: 11
- Visiting Professor: 1
- Status: Complete

### IIT (BHU) Varanasi (16 faculty)
- Professors: 4
- Associate Professors: 4
- Assistant Professors: 7
- Visiting Faculty: 1
- Status: Complete

### IIT Indore (15 faculty)
- Professors: 4
- Associate Professors: 6
- Assistant Professors: 5
- Status: Complete

### IIT Mandi (19 faculty)
- Professor: 1
- Associate Professors: 6
- Assistant Professors: 8
- Visiting Assistant Professors: 3
- Guest Faculty: 1
- Status: Complete

### IIT Ropar (12 faculty)
- Associate Professors: 8
- Assistant Professors: 4
- Status: Complete

### IIT Bhubaneswar (20 faculty)
- Associate Professors: 6
- Assistant Professors: 14
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
*Status: In Progress - 22 IITs completed*
