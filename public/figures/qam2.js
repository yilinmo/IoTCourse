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
    
      
      
    
      var element = document.getElementById("4c7d4f04-dec8-49c9-82d1-b960533edcbb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4c7d4f04-dec8-49c9-82d1-b960533edcbb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d72fb665-ea76-4b11-b1e5-30c94bcb4859":{"roots":{"references":[{"attributes":{"text":"16-QAM"},"id":"4145","type":"Title"},{"attributes":{"data_source":{"id":"4177"},"glyph":{"id":"4178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4179"},"selection_glyph":null,"view":{"id":"4181"}},"id":"4180","type":"GlyphRenderer"},{"attributes":{},"id":"4166","type":"SaveTool"},{"attributes":{},"id":"4149","type":"DataRange1d"},{"attributes":{"axis":{"id":"4159"},"dimension":1,"ticker":null},"id":"4162","type":"Grid"},{"attributes":{},"id":"4167","type":"ResetTool"},{"attributes":{"formatter":{"id":"4185"},"ticker":{"id":"4156"}},"id":"4155","type":"LinearAxis"},{"attributes":{"formatter":{"id":"4183"},"ticker":{"id":"4160"}},"id":"4159","type":"LinearAxis"},{"attributes":{},"id":"4164","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4178","type":"Circle"},{"attributes":{"overlay":{"id":"4169"}},"id":"4165","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4179","type":"Circle"},{"attributes":{},"id":"4163","type":"PanTool"},{"attributes":{"source":{"id":"4177"}},"id":"4181","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4163"},{"id":"4164"},{"id":"4165"},{"id":"4166"},{"id":"4167"},{"id":"4168"}]},"id":"4170","type":"Toolbar"},{"attributes":{},"id":"4183","type":"BasicTickFormatter"},{"attributes":{},"id":"4160","type":"BasicTicker"},{"attributes":{},"id":"4156","type":"BasicTicker"},{"attributes":{},"id":"4151","type":"LinearScale"},{"attributes":{},"id":"4168","type":"HelpTool"},{"attributes":{},"id":"4188","type":"UnionRenderers"},{"attributes":{"axis":{"id":"4155"},"ticker":null},"id":"4158","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4169","type":"BoxAnnotation"},{"attributes":{},"id":"4147","type":"DataRange1d"},{"attributes":{},"id":"4185","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]},"y":{"__ndarray__":"AAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]}},"selected":{"id":"4189"},"selection_policy":{"id":"4188"}},"id":"4177","type":"ColumnDataSource"},{"attributes":{},"id":"4189","type":"Selection"},{"attributes":{},"id":"4153","type":"LinearScale"},{"attributes":{"below":[{"id":"4155"}],"center":[{"id":"4158"},{"id":"4162"}],"left":[{"id":"4159"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4180"}],"title":{"id":"4145"},"toolbar":{"id":"4170"},"x_range":{"id":"4147"},"x_scale":{"id":"4151"},"y_range":{"id":"4149"},"y_scale":{"id":"4153"}},"id":"4144","subtype":"Figure","type":"Plot"}],"root_ids":["4144"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"d72fb665-ea76-4b11-b1e5-30c94bcb4859","root_ids":["4144"],"roots":{"4144":"4c7d4f04-dec8-49c9-82d1-b960533edcbb"}}];
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