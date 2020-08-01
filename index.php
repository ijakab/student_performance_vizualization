<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vizualizacija podataka</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body>

<div class="container">
    <br>

    <form class="form-inline" id="filterForm">
        <div class="input-group mb-2 mr-sm-2">
            <select class="form-control" id="filterFieldSelect">
            </select>
        </div>

        <div class="input-group mb-2 mr-sm-2">
            <select class="form-control" id="filterOperatorSelect">
                <option value="equals">Equals</option>
                <option value="greater than">More than</option>
                <option value="less than">Less than</option>
            </select>
        </div>

        <div class="input-group mb-2 mr-sm-2">
            <input type="text" class="form-control" placeholder="Value" id="filterValueSelect" required>
        </div>

        <button type="submit" class="btn btn-primary mb-2">Add filter</button>
    </form>

    <br>

    <div id="filter-container">
        <span class="badge badge-danger">Something equals 5 X</span>
        <span class="badge badge-danger">Something equals 4 X</span>
    </div>

    <br>

    <form id="numericForm">
        <div class="form-group">
            <label for="numericSelect1">X axis</label>
            <select class="form-control numeric-fields" id="numericSelect1">
            </select>
        </div>
        <div class="form-group">
            <label for="numericSelect2">Y axis</label>
            <select class="form-control numeric-fields" id="numericSelect2">
            </select>
        </div>
        <div class="form-group">
            <button class="btn btn-lg btn-primary" id="analyze-numeric">Analyze</button>
        </div>
    </form>

    <div id="svgContainer"></div>
    <br>
</div>

<script src="d3.js"></script>
<script src="dataset.js"></script>
<script src="data.js"></script>
<script src="drawer.js"></script>
<script src="app.js"></script>
</body>
</html>