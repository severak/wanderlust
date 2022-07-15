// style VINCENT
//
// very simple style focused on railways

import { features } from '../features';
import { makeStyle, randomColor, switchToStyle } from '../common';

export default function vincent(layer, options) {
    let s = makeStyle();

    s.background('#EEE8D5');

    s.area({
        what: features.wood,
        color: '#CAEDAB',
    });

    s.area({
        what: {
            dataLayer: 'landuse',
            filter: function (z, f) {
                return z < 16 && (f.props.landuse=="residential" || f.props.landuse=="industrial");
            }
        },
        color: '#D6C1DE',
    });

    s.line({
        what: features.waterways_all,
        color: '#7BAFDE',

    });

    s.area({
        what: features.water_all,
        color: '#7BAFDE',
    });

    s.line({
        what: features.roads_all,
        color: '#F6C141'
    });

    s.line({
        what: features.railways_all,
        color: '#000',
    });

    s.area({
        what: features.buildings_all,
        color: '#D6C1DE',
    });

    s.line({
        what: features.stateBorders,
        color: '#882E72',
        width: 3,
    });

    s.name({
        what: features.municipality,
        color: '#000',
        text: options.transliterator || ['name']
    });

    switchToStyle(layer, s);
};
