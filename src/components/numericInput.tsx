import styles from '../styles/numericInput.module.css'

interface NumericInputProps {
  text: string,
  value: number,
  onChange: (value: number) => void
}

const NumericInput = ({ value, onChange, text }: NumericInputProps) => {
  return (
    <div className={styles.input}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => {onChange(value - 1)}}>-</button>
        <button className={styles.button} onClick={() => {onChange(value + 1)}}>+</button>
      </div>
    </div>
  )
}

export default NumericInput