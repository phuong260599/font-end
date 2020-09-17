import * as React from 'react';

class ItemProduct extends React.Component{
    render() {
        return (
            <form className="form" onSubmit={this._onCreate}>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="form-group" style={{ width: "450px", margin: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  name="txtname"
                  value={this.state.txtname}
                  onChange={this._onChangeText}
                  placeholder="Item Name"
                  required
                />
              </div>
            </div>
            <div
              className="row"
              style={{ paddingTop: "5px", position: "absolute", right: "25px" }}
            >
              <button
                style={{
                  color: "white",
                  backgroundColor: "green",
                  textAlign: "right",
                  alignItems: "right",
                }}
                type="submit"
                className="btn mr-2"
              >
                Submit
              </button>
            </div>
          </form>
        );
    }
    
}

