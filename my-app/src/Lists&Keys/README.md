## map()

- 배열의 첫번째 값부터 연산을 수행한 뒤에 최종 결과를 배열로 만들어서 return

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
)
```

## key

- list에서 아이템을 구분하기 위한 고유한 문자열
- 속한 list 내에서만 고유하면 됨

### map() 함수 안에 있는 Elements는 꼭 key가 필요하다!
