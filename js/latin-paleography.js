import define1 from "./latin-paleography-footnotes.js";

function _1(md){return(
md`# Latin Paleography and Typography`
)}

function _3(md){return(
md`## Code`
)}

function _renderChart(color,constructTangleLayout,_,svg,background_color){return(
(data, options={}) => {
  options.color ||= (d, i) => color(i)

  const tangleLayout = constructTangleLayout(_.cloneDeep(data), options);

  return svg`<svg width="${tangleLayout.layout.width}" height="${
    tangleLayout.layout.height
  }" style="background-color: ${background_color}">
  <style>
    text {
      font-family: "Futura", sans-serif;
      font-size: 13px;
      font-weight: 500;
    }
    .node {
      stroke-linecap: round;
    }
    .link {
      fill: none;
    }
  </style>

  ${tangleLayout.bundles.map((b, i) => {
    let d = b.links
      .map(
        l => `
      M${l.xt} ${l.yt}
      L${l.xb - l.c1} ${l.yt}
      A${l.c1} ${l.c1} 90 0 1 ${l.xb} ${l.yt + l.c1}
      L${l.xb} ${l.ys - l.c2}
      A${l.c2} ${l.c2} 90 0 0 ${l.xb + l.c2} ${l.ys}
      L${l.xs} ${l.ys}`
      )
      .join("");
    return `
      <path class="link" d="${d}" stroke="${background_color}" stroke-width="5"/>
      <path class="link" d="${d}" stroke="${options.color(b, i)}" stroke-width="2"/>
    `;
  })}

  ${tangleLayout.nodes.map(
    n => `
    <path class="selectable node" data-id="${
      n.id
    }" stroke="black" stroke-width="8" d="M${n.x} ${n.y - n.height / 2} L${
      n.x
    } ${n.y + n.height / 2}"/>
    <path class="node" stroke="white" stroke-width="4" d="M${n.x} ${n.y -
      n.height / 2} L${n.x} ${n.y + n.height / 2}"/>

    <text class="selectable" data-id="${n.id}" x="${n.x + 4}" y="${n.y -
      n.height / 2 -
      4}" stroke="${background_color}" stroke-width="2">${n.id}</text>
    <text x="${n.x + 4}" y="${n.y -
      n.height / 2 -
      4}" style="pointer-events: none;">${n.id}</text>
  `
  )}

  </svg>`;
}
)}

function _data(){return(
[
  [{ id: 'Classical Latin' }],
  [
    { id: 'Roman Square Capitals', parents: ['Classical Latin'] },
    { id: 'Roman Rustic Capitals', parents: ['Classical Latin'] }
  ],
  [{ id: 'Old Roman Cursive', parents: ['Roman Square Capitals'] }],
  [{ id: 'New Roman Cursive', parents: ['Old Roman Cursive'] }],
  [
    { id: 'Roman Uncials', parents: ['New Roman Cursive'] },
    { id: 'Roman Half-Uncials', parents: ['New Roman Cursive'] },
    { id: 'Lombardic Minuscule', parents: ['New Roman Cursive']}
  ],
  [
    { id: 'Insular Half-Uncials', parents: ['Roman Uncials', 'Roman Half-Uncials']},
    { id: 'Insular Minuscule', parents: ['Roman Uncials', 'Roman Half-Uncials']},
    { id: 'Visigothic Minuscule', parents: ['New Roman Cursive']},
    { id: 'Merovingian Minuscule', parents: ['New Roman Cursive', 'Roman Uncials', 'Roman Half-Uncials']},
    { id: 'Franco-Lombardic Minuscule', parents: ['Lombardic Minuscule']},
    { id: 'Beneventan Minuscule', parents: ['Lombardic Minuscule']}
  ],
  [
    { id: 'Anglo-Saxon Minuscule', parents: ['Insular Minuscule'] },
    { id: 'Broken Lombardic Minuscule', parents: ['Beneventan Minuscule'] }
  ],
  [
    { id: 'East-Frankish Minuscule', parents: ['Merovingian Minuscule', 'Lombardic Minuscule', 'Anglo-Saxon Minuscule'] }
  ],
  [
    { id: 'Caroline Minuscule', parents: ['Roman Half-Uncials', 'East-Frankish Minuscule','Merovingian Minuscule', 'Visigothic Minuscule', 'Anglo-Saxon Minuscule'] }
  ],
  [
    { id: 'Proto-Gothic Script', parents: ['Caroline Minuscule'] }
  ],
  [
    { id: 'Formal Gothic Script', parents: ['Proto-Gothic Script'] }
  ],
  [
    { id: 'Gothica Textura Prescissa', parents: ['Formal Gothic Script'] },
    { id: 'Gothica Textura Rotunda', parents: ['Formal Gothic Script'] },
    { id: 'Cursive Gothic Script', parents: ['Formal Gothic Script'] },
    { id: 'Gothica Glossularis', parents: ['Formal Gothic Script'] },
    { id: 'Gothica Notularis', parents: ['Formal Gothic Script'] },
  ],
  [
    { id: 'Gothica Textura Quadrata', parents: ['Gothica Textura Prescissa'] },
    { id: 'Gothica Textura Semiquadrata', parents: ['Gothica Textura Prescissa'] },
    { id: 'Italian Rotunda', parents: ['Gothica Textura Rotunda'] },
    { id: 'Lettre de Somme', parents: ['Gothica Textura Rotunda'] },
    { id: 'Spanish Round-hand', parents: ['Gothica Textura Rotunda'] },
    { id: 'Italian Cursive Gothic', parents: ['Cursive Gothic Script'] },
    { id: 'French Cursive Gothic', parents: ['Cursive Gothic Script'] },
    { id: 'German/Flemish Cursive Gothic', parents: ['Cursive Gothic Script'] },
    { id: 'English Cursive Gothic', parents: ['Cursive Gothic Script'] },
    { id: 'Bastard Gothic Script', parents: ['Formal Gothic Script', 'Cursive Gothic Script'] },
    { id: 'Humanist Minuscule', parents: ['Caroline Minuscule'] }
  ],
  [
    { id: 'Littera Bononiensis', parents: ['Italian Rotunda'] },
    { id: 'Littera Oxoniensis', parents: ['Gothica Glossularis'] },
    { id: 'Littera Parisiensis', parents: ['Gothica Glossularis'] },
    { id: 'Anglicana', parents: ['English Cursive Gothic'] },
    { id: 'Cancelleresca', parents: ['Italian Cursive Gothic'] },
    { id: 'French Chancery Cursive', parents: ['French Cursive Gothic'] }
  ],
  [
    { id: 'Anglicana Formata', parents: ['Anglicana', 'Formal Gothic Script'] },
    { id: 'English Secretary Script', parents: ['English Cursive Gothic', 'Cancelleresca'] },
    { id: 'Lettre Bâtarde', parents: ['Bastard Gothic Script', 'French Chancery Cursive', 'Cancelleresca'] },
  ],
  [

    { id: 'Bastarda Anglicana', parents: ['Anglicana', 'English Secretary Script', 'Bastard Gothic Script'] },
    { id: 'English Bastard Secretary', parents: ['Lettre Bâtarde'] },
    { id: 'Lettre Bourguignone', parents: ['Lettre Bâtarde'] },
    { id: 'Schwabacher', parents: ['Lettre Bâtarde', 'Gothica Textura Rotunda'] },
    { id: 'Gotico-Antiqua', parents: ['Bastard Gothic Script', 'Humanist Minuscule'] }
  ],
  [
    { id: 'Fraktur', parents: ['Schwabacher'] },
    { id: 'Venetian Type', parents: ['Humanist Minuscule', 'Roman Square Capitals'] },
    { id: 'Humanist Cursive', parents: ['Humanist Minuscule', 'Italian Cursive Gothic'] }
  ],
  [
    { id: 'Roman Type (Antiqua)', parents: ['Venetian Type'] },
    { id: 'Italic Type', parents: ['Humanist Cursive'] },
    { id: 'Gaelic Type', parents: ['Insular Minuscule'] },
  ],
  [
    { id: 'Aldino Italic Type (Italics)', parents: ['Italic Type'] },
    { id: 'Parangon de Granjon', parents: ['Italic Type'] },
    { id: 'French Roman Type', parents: ['Roman Type (Antiqua)'] }
  ],
  [
    { id: 'Swiss/German Roman Type', parents: ['French Roman Type'] },
    { id: 'De Colines', parents: ['French Roman Type'] },
    { id: 'Augereau', parents: ['French Roman Type'] },
    { id: 'Estienne', parents: ['French Roman Type'] },
    { id: 'Garamond', parents: ['French Roman Type'] },
    { id: 'Civilité Type', parents: ['Lettre Bâtarde'] },
    { id: 'Dutch Roman Type', parents: ['French Roman Type'] }
  ],
  [
    { id: 'Fell Type', parents: ['Dutch Roman Type'] },
    { id: 'English Roundhand', parents: ['English Secretary Script'] },
    { id: 'Italian Roundhand', parents: ['Cancelleresca'] },
  ],
  [
    { id: 'Caslon Type', parents: ['Dutch Roman Type', 'Fell Type'] },
    { id: 'Fleischmann Type', parents: ['Dutch Roman Type'] },
    { id: 'English Copperplate', parents: ['English Roundhand'] },
    { id: 'Italian Copperplate', parents: ['Italian Roundhand'] },
  ],
  [
    { id: 'Baskerville Type', parents: ['Caslon Type'] },
  ],
  [
    { id: 'Bodoni Type', parents: ['Baskerville Type'] },
    { id: 'Didot Type', parents: ['Baskerville Type'] },
    { id: 'Bulmer Type', parents: ['Baskerville Type'] },
    { id: 'Mrs Eaves', parents: ['Baskerville Type'] },
  ],
  [
    { id: 'Ibarra Type', parents: ['Baskerville Type', 'Bodoni Type', 'Didot Type'] },
    { id: 'Slab Serif', parents: ['Bodoni Type', 'Didot Type'] },
  ],
  [
    { id: 'Egyptienne', parents: ['Slab Serif'] },
    { id: 'Clarendon', parents: ['Slab Serif'] },
    { id: 'Rockwell', parents: ['Slab Serif'] },
    { id: 'Courier', parents: ['Slab Serif'] },
    { id: 'Grotesque Sans-Serif', parents: ['Bodoni Type', 'Didot Type', 'Slab Serif'] },
  ],
  [
    { id: 'Akzidenz-Grotesk', parents: ['Grotesque Sans-Serif'] },
    { id: 'Venus', parents: ['Grotesque Sans-Serif'] },
    { id: 'News Gothic', parents: ['Grotesque Sans-Serif'] },
    { id: 'Franklin Gothic', parents: ['Grotesque Sans-Serif'] },
    { id: 'Geometric Sans-Serif', parents: ['Roman Square Capitals', 'Grotesque Sans-Serif'] },
    { id: 'Humanist Sans-Serif', parents: ['Grotesque Sans-Serif', 'Humanist Minuscule'] },
  ],
  [
    { id: 'Neo-Grotesque Sans-Serif', parents: ['Akzidenz-Grotesk'] },
    { id: 'Futura', parents: ['Geometric Sans-Serif'] },
    { id: 'Kabel', parents: ['Geometric Sans-Serif'] },
    { id: 'Semplicità', parents: ['Geometric Sans-Serif'] },
    { id: 'Gotham', parents: ['Geometric Sans-Serif'] },
    { id: 'Johnston', parents: ['Humanist Sans-Serif'] },
    { id: 'Gill Sans', parents: ['Humanist Sans-Serif'] },
    { id: 'Optima', parents: ['Humanist Sans-Serif'] },
    { id: 'Frutiger', parents: ['Humanist Sans-Serif'] },
  ],
  [
    { id: 'Helvetica', parents: ['Neo-Grotesque Sans-Serif'] },
    { id: 'Univers', parents: ['Neo-Grotesque Sans-Serif'] },
    { id: 'Folio', parents: ['Neo-Grotesque Sans-Serif'] },
  ],
]
)}

