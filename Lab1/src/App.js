import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items: [
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
                    category: 'PE',
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
    }
    render() {
    return (
        <div className={'wrapper'}>
            <Header />
            <Items items={this.state.items} />
            <Footer />
        </div>
    );}
}

export default App;
