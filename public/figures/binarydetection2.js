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
    
      
      
    
      var element = document.getElementById("aeb02283-bfc9-4eb5-abb6-247f91de5956");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aeb02283-bfc9-4eb5-abb6-247f91de5956' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8bb8d864-6d84-4df0-b771-535b1aa6f940":{"roots":{"references":[{"attributes":{"data_source":{"id":"13215"},"glyph":{"id":"13216"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13217"},"selection_glyph":null,"view":{"id":"13219"}},"id":"13218","type":"GlyphRenderer"},{"attributes":{},"id":"13236","type":"UnionRenderers"},{"attributes":{"source":{"id":"13210"}},"id":"13214","type":"CDSView"},{"attributes":{"source":{"id":"13225"}},"id":"13229","type":"CDSView"},{"attributes":{},"id":"13241","type":"Selection"},{"attributes":{"axis":{"id":"13188"},"ticker":null},"id":"13191","type":"Grid"},{"attributes":{},"id":"13180","type":"DataRange1d"},{"attributes":{"axis":{"id":"13192"},"dimension":1,"ticker":null},"id":"13195","type":"Grid"},{"attributes":{},"id":"13239","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13212","type":"Line"},{"attributes":{"fill_color":"#1f77b4","hatch_pattern":"/","line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"13221","type":"Patch"},{"attributes":{},"id":"13233","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13202","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"13188"}],"center":[{"id":"13191"},{"id":"13195"}],"left":[{"id":"13192"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"13213"},{"id":"13218"},{"id":"13223"},{"id":"13228"}],"title":{"id":"13178"},"toolbar":{"id":"13203"},"x_range":{"id":"13180"},"x_scale":{"id":"13184"},"y_range":{"id":"13182"},"y_scale":{"id":"13186"}},"id":"13177","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMA0MzMzMzP/v2ZmZmZmZv6/mpmZmZmZ/b/MzMzMzMz8vwAAAAAAAPy/NDMzMzMz+79mZmZmZmb6v5qZmZmZmfm/zMzMzMzM+L8AAAAAAAD4vzQzMzMzM/e/ZmZmZmZm9r+amZmZmZn1v8zMzMzMzPS/AAAAAAAA9L80MzMzMzPzv2ZmZmZmZvK/mpmZmZmZ8b/MzMzMzMzwvwAAAAAAAPC/ZmZmZmZm7r/MzMzMzMzsvzIzMzMzM+u/mJmZmZmZ6b8AAAAAAADov2ZmZmZmZua/zMzMzMzM5L8yMzMzMzPjv5iZmZmZmeG/AAAAAAAA4L/MzMzMzMzcv5iZmZmZmdm/ZGZmZmZm1r8wMzMzMzPTvwAAAAAAANC/mJmZmZmZyb8wMzMzMzPDv5CZmZmZmbm/gJmZmZmZqb8AAAAAAAAAAAAAAAAAAAAA","dtype":"float64","order":"little","shape":[42]},"y":{"__ndarray__":"iXbXPyEncj/8/UUpcxB1P1UdJMGuYXg/cCW1Qp4mfD/lrHTt+TWAP+RBY0yln4I/6AbGMZJXhT+hsrtFcmWIP7lJIUVj0Ys/xoV+Reijjz9XUn9V8PKRP3ZeaFE+UJQ/8QvnfJfulj8pRjIXztKZP0ZcxVLDAZ0/osE9/S1AoD/9GTrQuSmiP+sSXS7nP6Q/TMOXlASFpj+78jR4RPuoP9Y66Da0pKs/yhwpgzKDrj/QwI6yMsywP1LjdvbXcrI/zJbq2xM2tD8tFr82RRa2P/B9ja+ZE7g/trqHugguuj9KrmTNTmW8PyMdOO3ouL4/hR7SVgiUwD+uCHld3NjBP2v3GwRFKsM/Lezg3HCHxD9AFTTxZ+/FP8jwMZQLYcc/Bf++sRbbyD8mNZuhHlzKP3HN24OU4ss/IS0WKsdszT84FzOO5fjOPwAAAAAAAAAA","dtype":"float64","order":"little","shape":[42]}},"selected":{"id":"13241"},"selection_policy":{"id":"13242"}},"id":"13225","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13216","type":"Line"},{"attributes":{"data_source":{"id":"13225"},"glyph":{"id":"13226"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13227"},"selection_glyph":null,"view":{"id":"13229"}},"id":"13228","type":"GlyphRenderer"},{"attributes":{"text":"Detection of BPSK"},"id":"13178","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13217","type":"Line"},{"attributes":{},"id":"13231","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"13202"}},"id":"13198","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"13231"},"ticker":{"id":"13193"}},"id":"13192","type":"LinearAxis"},{"attributes":{"data_source":{"id":"13210"},"glyph":{"id":"13211"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13212"},"selection_glyph":null,"view":{"id":"13214"}},"id":"13213","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13211","type":"Line"},{"attributes":{"source":{"id":"13220"}},"id":"13224","type":"CDSView"},{"attributes":{},"id":"13240","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13196"},{"id":"13197"},{"id":"13198"},{"id":"13199"},{"id":"13200"},{"id":"13201"}]},"id":"13203","type":"Toolbar"},{"attributes":{},"id":"13186","type":"LinearScale"},{"attributes":{},"id":"13193","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","hatch_pattern":"/","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"13222","type":"Patch"},{"attributes":{},"id":"13197","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAICZmZmZmak/wJmZmZmZuT9AMzMzMzPDP6CZmZmZmck/AAAAAAAA0D8wMzMzMzPTP3BmZmZmZtY/oJmZmZmZ2T/QzMzMzMzcPwAAAAAAAOA/mJmZmZmZ4T84MzMzMzPjP9DMzMzMzOQ/aGZmZmZm5j8AAAAAAADoP6CZmZmZmek/ODMzMzMz6z/QzMzMzMzsP2hmZmZmZu4/AAAAAAAA8D/QzMzMzMzwP5yZmZmZmfE/aGZmZmZm8j80MzMzMzPzPwAAAAAAAPQ/0MzMzMzM9D+cmZmZmZn1P2hmZmZmZvY/NDMzMzMz9z8AAAAAAAD4P9DMzMzMzPg/nJmZmZmZ+T9oZmZmZmb6PzQzMzMzM/s/AAAAAAAA/D/QzMzMzMz8P5yZmZmZmf0/aGZmZmZm/j80MzMzMzP/Pw==","dtype":"float64","order":"little","shape":[41]},"y":{"__ndarray__":"AAAAAAAAAAA4FzOO5fjOPyEtFirHbM0/a83bg5Tiyz8iNZuhHlzKPwP/vrEW28g/yPAxlAthxz9AFTTxZ+/FPyjs4Nxwh8Q/aPcbBEUqwz+sCHld3NjBP4Ue0lYIlMA/Ix047ei4vj9ArmTNTmW8P7G6h7oILro/7X2Nr5kTuD8tFr82RRa2P8OW6tsTNrQ/S+N29tdysj/NwI6yMsywP8ccKYMyg64/1jroNrSkqz+u8jR4RPuoP0bDl5QEhaY/5xJdLuc/pD/9GTrQuSmiP6LBPf0tQKA/MlzFUsMBnT8jRjIXztKZP+wL53yX7pY/dl5oUT5QlD9XUn9V8PKRP7OFfkXoo48/skkhRWPRiz+csrtFcmWIP+gGxjGSV4U/5EFjTKWfgj/YrHTt+TWAP2oltUKeJnw/Tx0kwa5heD/8/UUpcxB1Pw==","dtype":"float64","order":"little","shape":[41]}},"selected":{"id":"13239"},"selection_policy":{"id":"13240"}},"id":"13220","type":"ColumnDataSource"},{"attributes":{},"id":"13182","type":"DataRange1d"},{"attributes":{},"id":"13199","type":"SaveTool"},{"attributes":{"fill_color":"#1f77b4","hatch_pattern":"\\\\","line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"13226","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","hatch_pattern":"\\\\","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"13227","type":"Patch"},{"attributes":{},"id":"13201","type":"HelpTool"},{"attributes":{},"id":"13235","type":"Selection"},{"attributes":{},"id":"13242","type":"UnionRenderers"},{"attributes":{},"id":"13196","type":"PanTool"},{"attributes":{},"id":"13237","type":"Selection"},{"attributes":{},"id":"13184","type":"LinearScale"},{"attributes":{"data_source":{"id":"13220"},"glyph":{"id":"13221"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13222"},"selection_glyph":null,"view":{"id":"13224"}},"id":"13223","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAEMCamZmZmZkPwDMzMzMzMw/AzczMzMzMDsBmZmZmZmYOwAAAAAAAAA7AmpmZmZmZDcAzMzMzMzMNwM3MzMzMzAzAZmZmZmZmDMAAAAAAAAAMwJqZmZmZmQvAMzMzMzMzC8DNzMzMzMwKwGZmZmZmZgrAAAAAAAAACsCamZmZmZkJwDMzMzMzMwnAzczMzMzMCMBmZmZmZmYIwAAAAAAAAAjAmpmZmZmZB8AzMzMzMzMHwMzMzMzMzAbAZmZmZmZmBsAAAAAAAAAGwJqZmZmZmQXAMzMzMzMzBcDMzMzMzMwEwGZmZmZmZgTAAAAAAAAABMCamZmZmZkDwDMzMzMzMwPAzMzMzMzMAsBmZmZmZmYCwAAAAAAAAALAmpmZmZmZAcAzMzMzMzMBwMzMzMzMzADAZmZmZmZmAMAAAAAAAAAAwDIzMzMzM/+/ZmZmZmZm/r+amZmZmZn9v8zMzMzMzPy/AAAAAAAA/L8yMzMzMzP7v2ZmZmZmZvq/mJmZmZmZ+b/MzMzMzMz4vwAAAAAAAPi/MjMzMzMz979mZmZmZmb2v5iZmZmZmfW/zMzMzMzM9L8AAAAAAAD0vzIzMzMzM/O/ZmZmZmZm8r+YmZmZmZnxv8zMzMzMzPC/AAAAAAAA8L9kZmZmZmbuv8zMzMzMzOy/MDMzMzMz67+YmZmZmZnpvwAAAAAAAOi/ZGZmZmZm5r/MzMzMzMzkvzAzMzMzM+O/mJmZmZmZ4b8AAAAAAADgv8jMzMzMzNy/mJmZmZmZ2b9gZmZmZmbWvzAzMzMzM9O/AAAAAAAA0L+QmZmZmZnJvzAzMzMzM8O/gJmZmZmZub+AmZmZmZmpvwAAAAAAAAAAgJmZmZmZqT/AmZmZmZm5P0AzMzMzM8M/oJmZmZmZyT8AAAAAAADQPzAzMzMzM9M/cGZmZmZm1j+gmZmZmZnZP9DMzMzMzNw/AAAAAAAA4D+YmZmZmZnhPzgzMzMzM+M/0MzMzMzM5D9oZmZmZmbmPwAAAAAAAOg/oJmZmZmZ6T84MzMzMzPrP9DMzMzMzOw/aGZmZmZm7j8AAAAAAADwP9DMzMzMzPA/nJmZmZmZ8T9oZmZmZmbyPzQzMzMzM/M/AAAAAAAA9D/QzMzMzMz0P5yZmZmZmfU/aGZmZmZm9j80MzMzMzP3PwAAAAAAAPg/0MzMzMzM+D+cmZmZmZn5P2hmZmZmZvo/NDMzMzMz+z8AAAAAAAD8P9DMzMzMzPw/nJmZmZmZ/T9oZmZmZmb+PzQzMzMzM/8/AAAAAAAAAEA=","dtype":"float64","order":"little","shape":[121]},"y":{"__ndarray__":"iXbXPyEncj/8/UUpcxB1P1UdJMGuYXg/cCW1Qp4mfD/lrHTt+TWAP+RBY0yln4I/6AbGMZJXhT+hsrtFcmWIP7lJIUVj0Ys/xoV+Reijjz9XUn9V8PKRP3ZeaFE+UJQ/8QvnfJfulj8pRjIXztKZP0ZcxVLDAZ0/osE9/S1AoD/9GTrQuSmiP+sSXS7nP6Q/TMOXlASFpj+78jR4RPuoP9Y66Da0pKs/yhwpgzKDrj/QwI6yMsywP1LjdvbXcrI/zJbq2xM2tD8tFr82RRa2P/B9ja+ZE7g/trqHugguuj9KrmTNTmW8PyMdOO3ouL4/hR7SVgiUwD+uCHld3NjBP2v3GwRFKsM/Lezg3HCHxD9AFTTxZ+/FP8jwMZQLYcc/Bf++sRbbyD8mNZuhHlzKP3HN24OU4ss/IS0WKsdszT84FzOO5fjOPw9rsuqAQtA/R9eQbYoH0T8mwa0egcrRPwpvQnBOitI/FTSt79VF0z/54vbr9/vTP/RHkkKUq9Q/uyTpSI1T1T/sCGvIyvLVP62GIAI9iNY/+1VGrt8S1z/+jCzsvJHXP+Z3iRbwA9g/wLufcKho2D/OvgShK7/YP2m3fe/XBtk/TaFMPCY/2T/ekV6oq2fZP5XxFOcagNk/UTbUM0WI2T+V8RTnGoDZP96RXqirZ9k/TKFMPCY/2T9ot33v1wbZP86+BKErv9g/v7ufcKho2D/ld4kW8APYP/yMLOy8kdc/+lVGrt8S1z+thiACPYjWP+sIa8jK8tU/uiTpSI1T1T/xR5JClKvUP/bi9uv3+9M/FTSt79VF0z8Hb0JwTorSPybBrR6BytE/RdeQbYoH0T8Na7LqgELQPzgXM47l+M4/IS0WKsdszT9rzduDlOLLPyI1m6EeXMo/A/++sRbbyD/I8DGUC2HHP0AVNPFn78U/KOzg3HCHxD9o9xsERSrDP6wIeV3c2ME/hR7SVgiUwD8jHTjt6Li+P0CuZM1OZbw/sbqHugguuj/tfY2vmRO4Py0WvzZFFrY/w5bq2xM2tD9L43b213KyP83AjrIyzLA/xxwpgzKDrj/WOug2tKSrP67yNHhE+6g/RsOXlASFpj/nEl0u5z+kP/0ZOtC5KaI/osE9/S1AoD8yXMVSwwGdPyNGMhfO0pk/7AvnfJfulj92XmhRPlCUP1dSf1Xw8pE/s4V+Reijjz+ySSFFY9GLP5yyu0VyZYg/6AbGMZJXhT/kQWNMpZ+CP9isdO35NYA/aiW1Qp4mfD9PHSTBrmF4P/z9RSlzEHU/iXbXPyEncj8=","dtype":"float64","order":"little","shape":[121]}},"selected":{"id":"13235"},"selection_policy":{"id":"13236"}},"id":"13210","type":"ColumnDataSource"},{"attributes":{},"id":"13200","type":"ResetTool"},{"attributes":{"source":{"id":"13215"}},"id":"13219","type":"CDSView"},{"attributes":{},"id":"13189","type":"BasicTicker"},{"attributes":{},"id":"13238","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMA0MzMzMzP/v2ZmZmZmZv6/mpmZmZmZ/b/MzMzMzMz8vwAAAAAAAPy/NDMzMzMz+79mZmZmZmb6v5qZmZmZmfm/zMzMzMzM+L8AAAAAAAD4vzQzMzMzM/e/ZmZmZmZm9r+amZmZmZn1v8zMzMzMzPS/AAAAAAAA9L80MzMzMzPzv2ZmZmZmZvK/mpmZmZmZ8b/MzMzMzMzwvwAAAAAAAPC/ZmZmZmZm7r/MzMzMzMzsvzIzMzMzM+u/mJmZmZmZ6b8AAAAAAADov2ZmZmZmZua/zMzMzMzM5L8yMzMzMzPjv5iZmZmZmeG/AAAAAAAA4L/MzMzMzMzcv5iZmZmZmdm/ZGZmZmZm1r8wMzMzMzPTvwAAAAAAANC/mJmZmZmZyb8wMzMzMzPDv5CZmZmZmbm/gJmZmZmZqb8AAAAAAAAAAMCZmZmZmak/oJmZmZmZuT8wMzMzMzPDP6CZmZmZmck/AAAAAAAA0D84MzMzMzPTP2hmZmZmZtY/oJmZmZmZ2T/QzMzMzMzcPwAAAAAAAOA/nJmZmZmZ4T80MzMzMzPjP9DMzMzMzOQ/aGZmZmZm5j8AAAAAAADoP5yZmZmZmek/NDMzMzMz6z/QzMzMzMzsP2hmZmZmZu4/AAAAAAAA8D/OzMzMzMzwP5qZmZmZmfE/aGZmZmZm8j80MzMzMzPzPwAAAAAAAPQ/zszMzMzM9D+amZmZmZn1P2hmZmZmZvY/NDMzMzMz9z8AAAAAAAD4P87MzMzMzPg/mpmZmZmZ+T9oZmZmZmb6PzQzMzMzM/s/AAAAAAAA/D/OzMzMzMz8P5qZmZmZmf0/aGZmZmZm/j80MzMzMzP/PwAAAAAAAABAZmZmZmZmAEDOzMzMzMwAQDQzMzMzMwFAmpmZmZmZAUAAAAAAAAACQGZmZmZmZgJAzszMzMzMAkA0MzMzMzMDQJqZmZmZmQNAAAAAAAAABEBmZmZmZmYEQM7MzMzMzARANDMzMzMzBUCamZmZmZkFQAAAAAAAAAZAaGZmZmZmBkDOzMzMzMwGQDQzMzMzMwdAmpmZmZmZB0AAAAAAAAAIQGhmZmZmZghAzszMzMzMCEA0MzMzMzMJQJqZmZmZmQlAAAAAAAAACkBoZmZmZmYKQM7MzMzMzApANDMzMzMzC0CamZmZmZkLQAAAAAAAAAxAaGZmZmZmDEDOzMzMzMwMQDQzMzMzMw1AmpmZmZmZDUAAAAAAAAAOQGhmZmZmZg5AzszMzMzMDkA0MzMzMzMPQJqZmZmZmQ9AAAAAAAAAEEA=","dtype":"float64","order":"little","shape":[121]},"y":{"__ndarray__":"iXbXPyEncj/8/UUpcxB1P1UdJMGuYXg/cCW1Qp4mfD/lrHTt+TWAP+RBY0yln4I/6AbGMZJXhT+hsrtFcmWIP7lJIUVj0Ys/xoV+Reijjz9XUn9V8PKRP3ZeaFE+UJQ/8QvnfJfulj8pRjIXztKZP0ZcxVLDAZ0/osE9/S1AoD/9GTrQuSmiP+sSXS7nP6Q/TMOXlASFpj+78jR4RPuoP9Y66Da0pKs/yhwpgzKDrj/QwI6yMsywP1LjdvbXcrI/zJbq2xM2tD8tFr82RRa2P/B9ja+ZE7g/trqHugguuj9KrmTNTmW8PyMdOO3ouL4/hR7SVgiUwD+uCHld3NjBP2v3GwRFKsM/Lezg3HCHxD9AFTTxZ+/FP8jwMZQLYcc/Bf++sRbbyD8mNZuhHlzKP3HN24OU4ss/IS0WKsdszT84FzOO5fjOPw9rsuqAQtA/R9eQbYoH0T8mwa0egcrRPwpvQnBOitI/FTSt79VF0z/54vbr9/vTP/RHkkKUq9Q/uyTpSI1T1T/sCGvIyvLVP62GIAI9iNY/+1VGrt8S1z/+jCzsvJHXP+Z3iRbwA9g/wLufcKho2D/OvgShK7/YP2m3fe/XBtk/TaFMPCY/2T/ekV6oq2fZP5XxFOcagNk/UTbUM0WI2T+V8RTnGoDZP96RXqirZ9k/TKFMPCY/2T9ot33v1wbZP86+BKErv9g/v7ufcKho2D/ld4kW8APYP/yMLOy8kdc/+lVGrt8S1z+thiACPYjWP+sIa8jK8tU/uiTpSI1T1T/xR5JClKvUP/bi9uv3+9M/FTSt79VF0z8Hb0JwTorSPybBrR6BytE/RdeQbYoH0T8Na7LqgELQPzgXM47l+M4/IS0WKsdszT9rzduDlOLLPyI1m6EeXMo/A/++sRbbyD/I8DGUC2HHP0AVNPFn78U/KOzg3HCHxD9o9xsERSrDP6wIeV3c2ME/hR7SVgiUwD8jHTjt6Li+P0CuZM1OZbw/sbqHugguuj/tfY2vmRO4Py0WvzZFFrY/w5bq2xM2tD9L43b213KyP83AjrIyzLA/xxwpgzKDrj/WOug2tKSrP67yNHhE+6g/RsOXlASFpj/nEl0u5z+kP/0ZOtC5KaI/osE9/S1AoD8yXMVSwwGdPyNGMhfO0pk/7AvnfJfulj92XmhRPlCUP1dSf1Xw8pE/s4V+Reijjz+ySSFFY9GLP5yyu0VyZYg/6AbGMZJXhT/kQWNMpZ+CP9isdO35NYA/aiW1Qp4mfD9PHSTBrmF4P/z9RSlzEHU/iXbXPyEncj8=","dtype":"float64","order":"little","shape":[121]}},"selected":{"id":"13237"},"selection_policy":{"id":"13238"}},"id":"13215","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"13233"},"ticker":{"id":"13189"}},"id":"13188","type":"LinearAxis"}],"root_ids":["13177"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"8bb8d864-6d84-4df0-b771-535b1aa6f940","root_ids":["13177"],"roots":{"13177":"aeb02283-bfc9-4eb5-abb6-247f91de5956"}}];
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