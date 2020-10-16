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
    
      
      
    
      var element = document.getElementById("9183530f-b130-491e-b59b-5ab7c3275556");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9183530f-b130-491e-b59b-5ab7c3275556' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4e99ef0d-1726-4474-8b2b-2c770da91898":{"roots":{"references":[{"attributes":{},"id":"11929","type":"HelpTool"},{"attributes":{"formatter":{"id":"11984"},"ticker":{"id":"11917"}},"id":"11916","type":"LinearAxis"},{"attributes":{"below":[{"id":"11916"}],"center":[{"id":"11919"},{"id":"11923"}],"left":[{"id":"11920"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"11941"}],"title":{"id":"11906"},"toolbar":{"id":"11931"},"toolbar_location":null,"x_range":{"id":"11908"},"x_scale":{"id":"11912"},"y_range":{"id":"11910"},"y_scale":{"id":"11914"}},"id":"11905","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"11916"},"ticker":null},"id":"11919","type":"Grid"},{"attributes":{},"id":"11991","type":"BasicTickFormatter"},{"attributes":{},"id":"11967","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11968","type":"BoxAnnotation"},{"attributes":{},"id":"11921","type":"BasicTicker"},{"attributes":{},"id":"11987","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11924"},{"id":"11925"},{"id":"11926"},{"id":"11927"},{"id":"11928"},{"id":"11929"}]},"id":"11931","type":"Toolbar"},{"attributes":{},"id":"11946","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.3090169943749474,0.5877852522924731,0.8090169943749475,0.9510565162951535,1.0,0.9510565162951535,0.8090169943749475,0.5877852522924732,0.3090169943749475,1.2246467991473532e-16,-0.30901699437494773,-0.5877852522924734,-0.8090169943749473,-0.9510565162951535,-1.0,-0.9510565162951536,-0.809016994374947,-0.5877852522924734,-0.3090169943749476,-2.4492935982947064e-16,0.3090169943749472,0.5877852522924736,0.8090169943749478,0.9510565162951538,1.0,0.9510565162951536,0.8090169943749477,0.5877852522924734,0.30901699437494606,3.6739403974420594e-16,-0.30901699437494706,-0.5877852522924728,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951538,-0.8090169943749477,-0.5877852522924735,-0.3090169943749462,-4.898587196589413e-16,0.5877852522924751,0.9510565162951533,0.9510565162951539,0.5877852522924711,1.102182119232618e-15,-0.5877852522924751,-0.9510565162951532,-0.9510565162951529,-0.5877852522924712,-1.2246467991473533e-15,0.587785252292475,0.9510565162951532,0.9510565162951529,0.5877852522924742,4.899825157862589e-15,-0.587785252292472,-0.9510565162951542,-0.9510565162951519,-0.5877852522924715,-1.4695761589768238e-15,0.5877852522924748,0.9510565162951531,0.951056516295153,0.5877852522924744,-1.9606728399089416e-15,-0.5877852522924718,-0.9510565162951542,-0.9510565162951519,-0.5877852522924716,-1.7145055188062944e-15,0.5877852522924746,0.951056516295153,0.951056516295153,0.5877852522924746,5.3896838775215305e-15,-0.5877852522924716,-0.9510565162951541,-0.951056516295152,-0.5877852522924718,-1.959434878635765e-15,0.3090169943749448,0.5877852522924751,0.8090169943749479,0.9510565162951533,1.0,0.9510565162951539,0.809016994374947,0.5877852522924711,0.3090169943749468,1.102182119232618e-15,-0.3090169943749447,-0.5877852522924751,-0.8090169943749478,-0.9510565162951532,-1.0,-0.9510565162951529,-0.8090169943749471,-0.5877852522924712,-0.3090169943749469,-1.2246467991473533e-15,0.5877852522924798,0.951056516295155,0.9510565162951511,0.5877852522924751,-9.809554005910593e-16,-0.5877852522924768,-0.9510565162951561,-0.9510565162951544,-0.5877852522924724,-9.799650315725178e-15,0.5877852522924796,0.9510565162951528,0.9510565162951533,0.5877852522924696,6.369401316839413e-15,-0.5877852522924824,-0.9510565162951538,-0.9510565162951523,-0.5877852522924784,-2.9391523179536475e-15,0.30901699437494773,0.5877852522924748,0.8090169943749497,0.9510565162951531,1.0,0.951056516295153,0.8090169943749452,0.5877852522924744,0.30901699437494723,-1.9606728399089416e-15,-0.30901699437495095,-0.5877852522924718,-0.8090169943749476,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749473,-0.5877852522924716,-0.3090169943749507,-1.7145055188062944e-15,0.30901699437494745,0.5877852522924746,0.8090169943749496,0.951056516295153,1.0,0.951056516295153,0.8090169943749453,0.5877852522924746,0.30901699437494745,5.3896838775215305e-15,-0.3090169943749507,-0.5877852522924716,-0.8090169943749473,-0.9510565162951541,-1.0,-0.951056516295152,-0.8090169943749476,-0.5877852522924718,-0.30901699437495095,-1.959434878635765e-15,0.30901699437494723,0.5877852522924687,0.8090169943749493,0.9510565162951552,1.0,0.9510565162951531,0.8090169943749497,0.5877852522924748,0.30901699437494096,-1.4708141202500005e-15,-0.3090169943749505,-0.5877852522924715,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951521,-0.8090169943749518,-0.587785252292472,-0.30901699437494445,-2.204364238465236e-15,0.5877852522924725,0.95105651629515,0.9510565162951516,0.5877852522924653,9.784794780447059e-16,-0.5877852522924752,-0.9510565162951511,-0.951056516295155,-0.5877852522924625,-1.1759085194360944e-14,0.587785252292478,0.9510565162951565,0.951056516295154,0.5877852522924712,8.328836195475178e-15,-0.5877852522924808,-0.9510565162951575,-0.9510565162951529,-0.5877852522924685,-4.898587196589413e-15,0.587785252292472,0.9510565162951586,0.9510565162951519,0.5877852522924657,1.567919291290565e-14,-0.5877852522924862,-0.9510565162951596,-0.9510565162951552,-0.5877852522924744,1.9619108011821185e-15,0.5877852522924776,0.9510565162951563,0.9510565162951496,0.5877852522924601,8.81869491513412e-15,-0.5877852522924688,-0.9510565162951619,-0.951056516295153,-0.5877852522924688,-1.9599300631450357e-14,0.3090169943749533,0.5877852522924796,0.8090169943749448,0.9510565162951528,1.0,0.9510565162951533,0.8090169943749459,0.5877852522924696,0.3090169943749416,6.369401316839413e-15,-0.30901699437494307,-0.5877852522924824,-0.8090169943749468,-0.9510565162951538,-1.0,-0.9510565162951523,-0.8090169943749439,-0.5877852522924784,-0.3090169943749384,-2.9391523179536475e-15]},"selected":{"id":"11995"},"selection_policy":{"id":"11996"}},"id":"11976","type":"ColumnDataSource"},{"attributes":{},"id":"11995","type":"Selection"},{"attributes":{"data_source":{"id":"11938"},"glyph":{"id":"11939"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11940"},"selection_glyph":null,"view":{"id":"11942"}},"id":"11941","type":"GlyphRenderer"},{"attributes":{},"id":"11984","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11954"}],"center":[{"id":"11957"},{"id":"11961"}],"left":[{"id":"11958"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"11979"}],"title":{"id":"11944"},"toolbar":{"id":"11969"},"toolbar_location":null,"x_range":{"id":"11946"},"x_scale":{"id":"11950"},"y_range":{"id":"11948"},"y_scale":{"id":"11952"}},"id":"11943","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Baseband Signal"},"id":"11906","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11962"},{"id":"11963"},{"id":"11964"},{"id":"11965"},{"id":"11966"},{"id":"11967"}]},"id":"11969","type":"Toolbar"},{"attributes":{"source":{"id":"11976"}},"id":"11980","type":"CDSView"},{"attributes":{},"id":"11963","type":"WheelZoomTool"},{"attributes":{},"id":"11986","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"11940","type":"Step"},{"attributes":{},"id":"11996","type":"UnionRenderers"},{"attributes":{},"id":"11966","type":"ResetTool"},{"attributes":{},"id":"11912","type":"LinearScale"},{"attributes":{},"id":"11908","type":"DataRange1d"},{"attributes":{"text":"Frequency-Shift Keying"},"id":"11944","type":"Title"},{"attributes":{"formatter":{"id":"11993"},"ticker":{"id":"11955"}},"id":"11954","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"12000"},"toolbar_location":"above"},"id":"12001","type":"ToolbarBox"},{"attributes":{},"id":"11924","type":"PanTool"},{"attributes":{},"id":"11959","type":"BasicTicker"},{"attributes":{},"id":"11910","type":"DataRange1d"},{"attributes":{},"id":"11948","type":"DataRange1d"},{"attributes":{"children":[[{"id":"11905"},0,0],[{"id":"11943"},1,0]]},"id":"11999","type":"GridBox"},{"attributes":{},"id":"11928","type":"ResetTool"},{"attributes":{"axis":{"id":"11920"},"dimension":1,"ticker":null},"id":"11923","type":"Grid"},{"attributes":{"children":[{"id":"12001"},{"id":"11999"}]},"id":"12002","type":"Column"},{"attributes":{"overlay":{"id":"11930"}},"id":"11926","type":"BoxZoomTool"},{"attributes":{},"id":"11952","type":"LinearScale"},{"attributes":{},"id":"11962","type":"PanTool"},{"attributes":{"formatter":{"id":"11991"},"ticker":{"id":"11959"}},"id":"11958","type":"LinearAxis"},{"attributes":{},"id":"11950","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11930","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"11982"},"ticker":{"id":"11921"}},"id":"11920","type":"LinearAxis"},{"attributes":{},"id":"11927","type":"SaveTool"},{"attributes":{},"id":"11925","type":"WheelZoomTool"},{"attributes":{},"id":"11982","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEA=","dtype":"float64","order":"little","shape":[13]},"y":[0,0,1,1,0,1,0,0,0,1,1,0,0]},"selected":{"id":"11986"},"selection_policy":{"id":"11987"}},"id":"11938","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11938"}},"id":"11942","type":"CDSView"},{"attributes":{},"id":"11917","type":"BasicTicker"},{"attributes":{},"id":"11993","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"11976"},"glyph":{"id":"11977"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11978"},"selection_glyph":null,"view":{"id":"11980"}},"id":"11979","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11977","type":"Line"},{"attributes":{},"id":"11955","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11968"}},"id":"11964","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11978","type":"Line"},{"attributes":{"toolbars":[{"id":"11931"},{"id":"11969"}],"tools":[{"id":"11924"},{"id":"11925"},{"id":"11926"},{"id":"11927"},{"id":"11928"},{"id":"11929"},{"id":"11962"},{"id":"11963"},{"id":"11964"},{"id":"11965"},{"id":"11966"},{"id":"11967"}]},"id":"12000","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"11954"},"ticker":null},"id":"11957","type":"Grid"},{"attributes":{"axis":{"id":"11958"},"dimension":1,"ticker":null},"id":"11961","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"11939","type":"Step"},{"attributes":{},"id":"11914","type":"LinearScale"},{"attributes":{},"id":"11965","type":"SaveTool"}],"root_ids":["12002"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"4e99ef0d-1726-4474-8b2b-2c770da91898","root_ids":["12002"],"roots":{"12002":"9183530f-b130-491e-b59b-5ab7c3275556"}}];
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