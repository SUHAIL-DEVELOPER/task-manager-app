const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  const priorityColors = {
    low: 'priority-low',
    medium: 'priority-medium',
    high: 'priority-high'
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
          id={`task-${task._id}`}
        />
        <label htmlFor={`task-${task._id}`} className="checkbox-custom"></label>
      </div>
      
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <div className="task-meta">
          <span className={`priority-badge ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          {task.dueDate && (
            <span className={`due-date ${isOverdue ? 'overdue' : ''}`}>
              📅 {formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          className="btn-icon" 
          onClick={() => onEdit(task)}
          title="Edit task"
        >
          ✏️
        </button>
        <button 
          className="btn-icon btn-delete" 
          onClick={() => onDelete(task._id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
