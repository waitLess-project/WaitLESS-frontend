import { Component } from 'react';

/**
 * When using props try the naming convention of
 * this.props.<componentName><TheDataYouWantToChangeOrUpdate>
 */
export class ImageButton extends Component {
    render() {
        return (
            <button className={this.props.buttonClassName} style={{"cursor": "pointer"}}>
                <img className={this.props.imageClassName} src={this.props.imageSource} />
            </button>  
        ) 
    }
}