# Composition

## Composition이란

- 여러 개의 컴포넌트를 합쳐 새로운 컴포넌트를 만드는 것

## Composition 방법

### 1. Containment

- children prop 사용
- 하위 컴포넌트를 포함하는 형태로 합성

```JavaScript
function FancyBorder(props) {
    return (
        <div> className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                어서오세요
            </h1>
            <p className="Dialog-message">
                우리 사이트에 방문하신 것을 환영합니다!
            </p>
        </FancyBorder>
    )
}

```

### 2. Specialization

- 범용적인 개념을 구별이 되게 구체화하는 것

```JavaScript
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog(props) {
    return (
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    );
}
```

복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!
