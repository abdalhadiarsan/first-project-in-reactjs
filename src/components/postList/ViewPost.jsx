import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { config } from '../../config/Config';
import { Button, Card } from 'react-bootstrap';

const ViewPost = () => {

    const [ViewPost, setViewPost] = useState({
        title: '',
        body: '',
        userId: ''
    })
    const { id } = useParams();

    useEffect(() => {

        const fetchPost = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/${config.posts}/${id}`);
                setViewPost(response.data);
            } catch (error) {
                console.log('Error fetching post:', error);
            }
        };
        fetchPost();
        console.log(id)
    }, [id]);
    return (
        <div>
            <Card className="mt-5">
                <Card.Header as="h5">post</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {ViewPost.title}
                    </Card.Title>
                    <Card.Text>
                        {ViewPost.body}
                    </Card.Text>
                    <Button variant="primary">add to favorite</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ViewPost
