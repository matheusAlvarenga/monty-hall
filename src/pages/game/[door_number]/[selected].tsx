import { useEffect, useState } from "react"
import Door from "../../../components/door"
import Gift from "../../../components/gift"
import { changeDoorState, createDoorsArray } from "../../../functions/doors"
import DoorModel from "../../../model/door"
import styles from '../../../styles/game.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Game = () => {
  const {query: { door_number, selected }, push} = useRouter()

  const [doors, setDoors] = useState([])

  useEffect(() => {
    if(+door_number < 3 || +door_number > 100 || +selected < 1 || +selected > +door_number )
      push('/')

    setDoors(createDoorsArray(+door_number, +selected))
  },[door_number, selected])

  const renderDoors = () => {
    return doors.map((door: DoorModel) => <Door key={door.number} door={door} onChange={(door) => setDoors(changeDoorState(doors, door))}></Door>)
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Game