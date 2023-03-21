import {Component} from "react";

export class Categories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'Все'
                },
                {
                    key: 'Math',
                    name: 'Математика'
                },
                {
                    key: 'Electronic',
                    name: 'Электроника'
                },
                {
                    key: 'Physics',
                    name: 'Физика'
                },
                {
                    key: 'Programming',
                    name: 'Программирование'
                },
            ]
        }
    }
    render() {
        return(
            <div className={'categories'}>
                {this.state.categories.map(el =>(
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>)
                )}
            </div>
        )
    }
}
export default Categories