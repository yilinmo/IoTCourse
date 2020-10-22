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
    
      
      
    
      var element = document.getElementById("059b783f-e261-4629-94c3-b98f34bfd7ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '059b783f-e261-4629-94c3-b98f34bfd7ff' but no matching script tag was found.")
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
                    
                  var docs_json = '{"97cd1686-2821-41d9-9dc2-8c7fee5997d7":{"roots":{"references":[{"attributes":{"axis":{"id":"1799"},"dimension":1,"ticker":null},"id":"1802","type":"Grid"},{"attributes":{},"id":"1850","type":"SaveTool"},{"attributes":{},"id":"1851","type":"ResetTool"},{"attributes":{"formatter":{"id":"1930"},"ticker":{"id":"1879"}},"id":"1878","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1919"},"ticker":{"id":"1796"}},"id":"1795","type":"LinearAxis"},{"attributes":{"children":[[{"id":"1828"},0,0],[{"id":"1784"},1,0],[{"id":"1867"},2,0]]},"id":"1935","type":"GridBox"},{"attributes":{"data_source":{"id":"1861"},"glyph":{"id":"1862"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1863"},"selection_glyph":null,"view":{"id":"1865"}},"id":"1864","type":"GlyphRenderer"},{"attributes":{},"id":"1876","type":"LinearScale"},{"attributes":{},"id":"1852","type":"HelpTool"},{"attributes":{},"id":"1919","type":"BasicTickFormatter"},{"attributes":{},"id":"1872","type":"DataRange1d"},{"attributes":{},"id":"1874","type":"LinearScale"},{"attributes":{},"id":"1796","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1809","type":"BoxAnnotation"},{"attributes":{},"id":"1917","type":"BasicTickFormatter"},{"attributes":{},"id":"1908","type":"BasicTickFormatter"},{"attributes":{},"id":"1887","type":"WheelZoomTool"},{"attributes":{},"id":"1791","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1902","type":"Step"},{"attributes":{},"id":"1910","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1892","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1900"}},"id":"1904","type":"CDSView"},{"attributes":{"end":32},"id":"1827","type":"Range1d"},{"attributes":{},"id":"1911","type":"Selection"},{"attributes":{"end":32},"id":"1905","type":"Range1d"},{"attributes":{"data_source":{"id":"1822"},"glyph":{"id":"1823"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1824"},"selection_glyph":null,"view":{"id":"1826"}},"id":"1825","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1922"},"selection_policy":{"id":"1923"}},"id":"1822","type":"ColumnDataSource"},{"attributes":{},"id":"1912","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAsQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[32]},"y":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwvw==","dtype":"float64","order":"little","shape":[32]}},"selected":{"id":"1931"},"selection_policy":{"id":"1932"}},"id":"1900","type":"ColumnDataSource"},{"attributes":{},"id":"1793","type":"LinearScale"},{"attributes":{},"id":"1886","type":"PanTool"},{"attributes":{"text":"Delayed Signal"},"id":"1829","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1920"},"selection_policy":{"id":"1921"}},"id":"1817","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1822"}},"id":"1826","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1863","type":"Step"},{"attributes":{"axis":{"id":"1882"},"dimension":1,"ticker":null},"id":"1885","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1853","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1795"}],"center":[{"id":"1798"},{"id":"1802"}],"left":[{"id":"1799"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1820"},{"id":"1825"}],"title":{"id":"1785"},"toolbar":{"id":"1810"},"toolbar_location":null,"x_range":{"id":"1827"},"x_scale":{"id":"1791"},"y_range":{"id":"1789"},"y_scale":{"id":"1793"}},"id":"1784","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1921","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1817"},"glyph":{"id":"1818"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1819"},"selection_glyph":null,"view":{"id":"1821"}},"id":"1820","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1862","type":"Step"},{"attributes":{},"id":"1920","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1847"},{"id":"1848"},{"id":"1849"},{"id":"1850"},{"id":"1851"},{"id":"1852"}]},"id":"1854","type":"Toolbar"},{"attributes":{"text":"PN Sequence"},"id":"1785","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1824","type":"Step"},{"attributes":{},"id":"1922","type":"Selection"},{"attributes":{"below":[{"id":"1839"}],"center":[{"id":"1842"},{"id":"1846"}],"left":[{"id":"1843"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1864"}],"title":{"id":"1829"},"toolbar":{"id":"1854"},"toolbar_location":null,"x_range":{"id":"1866"},"x_scale":{"id":"1835"},"y_range":{"id":"1833"},"y_scale":{"id":"1837"}},"id":"1828","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1923","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1878"}],"center":[{"id":"1881"},{"id":"1885"}],"left":[{"id":"1882"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1903"}],"title":{"id":"1868"},"toolbar":{"id":"1893"},"toolbar_location":null,"x_range":{"id":"1905"},"x_scale":{"id":"1874"},"y_range":{"id":"1872"},"y_scale":{"id":"1876"}},"id":"1867","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1861"}},"id":"1865","type":"CDSView"},{"attributes":{"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1823","type":"Step"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1819","type":"Step"},{"attributes":{},"id":"1835","type":"LinearScale"},{"attributes":{"text":"Decoded Signal"},"id":"1868","type":"Title"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1901","type":"Step"},{"attributes":{},"id":"1833","type":"DataRange1d"},{"attributes":{},"id":"1883","type":"BasicTicker"},{"attributes":{},"id":"1889","type":"SaveTool"},{"attributes":{"source":{"id":"1817"}},"id":"1821","type":"CDSView"},{"attributes":{},"id":"1803","type":"PanTool"},{"attributes":{},"id":"1804","type":"WheelZoomTool"},{"attributes":{},"id":"1837","type":"LinearScale"},{"attributes":{"overlay":{"id":"1892"}},"id":"1888","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1803"},{"id":"1804"},{"id":"1805"},{"id":"1806"},{"id":"1807"},{"id":"1808"}]},"id":"1810","type":"Toolbar"},{"attributes":{"formatter":{"id":"1910"},"ticker":{"id":"1840"}},"id":"1839","type":"LinearAxis"},{"attributes":{},"id":"1890","type":"ResetTool"},{"attributes":{},"id":"1844","type":"BasicTicker"},{"attributes":{},"id":"1840","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1900"},"glyph":{"id":"1901"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1902"},"selection_glyph":null,"view":{"id":"1904"}},"id":"1903","type":"GlyphRenderer"},{"attributes":{},"id":"1891","type":"HelpTool"},{"attributes":{"axis":{"id":"1839"},"ticker":null},"id":"1842","type":"Grid"},{"attributes":{},"id":"1879","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1886"},{"id":"1887"},{"id":"1888"},{"id":"1889"},{"id":"1890"},{"id":"1891"}]},"id":"1893","type":"Toolbar"},{"attributes":{"axis":{"id":"1843"},"dimension":1,"ticker":null},"id":"1846","type":"Grid"},{"attributes":{"toolbar":{"id":"1936"},"toolbar_location":"above"},"id":"1937","type":"ToolbarBox"},{"attributes":{"axis":{"id":"1795"},"ticker":null},"id":"1798","type":"Grid"},{"attributes":{"formatter":{"id":"1908"},"ticker":{"id":"1844"}},"id":"1843","type":"LinearAxis"},{"attributes":{"children":[{"id":"1937"},{"id":"1935"}]},"id":"1938","type":"Column"},{"attributes":{"overlay":{"id":"1809"}},"id":"1805","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1818","type":"Step"},{"attributes":{},"id":"1930","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1917"},"ticker":{"id":"1800"}},"id":"1799","type":"LinearAxis"},{"attributes":{},"id":"1807","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAsQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[32]},"y":{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[32]}},"selected":{"id":"1911"},"selection_policy":{"id":"1912"}},"id":"1861","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1928"},"ticker":{"id":"1883"}},"id":"1882","type":"LinearAxis"},{"attributes":{},"id":"1932","type":"UnionRenderers"},{"attributes":{},"id":"1928","type":"BasicTickFormatter"},{"attributes":{"end":32},"id":"1866","type":"Range1d"},{"attributes":{},"id":"1931","type":"Selection"},{"attributes":{},"id":"1806","type":"SaveTool"},{"attributes":{},"id":"1800","type":"BasicTicker"},{"attributes":{},"id":"1847","type":"PanTool"},{"attributes":{},"id":"1808","type":"HelpTool"},{"attributes":{"toolbars":[{"id":"1854"},{"id":"1810"},{"id":"1893"}],"tools":[{"id":"1847"},{"id":"1848"},{"id":"1849"},{"id":"1850"},{"id":"1851"},{"id":"1852"},{"id":"1803"},{"id":"1804"},{"id":"1805"},{"id":"1806"},{"id":"1807"},{"id":"1808"},{"id":"1886"},{"id":"1887"},{"id":"1888"},{"id":"1889"},{"id":"1890"},{"id":"1891"}]},"id":"1936","type":"ProxyToolbar"},{"attributes":{},"id":"1789","type":"DataRange1d"},{"attributes":{},"id":"1848","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1853"}},"id":"1849","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1878"},"ticker":null},"id":"1881","type":"Grid"}],"root_ids":["1938"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"97cd1686-2821-41d9-9dc2-8c7fee5997d7","root_ids":["1938"],"roots":{"1938":"059b783f-e261-4629-94c3-b98f34bfd7ff"}}];
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