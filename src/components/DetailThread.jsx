/* eslint-disable react/no-danger */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/index';

function DetailThread({
 title, body, createdAt, owner, 
}) {
  if (owner == null) {
    return null;
  }

  return (
    <div
      style={{ margin: '20px 5px', display: 'flex', justifyContent: 'center' }}
    >
      <div
        className="card"
        style={{ width: '40%', boxShadow: '4px 3px #31363F' }}
      >
        <div className="card-header" style={{ backgroundColor: '#E1F7F5' }}>
          <div className="user-profile">
            <img src={owner.avatar} alt={owner.name} />
            <h2 id="owner" className="mt-2">
              {owner.name}
            </h2>
          </div>
        </div>
        <div className="card-body">
          <b className="card-text">
            {/* // eslint-disable-next-line react/no-danger */}
            {title && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
          </b>
          <p className="card-text">
            {body && <span dangerouslySetInnerHTML={{ __html: body }}></span>}
          </p>
          <p className="card-title">{postedAt(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

DetailThread.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  owner: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  authUser: PropTypes.string,
};

DetailThread.defaultProps = {
  owner: null,
  title: '',
  body: '',
  createdAt: '',
  authUser: '',
};

export default DetailThread;
