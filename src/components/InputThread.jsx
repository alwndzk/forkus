/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import PropTypes from "prop-types";

function InputThread({ addThread }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addThread({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded small-form center-form" style={{ width: "35%", boxShadow: "4px 3px #31363F" }}> 
      <div className="mb-3 row">
        <label htmlFor="threadTitle" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            placeholder="Judul Thread"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="threadTitle"
          />
        </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="threadBody" className="col-sm-2 col-form-label">
          Body
      </label>
        <div className="col-sm-10 form-floating">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
            id="threadBody"
            rows="2"
          >
          </textarea>
          <label htmlFor="floatingTextarea">Isi Thread</label>
        </div>
        <button type="submit" className="btn bg-dark mt-4" style={{ color: "white" }}>Buat Thread</button>
      </div>
    </form>
  );
}

InputThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default InputThread;
