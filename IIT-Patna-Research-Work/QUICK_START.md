# Quick Start Guide

Get your academic research dashboard up and running in minutes.

## Immediate Use (Local)

1. **Download/Clone** this repository
2. **Open** `index.html` in your web browser
3. **Done!** The dashboard is fully functional

No installation, no build process, no dependencies.

## Deploy to GitHub Pages

### First Time Setup (5 minutes)

1. **Create GitHub repository** named `IIT-Patna-Academic-Research-Work`

2. **Upload files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/IIT-Patna-Academic-Research-Work.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Select "main" branch
   - Click Save

4. **Access your site:**
   `https://YOUR-USERNAME.github.io/IIT-Patna-Academic-Research-Work/`

## Your First Update

### Add Real Research Data

Edit `tasks/task-01/data/faculty.json`:

```json
[
  {
    "iitName": "IIT Bombay",
    "department": "Department of HSS",
    "facultyName": "Your First Entry",
    "designation": "Professor",
    "subjectArea": "Economics"
  }
]
```

Save and refresh - data appears immediately!

### Update Dashboard Statistics

Edit `config.json`:

```json
{
  "statistics": {
    "totalTasks": 2,
    "completedTasks": 0,
    "inProgressTasks": 1,
    "notStartedTasks": 1
  },
  "project": {
    "lastUpdated": "2026-10-01"
  }
}
```

## Add Your Second Task

1. **Copy template:**
   ```bash
   cp -r tasks/task-template tasks/task-02
   ```

2. **Add to config.json:**
   ```json
   {
     "tasks": [
       {
         "id": "02",
         "title": "Your Task Title",
         "status": "Not Started",
         "referenceDate": "2026-10-15",
         "assignedBy": "Dr. Priyanka Tripathi",
         "description": "Task description here",
         "path": "tasks/task-02",
         "datasetType": "Your Dataset Type"
       }
     ]
   }
   ```

3. **Customize** `tasks/task-02/index.html` and `README.md`

4. **Refresh** - new task appears automatically!

## Key Files

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `config.json` | Central configuration | Every change |
| `tasks/task-XX/data/*.json` | Research data | As collected |
| `tasks/task-XX/sources.json` | Source references | With data |
| `index.html` | Homepage | Rarely |

## Essential Features

### Search & Filter
Type in the search box on any task page - instant filtering across all columns.

### Export Data
Click buttons on task pages:
- **Excel** - Full spreadsheet with formatting
- **CSV** - Raw data for analysis
- **PDF** - Academic report format
- **Print** - Optimized print layout

### Sort Data
Click any column header to sort ascending/descending.

### Mobile Friendly
Works perfectly on phones and tablets.

## File Structure

```
IIT-Patna-Academic-Research-Work/
├── index.html           ← Homepage
├── config.json          ← Main settings (UPDATE THIS OFTEN)
├── tasks/
│   ├── task-01/         ← First task
│   │   ├── index.html
│   │   └── data/
│   │       └── faculty.json  ← Your research data
│   └── task-template/   ← Copy this for new tasks
└── assets/              ← Styles and scripts (rarely change)
```

## What to Update

### Every Time You Add Data
- Task data files (`tasks/task-XX/data/*.json`)
- Source references (`tasks/task-XX/sources.json`)
- Last updated date in `config.json`

### When Starting New Tasks
- Add task entry in `config.json`
- Copy and customize task template
- Update statistics in `config.json`

### When Tasks Complete
- Change task status in `config.json`
- Update statistics (completed count)
- Update last modified date

## Common Tasks

### Change Task Status
```json
// In config.json
{
  "tasks": [
    {
      "id": "01",
      "status": "Completed"  // Change this
    }
  ]
}
```

### Add Source Reference
```json
// In tasks/task-XX/sources.json
[
  {
    "iitName": "IIT Name",
    "title": "Faculty Directory",
    "url": "https://official-source.com",
    "type": "Official Website",
    "accessDate": "2026-10-01"
  }
]
```

### Update Mentor
```json
// In config.json
{
  "mentor": {
    "name": "Dr. New Name",
    "title": "New Title",
    "department": "New Department",
    "institution": "IIT Patna"
  }
}
```

## Tips

1. **Always validate JSON** - Use jsonlint.com before committing
2. **Test locally first** - Open index.html before pushing
3. **Commit often** - Small, frequent commits are better
4. **Use descriptive messages** - "Add 10 IIT Bombay faculty entries"
5. **Keep backups** - Export data to Excel regularly

## Getting Help

- **Full documentation:** See `README.md`
- **Deployment help:** See `DEPLOYMENT.md`
- **Update instructions:** See `UPDATE_INSTRUCTIONS.md`
- **Browser errors:** Press F12 to see console

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ✅ Add your first real data
3. ✅ Customize task descriptions
4. ✅ Share with your team
5. ✅ Start second task when ready

---

**You're ready to go!** Start adding your research data and the dashboard will update automatically.
