var Button = React.createClass({
  clickEvent: function() {
	  console.log(this.props.btnNm);
  },
  render: function() {
    return (
	  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.clickEvent}>{this.props.btnNm}</button>
    );
  }
});

ReactDOM.render(<Button btnNm="Get Images" />, document.getElementById('btn1'));
ReactDOM.render(<Button btnNm="Get Links" />, document.getElementById('btn2'));
