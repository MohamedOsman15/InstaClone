import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState, } from "react"
import { BASE_URL } from "../services/api"
import InstagramPost from "./InstagramCard"

const AddPost = ({user}) => {
    const navigate = useNavigate()
  const initialFormValues = {
    userId: user.id,
    caption: "",
    image: ""
  }
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}api/posts`)
    navigate(`/user/${user.id}`)
    }

return (
    <div className="PostPage">
        <div className="grid">
            <div className="child">
            <form className="register" onSubmit={handleSubmit}>
            <div className="input-container">
                <ul>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.image}
                    placeholder="image url"
                    name="image"
                    required
                    />
                </ul>
                <ul>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.captioni}
                    placeholder="caption"
                    name="caption"
                    required
                    />
                </ul>              
            </div>
            <div className="button-container">
              <ul>
                <input
                  type="submit"
                  disabled={!formValues.userId}
                  />
              </ul>
            </div>
          </form>
            </div>
            <div className="child">
            <h3>Post Preview:</h3>
            <div  className="post preview">
            <InstagramPost image={formValues.image} user={user.displayName} userId={user.id} caption={formValues.caption}/>
            </div>
            </div>
        </div>
    </div>
)
}
export default AddPost