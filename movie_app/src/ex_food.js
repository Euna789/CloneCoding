import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture,size, rating}){
  //props.fav==={fav}
  //console.log(props.fav);
  return <div>
      <h1> I like {name}</h1>
      <h4> {rating} / 5.0</h4>
      <img src={picture} alt={name} width={size}/>
    </div>;
}

const foodILike=[
  {
    id:1,
    name:"Kimchi",
    image: "https://m.jnmall.kr/web/product/big/201904/609ee5a2a4bea63000745b65a63f064a.png",
    width: "300",
    rating: 3
  },
  {
    id:2,
    name:"ramen",
    image: "https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    width:"400",
    rating: 4.5
  },
  {
    id:3,
    name:"brownie",
    image: "https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MjM4MTF8aW1hZ2UvanBlZ3xoNzMvaDBlLzE0MDcwMjUyMjczNjk0LmpwZ3xkOTRlZDU5ODU2NTY0ZjlhYzM3NmFiN2JmYzM2OGQ2M2ZhNDAwZWIwZmY3MTE2MWFiYTUwNmY4Y2IyZDJkNzcy",
    width:"200",
    rating: 5
  }
]

Food.propTypes={ 
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  //isrequired: undefined일수 없다
}
//proptypes:다른 파일에서 필요한 것을 가져오거나 체크할 때 유용함

function App() {
  return (
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} size={dish.width} rating={dish.rating} />
      ))}
    </div>
  );
}
//dish는 object

//food component에 fav라는 이름의 property를 kimchi라는 value로 줌.
/*friends.map(current=>{   //current=>는 function(current)와 같음
  console.log(current)
})*/

export default App;

//react가 virtual DOM을 만든다