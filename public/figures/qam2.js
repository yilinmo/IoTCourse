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
    
      
      
    
      var element = document.getElementById("a1f298ff-27a7-4e56-8ecb-23d2a95fc3b5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a1f298ff-27a7-4e56-8ecb-23d2a95fc3b5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"163f59bb-324c-4560-b867-8e0b72ea5d67":{"roots":{"references":[{"attributes":{},"id":"13003","type":"DataRange1d"},{"attributes":{"axis":{"id":"13009"},"ticker":null},"id":"13012","type":"Grid"},{"attributes":{"formatter":{"id":"13037"},"ticker":{"id":"13014"}},"id":"13013","type":"LinearAxis"},{"attributes":{},"id":"13010","type":"BasicTicker"},{"attributes":{"overlay":{"id":"13023"}},"id":"13019","type":"BoxZoomTool"},{"attributes":{},"id":"13041","type":"Selection"},{"attributes":{"below":[{"id":"13009"}],"center":[{"id":"13012"},{"id":"13016"}],"left":[{"id":"13013"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13034"}],"title":{"id":"12999"},"toolbar":{"id":"13024"},"x_range":{"id":"13001"},"x_scale":{"id":"13005"},"y_range":{"id":"13003"},"y_scale":{"id":"13007"}},"id":"12998","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"13039"},"ticker":{"id":"13010"}},"id":"13009","type":"LinearAxis"},{"attributes":{},"id":"13017","type":"PanTool"},{"attributes":{},"id":"13020","type":"SaveTool"},{"attributes":{"data_source":{"id":"13031"},"glyph":{"id":"13032"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13033"},"selection_glyph":null,"view":{"id":"13035"}},"id":"13034","type":"GlyphRenderer"},{"attributes":{},"id":"13042","type":"UnionRenderers"},{"attributes":{},"id":"13018","type":"WheelZoomTool"},{"attributes":{},"id":"13022","type":"HelpTool"},{"attributes":{},"id":"13001","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13017"},{"id":"13018"},{"id":"13019"},{"id":"13020"},{"id":"13021"},{"id":"13022"}]},"id":"13024","type":"Toolbar"},{"attributes":{"text":"16-QAM"},"id":"12999","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"13032","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"13033","type":"Circle"},{"attributes":{"source":{"id":"13031"}},"id":"13035","type":"CDSView"},{"attributes":{"axis":{"id":"13013"},"dimension":1,"ticker":null},"id":"13016","type":"Grid"},{"attributes":{},"id":"13005","type":"LinearScale"},{"attributes":{},"id":"13014","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13023","type":"BoxAnnotation"},{"attributes":{},"id":"13021","type":"ResetTool"},{"attributes":{},"id":"13039","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]},"y":{"__ndarray__":"AAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]}},"selected":{"id":"13041"},"selection_policy":{"id":"13042"}},"id":"13031","type":"ColumnDataSource"},{"attributes":{},"id":"13037","type":"BasicTickFormatter"},{"attributes":{},"id":"13007","type":"LinearScale"}],"root_ids":["12998"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"163f59bb-324c-4560-b867-8e0b72ea5d67","root_ids":["12998"],"roots":{"12998":"a1f298ff-27a7-4e56-8ecb-23d2a95fc3b5"}}];
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