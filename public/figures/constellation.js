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
    
      
      
    
      var element = document.getElementById("6800f62e-ed38-420c-8172-640d60dbe119");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6800f62e-ed38-420c-8172-640d60dbe119' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9712c10d-3841-4359-b097-76d2b2162a25":{"roots":{"references":[{"attributes":{},"id":"3509","type":"BasicTicker"},{"attributes":{},"id":"3520","type":"ResetTool"},{"attributes":{"axis":{"id":"3508"},"ticker":null},"id":"3511","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3580","type":"Line"},{"attributes":{"children":[{"id":"3618"},{"id":"3616"}]},"id":"3619","type":"Column"},{"attributes":{},"id":"3521","type":"HelpTool"},{"attributes":{},"id":"3466","type":"BasicTicker"},{"attributes":{},"id":"3613","type":"UnionRenderers"},{"attributes":{},"id":"3517","type":"WheelZoomTool"},{"attributes":{"source":{"id":"3492"}},"id":"3496","type":"CDSView"},{"attributes":{},"id":"3614","type":"Selection"},{"attributes":{"text":"BPSK"},"id":"3498","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3493","type":"Line"},{"attributes":{"text":"OOK"},"id":"3455","type":"Title"},{"attributes":{},"id":"3563","type":"ResetTool"},{"attributes":{"toolbar":{"id":"3617"},"toolbar_location":"above"},"id":"3618","type":"ToolbarBox"},{"attributes":{},"id":"3470","type":"BasicTicker"},{"attributes":{},"id":"3457","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3530"},"glyph":{"id":"3531"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3532"},"selection_glyph":null,"view":{"id":"3534"}},"id":"3533","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3565","type":"BoxAnnotation"},{"attributes":{},"id":"3606","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3530"}},"id":"3534","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3537","type":"Line"},{"attributes":{},"id":"3603","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3575","type":"Circle"},{"attributes":{"below":[{"id":"3508"}],"center":[{"id":"3511"},{"id":"3515"}],"left":[{"id":"3512"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3533"},{"id":"3538"}],"title":{"id":"3498"},"toolbar":{"id":"3523"},"toolbar_location":null,"x_range":{"id":"3500"},"x_scale":{"id":"3504"},"y_range":{"id":"3502"},"y_scale":{"id":"3506"}},"id":"3497","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3461","type":"LinearScale"},{"attributes":{"data_source":{"id":"3535"},"glyph":{"id":"3536"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3537"},"selection_glyph":null,"view":{"id":"3539"}},"id":"3538","type":"GlyphRenderer"},{"attributes":{},"id":"3504","type":"LinearScale"},{"attributes":{"data":{"x":[0,1],"y":[0,0]},"selected":{"id":"3590"},"selection_policy":{"id":"3589"}},"id":"3487","type":"ColumnDataSource"},{"attributes":{},"id":"3547","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3479","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3574","type":"Circle"},{"attributes":{"overlay":{"id":"3479"}},"id":"3475","type":"BoxZoomTool"},{"attributes":{},"id":"3519","type":"SaveTool"},{"attributes":{},"id":"3543","type":"DataRange1d"},{"attributes":{},"id":"3463","type":"LinearScale"},{"attributes":{},"id":"3459","type":"DataRange1d"},{"attributes":{},"id":"3549","type":"LinearScale"},{"attributes":{"data_source":{"id":"3573"},"glyph":{"id":"3574"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3575"},"selection_glyph":null,"view":{"id":"3577"}},"id":"3576","type":"GlyphRenderer"},{"attributes":{},"id":"3506","type":"LinearScale"},{"attributes":{},"id":"3589","type":"UnionRenderers"},{"attributes":{"axis":{"id":"3551"},"ticker":null},"id":"3554","type":"Grid"},{"attributes":{},"id":"3601","type":"Selection"},{"attributes":{},"id":"3597","type":"BasicTickFormatter"},{"attributes":{},"id":"3612","type":"Selection"},{"attributes":{"data_source":{"id":"3487"},"glyph":{"id":"3488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3489"},"selection_glyph":null,"view":{"id":"3491"}},"id":"3490","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"3592"},"selection_policy":{"id":"3591"}},"id":"3492","type":"ColumnDataSource"},{"attributes":{"text":"QPSK"},"id":"3541","type":"Title"},{"attributes":{},"id":"3516","type":"PanTool"},{"attributes":{},"id":"3590","type":"Selection"},{"attributes":{},"id":"3562","type":"SaveTool"},{"attributes":{"source":{"id":"3487"}},"id":"3491","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"3614"},"selection_policy":{"id":"3613"}},"id":"3578","type":"ColumnDataSource"},{"attributes":{},"id":"3600","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"3522"}},"id":"3518","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"3603"},"selection_policy":{"id":"3602"}},"id":"3535","type":"ColumnDataSource"},{"attributes":{},"id":"3502","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3492"},"glyph":{"id":"3493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3494"},"selection_glyph":null,"view":{"id":"3496"}},"id":"3495","type":"GlyphRenderer"},{"attributes":{},"id":"3611","type":"UnionRenderers"},{"attributes":{},"id":"3586","type":"BasicTickFormatter"},{"attributes":{},"id":"3560","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"3469"},"dimension":1,"ticker":null},"id":"3472","type":"Grid"},{"attributes":{"source":{"id":"3578"}},"id":"3582","type":"CDSView"},{"attributes":{},"id":"3556","type":"BasicTicker"},{"attributes":{},"id":"3602","type":"UnionRenderers"},{"attributes":{},"id":"3500","type":"DataRange1d"},{"attributes":{},"id":"3592","type":"Selection"},{"attributes":{},"id":"3559","type":"PanTool"},{"attributes":{"data_source":{"id":"3578"},"glyph":{"id":"3579"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3580"},"selection_glyph":null,"view":{"id":"3582"}},"id":"3581","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3488","type":"Circle"},{"attributes":{},"id":"3595","type":"BasicTickFormatter"},{"attributes":{},"id":"3478","type":"HelpTool"},{"attributes":{"source":{"id":"3573"}},"id":"3577","type":"CDSView"},{"attributes":{"axis":{"id":"3555"},"dimension":1,"ticker":null},"id":"3558","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3494","type":"Line"},{"attributes":{"below":[{"id":"3551"}],"center":[{"id":"3554"},{"id":"3558"}],"left":[{"id":"3555"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3576"},{"id":"3581"}],"title":{"id":"3541"},"toolbar":{"id":"3566"},"toolbar_location":null,"x_range":{"id":"3543"},"x_scale":{"id":"3547"},"y_range":{"id":"3545"},"y_scale":{"id":"3549"}},"id":"3540","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"3606"},"ticker":{"id":"3556"}},"id":"3555","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3489","type":"Circle"},{"attributes":{},"id":"3608","type":"BasicTickFormatter"},{"attributes":{},"id":"3552","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3579","type":"Line"},{"attributes":{},"id":"3564","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3473"},{"id":"3474"},{"id":"3475"},{"id":"3476"},{"id":"3477"},{"id":"3478"}]},"id":"3480","type":"Toolbar"},{"attributes":{"source":{"id":"3535"}},"id":"3539","type":"CDSView"},{"attributes":{},"id":"3477","type":"ResetTool"},{"attributes":{"overlay":{"id":"3565"}},"id":"3561","type":"BoxZoomTool"},{"attributes":{},"id":"3474","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"3584"},"ticker":{"id":"3470"}},"id":"3469","type":"LinearAxis"},{"attributes":{},"id":"3513","type":"BasicTicker"},{"attributes":{},"id":"3591","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"3608"},"ticker":{"id":"3552"}},"id":"3551","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3532","type":"Circle"},{"attributes":{"axis":{"id":"3465"},"ticker":null},"id":"3468","type":"Grid"},{"attributes":{"axis":{"id":"3512"},"dimension":1,"ticker":null},"id":"3515","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3559"},{"id":"3560"},{"id":"3561"},{"id":"3562"},{"id":"3563"},{"id":"3564"}]},"id":"3566","type":"Toolbar"},{"attributes":{"data":{"x":[1,-1],"y":[0,0]},"selected":{"id":"3601"},"selection_policy":{"id":"3600"}},"id":"3530","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"3480"},{"id":"3523"},{"id":"3566"}],"tools":[{"id":"3473"},{"id":"3474"},{"id":"3475"},{"id":"3476"},{"id":"3477"},{"id":"3478"},{"id":"3516"},{"id":"3517"},{"id":"3518"},{"id":"3519"},{"id":"3520"},{"id":"3521"},{"id":"3559"},{"id":"3560"},{"id":"3561"},{"id":"3562"},{"id":"3563"},{"id":"3564"}]},"id":"3617","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"zTt/Zp6g5j/MO39mnqDmv847f2aeoOa/yzt/Zp6g5j8=","dtype":"float64","order":"little","shape":[4]},"y":{"__ndarray__":"zDt/Zp6g5j/NO39mnqDmP8w7f2aeoOa/zjt/Zp6g5r8=","dtype":"float64","order":"little","shape":[4]}},"selected":{"id":"3612"},"selection_policy":{"id":"3611"}},"id":"3573","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3522","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3531","type":"Circle"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3536","type":"Line"},{"attributes":{},"id":"3476","type":"SaveTool"},{"attributes":{},"id":"3584","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"3454"},0,0],[{"id":"3497"},0,1],[{"id":"3540"},0,2]]},"id":"3616","type":"GridBox"},{"attributes":{"formatter":{"id":"3586"},"ticker":{"id":"3466"}},"id":"3465","type":"LinearAxis"},{"attributes":{},"id":"3473","type":"PanTool"},{"attributes":{"below":[{"id":"3465"}],"center":[{"id":"3468"},{"id":"3472"}],"left":[{"id":"3469"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3490"},{"id":"3495"}],"title":{"id":"3455"},"toolbar":{"id":"3480"},"toolbar_location":null,"x_range":{"id":"3457"},"x_scale":{"id":"3461"},"y_range":{"id":"3459"},"y_scale":{"id":"3463"}},"id":"3454","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3516"},{"id":"3517"},{"id":"3518"},{"id":"3519"},{"id":"3520"},{"id":"3521"}]},"id":"3523","type":"Toolbar"},{"attributes":{"formatter":{"id":"3597"},"ticker":{"id":"3509"}},"id":"3508","type":"LinearAxis"},{"attributes":{},"id":"3545","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3595"},"ticker":{"id":"3513"}},"id":"3512","type":"LinearAxis"}],"root_ids":["3619"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"9712c10d-3841-4359-b097-76d2b2162a25","root_ids":["3619"],"roots":{"3619":"6800f62e-ed38-420c-8172-640d60dbe119"}}];
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