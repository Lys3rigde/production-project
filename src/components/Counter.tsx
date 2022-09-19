import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count+ 1)
  const decrement = () => setCount(count - 1)


  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}
