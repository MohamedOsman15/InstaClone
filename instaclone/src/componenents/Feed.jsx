import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import InstagramPost from "./InstagramCard";

const Feed = (userId) => {
    const [posts, updatePosts] = useState([])
    const [comments, updateComments] = useState([])
    const [users, updateUsers] = useState([])


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
 
let emptyComment = "comments"


    return (
        <div className="feed">
            {posts.map((res) => {
                return (
                    <div className="post" key={res.key}>
                        {users.map((user) => {
                            if(user.id === res.userId) {
                                return (
                                    <InstagramPost image ={res.image} userId={userId} user = {user.displayName} caption = {res.caption} postId = {res.id} />
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