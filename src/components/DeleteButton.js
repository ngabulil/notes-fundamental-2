import React from "react";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

function DeleteButton({ id, onDelete }) {
  return (
    <div>
    <MdDelete className="action" onClick={() => onDelete(id)} />
    </div>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
