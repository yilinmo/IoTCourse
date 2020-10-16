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
    
      
      
    
      var element = document.getElementById("0876ce05-a29c-46dd-844e-eb363637b629");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0876ce05-a29c-46dd-844e-eb363637b629' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d7df0afa-8728-40cb-97d9-e68215e768a3":{"roots":{"references":[{"attributes":{"axis":{"id":"14222"},"dimension":1,"ticker":null},"id":"14225","type":"Grid"},{"attributes":{"source":{"id":"14240"}},"id":"14244","type":"CDSView"},{"attributes":{},"id":"14269","type":"Selection"},{"attributes":{},"id":"14260","type":"Selection"},{"attributes":{},"id":"14148","type":"PanTool"},{"attributes":{"formatter":{"id":"14267"},"ticker":{"id":"14219"}},"id":"14218","type":"LinearAxis"},{"attributes":{},"id":"14149","type":"WheelZoomTool"},{"attributes":{},"id":"14173","type":"DataRange1d"},{"attributes":{},"id":"14216","type":"LinearScale"},{"attributes":{"source":{"id":"14201"}},"id":"14205","type":"CDSView"},{"attributes":{"toolbars":[{"id":"14155"},{"id":"14194"},{"id":"14233"}],"tools":[{"id":"14148"},{"id":"14149"},{"id":"14150"},{"id":"14151"},{"id":"14152"},{"id":"14153"},{"id":"14187"},{"id":"14188"},{"id":"14189"},{"id":"14190"},{"id":"14191"},{"id":"14192"},{"id":"14226"},{"id":"14227"},{"id":"14228"},{"id":"14229"},{"id":"14230"},{"id":"14231"}]},"id":"14274","type":"ProxyToolbar"},{"attributes":{},"id":"14177","type":"LinearScale"},{"attributes":{},"id":"14230","type":"ResetTool"},{"attributes":{"below":[{"id":"14218"}],"center":[{"id":"14221"},{"id":"14225"}],"left":[{"id":"14222"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"14243"}],"title":{"id":"14208"},"toolbar":{"id":"14233"},"toolbar_location":null,"x_range":{"id":"14245"},"x_scale":{"id":"14214"},"y_range":{"id":"14212"},"y_scale":{"id":"14216"}},"id":"14207","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14190","type":"SaveTool"},{"attributes":{"axis":{"id":"14144"},"dimension":1,"ticker":null},"id":"14147","type":"Grid"},{"attributes":{"data_source":{"id":"14240"},"glyph":{"id":"14241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14242"},"selection_glyph":null,"view":{"id":"14244"}},"id":"14243","type":"GlyphRenderer"},{"attributes":{},"id":"14212","type":"DataRange1d"},{"attributes":{},"id":"14138","type":"LinearScale"},{"attributes":{"children":[{"id":"14275"},{"id":"14273"}]},"id":"14276","type":"Column"},{"attributes":{"formatter":{"id":"14265"},"ticker":{"id":"14223"}},"id":"14222","type":"LinearAxis"},{"attributes":{"overlay":{"id":"14232"}},"id":"14228","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14148"},{"id":"14149"},{"id":"14150"},{"id":"14151"},{"id":"14152"},{"id":"14153"}]},"id":"14155","type":"Toolbar"},{"attributes":{"end":32},"id":"14167","type":"Range1d"},{"attributes":{"overlay":{"id":"14154"}},"id":"14150","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"14218"},"ticker":null},"id":"14221","type":"Grid"},{"attributes":{"end":32},"id":"14206","type":"Range1d"},{"attributes":{"data_source":{"id":"14201"},"glyph":{"id":"14202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14203"},"selection_glyph":null,"view":{"id":"14205"}},"id":"14204","type":"GlyphRenderer"},{"attributes":{},"id":"14145","type":"BasicTicker"},{"attributes":{},"id":"14249","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":[0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0]},"selected":{"id":"14251"},"selection_policy":{"id":"14252"}},"id":"14162","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14162"}},"id":"14166","type":"CDSView"},{"attributes":{},"id":"14270","type":"UnionRenderers"},{"attributes":{},"id":"14191","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14187"},{"id":"14188"},{"id":"14189"},{"id":"14190"},{"id":"14191"},{"id":"14192"}]},"id":"14194","type":"Toolbar"},{"attributes":{"formatter":{"id":"14258"},"ticker":{"id":"14180"}},"id":"14179","type":"LinearAxis"},{"attributes":{},"id":"14265","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14256"},"ticker":{"id":"14184"}},"id":"14183","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14242","type":"Step"},{"attributes":{"children":[[{"id":"14129"},0,0],[{"id":"14168"},1,0],[{"id":"14207"},2,0]]},"id":"14273","type":"GridBox"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14241","type":"Step"},{"attributes":{"below":[{"id":"14179"}],"center":[{"id":"14182"},{"id":"14186"}],"left":[{"id":"14183"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"14204"}],"title":{"id":"14169"},"toolbar":{"id":"14194"},"toolbar_location":null,"x_range":{"id":"14206"},"x_scale":{"id":"14175"},"y_range":{"id":"14173"},"y_scale":{"id":"14177"}},"id":"14168","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14261","type":"UnionRenderers"},{"attributes":{},"id":"14227","type":"WheelZoomTool"},{"attributes":{},"id":"14231","type":"HelpTool"},{"attributes":{},"id":"14252","type":"UnionRenderers"},{"attributes":{"axis":{"id":"14140"},"ticker":null},"id":"14143","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14154","type":"BoxAnnotation"},{"attributes":{},"id":"14180","type":"BasicTicker"},{"attributes":{},"id":"14229","type":"SaveTool"},{"attributes":{"below":[{"id":"14140"}],"center":[{"id":"14143"},{"id":"14147"}],"left":[{"id":"14144"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"14165"}],"title":{"id":"14130"},"toolbar":{"id":"14155"},"toolbar_location":null,"x_range":{"id":"14167"},"x_scale":{"id":"14136"},"y_range":{"id":"14134"},"y_scale":{"id":"14138"}},"id":"14129","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14151","type":"SaveTool"},{"attributes":{},"id":"14141","type":"BasicTicker"},{"attributes":{},"id":"14223","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAsQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[32]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAA==","dtype":"float64","order":"little","shape":[32]}},"selected":{"id":"14269"},"selection_policy":{"id":"14270"}},"id":"14240","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14163","type":"Step"},{"attributes":{},"id":"14187","type":"PanTool"},{"attributes":{"toolbar":{"id":"14274"},"toolbar_location":"above"},"id":"14275","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"14249"},"ticker":{"id":"14141"}},"id":"14140","type":"LinearAxis"},{"attributes":{"overlay":{"id":"14193"}},"id":"14189","type":"BoxZoomTool"},{"attributes":{},"id":"14214","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14202","type":"Step"},{"attributes":{},"id":"14219","type":"BasicTicker"},{"attributes":{},"id":"14136","type":"LinearScale"},{"attributes":{},"id":"14134","type":"DataRange1d"},{"attributes":{},"id":"14256","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14247"},"ticker":{"id":"14145"}},"id":"14144","type":"LinearAxis"},{"attributes":{},"id":"14247","type":"BasicTickFormatter"},{"attributes":{},"id":"14226","type":"PanTool"},{"attributes":{"text":"PN Sequence"},"id":"14130","type":"Title"},{"attributes":{"text":"Decoded Signal"},"id":"14208","type":"Title"},{"attributes":{"end":32},"id":"14245","type":"Range1d"},{"attributes":{},"id":"14184","type":"BasicTicker"},{"attributes":{},"id":"14153","type":"HelpTool"},{"attributes":{"data_source":{"id":"14162"},"glyph":{"id":"14163"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14164"},"selection_glyph":null,"view":{"id":"14166"}},"id":"14165","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14203","type":"Step"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14164","type":"Step"},{"attributes":{},"id":"14192","type":"HelpTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAsQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[32]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPw==","dtype":"float64","order":"little","shape":[32]}},"selected":{"id":"14260"},"selection_policy":{"id":"14261"}},"id":"14201","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14193","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14232","type":"BoxAnnotation"},{"attributes":{},"id":"14152","type":"ResetTool"},{"attributes":{},"id":"14188","type":"WheelZoomTool"},{"attributes":{},"id":"14251","type":"Selection"},{"attributes":{"axis":{"id":"14183"},"dimension":1,"ticker":null},"id":"14186","type":"Grid"},{"attributes":{"text":"Delayed Signal"},"id":"14169","type":"Title"},{"attributes":{},"id":"14258","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"14179"},"ticker":null},"id":"14182","type":"Grid"},{"attributes":{},"id":"14175","type":"LinearScale"},{"attributes":{},"id":"14267","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14226"},{"id":"14227"},{"id":"14228"},{"id":"14229"},{"id":"14230"},{"id":"14231"}]},"id":"14233","type":"Toolbar"}],"root_ids":["14276"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"d7df0afa-8728-40cb-97d9-e68215e768a3","root_ids":["14276"],"roots":{"14276":"0876ce05-a29c-46dd-844e-eb363637b629"}}];
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