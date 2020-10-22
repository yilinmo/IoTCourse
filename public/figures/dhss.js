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
    
      
      
    
      var element = document.getElementById("1035365d-96c5-447a-bf6a-f417e6d295ac");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1035365d-96c5-447a-bf6a-f417e6d295ac' but no matching script tag was found.")
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
                    
                  var docs_json = '{"02d6487e-5e98-4dce-aebb-e3996a6043ca":{"roots":{"references":[{"attributes":{"data_source":{"id":"1077"},"glyph":{"id":"1078"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1079"},"selection_glyph":null,"view":{"id":"1081"}},"id":"1080","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1034"},"glyph":{"id":"1035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036"},"selection_glyph":null,"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1034"}},"id":"1038","type":"CDSView"},{"attributes":{"below":[{"id":"1093"}],"center":[{"id":"1096"},{"id":"1100"}],"left":[{"id":"1097"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1118"},{"id":"1123"}],"title":{"id":"1083"},"toolbar":{"id":"1108"},"toolbar_location":null,"x_range":{"id":"1085"},"x_scale":{"id":"1089"},"y_range":{"id":"1087"},"y_scale":{"id":"1091"}},"id":"1082","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"left":[{"id":"1016"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1037"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"toolbar_location":null,"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1107","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1077"}},"id":"1081","type":"CDSView"},{"attributes":{},"id":"1151","type":"UnionRenderers"},{"attributes":{"text":"Transmitted Signal"},"id":"1083","type":"Title"},{"attributes":{"text":"Baseband Signal"},"id":"1002","type":"Title"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1042","type":"DataRange1d"},{"attributes":{},"id":"1085","type":"DataRange1d"},{"attributes":{},"id":"1055","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[17]},"y":{"__ndarray__":"AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[17]}},"selected":{"id":"1152"},"selection_policy":{"id":"1153"}},"id":"1120","type":"ColumnDataSource"},{"attributes":{},"id":"1089","type":"LinearScale"},{"attributes":{"children":[{"id":"1158"},{"id":"1156"}]},"id":"1159","type":"Column"},{"attributes":{},"id":"1046","type":"LinearScale"},{"attributes":{"data_source":{"id":"1120"},"glyph":{"id":"1121"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1122"},"selection_glyph":null,"view":{"id":"1124"}},"id":"1123","type":"GlyphRenderer"},{"attributes":{"text":"PN Sequence"},"id":"1040","type":"Title"},{"attributes":{"source":{"id":"1120"}},"id":"1124","type":"CDSView"},{"attributes":{},"id":"1087","type":"DataRange1d"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{},"id":"1044","type":"DataRange1d"},{"attributes":{},"id":"1091","type":"LinearScale"},{"attributes":{"formatter":{"id":"1129"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1122","type":"Step"},{"attributes":{"formatter":{"id":"1149"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{},"id":"1048","type":"LinearScale"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{},"id":"1098","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"1157"},"toolbar_location":"above"},"id":"1158","type":"ToolbarBox"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"formatter":{"id":"1138"},"ticker":{"id":"1051"}},"id":"1050","type":"LinearAxis"},{"attributes":{"axis":{"id":"1093"},"ticker":null},"id":"1096","type":"Grid"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{},"id":"1051","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1127"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1127","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Step"},{"attributes":{"axis":{"id":"1097"},"dimension":1,"ticker":null},"id":"1100","type":"Grid"},{"attributes":{"axis":{"id":"1050"},"ticker":null},"id":"1053","type":"Grid"},{"attributes":{"formatter":{"id":"1147"},"ticker":{"id":"1098"}},"id":"1097","type":"LinearAxis"},{"attributes":{},"id":"1129","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1072"}},"id":"1076","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1073","type":"Step"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1117","type":"Step"},{"attributes":{"axis":{"id":"1054"},"dimension":1,"ticker":null},"id":"1057","type":"Grid"},{"attributes":{},"id":"1130","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADdAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAAO0AAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAEBA","dtype":"float64","order":"little","shape":[33]},"y":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},"selected":{"id":"1130"},"selection_policy":{"id":"1131"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1136"},"ticker":{"id":"1055"}},"id":"1054","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Step"},{"attributes":{},"id":"1131","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQA==","dtype":"float64","order":"little","shape":[17]},"y":{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8L8AAAAAAADwvw==","dtype":"float64","order":"little","shape":[17]}},"selected":{"id":"1150"},"selection_policy":{"id":"1151"}},"id":"1115","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"data_source":{"id":"1072"},"glyph":{"id":"1073"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1074"},"selection_glyph":null,"view":{"id":"1076"}},"id":"1075","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1115"}},"id":"1119","type":"CDSView"},{"attributes":{"below":[{"id":"1050"}],"center":[{"id":"1053"},{"id":"1057"}],"left":[{"id":"1054"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"1075"},{"id":"1080"}],"title":{"id":"1040"},"toolbar":{"id":"1065"},"toolbar_location":null,"x_range":{"id":"1042"},"x_scale":{"id":"1046"},"y_range":{"id":"1044"},"y_scale":{"id":"1048"}},"id":"1039","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"1001"},0,0],[{"id":"1039"},1,0],[{"id":"1082"},2,0]]},"id":"1156","type":"GridBox"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1116","type":"Step"},{"attributes":{"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1121","type":"Step"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{},"id":"1101","type":"PanTool"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1058","type":"PanTool"},{"attributes":{},"id":"1102","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"1027"},{"id":"1065"},{"id":"1108"}],"tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1058"},{"id":"1059"},{"id":"1060"},{"id":"1061"},{"id":"1062"},{"id":"1063"},{"id":"1101"},{"id":"1102"},{"id":"1103"},{"id":"1104"},{"id":"1105"},{"id":"1106"}]},"id":"1157","type":"ProxyToolbar"},{"attributes":{},"id":"1059","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1107"}},"id":"1103","type":"BoxZoomTool"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"overlay":{"id":"1064"}},"id":"1060","type":"BoxZoomTool"},{"attributes":{},"id":"1104","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1061","type":"SaveTool"},{"attributes":{},"id":"1105","type":"ResetTool"},{"attributes":{},"id":"1062","type":"ResetTool"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"data_source":{"id":"1115"},"glyph":{"id":"1116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1117"},"selection_glyph":null,"view":{"id":"1119"}},"id":"1118","type":"GlyphRenderer"},{"attributes":{},"id":"1106","type":"HelpTool"},{"attributes":{},"id":"1063","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1064","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1101"},{"id":"1102"},{"id":"1103"},{"id":"1104"},{"id":"1105"},{"id":"1106"}]},"id":"1108","type":"Toolbar"},{"attributes":{},"id":"1139","type":"Selection"},{"attributes":{},"id":"1142","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1078","type":"Step"},{"attributes":{},"id":"1152","type":"Selection"},{"attributes":{},"id":"1138","type":"BasicTickFormatter"},{"attributes":{},"id":"1153","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1058"},{"id":"1059"},{"id":"1060"},{"id":"1061"},{"id":"1062"},{"id":"1063"}]},"id":"1065","type":"Toolbar"},{"attributes":{},"id":"1149","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1074","type":"Step"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAwQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1139"},"selection_policy":{"id":"1140"}},"id":"1072","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAMEAAAAAAAAAxQAAAAAAAADJAAAAAAAAAM0AAAAAAAAA0QAAAAAAAADVAAAAAAAAANkAAAAAAAAA3QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA6QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAP0AAAAAAAABAQA==","dtype":"float64","order":"little","shape":[17]},"y":[-1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1]},"selected":{"id":"1141"},"selection_policy":{"id":"1142"}},"id":"1077","type":"ColumnDataSource"},{"attributes":{},"id":"1140","type":"UnionRenderers"},{"attributes":{},"id":"1136","type":"BasicTickFormatter"},{"attributes":{},"id":"1150","type":"Selection"},{"attributes":{},"id":"1141","type":"Selection"},{"attributes":{},"id":"1147","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#ff0000"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1079","type":"Step"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"}],"root_ids":["1159"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"02d6487e-5e98-4dce-aebb-e3996a6043ca","root_ids":["1159"],"roots":{"1159":"1035365d-96c5-447a-bf6a-f417e6d295ac"}}];
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