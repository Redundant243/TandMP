import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
/*
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/

class SelectBut extends React.Component{
    handleClick(value) {
      this.props.handleClick(value);
    }
    render(){
      return(
        <button className="categories" /*onClick={handleClick(this.props.value)}*/>
            <img src={this.props.imgUrl} alt={this.props.name}/>
            <div>{this.props.name}</div>
        </button>
      )
    }
  }
  
  class MenuChoice extends React.Component {
    createBut (Name, ImgUrl){
      return (
        <SelectBut name ={Name} imgUrl={ImgUrl} value={this.props.value} handleClick = {this.handleClick}/>
      );
    }
    render(){
      return(
        <>
        <h1 style={{textAlign: 'center'}}>
          Выберите предмет:
        </h1><div className="choiceList">
          {this.createBut("Math","data/math.png")}
          {this.createBut("Physich","data/chemical.png")}
          {this.createBut("asd","data/electro.png")}
          {this.createBut("Maxacdfth","data/physic.png")}
        </div>
        </>
      )
    }
  }
  
  class Product extends React.Component{
    render(){
      return(
        <div className="product">
            <span style={{marginLeft: "10px"}}>{this.props.fileName}</span>
            <span style={{marginRight: "60px"}}>{this.props.price}</span>
            <img src="./data/pngegg.png" className="buyImg" alt="buy"/>
        </div>
      )
    }
  }
  
  class MenuSearch extends React.Component{
    createValue(Name,Text){
      return <ValuesSearch name = {Name} text = {Text}/>;
    }
    createProduct(FileName,Price){
      return <Product fileName = {FileName} price = {Price}/>;
    }
    render(){
      return(
        <><div className="searchPage">
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
        <div class="showcase">
          {this.createProduct("LR1.docs","1000 RUB")}
          {this.createProduct("LR2.docs","699 RUB")}
          {this.createProduct("LR23.docs","56 RUB")}
          {this.createProduct("LR7.docs","234 RUB")}
        </div></>
      )
    }
  }
  
  class MenuField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Value: "page_1",
      };
      this.changeCount = this.changeCount.bind(this);
    }
    changeCount(){
      this.setState({Value: "page_2"});
    }
    render(){
      switch(this.state.Value) {
        case 'page_1':
          return(
            <div>
              <MenuChoice value = {this.state.Value} handleClick = {this.handleClick}/>
            </div>
          )
        case 'page_2':
          return(
            <div>
              <MenuSearch />
            </div>
          )
      
        default:
          
          break;
      }
    }
  }
  
  class ValuesSearch extends React.Component{
    render(){
      return(
        <option value={this.props.name}>{this.props.text}</option>
      )
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MenuField />);
  