import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'اجتماع فريق العمل', date: new Date(2023, 10, 15, 10, 0), color: '#4CAF50' },
    { id: 2, title: 'عرض تقديمي للعميل', date: new Date(2023, 10, 18, 14, 30), color: '#2196F3' },
    { id: 3, title: 'مراجعة المشروع', date: new Date(2023, 10, 20, 9, 0), color: '#FF9800' },
  ]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', color: '#4CAF50' });
  const [editingEvent, setEditingEvent] = useState(null);
  const [recentEvents, setRecentEvents] = useState([]);

  // أنماط CSS مضمنة
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'relative'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    monthSelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: '#3e8e41'
      }
    },
    calendarGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '10px',
      marginBottom: '20px'
    },
    dayHeader: {
      textAlign: 'center',
      padding: '10px',
      backgroundColor: '#f5f5f5',
      fontWeight: 'bold'
    },
    dayCell: {
      minHeight: '100px',
      padding: '8px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      backgroundColor: 'white'
    },
    inactiveDay: {
      color: '#bdbdbd',
      backgroundColor: '#f9f9f9'
    },
    today: {
      backgroundColor: '#e8f5e9',
      fontWeight: 'bold'
    },
    event: {
      fontSize: '12px',
      padding: '4px',
      marginBottom: '4px',
      borderRadius: '3px',
      color: 'white',
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    eventFormOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    eventForm: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      width: '90%',
      maxWidth: '400px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    formLabel: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    formInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxSizing: 'border-box'
    },
    colorOptions: {
      display: 'flex',
      gap: '10px',
      marginTop: '5px'
    },
    colorOption: {
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      cursor: 'pointer',
      border: '2px solid transparent'
    },
    selectedColor: {
      border: '2px solid #333'
    },
    currentMonth: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    recentEventsBox: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '15px',
      marginTop: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    recentEventsTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333'
    },
    eventItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
      marginBottom: '8px',
      borderRadius: '4px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    eventActions: {
      display: 'flex',
      gap: '8px'
    },
    editButton: {
      backgroundColor: '#2196F3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer'
    },
    deleteButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer'
    }
  };

  // الحصول على اسم الشهر والسنة الحالية
  const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  // تغيير الشهر
  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  // إنشاء أيام التقويم
  const renderDays = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    const today = new Date();
    const isToday = (day) => {
      return day === today.getDate() && 
             currentDate.getMonth() === today.getMonth() && 
             currentDate.getFullYear() === today.getFullYear();
    };

    let days = [];
    
    // أيام الشهر السابق
    const prevMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} style={{...styles.dayCell, ...styles.inactiveDay}}>
          {prevMonthEnd - i}
        </div>
      );
    }

    // أيام الشهر الحالي
    for (let i = 1; i <= daysInMonth; i++) {
      const dayEvents = events.filter(event => 
        event.date.getDate() === i && 
        event.date.getMonth() === currentDate.getMonth() && 
        event.date.getFullYear() === currentDate.getFullYear()
      );

      days.push(
        <div 
          key={`current-${i}`} 
          style={{
            ...styles.dayCell, 
            ...(isToday(i) ? styles.today : {})
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{i}</div>
          {dayEvents.map(event => (
            <div 
              key={event.id} 
              style={{...styles.event, backgroundColor: event.color}}
              onClick={() => handleEventClick(event)}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }

    // أيام الشهر التالي
    const daysToAdd = 42 - days.length;
    for (let i = 1; i <= daysToAdd; i++) {
      days.push(
        <div key={`next-${i}`} style={{...styles.dayCell, ...styles.inactiveDay}}>
          {i}
        </div>
      );
    }

    return days;
  };

  const handleEventClick = (event) => {
    setEditingEvent(event);
    setNewEvent({
      title: event.title,
      date: event.date.toISOString().split('T')[0],
      time: `${String(event.date.getHours()).padStart(2, '0')}:${String(event.date.getMinutes()).padStart(2, '0')}`,
      color: event.color
    });
    setShowEventForm(true);
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setNewEvent({ title: '', date: '', time: '', color: '#4CAF50' });
    setShowEventForm(true);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const [year, month, day] = newEvent.date.split('-');
    const [hours, minutes] = newEvent.time.split(':');
    const eventDate = new Date(year, month - 1, day, hours, minutes);
    
    if (editingEvent) {
      // تحديث الحدث الموجود
      const updatedEvents = events.map(event => 
        event.id === editingEvent.id ? 
        { ...event, title: newEvent.title, date: eventDate, color: newEvent.color } : 
        event
      );
      setEvents(updatedEvents);
    } else {
      // إضافة حدث جديد
      const newEventObj = {
        id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1,
        title: newEvent.title,
        date: eventDate,
        color: newEvent.color
      };
      setEvents([...events, newEventObj]);
      setRecentEvents(prev => [newEventObj, ...prev].slice(0, 5));
    }
    
    setShowEventForm(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setRecentEvents(recentEvents.filter(event => event.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleColorSelect = (color) => {
    setNewEvent({ ...newEvent, color });
  };

  const closeForm = (e) => {
    if (e.target === e.currentTarget) {
      setShowEventForm(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.monthSelector}>
          <button style={styles.button} onClick={() => changeMonth(-1)}>الشهر السابق</button>
          <div style={styles.currentMonth}>{currentMonth} {currentYear}</div>
          <button style={styles.button} onClick={() => changeMonth(1)}>الشهر التالي</button>
        </div>
        <button style={styles.button} onClick={handleAddEvent}>إضافة حدث</button>
      </div>

      <div style={styles.calendarGrid}>
        {['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map(day => (
          <div key={day} style={styles.dayHeader}>{day}</div>
        ))}
        {renderDays()}
      </div>

      {/* صندوق الأحداث الحديثة */}
      <div style={styles.recentEventsBox}>
        <div style={styles.recentEventsTitle}>الأحداث المضافة حديثاً</div>
        {recentEvents.length === 0 ? (
          <div>لا توجد أحداث مضافة حديثاً</div>
        ) : (
          recentEvents.map(event => (
            <div key={event.id} style={styles.eventItem}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{event.title}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {event.date.toLocaleDateString()} - {event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
              <div style={styles.eventActions}>
                <button 
                  style={styles.editButton}
                  onClick={() => handleEventClick(event)}
                >
                  تعديل
                </button>
                <button 
                  style={styles.deleteButton}
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  حذف
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* نموذج إضافة/تعديل الحدث */}
      {showEventForm && (
        <div style={styles.eventFormOverlay} onClick={closeForm}>
          <div style={styles.eventForm} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>{editingEvent ? 'تعديل الحدث' : 'إضافة حدث جديد'}</h3>
            <form onSubmit={handleEventSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>عنوان الحدث:</label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>التاريخ:</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>الوقت:</label>
                <input
                  type="time"
                  name="time"
                  value={newEvent.time}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>لون الحدث:</label>
                <div style={styles.colorOptions}>
                  {['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336'].map(color => (
                    <div
                      key={color}
                      style={{
                        ...styles.colorOption,
                        backgroundColor: color,
                        ...(newEvent.color === color ? styles.selectedColor : {})
                      }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  type="button" 
                  style={{...styles.button, backgroundColor: '#f44336'}}
                  onClick={() => setShowEventForm(false)}
                >
                  إلغاء
                </button>
                <button type="submit" style={styles.button}>
                  {editingEvent ? 'حفظ التعديلات' : 'حفظ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;