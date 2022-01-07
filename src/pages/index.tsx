import { useState } from "react";
import Door from "../components/door";
import Gift from "../components/gift";
import DoorModel from "../model/door";

export default function Home() {
  const [door1, setDoor1] = useState(new DoorModel(1))

  return (
    <div>
      <Gift></Gift>
      <Door door={door1}></Door>
    </div>
  )
}
