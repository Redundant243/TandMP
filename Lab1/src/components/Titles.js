import {Component} from "react";

export class Titles extends Component{
    //{this.state.categories.map(el =>(<div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>))}
    //
    onKeyDown = e =>{
        if(e.code ==='Enter')
        {
            this.props.findTitle(document.getElementById('title_to_find').value);
        }
    }
    render() {
        return(
            <div className={'titles'}><br/>Введите искомое название и нажмите Enter:
                <br/>
                <input onKeyDown={this.onKeyDown} id={'title_to_find'} className={'input_title'}/>
            </div>
        )
    }
}
export default Titles