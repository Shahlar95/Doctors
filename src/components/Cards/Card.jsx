import React from 'react'
import styles from './_Card.module.scss'
import { Link } from 'react-router-dom'

function Card({post}) {

   
    const {image,name,profession,about,id} = post
    
  return (
    <>
    <div className="col-lg-6">
        <div className={styles.card}>
        <div className={styles.inner}>
            <div className={styles.img}>
                <img src={image} alt="image" />
            </div>
            <div className={styles.content}>
                <h2>{name}</h2>
                <h4>{profession}</h4>
                <p>{about.slice(0,100)}... </p>
                <Link to={`${id}`}><button>Ətraflı</button></Link>
            </div>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Card