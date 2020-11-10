import react, { useEffect, useState } from 'react';
import Item from '../Item';

const Catalog = () => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/entities.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    console.log(items)
    return (
      <div className="container">
        <div className="row mt-4 flex-direction-center justify-content-center">
          {items.map(item =>
            <Item
              key={item.id}
              id={item.id}
              title={item.attributes.title}
              rooms={item.attributes.rooms}
              city={item.attributes.address.city}
              street={item.attributes.address.street}
              house={item.attributes.address.house}
              room={item.attributes.address.rooms}
              area={item.attributes.area}
              owner={`${item.relationships.attributes.first_name} ${item.relationships.attributes.last_name} `}
            />)}
        </div>
      </div>
    );
  }
}




export default Catalog;
