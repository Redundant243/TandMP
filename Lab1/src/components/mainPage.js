import React from 'react';
import Titles from './Titles';
import Items from './Items';
  
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
    render(){
      return(
        <><h1 style={{textAlign: 'center'}}>
        Ассортимент лабораторных работ:
        </h1>
        <div className="searchPage">
          <div>
            <label for="subject-select">Предмет:</label>
            <div className="styled-select">
              <select id="subject-select" onChange = {() => this.props.chooseCategory(document.getElementById("subject-select").value)} >
                {this.createValue("","Все предметы")}
                {this.createValue("Math","Математика")}
                {this.createValue("Physic","Физика")}
                {this.createValue("Electronic","Электронника")}
                {this.createValue("Chemistry","Химия")}
              </select>
            </div>
          </div>
          <div>
            <label for="lab-select">Номер лабораторной:</label>
            <div className="search">
              <Titles findTitle = {this.props.findTitle}/>
            </div>
          </div>
        </div>
        <div className="showcase">
          <Items items={this.props.items} />
        </div></>
      )
    }
  }

  export default MenuSearch