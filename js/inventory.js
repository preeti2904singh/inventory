var NavBar = React.createClass({
	render: function(){
		return(
			<div>
				<nav className="navbar navbar-default custom_nav" role="navigation">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">{this.props.brand}</a>
						</div>
					</div>
				</nav>
			</div>
		)
	}
});

var Search = React.createClass({
	render: function(){
		return(
			<div className="container-fluid">
				<div className="row">
				<div className="col-md-12">
					<div className="search_wrap">
						<i className="fa fa-search icon_search" aria-hidden="true"></i>
						<input type="search" name=""  id="myInput" onkeyup="myFunction()"  className="form-control input_style" value="" required="required" title="" placeholder="Search for the item" />
					</div>
				</div>
				</div>
			</div>
		)
	}
});

var Table = React.createClass({
	render: function(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" id="item" placeholder="Input field" />
								<input type="text" className="form-control" id="place" placeholder="Input field" />
								<input type="text" className="form-control" id="time" placeholder="Input field" />
							</div>
							<button type="button" className="btn btn-primary add-row" value="Add Row"> Add Row</button>
						</form>
						
						<table className="table" id="myTable">
							<thead>
								<tr className="header">
									<th>Item</th>
									<th>Place</th>
									<th>Time</th>
									<th>Action</th>
								</tr>
							</thead>
						</table>
						
					</div>
				</div>
			</div>
		)
	}
});

var App = React.createClass({
	render: function(){
		return(
			<div>
				<NavBar brand="Inventory Management"/>
				<Search />
				<Table />
			</div>
		)
	}
});


ReactDOM.render(
	<App />,
	document.getElementById('app')
);