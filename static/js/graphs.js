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
        
    // Create fake group to filter null results
    
    function remove_bins(source_group) {
        var bins = Array.prototype.slice.call(arguments, 1);
        return {
            all: function() {
                return source_group.all().filter(function(d) {
                    return bins.indexOf(d.key) === -1;
                });
            }
        };
    }
    
    // Define chart types
    
    var speciesChart = dc.rowChart('#species-selector');
        genderChart = dc.pieChart('#gender-selector');
        alignmentChart = dc.pieChart('#alignment-selector');
        colorChart = dc.pieChart('#costume-selector');
        powerChart = dc.rowChart('#power-selector');
        characterTable = dc.dataTable('#character-table');
    
    // Define chart dimensions
    
    var characterSpecies = ndx.dimension(dc.pluck('Species'));
        characterGender = ndx.dimension(dc.pluck('Gender'));
        characterAlignment = ndx.dimension(dc.pluck('Alignment'));
        costumeColor = ndx.dimension(dc.pluck('Costume Color'));
        characterPower = ndx.dimension(dc.pluck('Superpower'));
        characterList = ndx.dimension(dc.pluck('Name'));
        
    // Define chart groups
    
    var speciesSelection = characterSpecies.group();
        genderSelection = characterGender.group();
        alignmentSelection = characterAlignment.group();
        colorSelection = costumeColor.group();
        powerSelection = characterPower.group();
        filterBlank = remove_bins(powerSelection, 'None');
        
    // Create species row chart
    
    speciesChart
        .width(1200)
        .height(700)
        .dimension(characterSpecies)
        .group(speciesSelection)
        .transitionDuration(500)
        .x(d3.scaleOrdinal())
        .elasticX(true)
        .fixedBarHeight(25)
        .addFilterHandler(function(filters, filter) {return [filter];});
        
    // Create gender pie chart
    
    genderChart
        .width(500)
        .height(500)
        .radius(200)
        .dimension(characterGender)
        .group(genderSelection)
        .transitionDuration(500);
        
    // Create alignment pie chart
    
    alignmentChart
        .width(500)
        .height(500)
        .radius(200)
        .dimension(characterAlignment)
        .group(alignmentSelection)
        .transitionDuration(500);
        
    // Create costume color pie chart
    
    colorChart
        .width(500)
        .height(500)
        .radius(200)
        .slicesCap([7])
        .dimension(costumeColor)
        .group(colorSelection)
        .transitionDuration(500)
        .colors(colorScale);
        
    // Create superpower row chart
    
    powerChart
        .width(1200)
        .height(1300)
        .dimension(characterPower)
        .group(powerSelection)
        .transitionDuration(500)
        .x(d3.scaleOrdinal())
        .elasticX(true)
        .fixedBarHeight(25)
        .addFilterHandler(function(filters, filter) {return [filter];});
        
    // Create character data table
    
    characterTable
        .dimension(characterList)
        .group(function(d) {
            return "";
        })
        .columns(["Name", "Strength"])
        .endSlice(1);
        
    // Draw all charts
    
    dc.renderAll();
    
    });