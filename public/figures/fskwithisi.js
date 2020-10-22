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
    
      
      
    
      var element = document.getElementById("0b9e5912-c1c0-4536-b02b-2f6108c3d060");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0b9e5912-c1c0-4536-b02b-2f6108c3d060' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ef15dc5e-873e-4322-a238-607fb9ef73dc":{"roots":{"references":[{"attributes":{"text":"Combined Signal"},"id":"4622","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4618","type":"Line"},{"attributes":{"source":{"id":"4611"}},"id":"4615","type":"CDSView"},{"attributes":{},"id":"4624","type":"DataRange1d"},{"attributes":{},"id":"4583","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4613","type":"Line"},{"attributes":{"formatter":{"id":"4660"},"ticker":{"id":"4594"}},"id":"4593","type":"LinearAxis"},{"attributes":{},"id":"4628","type":"LinearScale"},{"attributes":{},"id":"4590","type":"BasicTicker"},{"attributes":{},"id":"4585","type":"LinearScale"},{"attributes":{"axis":{"id":"4593"},"dimension":1,"ticker":null},"id":"4596","type":"Grid"},{"attributes":{},"id":"4581","type":"DataRange1d"},{"attributes":{},"id":"4660","type":"BasicTickFormatter"},{"attributes":{},"id":"4626","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4612","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4655","type":"Line"},{"attributes":{"axis":{"id":"4589"},"ticker":null},"id":"4592","type":"Grid"},{"attributes":{},"id":"4594","type":"BasicTicker"},{"attributes":{},"id":"4630","type":"LinearScale"},{"attributes":{"formatter":{"id":"4673"},"ticker":{"id":"4633"}},"id":"4632","type":"LinearAxis"},{"attributes":{},"id":"4637","type":"BasicTicker"},{"attributes":{"text":"Delayed Signal"},"id":"4579","type":"Title"},{"attributes":{},"id":"4633","type":"BasicTicker"},{"attributes":{"axis":{"id":"4632"},"ticker":null},"id":"4635","type":"Grid"},{"attributes":{},"id":"4597","type":"PanTool"},{"attributes":{"axis":{"id":"4636"},"dimension":1,"ticker":null},"id":"4639","type":"Grid"},{"attributes":{"formatter":{"id":"4671"},"ticker":{"id":"4637"}},"id":"4636","type":"LinearAxis"},{"attributes":{},"id":"4598","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4654"},"glyph":{"id":"4655"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4656"},"selection_glyph":null,"view":{"id":"4658"}},"id":"4657","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4603"}},"id":"4599","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]}},"selected":{"id":"4677"},"selection_policy":{"id":"4676"}},"id":"4654","type":"ColumnDataSource"},{"attributes":{},"id":"4600","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4656","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4640"},{"id":"4641"},{"id":"4642"},{"id":"4643"},{"id":"4644"},{"id":"4645"}]},"id":"4647","type":"Toolbar"},{"attributes":{"children":[[{"id":"4578"},0,0],[{"id":"4621"},1,0]]},"id":"4679","type":"GridBox"},{"attributes":{},"id":"4601","type":"ResetTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4617","type":"Line"},{"attributes":{},"id":"4640","type":"PanTool"},{"attributes":{"data_source":{"id":"4611"},"glyph":{"id":"4612"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4613"},"selection_glyph":null,"view":{"id":"4615"}},"id":"4614","type":"GlyphRenderer"},{"attributes":{},"id":"4602","type":"HelpTool"},{"attributes":{},"id":"4641","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"4646"}},"id":"4642","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4597"},{"id":"4598"},{"id":"4599"},{"id":"4600"},{"id":"4601"},{"id":"4602"}]},"id":"4604","type":"Toolbar"},{"attributes":{},"id":"4643","type":"SaveTool"},{"attributes":{},"id":"4644","type":"ResetTool"},{"attributes":{"children":[{"id":"4681"},{"id":"4679"}]},"id":"4682","type":"Column"},{"attributes":{},"id":"4645","type":"HelpTool"},{"attributes":{},"id":"4677","type":"Selection"},{"attributes":{"formatter":{"id":"4662"},"ticker":{"id":"4590"}},"id":"4589","type":"LinearAxis"},{"attributes":{"below":[{"id":"4589"}],"center":[{"id":"4592"},{"id":"4596"}],"left":[{"id":"4593"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"4614"},{"id":"4619"}],"title":{"id":"4579"},"toolbar":{"id":"4604"},"toolbar_location":null,"x_range":{"id":"4581"},"x_scale":{"id":"4585"},"y_range":{"id":"4583"},"y_scale":{"id":"4587"}},"id":"4578","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4666","type":"Selection"},{"attributes":{},"id":"4676","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"4604"},{"id":"4647"}],"tools":[{"id":"4597"},{"id":"4598"},{"id":"4599"},{"id":"4600"},{"id":"4601"},{"id":"4602"},{"id":"4640"},{"id":"4641"},{"id":"4642"},{"id":"4643"},{"id":"4644"},{"id":"4645"}]},"id":"4680","type":"ProxyToolbar"},{"attributes":{},"id":"4587","type":"LinearScale"},{"attributes":{},"id":"4671","type":"BasicTickFormatter"},{"attributes":{},"id":"4665","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4603","type":"BoxAnnotation"},{"attributes":{},"id":"4673","type":"BasicTickFormatter"},{"attributes":{},"id":"4667","type":"UnionRenderers"},{"attributes":{"below":[{"id":"4632"}],"center":[{"id":"4635"},{"id":"4639"}],"left":[{"id":"4636"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"4657"}],"title":{"id":"4622"},"toolbar":{"id":"4647"},"toolbar_location":null,"x_range":{"id":"4624"},"x_scale":{"id":"4628"},"y_range":{"id":"4626"},"y_scale":{"id":"4630"}},"id":"4621","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4668","type":"Selection"},{"attributes":{"toolbar":{"id":"4680"},"toolbar_location":"above"},"id":"4681","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[217]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[217]}},"selected":{"id":"4668"},"selection_policy":{"id":"4667"}},"id":"4616","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4654"}},"id":"4658","type":"CDSView"},{"attributes":{},"id":"4662","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4646","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]}},"selected":{"id":"4666"},"selection_policy":{"id":"4665"}},"id":"4611","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4616"},"glyph":{"id":"4617"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4618"},"selection_glyph":null,"view":{"id":"4620"}},"id":"4619","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4616"}},"id":"4620","type":"CDSView"}],"root_ids":["4682"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"ef15dc5e-873e-4322-a238-607fb9ef73dc","root_ids":["4682"],"roots":{"4682":"0b9e5912-c1c0-4536-b02b-2f6108c3d060"}}];
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