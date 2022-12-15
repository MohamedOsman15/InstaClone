import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState, } from "react"
import { BASE_URL } from "../services/api"

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
            <div>
            <h1>hola</h1>
            </div>
            <div>
            <h1>hola</h1>
            </div>
        </div>
    </div>
)
}
export default AddPost