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
    
      
      
    
      var element = document.getElementById("d9126410-077d-4ab0-8046-0b11c5d0e6c8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd9126410-077d-4ab0-8046-0b11c5d0e6c8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b037e6f6-b693-444b-960a-aaf6961cb27f":{"roots":{"references":[{"attributes":{"below":[{"id":"8654"}],"center":[{"id":"8657"},{"id":"8661"},{"id":"8681"},{"id":"8687"},{"id":"8693"},{"id":"8699"}],"left":[{"id":"8658"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"8679"},{"id":"8685"},{"id":"8691"},{"id":"8697"}],"title":{"id":"8644"},"toolbar":{"id":"8669"},"x_range":{"id":"8646"},"x_scale":{"id":"8650"},"y_range":{"id":"8700"},"y_scale":{"id":"8652"}},"id":"8643","subtype":"Figure","type":"Plot"},{"attributes":{"ticks":[1,2,3]},"id":"8701","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":4.5},"y":{"value":3}},"id":"8689","type":"Rect"},{"attributes":{},"id":"8707","type":"UnionRenderers"},{"attributes":{"text":"Data Frame","text_align":"center","text_font_size":"25px","x":4.5,"y":3,"y_offset":-15},"id":"8693","type":"Label"},{"attributes":{"data_source":{"id":"8694"},"glyph":{"id":"8695"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8696"},"selection_glyph":null,"view":{"id":"8698"}},"id":"8697","type":"GlyphRenderer"},{"attributes":{},"id":"8712","type":"Selection"},{"attributes":{"axis_label":"Time","formatter":{"id":"8706"},"ticker":{"id":"8655"}},"id":"8654","type":"LinearAxis"},{"attributes":{"end":3.5,"start":0.5},"id":"8700","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"8668","type":"BoxAnnotation"},{"attributes":{"data":{},"selected":{"id":"8714"},"selection_policy":{"id":"8713"}},"id":"8694","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"8710"},"selection_policy":{"id":"8709"}},"id":"8682","type":"ColumnDataSource"},{"attributes":{},"id":"8704","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8704"},"major_label_overrides":{"1":"C","2":"B","3":"A"},"ticker":{"id":"8701"}},"id":"8658","type":"LinearAxis"},{"attributes":{},"id":"8650","type":"LinearScale"},{"attributes":{"data":{},"selected":{"id":"8712"},"selection_policy":{"id":"8711"}},"id":"8688","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8658"},"dimension":1,"ticker":null},"id":"8661","type":"Grid"},{"attributes":{"source":{"id":"8688"}},"id":"8692","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"8708"},"selection_policy":{"id":"8707"}},"id":"8676","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":4.5},"y":{"value":3}},"id":"8690","type":"Rect"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":2}},"id":"8695","type":"Rect"},{"attributes":{},"id":"8665","type":"SaveTool"},{"attributes":{},"id":"8655","type":"BasicTicker"},{"attributes":{"source":{"id":"8682"}},"id":"8686","type":"CDSView"},{"attributes":{},"id":"8663","type":"WheelZoomTool"},{"attributes":{},"id":"8709","type":"UnionRenderers"},{"attributes":{"text":"Hidden Terminal"},"id":"8644","type":"Title"},{"attributes":{"data_source":{"id":"8688"},"glyph":{"id":"8689"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8690"},"selection_glyph":null,"view":{"id":"8692"}},"id":"8691","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8662"},{"id":"8663"},{"id":"8664"},{"id":"8665"},{"id":"8666"},{"id":"8667"}]},"id":"8669","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":2}},"id":"8696","type":"Rect"},{"attributes":{},"id":"8646","type":"DataRange1d"},{"attributes":{"text":"RTS","text_align":"center","text_font_size":"25px","x":0.5,"y":3,"y_offset":-15},"id":"8681","type":"Label"},{"attributes":{},"id":"8714","type":"Selection"},{"attributes":{"text":"ACK","text_align":"center","text_font_size":"25px","x":7.5,"y":2,"y_offset":-15},"id":"8699","type":"Label"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":3}},"id":"8677","type":"Rect"},{"attributes":{},"id":"8666","type":"ResetTool"},{"attributes":{"data_source":{"id":"8682"},"glyph":{"id":"8683"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8684"},"selection_glyph":null,"view":{"id":"8686"}},"id":"8685","type":"GlyphRenderer"},{"attributes":{},"id":"8710","type":"Selection"},{"attributes":{"data_source":{"id":"8676"},"glyph":{"id":"8677"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8678"},"selection_glyph":null,"view":{"id":"8680"}},"id":"8679","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"8654"},"ticker":null,"visible":false},"id":"8657","type":"Grid"},{"attributes":{"source":{"id":"8694"}},"id":"8698","type":"CDSView"},{"attributes":{"text":"CTS","text_align":"center","text_font_size":"25px","x":1.5,"y":2,"y_offset":-15},"id":"8687","type":"Label"},{"attributes":{"overlay":{"id":"8668"}},"id":"8664","type":"BoxZoomTool"},{"attributes":{},"id":"8706","type":"BasicTickFormatter"},{"attributes":{},"id":"8708","type":"Selection"},{"attributes":{},"id":"8652","type":"LinearScale"},{"attributes":{"source":{"id":"8676"}},"id":"8680","type":"CDSView"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":2}},"id":"8683","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":2}},"id":"8684","type":"Rect"},{"attributes":{},"id":"8662","type":"PanTool"},{"attributes":{},"id":"8667","type":"HelpTool"},{"attributes":{},"id":"8711","type":"UnionRenderers"},{"attributes":{},"id":"8713","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":3}},"id":"8678","type":"Rect"}],"root_ids":["8643"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"b037e6f6-b693-444b-960a-aaf6961cb27f","root_ids":["8643"],"roots":{"8643":"d9126410-077d-4ab0-8046-0b11c5d0e6c8"}}];
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