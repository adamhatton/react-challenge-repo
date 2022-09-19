import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false,
       posts: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts
      })
    }, 2000)
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name)
    })
    this.setState({
      posts: filteredPosts,
    })
  }

  render() {
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
                onChange={this.handleChange}
              />
              <h4>posts found: {this.state.posts.length}</h4>              
            </form>

        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded === false ? (<Loader />) : <PostItem posts={this.state.posts}/>}
        </div>
      </div>
    )
  }
}

export default Content