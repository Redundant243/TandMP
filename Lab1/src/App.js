import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import Titles from "./components/Titles";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentItems: [],
            items: [
                {
                    id: 0,
                    title: 'Lab0',
                    desc: ' lab',
                    category: 'Programming',
                    price: '100'
                },
                {
                    id: 1,
                    title: 'Lab1',
                    desc: 'First lab',
                    category: 'Math',
                    price: '100'
                },
                {
                    id: 3,
                    title: 'Lab3',
                    desc: '3 lab',
                    category: 'Physics',
                    price: '10'
                },
                {
                    id: 4,
                    title: 'Lab4',
                    desc: '4 lab',
                    category: 'Electronic',
                    price: '10000'
                },
                {
                    id: 2,
                    title: 'Lab2',
                    desc: 'Second lab',
                    category: 'Math',
                    price: '101'
                }
            ]
        }
        this.state.currentItems = this.state.items
        this.chooseCategory = this.chooseCategory.bind(this)
        this.findTitle = this.findTitle.bind(this)
    }
    render() {
    return (
        <div className={'wrapper'}>
            <Header />
            <Categories chooseCategory={this.chooseCategory}/>
            <Titles findTitle={this.findTitle}/>
            <br/>
            <Items items={this.state.currentItems} />
            <Footer />
        </div>
    );
    }

    chooseCategory(category){
        if(category === 'All')
        {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }
    findTitle(title){
        this.setState({
            currentItems: this.state.items.filter(el => el.title === title)
        })
    }
}

export default App;
