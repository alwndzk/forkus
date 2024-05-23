// import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
    return (
        <div style={{
 position: 'sticky', top: 0, zIndex: 999, width: '100%', 
}}
        >
            <LoadingBar />
        </div>
    );
}

export default Loading;