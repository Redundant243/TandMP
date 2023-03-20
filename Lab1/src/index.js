import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
/*
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/

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
    let Key ='';
    let Cost ='';
    for (var i = 0; i < localStorage.length; i++) {
      Key = localStorage.key(i);
      Cost = localStorage.getItem(Key);
      shopList.push({key: Key, cost: Cost, id: i})
    }
    return(
      <>
      {shopList.map(({ key, cost, id }) => (
        <div key={id} className="product">
        <span style={{marginLeft: "10px"}}>{key}</span>
        <span style={{marginRight: "60px"}}>{cost}</span>
        <img src="./data/remove.svg" style={{width: "20px"}}  className="buyImg" alt="No" 
         onClick={() => { this.countChange(key) }}/>
      </div>
      ))}
    </>
    )
  }
  render(){
    if(localStorage.length === 0){
      return(
        <><h1 style={{ textAlign: 'center' }}>
        Корзина:
       </h1>
        <div className="showcase" 
          style={{ display: "flex",alignItems: "center",flexDirection: "column"}}>
          <img src="./data/empty.png" style={{ width: "300px" }} alt="Empty" />
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
      <div style={{display: "flex",justifyContent: "center", marginTop: "20px"}}>
        <button className="ButSend" onClick={() => alert("Ваш заказ принят. Ждите")}>Оформить заказ</button>
      </div>
      </>
    )
  }
}

class Product extends React.Component{
  buyProduct(id,fileName,price){
    document.getElementById(id).className = "productChoice";
    localStorage.setItem(fileName,price);
  }
  render(){
    let name = "productChoice";
    if(localStorage.getItem(this.props.fileName)===null) {name = "product";}
    return(
      <div id={this.props.id} className={name} 
       onClick={() => { this.buyProduct(this.props.id,this.props.fileName,this.props.price) }}>
          <span style={{marginLeft: "10px"}}>{this.props.fileName}</span>
          <span style={{marginRight: "60px"}}>{this.props.price}</span>
          <img src="./data/pngegg.png" className="buyImg" alt="buy"/>
      </div>
    )
  }
}

class ValuesSearch extends React.Component{
  render(){
    if(this.props.name === this.props.value){
      return(
        <option value={this.props.name} selected = {"selected"}>{this.props.text}</option>
      )
    }
    return(
      <option value={this.props.name}>{this.props.text}</option>
    )
  }
}

class MenuSearch extends React.Component{
  createValue(Name,Text){
    return <ValuesSearch name = {Name} text = {Text} value = {this.props.value}/>;
  }
  createProduct(num,FileName,Price){
    return <Product id = {num} fileName = {FileName} price = {Price}/>;
  }
  render(){
    return(
      <><h1 style={{textAlign: 'center'}}>
      Ассортимент лабораторных работ:
      </h1>
      <div className="searchPage">
        <div>
          <label for="subject-select">Предмет:</label>
          <div className="styled-select">
            <select id="subject-select">
              {this.createValue("","Все предметы")}
              {this.createValue("math","Математика")}
              {this.createValue("physics","Физика")}
              {this.createValue("electronics","Электронника")}
              {this.createValue("chemistry","Химия")}
            </select>
          </div>
        </div>
        <div>
          <label for="lab-select">Номер лабораторной:</label>
          <div className="styled-select">
            <select id="lab-select">
              {this.createValue("","Все лабораторные")}
              {this.createValue("1","Лабораторная №1")}
              {this.createValue("2","Лабораторная №2")}
              {this.createValue("3","Лабораторная №3")}
              {this.createValue("4","Лабораторная №4")}
            </select>
          </div>
        </div>
      </div>
      <div className="showcase">
        {this.createProduct("1","LR1.docs","1000 RUB")}
        {this.createProduct("2","LR2.docs","699 RUB")}
        {this.createProduct("3","LR23.docs","56 RUB")}
        {this.createProduct("4","LR7.docs","234 RUB")}
      </div></>
    )
  }
}

class SelectBut extends React.Component{
  render(){
    return(
      <button className="categories" onClick={() => { this.props.handleClick("page_2",this.props.name);}}>
          <img src={this.props.imgUrl} alt={this.props.name}/>
          <div>{this.props.text}</div>
      </button>
    )
  }
}

class MenuChoice extends React.Component {
  createBut (Text, Name, ImgUrl){
    return (
      <SelectBut text={Text} name ={Name} imgUrl={ImgUrl} handleClick = {this.props.handleClick}/>
    );
  }
  render(){
    return(
      <>
      <h1 style={{textAlign: 'center'}}>
        Выберите предмет:
      </h1><div className="choiceList">
        {this.createBut("Математика","math","data/math.png")}
        {this.createBut("Химия","chemistry","data/chemical.png")}
        {this.createBut("Электронника","electronics","data/electro.png")}
        {this.createBut("Физика","physics","data/physic.png")}
      </div>
      </>
    )
  }
}

class MenuField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      page: "page_1",
      value: "",
    };
  }
  handleChange(Page, Value) {
    this.setState({page: Page, value: Value});
  }
  generateMenu(){
    switch(this.state.page) {
      case 'page_1':
        return(
          <div>
            <MenuChoice handleClick = {this.handleChange}/>
          </div>
        )
      case 'page_2':
        return(
          <div>
            <MenuSearch value = {this.state.value}/>
          </div>
        )
      case 'page_3':
        return(
          <div>
            <ShoppList/>
          </div>
        )
      default:
        
        break;
    }
  }
  render(){
    return(
      <><header className="topMenu">
      <div class="title" onClick={() => { this.handleChange("page_1","")}}>
        LabTheme
      </div>
      <div className="icons">
        <div>
          <img id="search" src="data/discover.png" className="image" alt={"search"}/>
        </div>
        <div class="basket">
          <img src="data/basket.svg" className="image" alt={"basket"} 
           onClick={() => { this.handleChange("page_3","")}}/>
        </div>
      </div>
    </header><div className="mainMenu" style={{display: 'flow-root'}}>
      {this.generateMenu()}
    </div></>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MenuField />);