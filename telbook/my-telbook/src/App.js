import React from "react";
import "./App.css";

// class component 강의를 들어서 이렇게 되어 있음 

function App() {
  return (
    <div className="container">


      <div className="phone_list">
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;