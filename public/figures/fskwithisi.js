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
    
      
      
    
      var element = document.getElementById("be337c6e-6ef9-41bc-a8ae-6fb167bbb78e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'be337c6e-6ef9-41bc-a8ae-6fb167bbb78e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7ba76a94-0b24-41fd-82b6-399e088e11db":{"roots":{"references":[{"attributes":{"toolbar":{"id":"1179"},"toolbar_location":"above"},"id":"1180","type":"ToolbarBox"},{"attributes":{},"id":"1101","type":"HelpTool"},{"attributes":{},"id":"1175","type":"UnionRenderers"},{"attributes":{},"id":"1139","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1139"},{"id":"1140"},{"id":"1141"},{"id":"1142"},{"id":"1143"},{"id":"1144"}]},"id":"1146","type":"Toolbar"},{"attributes":{},"id":"1140","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1145"}},"id":"1141","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1155","type":"Line"},{"attributes":{"toolbars":[{"id":"1103"},{"id":"1146"}],"tools":[{"id":"1096"},{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1139"},{"id":"1140"},{"id":"1141"},{"id":"1142"},{"id":"1143"},{"id":"1144"}]},"id":"1179","type":"ProxyToolbar"},{"attributes":{},"id":"1142","type":"SaveTool"},{"attributes":{},"id":"1164","type":"UnionRenderers"},{"attributes":{},"id":"1143","type":"ResetTool"},{"attributes":{},"id":"1167","type":"Selection"},{"attributes":{},"id":"1172","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1088"}],"center":[{"id":"1091"},{"id":"1095"}],"left":[{"id":"1092"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1113"},{"id":"1118"}],"title":{"id":"1078"},"toolbar":{"id":"1103"},"toolbar_location":null,"x_range":{"id":"1080"},"x_scale":{"id":"1084"},"y_range":{"id":"1082"},"y_scale":{"id":"1086"}},"id":"1077","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1153"}},"id":"1157","type":"CDSView"},{"attributes":{},"id":"1176","type":"Selection"},{"attributes":{},"id":"1144","type":"HelpTool"},{"attributes":{"children":[{"id":"1180"},{"id":"1178"}]},"id":"1181","type":"Column"},{"attributes":{"data_source":{"id":"1153"},"glyph":{"id":"1154"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1155"},"selection_glyph":null,"view":{"id":"1157"}},"id":"1156","type":"GlyphRenderer"},{"attributes":{},"id":"1161","type":"BasicTickFormatter"},{"attributes":{},"id":"1165","type":"Selection"},{"attributes":{},"id":"1166","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1102","type":"BoxAnnotation"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1116","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1096"},{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"}]},"id":"1103","type":"Toolbar"},{"attributes":{},"id":"1170","type":"BasicTickFormatter"},{"attributes":{"text":"Delayed Signal"},"id":"1078","type":"Title"},{"attributes":{},"id":"1080","type":"DataRange1d"},{"attributes":{},"id":"1084","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1111","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"MzMzMzMz8z8AAAAAAAD0P83MzMzMzPQ/mpmZmZmZ9T9mZmZmZmb2PzMzMzMzM/c/AAAAAAAA+D/NzMzMzMz4P5qZmZmZmfk/ZmZmZmZm+j8zMzMzMzP7PwAAAAAAAPw/zczMzMzM/D+amZmZmZn9P2ZmZmZmZv4/MzMzMzMz/z8AAAAAAAAAQGZmZmZmZgBAzczMzMzMAEAzMzMzMzMBQJqZmZmZmQFAAAAAAAAAAkBmZmZmZmYCQM3MzMzMzAJANDMzMzMzA0CamZmZmZkDQAAAAAAAAARAZmZmZmZmBEDNzMzMzMwEQDQzMzMzMwVAmpmZmZmZBUAAAAAAAAAGQGZmZmZmZgZAzczMzMzMBkA0MzMzMzMHQJqZmZmZmQdAAAAAAAAACEBmZmZmZmYIQM3MzMzMzAhANDMzMzMzCUCamZmZmZkJQAAAAAAAAApAZmZmZmZmCkDMzMzMzMwKQDQzMzMzMwtAmpmZmZmZC0AAAAAAAAAMQGZmZmZmZgxAzszMzMzMDEA0MzMzMzMNQJqZmZmZmQ1AAAAAAAAADkBmZmZmZmYOQM7MzMzMzA5ANDMzMzMzD0CamZmZmZkPQAAAAAAAABBAMzMzMzMzEEBnZmZmZmYQQJqZmZmZmRBAzczMzMzMEEAAAAAAAAARQDMzMzMzMxFAZ2ZmZmZmEUCamZmZmZkRQM3MzMzMzBFAAAAAAAAAEkAzMzMzMzMSQGdmZmZmZhJAmpmZmZmZEkDNzMzMzMwSQAAAAAAAABNAMzMzMzMzE0BnZmZmZmYTQJqZmZmZmRNAzczMzMzME0AAAAAAAAAUQDMzMzMzMxRAZ2ZmZmZmFECamZmZmZkUQM3MzMzMzBRAAAAAAAAAFUA0MzMzMzMVQGdmZmZmZhVAmpmZmZmZFUDNzMzMzMwVQAAAAAAAABZANDMzMzMzFkBnZmZmZmYWQJqZmZmZmRZAzczMzMzMFkAAAAAAAAAXQDQzMzMzMxdAZ2ZmZmZmF0CamZmZmZkXQM3MzMzMzBdAAQAAAAAAGEA0MzMzMzMYQGdmZmZmZhhAmpmZmZmZGEDNzMzMzMwYQAEAAAAAABlANDMzMzMzGUBnZmZmZmYZQJqZmZmZmRlAzczMzMzMGUABAAAAAAAaQDQzMzMzMxpAZ2ZmZmZmGkCamZmZmZkaQM3MzMzMzBpAAQAAAAAAG0A0MzMzMzMbQGdmZmZmZhtAmpmZmZmZG0DNzMzMzMwbQAEAAAAAABxANDMzMzMzHEBnZmZmZmYcQJqZmZmZmRxAzczMzMzMHEABAAAAAAAdQDQzMzMzMx1AZ2ZmZmZmHUCamZmZmZkdQM3MzMzMzB1AAQAAAAAAHkA0MzMzMzMeQGdmZmZmZh5AmpmZmZmZHkDNzMzMzMweQAEAAAAAAB9ANDMzMzMzH0BnZmZmZmYfQJqZmZmZmR9AzczMzMzMH0AAAAAAAAAgQJqZmZmZGSBAMzMzMzMzIEDNzMzMzEwgQGZmZmZmZiBAAAAAAACAIECamZmZmZkgQDMzMzMzsyBAzczMzMzMIEBmZmZmZuYgQAAAAAAAACFAmpmZmZkZIUAzMzMzMzMhQM3MzMzMTCFAZmZmZmZmIUAAAAAAAIAhQJqZmZmZmSFAMzMzMzOzIUDNzMzMzMwhQGZmZmZm5iFAAAAAAAAAIkCamZmZmRkiQDMzMzMzMyJAzczMzMxMIkBmZmZmZmYiQAAAAAAAgCJAmZmZmZmZIkAzMzMzM7MiQM3MzMzMzCJAZmZmZmbmIkAAAAAAAAAjQJmZmZmZGSNAMzMzMzMzI0DNzMzMzEwjQGZmZmZmZiNAAAAAAACAI0CZmZmZmZkjQDMzMzMzsyNAzczMzMzMI0BmZmZmZuYjQAAAAAAAACRAmZmZmZkZJEAzMzMzMzMkQM3MzMzMTCRAZmZmZmZmJEAAAAAAAIAkQJmZmZmZmSRAMzMzMzOzJEDNzMzMzMwkQGZmZmZm5iRAAAAAAAAAJUCZmZmZmRklQDMzMzMzMyVAzczMzMxMJUBmZmZmZmYlQAAAAAAAgCVAmpmZmZmZJUAzMzMzM7MlQM3MzMzMzCVAZmZmZmbmJUAAAAAAAAAmQJqZmZmZGSZAMzMzMzMzJkDNzMzMzEwmQGZmZmZmZiZAAAAAAACAJkCamZmZmZkmQDMzMzMzsyZAzczMzMzMJkBmZmZmZuYmQAAAAAAAACdAmpmZmZkZJ0AzMzMzMzMnQM3MzMzMTCdAZmZmZmZmJ0AAAAAAAIAnQJqZmZmZmSdAMzMzMzOzJ0DNzMzMzMwnQGZmZmZm5idAAAAAAAAAKEA=","dtype":"float64","order":"little","shape":[217]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[217]}},"selected":{"id":"1167"},"selection_policy":{"id":"1166"}},"id":"1115","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1131"}],"center":[{"id":"1134"},{"id":"1138"}],"left":[{"id":"1135"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1156"}],"title":{"id":"1121"},"toolbar":{"id":"1146"},"toolbar_location":null,"x_range":{"id":"1123"},"x_scale":{"id":"1127"},"y_range":{"id":"1125"},"y_scale":{"id":"1129"}},"id":"1120","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1115"}},"id":"1119","type":"CDSView"},{"attributes":{},"id":"1082","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1117","type":"Line"},{"attributes":{"data_source":{"id":"1115"},"glyph":{"id":"1116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1117"},"selection_glyph":null,"view":{"id":"1119"}},"id":"1118","type":"GlyphRenderer"},{"attributes":{},"id":"1086","type":"LinearScale"},{"attributes":{"text":"Combined Signal"},"id":"1121","type":"Title"},{"attributes":{"formatter":{"id":"1161"},"ticker":{"id":"1089"}},"id":"1088","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1112","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1145","type":"BoxAnnotation"},{"attributes":{},"id":"1093","type":"BasicTicker"},{"attributes":{},"id":"1123","type":"DataRange1d"},{"attributes":{},"id":"1089","type":"BasicTicker"},{"attributes":{},"id":"1127","type":"LinearScale"},{"attributes":{"axis":{"id":"1088"},"ticker":null},"id":"1091","type":"Grid"},{"attributes":{"axis":{"id":"1092"},"dimension":1,"ticker":null},"id":"1095","type":"Grid"},{"attributes":{"formatter":{"id":"1159"},"ticker":{"id":"1093"}},"id":"1092","type":"LinearAxis"},{"attributes":{},"id":"1125","type":"DataRange1d"},{"attributes":{},"id":"1129","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D/NzMzMzMzwP5qZmZmZmfE/ZmZmZmZm8j8zMzMzMzPzPwAAAAAAAPQ/zczMzMzM9D+amZmZmZn1P2ZmZmZmZvY/MzMzMzMz9z8AAAAAAAD4P83MzMzMzPg/mpmZmZmZ+T9mZmZmZmb6PzQzMzMzM/s/AAAAAAAA/D/NzMzMzMz8P5qZmZmZmf0/ZmZmZmZm/j80MzMzMzP/PwAAAAAAAABAZmZmZmZmAEDNzMzMzMwAQDQzMzMzMwFAmpmZmZmZAUAAAAAAAAACQGZmZmZmZgJAzczMzMzMAkA0MzMzMzMDQJqZmZmZmQNAAAAAAAAABEBmZmZmZmYEQM3MzMzMzARANDMzMzMzBUCamZmZmZkFQAAAAAAAAAZAZmZmZmZmBkDNzMzMzMwGQDQzMzMzMwdAmpmZmZmZB0AAAAAAAAAIQGdmZmZmZghAzczMzMzMCEAzMzMzMzMJQJqZmZmZmQlAAAAAAAAACkBnZmZmZmYKQM3MzMzMzApANDMzMzMzC0CamZmZmZkLQAAAAAAAAAxAZ2ZmZmZmDEDNzMzMzMwMQDQzMzMzMw1AmpmZmZmZDUAAAAAAAAAOQGdmZmZmZg5AzczMzMzMDkA0MzMzMzMPQJqZmZmZmQ9AAAAAAAAAEEA0MzMzMzMQQGZmZmZmZhBAmpmZmZmZEEDNzMzMzMwQQAAAAAAAABFANDMzMzMzEUBmZmZmZmYRQJqZmZmZmRFAzczMzMzMEUAAAAAAAAASQDQzMzMzMxJAZmZmZmZmEkCamZmZmZkSQM3MzMzMzBJAAAAAAAAAE0A0MzMzMzMTQGZmZmZmZhNAmpmZmZmZE0DNzMzMzMwTQAAAAAAAABRAMzMzMzMzFEBnZmZmZmYUQJqZmZmZmRRAzczMzMzMFEAAAAAAAAAVQDMzMzMzMxVAZ2ZmZmZmFUCamZmZmZkVQM3MzMzMzBVAAAAAAAAAFkAzMzMzMzMWQGdmZmZmZhZAmpmZmZmZFkDNzMzMzMwWQAAAAAAAABdANDMzMzMzF0BnZmZmZmYXQJqZmZmZmRdAzczMzMzMF0AAAAAAAAAYQDQzMzMzMxhAZ2ZmZmZmGECamZmZmZkYQM3MzMzMzBhAAAAAAAAAGUA0MzMzMzMZQGdmZmZmZhlAmpmZmZmZGUDNzMzMzMwZQAAAAAAAABpANDMzMzMzGkBnZmZmZmYaQJqZmZmZmRpAzczMzMzMGkAAAAAAAAAbQDQzMzMzMxtAZ2ZmZmZmG0CamZmZmZkbQM3MzMzMzBtAAAAAAAAAHEA0MzMzMzMcQGdmZmZmZhxAmpmZmZmZHEDNzMzMzMwcQAAAAAAAAB1ANDMzMzMzHUBnZmZmZmYdQJqZmZmZmR1AzczMzMzMHUAAAAAAAAAeQDQzMzMzMx5AZ2ZmZmZmHkCamZmZmZkeQM3MzMzMzB5AAAAAAAAAH0A0MzMzMzMfQGdmZmZmZh9AmpmZmZmZH0DNzMzMzMwfQAAAAAAAACBAmpmZmZkZIEA0MzMzMzMgQM3MzMzMTCBAZmZmZmZmIEAAAAAAAIAgQJqZmZmZmSBANDMzMzOzIEDNzMzMzMwgQGZmZmZm5iBAAAAAAAAAIUCamZmZmRkhQDQzMzMzMyFAzczMzMxMIUBmZmZmZmYhQAAAAAAAgCFAmpmZmZmZIUA0MzMzM7MhQM3MzMzMzCFAZmZmZmbmIUAAAAAAAAAiQJqZmZmZGSJAMzMzMzMzIkDNzMzMzEwiQGdmZmZmZiJAAAAAAACAIkCamZmZmZkiQDMzMzMzsyJAzczMzMzMIkBnZmZmZuYiQAAAAAAAACNAmpmZmZkZI0AzMzMzMzMjQM3MzMzMTCNAZ2ZmZmZmI0AAAAAAAIAjQJqZmZmZmSNAMzMzMzOzI0DNzMzMzMwjQGdmZmZm5iNAAAAAAAAAJECamZmZmRkkQDMzMzMzMyRAzczMzMxMJEBnZmZmZmYkQAAAAAAAgCRAmpmZmZmZJEAzMzMzM7MkQM3MzMzMzCRAZ2ZmZmbmJEAAAAAAAAAlQJqZmZmZGSVANDMzMzMzJUDNzMzMzEwlQGdmZmZmZiVAAAAAAACAJUCamZmZmZklQDQzMzMzsyVAzczMzMzMJUBnZmZmZuYlQAAAAAAAACZAmpmZmZkZJkA0MzMzMzMmQM3MzMzMTCZAZ2ZmZmZmJkAAAAAAAIAmQJqZmZmZmSZANDMzMzOzJkDNzMzMzMwmQGdmZmZm5iZAAAAAAAAAJ0CamZmZmRknQDQzMzMzMydAzczMzMxMJ0BnZmZmZmYnQAAAAAAAgCdAmpmZmZmZJ0A0MzMzM7MnQM3MzMzMzCdAZ2ZmZmbmJ0AAAAAAAAAoQA==","dtype":"float64","order":"little","shape":[221]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]}},"selected":{"id":"1165"},"selection_policy":{"id":"1164"}},"id":"1110","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1110"},"glyph":{"id":"1111"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1112"},"selection_glyph":null,"view":{"id":"1114"}},"id":"1113","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1172"},"ticker":{"id":"1132"}},"id":"1131","type":"LinearAxis"},{"attributes":{"source":{"id":"1110"}},"id":"1114","type":"CDSView"},{"attributes":{},"id":"1136","type":"BasicTicker"},{"attributes":{},"id":"1159","type":"BasicTickFormatter"},{"attributes":{},"id":"1132","type":"BasicTicker"},{"attributes":{},"id":"1096","type":"PanTool"},{"attributes":{"axis":{"id":"1131"},"ticker":null},"id":"1134","type":"Grid"},{"attributes":{"children":[[{"id":"1077"},0,0],[{"id":"1120"},1,0]]},"id":"1178","type":"GridBox"},{"attributes":{},"id":"1097","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1135"},"dimension":1,"ticker":null},"id":"1138","type":"Grid"},{"attributes":{},"id":"1100","type":"ResetTool"},{"attributes":{"formatter":{"id":"1170"},"ticker":{"id":"1136"}},"id":"1135","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1102"}},"id":"1098","type":"BoxZoomTool"},{"attributes":{},"id":"1099","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[221]}},"selected":{"id":"1176"},"selection_policy":{"id":"1175"}},"id":"1153","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1154","type":"Line"}],"root_ids":["1181"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"7ba76a94-0b24-41fd-82b6-399e088e11db","root_ids":["1181"],"roots":{"1181":"be337c6e-6ef9-41bc-a8ae-6fb167bbb78e"}}];
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