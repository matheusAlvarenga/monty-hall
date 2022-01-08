import styles from '../styles/card.module.css'

interface CardProps {
  bgColor?:string,
  children?: any
}

const Card = ({ bgColor, children }: CardProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor ?? '#fff' }}
      className={styles.card}
    >
      {children}
    </div>
  )
}

export default Card