import React, {useState, useEffect } from 'react'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'
import PostItemAPI from './PostItemAPI'
import css from "./css/Content.module.css"

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])
    
      const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true`)
        const fetchedPosts = response.data.hits
        setIsLoaded(true)
        setPosts(fetchedPosts)
        setSavedPosts(fetchedPosts)
      } 
    
      const handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post) => {
          return post.user.toLowerCase().includes(name)
        })
        setPosts(filteredPosts)
      }
    
        return (
    
          <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Posts</h1>
                <form>
                  <label htmlFor='searchinput'>Search:</label>
                  <input
                    type='search'
                    id='searchinput'
                    placeholder='By Author'
                    onChange={handleChange}
                  />
                  <h4>posts found: {posts.length}</h4>              
                </form>
    
            </div>
            <div className={css.SearchResults}>
              {isLoaded === false ? (<Loader />) : <PostItemAPI posts={posts}/>}
            </div>
          </div>
        )
}

export default ContentAPIHooks