/* eslint-disable react/jsx-props-no-spreading */
// // import React from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import DetailThread from '../components/DetailThread';
// import InputComment from '../components/InputComment';
// import ListComment from '../components/ListComment';
// import { asyncReceiveThreadDetail, asyncCreateComment } from '../states/detailThread/action';

// function DetailPage() {
//     const { threadId } = useParams();
//     const threadDetail = useSelector((state) => state.threadDetail);
//     const authUser = useSelector((state) => state.authUser);
//     const dispatch = useDispatch();

//     useEffect(() => {
//             dispatch(asyncReceiveThreadDetail(threadId));
//     }, [threadId, dispatch]);

//     const onAddComment = (content) => {
//         dispatch(asyncCreateComment({ content }));
//         // console.log(content)
//     }

//     if(!threadDetail) {
//         return null;
//     }

//     return (
//         <section>
//             <div>
//                 {threadDetail && <DetailThread {...threadDetail} authUser={authUser.id} />}
//             </div>
//             <div>
//             <header className="center-text top-margin">
//                     <h5>MASUKKAN KOMENTAR</h5>
//                 </header>
//                 <InputComment addComment={onAddComment} />
//             </div>
//             <div style={{ margin: '1em' }}>
//                 <header className="center-text top-margin">
//                     <h5>KOMENTAR YANG TERSEDIA</h5>
//                 </header>
//                 <ListComment comments={threadDetail.comments}
//                 authUser={authUser.id} />
//             </div>
//         </section>
//     )
// }

// export default DetailPage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DetailThread from '../components/DetailThread';
import InputComment from '../components/InputComment';
import ListComment from '../components/ListComment';
import {
  asyncReceiveThreadDetail,
  asyncCreateComment,
} from '../states/detailThread/action';

function DetailPage() {
  const { threadId } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncCreateComment({ content }));
    // console.log(content)
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section>
      <div>
        {threadDetail && (
          <DetailThread {...threadDetail} authUser={authUser.id} />
        )}
      </div>
      <div>
        <header className="center-text top-margin">
          <h5>MASUKKAN KOMENTAR</h5>
        </header>
        <InputComment addComment={onAddComment} />
      </div>
      <div style={{ margin: '1em' }}>
        <header className="center-text top-margin">
          <h5>KOMENTAR YANG TERSEDIA</h5>
        </header>
        <ListComment comments={threadDetail.comments} authUser={authUser.id} />
      </div>
    </section>
  );
}

export default DetailPage;
