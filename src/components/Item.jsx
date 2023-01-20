import { Link } from "react-router-dom";

const Item = function ({ image, name, description, score }) {
  return (
    <ul> 
      <div className="cardProducts">
        <img className="imgCard" src={image} alt={name} />
        <li className="liCard">
          <Link to={`${name}`} className='noneLink'>
          <strong>{name}</strong>
          </Link>
          <small>{description}</small>
          <em>${score}</em>
        </li>
      </div>
    </ul>  
  );
};

export default Item;
