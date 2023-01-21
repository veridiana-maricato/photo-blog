import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className={styles.create_post}>
      <h2>CreatePost</h2>
      <p>Share new thoughts and ideas!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input type="text" name='title' placeholder='Think of a good title...' value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          <span>Image URL:</span>
          <input type="text" name='image' placeholder='Insert a image that represents your post...' value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>
        <label>
          <span>Content:</span>
          <textarea name="body" placeholder='Insert your post content here...' value={body} onChange={(e) => { setBody(e.target.value) }} required></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input type="tags" name='image' placeholder='Insert tags separated by commas...' value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>
        <button>Post!</button>
        {/* {!loading && <button className='btn'>Register</button>}
        {loading && <button className='btn' disabled>Loading...</button>}

        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost