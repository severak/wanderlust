// this is list of all filters to reuse them
const feat = {};

// refer to https://protomaps.com/docs/map-layers-tags
// and https://wiki.openstreetmap.org/wiki/Cs:Map_Features

feat.log = function(z, f) {
    console.log(f.props);
};

feat.municipality = function(z, f) {
    const municipalityLike = ['city', 'town', 'village', 'hamlet'];
    return municipalityLike.includes(f.props.place);
};

// TODO - municipalityPart


feat.stateBorders = function(z, f) {
    return f.props['pmap:min_admin_level']==2;
};

feat.waterways = function(z, f) {
    return f.props["waterway"] == "river" || (z > 15 && f.props['waterway']=="stream");
};

feat.wood = function(z, f) {
    return f.props.natural == "wood" || f.props.landuse=="forest"
};

// railway
feat.railway = function (z, f) {
    return f.props['railway'] == 'rail';
};

// TODO - railway_surface, railway_bridge, railway_tunnel
// TODO - tram, subway, light_rail

export { feat };
