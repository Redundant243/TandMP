import {Component} from "react";

export class Titles extends Component{
    onKeyDown = e =>{
        if(e.code ==='Enter')
        {
            this.props.findTitle(document.getElementById('title_to_find').value);
        }
    }
    render() {
        return(
            <div className={'titles'}>
                <input onKeyDown={this.onKeyDown} id={'title_to_find'} type="text" placeholder="Поиск..."/>
            </div>
        )
    }
}
export default Titles