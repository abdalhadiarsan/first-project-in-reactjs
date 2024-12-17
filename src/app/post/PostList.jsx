import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Loading from '../../components/loading/Loading'
import { deletePost } from '../../redux/action'
import ModalDelete from '../../components/ModalForDelete/ModalDelete'
import SinglePost from '../../components/postList/SinglePost'

const PostList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const respons = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await respons.json()
        setPosts(data)
        console.log(posts)
      }
      catch (error) {
        console.log('error', error)
      }
      setIsLoading(false)
    }
    fetchUsers()
  }, [])

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setSelectedId(id)
    setShow(true);
  }

  const handleDelete = () => {
    dispatch(deletePost(selectedId));
    setShow(false)
  };

  return (
    <div>
      <div className='SinglePost'>
        <SinglePost
          handleShow={handleShow}
          posts={posts}
        />
      </div>
      <div className="modal">
        <ModalDelete
          handleClose={handleClose}
          show={show}
          setShow={setShow}
          handleDelete={handleDelete}
        />
      </div>

    </div >
  )
}

export default PostList