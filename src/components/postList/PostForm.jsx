import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const PostForm = ({ newPost, handleChange, handleSubmit, users }) => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="enter your title "
                        name='title'
                        value={newPost.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>post</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        name='body'
                        value={newPost.body}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Select aria-label="Default select example"
                    name='userId'
                    onChange={handleChange}
                    value={newPost.userId}
                >
                    <option>select user</option>
                    {
                        users.map((user, index) =>
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        )
                    }
                </Form.Select>
                <Form.Group className="mb-3">
                    <Button onClick={handleSubmit}>
                        <Link to={'/post-list'} style={{textDecoration:'none' , color:'white'}}>
                            submit
                        </Link>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default PostForm