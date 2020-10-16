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
    
      
      
    
      var element = document.getElementById("1adce4e0-31e9-412d-a453-98e15dd2c203");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1adce4e0-31e9-412d-a453-98e15dd2c203' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4467f6fa-47d5-4028-b0d0-838c725c657e":{"roots":{"references":[{"attributes":{},"id":"12857","type":"SaveTool"},{"attributes":{},"id":"12897","type":"HelpTool"},{"attributes":{"text":"White Noise"},"id":"12836","type":"Title"},{"attributes":{},"id":"12913","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12860","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"12884"}],"center":[{"id":"12887"},{"id":"12891"}],"left":[{"id":"12888"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"12909"}],"title":{"id":"12874"},"toolbar":{"id":"12899"},"toolbar_location":null,"x_range":{"id":"12876"},"x_scale":{"id":"12880"},"y_range":{"id":"12911"},"y_scale":{"id":"12882"}},"id":"12873","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"12922"},"ticker":{"id":"12889"}},"id":"12888","type":"LinearAxis"},{"attributes":{},"id":"12842","type":"LinearScale"},{"attributes":{},"id":"12858","type":"ResetTool"},{"attributes":{"data_source":{"id":"12868"},"glyph":{"id":"12869"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12870"},"selection_glyph":null,"view":{"id":"12872"}},"id":"12871","type":"GlyphRenderer"},{"attributes":{},"id":"12844","type":"LinearScale"},{"attributes":{},"id":"12838","type":"DataRange1d"},{"attributes":{},"id":"12876","type":"DataRange1d"},{"attributes":{},"id":"12851","type":"BasicTicker"},{"attributes":{},"id":"12922","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12898"}},"id":"12894","type":"BoxZoomTool"},{"attributes":{},"id":"12840","type":"DataRange1d"},{"attributes":{},"id":"12885","type":"BasicTicker"},{"attributes":{},"id":"12855","type":"WheelZoomTool"},{"attributes":{"end":0.0024533766304664292},"id":"12911","type":"Range1d"},{"attributes":{},"id":"12889","type":"BasicTicker"},{"attributes":{},"id":"12927","type":"UnionRenderers"},{"attributes":{},"id":"12847","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12892"},{"id":"12893"},{"id":"12894"},{"id":"12895"},{"id":"12896"},{"id":"12897"}]},"id":"12899","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[501]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[501]}},"selected":{"id":"12917"},"selection_policy":{"id":"12918"}},"id":"12868","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"12932"},{"id":"12930"}]},"id":"12933","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12854"},{"id":"12855"},{"id":"12856"},{"id":"12857"},{"id":"12858"},{"id":"12859"}]},"id":"12861","type":"Toolbar"},{"attributes":{"formatter":{"id":"12915"},"ticker":{"id":"12847"}},"id":"12846","type":"LinearAxis"},{"attributes":{"axis":{"id":"12888"},"dimension":1,"ticker":null},"id":"12891","type":"Grid"},{"attributes":{},"id":"12893","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"12884"},"ticker":null},"id":"12887","type":"Grid"},{"attributes":{"formatter":{"id":"12924"},"ticker":{"id":"12885"}},"id":"12884","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"12870","type":"Line"},{"attributes":{},"id":"12854","type":"PanTool"},{"attributes":{},"id":"12896","type":"ResetTool"},{"attributes":{},"id":"12918","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"12913"},"ticker":{"id":"12851"}},"id":"12850","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"12908","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"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AAAAAAAwfEAAAAAAAEB8QAAAAAAAUHxAAAAAAABgfEAAAAAAAHB8QAAAAAAAgHxAAAAAAACQfEAAAAAAAKB8QAAAAAAAsHxAAAAAAADAfEAAAAAAANB8QAAAAAAA4HxAAAAAAADwfEAAAAAAAAB9QAAAAAAAEH1AAAAAAAAgfUAAAAAAADB9QAAAAAAAQH1AAAAAAABQfUAAAAAAAGB9QAAAAAAAcH1AAAAAAACAfUAAAAAAAJB9QAAAAAAAoH1AAAAAAACwfUAAAAAAAMB9QAAAAAAA0H1AAAAAAADgfUAAAAAAAPB9QAAAAAAAAH5AAAAAAAAQfkAAAAAAACB+QAAAAAAAMH5AAAAAAABAfkAAAAAAAFB+QAAAAAAAYH5AAAAAAABwfkAAAAAAAIB+QAAAAAAAkH5AAAAAAACgfkAAAAAAALB+QAAAAAAAwH5AAAAAAADQfkAAAAAAAOB+QAAAAAAA8H5AAAAAAAAAf0AAAAAAABB/QAAAAAAAIH9AAAAAAAAwf0AAAAAAAEB/QAAAAAAAUH9AAAAAAABgf0AAAAAAAHB/QAAAAAAAgH9AAAAAAACQf0AAAAAAAKB/QAAAAAAAsH9AAAAAAADAf0AAAAAAANB/QAAAAAAA4H9AAAAAAADwf0A=","dtype":"float64","order":"little","shape":[511]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[511]}},"selected":{"id":"12926"},"selection_policy":{"id":"12927"}},"id":"12906","type":"ColumnDataSource"},{"attributes":{"source":{"id":"12868"}},"id":"12872","type":"CDSView"},{"attributes":{"source":{"id":"12906"}},"id":"12910","type":"CDSView"},{"attributes":{},"id":"12924","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"12931"},"toolbar_location":"above"},"id":"12932","type":"ToolbarBox"},{"attributes":{},"id":"12915","type":"BasicTickFormatter"},{"attributes":{},"id":"12880","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12898","type":"BoxAnnotation"},{"attributes":{},"id":"12926","type":"Selection"},{"attributes":{"axis":{"id":"12846"},"ticker":null},"id":"12849","type":"Grid"},{"attributes":{},"id":"12917","type":"Selection"},{"attributes":{"toolbars":[{"id":"12861"},{"id":"12899"}],"tools":[{"id":"12854"},{"id":"12855"},{"id":"12856"},{"id":"12857"},{"id":"12858"},{"id":"12859"},{"id":"12892"},{"id":"12893"},{"id":"12894"},{"id":"12895"},{"id":"12896"},{"id":"12897"}]},"id":"12931","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"12850"},"dimension":1,"ticker":null},"id":"12853","type":"Grid"},{"attributes":{"data_source":{"id":"12906"},"glyph":{"id":"12907"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12908"},"selection_glyph":null,"view":{"id":"12910"}},"id":"12909","type":"GlyphRenderer"},{"attributes":{},"id":"12892","type":"PanTool"},{"attributes":{"text":"Power Spectra Density"},"id":"12874","type":"Title"},{"attributes":{},"id":"12882","type":"LinearScale"},{"attributes":{"overlay":{"id":"12860"}},"id":"12856","type":"BoxZoomTool"},{"attributes":{},"id":"12859","type":"HelpTool"},{"attributes":{"below":[{"id":"12846"}],"center":[{"id":"12849"},{"id":"12853"}],"left":[{"id":"12850"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"12871"}],"title":{"id":"12836"},"toolbar":{"id":"12861"},"toolbar_location":null,"x_range":{"id":"12838"},"x_scale":{"id":"12842"},"y_range":{"id":"12840"},"y_scale":{"id":"12844"}},"id":"12835","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"12869","type":"Line"},{"attributes":{},"id":"12895","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"12907","type":"Line"},{"attributes":{"children":[[{"id":"12835"},0,0],[{"id":"12873"},1,0]]},"id":"12930","type":"GridBox"}],"root_ids":["12933"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"4467f6fa-47d5-4028-b0d0-838c725c657e","root_ids":["12933"],"roots":{"12933":"1adce4e0-31e9-412d-a453-98e15dd2c203"}}];
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