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
    
      
      
    
      var element = document.getElementById("74901ef8-fef2-42a9-94ee-bd3b3680a621");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '74901ef8-fef2-42a9-94ee-bd3b3680a621' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1bb9098f-4242-43ea-9fbb-f4529ba9e773":{"roots":{"references":[{"attributes":{"text":"CTS","text_align":"center","text_font_size":"25px","x":3.5,"y":0,"y_offset":-15},"id":"9727","type":"Label"},{"attributes":{"text":"RTS","text_align":"center","text_font_size":"25px","x":0.5,"y":2,"y_offset":-15},"id":"9697","type":"Label"},{"attributes":{},"id":"9738","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":6.5},"y":{"value":1}},"id":"9730","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"9744"},"selection_policy":{"id":"9743"}},"id":"9698","type":"ColumnDataSource"},{"attributes":{"text":"Data Frame","text_align":"center","text_font_size":"25px","x":6.5,"y":1,"y_offset":-15},"id":"9733","type":"Label"},{"attributes":{},"id":"9754","type":"Selection"},{"attributes":{"text":"ACK","text_align":"center","text_font_size":"25px","x":7.5,"y":3,"y_offset":-15},"id":"9715","type":"Label"},{"attributes":{"source":{"id":"9698"}},"id":"9702","type":"CDSView"},{"attributes":{"overlay":{"id":"9684"}},"id":"9680","type":"BoxZoomTool"},{"attributes":{},"id":"9751","type":"UnionRenderers"},{"attributes":{"below":[{"id":"9670"}],"center":[{"id":"9673"},{"id":"9677"},{"id":"9697"},{"id":"9703"},{"id":"9709"},{"id":"9715"},{"id":"9721"},{"id":"9727"},{"id":"9733"}],"left":[{"id":"9674"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"9695"},{"id":"9701"},{"id":"9707"},{"id":"9713"},{"id":"9719"},{"id":"9725"},{"id":"9731"}],"title":{"id":"9660"},"toolbar":{"id":"9685"},"x_range":{"id":"9662"},"x_scale":{"id":"9666"},"y_range":{"id":"9734"},"y_scale":{"id":"9668"}},"id":"9659","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"9722"},"glyph":{"id":"9723"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9724"},"selection_glyph":null,"view":{"id":"9726"}},"id":"9725","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":1}},"id":"9717","type":"Rect"},{"attributes":{},"id":"9746","type":"Selection"},{"attributes":{"source":{"id":"9692"}},"id":"9696","type":"CDSView"},{"attributes":{},"id":"9678","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9678"},{"id":"9679"},{"id":"9680"},{"id":"9681"},{"id":"9682"},{"id":"9683"}]},"id":"9685","type":"Toolbar"},{"attributes":{"formatter":{"id":"9738"},"major_label_overrides":{"0":"D","1":"C","2":"B","3":"A"},"ticker":{"id":"9735"}},"id":"9674","type":"LinearAxis"},{"attributes":{},"id":"9741","type":"UnionRenderers"},{"attributes":{"source":{"id":"9710"}},"id":"9714","type":"CDSView"},{"attributes":{"data_source":{"id":"9704"},"glyph":{"id":"9705"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9706"},"selection_glyph":null,"view":{"id":"9708"}},"id":"9707","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":4.5},"y":{"value":2}},"id":"9705","type":"Rect"},{"attributes":{"source":{"id":"9722"}},"id":"9726","type":"CDSView"},{"attributes":{"axis":{"id":"9670"},"ticker":null,"visible":false},"id":"9673","type":"Grid"},{"attributes":{"axis_label":"Time","formatter":{"id":"9740"},"ticker":{"id":"9671"}},"id":"9670","type":"LinearAxis"},{"attributes":{"text":"Data Frame","text_align":"center","text_font_size":"25px","x":4.5,"y":2,"y_offset":-15},"id":"9709","type":"Label"},{"attributes":{"data":{},"selected":{"id":"9752"},"selection_policy":{"id":"9751"}},"id":"9722","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"9684","type":"BoxAnnotation"},{"attributes":{},"id":"9743","type":"UnionRenderers"},{"attributes":{},"id":"9742","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"9750"},"selection_policy":{"id":"9749"}},"id":"9716","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":4.5},"y":{"value":2}},"id":"9706","type":"Rect"},{"attributes":{},"id":"9752","type":"Selection"},{"attributes":{},"id":"9748","type":"Selection"},{"attributes":{},"id":"9682","type":"ResetTool"},{"attributes":{"data":{},"selected":{"id":"9748"},"selection_policy":{"id":"9747"}},"id":"9710","type":"ColumnDataSource"},{"attributes":{},"id":"9668","type":"LinearScale"},{"attributes":{"data_source":{"id":"9716"},"glyph":{"id":"9717"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9718"},"selection_glyph":null,"view":{"id":"9720"}},"id":"9719","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":2}},"id":"9694","type":"Rect"},{"attributes":{"source":{"id":"9716"}},"id":"9720","type":"CDSView"},{"attributes":{},"id":"9747","type":"UnionRenderers"},{"attributes":{},"id":"9753","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3.5},"y":{"value":0}},"id":"9724","type":"Rect"},{"attributes":{"data_source":{"id":"9710"},"glyph":{"id":"9711"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9712"},"selection_glyph":null,"view":{"id":"9714"}},"id":"9713","type":"GlyphRenderer"},{"attributes":{},"id":"9666","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":2}},"id":"9693","type":"Rect"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":4.9},"x":{"value":6.5},"y":{"value":1}},"id":"9729","type":"Rect"},{"attributes":{},"id":"9745","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"9746"},"selection_policy":{"id":"9745"}},"id":"9704","type":"ColumnDataSource"},{"attributes":{},"id":"9662","type":"DataRange1d"},{"attributes":{"axis":{"id":"9674"},"dimension":1,"ticker":null},"id":"9677","type":"Grid"},{"attributes":{"ticks":[0,1,2,3]},"id":"9735","type":"FixedTicker"},{"attributes":{"end":3.5,"start":-0.5},"id":"9734","type":"Range1d"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":3}},"id":"9699","type":"Rect"},{"attributes":{"source":{"id":"9728"}},"id":"9732","type":"CDSView"},{"attributes":{"text":"RTS","text_align":"center","text_font_size":"25px","x":2.5,"y":1,"y_offset":-15},"id":"9721","type":"Label"},{"attributes":{},"id":"9679","type":"WheelZoomTool"},{"attributes":{},"id":"9681","type":"SaveTool"},{"attributes":{"data":{},"selected":{"id":"9742"},"selection_policy":{"id":"9741"}},"id":"9692","type":"ColumnDataSource"},{"attributes":{},"id":"9671","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":3}},"id":"9711","type":"Rect"},{"attributes":{},"id":"9750","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":1}},"id":"9718","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"9754"},"selection_policy":{"id":"9753"}},"id":"9728","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3.5},"y":{"value":0}},"id":"9723","type":"Rect"},{"attributes":{},"id":"9749","type":"UnionRenderers"},{"attributes":{"text":"CTS","text_align":"center","text_font_size":"25px","x":1.5,"y":3,"y_offset":-15},"id":"9703","type":"Label"},{"attributes":{"text":"Exposed Terminal"},"id":"9660","type":"Title"},{"attributes":{"data_source":{"id":"9692"},"glyph":{"id":"9693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9694"},"selection_glyph":null,"view":{"id":"9696"}},"id":"9695","type":"GlyphRenderer"},{"attributes":{},"id":"9744","type":"Selection"},{"attributes":{"data_source":{"id":"9728"},"glyph":{"id":"9729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9730"},"selection_glyph":null,"view":{"id":"9732"}},"id":"9731","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9704"}},"id":"9708","type":"CDSView"},{"attributes":{},"id":"9683","type":"HelpTool"},{"attributes":{},"id":"9740","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9698"},"glyph":{"id":"9699"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9700"},"selection_glyph":null,"view":{"id":"9702"}},"id":"9701","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":3}},"id":"9712","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":3}},"id":"9700","type":"Rect"}],"root_ids":["9659"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"1bb9098f-4242-43ea-9fbb-f4529ba9e773","root_ids":["9659"],"roots":{"9659":"74901ef8-fef2-42a9-94ee-bd3b3680a621"}}];
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