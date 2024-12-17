import { Button, Modal } from 'react-bootstrap'


const ModalDelete = ({
  handleClose,
  show,
  setShow,
  handleDelete
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            تأكيد الحذف </Modal.Title>
        </Modal.Header>
        <Modal.Body>انت متأكد انك بدك تحذف هاد البوست </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            لا بتراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            اي متأكد
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default ModalDelete