var builderDefaults = angular.module('builder-defaults', []);

/* Default values for service settings */
builderDefaults.value("defaults", {
  host: "FEMA - GEO API",
  service: "WMS",
  WMS: {
    request: "GetMap", 
    format: "image/png",
  },
  WFS: {
    request: "GetFeature",
    format: "json",
  },
  bounds: {
    minx: -110.816941408,
    miny: 23.74050960205765,  
    maxx: -77.109219008,
    maxy: 49.142175976703609,
  },
  image: {
    width: 200,
    height: 200,
  },
  maxfeatures: 50,
  settings: {
    manualinput: false,
    autobounds: true,
    proportional: true,
    timeout: 3000,
  }
});
