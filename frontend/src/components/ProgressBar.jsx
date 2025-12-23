const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-label">Task Completion</span>
        <span className="progress-stats">{completed} of {total} tasks</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        >
          <span className="progress-text">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
