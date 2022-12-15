import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const Feed = () => {
    const [posts, updatePosts] = useState([])
    const [comments, updateComments] = useState([])
    const [users, updateUsers] = useState([])
    const commentList = []

    const commentMap = () => {
        comments.forEach(comment => {
            if (comments !== null){
                commentList.push(comment)
            }
        })
    }
    commentMap()

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
                        <img src={res.image}/>
                        <p>{res.caption}</p>
                            {commentList.map((comment) => {
                                for (let i = 0; i < comments.length; i++) {
                                    let x = 0
                                    if (comment.postId === res.id ) {
                                        x += 1
                                        emptyComment = "comments"
                                        return (
                                            <div className="comment">
                                            {users.map((user) => {
                                                for (let i = 0; i < users.length; i++) {
                                                    if (user.id === comment.userId) {
                                                        return (
                                                            <p>{user.displayName}:</p>
                                                            )
                                                        }
                                                    }
                                                })}
                                            <p className="inner">{comment.comment}</p>
                                        </div>
                                    )
                                }
                                if(x === 0) {
                                    emptyComment = "noComment"
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