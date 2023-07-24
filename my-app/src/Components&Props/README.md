## React Components

- 개념
  - React Elements를 생성하기 위한 틀
  - function과 비슷한 개념
- 특징
  - 같은 Props에 대해 항상 같은 결과를 보여줄 것.
- 종류
  - Function Component
  - Class Component

## React Props

- 개념
  - Component에 전달할 다양한 정보를 담고 있는 JavaScript 객체
- 특징

  - Read-Only(값을 변경할 수 없음.)

- 사용법

```JavaScript
function App(props) {
    return (
        <Profile
            name="유리"
            introduction="안녕하세요,저는 진유리입니다~!"
            viewCount={1500}
        />
    );
  }
```
