import React from 'react';
import {Component} from 'react';

class VideoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, id, onclick, count} = this.props;
        return (
            <div onClick={(e) => { console.log('you clicked ' + title) }}>
                <h3>{title}</h3>
                <div>
                    VIDEO #{id} GOES HERE
                </div>
                <br />
            </div>
        );
    }

}

module.exports = VideoItem;
