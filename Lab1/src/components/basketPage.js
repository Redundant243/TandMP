import React from 'react';

class ShoppList extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        count: localStorage.length,
      };
    }
    countChange(e) {
      localStorage.removeItem(e);
      this.setState({count: localStorage.length});
    }
    createShopList(){
      let shopList = [];
      let item ='';
      let Title ='';
      const GenItems = this.props.items;
      for (let i = 0; i < localStorage.length; i++) {
        let Id = localStorage.key(i);
        Title = localStorage.getItem(Id);
        
        if(Id !== "Page"){
          item = GenItems.filter(el => el.id === Number(Id));
          shopList.push({title: Title, price: item.price,
            category: item.category, id: Id})
        }
      }
      return(
        <>
        {shopList.map(({ title, price, category, id }) => (
          <div key={id} className="product">
          <span style={{marginLeft: "10px"}}>{title}</span>
          <span style={{marginLeft: "10px"}}>{category}</span>
          <span style={{marginRight: "60px"}}>{price}</span>
          <img src="./img/remove.svg" style={{width: "20px"}}  className="buyImg" alt="No" 
           onClick={() => { this.countChange(id) }}/>
        </div>
        ))}
      </>
      )
    }
    render(){
      if(localStorage.length === 1){
        return(
          <><h1 style={{ textAlign: 'center' }}>
          Корзина:
         </h1>
          <div className="showcase" 
            style={{ display: "flex",alignItems: "center",flexDirection: "column"}}>
            <img src="./img/empty.png" style={{ width: "300px" }} alt="Empty" />
            <h3 style={{color: "#9999CC"}}>Здесь пока ничего нет, добавьте работы в корзину</h3>
          </div>
          </>
        )
      }
      return(
        <><h1 style={{ textAlign: 'center' }}>
          Корзина:
        </h1>
        
        <div className="showcase">
          {this.createShopList()}
        </div>
        <div style={{display: "flex",justifyContent: "center",marginTop: "20px",gap: "100px"}}>
          <button className="ButSend" 
           onClick={() => this.props.handleClick("page_2",this.props.value)}>К магазину</button>
          <button className="ButSend" 
           onClick={() => alert("Ваш заказ принят. Ждите")}>Оформить заказ</button>
        </div>
        </>
      )
    }
  }

  export default ShoppList