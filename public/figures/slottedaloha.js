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
    
      
      
    
      var element = document.getElementById("17b62b03-0d50-4e63-900b-c619680c1597");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '17b62b03-0d50-4e63-900b-c619680c1597' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8222f3d7-7298-40e5-b2db-948e1db73637":{"roots":{"references":[{"attributes":{"axis_label":"Rate of Transmission","formatter":{"id":"1330"},"ticker":{"id":"1300"}},"id":"1299","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1307"},{"id":"1308"},{"id":"1309"},{"id":"1310"},{"id":"1311"},{"id":"1312"}]},"id":"1314","type":"Toolbar"},{"attributes":{},"id":"1293","type":"DataRange1d"},{"attributes":{},"id":"1312","type":"HelpTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAxb2dIzNupPzFvZ0jM27k/ZZNNNtlkwz8xb2dIzNvJP3+lQK1fKdA/ZZNNNtlk0z9LgVq/UqDWPzFvZ0jM29k/F1100UUX3T9/pUCtXyngP3Icx3Ecx+E/ZZNNNtlk4z9YCtT6lQLlP0uBWr9SoOY/Pvjggw8+6D8xb2dIzNvpPyTm7QyJees/F1100UUX7T8K1PqVArXuP3+lQK1fKfA/+OCDDz748D9yHMdxHMfxP+tXCtT6lfI/ZZNNNtlk8z/ezpCYtzP0P1gK1PqVAvU/0UUXXXTR9T9LgVq/UqD2P8S8nSExb/c/Pvjggw8++D+3MyTm7Qz5PzFvZ0jM2/k/q6qqqqqq+j8k5u0MiXn7P54hMW9nSPw/F1100UUX/T+RmLczJOb9PwrU+pUCtf4/hA8++OCD/z9/pUCtXykAQDtDYt7OkABA+OCDDz74AEC1fqVArV8BQHIcx3EcxwFALrrooosuAkDrVwrU+pUCQKj1KwVq/QJAZZNNNtlkA0AiMW9nSMwDQN7OkJi3MwRAm2yyySabBEBYCtT6lQIFQBWo9SsFagVA0UUXXXTRBUCO4ziO4zgGQEuBWr9SoAZACB988MEHB0DEvJ0hMW8HQIFav1Kg1gdAPvjggw8+CED7lQK1fqUIQLczJObtDAlAdNFFF110CUAxb2dIzNsJQO4MiXk7QwpAq6qqqqqqCkBnSMzbGRILQCTm7QyJeQtA4YMPPvjgC0CeITFvZ0gMQFq/UqDWrwxAF1100UUXDUDU+pUCtX4NQJGYtzMk5g1ATTbZZJNNDkAK1PqVArUOQMdxHMdxHA9AhA8++OCDD0BArV8pUOsPQH+lQK1fKRBAXXTRRRddEEA7Q2LezpAQQBoS83aGxBBA+OCDDz74EEDXrxSo9SsRQLV+pUCtXxFAk0022WSTEUByHMdxHMcRQFDrVwrU+hFALrrooosuEkANiXk7Q2ISQOtXCtT6lRJAyiabbLLJEkCo9SsFav0SQIbEvJ0hMRNAZZNNNtlkE0BDYt7OkJgTQCIxb2dIzBNAAAAAAAAAFEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAACuUeljxJWoPyTX1CrLX7c/nkCxntCqwD/dMIji5CDFP9QRl2wgHMk/l4TAzNelzD/kx3GUwMbPP4lsV5p9Q9E/Nb4DIw530j/mqY6hmoHTP1kJ815uZtQ/bFyvC5so1T/Fk3pg/MrVP8QCQoc7UNY/LrGsT9K61j/RSDEyDg3XPw9+nyQTSdc/JO7TQt5w1z/n4CVOSIbXP1cE+QUIi9c/iPe5W7SA1z/cMmuExmjXPyhxyOmbRNc/7RXp/HcV1z9vDy7shdzWP4ZILT7amtY/U88zU3RR1j9vTuDOPwHWP9ZBQesVq9U/Fl3Ntr5P1T8X03g+8u/UP2uIF6VZjNQ/GaAqKZAl1D8rOCcaJLzTPx6CNL6XUNM//JxQKWLj0j+Kp70G8HTSP29ci1WkBdI/uyQFGdmV0T/r3MD93yXRP3uC//MCttA/VpsGwIRG0D9ttx4CQ6/PP0yjvl4e084/j08rJPz4zT/btV9aMiHNPxMCglANTMw/8+ieXNB5yz8TrouOtqrKPxHLu1bz3sk/J/TKIbMWyT/MtXDpG1LIP2AQiLtNkcc/SkHLN2PUxj/oStoEchvGP7q9GT2LZsU/9bzu07u1xD8UMNXzDAnEPw6CxVWEYMM/Vi9YkiS8wj/hrg5t7RvCPz/yIhrcf8E/ksc4f+vnwD9I0EZvFFTAPw/4DsSbiL8/jQZ7Thpxvj8MaCUsjGG9P2MBp3HWWbw/FUOL6ttZuz9Jb6hjfWG6P9t1kO+ZcLk/QByBJQ+HuD9EtDNbuaS3P0KT5tlzybY/z8j0Dhn1tT+DN0u4gie1PwMqBQ2KYLQ/xsJ14gegsz+NM9/N1OWyP0V8FEPJMbI/hYU+sL2DsT98u/mWituwP7XZ/aIIObA/3rD8fCE4rz8dwd1I+AiuP7CeqOFI5Kw/p0eQXsfJqz/dV6PPKLmqPyPVa1Qjsqk/dvK5L260qD/iKNPYwb+nP6kfOwrY06Y/qDdIzmvwpT84I7KJORWlPxS/RQT/QaQ//GHmb3t2oz/CCAJub7KiP7EjmxOd9aE/KlQI7Mc/oT8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1334"},"selection_policy":{"id":"1333"}},"id":"1321","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1313","type":"BoxAnnotation"},{"attributes":{},"id":"1334","type":"Selection"},{"attributes":{},"id":"1330","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1322","type":"Line"},{"attributes":{"data_source":{"id":"1321"},"glyph":{"id":"1322"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1323"},"selection_glyph":null,"view":{"id":"1325"}},"id":"1324","type":"GlyphRenderer"},{"attributes":{},"id":"1297","type":"LinearScale"},{"attributes":{},"id":"1328","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1299"}],"center":[{"id":"1302"},{"id":"1306"}],"left":[{"id":"1303"}],"plot_width":1200,"renderers":[{"id":"1324"}],"title":{"id":"1289"},"toolbar":{"id":"1314"},"x_range":{"id":"1326"},"x_scale":{"id":"1295"},"y_range":{"id":"1293"},"y_scale":{"id":"1297"}},"id":"1288","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1310","type":"SaveTool"},{"attributes":{},"id":"1308","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1321"}},"id":"1325","type":"CDSView"},{"attributes":{},"id":"1311","type":"ResetTool"},{"attributes":{"text":"Throughput of Slotted ALOHA"},"id":"1289","type":"Title"},{"attributes":{"end":5.2},"id":"1326","type":"Range1d"},{"attributes":{},"id":"1300","type":"BasicTicker"},{"attributes":{"axis":{"id":"1303"},"dimension":1,"ticker":null},"id":"1306","type":"Grid"},{"attributes":{"axis_label":"Throughput","formatter":{"id":"1328"},"ticker":{"id":"1304"}},"id":"1303","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1313"}},"id":"1309","type":"BoxZoomTool"},{"attributes":{},"id":"1295","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1323","type":"Line"},{"attributes":{},"id":"1307","type":"PanTool"},{"attributes":{"axis":{"id":"1299"},"ticker":null},"id":"1302","type":"Grid"},{"attributes":{},"id":"1333","type":"UnionRenderers"},{"attributes":{},"id":"1304","type":"BasicTicker"}],"root_ids":["1288"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"8222f3d7-7298-40e5-b2db-948e1db73637","root_ids":["1288"],"roots":{"1288":"17b62b03-0d50-4e63-900b-c619680c1597"}}];
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