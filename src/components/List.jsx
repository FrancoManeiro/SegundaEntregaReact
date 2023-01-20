import Item from "./Item";

const List = function ({ list }) {
  return list.map(({ title, description, price, image }) => (
    <Item key={title} name={title} description={description} score={price} image={image}/>
  ));
};

export default List;
