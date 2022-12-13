import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const Feed = () => {
    const [posts, updatePosts] = useState([])
    const [comments, updateComments] = useState([])

    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}api/posts`)
            updatePosts(res.data)
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
                        <p>comments</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Feed