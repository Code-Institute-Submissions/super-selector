Promise.all([d3.csv('../data/character-info.csv'), d3.csv('../data/costume_colors.csv')])
    .then(function(data) {
        data.forEach(function(d) {
            d.Height = +d.Height;
            d.Weight = +d.Weight;
            d.Strength = +d.Strength;
        });
        
    var ndx = crossfilter(data[0]);
    var ndxcol = crossfilter(data[1]);
    
    
    var speciesChart = dc.rowChart('#species-selector');
    var genderChart = dc.pieChart('#gender-selector');
    var alignmentChart = dc.pieChart('#alignment-selector');
    var colorChart = dc.pieChart('#costume-selector');
    var powerChart = dc.rowChart('#power-selector');
    
    
    var characterSpecies = ndx.dimension(dc.pluck('Species'));
    var characterGender = ndx.dimension(dc.pluck('Gender'));
    var characterAlignment = ndx.dimension(dc.pluck('Alignment'));
    var costumeColor = ndx.dimension(dc.pluck('Costume Color'));
    var characterPower = ndx.dimension(dc.pluck('Superpower'));
    
    var speciesSelection = characterSpecies.group();
    var genderSelection = characterGender.group();
    var alignmentSelection = characterAlignment.group();
    var colorSelection = costumeColor.group();
    var powerSelection = characterPower.group();
    
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
        
    genderChart
        .width(500)
        .height(500)
        .radius(200)
        .dimension(characterGender)
        .group(genderSelection)
        .transitionDuration(500);
        
    alignmentChart
        .width(500)
        .height(500)
        .radius(200)
        .dimension(characterAlignment)
        .group(alignmentSelection)
        .transitionDuration(500);
        
    colorChart
        .width(500)
        .height(500)
        .radius(200)
        .slicesCap([7])
        .dimension(costumeColor)
        .group(colorSelection)
        .transitionDuration(500);
        
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
        
    dc.renderAll();
    
    });