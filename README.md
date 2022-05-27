# 2022-05-24

> ### useState 사용하기 : 사용자가 입력 변경할 때마다 변경사항 반영하도록 업데이트하기
>
> ![1](https://user-images.githubusercontent.com/86909942/169981509-16c04dc0-469f-4665-aaf5-e7012d0bae5c.gif)

# 2022-05-26

> ### props 사용하기 : Clock.js에서 color및 time 두 개의 props를 부모컴포넌트(App.js)에서 받아왔다.
>
> 1. props는 불변하다. 수정할 수 없고 읽기 전용 데이터다. You can’t change props. When you need interactivity, you’ll need to set state.
> 2. 상위 컴포넌트(부모)가 하위 컴포넌트(자식)에 값을 전달할때 사용한다.(단방향 데이터 흐름 갖는다.)

![Animation](https://user-images.githubusercontent.com/86909942/170503203-dfcc7397-213c-4115-ae88-d00a62dd3faa.gif)

```js
//Clock.js
export default function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
```

# 2022-05-27

> ### 조건부 연산자 사용하기
>
> - In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
> - In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.

![20220527_172444](https://user-images.githubusercontent.com/86909942/170662547-b9851c54-1742-460d-a036-289a431db358.png)

[출처] : https://beta.reactjs.org/learn/thinking-in-react

<hr/>
## Available Scripts

In the project directory, you can run:

### `yarn start`
