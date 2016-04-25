var Button = React.createClass({
  clickEvent: function() {
	  console.log(this.props.btnNm);
  },
  render: function() {
    return (
	  <button type="button" className="btn btn-primary" onClick={this.clickEvent}>{this.props.btnNm}</button>
    );
  }
});

ReactDOM.render(<Button btnNm="Get Image" />, document.getElementById('btn1'));
ReactDOM.render(<Button btnNm="Get Link" />, document.getElementById('btn2'));
