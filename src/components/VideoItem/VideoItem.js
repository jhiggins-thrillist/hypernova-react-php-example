import React from 'react';
import {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './VideoItem.css';

class VideoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, id, onclick, count} = this.props;

        return (
            <div
                className={ styles.item }
                onClick={ (e) => { console.log('you clicked ' + title) }}
            >
                <h3>{title}</h3>
                <div>
                    This is a description for item #{id}
                </div>
                <br />
            </div>
        );
    }

}

module.exports = CSSModules(VideoItem, styles);
