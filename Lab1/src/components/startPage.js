import React from 'react';

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
          {this.createBut("Математика","Math","img/math.png")}
          {this.createBut("Химия","Chemistry","img/chemical.png")}
          {this.createBut("Электронника","Electronic","img/electro.png")}
          {this.createBut("Физика","Physic","img/physic.png")}
        </div>
        </>
      )
    }
  }

  export default MenuChoice