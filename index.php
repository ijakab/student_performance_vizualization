<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vizualizacija podataka</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <br>

    <form class="form-inline" id="filterForm">
        <div class="input-group mb-2 mr-sm-2">
            <select class="form-control">
                <option>Broj godina</option>
                <option data-val="14" data-field="age">14</option>
                <option data-val="15" data-field="age">15</option>
                <option data-val="16" data-field="age">16</option>
                <option data-val="17" data-field="age">17</option>
                <option data-val="18" data-field="age">18</option>
            </select>
        </div>

        <div class="input-group mb-2 mr-sm-2">
            <select class="form-control">
                <option>Večina obitelji</option>
                <option data-val="LE3" data-field="famsize">Manje od 3</option>
                <option data-val="GT3" data-field="famsize">Više od 3</option>
            </select>
        </div>

        <div class="input-group mb-2 mr-sm-2">
            <select class="form-control">
                <option>Pohađa izvannastavne aktivnosti</option>
                <option data-val="yes" data-field="activities">Da</option>
                <option data-val="no" data-field="activities">Ne</option>
            </select>
        </div>
    </form>

    <br>

    <div id="filter-container">
    </div>

    <br>

    <div class="row">
        <div class="col-6">
            <form id="numericForm">
                <div class="form-group">
                    <label for="numericSelect1">X axis</label>
                    <select class="form-control numeric-fields" id="numericSelect1">
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary" id="analyze-numeric">Analyze</button>
                </div>
            </form>

            <div id="svgContainer"></div>
            <br>
        </div>

        <div class="col-6">
            <form id="numericForm2">
                <div class="form-group">
                    <label for="numericSelect1">X axis</label>
                    <select class="form-control numeric-fields" id="numericSelect2">
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary">Analyze</button>
                </div>
            </form>

            <div id="svgContainer2"></div>
            <br>
        </div>
    </div>
</div>

<script src="d3.js"></script>
<script src="dataset.js"></script>
<script src="data.js"></script>
<script src="drawer.js"></script>
<script src="app.js"></script>
</body>
</html>
