import React, { useState } from 'react';

function SignUp(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('여자');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :&nbsp;
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별 :&nbsp;
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      &nbsp;<button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
