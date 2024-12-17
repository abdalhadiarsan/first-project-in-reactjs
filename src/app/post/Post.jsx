import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading';
import '../../assets/css/Loading/Loading.css'
import PostForm from '../../components/postList/PostForm';

const Post = () => {

    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        userId: '',
    })

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true)
                const respons = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await respons.json()
                setUsers(data)
            }
            catch (error) {


                console.log('error', error)
            }
            setIsLoading(false)
        }
        console.log(users)
        fetchUsers()
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((preTasks) => ({
            ...preTasks,
            [name]: value,
        }));
    };

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    return (
        <div className='containder p-5'>
            <PostForm
                newPost={newPost}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                users={users}
            />
        </div>

    )
}

export default Post