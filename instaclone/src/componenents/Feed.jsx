import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import InstagramPost from "./InstagramCard";

const Feed = ({user}) => {
    const [posts, updatePosts] = useState([])
    const [comments, updateComments] = useState([])
    const [users, updateUsers] = useState([])
    console.log(user.id)
    let userId = user.id

    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}api/posts`)
            updatePosts(res.data)
            let res2 = await axios.get(`${BASE_URL}api/comments`)
            updateComments(res2.data)
            let res3 = await axios.get(`${BASE_URL}api/users`)
            updateUsers(res3.data)
        }
        
        api()
    }, [])
 


    return (
        <div className="feed">
            {posts.map((res) => {
                return (
                    <div className="post" key={res.key}>
                        {users.map((x) => {
                            if(x.id === res.userId) {
                                return (
                                    <InstagramPost image ={res.image} userId={x.id} user = {x.displayName} caption = {res.caption} postId = {res.id} />
                                )
                            }
                        })}
                    </div>
                )
            })}
    </div>
    )
}


export default Feed