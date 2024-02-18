import React, { useState } from 'react'
import styles from './_Input.module.scss'

function Input({onChange, value, posts,onProfessionChange }) {

  console.log();

  return (
    <>
    <section className={styles.enter} >
      <div className="container">
     <div className={styles.search}>
     <select name="" id="" onChange={onProfessionChange}>
      <option>Butun Hekimler</option>
         { posts ? posts.map(item => {

           return <option  key={item.id} value={item.profession}>{item.profession}</option>

          }) : <option>Loading...</option>}
        </select>
        <input type="text" onChange={onChange} value={value}/>
     </div>
      </div>
    </section>
    </>
  )
}

export default Input