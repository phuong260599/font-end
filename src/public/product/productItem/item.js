import * as React from 'react';
import img from '../../../img/index';
import { connect } from "react-redux";
import {Link } from "react-router-dom"

class Item extends React.Component {
    _onDelete = (id) =>{
        this.props.delete(id)
        console.log ("==========",id)
    }

    _onEdit = (id) =>{
        this.props.getEdit(id)
    }
    render() {
        const {e}= this.props
        return (
                    <div className="col-md-3">
                        <div className="card " >
                            <img className=" card-img-top" src={"http://localhost:3000/"+ e.image} alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">
                                    {e.text}
                                </p>
                                <a href="#" className="btn btn-primary" onClick={() => this._onDelete(e._id)}>DELETE</a>
                                <Link to="/create" className="btn btn-danger ml-2" onClick={() => this._onEdit(e._id)}>EDIT</Link>
                            </div>
                        </div>
                    </div>
        )
    }
  
}
const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      delete:(id) => dispatch({ type: "DELETE_PRODUCT_ITEM_REQUEST", id }),
      getEdit:(id) => dispatch({ type: "EDIT_PRODUCT_ITEM_REQUEST", id }),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Item);
