import styles from '../styles/door.module.css'
import DoorModel from '../model/door'
import Gift from './gift'

interface DoorProps {
  door: DoorModel,
  onChange: (newDoor: DoorModel) => void
}

const Door = ({ door, onChange }: DoorProps) => {

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={
        `${styles.number} ${door.selected ? styles.selected_number : ''}`
      }>
        {door.number}
        </div>
      <div
        onClick={openDoor}
        className={`${styles.knob} ${door.selected ? styles.selected_knob : ''}`}
      ></div>
    </div>
  )

  const selectDoor = e => onChange(door.selectDoor())

  const openDoor = e => {
    e.stopPropagation()
    return onChange(door.openDoor())
  }

  return (
    <div className={styles.area} onClick={selectDoor}>
      <div className={`${styles.frame} ${door.selected ? styles.selected : ''}`}>
        {
          !door.open
          ? renderDoor()
          : door.hasGift
          ? <Gift></Gift>
          : ''
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door