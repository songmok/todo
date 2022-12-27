import React from "react";

const List = ({ todoData, setTodoData }) => {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  const deleteClick = (id) => {
    // 클릭된 ID 와 다른 요소들만 걸러서 새로운 배열 생성
    const nowTodo = todoData.filter((item) => item.id !== id);
    // console.log("클릭", nowTodo);
    setTodoData(nowTodo);
  };
  const toggleClick = (id) => {
    // map 을 통해서 todoData의 complete를 업데이트해보자
    const updateTodo = todoData.map((item) => {
      if (item.id === id) {
        // if(item.id === true) {
        //   item.completed = false;
        // }else{
        //   item.completed = true;
        // }
        item.completed = !item.completed;
      }

      return item;
    });
    setTodoData(updateTodo);
  };
  return (
    <div className="w-full px-4 py-1my2 text-gray-50" border rounded>
      {todoData.map((item) => (
        // item = { id: 1, title: "할일 1", completed: false },
        // item = { id: 2, title: "할일 2", completed: false },
        // item = { id: 3, title: "할일 3", completed: false },
        // item = { id: 4, title: "할일 4", completed: false },
        <div style={getStyle(item.completed)} key={item.id}>
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={() => toggleClick(item.id)}
          />
          <div className={"item.contex" ? "link-through" : "none"}></div>
          {item.title}
          <button onClick={() => deleteClick(item.id)}>x</button>x
        </div>
      ))}
    </div>
  );
};

export default List;
