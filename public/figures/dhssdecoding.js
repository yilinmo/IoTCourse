(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("2ba6a10a-116e-4e33-bfc1-29f18498835c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2ba6a10a-116e-4e33-bfc1-29f18498835c' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js": "JayppSWSRBsibIZqI8S4vAb1oFgLL0uhNvSn8cmArlOvYOwfFjYeyY5UWwJ+K0SU", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js": "G0/Tv/Yy/zEPNsnW0Qif/FOsGesd+KIrKg/QLmvQmReuUW9qmSP7mAmr0VpiUNr3", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js": "VLYHEbLQDk5G1+/4ALU0myoJPMEUsngWry2fzYorFOUmarjGRPLLURaeK/on6JqX"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"62f6600d-6472-473c-b061-2e1399936e03":{"roots":{"references":[{"attributes":{"source":{"id":"1602"}},"id":"1606","type":"CDSView"},{"attributes":{},"id":"1653","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1623"},"dimension":1,"ticker":null},"id":"1626","type":"Grid"},{"attributes":{"source":{"id":"1558"}},"id":"1562","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1627"},{"id":"1628"},{"id":"1629"},{"id":"1630"},{"id":"1631"},{"id":"1632"}]},"id":"1634","type":"Toolbar"},{"attributes":{"data_source":{"id":"1602"},"glyph":{"id":"1603"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1604"},"selection_glyph":null,"view":{"id":"1606"}},"id":"1605","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1559","type":"Step"},{"attributes":{},"id":"1652","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1588"},{"id":"1589"},{"id":"1590"},{"id":"1591"},{"id":"1592"},{"id":"1593"}]},"id":"1595","type":"Toolbar"},{"attributes":{"end":32},"id":"1646","type":"Range1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[33]}},"selected":{"id":"1652"},"selection_policy":{"id":"1653"}},"id":"1602","type":"ColumnDataSource"},{"attributes":{},"id":"1578","type":"LinearScale"},{"attributes":{},"id":"1549","type":"HelpTool"},{"attributes":{},"id":"1651","type":"BasicTickFormatter"},{"attributes":{},"id":"1544","type":"PanTool"},{"attributes":{"toolbars":[{"id":"1595"},{"id":"1551"},{"id":"1634"}],"tools":[{"id":"1588"},{"id":"1589"},{"id":"1590"},{"id":"1591"},{"id":"1592"},{"id":"1593"},{"id":"1544"},{"id":"1545"},{"id":"1546"},{"id":"1547"},{"id":"1548"},{"id":"1549"},{"id":"1627"},{"id":"1628"},{"id":"1629"},{"id":"1630"},{"id":"1631"},{"id":"1632"}]},"id":"1677","type":"ProxyToolbar"},{"attributes":{},"id":"1588","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1550","type":"BoxAnnotation"},{"attributes":{},"id":"1627","type":"PanTool"},{"attributes":{},"id":"1589","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/","dtype":"float64","order":"little","shape":[33]}},"selected":{"id":"1672"},"selection_policy":{"id":"1673"}},"id":"1641","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1550"}},"id":"1546","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1641"},"glyph":{"id":"1642"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1643"},"selection_glyph":null,"view":{"id":"1645"}},"id":"1644","type":"GlyphRenderer"},{"attributes":{},"id":"1660","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1563"},"glyph":{"id":"1564"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1565"},"selection_glyph":null,"view":{"id":"1567"}},"id":"1566","type":"GlyphRenderer"},{"attributes":{},"id":"1581","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1594"}},"id":"1590","type":"BoxZoomTool"},{"attributes":{},"id":"1649","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1641"}},"id":"1645","type":"CDSView"},{"attributes":{},"id":"1545","type":"WheelZoomTool"},{"attributes":{},"id":"1628","type":"WheelZoomTool"},{"attributes":{},"id":"1591","type":"SaveTool"},{"attributes":{"source":{"id":"1563"}},"id":"1567","type":"CDSView"},{"attributes":{},"id":"1592","type":"ResetTool"},{"attributes":{"overlay":{"id":"1633"}},"id":"1629","type":"BoxZoomTool"},{"attributes":{},"id":"1547","type":"SaveTool"},{"attributes":{"text":"Decoded Signal"},"id":"1609","type":"Title"},{"attributes":{},"id":"1593","type":"HelpTool"},{"attributes":{},"id":"1630","type":"SaveTool"},{"attributes":{},"id":"1631","type":"ResetTool"},{"attributes":{"below":[{"id":"1536"}],"center":[{"id":"1539"},{"id":"1543"}],"left":[{"id":"1540"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1561"},{"id":"1566"}],"title":{"id":"1526"},"toolbar":{"id":"1551"},"toolbar_location":null,"x_range":{"id":"1568"},"x_scale":{"id":"1532"},"y_range":{"id":"1530"},"y_scale":{"id":"1534"}},"id":"1525","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1632","type":"HelpTool"},{"attributes":{"end":32},"id":"1568","type":"Range1d"},{"attributes":{},"id":"1541","type":"BasicTicker"},{"attributes":{"axis":{"id":"1540"},"dimension":1,"ticker":null},"id":"1543","type":"Grid"},{"attributes":{"children":[[{"id":"1569"},0,0],[{"id":"1525"},1,0],[{"id":"1608"},2,0]]},"id":"1676","type":"GridBox"},{"attributes":{},"id":"1663","type":"Selection"},{"attributes":{},"id":"1661","type":"Selection"},{"attributes":{"text":"Signal"},"id":"1570","type":"Title"},{"attributes":{"axis":{"id":"1619"},"ticker":null},"id":"1622","type":"Grid"},{"attributes":{},"id":"1673","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1643","type":"Step"},{"attributes":{"data_source":{"id":"1558"},"glyph":{"id":"1559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1560"},"selection_glyph":null,"view":{"id":"1562"}},"id":"1561","type":"GlyphRenderer"},{"attributes":{"text":"PN Sequence"},"id":"1526","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1633","type":"BoxAnnotation"},{"attributes":{"end":32},"id":"1607","type":"Range1d"},{"attributes":{"toolbar":{"id":"1677"},"toolbar_location":"above"},"id":"1678","type":"ToolbarBox"},{"attributes":{},"id":"1662","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1584"},"dimension":1,"ticker":null},"id":"1587","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1565","type":"Step"},{"attributes":{},"id":"1671","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1594","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"1649"},"ticker":{"id":"1585"}},"id":"1584","type":"LinearAxis"},{"attributes":{"axis":{"id":"1536"},"ticker":null},"id":"1539","type":"Grid"},{"attributes":{},"id":"1658","type":"BasicTickFormatter"},{"attributes":{},"id":"1664","type":"UnionRenderers"},{"attributes":{},"id":"1576","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1604","type":"Step"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1663"},"selection_policy":{"id":"1664"}},"id":"1563","type":"ColumnDataSource"},{"attributes":{},"id":"1532","type":"LinearScale"},{"attributes":{},"id":"1548","type":"ResetTool"},{"attributes":{},"id":"1615","type":"LinearScale"},{"attributes":{},"id":"1669","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1678"},{"id":"1676"}]},"id":"1679","type":"Column"},{"attributes":{},"id":"1672","type":"Selection"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1642","type":"Step"},{"attributes":{},"id":"1613","type":"DataRange1d"},{"attributes":{"below":[{"id":"1619"}],"center":[{"id":"1622"},{"id":"1626"}],"left":[{"id":"1623"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1644"}],"title":{"id":"1609"},"toolbar":{"id":"1634"},"toolbar_location":null,"x_range":{"id":"1646"},"x_scale":{"id":"1615"},"y_range":{"id":"1613"},"y_scale":{"id":"1617"}},"id":"1608","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1658"},"ticker":{"id":"1541"}},"id":"1540","type":"LinearAxis"},{"attributes":{},"id":"1585","type":"BasicTicker"},{"attributes":{"below":[{"id":"1580"}],"center":[{"id":"1583"},{"id":"1587"}],"left":[{"id":"1584"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1605"}],"title":{"id":"1570"},"toolbar":{"id":"1595"},"toolbar_location":null,"x_range":{"id":"1607"},"x_scale":{"id":"1576"},"y_range":{"id":"1574"},"y_scale":{"id":"1578"}},"id":"1569","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1534","type":"LinearScale"},{"attributes":{"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1564","type":"Step"},{"attributes":{},"id":"1530","type":"DataRange1d"},{"attributes":{},"id":"1617","type":"LinearScale"},{"attributes":{},"id":"1574","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1544"},{"id":"1545"},{"id":"1546"},{"id":"1547"},{"id":"1548"},{"id":"1549"}]},"id":"1551","type":"Toolbar"},{"attributes":{"axis":{"id":"1580"},"ticker":null},"id":"1583","type":"Grid"},{"attributes":{"formatter":{"id":"1671"},"ticker":{"id":"1620"}},"id":"1619","type":"LinearAxis"},{"attributes":{},"id":"1537","type":"BasicTicker"},{"attributes":{},"id":"1624","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1661"},"selection_policy":{"id":"1662"}},"id":"1558","type":"ColumnDataSource"},{"attributes":{},"id":"1620","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1660"},"ticker":{"id":"1537"}},"id":"1536","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1669"},"ticker":{"id":"1624"}},"id":"1623","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1651"},"ticker":{"id":"1581"}},"id":"1580","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1560","type":"Step"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1603","type":"Step"}],"root_ids":["1679"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"62f6600d-6472-473c-b061-2e1399936e03","root_ids":["1679"],"roots":{"1679":"2ba6a10a-116e-4e33-bfc1-29f18498835c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();