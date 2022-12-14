import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import { useParams } from "react-router-dom";

const Profile = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const { userId } = useParams() 

    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}api/posts/${userId}`)
            setPosts(res.data)
            res = await axios.get(`${BASE_URL}api/users/${userId}`)
            setUser(res.data)
            console.log(posts, user)
        }
        api()
    }, [])

    return (
        <div className="ProfilePage">

        </div>
    )
}

export default Profile