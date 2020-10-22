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
    
      
      
    
      var element = document.getElementById("fab7a758-e774-46ff-b235-7fbbed0be040");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fab7a758-e774-46ff-b235-7fbbed0be040' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5dcd10ee-314a-48b1-9240-d41d8c8457fa":{"roots":{"references":[{"attributes":{"source":{"id":"1044"}},"id":"1048","type":"CDSView"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1044"},"glyph":{"id":"1045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1046"},"selection_glyph":null,"view":{"id":"1048"}},"id":"1047","type":"GlyphRenderer"},{"attributes":{},"id":"1072","type":"Selection"},{"attributes":{"source":{"id":"1039"}},"id":"1043","type":"CDSView"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6},"y":{"value":1}},"id":"1050","type":"Rect"},{"attributes":{},"id":"1073","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3},"y":{"value":1}},"id":"1046","type":"Rect"},{"attributes":{},"id":"1074","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"1076"},"selection_policy":{"id":"1075"}},"id":"1044","type":"ColumnDataSource"},{"attributes":{},"id":"1075","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1076","type":"Selection"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"left":[{"id":"1016"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"1037"},{"id":"1042"},{"id":"1047"},{"id":"1052"},{"id":"1057"},{"id":"1062"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1},"y":{"value":1}},"id":"1035","type":"Rect"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3},"y":{"value":1}},"id":"1045","type":"Rect"},{"attributes":{},"id":"1077","type":"UnionRenderers"},{"attributes":{},"id":"1078","type":"Selection"},{"attributes":{"text":"Collision"},"id":"1002","type":"Title"},{"attributes":{"data_source":{"id":"1049"},"glyph":{"id":"1050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1051"},"selection_glyph":null,"view":{"id":"1053"}},"id":"1052","type":"GlyphRenderer"},{"attributes":{},"id":"1079","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1078"},"selection_policy":{"id":"1077"}},"id":"1049","type":"ColumnDataSource"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1080","type":"Selection"},{"attributes":{},"id":"1081","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6},"y":{"value":1}},"id":"1051","type":"Rect"},{"attributes":{"axis_label":"Time","formatter":{"id":"1068"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"source":{"id":"1049"}},"id":"1053","type":"CDSView"},{"attributes":{},"id":"1082","type":"Selection"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"data":{},"selected":{"id":"1080"},"selection_policy":{"id":"1079"}},"id":"1054","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1054"},"glyph":{"id":"1055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1056"},"selection_glyph":null,"view":{"id":"1058"}},"id":"1057","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1039"},"glyph":{"id":"1040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1041"},"selection_glyph":null,"view":{"id":"1043"}},"id":"1042","type":"GlyphRenderer"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff0000"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":4.5},"y":{"value":2}},"id":"1056","type":"Rect"},{"attributes":{"axis":{"id":"1012"},"ticker":null,"visible":false},"id":"1015","type":"Grid"},{"attributes":{"source":{"id":"1054"}},"id":"1058","type":"CDSView"},{"attributes":{"data_source":{"id":"1034"},"glyph":{"id":"1035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036"},"selection_glyph":null,"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1034"}},"id":"1038","type":"CDSView"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null,"visible":false},"id":"1019","type":"Grid"},{"attributes":{"data":{},"selected":{"id":"1082"},"selection_policy":{"id":"1081"}},"id":"1059","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1067"},"major_label_overrides":{"1":"Node 1","2":"Node 2"},"ticker":{"id":"1064"}},"id":"1016","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#ff0000"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":5},"y":{"value":1}},"id":"1060","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2},"y":{"value":2}},"id":"1041","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"1072"},"selection_policy":{"id":"1071"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1059"},"glyph":{"id":"1060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1061"},"selection_glyph":null,"view":{"id":"1063"}},"id":"1062","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1},"y":{"value":1}},"id":"1036","type":"Rect"},{"attributes":{"fill_color":{"value":"#ff0000"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":4.5},"y":{"value":2}},"id":"1055","type":"Rect"},{"attributes":{"ticks":[1,2]},"id":"1064","type":"FixedTicker"},{"attributes":{"data":{},"selected":{"id":"1074"},"selection_policy":{"id":"1073"}},"id":"1039","type":"ColumnDataSource"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff0000"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":5},"y":{"value":1}},"id":"1061","type":"Rect"},{"attributes":{"source":{"id":"1059"}},"id":"1063","type":"CDSView"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{},"id":"1067","type":"BasicTickFormatter"},{"attributes":{},"id":"1068","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2},"y":{"value":2}},"id":"1040","type":"Rect"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"5dcd10ee-314a-48b1-9240-d41d8c8457fa","root_ids":["1001"],"roots":{"1001":"fab7a758-e774-46ff-b235-7fbbed0be040"}}];
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