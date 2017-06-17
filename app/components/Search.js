// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">History of Search</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Address:</h1>
          <p>{this.props.address}</p>
          <h1>Time:</h1>
          <p>{this.props.time}</p>
        </div>
      </div>
    );
  }
});

module.exports = Search;
