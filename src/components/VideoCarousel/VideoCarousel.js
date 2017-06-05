/**
 * VideoCarousel
 * Renders a header and a list of VideoItems
 */
import React from 'react';
import {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './VideoCarousel.css';

// Load child components
import VideoItem from '../VideoItem';

class VideoCarousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {header, videos, count, onIncrement, onDecrement, onLoadMore} = this.props;
        let videoItems = this.renderVideoItems();

        return (
            <div className={ styles.main }>

                <h1>
                    {header}
                </h1>

                <div
                    className={ styles.counterContainer }
                >
                    <button type="button" onClick={(e) => onDecrement() }>
                        -
                    </button>

                    <strong>
                        Count: {count}
                    </strong>

                    <button type="button" onClick={(e) => onIncrement() }>
                        +
                    </button>

                </div>

                <div>
                    <button
                        type="button" onClick={ (e) => onLoadMore() }
                        >
                        Load more
                    </button>
                </div>

                <div className={ styles.items }>
                    {videoItems}
                </div>

            </div>
        );

    }

    /**
     * Creates list of VideoItems
     */
    renderVideoItems() {
        let {count} = this.props;
        var i = 0;

        // Create video items for each video and pass object as props
        let videoItems = this.props.videos.map((video) => {
            i++;
            return (
                <VideoItem {...video} key={Math.floor(Math.random() * 10000)}></VideoItem>
            );
        });

        // If empty, add some other text
        if (!videoItems.length) {
            videoItems.push(<div key={0}>no videos!</div>);
        }

        return videoItems;
    }

    onClick(e) {
        console.log('onclick');
    }

}

VideoCarousel.defaultProps = {
    header: 'Default header',
    videos: [],
    count: 1
};

// export default VideoCarousel;

export default CSSModules(VideoCarousel, styles);
// module.exports = VideoCarousel;
