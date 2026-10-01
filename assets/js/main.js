// Load configuration and populate dashboard
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        const config = await response.json();
        
        // Update statistics
        document.getElementById('totalTasks').textContent = String(config.statistics.totalTasks).padStart(2, '0');
        document.getElementById('completedTasks').textContent = String(config.statistics.completedTasks).padStart(2, '0');
        document.getElementById('inProgressTasks').textContent = String(config.statistics.inProgressTasks).padStart(2, '0');
        
        // Format date
        const lastUpdated = new Date(config.project.lastUpdated);
        const formattedDate = lastUpdated.toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
        });
        document.getElementById('lastUpdated').textContent = formattedDate;
        
        // Update mentor information
        document.getElementById('mentorName').textContent = config.mentor.name;
        document.getElementById('mentorTitle').textContent = config.mentor.title;
        document.getElementById('mentorDept').textContent = config.mentor.department;
        document.getElementById('mentorInst').textContent = config.mentor.institution;
        
        // Load tasks
        loadTasks(config.tasks);
    } catch (error) {
        console.error('Error loading configuration:', error);
    }
}

// Load and display tasks
function loadTasks(tasks) {
    const tasksGrid = document.getElementById('tasksGrid');
    tasksGrid.innerHTML = '';
    
    tasks.forEach(task => {
        const taskCard = createTaskCard(task);
        tasksGrid.appendChild(taskCard);
    });
}

// Create task card element
function createTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    
    const statusClass = getStatusClass(task.status);
    const formattedDate = formatDate(task.referenceDate);
    
    card.innerHTML = `
        <div class="task-header">
            <span class="task-id">TASK ${task.id}</span>
            <span class="task-status ${statusClass}">${task.status}</span>
        </div>
        <h3 class="task-title">${task.title}</h3>
        <div class="task-meta">
            <span class="task-meta-item"><strong>Reference Date:</strong> ${formattedDate}</span>
            <span class="task-meta-item"><strong>Assigned By:</strong> ${task.assignedBy}</span>
        </div>
        <p class="task-description">${task.description}</p>
        <a href="${task.path}/index.html" class="task-button">
            Open Task →
        </a>
    `;
    
    return card;
}

// Get status CSS class
function getStatusClass(status) {
    const statusMap = {
        'In Progress': 'status-in-progress',
        'Completed': 'status-completed',
        'Not Started': 'status-not-started',
        'Under Review': 'status-under-review'
    };
    return statusMap[status] || 'status-not-started';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadConfig);
