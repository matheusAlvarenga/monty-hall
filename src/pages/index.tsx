import Card from "../components/card";
import styles from '../styles/index.module.css'
import Link from 'next/link'
import NumericInput from "../components/numericInput";
import { useState } from "react";

export default function Home() {
  const [doorsNumber, setDoorsNumber] = useState(0)
  const [doorsWithGift, setWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericInput value={doorsNumber} text="Doors Number" onChange={setDoorsNumber}></NumericInput>
        </Card>
      </div>
      <div>
        <Card>
          <NumericInput value={doorsWithGift} text="Door with Gift" onChange={setWithGift}></NumericInput>
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${doorsNumber}/${doorsWithGift}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
