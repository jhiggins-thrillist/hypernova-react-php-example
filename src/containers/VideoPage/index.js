import VideoCarousel from '../../components/VideoCarousel';
// import { incrementCounter, decrementCounter } from '../../Actions/Counter';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count,
        header: state.header,
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {

    return {

        onIncrement() {
            return dispatch({
                type: 'INCREMENT'
            });
        },

        onDecrement() {
            return dispatch({
                type: 'DECREMENT'
            });
        },

        onLoadMore() {
            return dispatch({
                type: 'LOAD_MORE'
            });
        }

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCarousel);