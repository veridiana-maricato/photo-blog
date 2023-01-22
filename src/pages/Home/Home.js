// CSS
import styles from "./Home.module.css"

// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

// components
import PostDetail from "../../components/PostDetail"


const Home = () => {
  const [query, setQuery] = useState('')
  const {documents: posts, loading} = useFetchDocuments('posts')

  const handleSubmit = (e) =>{
    e.preventDefault()

  }

  return (
    <div className={styles.home}>
        <h1>Check our most recent posts</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder="Search posts by tags" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
          <button className="btn btn-dark">Search</button>
        </form>
        <div>
          {loading && <p>Loading...</p>}
          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
          <h1>Posts</h1>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>No posts found</p>
              <Link to='posts/create' className="btn">Create first post!</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home