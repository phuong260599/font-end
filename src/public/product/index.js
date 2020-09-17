import * as React from 'react';
import Item from './productItem/item';
import { connect } from "react-redux";
class Home extends React.Component {
    render() {
        const {data}= this.props.ProducItem
        return (
            <div className="container">
                <div className="row">
                    {data.map((e,index)=>{
                        return <Item key={index} e={e} />
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getData();
      }
}
const mapStateToProps = (state) => {
    return {
        ProducItem: state.ProducItem
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      getData:() => dispatch({ type: "GET_PRODUCT_ITEM_REQUEST" }),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Home);
