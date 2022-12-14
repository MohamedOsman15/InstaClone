import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const Feed = () => {
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


    return (
        <div className="feed">
            {posts.map((res) => {
                return (
                    <div className="post" key={res.key}>
                        <img src={res.image}/>
                        <p>{res.caption}</p>
                        {comments.map((comment) => {
                            for (let i = 0; i < comments.length; i++) {
                                if (comment.postId === res.id ) {
                                    return (
                                        <div>
                                            {users.map((user) => {
                                                for (let i = 0; i < users.length; i++) {
                                                    if (user.id === comment.userId) {
                                                        return (
                                                            <p>{user.displayName}:</p>
                                                        )
                                                    }
                                                }
                                            })}
                                            <p>{comment.comment}</p>
                                        </div>
                                    )
                                }
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Feed