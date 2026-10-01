# Update Instructions

This guide explains how to update and maintain your academic research dashboard.

## Quick Reference

- **Add new task:** Edit `config.json` + copy `tasks/task-template/`
- **Update statistics:** Edit `config.json` statistics section
- **Add research data:** Edit JSON files in `tasks/task-XX/data/`
- **Update sources:** Edit `tasks/task-XX/sources.json`
- **Change last updated date:** Edit `config.json` project.lastUpdated

## Adding a New Task

### Step 1: Update Configuration

Open `config.json` and add a new task entry:

```json
{
  "tasks": [
    {
      "id": "02",
      "title": "Your New Task Title",
      "status": "Not Started",
      "referenceDate": "2026-10-15",
      "assignedBy": "Dr. Priyanka Tripathi",
      "description": "Brief description of the task objective.",
      "path": "tasks/task-02",
      "datasetType": "Type of Dataset"
    }
  ]
}
```

### Step 2: Create Task Folder

Copy the template folder:
```bash
cp -r tasks/task-template tasks/task-02
```

Or manually create:
```
tasks/task-02/
├── index.html
├── README.md
├── data/
│   └── (your data files)
└── sources.json
```

### Step 3: Customize Task Files

Edit `tasks/task-02/index.html`:
- Replace `[NUMBER]` with `02`
- Replace `[TITLE]` with your task title
- Update all task-specific information
- Customize data fields if needed

Edit `tasks/task-02/README.md`:
- Update task information
- Describe objectives
- Document data fields

### Step 4: Update Statistics

In `config.json`, update:
```json
{
  "statistics": {
    "totalTasks": 3,
    "completedTasks": 0,
    "inProgressTasks": 1,
    "notStartedTasks": 2
  }
}
```

### Step 5: Update Last Modified

```json
{
  "project": {
    "lastUpdated": "2026-10-15"
  }
}
```

## Updating Task Status

Edit `config.json` and change the status field:

```json
{
  "tasks": [
    {
      "id": "01",
      "status": "Completed"  // Options: Not Started, In Progress, Completed, Under Review, Archived
    }
  ]
}
```

Valid statuses:
- **Not Started** - Task assigned but not begun
- **In Progress** - Currently active
- **Completed** - Finished
- **Under Review** - Awaiting feedback
- **Archived** - Completed and archived

## Adding Research Data

### For Task 01 (Faculty Mapping)

Edit `tasks/task-01/data/faculty.json`:

```json
[
  {
    "iitName": "IIT Bombay",
    "department": "Department of Humanities and Social Sciences",
    "facultyName": "Example Name",
    "designation": "Professor",
    "subjectArea": "Economics"
  },
  {
    "iitName": "IIT Delhi",
    "department": "Department of Humanities and Social Sciences",
    "facultyName": "Example Name",
    "designation": "Associate Professor",
    "subjectArea": "Psychology"
  }
]
```

### For Other Tasks

Create appropriate JSON/CSV files in the task's `data/` folder following the same pattern.

## Adding Sources

Edit `tasks/task-XX/sources.json`:

```json
[
  {
    "iitName": "IIT Bombay",
    "title": "Faculty Directory",
    "url": "https://www.iitb.ac.in/faculty",
    "type": "Official Website",
    "accessDate": "2026-09-30"
  }
]
```

## Customizing Task Pages

### If You Need Different Data Fields

1. Edit `tasks/task-XX/index.html` - modify table headers
2. Edit `assets/js/task.js` - update the columns array and data mapping
3. Update export functions to include new fields

### Example: Adding a New Column

In `index.html`:
```html
<th onclick="sortTable(5)">New Column <span class="sort-icon">⇅</span></th>
```

In `task.js`:
```javascript
const columns = ['iitName', 'department', 'facultyName', 'designation', 'subjectArea', 'newField'];
```

## Updating Mentor Information

Edit `config.json`:

```json
{
  "mentor": {
    "name": "Dr. Name",
    "title": "Designation",
    "department": "Department Name",
    "institution": "Institution Name"
  }
}
```

## File Organization Best Practices

### Recommended Structure

```
tasks/
├── task-01/
│   ├── index.html              # Task page
│   ├── README.md               # Task documentation
│   ├── data/
│   │   ├── faculty.json        # Primary dataset
│   │   └── faculty.csv         # Optional CSV version
│   ├── sources.json            # Source references
│   └── exports/                # Generated exports (optional)
│       ├── report.pdf
│       └── data.xlsx
```

### Naming Conventions

- Task folders: `task-01`, `task-02`, etc.
- Data files: descriptive names like `faculty.json`, `research-data.json`
- Keep filenames lowercase with hyphens
- Use consistent date format: `YYYY-MM-DD`

## Publishing Updates

### To GitHub Pages

```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

Changes will appear on GitHub Pages within 1-5 minutes.

### Testing Locally First

Before pushing:
1. Open `index.html` in browser
2. Test all task links
3. Verify data displays correctly
4. Test export functions
5. Check responsive design on mobile

## Common Update Scenarios

### Scenario 1: Task Completed

1. Update task status in `config.json`: `"status": "Completed"`
2. Update statistics: increment `completedTasks`, decrement `inProgressTasks`
3. Update `lastUpdated` date
4. Commit and push

### Scenario 2: Adding More Data to Existing Task

1. Edit `tasks/task-XX/data/[filename].json`
2. Add new entries to the array
3. Add corresponding source references if needed
4. Update `lastUpdated` date
5. Commit and push

### Scenario 3: Starting New Academic Period

1. Review all task statuses
2. Archive completed tasks (change status to "Archived")
3. Add new tasks as needed
4. Update statistics
5. Update mentor information if changed
6. Commit and push

## Troubleshooting

### Dashboard Not Updating

- Clear browser cache (Ctrl+F5)
- Check `config.json` for syntax errors
- Verify file paths are correct

### Data Not Displaying

- Validate JSON syntax at jsonlint.com
- Check browser console for errors
- Verify file paths match configuration

### Export Not Working

- Check if CDN libraries are loading
- Test in different browser
- Verify data structure matches export function

## Backup Strategy

Recommended backup schedule:
1. Commit to Git after every significant change
2. Create tags for major milestones: `git tag v1.0`
3. Keep local copies of data files
4. Export important datasets to Excel/CSV regularly

## Version Control Tips

### Good Commit Messages

```bash
git commit -m "Add Task 02: Literature Review Compilation"
git commit -m "Update Task 01: Add 15 new faculty entries"
git commit -m "Fix: Correct IIT Delhi department name"
git commit -m "Update statistics for Q4 2026"
```

### Branching (Optional)

For major changes:
```bash
git checkout -b task-03-development
# Make changes
git commit -m "Draft Task 03 structure"
git checkout main
git merge task-03-development
```

## Getting Help

If you encounter issues:
1. Check browser console for error messages
2. Validate JSON files for syntax errors
3. Review this documentation
4. Check DEPLOYMENT.md for deployment issues
5. Refer to README.md for overall structure

---

*Last Updated: 01 October 2026*