function _constructTangleLayout(d3){return(
(levels, options={}) => {
  // precompute level depth
  levels.forEach((l, i) => l.forEach(n => (n.level = i)));

  var nodes = levels.reduce((a, x) => a.concat(x), []);
  var nodes_index = {};
  nodes.forEach(d => (nodes_index[d.id] = d));

  // objectification
  nodes.forEach(d => {
    d.parents = (d.parents === undefined ? [] : d.parents).map(
      p => nodes_index[p]
    );
  });

  // precompute bundles
  levels.forEach((l, i) => {
    var index = {};
    l.forEach(n => {
      if (n.parents.length == 0) {
        return;
      }

      var id = n.parents
        .map(d => d.id)
        .sort()
        .join('-X-');
      if (id in index) {
        index[id].parents = index[id].parents.concat(n.parents);
      } else {
        index[id] = { id: id, parents: n.parents.slice(), level: i, span: i - d3.min(n.parents, p => p.level) };
      }
      n.bundle = index[id];
    });
    l.bundles = Object.keys(index).map(k => index[k]);
    l.bundles.forEach((b, i) => (b.i = i));
  });

  var links = [];
  nodes.forEach(d => {
    d.parents.forEach(p =>
      links.push({ source: d, bundle: d.bundle, target: p })
    );
  });

  var bundles = levels.reduce((a, x) => a.concat(x.bundles), []);

  // reverse pointer from parent to bundles
  bundles.forEach(b =>
    b.parents.forEach(p => {
      if (p.bundles_index === undefined) {
        p.bundles_index = {};
      }
      if (!(b.id in p.bundles_index)) {
        p.bundles_index[b.id] = [];
      }
      p.bundles_index[b.id].push(b);
    })
  );

  nodes.forEach(n => {
    if (n.bundles_index !== undefined) {
      n.bundles = Object.keys(n.bundles_index).map(k => n.bundles_index[k]);
    } else {
      n.bundles_index = {};
      n.bundles = [];
    }
    n.bundles.sort((a,b) => d3.descending(d3.max(a, d => d.span), d3.max(b, d => d.span)))
    n.bundles.forEach((b, i) => (b.i = i));
  });

  links.forEach(l => {
    if (l.bundle.links === undefined) {
      l.bundle.links = [];
    }
    l.bundle.links.push(l);
  });

  // layout
  const padding = 8;
  const node_height = 22;
  const node_width = 70;
  const bundle_width = 14;
  const level_y_padding = 16;
  const metro_d = 4;
  const min_family_height = 22;

  options.c ||= 16;
  const c = options.c;
  options.bigc ||= node_width+c;

  nodes.forEach(
    n => (n.height = (Math.max(1, n.bundles.length) - 1) * metro_d)
  );

  var x_offset = padding;
  var y_offset = padding;
  levels.forEach(l => {
    x_offset += l.bundles.length * bundle_width;
    y_offset += level_y_padding;
    l.forEach((n, i) => {
      n.x = n.level * node_width + x_offset;
      n.y = node_height + y_offset + n.height / 2;

      y_offset += node_height + n.height;
    });
  });

  var i = 0;
  levels.forEach(l => {
    l.bundles.forEach(b => {
      b.x =
        d3.max(b.parents, d => d.x) +
        node_width +
        (l.bundles.length - 1 - b.i) * bundle_width;
      b.y = d3.mean(b.links, l => (l.target.y + l.source.y) / 2);
    });
    i += l.length;
  });

  links.forEach(l => {
    l.xt = l.target.x;
    l.yt =
      l.target.y +
      l.target.bundles_index[l.bundle.id].i * metro_d -
      (l.target.bundles.length * metro_d) / 2 +
      metro_d / 2;
    l.xb = l.bundle.x;
    l.yb = l.bundle.y;
    l.xs = l.source.x;
    l.ys = l.source.y;
  });

  // compress vertical space
  var y_negative_offset = 0;
  levels.forEach(l => {
    y_negative_offset +=
      -min_family_height +
        d3.min(l.bundles, b =>
          d3.min(b.links, link => link.ys - 2*c - (link.yt + c))
        ) || 0;
    l.forEach(n => (n.y -= y_negative_offset));
  });

  // very ugly, I know
  links.forEach(l => {
    l.yt =
      l.target.y +
      l.target.bundles_index[l.bundle.id].i * metro_d -
      (l.target.bundles.length * metro_d) / 2 +
      metro_d / 2;
    l.ys = l.source.y;
    l.c1 = l.source.level - l.target.level > 1
  ? Math.max(
      c,
      Math.min(options.bigc, l.xb - l.xt, l.yb - l.yt) - c
    )
  : c;

    l.c2 = c;
  });

  // estimate text width (10px sans-serif ≈ 6px per character)
  const charWidth = 6;
  const maxLabelWidth = d3.max(nodes, n => n.id.length * charWidth);

  var layout = {
    width:
      d3.max(nodes, n => n.x) +
      node_width +
      maxLabelWidth +
      2 * padding,
    height: d3.max(nodes, n => n.y) + node_height / 2 + 2 * padding,
    node_height,
    node_width,
    bundle_width,
    level_y_padding,
    metro_d
  };

  return { levels, nodes, nodes_index, links, bundles, layout };
}
)}

function _color(d3){return(
d3.scaleOrdinal(d3.schemeDark2)
)}

function _background_color(){return(
'white'
)}

function _9(md){return(
md`## Dependencies`
)}

function _d3(require){return(
require('d3-scale', 'd3-scale-chromatic', 'd3-array')
)}

function __(require){return(
require("lodash")
)}


function _chart(renderChart, data) {
  return renderChart(data);
}

export default function define(runtime, observer) {
  const main = runtime.module();

  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("renderChart")).define(
    "renderChart",
    ["color","constructTangleLayout","_","svg","background_color"],
    _renderChart
  );
  main.variable(observer("data")).define("data", _data);
  main.variable(observer("constructTangleLayout"))
    .define("constructTangleLayout", ["d3"], _constructTangleLayout);
  main.variable(observer("color")).define("color", ["d3"], _color);
  main.variable(observer("background_color"))
    .define("background_color", _background_color);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("_")).define("_", ["require"], __);

  const child1 = runtime.module(define1);
  main.import("footnote", child1);

  // ✅ THIS LINE MAKES IT RENDERABLE
  main.variable(observer("chart"))
    .define("chart", ["renderChart", "data"], _chart);

  return main;
}
