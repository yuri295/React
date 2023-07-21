import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '유리',
    comment: '저런 녀석도 잘 먹고 잘 사는데',
  },
  {
    name: '유리',
    comment: '귀여운 나에게 세상이 왜이래',
  },
  {
    name: '유리',
    comment: '증말 아무것도 하기 시러요',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
