import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name="양파 쿵야의 줏대 있는 하루" numOfPage={300} />
      <Book name="저런 녀석도 잘 먹고 잘 사는데" numOfPage={300} />
      <Book name="귀여운 나에게 세상이 왜 이래" numOfPage={400} />
      <Book name="증말 아무것도 하기 시러요" numOfPage={500} />
    </div>
  );
}

export default Library;
