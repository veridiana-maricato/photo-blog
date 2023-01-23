import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { user } = useAuthValue()

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    // validating image URL
    try {
      new URL(image)
    } catch (error) {
      return setFormError("Please enter a valid image URL.")
    }

    // creating tags array

     const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())
    


    // checking all values
    if(!title || !image || !tags || !body){
      setFormError('Title and image URL are required.')
    }


    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })

    // redirect to home page
    navigate("/");

  }


  return (
    <div className={styles.create_post}>
      <h2>Create post</h2>
      <p>Share new thoughts and ideas!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input type="text" name='title' placeholder='Think of a good title...' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
        </label>
        <label>
          <span>Image URL:</span>
          <input type="text" name='image' placeholder='Insert a image that represents your post...' value={image} onChange={(e) => { setImage(e.target.value) }} required />
        </label>
        <label>
          <span>Content:</span>
          <textarea name="body" placeholder='Insert your post content here...' value={body} onChange={(e) => { setBody(e.target.value) }} required></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input type="tags" name='image' placeholder='Insert tags separated by commas...' value={tags} onChange={(e) => { setTags(e.target.value) }}  required/>
        </label>
        {!response.loading && <button className='btn'>Post!</button>}
        {response.loading && <button className='btn' disabled>Loading...</button>}

        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost