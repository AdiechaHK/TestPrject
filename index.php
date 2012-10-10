  <!DOCTYPE html>
  <html>
  <head>
    <title>Test</title>
    <script type="text/javascript" src="jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="../widgets.css">
  </head>
  <body>
	<h1>Welcome friends</h1>
	<hr>
	<h4>Introduction</h4>
	<p> This is a game just click on the checkbox button and it'll inverts it's adjesnt, 
		<strong>Your task is to make all marked</strong> Go and Get your target...
	</p>
	<div>
		<label> Stage :: 1 <a href="#" id="stageChangeBtn">Change</a></label>
	</div>
	<hr>
	<table>
		<thead>
			<tr>	
				<th></th>
				<th>A</th>
				<th>B</th>
				<th>C</th>
				<th>D</th>
				<th>E</th>
			</tr>	
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<th><input type="checkbox" rel="a1" id="a1"></th>
				<th><input type="checkbox" rel="b1" id="b1"></th>
				<th><input type="checkbox" rel="c1" id="c1"></th>
				<th><input type="checkbox" rel="d1" id="d1"></th>
				<th><input type="checkbox" rel="e1" id="e1"></th>
			</tr>
			<tr>
				<th>2</th>
				<th><input type="checkbox" rel="a2" id="a2"></th>
				<th><input type="checkbox" rel="b2" id="b2"></th>
				<th><input type="checkbox" rel="c2" id="c2"></th>
				<th><input type="checkbox" rel="d2" id="d2"></th>
				<th><input type="checkbox" rel="e2" id="e2"></th>
			</tr>
			<tr>
				<th>3</th>
				<th><input type="checkbox" rel="a3" id="a3"></th>
				<th><input type="checkbox" rel="b3" id="b3"></th>
				<th><input type="checkbox" rel="c3" id="c3"></th>
				<th><input type="checkbox" rel="d3" id="d3"></th>
				<th><input type="checkbox" rel="e3" id="e3"></th>
			</tr>
			<tr>
				<th>4</th>
				<th><input type="checkbox" rel="a4" id="a4"></th>
				<th><input type="checkbox" rel="b4" id="b4"></th>
				<th><input type="checkbox" rel="c4" id="c4"></th>
				<th><input type="checkbox" rel="d4" id="d4"></th>
				<th><input type="checkbox" rel="e4" id="e4"></th>
			</tr>
			<tr>
				<th>5</th>
				<th><input type="checkbox" rel="a5" id="a5"></th>
				<th><input type="checkbox" rel="b5" id="b5"></th>
				<th><input type="checkbox" rel="c5" id="c5"></th>
				<th><input type="checkbox" rel="d5" id="d5"></th>
				<th><input type="checkbox" rel="e5" id="e5"></th>
			</tr>
		</tbody>
	</table>
	<hr>
	<h4>Status</h4>
	<div id="status"></div>
	<div id="result"></div>
  </body>
  </html>
