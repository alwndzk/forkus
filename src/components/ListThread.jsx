/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
import ItemThread from './ItemThread';
import PropTypes from 'prop-types';

function ListThread({ threads }) {
    return (
        <div>
            {threads.map((thread) => (
                <ItemThread key={thread.id} {...thread} />
            ))}
        </div>
    );
}

ListThread.propTypes = {
    threads: PropTypes.array.isRequired,
};

export default ListThread;