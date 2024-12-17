import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import '../../assets/css/PostExpect/PostExpect.css'
import '../../assets/css/PostExpect/postCard.css'
// import img from '../../assets/images/download.png'

const SinglePost = ({
  handleShow,
  posts,

}) => {

  return (
    <div>
      <Row >
        {posts.map((el, i) =>
          <Card style={{ width: '16rem', margin: '5px' }} className='postCard'>
            {/* <Card.Img variant="top" src={img} /> */}
            <Card.Body key={el.id}>
              <Card.Title className='post-excerpt'>Name:{el.title}</Card.Title>
              <hr />
              <Card.Title>id: {el.id}</Card.Title>
              <hr />
              <Card.Subtitle className="mb-2 text-muted">Post :</Card.Subtitle>
              <Card.Text className='post-excerpt'>
                {el.body}
              </Card.Text>
              <hr />
              <div className="container-butt d-flex justify-content-between">

                <Button variant='success' >
                  <Link to={`/post-Update/${el.id}`} style={{ textDecoration: 'none', color: 'white', width: '15px' }}>
                    Update
                  </Link>
                </Button>
                <Card.Link >
                  <Button variant='danger' onClick={() => handleShow(el.id)}  >
                    Delete
                  </Button>
                </Card.Link>
              </div>
              <Link to={`/post-View/${el.id}`} className="btn btn-primary w-100 mt-2">
                View Post
              </Link>
            </Card.Body>
          </Card>
        )}
      </Row>
    </div >
  )
}

export default SinglePost