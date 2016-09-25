// Libs
import { connect } from 'react-redux';
import GridTag from 'grid/grid.jsx';
// Actions
import { requestData,changeDirection, changeColumnOrder,addRow } from 'grid.js';

class Grid extends React.Component {
    componentWillMount() {
        this.props.dispatch(requestData())
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (<GridTag
            data={this.props.data}
            columns={this.props.columns}
            onChangeDirection={(key, sort)=>this.props.dispatch(changeDirection(key, sort))}
            onAddRow={(data)=>this.props.dispatch(addRow(data))}
            onChangeColumnOrder={(key, direction)=>this.props.dispatch(changeColumnOrder(key, direction))}
        />);
    }
}


export default connect(function (state) {
    return ({data: state.getIn(['grid', 'data']), columns: state.getIn(['grid', 'columns'])});
})(Grid);

