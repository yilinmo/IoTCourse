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
    
      
      
    
      var element = document.getElementById("64a91652-029f-4f4d-8e1a-66a66c172894");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '64a91652-029f-4f4d-8e1a-66a66c172894' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
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
                    
                  var docs_json = '{"16a4dfaa-f72c-4ef1-928d-4febfa73fed3":{"roots":{"references":[{"attributes":{},"id":"10642","type":"PanTool"},{"attributes":{"source":{"id":"10656"}},"id":"10660","type":"CDSView"},{"attributes":{},"id":"10662","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10658","type":"Line"},{"attributes":{"formatter":{"id":"10662"},"ticker":{"id":"10639"}},"id":"10638","type":"LinearAxis"},{"attributes":{},"id":"10666","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10642"},{"id":"10643"},{"id":"10644"},{"id":"10645"},{"id":"10646"},{"id":"10647"}]},"id":"10649","type":"Toolbar"},{"attributes":{"data_source":{"id":"10656"},"glyph":{"id":"10657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10658"},"selection_glyph":null,"view":{"id":"10660"}},"id":"10659","type":"GlyphRenderer"},{"attributes":{"text":"Energy Spectrum"},"id":"10624","type":"Title"},{"attributes":{},"id":"10630","type":"LinearScale"},{"attributes":{"axis":{"id":"10638"},"dimension":1,"ticker":null},"id":"10641","type":"Grid"},{"attributes":{},"id":"10664","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"10648","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"10666"},"selection_policy":{"id":"10667"}},"id":"10656","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"10634"}],"center":[{"id":"10637"},{"id":"10641"}],"left":[{"id":"10638"}],"plot_width":1200,"renderers":[{"id":"10659"}],"title":{"id":"10624"},"toolbar":{"id":"10649"},"x_range":{"id":"10626"},"x_scale":{"id":"10630"},"y_range":{"id":"10628"},"y_scale":{"id":"10632"}},"id":"10623","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10639","type":"BasicTicker"},{"attributes":{},"id":"10632","type":"LinearScale"},{"attributes":{},"id":"10645","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10657","type":"Line"},{"attributes":{"axis":{"id":"10634"},"ticker":null},"id":"10637","type":"Grid"},{"attributes":{},"id":"10635","type":"BasicTicker"},{"attributes":{},"id":"10667","type":"UnionRenderers"},{"attributes":{},"id":"10628","type":"DataRange1d"},{"attributes":{},"id":"10646","type":"ResetTool"},{"attributes":{},"id":"10647","type":"HelpTool"},{"attributes":{"formatter":{"id":"10664"},"ticker":{"id":"10635"}},"id":"10634","type":"LinearAxis"},{"attributes":{},"id":"10626","type":"DataRange1d"},{"attributes":{"overlay":{"id":"10648"}},"id":"10644","type":"BoxZoomTool"},{"attributes":{},"id":"10643","type":"WheelZoomTool"}],"root_ids":["10623"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"16a4dfaa-f72c-4ef1-928d-4febfa73fed3","root_ids":["10623"],"roots":{"10623":"64a91652-029f-4f4d-8e1a-66a66c172894"}}];
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