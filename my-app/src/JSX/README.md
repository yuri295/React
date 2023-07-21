## JSX란?

        - JavaScript + XML/HTML
        - JSX 코드
        ```const element = <h1>Hello,world!</h1>```

## JSX 역할

        - JSX를 사용한 코드
        ```javascript
            const element = (
                    <h1 className="greeting">
                        Hello,world!
                    </h1>
            )
        ```
        - JSX를 사용하지 않은 코드
        ```javascript
            const element = React.createElement( //객체 생성
                'h1',
                { className: 'greeting'},
                'Hello, world!'
            )
        ```

## JSX의 장점

        - 간결함
        - 가독성 향상
        - InJection Attacks 방어

## JSX의 사용법

        - XML/HTML 코드 사이에 중괄호{}를 사용하여 JavaScript코드 호출
