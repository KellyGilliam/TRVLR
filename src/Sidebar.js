import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {

  render() {
    return (
      <div id='Sidebar'>
        <img id='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAMAAABCfAldAAAAe1BMVEX///8AAAD8/PwwMDDb29uenp6hoaGtra3S0tL5+flnZ2fExMTx8fHIyMhkZGQNDQ09PT18fHzo6OhOTk6Kiori4uI3NzcbGxvPz89XV1dxcXGLi4uEhIQkJCS3t7fz8/OWlpZDQ0MsLCwUFBRdXV1KSkq0tLQYGBh3d3dsj0UMAAADwElEQVR4nO2X15arOBBFJZGjsbDJ0Y3d/P8XTlWJjvf2vMk9a03tF0Bg63AqSAjBMAzDMAzDMAzDMAzDMAzDMAzDMAzD/JfQXad/W8O/8irlKtRvq/iZSUo5fhX4TW00p/rquuGBe9XRE/VFLQjcSJMCPm6k1zCZAm/ph72Lt/a+FpWDVGu57cvjaVkx1SAw+GSaDidv6LZyrZyxPskfeC32+Sn65g5mK3SqtTt55/b2NzGn13ocbzfyz7l9qA6sJu7x5wkaWA6t803TWK1t3p0vy+L5wWNKsqah/HPDDOJ+aV/wqcWeQvznyJ38S/k9cm3X+w/QE7o6nf8ohqDvEzzq7IyPP6wJFFevW536Q1l977wp1GkU/eyKEgE+eqWLKEGjrck70ogCVQTNW0lqPy7j5pNv4b1q6EZ3GuBwl7UjL6bkqT89LDVQrIyXtlvIEYoZ9Bhx7Y1u/0MhFE0FGqKSnFOlLLzdN7fUDINnK/KE8FBgOYnE9EDjQvKWj3X29hy+AK4yC/RyfJFdyvbsu0ZgdJGysyRQBWUtVy2wSbvHWIP21X2wgi+H5GsBQxME2pHO5QQPpqTf2RLbAg+wSR8BEwnk48siTPjPlFpzDKf5rMQASnaJeecdJkP5qhQc92wt4miRUjDxehgYglkjLCgztQ9JYwvWKZjlVvJ1KGPQomGkv1RmbWzeK9oWLoi6mNPrnfquUpR1BbkVYMzjlDKx6mUDQQV340jAO5TwGzCwsKpPPMA0U8ICk62E4k1hRWmTmwR9LvUh6CPzBvf6PKI2CAWEi08uhP/eACyh5hzE0CntaNAizLEXCN0gVDhKKnFBSoe8MWnqU/uD0KK+XlldjXWNSgCTdzWGFZz0NgkF694pFzMYy3FfkEQirDDiEwbeFwH8OLa85XKph0De9aQFi0DgECSj0OQpNWlq5hoKBMTXGgpGnjzxAH2l7S1hBhOHoOBiOgeuYIoEdkpXx4YK4jqaqibJjYJWDb2F1mHr+8EQFagU+97umMKcMd2yENqPdNBXHT1OJvwNSB4zoeFyJ1NL+/tVnMzpsX47gS3ZzyYKLEm6ZVgMS2ecPPmjqXhshBtKb+12QGI+ZpdDSuH+TB6SweTe+TjBbY0+NrbbUz5JQjNbAP3vKBSI3IbTJxi/ggZa90rHu1lyfLronvRZly55vKTmPIvv9/b8xZggjnuU5e75+X2D0+z54Iqn8tZsFdqilPj6XfzXVvy0z3z1ba4/Jv5deQzDMAzDMAzDMAzDMAzDMAzDMAzD/C/4B6nnMXwhqbWmAAAAAElFTkSuQmCC" />
        <li id='list'>
          <ul className="navi">Tour</ul>
          <ul className="navi">Career</ul>
          <ul className="navi">Investment</ul>
          <ul className="navi">Developers</ul>
          <ul className="navi">Privacy</ul>
        </li>

      </div>
    )
  }
}
export default Sidebar;