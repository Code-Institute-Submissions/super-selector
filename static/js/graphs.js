// Load data from both csv files

Promise.all([d3.csv('../data/character-info.csv'), d3.csv('../data/costume-colors.csv')])
    .then(function(data) {

        // Tidy data before use

        data.forEach(function(d) {
            d.Height = +d.Height;
            d.Weight = +d.Weight;
            d.Strength = +d.Strength;
        });

        // Bring in data from character-info.csv and costume-colors.csv

        var ndx = crossfilter(data[0]);
        ndxcol = crossfilter(data[1]);

        // Create colorScale to dynamically color pie chart slices

        var colorScale = d3.scaleOrdinal()
            .domain(data[1].map(row => row.Name))
            .range(data[1].map(row => row.RGB));

        // Define chart types

        var speciesChart = dc.rowChart('#species-selector');
        genderChart = dc.pieChart('#gender-selector');
        alignmentChart = dc.pieChart('#alignment-selector');
        colorChart = dc.pieChart('#costume-selector');
        powerSelection = dc.selectMenu('#power-selection');
        characterTable = dc.dataGrid('#character-table');

        // Define chart dimensions

        var characterSpecies = ndx.dimension(dc.pluck('Species'));
        characterGender = ndx.dimension(dc.pluck('Gender'));
        characterAlignment = ndx.dimension(dc.pluck('Alignment'));
        costumeColor = ndx.dimension(dc.pluck('Costume Color'));
        powerList = ndx.dimension(dc.pluck('Superpower'));
        characterList = ndx.dimension(dc.pluck('Name'));

        // Define chart groups

        var speciesSelection = characterSpecies.group();
        genderSelection = characterGender.group();
        alignmentSelection = characterAlignment.group();
        colorSelection = costumeColor.group();
        powerSelector = powerList.group();

        // Create species row chart

        speciesChart
            .width(800)
            .height(700)
            .dimension(characterSpecies)
            .group(speciesSelection)
            .transitionDuration(500)
            .x(d3.scaleOrdinal())
            .elasticX(true)
            .colors(colorScale)
            .fixedBarHeight(25)
            .addFilterHandler(function(filters, filter) { return [filter]; });

        // Create gender pie chart

        genderChart
            .width(500)
            .height(500)
            .radius(200)
            .colors(colorScale)
            .dimension(characterGender)
            .group(genderSelection)
            .transitionDuration(500)
            .addFilterHandler(function(filters, filter) { return [filter]; });

        // Create alignment pie chart

        alignmentChart
            .width(500)
            .height(500)
            .radius(200)
            .colors(colorScale)
            .dimension(characterAlignment)
            .group(alignmentSelection)
            .transitionDuration(500)
            .addFilterHandler(function(filters, filter) { return [filter]; });

        // Create costume color pie chart

        colorChart
            .width(500)
            .height(500)
            .radius(200)
            .slicesCap([7])
            .dimension(costumeColor)
            .group(colorSelection)
            .transitionDuration(500)
            .colors(colorScale)
            .addFilterHandler(function(filters, filter) { return [filter]; });;

        // Create superpower select menu

        powerSelection
            .dimension(powerList)
            .group(powerSelector);


        // Create character data grid

        characterTable
            .dimension(characterList)
            .section(function(d) {
                return '';
            })
            .htmlSection(function(d) {
                return '<p>You have selected:</p>';
            })
            .html(function(d) {
                return '<h1>' + d.Name + '</h1><p>Publisher: ' + d.Publisher + '<br>Strength: ' + d.Strength + '<br>Height: ' + d.Height + 'cm<br>Weight: ' + d.Weight + 'kg</p><img class="img-fluid" src="' + d.Image + '" alt="' + d.Name + '"><br>' + '<p>' + d.Summary + '</p>';
            })
            .endSlice(1);

        // Draw all charts

        dc.renderAll();

    });
