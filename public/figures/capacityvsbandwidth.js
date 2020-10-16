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
    
      
      
    
      var element = document.getElementById("33fe108e-f061-4641-b710-c2cff0a32435");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '33fe108e-f061-4641-b710-c2cff0a32435' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1db8e5ca-ff1e-409b-a0ef-34c7adf36c38":{"roots":{"references":[{"attributes":{"axis_label":"Bandwidth","formatter":{"id":"13327"},"ticker":{"id":"13298"}},"id":"13297","type":"LinearAxis"},{"attributes":{"axis_label":"Channel Capacity","formatter":{"id":"13325"},"ticker":{"id":"13302"}},"id":"13301","type":"LinearAxis"},{"attributes":{"overlay":{"id":"13311"}},"id":"13307","type":"BoxZoomTool"},{"attributes":{},"id":"13302","type":"BasicTicker"},{"attributes":{},"id":"13330","type":"UnionRenderers"},{"attributes":{"source":{"id":"13319"}},"id":"13323","type":"CDSView"},{"attributes":{},"id":"13325","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13305"},{"id":"13306"},{"id":"13307"},{"id":"13308"},{"id":"13309"},{"id":"13310"}]},"id":"13312","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13320","type":"Line"},{"attributes":{},"id":"13310","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13311","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13321","type":"Line"},{"attributes":{},"id":"13329","type":"Selection"},{"attributes":{},"id":"13305","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZuT+JQWDl0CLTP6wcWmQ7398/5/up8dJN5j946SYxCKzsP4XrUbgehfE/TmIQWDm09D8W2c73U+P3P99PjZduEvs/qMZLN4lB/j+4HoXrUbgAQBxaZDvfTwJAgZVDi2znA0Dl0CLb+X4FQEkMAiuHFgdArkfhehSuCEASg8DKoUUKQHa+nxov3QtA2/l+arx0DUA/NV66SQwPQFG4HoXrURBAA1YOLbIdEUC18/3UeOkRQGiR7Xw/tRJAGi/dJAaBE0DMzMzMzEwUQH5qvHSTGBVAMAisHFrkFUDipZvEILAWQJVDi2znexdAR+F6FK5HGED5fmq8dBMZQKscWmQ73xlAXbpJDAKrGkAPWDm0yHYbQMH1KFyPQhxAdJMYBFYOHUAmMQisHNodQNjO91PjpR5Aimzn+6lxH0AehetRuB4gQPdT46WbhCBA0CLb+X7qIECp8dJNYlAhQILAyqFFtiFAXI/C9SgcIkA1XrpJDIIiQA4tsp3v5yJA5/up8dJNI0DAyqFFtrMjQJmZmZmZGSRAcmiR7Xx/JEBLN4lBYOUkQCQGgZVDSyVA/dR46SaxJUDWo3A9ChcmQK9yaJHtfCZAiEFg5dDiJkBiEFg5tEgnQDvfT42XridAFK5H4XoUKEDtfD81XnooQMZLN4lB4ChAnxov3SRGKUB46SYxCKwpQFG4HoXrESpAKocW2c53KkADVg4tst0qQNwkBoGVQytAtfP91HipK0COwvUoXA8sQGiR7Xw/dSxAQWDl0CLbLEAaL90kBkEtQPP91Hjppi1AzMzMzMwMLkClm8QgsHIuQH5qvHST2C5AVzm0yHY+L0AwCKwcWqQvQIXrUbgeBTBA8tJNYhA4MEBeukkMAmswQMuhRbbznTBAN4lBYOXQMECkcD0K1wMxQBBYObTINjFAfT81XrppMUDpJjEIrJwxQFYOLbKdzzFAw/UoXI8CMkAv3SQGgTUyQJzEILByaDJACKwcWmSbMkB1kxgEVs4yQOF6FK5HATNATmIQWDk0M0C6SQwCK2czQCcxCKwcmjNAkxgEVg7NM0AAAAAAAAA0QA==","dtype":"float64","order":"little","shape":[101]},"y":[0.34594316186372975,0.6336360283336829,0.7912323482425537,0.8947779345609453,0.968923940849227,1.024941214637505,1.0688799395861728,1.1043253950139404,1.1335534398017013,1.1580847932921017,1.178977142271098,1.196990307145269,1.2126849239600537,1.226484092481711,1.2387133387577063,1.2496273420534796,1.2594282951615294,1.2682788141739918,1.276311203180075,1.2836342245185632,1.2903381267867347,1.2964984335747083,1.3021788361047522,1.3074334282272142,1.312308452208267,1.3168436760845685,1.3210734903814714,1.3250277888268547,1.328732681195596,1.3322110745204885,1.3354831502210611,1.338566758293883,1.341477744931431,1.3442302263421861,1.3468368188155009,1.3493088329853344,1.3516564386345848,1.3538888051284477,1.3560142215839404,1.3580402001097307,1.3599735648372384,1.3618205289750487,1.3635867617265054,1.365277446593917,1.3668973323366211,1.3684507776411907,1.369941790391326,1.3713740622844748,1.372750999426415,1.3740757494389033,1.3753512255356544,1.3765801279551835,1.3777649630831152,1.3789080605495785,1.3800115885476,1.3810775675848994,1.3821078828529154,1.3831042953727013,1.3840684520565385,1.3850018948064247,1.3859060687553608,1.3867823297441955,1.3876319511155653,1.3884561298965954,1.389255992433624,1.3900325995347795,1.3907869511698705,1.3915199907714355,1.3922326091758743,1.3929256482393633,1.3935999041594087,1.3942561305296797,1.3948950411527112,1.395517312632653,1.3961235867678514,1.3967144727610215,1.397290549263147,1.3978523662653823,1.398400446852118,1.3989352888268527,1.399457366221584,1.3999671306992947,1.4004650128582796,1.4009514234462679,1.4014267544914782,1.401891380357216,1.4023456587259568,1.4027899315183363,1.4032245257520704,1.4036497543452757,1.4040659168683907,1.4044733002484622,1.4048721794293102,1.405262817990746,1.4056454687297828,1.406020374206508,1.406387767257167,1.406747871476656,1.4071009016725646,1.4074470642927084,1.40778655782796]},"selected":{"id":"13329"},"selection_policy":{"id":"13330"}},"id":"13319","type":"ColumnDataSource"},{"attributes":{},"id":"13306","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"13297"}],"center":[{"id":"13300"},{"id":"13304"}],"left":[{"id":"13301"}],"renderers":[{"id":"13322"}],"title":{"id":"13287"},"toolbar":{"id":"13312"},"x_range":{"id":"13289"},"x_scale":{"id":"13293"},"y_range":{"id":"13291"},"y_scale":{"id":"13295"}},"id":"13286","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"13319"},"glyph":{"id":"13320"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13321"},"selection_glyph":null,"view":{"id":"13323"}},"id":"13322","type":"GlyphRenderer"},{"attributes":{},"id":"13289","type":"DataRange1d"},{"attributes":{"axis":{"id":"13297"},"ticker":null},"id":"13300","type":"Grid"},{"attributes":{},"id":"13327","type":"BasicTickFormatter"},{"attributes":{"text":"AWGN Channel Capacity for S/N0 = 1"},"id":"13287","type":"Title"},{"attributes":{},"id":"13293","type":"LinearScale"},{"attributes":{},"id":"13308","type":"SaveTool"},{"attributes":{},"id":"13298","type":"BasicTicker"},{"attributes":{},"id":"13291","type":"DataRange1d"},{"attributes":{},"id":"13295","type":"LinearScale"},{"attributes":{},"id":"13309","type":"ResetTool"},{"attributes":{"axis":{"id":"13301"},"dimension":1,"ticker":null},"id":"13304","type":"Grid"}],"root_ids":["13286"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"1db8e5ca-ff1e-409b-a0ef-34c7adf36c38","root_ids":["13286"],"roots":{"13286":"33fe108e-f061-4641-b710-c2cff0a32435"}}];
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