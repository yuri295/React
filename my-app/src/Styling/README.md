# Styling

## Selector

### Element selector

```css
h1 {
  color: pink;
}
```

### ID selector

```JavaScript
<div id="section">
    ...
</div>
```

```css
#section {
  background-color: pink;
}
```

### Class selector

```JavaScript
<span class="medium">
    ...
</span>

<p class="medium">
    ...
</p>
```

```css
.medium {
  font-size: 20px;
}

p.medium {
  font-size: 20px;
}
```

### Universal selector

```css
* {
  font-size: 20px;
  color: blue;
}
```

### Grouping selector

```css
h1,
h2,
p {
  color: black;
  text-align: center;
}
```

### 상태와 관련된 대표적인 selector

- hover
  - 마우스 커서가 element 위에 올라왔을 때
- active
  - 주로 a 태그(link)에 사용되는데, element가 클릭됐을 때를 의미
- focus
  - 주로 input 태그에서 사용되는데, element가 초점을 갖고 있을 경우를 의미
- checked
  - radio button이나 checkbox 같은 유형의 input 태그가 체크되어 있는 경우를 의미
- first-child, last-child
  - 상위 element를 기준으로 각각 첫 번째 child, 마지막 child일 경우를 의미

## Layout

### display

- display: none;
  - element를 화면에서 숨기기 위해 사용.
- display: block;
  - 블록 단위로 element를 배치
- display: inline;
  - element를 라인 안에 넣는 것.
- display: flex;
  - element를 블록 레벨의 flex container로 표시

### visibility

- visibility: visible;

  - element를 화면에 보이게 하는 것.

- visibility: hidden;
  - 화면에 안 보이게 감추는 것.

### position

- static
  - 기본값으로, element를 원래의 순서대로 위치시킴.
- fixed
  - element를 브라우저 window에 상대적으로 위치시킴.
- relative
  - element를 보통의 위치에 상대적으로 위치시킴.
- absolute
  - element를 절대 위치에 위치시킴.

## Font

- font-family
  - 글꼴
- font-size
  - 크기
- font-weight
  - 두께
- font-style
  - 글꼴의 스타일

## 기타 속성

- background-color
  - 배경색
- border
  - 테두리
