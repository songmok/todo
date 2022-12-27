import React from "react";

const Form = ({ todoValue, setTodoValue, addTodo }) => {
  const addTodoSubmit = (event) => {
    // console.log(event.target.value);
    setTodoValue(event.target.value);
  };
  return (
    <div>
      <from style={{ display: "flex" }}>
        <input
          style={{ flex: "10" }}
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={addTodoSubmit}
        />
        <input
          style={{ flex: "1" }}
          type="submit"
          onClick={addTodo}
          onSubmit={addTodo}
        />
      </from>
    </div>
  );
};

export default Form;
