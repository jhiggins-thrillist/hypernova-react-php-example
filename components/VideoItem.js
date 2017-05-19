const React = require('react');
const {renderReact} = require('hypernova-react');

class VideoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, id} = this.props;
        return (
            <div>
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
