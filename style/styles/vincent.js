// style VINCENT
//
// very simple style focused on railways

import { feat } from '../features';
import { makeStyle, randomColor, switchToStyle } from '../common';

export default function vincent(layer, options) {
    let s = makeStyle();

    s.background('#EEE8D5');

    s.area({
        layer: 'natural',
        color: '#CAEDAB',
        what: feat.wood
    });

    s.line({
        layer: 'physical_line',
        color: '#7BAFDE',
        what: feat.waterways
    });

    s.area({
        layer: 'water',
        color: '#7BAFDE',
    });

    s.line({
        layer: 'roads',
        color: '#F6C141'
    });

    s.line({
        layer: 'transit',
        color: '#000',
        what: feat.railway
    });

    s.area({
        layer: 'buildings',
        color: '#D6C1DE',
    });

    s.line({
        layer: 'boundaries',
        color: '#882E72',
        width: 3,
        what: feat.stateBorders
    });

    s.name({
        layer: 'places',
        color: '#000',
        text: options.transliterator || ['name'],
        what: feat.municipality
    });

    switchToStyle(layer, s);
};
