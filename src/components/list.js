import React from "react";

const List = ({ list }) => {
  return list.map((items) => <Item key={items.objectID} item={items} />);
};

const Item = ({ item }) => {
  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <li>{item.author}</li>
      <li>{item.num_comments}</li>
      <li>{item.points}</li>
    </div>
  );
};
export default List;
