import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styles from './_Time.module.scss'

function Time() {
    const [time, setTime] = useState(new Date())
 
    const timer = setInterval(() => {
        setTime(new Date())
    }, 1000);

    useEffect(() =>{

        timer

    }, [])
  return (
    <div className={styles.hours}>
        <p>{time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:</p> 
        <p>{time.getMinutes() < 10? "0" + time.getMinutes() : time.getMinutes()}:</p>
        <p>{time.getSeconds() < 10?  "0" + time.getSeconds() : time.getSeconds()}:</p>
        <p>{time.getMilliseconds()}</p> 
    </div>
  )
}

export default Time