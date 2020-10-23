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
    
      
      
    
      var element = document.getElementById("dd1e9106-9d36-41b9-b377-20403122d7dc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd1e9106-9d36-41b9-b377-20403122d7dc' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b95c7e16-0c0f-4152-98ee-c92ba26b265a":{"roots":{"references":[{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1466","type":"Line"},{"attributes":{"axis":{"id":"1443"},"ticker":null},"id":"1446","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAxb2dIzNupPzFvZ0jM27k/ZZNNNtlkwz8xb2dIzNvJP3+lQK1fKdA/ZZNNNtlk0z9LgVq/UqDWPzFvZ0jM29k/F1100UUX3T9/pUCtXyngP3Icx3Ecx+E/ZZNNNtlk4z9YCtT6lQLlP0uBWr9SoOY/Pvjggw8+6D8xb2dIzNvpPyTm7QyJees/F1100UUX7T8K1PqVArXuP3+lQK1fKfA/+OCDDz748D9yHMdxHMfxP+tXCtT6lfI/ZZNNNtlk8z/ezpCYtzP0P1gK1PqVAvU/0UUXXXTR9T9LgVq/UqD2P8S8nSExb/c/Pvjggw8++D+3MyTm7Qz5PzFvZ0jM2/k/q6qqqqqq+j8k5u0MiXn7P54hMW9nSPw/F1100UUX/T+RmLczJOb9PwrU+pUCtf4/hA8++OCD/z9/pUCtXykAQDtDYt7OkABA+OCDDz74AEC1fqVArV8BQHIcx3EcxwFALrrooosuAkDrVwrU+pUCQKj1KwVq/QJAZZNNNtlkA0AiMW9nSMwDQN7OkJi3MwRAm2yyySabBEBYCtT6lQIFQBWo9SsFagVA0UUXXXTRBUCO4ziO4zgGQEuBWr9SoAZACB988MEHB0DEvJ0hMW8HQIFav1Kg1gdAPvjggw8+CED7lQK1fqUIQLczJObtDAlAdNFFF110CUAxb2dIzNsJQO4MiXk7QwpAq6qqqqqqCkBnSMzbGRILQCTm7QyJeQtA4YMPPvjgC0CeITFvZ0gMQFq/UqDWrwxAF1100UUXDUDU+pUCtX4NQJGYtzMk5g1ATTbZZJNNDkAK1PqVArUOQMdxHMdxHA9AhA8++OCDD0BArV8pUOsPQH+lQK1fKRBAXXTRRRddEEA7Q2LezpAQQBoS83aGxBBA+OCDDz74EEDXrxSo9SsRQLV+pUCtXxFAk0022WSTEUByHMdxHMcRQFDrVwrU+hFALrrooosuEkANiXk7Q2ISQOtXCtT6lRJAyiabbLLJEkCo9SsFav0SQIbEvJ0hMRNAZZNNNtlkE0BDYt7OkJgTQCIxb2dIzBNAAAAAAAAAFEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAACuUeljxJWoPyTX1CrLX7c/nkCxntCqwD/dMIji5CDFP9QRl2wgHMk/l4TAzNelzD/kx3GUwMbPP4lsV5p9Q9E/Nb4DIw530j/mqY6hmoHTP1kJ815uZtQ/bFyvC5so1T/Fk3pg/MrVP8QCQoc7UNY/LrGsT9K61j/RSDEyDg3XPw9+nyQTSdc/JO7TQt5w1z/n4CVOSIbXP1cE+QUIi9c/iPe5W7SA1z/cMmuExmjXPyhxyOmbRNc/7RXp/HcV1z9vDy7shdzWP4ZILT7amtY/U88zU3RR1j9vTuDOPwHWP9ZBQesVq9U/Fl3Ntr5P1T8X03g+8u/UP2uIF6VZjNQ/GaAqKZAl1D8rOCcaJLzTPx6CNL6XUNM//JxQKWLj0j+Kp70G8HTSP29ci1WkBdI/uyQFGdmV0T/r3MD93yXRP3uC//MCttA/VpsGwIRG0D9ttx4CQ6/PP0yjvl4e084/j08rJPz4zT/btV9aMiHNPxMCglANTMw/8+ieXNB5yz8TrouOtqrKPxHLu1bz3sk/J/TKIbMWyT/MtXDpG1LIP2AQiLtNkcc/SkHLN2PUxj/oStoEchvGP7q9GT2LZsU/9bzu07u1xD8UMNXzDAnEPw6CxVWEYMM/Vi9YkiS8wj/hrg5t7RvCPz/yIhrcf8E/ksc4f+vnwD9I0EZvFFTAPw/4DsSbiL8/jQZ7Thpxvj8MaCUsjGG9P2MBp3HWWbw/FUOL6ttZuz9Jb6hjfWG6P9t1kO+ZcLk/QByBJQ+HuD9EtDNbuaS3P0KT5tlzybY/z8j0Dhn1tT+DN0u4gie1PwMqBQ2KYLQ/xsJ14gegsz+NM9/N1OWyP0V8FEPJMbI/hYU+sL2DsT98u/mWituwP7XZ/aIIObA/3rD8fCE4rz8dwd1I+AiuP7CeqOFI5Kw/p0eQXsfJqz/dV6PPKLmqPyPVa1Qjsqk/dvK5L260qD/iKNPYwb+nP6kfOwrY06Y/qDdIzmvwpT84I7KJORWlPxS/RQT/QaQ//GHmb3t2oz/CCAJub7KiP7EjmxOd9aE/KlQI7Mc/oT8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1485"},"selection_policy":{"id":"1484"}},"id":"1470","type":"ColumnDataSource"},{"attributes":{},"id":"1456","type":"HelpTool"},{"attributes":{"source":{"id":"1470"}},"id":"1474","type":"CDSView"},{"attributes":{},"id":"1455","type":"ResetTool"},{"attributes":{"text":"Throughput of Pure v.s. Slotted ALOHA"},"id":"1433","type":"Title"},{"attributes":{"below":[{"id":"1443"}],"center":[{"id":"1446"},{"id":"1450"}],"left":[{"id":"1447"}],"plot_width":1200,"renderers":[{"id":"1468"},{"id":"1473"}],"title":{"id":"1433"},"toolbar":{"id":"1458"},"x_range":{"id":"1475"},"x_scale":{"id":"1439"},"y_range":{"id":"1437"},"y_scale":{"id":"1441"}},"id":"1432","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1470"},"glyph":{"id":"1471"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1472"},"selection_glyph":null,"view":{"id":"1474"}},"id":"1473","type":"GlyphRenderer"},{"attributes":{"end":5.2},"id":"1475","type":"Range1d"},{"attributes":{},"id":"1454","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAxb2dIzNupPzFvZ0jM27k/ZZNNNtlkwz8xb2dIzNvJP3+lQK1fKdA/ZZNNNtlk0z9LgVq/UqDWPzFvZ0jM29k/F1100UUX3T9/pUCtXyngP3Icx3Ecx+E/ZZNNNtlk4z9YCtT6lQLlP0uBWr9SoOY/Pvjggw8+6D8xb2dIzNvpPyTm7QyJees/F1100UUX7T8K1PqVArXuP3+lQK1fKfA/+OCDDz748D9yHMdxHMfxP+tXCtT6lfI/ZZNNNtlk8z/ezpCYtzP0P1gK1PqVAvU/0UUXXXTR9T9LgVq/UqD2P8S8nSExb/c/Pvjggw8++D+3MyTm7Qz5PzFvZ0jM2/k/q6qqqqqq+j8k5u0MiXn7P54hMW9nSPw/F1100UUX/T+RmLczJOb9PwrU+pUCtf4/hA8++OCD/z9/pUCtXykAQDtDYt7OkABA+OCDDz74AEC1fqVArV8BQHIcx3EcxwFALrrooosuAkDrVwrU+pUCQKj1KwVq/QJAZZNNNtlkA0AiMW9nSMwDQN7OkJi3MwRAm2yyySabBEBYCtT6lQIFQBWo9SsFagVA0UUXXXTRBUCO4ziO4zgGQEuBWr9SoAZACB988MEHB0DEvJ0hMW8HQIFav1Kg1gdAPvjggw8+CED7lQK1fqUIQLczJObtDAlAdNFFF110CUAxb2dIzNsJQO4MiXk7QwpAq6qqqqqqCkBnSMzbGRILQCTm7QyJeQtA4YMPPvjgC0CeITFvZ0gMQFq/UqDWrwxAF1100UUXDUDU+pUCtX4NQJGYtzMk5g1ATTbZZJNNDkAK1PqVArUOQMdxHMdxHA9AhA8++OCDD0BArV8pUOsPQH+lQK1fKRBAXXTRRRddEEA7Q2LezpAQQBoS83aGxBBA+OCDDz74EEDXrxSo9SsRQLV+pUCtXxFAk0022WSTEUByHMdxHMcRQFDrVwrU+hFALrrooosuEkANiXk7Q2ISQOtXCtT6lRJAyiabbLLJEkCo9SsFav0SQIbEvJ0hMRNAZZNNNtlkE0BDYt7OkJgTQCIxb2dIzBNAAAAAAAAAFEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAAAk19Qqy1+nP90wiOLkILU/l4TAzNelvD+JbFeafUPBP+apjqGagcM/bFyvC5soxT/EAkKHO1DGP9FIMTIODcc/JO7TQt5wxz9XBPkFCIvHP9wya4TGaMc/7RXp/HcVxz+GSC0+2prGP29O4M4/AcY/Fl3Ntr5PxT9riBelWYzEPys4JxokvMM//JxQKWLjwj9vXItVpAXCP+vcwP3fJcE/VpsGwIRGwD9Mo75eHtO+P9u1X1oyIb0/8+ieXNB5uz8Ry7tW8965P8y1cOkbUrg/SkHLN2PUtj+6vRk9i2a1PxQw1fMMCbQ/Vi9YkiS8sj8/8iIa3H+xP0jQRm8UVLA/jQZ7Thpxrj9jAadx1lmsP0lvqGN9Yao/QByBJQ+HqD9Ck+bZc8mmP4M3S7iCJ6U/xsJ14gegoz9FfBRDyTGiP3y7+ZaK26A/3rD8fCE4nz+wnqjhSOScP91Xo88ouZo/dvK5L260mD+pHzsK2NOWPzgjsok5FZU//GHmb3t2kz+xI5sTnfWRPzAbiPq0kJA/u4y+QOKLjj8fMcnyLSeMP1mIK3oG8Ik/Njg3B1Pjhz9STmZ+J/6FP+qFxzLDPYQ/BgZXdY+fgj/m6IsEHiGBPyZRO8tOgH8/jon3XhL1fD+VWTyciJx6PzQ/X4f2cng/tQQt2OB0dj+iDw+NCJ90P9bUJpBn7nI/2/ADcy1gcT+OJRWJeONvP7NPdAdLQW0/P0iEYk7Vaj8mRF8CUptoP6h37Fpzj2Y//JpK0xiuZD+NJXvv7PNiP6z9nbvZXWE/JFUl7wjSXz/dMuUCkyVdPy0PGPpwsVo/Ys+WbCFxWD+Noa14e2BWP4iFA2aoe1Q/KGNasB2/Uj+vAj11lydRP9toWX8mZE8/RG3SWZa3TD//RQDLYkRKPzDD18vXBUg/mClWJKH3RT9qd74fwxVEPzZMVcWTXEI/AIBjjbTIQD8dTkUVGa4+P2eqJwGGCTw/YHY9v3SeOT/HaGlAF2g3PypxH+0DYjU/J4j/sS2IMz8uPSOm3NYxP6ooX0CnSjA/wpu9ItjALT8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1483"},"selection_policy":{"id":"1482"}},"id":"1465","type":"ColumnDataSource"},{"attributes":{},"id":"1483","type":"Selection"},{"attributes":{"axis":{"id":"1447"},"dimension":1,"ticker":null},"id":"1450","type":"Grid"},{"attributes":{},"id":"1479","type":"BasicTickFormatter"},{"attributes":{},"id":"1451","type":"PanTool"},{"attributes":{},"id":"1441","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1472","type":"Line"},{"attributes":{},"id":"1439","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1451"},{"id":"1452"},{"id":"1453"},{"id":"1454"},{"id":"1455"},{"id":"1456"}]},"id":"1458","type":"Toolbar"},{"attributes":{},"id":"1448","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1457","type":"BoxAnnotation"},{"attributes":{},"id":"1482","type":"UnionRenderers"},{"attributes":{"axis_label":"Rate of Transmission","formatter":{"id":"1479"},"ticker":{"id":"1444"}},"id":"1443","type":"LinearAxis"},{"attributes":{"line_color":"#ff0000","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1471","type":"Line"},{"attributes":{},"id":"1444","type":"BasicTicker"},{"attributes":{},"id":"1484","type":"UnionRenderers"},{"attributes":{},"id":"1437","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1465"},"glyph":{"id":"1466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1467"},"selection_glyph":null,"view":{"id":"1469"}},"id":"1468","type":"GlyphRenderer"},{"attributes":{"axis_label":"Throughput","formatter":{"id":"1477"},"ticker":{"id":"1448"}},"id":"1447","type":"LinearAxis"},{"attributes":{"source":{"id":"1465"}},"id":"1469","type":"CDSView"},{"attributes":{},"id":"1485","type":"Selection"},{"attributes":{"overlay":{"id":"1457"}},"id":"1453","type":"BoxZoomTool"},{"attributes":{},"id":"1452","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1467","type":"Line"},{"attributes":{},"id":"1477","type":"BasicTickFormatter"}],"root_ids":["1432"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"b95c7e16-0c0f-4152-98ee-c92ba26b265a","root_ids":["1432"],"roots":{"1432":"dd1e9106-9d36-41b9-b377-20403122d7dc"}}];
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