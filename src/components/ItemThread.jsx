/* eslint-disable react/no-danger */
// import React from "react";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils/index";
import { AiOutlineComment } from 'react-icons/ai';
import { ItemThreadShape } from './ItemThreadShape';

function ItemThread({
 id, title, body, user, createdAt, totalComments, 
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === "Tekan" || event.key === " ") {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <section
      role="button"
      tabIndex={0}
      onClick={onThreadClick}
      onKeyDown={onThreadPress}
      style={{ margin: "20px 5px", display: "flex", justifyContent: "center" }}
    >
      <div className="card" style={{ width: "50%", boxShadow: "4px 3px #31363F" }}>
        <div className="card-header" style={{ backgroundColor: "#E1F7F5" }}>
          <div className="user-profile">
            <img src={user.avatar} alt={user.name} />
            <h2 id="user" className="mt-2">{user.name}</h2>
          </div>
        </div>
        <div className="card-body">
          <b className="card-title">{title && <span dangerouslySetInnerHTML={{ __html: title }}></span>}</b>
          <p className="card-text">{body && <span dangerouslySetInnerHTML={{ __html: body }}></span>}</p>
          <p className="card-text">{createdAt && postedAt(createdAt)}</p>
          <div className="comment-section">
            <AiOutlineComment className="comment-icon" />
            <p className="comment-number">{totalComments}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

ItemThread.propTypes = {
  ...ItemThreadShape,
};

export { ItemThreadShape };
export default ItemThread;
