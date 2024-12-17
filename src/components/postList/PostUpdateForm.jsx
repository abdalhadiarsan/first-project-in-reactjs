import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostUpdateForm = ({postUpdate , handleSubmit , handleChange}) => {
  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={postUpdate.title}
            onChange={handleChange}
            name='title'
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={postUpdate.body}
            onChange={handleChange}
            name='body'
          />
        </Form.Group>
        <Link to={'/post-list'}>
        <Button variant="primary" type="submit">
          Update
        </Button>
        </Link>
      </Form>
    </div>
  )
}

export default PostUpdateForm