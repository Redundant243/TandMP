import {Component} from "react";

export class Item extends Component{
    buyProduct(id,title){
        document.getElementById(id).className = "productChoice";
        localStorage.setItem(id,title);
        }
    render() {
        let title = this.props.item.title;
        let price = this.props.item.price;
        let category = this.props.item.category;
        let id = this.props.item.id;
        let name = "productChoice";
        if(localStorage.getItem(id)===null) {name = "product";}
        return(
            <div id={id} className={name} 
            onClick={() => { this.buyProduct(id,title) }}>
                <span style={{marginLeft: "10px"}}>{title}</span>
                <span style={{marginLeft: "10px"}}>{category}</span>
                <span style={{marginRight: "60px"}}>{price}</span>
                <img src="./img/miniBasket.png" className="buyImg" alt="buy"/>
            </div>
        )
    }
}
export default Item