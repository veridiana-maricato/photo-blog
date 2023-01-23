import styles from './EditPost.module.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUptadeDocument'

const EditPost = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  useEffect(() => {

    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

      const textTags = post.tagsArray.join(', ')

      setTags(textTags)
    }

  }, [post])

  const { user } = useAuthValue()

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts")

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
    if (!title || !image || !tags || !body) {
      setFormError('Title and image URL are required.')
    }

      const data = {
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createBy: user.displayName
      }

    updateDocument(id, data)

    // redirect to home page
    navigate("/dashboard");

  }


  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editing post: {post.title}</h2>
          <p>Edit your post details as you prefer!</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title:</span>
              <input type="text" name='title' placeholder='Think of a good title...' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
            </label>
            <label>
              <span>Image URL:</span>
              <input type="text" name='image' placeholder='Insert a image that represents your post...' value={image} onChange={(e) => { setImage(e.target.value) }} required />
            </label>
            <p className={styles.preview_title}>Current image preview:</p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />
            <label>
              <span>Content:</span>
              <textarea name="body" placeholder='Insert your post content here...' value={body} onChange={(e) => { setBody(e.target.value) }} required></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input type="tags" name='image' placeholder='Insert tags separated by commas...' value={tags} onChange={(e) => { setTags(e.target.value) }} required />
            </label>
            {!response.loading && <button className='btn'>Finish edition</button>}
            {response.loading && <button className='btn' disabled>Loading...</button>}

            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default EditPost