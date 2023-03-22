import {Component} from "react";
import Item from "./Item";

export class Items extends Component{
    render() {
        return(
            <>
                {
                    this.props.items.map(elem =>(
                        <Item key={elem.id} item={elem} />
                        )
                    )
                }
            </>
        )
    }
}
export default Items