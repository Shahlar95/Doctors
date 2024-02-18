import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './_DoctorsAbout.module.scss'

function DoctorsAbout() {
    const [post, setPost] = useState(null)
    const { doctorId } = useParams()
    const [error, setError] = useState()


    const API_URL = 'http://localhost:7777/doctors'

    const getPost = async () => {
        // setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/${doctorId}`)
            if (!res.ok) {
                throw (console.log('response not okay'))
            }
            const data = await res.json()
            setPost(data)
        } catch (error) {
            setError(error)
        }
        // setIsLoading(false)

    }

    useEffect(() => {
        getPost()
    }, [])

    console.log(post);


    return (
        <>
            {post ? (
                <div className='col'>
                    <div className={styles.card}>
                        <div className={styles.inner}>
                            <div className={styles.img}>
                                <img src={post.image} alt="image" />
                            </div>
                            <div className={styles.content}>
                                <h2>{post.name}</h2>
                                <h4>{post.profession}</h4>
                                <p>{post.about}</p>

                            </div>
                        </div>
                    </div>
                </div>
            ) : <h2>Loading</h2>}
        </>
    )
}

export default DoctorsAbout