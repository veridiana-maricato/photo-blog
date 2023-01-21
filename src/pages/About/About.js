import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {
    return (
      <div className={styles.about}>
          <h2>About us</h2>
          <p>This project consist on a blog created with React and Firebase</p>
          <Link to='/posts/create' className='btn'>Create Post</Link>
      </div>
    )
  }
  
  export default About