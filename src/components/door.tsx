import styles from '../styles/door.module.css'
import DoorModel from '../model/door'

interface DoorProps {
  door: DoorModel
}

const Door = ({ door }: DoorProps) => {
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${door.selected ? styles.selected : ''}`}>
        <div className={styles.door}>
          <div className={
            `${styles.number} ${door.selected ? styles.selected_number : ''}`
          }>
            {door.number}
            </div>
          <div className={`${styles.knob} ${door.selected ? styles.selected_knob : ''}`}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door