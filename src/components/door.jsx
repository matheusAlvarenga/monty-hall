import styles from '../styles/door.module.css'

const Door = (props) => {
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${props.selected ? styles.selected : ''}`}>
        <div className={styles.door}>
          <div className={`${styles.number} ${props.selected ? styles.selected_number : ''}`}>3</div>
          <div className={`${styles.knob} ${props.selected ? styles.selected_knob : ''}`}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door