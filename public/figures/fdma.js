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
    
      
      
    
      var element = document.getElementById("2b962e40-4ff2-4e46-96bf-37347ce870c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2b962e40-4ff2-4e46-96bf-37347ce870c9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"af600c29-1ba4-4acc-86d6-9853b9bb5be1":{"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"MzMzMzMzHUAdWmQ7308dQAaBlUOLbB1A8KfGSzeJHUDZzvdT46UdQMP1KFyPwh1ArBxaZDvfHUCWQ4ts5/sdQH9qvHSTGB5AaJHtfD81HkBSuB6F61EeQDvfT42Xbh5AJQaBlUOLHkAOLbKd76ceQPhT46WbxB5A4XoUrkfhHkDLoUW28/0eQLTIdr6fGh9Anu+nxks3H0CHFtnO91MfQHE9CtejcB9AWmQ730+NH0BEi2zn+6kfQC2yne+nxh9AFtnO91PjH0AAAAAAAAAgQHWTGARWDiBA6SYxCKwcIEBeukkMAisgQNNNYhBYOSBASOF6FK5HIEC8dJMYBFYgQDEIrBxaZCBAppvEILByIEAbL90kBoEgQI/C9ShcjyBABFYOLbKdIEB56SYxCKwgQO58PzVeuiBAYhBYObTIIEDXo3A9CtcgQEw3iUFg5SBAwMqhRbbzIEA1XrpJDAIhQKrx0k1iECFAH4XrUbgeIUCTGARWDi0hQAisHFpkOyFAfT81XrpJIUDy0k1iEFghQGZmZmZmZiFA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7567"},"selection_policy":{"id":"7566"}},"id":"7524","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7524"},"glyph":{"id":"7525"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7526"},"selection_glyph":null,"view":{"id":"7528"}},"id":"7527","type":"GlyphRenderer"},{"attributes":{},"id":"7571","type":"Selection"},{"attributes":{"data_source":{"id":"7539"},"glyph":{"id":"7540"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7541"},"selection_glyph":null,"view":{"id":"7543"}},"id":"7542","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7526","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"zczMzMzM9D9zaJHtfD/1PxkEVg4tsvU/vp8aL90k9j9kO99PjZf2PwrXo3A9Cvc/sHJoke189z9WDi2yne/3P/yp8dJNYvg/okW28/3U+D9I4XoUrkf5P+58PzVeuvk/lBgEVg4t+j86tMh2vp/6P99PjZduEvs/hetRuB6F+z8rhxbZzvf7P9Ei2/l+avw/d76fGi/d/D8cWmQ730/9P8L1KFyPwv0/aJHtfD81/j8OLbKd76f+P7TIdr6fGv8/WmQ730+N/z8AAAAAAAAAQNNNYhBYOQBAppvEILByAEB56SYxCKwAQEw3iUFg5QBAHoXrUbgeAUDy0k1iEFgBQMQgsHJokQFAmG4Sg8DKAUBqvHSTGAQCQD0K16NwPQJAEFg5tMh2AkDjpZvEILACQLbz/dR46QJAiUFg5dAiA0Bcj8L1KFwDQC/dJAaBlQNAAiuHFtnOA0DVeOkmMQgEQKjGSzeJQQRAehSuR+F6BEBOYhBYObQEQCCwcmiR7QRA9P3UeOkmBUDGSzeJQWAFQJqZmZmZmQVA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7561"},"selection_policy":{"id":"7560"}},"id":"7509","type":"ColumnDataSource"},{"attributes":{},"id":"7572","type":"UnionRenderers"},{"attributes":{},"id":"7574","type":"UnionRenderers"},{"attributes":{"axis":{"id":"7487"},"ticker":null},"id":"7490","type":"Grid"},{"attributes":{},"id":"7573","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7541","type":"Patch"},{"attributes":{"source":{"id":"7524"}},"id":"7528","type":"CDSView"},{"attributes":{},"id":"7575","type":"Selection"},{"attributes":{"source":{"id":"7544"}},"id":"7548","type":"CDSView"},{"attributes":{},"id":"7488","type":"BasicTicker"},{"attributes":{},"id":"7576","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZIkAOLbKd76ciQIPAyqFFtiJA+FPjpZvEIkBt5/up8dIiQOF6FK5H4SJAVg4tsp3vIkDLoUW28/0iQEA1XrpJDCNAtMh2vp8aI0ApXI/C9SgjQJ7vp8ZLNyNAEoPAyqFFI0CHFtnO91MjQPyp8dJNYiNAcT0K16NwI0Dl0CLb+X4jQFpkO99PjSNAz/dT46WbI0BEi2zn+6kjQLgehetRuCNALbKd76fGI0CiRbbz/dQjQBbZzvdT4yNAi2zn+6nxI0AAAAAAAAAkQHWTGARWDiRA6SYxCKwcJEBeukkMAiskQNNNYhBYOSRASOF6FK5HJEC8dJMYBFYkQDEIrBxaZCRAppvEILByJEAbL90kBoEkQI/C9ShcjyRABFYOLbKdJEB56SYxCKwkQO58PzVeuiRAYhBYObTIJEDXo3A9CtckQEw3iUFg5SRAwMqhRbbzJEA1XrpJDAIlQKrx0k1iECVAH4XrUbgeJUCTGARWDi0lQAisHFpkOyVAfT81XrpJJUDy0k1iEFglQGZmZmZmZiVA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7569"},"selection_policy":{"id":"7568"}},"id":"7529","type":"ColumnDataSource"},{"attributes":{},"id":"7483","type":"LinearScale"},{"attributes":{"source":{"id":"7509"}},"id":"7513","type":"CDSView"},{"attributes":{"data_source":{"id":"7549"},"glyph":{"id":"7550"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7551"},"selection_glyph":null,"view":{"id":"7553"}},"id":"7552","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7557"},"ticker":{"id":"7488"}},"id":"7487","type":"LinearAxis"},{"attributes":{},"id":"7492","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7551","type":"Patch"},{"attributes":{"data_source":{"id":"7509"},"glyph":{"id":"7510"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7511"},"selection_glyph":null,"view":{"id":"7513"}},"id":"7512","type":"GlyphRenderer"},{"attributes":{},"id":"7577","type":"Selection"},{"attributes":{"data_source":{"id":"7544"},"glyph":{"id":"7545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7546"},"selection_glyph":null,"view":{"id":"7548"}},"id":"7547","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"MzMzMzMzFUAdWmQ7308VQAaBlUOLbBVA8KfGSzeJFUDZzvdT46UVQMP1KFyPwhVArBxaZDvfFUCWQ4ts5/sVQH9qvHSTGBZAaJHtfD81FkBSuB6F61EWQDvfT42XbhZAJQaBlUOLFkAOLbKd76cWQPhT46WbxBZA4XoUrkfhFkDLoUW28/0WQLTIdr6fGhdAnu+nxks3F0CHFtnO91MXQHE9CtejcBdAWmQ730+NF0BEi2zn+6kXQC2yne+nxhdAFtnO91PjF0AAAAAAAAAYQOomMQisHBhA001iEFg5GEC8dJMYBFYYQKabxCCwchhAj8L1KFyPGEB56SYxCKwYQGIQWDm0yBhATDeJQWDlGEA1XrpJDAIZQB+F61G4HhlACKwcWmQ7GUDy0k1iEFgZQNv5fmq8dBlAxCCwcmiRGUCuR+F6FK4ZQJhuEoPAyhlAgZVDi2znGUBqvHSTGAQaQFTjpZvEIBpAPQrXo3A9GkAnMQisHFoaQBBYObTIdhpA+n5qvHSTGkDjpZvEILAaQM3MzMzMzBpA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7565"},"selection_policy":{"id":"7564"}},"id":"7519","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"7491"},"dimension":1,"ticker":null},"id":"7494","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"zczMzMxMMUCHFtnO91MxQEJg5dAiWzFA/Knx0k1iMUC28/3UeGkxQHE9CtejcDFAK4cW2c53MUDl0CLb+X4xQKAaL90khjFAWmQ730+NMUAUrkfhepQxQM/3U+OlmzFAiUFg5dCiMUBEi2zn+6kxQP7UeOkmsTFAuB6F61G4MUBzaJHtfL8xQC2yne+nxjFA5/up8dLNMUCiRbbz/dQxQFyPwvUo3DFAF9nO91PjMUDRItv5fuoxQIts5/up8TFARrbz/dT4MUAAAAAAAAAyQLpJDAIrBzJAdZMYBFYOMkAv3SQGgRUyQOkmMQisHDJApHA9CtcjMkBeukkMAisyQBkEVg4tMjJA001iEFg5MkCNl24Sg0AyQEjhehSuRzJAAiuHFtlOMkC8dJMYBFYyQHe+nxovXTJAMQisHFpkMkDsUbgehWsyQKabxCCwcjJAYOXQItt5MkAbL90kBoEyQNV46SYxiDJAj8L1KFyPMkBKDAIrh5YyQARWDi2ynTJAvp8aL92kMkB56SYxCKwyQDMzMzMzszJA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7577"},"selection_policy":{"id":"7576"}},"id":"7549","type":"ColumnDataSource"},{"attributes":{"text":"Frequency Division"},"id":"7477","type":"Title"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7511","type":"Patch"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7550","type":"Patch"},{"attributes":{"source":{"id":"7534"}},"id":"7538","type":"CDSView"},{"attributes":{"data_source":{"id":"7529"},"glyph":{"id":"7530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7531"},"selection_glyph":null,"view":{"id":"7533"}},"id":"7532","type":"GlyphRenderer"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7510","type":"Patch"},{"attributes":{"source":{"id":"7549"}},"id":"7553","type":"CDSView"},{"attributes":{"formatter":{"id":"7555"},"ticker":{"id":"7492"}},"id":"7491","type":"LinearAxis"},{"attributes":{},"id":"7495","type":"PanTool"},{"attributes":{},"id":"7485","type":"LinearScale"},{"attributes":{"data_source":{"id":"7514"},"glyph":{"id":"7515"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7516"},"selection_glyph":null,"view":{"id":"7518"}},"id":"7517","type":"GlyphRenderer"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7520","type":"Patch"},{"attributes":{},"id":"7498","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7495"},{"id":"7496"},{"id":"7497"},{"id":"7498"},{"id":"7499"},{"id":"7500"}]},"id":"7502","type":"Toolbar"},{"attributes":{},"id":"7555","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7519"}},"id":"7523","type":"CDSView"},{"attributes":{"data_source":{"id":"7519"},"glyph":{"id":"7520"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7521"},"selection_glyph":null,"view":{"id":"7523"}},"id":"7522","type":"GlyphRenderer"},{"attributes":{},"id":"7499","type":"ResetTool"},{"attributes":{},"id":"7560","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"7501"}},"id":"7497","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7521","type":"Patch"},{"attributes":{},"id":"7557","type":"BasicTickFormatter"},{"attributes":{},"id":"7496","type":"WheelZoomTool"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7525","type":"Patch"},{"attributes":{},"id":"7500","type":"HelpTool"},{"attributes":{},"id":"7481","type":"DataRange1d"},{"attributes":{},"id":"7479","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7534"},"glyph":{"id":"7535"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7536"},"selection_glyph":null,"view":{"id":"7538"}},"id":"7537","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7531","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZKkAOLbKd76cqQIPAyqFFtipA+FPjpZvEKkBt5/up8dIqQOF6FK5H4SpAVg4tsp3vKkDLoUW28/0qQEA1XrpJDCtAtMh2vp8aK0ApXI/C9SgrQJ7vp8ZLNytAEoPAyqFFK0CHFtnO91MrQPyp8dJNYitAcT0K16NwK0Dl0CLb+X4rQFpkO99PjStAz/dT46WbK0BEi2zn+6krQLgehetRuCtALbKd76fGK0CiRbbz/dQrQBbZzvdT4ytAi2zn+6nxK0AAAAAAAAAsQHWTGARWDixA6SYxCKwcLEBeukkMAissQNNNYhBYOSxASOF6FK5HLEC8dJMYBFYsQDEIrBxaZCxAppvEILByLEAbL90kBoEsQI/C9ShcjyxABFYOLbKdLEB56SYxCKwsQO58PzVeuixAYhBYObTILEDXo3A9CtcsQEw3iUFg5SxAwMqhRbbzLEA1XrpJDAItQKrx0k1iEC1AH4XrUbgeLUCTGARWDi0tQAisHFpkOy1AfT81XrpJLUDy0k1iEFgtQGZmZmZmZi1A","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7573"},"selection_policy":{"id":"7572"}},"id":"7539","type":"ColumnDataSource"},{"attributes":{},"id":"7568","type":"UnionRenderers"},{"attributes":{},"id":"7564","type":"UnionRenderers"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7540","type":"Patch"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7545","type":"Patch"},{"attributes":{},"id":"7569","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZJkAOLbKd76cmQIPAyqFFtiZA+FPjpZvEJkBt5/up8dImQOF6FK5H4SZAVg4tsp3vJkDLoUW28/0mQEA1XrpJDCdAtMh2vp8aJ0ApXI/C9SgnQJ7vp8ZLNydAEoPAyqFFJ0CHFtnO91MnQPyp8dJNYidAcT0K16NwJ0Dl0CLb+X4nQFpkO99PjSdAz/dT46WbJ0BEi2zn+6knQLgehetRuCdALbKd76fGJ0CiRbbz/dQnQBbZzvdT4ydAi2zn+6nxJ0AAAAAAAAAoQHWTGARWDihA6SYxCKwcKEBeukkMAisoQNNNYhBYOShASOF6FK5HKEC8dJMYBFYoQDEIrBxaZChAppvEILByKEAbL90kBoEoQI/C9ShcjyhABFYOLbKdKEB56SYxCKwoQO58PzVeuihAYhBYObTIKEDXo3A9CtcoQEw3iUFg5ShAwMqhRbbzKEA1XrpJDAIpQKrx0k1iEClAH4XrUbgeKUCTGARWDi0pQAisHFpkOylAfT81XrpJKUDy0k1iEFgpQGZmZmZmZilA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7571"},"selection_policy":{"id":"7570"}},"id":"7534","type":"ColumnDataSource"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7535","type":"Patch"},{"attributes":{},"id":"7561","type":"Selection"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7530","type":"Patch"},{"attributes":{},"id":"7570","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"7501","type":"BoxAnnotation"},{"attributes":{"source":{"id":"7529"}},"id":"7533","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZmCkA6tMh2vp8KQAwCK4cW2QpA30+Nl24SC0Cyne+nxksLQIXrUbgehQtAWDm0yHa+C0ArhxbZzvcLQP7UeOkmMQxA0SLb+X5qDECkcD0K16MMQHe+nxov3QxASgwCK4cWDUAdWmQ7308NQPCnxks3iQ1AwvUoXI/CDUCWQ4ts5/sNQGiR7Xw/NQ5APN9PjZduDkAOLbKd76cOQOF6FK5H4Q5AtMh2vp8aD0CHFtnO91MPQFpkO99PjQ9ALbKd76fGD0AAAAAAAAAQQOomMQisHBBA001iEFg5EEC8dJMYBFYQQKabxCCwchBAj8L1KFyPEEB56SYxCKwQQGIQWDm0yBBATDeJQWDlEEA1XrpJDAIRQB+F61G4HhFACKwcWmQ7EUDy0k1iEFgRQNv5fmq8dBFAxCCwcmiREUCuR+F6FK4RQJhuEoPAyhFAgZVDi2znEUBqvHSTGAQSQFTjpZvEIBJAPQrXo3A9EkAnMQisHFoSQBBYObTIdhJA+n5qvHSTEkDjpZvEILASQM3MzMzMzBJA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7563"},"selection_policy":{"id":"7562"}},"id":"7514","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZLkAOLbKd76cuQIPAyqFFti5A+FPjpZvELkBt5/up8dIuQOF6FK5H4S5AVg4tsp3vLkDLoUW28/0uQEA1XrpJDC9AtMh2vp8aL0ApXI/C9SgvQJ7vp8ZLNy9AEoPAyqFFL0CHFtnO91MvQPyp8dJNYi9AcT0K16NwL0Dl0CLb+X4vQFpkO99PjS9Az/dT46WbL0BEi2zn+6kvQLgehetRuC9ALbKd76fGL0CiRbbz/dQvQBbZzvdT4y9Ai2zn+6nxL0AAAAAAAAAwQLpJDAIrBzBAdZMYBFYOMEAv3SQGgRUwQOkmMQisHDBApHA9CtcjMEBeukkMAiswQBkEVg4tMjBA001iEFg5MECNl24Sg0AwQEjhehSuRzBAAiuHFtlOMEC8dJMYBFYwQHe+nxovXTBAMQisHFpkMEDsUbgehWswQKabxCCwcjBAYOXQItt5MEAbL90kBoEwQNV46SYxiDBAj8L1KFyPMEBKDAIrh5YwQARWDi2ynTBAvp8aL92kMEB56SYxCKwwQDMzMzMzszBA","dtype":"float64","order":"little","shape":[51]},"y":{"__ndarray__":"0c01rq94hjzRnhWV+EalPwx+djj6BrY/ZGmpV0ULwT+xjhfl/V3HP3Au9DiH780/FhM0r2xZ0j80l5CaEs3VP2Cefi58S9k/x5YlszHN3D8+rFp1SCXgP76FhODw3eE/e9tetbWM4z/GbdHZxC3lPwvwvx1hveY/XAIIsOw36D8IhuhJ85npP0iIZvEz4Oo/Z8JwNKoH7D+PcxLAlg3tP24u9DiH7+0/QuuuPF2r7j/d6wt2VD/vPx9VKrEHqu8/JG6g33Tq7z8AAAAAAADwPyRuoN906u8/IFUqsQeq7z/c6wt2VD/vP0Lrrjxdq+4/by70OIfv7T+RcxLAlg3tP2fCcDSqB+w/SIhm8TPg6j8IhuhJ85npP14CCLDsN+g/CfC/HWG95j/HbdHZxC3lP3zbXrW1jOM/wIWE4PDd4T8+rFp1SCXgP8eWJbMxzdw/YJ5+LnxL2T80l5CaEs3VPx0TNK9sWdI/di70OIfvzT+xjhfl/V3HP2ppqVdFC8E/DH52OPoGtj/RnhWV+EalP9HNNa6veIY8","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"7575"},"selection_policy":{"id":"7574"}},"id":"7544","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7516","type":"Patch"},{"attributes":{},"id":"7563","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7546","type":"Patch"},{"attributes":{"fill_color":"#1f77b4","line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7515","type":"Patch"},{"attributes":{},"id":"7562","type":"UnionRenderers"},{"attributes":{"below":[{"id":"7487"}],"center":[{"id":"7490"},{"id":"7494"}],"left":[{"id":"7491"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"7512"},{"id":"7517"},{"id":"7522"},{"id":"7527"},{"id":"7532"},{"id":"7537"},{"id":"7542"},{"id":"7547"},{"id":"7552"}],"title":{"id":"7477"},"toolbar":{"id":"7502"},"x_range":{"id":"7479"},"x_scale":{"id":"7483"},"y_range":{"id":"7481"},"y_scale":{"id":"7485"}},"id":"7476","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"7514"}},"id":"7518","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7536","type":"Patch"},{"attributes":{},"id":"7565","type":"Selection"},{"attributes":{},"id":"7567","type":"Selection"},{"attributes":{},"id":"7566","type":"UnionRenderers"},{"attributes":{"source":{"id":"7539"}},"id":"7543","type":"CDSView"}],"root_ids":["7476"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"af600c29-1ba4-4acc-86d6-9853b9bb5be1","root_ids":["7476"],"roots":{"7476":"2b962e40-4ff2-4e46-96bf-37347ce870c9"}}];
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