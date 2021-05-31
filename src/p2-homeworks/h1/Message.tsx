import React from "react";
import s from "./Message.module.css";

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

const Message: React.FC<MessageType> = ({ avatar, name, message, time }) => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={avatar} alt="User" />
      </div>
      <div className={s.angle} />
      <div className={s.message}>
        <div className={s.main}>
          <div className={s.name}>{name}</div>
          <div className={s.text}>{message}</div>
        </div>
        <div className={s.time}>
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
