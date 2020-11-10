import react, { useState } from 'react';
import Like from './Like';

const Item = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      {/* <div className="col-md-4">
        <h2>{props.title}</h2>
        <ul>
          <li className="list-group-item">Город: {props.city}</li>
          <li className="list-group-item">Количество комнат: {props.rooms}</li>
          <li className="list-group-item">Площадь: {props.area} кв/м.</li>
          <li className="list-group-item">Адрес: ул.{props.street}, дом {props.house}, кв. {props.room}</li>
          <li className="list-group-item">Владелец: {props.owner}</li>
        </ul>
        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div> */}
      <div key={props.id} className="card mx-2 my-3" style={{ maxWidth: "20em" }}>
        <img className="card-img-top" style={{ maxWidth: "20em" }} src="https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">Разнообразный и богатый опыт консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Количество комнат: {props.rooms}</li>
          <li className="list-group-item">Площадь: {props.area} кв/м.</li>
          <li className="list-group-item">Адрес: город {props.city} ул.{props.street}, дом {props.house}, кв. {props.room}</li>
          <li className="list-group-item">Владелец: {props.owner}</li>
        </ul>
        <div className="card-body">
          <button onClick={() => isLiked ? setIsLiked(false) : setIsLiked(true)}>
            {isLiked ? <Like color="red" /> : <Like color="black" />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Item;
