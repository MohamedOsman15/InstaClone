import { useNavigate, Link } from 'react-router-dom'


const Home = ({authenticated}) => {
    const navigate = useNavigate()
        let data = null
        if (authenticated === true) {
            navigate("/feed")
        }
        const page = () => { 
            console.log({authenticated})
            if(authenticated === true) {
                data = (
                    <div>
                    <h3>Youre logged in</h3>
                    </div>
                )
            } else {
                data = (
                    <div classname="home">
                            <h1>InstaClone</h1>
                            <h4>Please login or register</h4>
                            <p>If you'd like to browse as a guest with limited features click here</p>
                            <div>
                                <Link to='/login'>
                                <h3>Login</h3>
                                </Link>
                                <Link to='/register'>
                                <h3>Register</h3>
                                </Link>
                            </div>
                        </div>
                    )
        }
    }
    page()
    
    return (
        <div>
        {data}
        </div>
    )
}

export default Home