import React from "react";
import ShowData from "./ShowData";

const FakeData = () => {
  const datas = [
    { id: 1, names: "iphone", model: "Pro Series", Price: 1000000 },
    { id: 2, names: "Nokia", model: "X Series", Price: 200000 },
    { id: 3, names: "XTE", model: "Y Series", Price: 102300 },
    { id: 4, names: "Realme", model: "M Series", Price: 190000 },
    { id: 5, names: "Mi", model: "Xi Series", Price: 150000 },
    { id: 6, names: "One Plus", model: "Max Series", Price: 9000000 },
  ];
  return (
    <div>
      {datas.map((data) => (
        <ShowData
          name={data.names}
          model={data.model}
          price={data.Price}
          id={data.id}
        ></ShowData>
      ))}
    </div>
  );
};

export default FakeData;
