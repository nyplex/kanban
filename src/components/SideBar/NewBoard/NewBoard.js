import React from 'react'
import Button from '../../UI/Interactive/Button'
import Modal from '../../UI/Modal'

const NewBoard = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <h1>ADD NEW BAORD</h1>
        <Button classes='btn-primary__l' onClick={props.onClose}>CLOSE</Button>
    </Modal>
  )
}

export default NewBoard