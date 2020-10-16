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
    
      
      
    
      var element = document.getElementById("cbc7e569-2482-4b38-9372-ef840a15eeb8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cbc7e569-2482-4b38-9372-ef840a15eeb8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b243bd3d-33c1-48d1-9f62-1d5f18fd667b":{"roots":{"references":[{"attributes":{},"id":"12651","type":"PanTool"},{"attributes":{"toolbars":[{"id":"12620"},{"id":"12658"},{"id":"12696"}],"tools":[{"id":"12613"},{"id":"12614"},{"id":"12615"},{"id":"12616"},{"id":"12617"},{"id":"12618"},{"id":"12651"},{"id":"12652"},{"id":"12653"},{"id":"12654"},{"id":"12655"},{"id":"12656"},{"id":"12689"},{"id":"12690"},{"id":"12691"},{"id":"12692"},{"id":"12693"},{"id":"12694"}]},"id":"12736","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRA","dtype":"float64","order":"little","shape":[36]},"y":{"__ndarray__":"AAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRA","dtype":"float64","order":"little","shape":[36]}},"selected":{"id":"12722"},"selection_policy":{"id":"12723"}},"id":"12665","type":"ColumnDataSource"},{"attributes":{"source":{"id":"12665"}},"id":"12669","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12689"},{"id":"12690"},{"id":"12691"},{"id":"12692"},{"id":"12693"},{"id":"12694"}]},"id":"12696","type":"Toolbar"},{"attributes":{},"id":"12616","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12613"},{"id":"12614"},{"id":"12615"},{"id":"12616"},{"id":"12617"},{"id":"12618"}]},"id":"12620","type":"Toolbar"},{"attributes":{},"id":"12723","type":"UnionRenderers"},{"attributes":{},"id":"12711","type":"BasicTickFormatter"},{"attributes":{},"id":"12617","type":"ResetTool"},{"attributes":{"formatter":{"id":"12729"},"ticker":{"id":"12682"}},"id":"12681","type":"LinearAxis"},{"attributes":{"axis":{"id":"12609"},"dimension":1,"ticker":null},"id":"12612","type":"Grid"},{"attributes":{},"id":"12673","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12667","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12629","type":"Circle"},{"attributes":{"toolbar":{"id":"12736"},"toolbar_location":"above"},"id":"12737","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]},"y":{"__ndarray__":"AAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]}},"selected":{"id":"12713"},"selection_policy":{"id":"12714"}},"id":"12627","type":"ColumnDataSource"},{"attributes":{},"id":"12714","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"12594"},0,0],[{"id":"12632"},0,1],[{"id":"12670"},0,2]]},"id":"12735","type":"GridBox"},{"attributes":{},"id":"12618","type":"HelpTool"},{"attributes":{"formatter":{"id":"12709"},"ticker":{"id":"12610"}},"id":"12609","type":"LinearAxis"},{"attributes":{"overlay":{"id":"12619"}},"id":"12615","type":"BoxZoomTool"},{"attributes":{},"id":"12597","type":"DataRange1d"},{"attributes":{},"id":"12635","type":"DataRange1d"},{"attributes":{},"id":"12677","type":"LinearScale"},{"attributes":{},"id":"12686","type":"BasicTicker"},{"attributes":{"axis":{"id":"12643"},"ticker":null},"id":"12646","type":"Grid"},{"attributes":{"text":"256-QAM"},"id":"12671","type":"Title"},{"attributes":{"below":[{"id":"12643"}],"center":[{"id":"12646"},{"id":"12650"}],"left":[{"id":"12647"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12668"}],"title":{"id":"12633"},"toolbar":{"id":"12658"},"toolbar_location":null,"x_range":{"id":"12635"},"x_scale":{"id":"12639"},"y_range":{"id":"12637"},"y_scale":{"id":"12641"}},"id":"12632","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12644","type":"BasicTicker"},{"attributes":{"formatter":{"id":"12718"},"ticker":{"id":"12648"}},"id":"12647","type":"LinearAxis"},{"attributes":{},"id":"12693","type":"ResetTool"},{"attributes":{"children":[{"id":"12737"},{"id":"12735"}]},"id":"12738","type":"Column"},{"attributes":{},"id":"12679","type":"LinearScale"},{"attributes":{"axis":{"id":"12605"},"ticker":null},"id":"12608","type":"Grid"},{"attributes":{"overlay":{"id":"12657"}},"id":"12653","type":"BoxZoomTool"},{"attributes":{},"id":"12613","type":"PanTool"},{"attributes":{},"id":"12603","type":"LinearScale"},{"attributes":{"data_source":{"id":"12665"},"glyph":{"id":"12666"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12667"},"selection_glyph":null,"view":{"id":"12669"}},"id":"12668","type":"GlyphRenderer"},{"attributes":{},"id":"12641","type":"LinearScale"},{"attributes":{"formatter":{"id":"12720"},"ticker":{"id":"12644"}},"id":"12643","type":"LinearAxis"},{"attributes":{},"id":"12692","type":"SaveTool"},{"attributes":{},"id":"12610","type":"BasicTicker"},{"attributes":{"data_source":{"id":"12627"},"glyph":{"id":"12628"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12629"},"selection_glyph":null,"view":{"id":"12631"}},"id":"12630","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12619","type":"BoxAnnotation"},{"attributes":{},"id":"12639","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEAAAAAAAAAcwAAAAAAAABTAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEAAAAAAAAAcwAAAAAAAABTAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEA=","dtype":"float64","order":"little","shape":[64]},"y":{"__ndarray__":"AAAAAAAAHMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAHMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAHMAAAAAAAAAcwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHEAAAAAAAAAcQAAAAAAAABxAAAAAAAAAHEAAAAAAAAAcQAAAAAAAABxAAAAAAAAAHEA=","dtype":"float64","order":"little","shape":[64]}},"selected":{"id":"12731"},"selection_policy":{"id":"12732"}},"id":"12703","type":"ColumnDataSource"},{"attributes":{},"id":"12709","type":"BasicTickFormatter"},{"attributes":{},"id":"12689","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12695","type":"BoxAnnotation"},{"attributes":{"text":"16-QAM"},"id":"12595","type":"Title"},{"attributes":{},"id":"12652","type":"WheelZoomTool"},{"attributes":{},"id":"12690","type":"WheelZoomTool"},{"attributes":{},"id":"12637","type":"DataRange1d"},{"attributes":{},"id":"12731","type":"Selection"},{"attributes":{},"id":"12718","type":"BasicTickFormatter"},{"attributes":{},"id":"12694","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12651"},{"id":"12652"},{"id":"12653"},{"id":"12654"},{"id":"12655"},{"id":"12656"}]},"id":"12658","type":"Toolbar"},{"attributes":{},"id":"12648","type":"BasicTicker"},{"attributes":{"source":{"id":"12703"}},"id":"12707","type":"CDSView"},{"attributes":{},"id":"12727","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12657","type":"BoxAnnotation"},{"attributes":{"text":"64-QAM"},"id":"12633","type":"Title"},{"attributes":{},"id":"12732","type":"UnionRenderers"},{"attributes":{},"id":"12722","type":"Selection"},{"attributes":{},"id":"12655","type":"ResetTool"},{"attributes":{"axis":{"id":"12647"},"dimension":1,"ticker":null},"id":"12650","type":"Grid"},{"attributes":{"formatter":{"id":"12727"},"ticker":{"id":"12686"}},"id":"12685","type":"LinearAxis"},{"attributes":{},"id":"12675","type":"DataRange1d"},{"attributes":{"source":{"id":"12627"}},"id":"12631","type":"CDSView"},{"attributes":{},"id":"12606","type":"BasicTicker"},{"attributes":{},"id":"12656","type":"HelpTool"},{"attributes":{},"id":"12713","type":"Selection"},{"attributes":{"overlay":{"id":"12695"}},"id":"12691","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12628","type":"Circle"},{"attributes":{},"id":"12614","type":"WheelZoomTool"},{"attributes":{},"id":"12599","type":"DataRange1d"},{"attributes":{},"id":"12720","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12705","type":"Circle"},{"attributes":{},"id":"12682","type":"BasicTicker"},{"attributes":{"below":[{"id":"12605"}],"center":[{"id":"12608"},{"id":"12612"}],"left":[{"id":"12609"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12630"}],"title":{"id":"12595"},"toolbar":{"id":"12620"},"toolbar_location":null,"x_range":{"id":"12597"},"x_scale":{"id":"12601"},"y_range":{"id":"12599"},"y_scale":{"id":"12603"}},"id":"12594","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12654","type":"SaveTool"},{"attributes":{"data_source":{"id":"12703"},"glyph":{"id":"12704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12705"},"selection_glyph":null,"view":{"id":"12707"}},"id":"12706","type":"GlyphRenderer"},{"attributes":{},"id":"12729","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"12685"},"dimension":1,"ticker":null},"id":"12688","type":"Grid"},{"attributes":{"formatter":{"id":"12711"},"ticker":{"id":"12606"}},"id":"12605","type":"LinearAxis"},{"attributes":{"below":[{"id":"12681"}],"center":[{"id":"12684"},{"id":"12688"}],"left":[{"id":"12685"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12706"}],"title":{"id":"12671"},"toolbar":{"id":"12696"},"toolbar_location":null,"x_range":{"id":"12673"},"x_scale":{"id":"12677"},"y_range":{"id":"12675"},"y_scale":{"id":"12679"}},"id":"12670","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12704","type":"Circle"},{"attributes":{},"id":"12601","type":"LinearScale"},{"attributes":{"axis":{"id":"12681"},"ticker":null},"id":"12684","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12666","type":"Circle"}],"root_ids":["12738"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"b243bd3d-33c1-48d1-9f62-1d5f18fd667b","root_ids":["12738"],"roots":{"12738":"cbc7e569-2482-4b38-9372-ef840a15eeb8"}}];
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