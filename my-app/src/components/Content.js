import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isLoaded: true
      })
    }, 2000)
  }

  render() {
    return (

      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded === false ? (<Loader />) : <PostItem posts={savedPosts}/>}
        </div>
      </div>
    )
  }
}

export default Content