
import React, { useEffect, useState } from 'react'
import styles from './_Car.module.scss'




function Car() {
    const [carImage, setCarImage] = useState()
    const [carInput, setCarInput] = useState('')
    const [err, setErr] = useState(false)

    const API_IMG = 'http://source.unsplash.com/random?'

    const handleCarChange = (e)=>{
        setCarInput(e.target.value)
    }
    
    const handleCarSubmit  = (e) =>{
        e.preventDefault()
        setCarImage(`${API_IMG}/${carInput}`)
        setCarInput('')
       
    }
    useEffect(() => {
        if (carInput =="") {
          setErr(true);
        } else {
          setErr(false);
        }
      }, []);
  
  return (
    <div className={styles.car}>
        <div className={styles.img}>
        <img src={carImage ?  carImage : 'https://images.cnbctv18.com/wp-content/uploads/2023/02/04-BUGATTI_CHIRON-Profilee-1-780x438.jpg'} alt="car" />
        </div>  
        <div className={styles.text}>
            <input type="text" className={err ? styles.empty : null} onChange={handleCarChange} value={carInput}/>
        <button type='submit' onClick={handleCarSubmit}>Get Car</button>
        </div>
    </div>
  )
}

export default Car