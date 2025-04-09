import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Tasklist = () => {
  const [tasks, setTasks] = useState({
    todo: ['task1', 'task2'],
    inProgress: ['task3'],
    done: ['task4'],
    workZone: ['task5']
  });

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (section) => {
    if (newTask.trim()) {
      setTasks({
        ...tasks,
        [section]: [...tasks[section], newTask]
      });
      setNewTask('');
    }
  };

  // تعريف أنماط CSS ككائنات JavaScript
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '300px',
      margin: '20px auto',
      padding: '25px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    timeDisplay: {
      textAlign: 'right',
      fontSize: '14px',
      color: '#666',
      marginBottom: '15px'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '25px',
      fontSize: '22px',
      fontWeight: '600'
    },
    sectionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    taskSection: {
      backgroundColor: 'white',
      padding: '18px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
    },
    sectionTitle: {
      fontSize: '16px',
      color: '#444',
      marginTop: '0',
      marginBottom: '15px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    taskItems: {
      minHeight: '60px',
      marginLeft: '10px'
    },
    taskItem: {
      backgroundColor: '#91A8C687',
      padding: '10px 12px',
      marginBottom: '10px',
      borderRadius: '6px',
      fontSize: '14px',
      color: '#333'
    },
    timer: {
      textAlign: 'center',
      marginTop: '25px',
      fontSize: '18px',
      color: '#333',
      fontWeight: 'bold'
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px'
    },
    taskInput: {
      flex: '1',
      padding: '10px',
      borderRadius: '20px',
      border: '1px solid #ddd',
      backgroundColor: '#91A8C687',
      outline: 'none',
      marginRight: '8px'
    },
    addButton: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: '#004AAD',
      color: 'white',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.timeDisplay}>9:41</div>
      
      <h1 style={styles.title}>Task list</h1>
      
      <div style={styles.sectionsContainer}>
        {/* TO DO Section */}
        <div style={styles.taskSection}>
          <h2 style={styles.sectionTitle}>TO DO</h2>
          <div style={styles.taskItems}>
            {tasks.todo.map((task, index) => (
              <div key={`todo-${index}`} style={styles.taskItem}>{task}</div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
              style={styles.taskInput}
            />
            <button 
              style={styles.addButton}
              onClick={() => handleAddTask('todo')}
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
        
        {/* In Progress Section */}
        <div style={styles.taskSection}>
          <h2 style={styles.sectionTitle}>In progress</h2>
          <div style={styles.taskItems}>
            {tasks.inProgress.map((task, index) => (
              <div key={`progress-${index}`} style={styles.taskItem}>{task}</div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
              style={styles.taskInput}
            />
            <button 
              style={styles.addButton}
              onClick={() => handleAddTask('inProgress')}
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
        
        {/* Done Section */}
        <div style={styles.taskSection}>
          <h2 style={styles.sectionTitle}>done</h2>
          <div style={styles.taskItems}>
            {tasks.done.map((task, index) => (
              <div key={`done-${index}`} style={styles.taskItem}>{task}</div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
              style={styles.taskInput}
            />
            <button 
              style={styles.addButton}
              onClick={() => handleAddTask('done')}
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
        
        {/* Work Zone Section */}
        <div style={styles.taskSection}>
          <h2 style={styles.sectionTitle}>work zone</h2>
          <div style={styles.taskItems}>
            {tasks.workZone.map((task, index) => (
              <div key={`workzone-${index}`} style={styles.taskItem}>{task}</div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
              style={styles.taskInput}
            />
            <button 
              style={styles.addButton}
              onClick={() => handleAddTask('workZone')}
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
      </div>
      
      <div style={styles.timer}>Timer 00:00</div>
    </div>
  );
};

export default Tasklist;