// import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function InputComment({ addComment }) {
  const [comment, setComment] = useState("");

  const onAddComment = () => {
    addComment(comment);
    setComment("");
  };

  return (
    <form className="p-4 border rounded small-form center-form" style={{ width: "35%", boxShadow: "4px 3px #31363F" }}>
      <div className="mb-3 row">
        <div className="col-sm-10">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            style={{ width: '400px' }}
            id="threadComment"
            placeholder="komentar"
          />
          <button type="button" className="btn mt-4" style={{ backgroundColor: '#31363F', color: 'white' }} onClick={onAddComment}>
            Kirim
          </button>

        </div>
      </div>
    </form>
  );
}

InputComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default InputComment;
