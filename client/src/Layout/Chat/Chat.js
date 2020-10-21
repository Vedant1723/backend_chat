import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [hello, setHello] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState([]);
  const [mess, setMess] = useState("");
  const [userName, setName] = useState("");
  // const socket = io(ENDPOINT);
  // useEffect(() => {
  //   loadData();
  // }, []);
  // const loadData = () => {
  //   socket.on("message", function (data) {
  //     setHello(data);
  //   });
  //   socket.on("msg1", (data) => {
  //     setMsg(data);
  //   });
  //   socket.on("msg2", (data) => {
  //     setMess(data);
  //   });
  // };
  const addUser = async () => {
    const formData = {
      name: userName,
    };
    // socket.emit("addUser", userName);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/client", formData, config);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {" "}
      <p id="hello">{hello}</p>
      <div>{msg}</div>
      <div>{mess}</div>
      <input
        id="userName"
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your userName!"
      />
      <button type="button" name="button" onClick={addUser}>
        Let me chat!
      </button>
    </div>
  );
};
export default Chat;
