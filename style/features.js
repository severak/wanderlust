// this is list of all filters to reuse them
// (this will be implemented also for other data sources)

// refer to https://protomaps.com/docs/map-layers-tags
// and https://wiki.openstreetmap.org/wiki/Cs:Map_Features

// suffixes:
// _all - all features of this type (without filter)
// _surface - not bridge or tunnel (lines)
// _bridge, _tunnel


const features = {
    wood: {
        dataLayer: 'natural',
        filter: function(z, f) {
            return f.props.natural == "wood" || f.props.landuse=="forest"
        },
    },

    waterways_all: {
        dataLayer: 'physical_line',
        filter: function(z, f) {
            return f.props["waterway"] == "river" || (z > 15 && f.props['waterway']=="stream");
        }
    },

    water_all: {
        dataLayer: 'water',
    },

    roads_all: {
        dataLayer: 'roads'
    },

    // TODO - road types

    railways_all: {
        dataLayer: 'transit',
        filter: function (z, f) {
            return f.props['railway'] == 'rail';
        }
    },

    // TODO - tram, subway, lightRail, etc...
    // also ferries and airplane things

    buildings_all: {
        dataLayer: 'buildings'
    },

    municipality: {
        dataLayer: 'places',
        filter: function(z, f) {
            const municipalityLike = ['city', 'town', 'village', 'hamlet'];
            return municipalityLike.includes(f.props.place);
        }
    },

    // TODO - municipalityPart

    stateBorders: {
        dataLayer: 'boundaries',
        filter: function (z, f) {
            return f.props['pmap:min_admin_level']==2;
        }
    }
};

export { features };
