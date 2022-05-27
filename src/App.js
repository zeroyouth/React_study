function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + '✔️'}
        </del>
      ) : (name + '🔥')
      }
    </li>
  );
}


export default function PackingList() {
  return (
    <section>
      <h1 style={{
        color: "tomato",
        paddingLeft: "40px",
      }}>오늘 할 일</h1>
      <ol>
        <Item
          isPacked={true}
          name="사전 투표하기" />
        <Item
          isPacked={true}
          name="학교 가기" />
        <Item
          isPacked={false}
          name="리액트 공부하기" />
      </ol>
    </section>
  );
}