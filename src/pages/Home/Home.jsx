import React from 'react'
import Input from '../../components/ui/Input'
import Card from '../../components/Cards/Card'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from './_Home.module.scss'

function Home() {

    const [posts, setPosts] = useState(null)
    const [change, setChange] = useState('')
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [more, setMore] = useState(4)
    const [isBtn, setIsBtn] = useState(false)
    const [selectedProfession, setSelectedProfession] = useState('');
    
   


    const API_URL = 'https://json-server-for-for-vercel.vercel.app'

    const getPosts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/doctors`)
            if (!res.ok) {
                throw (console.log('response not okay'))
            }
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)

    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleChange = (e) => {

        setChange(e.target.value)
    }

    if (error) {
        return <h2>404 not found</h2>
    }
    
    const handleMoreClick =() =>{
        const postCount = posts.length  - more
            console.log(postCount);
        if(postCount > 0 ){
            setMore(count => count + 4)

        }
        
        else{
            setIsBtn(true)

        }
    }
    const handleProfessionChange = (e) => {
       
        
      
        setSelectedProfession(e.target.value);
        if (e.target.value === 'Butun Hekimler') {
            setSelectedProfession('')
        }
      };
    

    
 
    return (
        <>
           

            <Input  
            onProfessionChange={handleProfessionChange}
             onChange={handleChange} 
             value={change} posts={posts} />
           
            <section className={styles.doctors}>
                <div className='container'>
                    <div className='row g-5'>
                        {!isLoading ?
                           ( posts && posts.slice(0,more) .filter(post => {
                                return post.name.toLowerCase().includes(change.toLowerCase()) ||
                                    post.profession.toLowerCase().includes(change.toLowerCase())
                            })
                            .filter(item => {
                                return item.profession.toLowerCase().includes(selectedProfession.toLocaleLowerCase())
                            })
                            .map((post) => {
                                return (
                                    <Card key={post.id} post={post} />
                                )
                            }))
                            : <h1>LOADING  ...</h1>}
                    </div>
                    <div className={`${styles.more} ${isBtn ? styles.passiv : null }`}>
                        <button onClick={handleMoreClick}> MORE</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home