/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
// import React from 'react';
import PropTypes from 'prop-types';
import ItemComment from './ItemComment';

function ListComment({ 
    comments,
    authUser,
}) {
    return (
        <div>
            {comments && comments.length > 0 && comments.map((comment) => (
               <ItemComment 
               key={comment.id}
               {...comment}
               authUser={authUser}
               />
            ))}
        </div>
    );
}

ListComment.propTypes = {
    comments: PropTypes.array,
    authUser: PropTypes.string.isRequired,
};

export default ListComment;