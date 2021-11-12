import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../services/Socket";
import { useRecoilState } from "recoil";
import {BrowserRouter as Router, Route, Redirect, useHistory} from "react-router-dom";
import { roomIdState, playersState } from "../services/Atoms";
import Timer from '../services/Timer';


function Role(){
  // SocketContext
  const socket = useContext(SocketContext);
  // room id
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  // Timer duration
  const [duration, setDuration] = useState();

  
  useEffect(() => {
    // Receive timer duration from server 
    socket.on("startTimer", pageTime => {
      setDuration(pageTime);
      console.log(pageTime);
    })
  });


  return (
      <>
      <div className="introduction text-orange font-spooky"> 
        <h1 className="text-center text-large">
        Wolves have infiltrated the town!<br></br>
        The wolves will kill once night falls.<br></br>
        The town's destiny depends on the villagers!<br></br>
        Everyone will vote to kick out someone once day breaks.<br></br>
        Don't trust anyone with your identity!<br></br> Good luck!
        </h1> 
        <h2 className="text-center text-large">
        Timer:
        <Timer pageDuration = {duration}></Timer>
        </h2> 
      </div>
      </>
  )
}
export default Role;