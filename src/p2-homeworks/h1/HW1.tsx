import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://cs5.pikabu.ru/post_img/big/2015/07/12/8/1436703744_1511687577.jpg",
  name: "Some Name",
  message:
    "some text dawdad  awdawdadd dd dd aaawawe adawdawdadj kjwdhkajdh akwjdh kk jwadh",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
