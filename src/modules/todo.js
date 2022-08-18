const toDoListData = () => JSON.parse(window.localStorage.getItem('taskData') || '[]');
export default toDoListData;