import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import MenuChoice from './components/startPage';
import MenuSearch from './components/mainPage';
import ShoppList from './components/basketPage';

/*ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/

/*-----------------------------      Основное меню      -----------------------------*/
class MenuField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      page: localStorage.getItem("Page"),
      value: "",
      currentItems: [],
            items: [
                {
                    id: 0,
                    title: 'LabWork_1',
                    desc: 'Second lab',
                    category: 'Chemistry',
                    price: '228'
                },
                {
                    id: 1,
                    title: 'LabWork_1',
                    desc: 'First lab',
                    category: 'Math',
                    price: '50'
                },
                {
                    id: 2,
                    title: 'LabWork_2',
                    desc: '3 lab',
                    category: 'Physics',
                    price: '523'
                },
                {
                    id: 3,
                    title: 'LabWork_1',
                    desc: '4 lab',
                    category: 'Electronic',
                    price: '10000'
                },
                {
                    id: 4,
                    title: 'LabWork_2',
                    desc: 'Second lab',
                    category: 'Math',
                    price: '165'
                },
                {
                    id: 5,
                    title: 'LabWork_5',
                    desc: 'Second lab',
                    category: 'Math',
                    price: '165'
                },
                {
                    id: 6,
                    title: 'LabWork_3',
                    desc: 'Second lab',
                    category: 'Chemistry',
                    price: '228'
                },
            ]
    };
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.findTitle = this.findTitle.bind(this)
  }
    chooseCategory(category){
        if(category === "")
        {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    idList(list){
        this.setState({
            currentItems: this.state.items.filter(el => list.indexOf(el.id) !== -1)
        })
    }

    findTitle(title){
        this.setState({
            currentItems: this.state.items.filter(el => el.title === title)
        })
    }
  handleChange(Page, Value) {
    localStorage.setItem("Page", Page);
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
            <MenuSearch value = {this.state.value} items={this.state.currentItems}
             findTitle = {this.findTitle} chooseCategory={this.chooseCategory}/>
          </div>
        )
      case 'page_3':
        return(
          <div>
            <ShoppList handleClick = {this.handleChange} value = {this.state.value} 
             idList={this.state.idList} items={this.state.currentItems}/>
          </div>
        )
      default:
        return(
          <div>
            <MenuChoice handleClick = {this.handleChange}/>
          </div>
        )
    }
  }
  render(){
    return(
      <><header className="topMenu">
      <div class="title" onClick={() => { this.handleChange("page_1","")}}>
        LabTheme
      </div>
      <div className="icons">
        <div class="basket">
          <img src="img/basket.svg" className="image" alt={"basket"} 
           onClick={() => { this.handleChange("page_3",this.state.value)}}/>
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
