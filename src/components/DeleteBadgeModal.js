import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are goint to delete this badge</p>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button onClick={props.onDeleteBadge} className="btn btn-danger">
                Erase
              </button>
            </div>
            <div className="col-6">
              <button onClick={props.onClose} className="btn btn-primary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
