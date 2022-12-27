import React, { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
/*
  클래스/함수 컴포넌트(용도별로 2가지 케이스)
  내용 출력 전용, 데이터관리 용도

  클래스 형식으로 제작되는 것 class : TypeScript
  state 를 리랜더링(Re-rendering)
  Life-cycle : Mounte, Update, unMount...

  함수 형식으로 제작되는 것 function
  state 를 못쓰므로 화면 갱신 어렵다.
  useState() state 변경가능
  -------------------------
  Life-cycle 을 지원 안한다.
  useEffect() Life-cycle 체크가능

 */

export default function App() {
  const [todoValue, setTodoValue] = useState("");

  const [todoData, setTodoData] = useState([
    { id: 1, title: "할일 1", completed: false },
    { id: 2, title: "할일 2", completed: true },
    { id: 3, title: "할일 3", completed: false },
    { id: 4, title: "할일 4", completed: false },
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    // todoData는 배열이고 배열의 요소들은 위처럼 구성해야하니까
    // {}로 만들어줌
    // 그래야 .map을 통해서 규칙적인 jsx를 리턴할 수 있으니까
    const addTodo = {
      // id값은 배열.map의 key로 활용예정, unique 값만들려고
      id: Date.now(),
      // 할 일 입력창의 내용을 추가
      title: todoValue,
      // 할 일이 추가될 때 아직 완료한 것은 아니다
      completed: false,
    };
    // 새로운 할 일을 일단 복사하고, 복사된 배열에 추가하여서 업데이트
    // 기존 할 일을 Destructuring 하여서 복사본 만듦
    // todoData: [{},{},{}]
    setTodoData([...todoData, addTodo]);
    // 새로운 할 일을 추가했으므로 내용입력창 초기화
    setTodoValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="w-full p-[100px] m-[400] bg-white rounded shadow lg:w-3/4">
        <div className="">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}
