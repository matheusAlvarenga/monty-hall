import { useState } from "react";
import Door from "../components/door";
import Gift from "../components/gift";
import { changeDoorState, createDoorsArray } from "../functions/doors";
import DoorModel from "../model/door";

export default function Home() {
  const [doors, setDoors] = useState(createDoorsArray(3, 2))

  const renderDoors = () => {
    return doors.map((door: DoorModel) => <Door key={door.number} door={door} onChange={(door) => setDoors(changeDoorState(doors, door))}></Door>)
  }

  return (
    <div>
      <Gift></Gift>
      {renderDoors()}
    </div>
  )
}
