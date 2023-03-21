import {Component} from "react";

export class Item extends Component{
    render() {
        return(
            <div className={'item'}>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <p>{this.props.item.category}</p>
                <b>{this.props.item.price}</b>
            </div>
        )
    }
}
export default Item