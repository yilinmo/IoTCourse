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
    
      
      
    
      var element = document.getElementById("adf3b7cf-b02b-4482-b454-c2df6c135cc1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'adf3b7cf-b02b-4482-b454-c2df6c135cc1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"da81e649-7b7d-4157-94f4-55ac6a433822":{"roots":{"references":[{"attributes":{},"id":"1665","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"1633"},{"id":"1671"}],"tools":[{"id":"1626"},{"id":"1627"},{"id":"1628"},{"id":"1629"},{"id":"1630"},{"id":"1631"},{"id":"1664"},{"id":"1665"},{"id":"1666"},{"id":"1667"},{"id":"1668"},{"id":"1669"}]},"id":"1702","type":"ProxyToolbar"},{"attributes":{},"id":"1630","type":"ResetTool"},{"attributes":{},"id":"1652","type":"LinearScale"},{"attributes":{"formatter":{"id":"1693"},"ticker":{"id":"1661"}},"id":"1660","type":"LinearAxis"},{"attributes":{"axis":{"id":"1656"},"ticker":null},"id":"1659","type":"Grid"},{"attributes":{},"id":"1619","type":"BasicTicker"},{"attributes":{"below":[{"id":"1656"}],"center":[{"id":"1659"},{"id":"1663"}],"left":[{"id":"1660"}],"renderers":[{"id":"1681"}],"title":{"id":"1646"},"toolbar":{"id":"1671"},"toolbar_location":null,"x_range":{"id":"1648"},"x_scale":{"id":"1652"},"y_range":{"id":"1650"},"y_scale":{"id":"1654"}},"id":"1645","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1664","type":"PanTool"},{"attributes":{"axis":{"id":"1660"},"dimension":1,"ticker":null},"id":"1663","type":"Grid"},{"attributes":{"formatter":{"id":"1686"},"ticker":{"id":"1619"}},"id":"1618","type":"LinearAxis"},{"attributes":{},"id":"1648","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"1641","type":"Step"},{"attributes":{},"id":"1695","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1632","type":"BoxAnnotation"},{"attributes":{},"id":"1623","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1699"},"selection_policy":{"id":"1698"}},"id":"1678","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1618"}],"center":[{"id":"1621"},{"id":"1625"}],"left":[{"id":"1622"}],"renderers":[{"id":"1643"}],"title":{"id":"1608"},"toolbar":{"id":"1633"},"toolbar_location":null,"x_range":{"id":"1610"},"x_scale":{"id":"1614"},"y_range":{"id":"1612"},"y_scale":{"id":"1616"}},"id":"1607","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1614","type":"LinearScale"},{"attributes":{},"id":"1686","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1703"},{"id":"1701"}]},"id":"1704","type":"Column"},{"attributes":{},"id":"1654","type":"LinearScale"},{"attributes":{"text":"Time Domain"},"id":"1608","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1670","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1680","type":"Line"},{"attributes":{},"id":"1667","type":"SaveTool"},{"attributes":{"formatter":{"id":"1695"},"ticker":{"id":"1657"}},"id":"1656","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1664"},{"id":"1665"},{"id":"1666"},{"id":"1667"},{"id":"1668"},{"id":"1669"}]},"id":"1671","type":"Toolbar"},{"attributes":{},"id":"1612","type":"DataRange1d"},{"attributes":{},"id":"1657","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1684"},"ticker":{"id":"1623"}},"id":"1622","type":"LinearAxis"},{"attributes":{},"id":"1650","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1626"},{"id":"1627"},{"id":"1628"},{"id":"1629"},{"id":"1630"},{"id":"1631"}]},"id":"1633","type":"Toolbar"},{"attributes":{},"id":"1684","type":"BasicTickFormatter"},{"attributes":{},"id":"1699","type":"Selection"},{"attributes":{},"id":"1668","type":"ResetTool"},{"attributes":{"axis":{"id":"1618"},"ticker":null},"id":"1621","type":"Grid"},{"attributes":{"source":{"id":"1640"}},"id":"1644","type":"CDSView"},{"attributes":{},"id":"1698","type":"UnionRenderers"},{"attributes":{},"id":"1661","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"1702"},"toolbar_location":"above"},"id":"1703","type":"ToolbarBox"},{"attributes":{"axis":{"id":"1622"},"dimension":1,"ticker":null},"id":"1625","type":"Grid"},{"attributes":{"data_source":{"id":"1678"},"glyph":{"id":"1679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1680"},"selection_glyph":null,"view":{"id":"1682"}},"id":"1681","type":"GlyphRenderer"},{"attributes":{},"id":"1610","type":"DataRange1d"},{"attributes":{"text":"Frequence Domain"},"id":"1646","type":"Title"},{"attributes":{},"id":"1627","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1670"}},"id":"1666","type":"BoxZoomTool"},{"attributes":{},"id":"1693","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1678"}},"id":"1682","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAADwvwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAQA==","dtype":"float64","order":"little","shape":[5]},"y":[0,0,1,0,0]},"selected":{"id":"1690"},"selection_policy":{"id":"1689"}},"id":"1640","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1679","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"1642","type":"Step"},{"attributes":{},"id":"1690","type":"Selection"},{"attributes":{},"id":"1626","type":"PanTool"},{"attributes":{},"id":"1631","type":"HelpTool"},{"attributes":{},"id":"1689","type":"UnionRenderers"},{"attributes":{},"id":"1629","type":"SaveTool"},{"attributes":{},"id":"1669","type":"HelpTool"},{"attributes":{"data_source":{"id":"1640"},"glyph":{"id":"1641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1642"},"selection_glyph":null,"view":{"id":"1644"}},"id":"1643","type":"GlyphRenderer"},{"attributes":{},"id":"1616","type":"LinearScale"},{"attributes":{"overlay":{"id":"1632"}},"id":"1628","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"1607"},0,0],[{"id":"1645"},0,1]]},"id":"1701","type":"GridBox"}],"root_ids":["1704"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"da81e649-7b7d-4157-94f4-55ac6a433822","root_ids":["1704"],"roots":{"1704":"adf3b7cf-b02b-4482-b454-c2df6c135cc1"}}];
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