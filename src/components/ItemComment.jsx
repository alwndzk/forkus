/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-danger */
// import React from "react";
import PropTypes from "prop-types";
import { postedAt } from "../utils/index";

function ItemComment({ owner, content, createdAt }) {
  return (
    <form style={{ margin: '20px 5px', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ width: '35%', boxShadow: '4px 3px #31363F' }}>
        <div className="card-header" style={{ backgroundColor: "#E1F7F5" }}>
          <div className="user-profile">
            <img src={owner.avatar} alt={owner.name} />
            <h2 id="owner" className="mt-2">{owner.name}</h2>
          </div>
        </div>
        <div className="card-body">
          <b className="card-text">{content && <span dangerouslySetInnerHTML={{ __html: content }}></span>}</b>
          <p className="card-title">{postedAt(createdAt)}</p>
        </div>
      </div>
    </form>
  );
}

ItemComment.propTypes = {
  authUser: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ItemComment;
