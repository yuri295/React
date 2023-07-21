## React Elements의 정의

- 화면에서 보이는 것들을 기술
- 실제 화면에서 보게 되는 DOM Elements 생성

## React Elements의 형태

- 자바스크립트 객체 형태로 존재

```
//createElement를 이용해서 만들어진 React Element 객체
React.createElement(
    type,
    [props],
    [...children]
)

```

````
// JSX를 이용해서 만들어진 React Element 객체
{
    type:Button,
    props: {
        color: 'green',
        children: 'Hello, element!'
    }
}```
````

## React Elements의 특징

- 불변성
  - 새로운 element를 생성해서 바꿔치기(렌더링 후 업데이트)

## Elements 렌더링하기

```
function tick() {
    const element = (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick,1000);
```
