import axios from "axios";
import Avatar from '@mui/joy/Avatar';
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import { Link, useParams } from "react-router-dom";
import InstagramPreview from "./InstagramCardPreview";

const Profile = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const { userId } = useParams() 


    const getPosts = async () => {
        let res = await axios.get(`${BASE_URL}api/posts/${userId}`)
        setPosts(res.data)
    }

    getPosts()
    
    const deletePost = async (x) => {
        await axios.delete(`${BASE_URL}api/posts/${x}`)
        getPosts()
    }

    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}api/posts/${userId}`)
            setPosts(res.data)
            let res2 = await axios.get(`${BASE_URL}api/users/${userId}`)
            setUser(res2.data)
        }
        api()
    }, [])

    return (
        <div className="profilePage">
                <div className="profileName">

                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            m: '-2px',
                            borderRadius: '50%',
                            background:
                            'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                                },
                            }}
                        >
                        <Avatar
                            size="lg"
                            src="/static/logo.png"
                            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                            />
                        </Box>
                    <h2 className="user">{user}</h2>
                    <Link to={`/newpost/${userId}`} className="postButton link">New Post</Link>
                    </Box>
                </div>
              
                    <div className="allPosts">
                {posts.map((res) => {
                    return (
                        <div className="posts">
                            <InstagramPreview deletePost={() => deletePost(res.id)} image={res.image} user={user} userId={userId} caption={res.caption} postId={res.id}/>
                        </div>
                        )})}    
                </div>
            
        </div>
    )       
}

export default Profile