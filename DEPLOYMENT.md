# Deployment Guide

## GitHub Pages Deployment

### Initial Setup

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Academic research dashboard"
   git branch -M main
   git remote add origin https://github.com/[username]/IIT-Patna-Academic-Research-Work.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be published at: `https://[username].github.io/IIT-Patna-Academic-Research-Work/`

### Configuration for GitHub Pages

The project is configured to work immediately with GitHub Pages. No build process required.

### Custom Domain (Optional)

1. In repository settings, under "Pages", add your custom domain
2. Create a `CNAME` file in the root with your domain:
   ```
   research.example.com
   ```
3. Configure DNS records with your domain provider

## Local Development

### Running Locally

Simply open `index.html` in a web browser. For a better development experience with live reload:

1. **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Visit: `http://localhost:8000`

2. **Using Node.js:**
   ```bash
   npx http-server
   ```

3. **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## Updating Content

### Adding New Tasks

1. **Update config.json**
   ```json
   {
     "tasks": [
       {
         "id": "02",
         "title": "New Task Title",
         "status": "Not Started",
         "referenceDate": "2026-10-15",
         "assignedBy": "Dr. Priyanka Tripathi",
         "description": "Task description",
         "path": "tasks/task-02",
         "datasetType": "Dataset Type"
       }
     ]
   }
   ```

2. **Create Task Folder**
   ```bash
   cp -r tasks/task-template tasks/task-02
   ```

3. **Customize Task Files**
   - Edit `tasks/task-02/index.html`
   - Edit `tasks/task-02/README.md`
   - Add data files in `tasks/task-02/data/`

4. **Update Statistics**
   ```json
   {
     "statistics": {
       "totalTasks": 3,
       "completedTasks": 1,
       "inProgressTasks": 2
     }
   }
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add Task 02"
   git push
   ```

### Updating Task Data

1. Edit data files in `tasks/task-[number]/data/`
2. Maintain the required field structure
3. Update sources in `tasks/task-[number]/sources.json`
4. Commit and push changes

### Updating Last Modified Date

Edit `config.json`:
```json
{
  "project": {
    "lastUpdated": "2026-10-15"
  }
}
```

## Maintenance

### Regular Updates

1. Review and update task statuses
2. Add new research data as collected
3. Update source references
4. Maintain consistent data formatting

### Backup

Regularly backup:
- All JSON data files
- Custom modifications to HTML/CSS
- Source references and documentation

### Version Control Best Practices

- Commit data changes separately from code changes
- Use descriptive commit messages
- Tag major milestones:
  ```bash
  git tag -a v1.0 -m "Task 01 completed"
  git push origin v1.0
  ```

## Troubleshooting

### Pages Not Updating

- Check GitHub Actions tab for deployment status
- Clear browser cache
- Wait 5-10 minutes for propagation

### Data Not Loading

- Verify JSON syntax using a validator
- Check browser console for errors
- Ensure file paths are correct and case-sensitive

### Export Not Working

- Ensure CDN libraries are loading:
  - SheetJS for Excel
  - jsPDF for PDF
- Check browser console for errors
- Test with different browsers

## Security

- Never commit sensitive data
- Use `.gitignore` to exclude private files
- Review data before making repository public
- Keep source URLs accessible and valid

## Support

For technical issues:
1. Check browser console for errors
2. Verify JSON file syntax
3. Test in different browsers
4. Review GitHub Pages deployment logs

---

*Last Updated: 01 October 2026*
