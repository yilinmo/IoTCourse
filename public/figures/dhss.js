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
    
      
      
    
      var element = document.getElementById("7981e84f-bf2d-4e75-8815-b5b99baa9965");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7981e84f-bf2d-4e75-8815-b5b99baa9965' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d2a6e0e6-50b9-4219-bf6b-aa441d40ce27":{"roots":{"references":[{"attributes":{"axis":{"id":"13899"},"ticker":null},"id":"13902","type":"Grid"},{"attributes":{},"id":"14016","type":"Selection"},{"attributes":{},"id":"14007","type":"Selection"},{"attributes":{"source":{"id":"13921"}},"id":"13925","type":"CDSView"},{"attributes":{},"id":"13971","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13922","type":"Step"},{"attributes":{},"id":"13987","type":"ResetTool"},{"attributes":{},"id":"13910","type":"SaveTool"},{"attributes":{},"id":"14008","type":"UnionRenderers"},{"attributes":{"text":"Transmitted Signal"},"id":"13965","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"selected":{"id":"14007"},"selection_policy":{"id":"14008"}},"id":"13921","type":"ColumnDataSource"},{"attributes":{},"id":"13912","type":"HelpTool"},{"attributes":{},"id":"13967","type":"DataRange1d"},{"attributes":{"text":"PN Sequence"},"id":"13927","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13951","type":"BoxAnnotation"},{"attributes":{},"id":"13986","type":"SaveTool"},{"attributes":{"formatter":{"id":"14021"},"ticker":{"id":"13980"}},"id":"13979","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13907"},{"id":"13908"},{"id":"13909"},{"id":"13910"},{"id":"13911"},{"id":"13912"}]},"id":"13914","type":"Toolbar"},{"attributes":{"text":"Baseband Signal"},"id":"13889","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13913","type":"BoxAnnotation"},{"attributes":{},"id":"13946","type":"WheelZoomTool"},{"attributes":{},"id":"14017","type":"UnionRenderers"},{"attributes":{},"id":"13897","type":"LinearScale"},{"attributes":{},"id":"13911","type":"ResetTool"},{"attributes":{},"id":"13980","type":"BasicTicker"},{"attributes":{"axis":{"id":"13941"},"dimension":1,"ticker":null},"id":"13944","type":"Grid"},{"attributes":{},"id":"13904","type":"BasicTicker"},{"attributes":{},"id":"13891","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13961","type":"Step"},{"attributes":{"source":{"id":"13997"}},"id":"14001","type":"CDSView"},{"attributes":{},"id":"14012","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"14031"},{"id":"14029"}]},"id":"14032","type":"Column"},{"attributes":{"data_source":{"id":"13959"},"glyph":{"id":"13960"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13961"},"selection_glyph":null,"view":{"id":"13963"}},"id":"13962","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"14014"},"ticker":{"id":"13938"}},"id":"13937","type":"LinearAxis"},{"attributes":{},"id":"13948","type":"SaveTool"},{"attributes":{},"id":"13893","type":"DataRange1d"},{"attributes":{"overlay":{"id":"13989"}},"id":"13985","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"14023"},"ticker":{"id":"13976"}},"id":"13975","type":"LinearAxis"},{"attributes":{},"id":"13931","type":"DataRange1d"},{"attributes":{"below":[{"id":"13975"}],"center":[{"id":"13978"},{"id":"13982"}],"left":[{"id":"13979"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"14000"}],"title":{"id":"13965"},"toolbar":{"id":"13990"},"toolbar_location":null,"x_range":{"id":"13967"},"x_scale":{"id":"13971"},"y_range":{"id":"13969"},"y_scale":{"id":"13973"}},"id":"13964","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13976","type":"BasicTicker"},{"attributes":{"axis":{"id":"13975"},"ticker":null},"id":"13978","type":"Grid"},{"attributes":{},"id":"13933","type":"LinearScale"},{"attributes":{"below":[{"id":"13937"}],"center":[{"id":"13940"},{"id":"13944"}],"left":[{"id":"13941"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"13962"}],"title":{"id":"13927"},"toolbar":{"id":"13952"},"toolbar_location":null,"x_range":{"id":"13929"},"x_scale":{"id":"13933"},"y_range":{"id":"13931"},"y_scale":{"id":"13935"}},"id":"13926","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13938","type":"BasicTicker"},{"attributes":{},"id":"13973","type":"LinearScale"},{"attributes":{"formatter":{"id":"14003"},"ticker":{"id":"13904"}},"id":"13903","type":"LinearAxis"},{"attributes":{},"id":"13950","type":"HelpTool"},{"attributes":{"data_source":{"id":"13997"},"glyph":{"id":"13998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13999"},"selection_glyph":null,"view":{"id":"14001"}},"id":"14000","type":"GlyphRenderer"},{"attributes":{},"id":"13929","type":"DataRange1d"},{"attributes":{"overlay":{"id":"13951"}},"id":"13947","type":"BoxZoomTool"},{"attributes":{},"id":"13907","type":"PanTool"},{"attributes":{},"id":"13942","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"13914"},{"id":"13952"},{"id":"13990"}],"tools":[{"id":"13907"},{"id":"13908"},{"id":"13909"},{"id":"13910"},{"id":"13911"},{"id":"13912"},{"id":"13945"},{"id":"13946"},{"id":"13947"},{"id":"13948"},{"id":"13949"},{"id":"13950"},{"id":"13983"},{"id":"13984"},{"id":"13985"},{"id":"13986"},{"id":"13987"},{"id":"13988"}]},"id":"14030","type":"ProxyToolbar"},{"attributes":{},"id":"13908","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"13899"}],"center":[{"id":"13902"},{"id":"13906"}],"left":[{"id":"13903"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"13924"}],"title":{"id":"13889"},"toolbar":{"id":"13914"},"toolbar_location":null,"x_range":{"id":"13891"},"x_scale":{"id":"13895"},"y_range":{"id":"13893"},"y_scale":{"id":"13897"}},"id":"13888","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14025","type":"Selection"},{"attributes":{},"id":"13988","type":"HelpTool"},{"attributes":{},"id":"14021","type":"BasicTickFormatter"},{"attributes":{},"id":"14005","type":"BasicTickFormatter"},{"attributes":{},"id":"13983","type":"PanTool"},{"attributes":{"data_source":{"id":"13921"},"glyph":{"id":"13922"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13923"},"selection_glyph":null,"view":{"id":"13925"}},"id":"13924","type":"GlyphRenderer"},{"attributes":{},"id":"13969","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13960","type":"Step"},{"attributes":{},"id":"14014","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":[0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0]},"selected":{"id":"14016"},"selection_policy":{"id":"14017"}},"id":"13959","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13983"},{"id":"13984"},{"id":"13985"},{"id":"13986"},{"id":"13987"},{"id":"13988"}]},"id":"13990","type":"Toolbar"},{"attributes":{},"id":"14026","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13945"},{"id":"13946"},{"id":"13947"},{"id":"13948"},{"id":"13949"},{"id":"13950"}]},"id":"13952","type":"Toolbar"},{"attributes":{},"id":"13935","type":"LinearScale"},{"attributes":{},"id":"14003","type":"BasicTickFormatter"},{"attributes":{},"id":"13900","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[33]}},"selected":{"id":"14025"},"selection_policy":{"id":"14026"}},"id":"13997","type":"ColumnDataSource"},{"attributes":{},"id":"14023","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"13903"},"dimension":1,"ticker":null},"id":"13906","type":"Grid"},{"attributes":{"toolbar":{"id":"14030"},"toolbar_location":"above"},"id":"14031","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13989","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13923","type":"Step"},{"attributes":{"source":{"id":"13959"}},"id":"13963","type":"CDSView"},{"attributes":{},"id":"13984","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"13888"},0,0],[{"id":"13926"},1,0],[{"id":"13964"},2,0]]},"id":"14029","type":"GridBox"},{"attributes":{},"id":"13945","type":"PanTool"},{"attributes":{"axis":{"id":"13937"},"ticker":null},"id":"13940","type":"Grid"},{"attributes":{},"id":"13949","type":"ResetTool"},{"attributes":{"overlay":{"id":"13913"}},"id":"13909","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"13979"},"dimension":1,"ticker":null},"id":"13982","type":"Grid"},{"attributes":{"formatter":{"id":"14005"},"ticker":{"id":"13900"}},"id":"13899","type":"LinearAxis"},{"attributes":{"formatter":{"id":"14012"},"ticker":{"id":"13942"}},"id":"13941","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13999","type":"Step"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"13998","type":"Step"},{"attributes":{},"id":"13895","type":"LinearScale"}],"root_ids":["14032"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"d2a6e0e6-50b9-4219-bf6b-aa441d40ce27","root_ids":["14032"],"roots":{"14032":"7981e84f-bf2d-4e75-8815-b5b99baa9965"}}];
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