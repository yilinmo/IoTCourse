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
    
      
      
    
      var element = document.getElementById("94f41f35-f44f-4c01-bcc8-b09271a280ef");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '94f41f35-f44f-4c01-bcc8-b09271a280ef' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f79491e4-dabe-43ae-b351-4c5186cd7669":{"roots":{"references":[{"attributes":{"data":{"x":[1,1],"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAADgPw==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"4274"},"selection_policy":{"id":"4273"}},"id":"4247","type":"ColumnDataSource"},{"attributes":{},"id":"4217","type":"DataRange1d"},{"attributes":{},"id":"4238","type":"HelpTool"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4253","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4263","type":"Line"},{"attributes":{},"id":"4273","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMA0MzMzMzP/v2ZmZmZmZv6/mpmZmZmZ/b/MzMzMzMz8vwAAAAAAAPy/NDMzMzMz+79mZmZmZmb6v5qZmZmZmfm/zMzMzMzM+L8AAAAAAAD4vzQzMzMzM/e/ZmZmZmZm9r+amZmZmZn1v8zMzMzMzPS/AAAAAAAA9L80MzMzMzPzv2ZmZmZmZvK/mpmZmZmZ8b/MzMzMzMzwvwAAAAAAAPC/ZmZmZmZm7r/MzMzMzMzsvzIzMzMzM+u/mJmZmZmZ6b8AAAAAAADov2ZmZmZmZua/zMzMzMzM5L8yMzMzMzPjv5iZmZmZmeG/AAAAAAAA4L/MzMzMzMzcv5iZmZmZmdm/ZGZmZmZm1r8wMzMzMzPTvwAAAAAAANC/mJmZmZmZyb8wMzMzMzPDv5CZmZmZmbm/gJmZmZmZqb8AAAAAAAAAAMCZmZmZmak/oJmZmZmZuT8wMzMzMzPDP6CZmZmZmck/AAAAAAAA0D84MzMzMzPTP2hmZmZmZtY/oJmZmZmZ2T/QzMzMzMzcPwAAAAAAAOA/nJmZmZmZ4T80MzMzMzPjP9DMzMzMzOQ/aGZmZmZm5j8AAAAAAADoP5yZmZmZmek/NDMzMzMz6z/QzMzMzMzsP2hmZmZmZu4/AAAAAAAA8D/OzMzMzMzwP5qZmZmZmfE/aGZmZmZm8j80MzMzMzPzPwAAAAAAAPQ/zszMzMzM9D+amZmZmZn1P2hmZmZmZvY/NDMzMzMz9z8AAAAAAAD4P87MzMzMzPg/mpmZmZmZ+T9oZmZmZmb6PzQzMzMzM/s/AAAAAAAA/D/OzMzMzMz8P5qZmZmZmf0/aGZmZmZm/j80MzMzMzP/PwAAAAAAAABAZmZmZmZmAEDOzMzMzMwAQDQzMzMzMwFAmpmZmZmZAUAAAAAAAAACQGZmZmZmZgJAzszMzMzMAkA0MzMzMzMDQJqZmZmZmQNAAAAAAAAABEBmZmZmZmYEQM7MzMzMzARANDMzMzMzBUCamZmZmZkFQAAAAAAAAAZAaGZmZmZmBkDOzMzMzMwGQDQzMzMzMwdAmpmZmZmZB0AAAAAAAAAIQGhmZmZmZghAzszMzMzMCEA0MzMzMzMJQJqZmZmZmQlAAAAAAAAACkBoZmZmZmYKQM7MzMzMzApANDMzMzMzC0CamZmZmZkLQAAAAAAAAAxAaGZmZmZmDEDOzMzMzMwMQDQzMzMzMw1AmpmZmZmZDUAAAAAAAAAOQGhmZmZmZg5AzszMzMzMDkA0MzMzMzMPQJqZmZmZmQ9AAAAAAAAAEEA=","dtype":"float64","order":"little","shape":[121]},"y":{"__ndarray__":"iXbXPyEncj/8/UUpcxB1P1UdJMGuYXg/cCW1Qp4mfD/lrHTt+TWAP+RBY0yln4I/6AbGMZJXhT+hsrtFcmWIP7lJIUVj0Ys/xoV+Reijjz9XUn9V8PKRP3ZeaFE+UJQ/8QvnfJfulj8pRjIXztKZP0ZcxVLDAZ0/osE9/S1AoD/9GTrQuSmiP+sSXS7nP6Q/TMOXlASFpj+78jR4RPuoP9Y66Da0pKs/yhwpgzKDrj/QwI6yMsywP1LjdvbXcrI/zJbq2xM2tD8tFr82RRa2P/B9ja+ZE7g/trqHugguuj9KrmTNTmW8PyMdOO3ouL4/hR7SVgiUwD+uCHld3NjBP2v3GwRFKsM/Lezg3HCHxD9AFTTxZ+/FP8jwMZQLYcc/Bf++sRbbyD8mNZuhHlzKP3HN24OU4ss/IS0WKsdszT84FzOO5fjOPw9rsuqAQtA/R9eQbYoH0T8mwa0egcrRPwpvQnBOitI/FTSt79VF0z/54vbr9/vTP/RHkkKUq9Q/uyTpSI1T1T/sCGvIyvLVP62GIAI9iNY/+1VGrt8S1z/+jCzsvJHXP+Z3iRbwA9g/wLufcKho2D/OvgShK7/YP2m3fe/XBtk/TaFMPCY/2T/ekV6oq2fZP5XxFOcagNk/UTbUM0WI2T+V8RTnGoDZP96RXqirZ9k/TKFMPCY/2T9ot33v1wbZP86+BKErv9g/v7ufcKho2D/ld4kW8APYP/yMLOy8kdc/+lVGrt8S1z+thiACPYjWP+sIa8jK8tU/uiTpSI1T1T/xR5JClKvUP/bi9uv3+9M/FTSt79VF0z8Hb0JwTorSPybBrR6BytE/RdeQbYoH0T8Na7LqgELQPzgXM47l+M4/IS0WKsdszT9rzduDlOLLPyI1m6EeXMo/A/++sRbbyD/I8DGUC2HHP0AVNPFn78U/KOzg3HCHxD9o9xsERSrDP6wIeV3c2ME/hR7SVgiUwD8jHTjt6Li+P0CuZM1OZbw/sbqHugguuj/tfY2vmRO4Py0WvzZFFrY/w5bq2xM2tD9L43b213KyP83AjrIyzLA/xxwpgzKDrj/WOug2tKSrP67yNHhE+6g/RsOXlASFpj/nEl0u5z+kP/0ZOtC5KaI/osE9/S1AoD8yXMVSwwGdPyNGMhfO0pk/7AvnfJfulj92XmhRPlCUP1dSf1Xw8pE/s4V+Reijjz+ySSFFY9GLP5yyu0VyZYg/6AbGMZJXhT/kQWNMpZ+CP9isdO35NYA/aiW1Qp4mfD9PHSTBrmF4P/z9RSlzEHU/iXbXPyEncj8=","dtype":"float64","order":"little","shape":[121]}},"selected":{"id":"4280"},"selection_policy":{"id":"4279"}},"id":"4262","type":"ColumnDataSource"},{"attributes":{},"id":"4274","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4258","type":"Line"},{"attributes":{"formatter":{"id":"4270"},"ticker":{"id":"4226"}},"id":"4225","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4259","type":"Line"},{"attributes":{},"id":"4276","type":"Selection"},{"attributes":{"below":[{"id":"4225"}],"center":[{"id":"4228"},{"id":"4232"}],"left":[{"id":"4229"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"4250"},{"id":"4255"},{"id":"4260"},{"id":"4265"}],"title":{"id":"4215"},"toolbar":{"id":"4240"},"x_range":{"id":"4217"},"x_scale":{"id":"4221"},"y_range":{"id":"4219"},"y_scale":{"id":"4223"}},"id":"4214","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4275","type":"UnionRenderers"},{"attributes":{"text":"Detection of BPSK"},"id":"4215","type":"Title"},{"attributes":{"formatter":{"id":"4268"},"ticker":{"id":"4230"}},"id":"4229","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4257"},"glyph":{"id":"4258"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4259"},"selection_glyph":null,"view":{"id":"4261"}},"id":"4260","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4257"}},"id":"4261","type":"CDSView"},{"attributes":{},"id":"4280","type":"Selection"},{"attributes":{"axis":{"id":"4229"},"dimension":1,"ticker":null},"id":"4232","type":"Grid"},{"attributes":{},"id":"4279","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1,-1],"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAADgPw==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"4276"},"selection_policy":{"id":"4275"}},"id":"4252","type":"ColumnDataSource"},{"attributes":{},"id":"4278","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4264","type":"Line"},{"attributes":{"axis":{"id":"4225"},"ticker":null},"id":"4228","type":"Grid"},{"attributes":{"data_source":{"id":"4247"},"glyph":{"id":"4248"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4249"},"selection_glyph":null,"view":{"id":"4251"}},"id":"4250","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4239","type":"BoxAnnotation"},{"attributes":{},"id":"4221","type":"LinearScale"},{"attributes":{"source":{"id":"4247"}},"id":"4251","type":"CDSView"},{"attributes":{},"id":"4277","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4248","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4249","type":"Line"},{"attributes":{},"id":"4219","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4262"},"glyph":{"id":"4263"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4264"},"selection_glyph":null,"view":{"id":"4266"}},"id":"4265","type":"GlyphRenderer"},{"attributes":{},"id":"4233","type":"PanTool"},{"attributes":{"source":{"id":"4262"}},"id":"4266","type":"CDSView"},{"attributes":{},"id":"4234","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"4239"}},"id":"4235","type":"BoxZoomTool"},{"attributes":{},"id":"4223","type":"LinearScale"},{"attributes":{"source":{"id":"4252"}},"id":"4256","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4233"},{"id":"4234"},{"id":"4235"},{"id":"4236"},{"id":"4237"},{"id":"4238"}]},"id":"4240","type":"Toolbar"},{"attributes":{},"id":"4226","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAEMCamZmZmZkPwDMzMzMzMw/AzczMzMzMDsBmZmZmZmYOwAAAAAAAAA7AmpmZmZmZDcAzMzMzMzMNwM3MzMzMzAzAZmZmZmZmDMAAAAAAAAAMwJqZmZmZmQvAMzMzMzMzC8DNzMzMzMwKwGZmZmZmZgrAAAAAAAAACsCamZmZmZkJwDMzMzMzMwnAzczMzMzMCMBmZmZmZmYIwAAAAAAAAAjAmpmZmZmZB8AzMzMzMzMHwMzMzMzMzAbAZmZmZmZmBsAAAAAAAAAGwJqZmZmZmQXAMzMzMzMzBcDMzMzMzMwEwGZmZmZmZgTAAAAAAAAABMCamZmZmZkDwDMzMzMzMwPAzMzMzMzMAsBmZmZmZmYCwAAAAAAAAALAmpmZmZmZAcAzMzMzMzMBwMzMzMzMzADAZmZmZmZmAMAAAAAAAAAAwDIzMzMzM/+/ZmZmZmZm/r+amZmZmZn9v8zMzMzMzPy/AAAAAAAA/L8yMzMzMzP7v2ZmZmZmZvq/mJmZmZmZ+b/MzMzMzMz4vwAAAAAAAPi/MjMzMzMz979mZmZmZmb2v5iZmZmZmfW/zMzMzMzM9L8AAAAAAAD0vzIzMzMzM/O/ZmZmZmZm8r+YmZmZmZnxv8zMzMzMzPC/AAAAAAAA8L9kZmZmZmbuv8zMzMzMzOy/MDMzMzMz67+YmZmZmZnpvwAAAAAAAOi/ZGZmZmZm5r/MzMzMzMzkvzAzMzMzM+O/mJmZmZmZ4b8AAAAAAADgv8jMzMzMzNy/mJmZmZmZ2b9gZmZmZmbWvzAzMzMzM9O/AAAAAAAA0L+QmZmZmZnJvzAzMzMzM8O/gJmZmZmZub+AmZmZmZmpvwAAAAAAAAAAgJmZmZmZqT/AmZmZmZm5P0AzMzMzM8M/oJmZmZmZyT8AAAAAAADQPzAzMzMzM9M/cGZmZmZm1j+gmZmZmZnZP9DMzMzMzNw/AAAAAAAA4D+YmZmZmZnhPzgzMzMzM+M/0MzMzMzM5D9oZmZmZmbmPwAAAAAAAOg/oJmZmZmZ6T84MzMzMzPrP9DMzMzMzOw/aGZmZmZm7j8AAAAAAADwP9DMzMzMzPA/nJmZmZmZ8T9oZmZmZmbyPzQzMzMzM/M/AAAAAAAA9D/QzMzMzMz0P5yZmZmZmfU/aGZmZmZm9j80MzMzMzP3PwAAAAAAAPg/0MzMzMzM+D+cmZmZmZn5P2hmZmZmZvo/NDMzMzMz+z8AAAAAAAD8P9DMzMzMzPw/nJmZmZmZ/T9oZmZmZmb+PzQzMzMzM/8/AAAAAAAAAEA=","dtype":"float64","order":"little","shape":[121]},"y":{"__ndarray__":"iXbXPyEncj/8/UUpcxB1P1UdJMGuYXg/cCW1Qp4mfD/lrHTt+TWAP+RBY0yln4I/6AbGMZJXhT+hsrtFcmWIP7lJIUVj0Ys/xoV+Reijjz9XUn9V8PKRP3ZeaFE+UJQ/8QvnfJfulj8pRjIXztKZP0ZcxVLDAZ0/osE9/S1AoD/9GTrQuSmiP+sSXS7nP6Q/TMOXlASFpj+78jR4RPuoP9Y66Da0pKs/yhwpgzKDrj/QwI6yMsywP1LjdvbXcrI/zJbq2xM2tD8tFr82RRa2P/B9ja+ZE7g/trqHugguuj9KrmTNTmW8PyMdOO3ouL4/hR7SVgiUwD+uCHld3NjBP2v3GwRFKsM/Lezg3HCHxD9AFTTxZ+/FP8jwMZQLYcc/Bf++sRbbyD8mNZuhHlzKP3HN24OU4ss/IS0WKsdszT84FzOO5fjOPw9rsuqAQtA/R9eQbYoH0T8mwa0egcrRPwpvQnBOitI/FTSt79VF0z/54vbr9/vTP/RHkkKUq9Q/uyTpSI1T1T/sCGvIyvLVP62GIAI9iNY/+1VGrt8S1z/+jCzsvJHXP+Z3iRbwA9g/wLufcKho2D/OvgShK7/YP2m3fe/XBtk/TaFMPCY/2T/ekV6oq2fZP5XxFOcagNk/UTbUM0WI2T+V8RTnGoDZP96RXqirZ9k/TKFMPCY/2T9ot33v1wbZP86+BKErv9g/v7ufcKho2D/ld4kW8APYP/yMLOy8kdc/+lVGrt8S1z+thiACPYjWP+sIa8jK8tU/uiTpSI1T1T/xR5JClKvUP/bi9uv3+9M/FTSt79VF0z8Hb0JwTorSPybBrR6BytE/RdeQbYoH0T8Na7LqgELQPzgXM47l+M4/IS0WKsdszT9rzduDlOLLPyI1m6EeXMo/A/++sRbbyD/I8DGUC2HHP0AVNPFn78U/KOzg3HCHxD9o9xsERSrDP6wIeV3c2ME/hR7SVgiUwD8jHTjt6Li+P0CuZM1OZbw/sbqHugguuj/tfY2vmRO4Py0WvzZFFrY/w5bq2xM2tD9L43b213KyP83AjrIyzLA/xxwpgzKDrj/WOug2tKSrP67yNHhE+6g/RsOXlASFpj/nEl0u5z+kP/0ZOtC5KaI/osE9/S1AoD8yXMVSwwGdPyNGMhfO0pk/7AvnfJfulj92XmhRPlCUP1dSf1Xw8pE/s4V+Reijjz+ySSFFY9GLP5yyu0VyZYg/6AbGMZJXhT/kQWNMpZ+CP9isdO35NYA/aiW1Qp4mfD9PHSTBrmF4P/z9RSlzEHU/iXbXPyEncj8=","dtype":"float64","order":"little","shape":[121]}},"selected":{"id":"4278"},"selection_policy":{"id":"4277"}},"id":"4257","type":"ColumnDataSource"},{"attributes":{},"id":"4236","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4254","type":"Line"},{"attributes":{"data_source":{"id":"4252"},"glyph":{"id":"4253"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4254"},"selection_glyph":null,"view":{"id":"4256"}},"id":"4255","type":"GlyphRenderer"},{"attributes":{},"id":"4268","type":"BasicTickFormatter"},{"attributes":{},"id":"4230","type":"BasicTicker"},{"attributes":{},"id":"4237","type":"ResetTool"},{"attributes":{},"id":"4270","type":"BasicTickFormatter"}],"root_ids":["4214"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"f79491e4-dabe-43ae-b351-4c5186cd7669","root_ids":["4214"],"roots":{"4214":"94f41f35-f44f-4c01-bcc8-b09271a280ef"}}];
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