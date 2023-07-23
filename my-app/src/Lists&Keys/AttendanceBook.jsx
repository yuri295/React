import React from 'react';

const students = [
  {
    id: 1,
    name: 'Yuri',
  },
  {
    id: 2,
    name: 'Jaehyeon',
  },
  {
    id: 3,
    name: 'Kuromi',
  },
  {
    id: 4,
    name: 'Minhyuk',
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
