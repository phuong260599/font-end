import * as React from 'react';
import {connect} from 'react-redux';

class CreateItem extends React.Component {
    constructor (props){
        super(props);
        this.state={
            title:"",
            text:"",
            img:"",
            id:"",
        }
    }

    _onchange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }
    

    _onchangeImg = (e)=>{
        this.setState({
            img:e.target.files[0]
        })
    }
    
    _onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.id){
            var data = new FormData();
        data.append("title",this.state.title)
        data.append("text",this.state.text)
        data.append("image",this.state.img)
        this.props.create(data)
        }
        else{
        var data = new FormData();
        data.append("title",this.state.title)
        data.append("text",this.state.text)
        data.append("image",this.state.img)
        this.props.edit({data,id:this.state.id})
        }
        

    }

    componentWillReceiveProps (nextProps){
        console.log("next",nextProps)
        if(nextProps && nextProps.getEdit){
            const getEdit =nextProps.getEdit
            this.setState({
                title: getEdit.title,
                text: getEdit.text,
                id: getEdit._id
            })
        }
    }
    render(){
        const {getEdit}= this.props;
        const {title,text} = this.state;
        return(
            <div className="container">
            <form onSubmit = {this._onSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input value={title} type="text" name="title" onChange={this._onchange} className="form-control" />
            </div>
            <div className="form-group">
              <label >Text</label>
              <input value={text} type="text" name="text" onChange={this._onchange} className="form-control"  />
            </div>
            <div className="custom-file mb-3">
            <input type="file" className="custom-file-input" name="img" onChange={this._onchangeImg}  id="img" />
            <label className="custom-file-label" htmlFor="img">Image</label>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getEdit: state.ProducItem.dataEdit
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        create:(data) => dispatch({ type: "CREATE_PRODUCT_ITEM_REQUEST",data }),
        edit:({data,id}) => dispatch({ type: "UPDATE_PRODUCT_ITEM_REQUEST",data,id}),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(CreateItem);
