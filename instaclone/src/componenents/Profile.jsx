import axios from "axios";
import Avatar from '@mui/joy/Avatar';
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import { useParams } from "react-router-dom";
import InstagramPost from "./InstagramCard";

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
                    <h2 className="postButton">Post</h2>
                    </Box>
                </div>
              
                    <div className="allPosts">
                {posts.map((res) => {
                    return (
                        <div className="posts">
                            <InstagramPost image={res.image} user={user} userId={userId} caption={res.caption} postId={res.id}/>
                        </div>
                        )})}    
                </div>
            
        </div>
    )       
}

export default Profile