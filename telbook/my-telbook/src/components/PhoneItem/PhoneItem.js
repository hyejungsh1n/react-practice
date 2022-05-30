import React from "react";
import "./PhoneItem.scss";


const PhoneItem = ()=> {
    return (
        <div className="phone_item">
        <div className="phone_item_left">
          <div className="phone_item_name">홍길동</div>
          <div className="phone_item_phone">010-0000-0000</div>
        </div>
        <div className="phone_item_right">
          <button>삭제</button>
        </div>
      </div>

    )
}

export default PhoneItem;