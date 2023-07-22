# Hooks

![Alt text](image.png)

- 훅을 사용하면 함수 컴포넌트도 클래스 컴포넌트의 기능을 동일하게 사용 가능

  ## useState()

  - state를 사용하기 위한 Hook
  - 변수 각각에 대해 set함수가 따로 존재

  ```
  const [변수명, set함수명] = useState(초기값);
  ```

  ## useEffect()

  - Side effect를 수행하기 위한 Hook

  ```
  useEffect(이펙트 함수, 의존성 배열);
  ```

  ```
    useEffect(() => {
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 한번씩만 실행
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행

        return () => {
            // 컴포넌트가 마운트 해제되기 전에 실행
        }
    },[의존성 변수1, 의존성 변수2,...]);
  ```

  ## useMemo()

  - Memoized value를 리턴하는 Hook
  - 의존성 변수가 변하지 않는다면 기존에 저장된 함수 결과값을 그대로 반환

  ```
  const memoizedValue = useMemo(
     () => {
         //연산량이 높은 작업을 수행하여 결과를 반환
         return computedExpensiveValue(의존성 변수1, 의존성 변수2)
     },
     [의존성 변수1, 의존성 변수2]
  );
  ```
