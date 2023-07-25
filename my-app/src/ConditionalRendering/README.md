# Conditional Rendering

- 조건에 따른 렌더링

```JavaScript
function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <QuestGreeting />;
}
```

## Inline Conditions

- 조건문을 코드 안에 집어넣는 것

  ### Inline If

  - && 연산자를 사용

  ```JavaScript
  function Mailbox(props) {
      const unreadMessages = props.unreadMessages;

      return (
          <div>
              <h1>안녕하세요!</h1>
              {unreadMessages.length > 0 &&
                  <h2>
                      현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                  </h2>
              }
          </div>
      );
  }
  ```

  ### Inline if-Else

  - ? 연산자를 사용

  ```JavaScript
  function UserStatus(props) {
      return (
          <div>
              이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
          </div>
      )
  }
  ```
