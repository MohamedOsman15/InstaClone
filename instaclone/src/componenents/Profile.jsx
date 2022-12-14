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
            let res2 = await axios.get(`${BASE_URL}api/users/${userId}`)
            setUser(res2.data)
        }
        api()
    }, [])
    console.log(user)
    console.log(posts)

    return (
        <div className="profilePage">
            <div>
                <h2 className="user">{user}</h2>
                <div className="posts">
                {posts.map((res) => {
                    return (
                        <div className="post" key={res.id}>
                        <img src={res.image}/>
                        <p>{res.caption}</p>
                    </div>
                )})}    
                </div>
            </div>
        </div>
    )       
}

export default Profile