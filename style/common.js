// common parts of all styles, mostly shorthand functions and magic

import {CircleSymbolizer, IconSymbolizer, TextSymbolizer} from 'protomaps'
import { GroupSymbolizer, CenteredTextSymbolizer, OffsetTextSymbolizer } from 'protomaps'
import { LineSymbolizer, LineLabelSymbolizer } from 'protomaps'
import { PolygonSymbolizer, PolygonLabelSymbolizer } from 'protomaps'
import { Labelers} from 'protomaps/src/labeler';
import {RewriteableTextAttr} from "./RewriteableTextAttr";

const error = function(msg) {
    console.error(msg);
    console.trace();
};

// strongly inspired by https://github.com/severak/mapstyles/blob/master/lualibs/mapdef.lua

// this makes styles less talkative (and less flexible)
export const makeStyle = function() {
    let style = {
      paint_rules : [],
      label_rules : [],
    };

    // background of map
    style.background = function(color) {
        style.paint_rules.push({
            dataLayer: 'earth',
            symbolizer: (new PolygonSymbolizer({
                fill: color
            }))
        });
    };

    // simple line
    style.line = function (def) {
        if (!def.what) error('undefined what for line!');
        if (!def.color) error('undefined color for line!');
        def.width = def.width || 1;

        let rule = {
            dataLayer: def.what.dataLayer,
            symbolizer: (new LineSymbolizer({
                color: def.color,
                width: def.width,
                lineJoin: "round",
                lineCap: "round"
            })),
        };

        if (def.what.filter) {
            rule.filter = def.what.filter;
        }

        style.paint_rules.push(rule);
    };

    // simple polygon
    style.area = function (def) {
        if (!def.what) error('undefined what for area!');
        if (!def.color) error('undefined color for area!');

        let rule = {
            dataLayer: def.what.dataLayer,
            symbolizer: (new PolygonSymbolizer({
                fill: def.color
            })),
        };

        if (def.what.filter) {
            rule.filter = def.what.filter;
        }

        style.paint_rules.push(rule);
    };

    // simple (centered) text
    style.name = function (def) {
        if (!def.what) error('undefined what for name!');
        if (!def.color) error('undefined color for name!');

        let rule = {
            dataLayer: def.what.dataLayer,
            symbolizer: (new CenteredTextSymbolizer({
                fill: def.color,
                // TODO - halo -> stroke
            })),
        };

        if (def.what.filter) {
            rule.filter = def.what.filter;
        }

        if (def.text && (typeof def.text == "function") && rule.symbolizer.centered.symbolizer instanceof TextSymbolizer) {
            // TODO - implement this ugly hack in better way
            // hack - we are going to change our text attr to hacked one
            rule.symbolizer.centered.symbolizer.text = new RewriteableTextAttr({
                label_props: def.text
            });
        }

        style.label_rules.push(rule);
    };

    // text on path
    style.streetName = function (def) {
        // TODO - implement
    };

    // icon
    style.icon = function (def) {
        // TODO - implement
    };

    // text with icon
    style.namedIcon = function (def) {
        // TODO - implement
    };

    // circle
    style.circle = function (def) {
        // TODO - implement
    };

    // circle with text
    style.namedCircle = function (def) {
        // TODO - implement
    };

    return style;
};

export const switchToStyle = function (layer, style) {
    layer.paint_rules = style.paint_rules;
    layer.label_rules = style.label_rules;
    layer.labelers = new Labelers(
        layer.scratch,
        layer.label_rules,
        16,
        layer.onTilesInvalidated
    );
    layer.rerenderTiles();
};

export const randomColor =  function () {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
