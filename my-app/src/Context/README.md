## Context

- 여러 컴포넌트에서 계속해서 접근이 일어날 수 있는 데이터들이 있는 경우 사용

```
const ThemeContext = React.createContext('light');

// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다.
function App(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}
```

### React.createContext()

- Context 생성

```
const Mycontext = React.createContext(기본값);

```

### Context.Provider

```
<MyContext.Provider value={*/ some value */}>
```

- 주의: Provider 컴포넌트가 재렌더링될 때마다 모든 하위 consumer 컴포넌트가 재랜더링 됨.

```
//state를 사용하여 불필요한 재랜더링을 막음.
function App(props) {
    const [value,setValue] = useState({ something: 'something'});

    return (
        <MyContext.Provider value={value}>
            <Toolbar />
        </MyContext.Provider>
    );
}
```

### Context.Consumer

```
<MyContext.Consumer>
    {value => /*컨텍스트의 값에 따라서 컴포넌트들을 렌더링 */ }
</MyContext.Consumer>
```

### Context.displayName

```
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

// 개발자 도구에 "MyDisplayName.Provider"로 표시됨
<MyContext.Provider>

// 개발자 도구에 "MyDisplayName.Consumer"로 표시됨
<MyContext.Consumer>

```

## useContext() Hook

````
function MyComponent(props) {
    const value = useContext(MyContext);

    return (
        ...
    )
}```
````
