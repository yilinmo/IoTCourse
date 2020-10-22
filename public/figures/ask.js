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
    
      
      
    
      var element = document.getElementById("1de5b360-abf7-4369-9f9b-18c1f6b7fbdb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1de5b360-abf7-4369-9f9b-18c1f6b7fbdb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"443607b9-c7a4-4f39-b520-0f67c7990e13":{"roots":{"references":[{"attributes":{"formatter":{"id":"2945"},"ticker":{"id":"2898"}},"id":"2897","type":"LinearAxis"},{"attributes":{},"id":"2895","type":"LinearScale"},{"attributes":{"source":{"id":"2843"}},"id":"2847","type":"CDSView"},{"attributes":{},"id":"2829","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2882","type":"Line"},{"attributes":{},"id":"2902","type":"BasicTicker"},{"attributes":{},"id":"2898","type":"BasicTicker"},{"attributes":{"axis":{"id":"2897"},"ticker":null},"id":"2900","type":"Grid"},{"attributes":{"children":[[{"id":"2810"},0,0],[{"id":"2848"},1,0],[{"id":"2886"},2,0]]},"id":"2951","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2867"},{"id":"2868"},{"id":"2869"},{"id":"2870"},{"id":"2871"},{"id":"2872"}]},"id":"2874","type":"Toolbar"},{"attributes":{},"id":"2925","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2843"},"glyph":{"id":"2844"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2845"},"selection_glyph":null,"view":{"id":"2847"}},"id":"2846","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2901"},"dimension":1,"ticker":null},"id":"2904","type":"Grid"},{"attributes":{},"id":"2889","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"2845","type":"Step"},{"attributes":{},"id":"2891","type":"DataRange1d"},{"attributes":{},"id":"2871","type":"ResetTool"},{"attributes":{"formatter":{"id":"2943"},"ticker":{"id":"2902"}},"id":"2901","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.3090169943749474,0.5877852522924731,0.8090169943749475,0.9510565162951535,1.0,0.9510565162951535,0.8090169943749475,0.5877852522924732,0.3090169943749475,1.2246467991473532e-16,-0.30901699437494773,-0.5877852522924734,-0.8090169943749473,-0.9510565162951535,-1.0,-0.9510565162951536,-0.809016994374947,-0.5877852522924734,-0.3090169943749476,-2.4492935982947064e-16,0.3090169943749472,0.5877852522924736,0.8090169943749478,0.9510565162951538,1.0,0.9510565162951536,0.8090169943749477,0.5877852522924734,0.30901699437494606,3.6739403974420594e-16,-0.30901699437494706,-0.5877852522924728,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951538,-0.8090169943749477,-0.5877852522924735,-0.3090169943749462,-4.898587196589413e-16,1.2360679774997945,2.3511410091698908,3.2360679774997885,3.804226065180616,4.0,3.804226065180613,3.236067977499791,2.3511410091698886,1.2360679774997851,2.4492935982947065e-15,-1.236067977499794,-2.3511410091698903,-3.2360679774997925,-3.8042260651806137,-4.0,-3.804226065180615,-3.236067977499787,-2.3511410091698832,-1.2360679774997856,-2.9391523179536475e-15,1.2360679774997936,2.35114100916989,3.236067977499792,3.8042260651806132,4.0,3.8042260651806155,3.2360679774997876,2.3511410091698837,1.2360679774997863,3.429011037612589e-15,-1.2360679774997931,-2.35114100916989,-3.2360679774997916,-3.8042260651806132,-4.0,-3.8042260651806155,-3.2360679774997876,-2.351141009169884,-1.2360679774997867,-3.91886975727153e-15,0.6180339887498896,1.1755705045849503,1.6180339887498958,1.9021130325903066,2.0,1.9021130325903077,1.618033988749894,1.1755705045849423,0.6180339887498936,2.204364238465236e-15,-0.6180339887498894,-1.1755705045849503,-1.6180339887498956,-1.9021130325903064,-2.0,-1.9021130325903057,-1.6180339887498942,-1.1755705045849425,-0.6180339887498938,-2.4492935982947065e-15,0.6180339887499027,1.17557050458495,1.6180339887498996,1.9021130325903064,2.0,1.9021130325903057,1.61803398874989,1.1755705045849485,0.618033988749894,9.799650315725178e-15,-0.6180339887499025,-1.175570504584944,-1.6180339887498953,-1.9021130325903084,-2.0,-1.9021130325903037,-1.6180339887498945,-1.175570504584943,-0.618033988749901,-2.9391523179536475e-15,0.30901699437494773,0.5877852522924748,0.8090169943749497,0.9510565162951531,1.0,0.951056516295153,0.8090169943749452,0.5877852522924744,0.30901699437494723,-1.9606728399089416e-15,-0.30901699437495095,-0.5877852522924718,-0.8090169943749476,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749473,-0.5877852522924716,-0.3090169943749507,-1.7145055188062944e-15,0.30901699437494745,0.5877852522924746,0.8090169943749496,0.951056516295153,1.0,0.951056516295153,0.8090169943749453,0.5877852522924746,0.30901699437494745,5.3896838775215305e-15,-0.3090169943749507,-0.5877852522924716,-0.8090169943749473,-0.9510565162951541,-1.0,-0.951056516295152,-0.8090169943749476,-0.5877852522924718,-0.30901699437495095,-1.959434878635765e-15,0.6180339887498945,1.1755705045849374,1.6180339887498987,1.9021130325903104,2.0,1.9021130325903062,1.6180339887498993,1.1755705045849496,0.6180339887498819,-2.941628240500001e-15,-0.618033988749901,-1.175570504584943,-1.6180339887498945,-1.902113032590308,-2.0,-1.9021130325903042,-1.6180339887499036,-1.175570504584944,-0.6180339887498889,-4.408728476930472e-15,0.618033988749894,1.175570504584937,1.6180339887498985,1.9021130325903102,2.0,1.9021130325903064,1.6180339887498996,1.17557050458495,0.6180339887498824,1.1759085194360944e-14,-0.6180339887499006,-1.175570504584954,-1.6180339887498942,-1.902113032590308,-2.0,-1.9021130325903042,-1.6180339887498874,-1.1755705045849445,-0.6180339887498894,-4.898587196589413e-15,0.9270509831248404,1.7633557568774394,2.4270509831248472,2.853169548885465,3.0,2.8531695488854534,2.4270509831248246,1.7633557568774254,0.9270509831248446,-2.942866201773178e-15,-0.9270509831248501,-1.7633557568774303,-2.4270509831248535,-2.853169548885468,-3.0,-2.853169548885463,-2.427050983124819,-1.763355756877417,-0.9270509831248347,-2.939895094717554e-14,0.9270509831248599,1.7633557568774387,2.4270509831248344,2.8531695488854583,3.0,2.85316954888546,2.427050983124838,1.7633557568774088,0.9270509831248248,1.910820395051824e-14,-0.9270509831248293,-1.7633557568774472,-2.4270509831248406,-2.8531695488854614,-3.0,-2.853169548885457,-2.4270509831248317,-1.7633557568774352,-0.9270509831248153,-8.817456953860943e-15]},"selected":{"id":"2949"},"selection_policy":{"id":"2948"}},"id":"2919","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2881"},"glyph":{"id":"2882"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2883"},"selection_glyph":null,"view":{"id":"2885"}},"id":"2884","type":"GlyphRenderer"},{"attributes":{},"id":"2826","type":"BasicTicker"},{"attributes":{},"id":"2936","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"2873"}},"id":"2869","type":"BoxZoomTool"},{"attributes":{},"id":"2867","type":"PanTool"},{"attributes":{},"id":"2893","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2921","type":"Line"},{"attributes":{"source":{"id":"2881"}},"id":"2885","type":"CDSView"},{"attributes":{},"id":"2864","type":"BasicTicker"},{"attributes":{},"id":"2949","type":"Selection"},{"attributes":{"overlay":{"id":"2835"}},"id":"2831","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"2859"}],"center":[{"id":"2862"},{"id":"2866"}],"left":[{"id":"2863"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"2884"}],"title":{"id":"2849"},"toolbar":{"id":"2874"},"toolbar_location":null,"x_range":{"id":"2851"},"x_scale":{"id":"2855"},"y_range":{"id":"2853"},"y_scale":{"id":"2857"}},"id":"2848","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"2897"}],"center":[{"id":"2900"},{"id":"2904"}],"left":[{"id":"2901"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"2922"}],"title":{"id":"2887"},"toolbar":{"id":"2912"},"toolbar_location":null,"x_range":{"id":"2889"},"x_scale":{"id":"2893"},"y_range":{"id":"2891"},"y_scale":{"id":"2895"}},"id":"2886","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2920","type":"Line"},{"attributes":{},"id":"2909","type":"ResetTool"},{"attributes":{},"id":"2945","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"2952"},"toolbar_location":"above"},"id":"2953","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"2925"},"ticker":{"id":"2826"}},"id":"2825","type":"LinearAxis"},{"attributes":{},"id":"2830","type":"WheelZoomTool"},{"attributes":{"source":{"id":"2919"}},"id":"2923","type":"CDSView"},{"attributes":{"formatter":{"id":"2934"},"ticker":{"id":"2864"}},"id":"2863","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2936"},"ticker":{"id":"2860"}},"id":"2859","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEA=","dtype":"float64","order":"little","shape":[13]},"y":[0,0,1,1,0,1,0,0,0,1,1,0,0]},"selected":{"id":"2931"},"selection_policy":{"id":"2930"}},"id":"2843","type":"ColumnDataSource"},{"attributes":{},"id":"2860","type":"BasicTicker"},{"attributes":{"axis":{"id":"2825"},"dimension":1,"ticker":null},"id":"2828","type":"Grid"},{"attributes":{"axis":{"id":"2859"},"ticker":null},"id":"2862","type":"Grid"},{"attributes":{},"id":"2934","type":"BasicTickFormatter"},{"attributes":{},"id":"2813","type":"DataRange1d"},{"attributes":{"axis":{"id":"2863"},"dimension":1,"ticker":null},"id":"2866","type":"Grid"},{"attributes":{},"id":"2927","type":"BasicTickFormatter"},{"attributes":{},"id":"2834","type":"HelpTool"},{"attributes":{"text":"Baseband Signal"},"id":"2811","type":"Title"},{"attributes":{"below":[{"id":"2821"}],"center":[{"id":"2824"},{"id":"2828"}],"left":[{"id":"2825"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"2846"}],"title":{"id":"2811"},"toolbar":{"id":"2836"},"toolbar_location":null,"x_range":{"id":"2813"},"x_scale":{"id":"2817"},"y_range":{"id":"2815"},"y_scale":{"id":"2819"}},"id":"2810","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2905"},{"id":"2906"},{"id":"2907"},{"id":"2908"},{"id":"2909"},{"id":"2910"}]},"id":"2912","type":"Toolbar"},{"attributes":{"overlay":{"id":"2911"}},"id":"2907","type":"BoxZoomTool"},{"attributes":{},"id":"2819","type":"LinearScale"},{"attributes":{"data_source":{"id":"2919"},"glyph":{"id":"2920"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2921"},"selection_glyph":null,"view":{"id":"2923"}},"id":"2922","type":"GlyphRenderer"},{"attributes":{},"id":"2906","type":"WheelZoomTool"},{"attributes":{"text":"On-off Keying"},"id":"2849","type":"Title"},{"attributes":{},"id":"2822","type":"BasicTicker"},{"attributes":{},"id":"2931","type":"Selection"},{"attributes":{},"id":"2833","type":"ResetTool"},{"attributes":{},"id":"2908","type":"SaveTool"},{"attributes":{"formatter":{"id":"2927"},"ticker":{"id":"2822"}},"id":"2821","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"2844","type":"Step"},{"attributes":{},"id":"2905","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.3090169943749486,0.5877852522924727,0.8090169943749471,0.951056516295154,1.0,0.9510565162951532,0.8090169943749478,0.5877852522924721,0.3090169943749463,6.123233995736766e-16,-0.3090169943749485,-0.5877852522924726,-0.8090169943749481,-0.9510565162951534,-1.0,-0.9510565162951538,-0.8090169943749468,-0.5877852522924708,-0.3090169943749464,-7.347880794884119e-16,0.3090169943749484,0.5877852522924725,0.809016994374948,0.9510565162951533,1.0,0.9510565162951539,0.8090169943749469,0.5877852522924709,0.30901699437494656,8.572527594031472e-16,-0.3090169943749483,-0.5877852522924725,-0.8090169943749479,-0.9510565162951533,-1.0,-0.9510565162951539,-0.8090169943749469,-0.587785252292471,-0.3090169943749467,-9.797174393178826e-16,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.30901699437495134,0.587785252292475,0.8090169943749498,0.9510565162951532,1.0,0.9510565162951529,0.809016994374945,0.5877852522924742,0.309016994374947,4.899825157862589e-15,-0.3090169943749512,-0.587785252292472,-0.8090169943749477,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749472,-0.5877852522924715,-0.3090169943749505,-1.4695761589768238e-15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.309016994374947,0.5877852522924685,0.8090169943749492,0.9510565162951551,1.0,0.9510565162951532,0.8090169943749498,0.587785252292475,0.3090169943749412,5.879542597180472e-15,-0.3090169943749503,-0.587785252292477,-0.8090169943749471,-0.951056516295154,-1.0,-0.9510565162951521,-0.8090169943749437,-0.5877852522924722,-0.3090169943749447,-2.4492935982947065e-15,0.3090169943749468,0.5877852522924798,0.8090169943749491,0.951056516295155,1.0,0.9510565162951511,0.8090169943749416,0.5877852522924751,0.3090169943749482,-9.809554005910593e-16,-0.30901699437495006,-0.5877852522924768,-0.8090169943749511,-0.9510565162951561,-1.0,-0.9510565162951544,-0.8090169943749396,-0.5877852522924724,-0.3090169943749449,-9.799650315725178e-15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0]},"selected":{"id":"2940"},"selection_policy":{"id":"2939"}},"id":"2881","type":"ColumnDataSource"},{"attributes":{},"id":"2930","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2821"},"ticker":null},"id":"2824","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2829"},{"id":"2830"},{"id":"2831"},{"id":"2832"},{"id":"2833"},{"id":"2834"}]},"id":"2836","type":"Toolbar"},{"attributes":{},"id":"2910","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2835","type":"BoxAnnotation"},{"attributes":{},"id":"2943","type":"BasicTickFormatter"},{"attributes":{},"id":"2857","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"2836"},{"id":"2874"},{"id":"2912"}],"tools":[{"id":"2829"},{"id":"2830"},{"id":"2831"},{"id":"2832"},{"id":"2833"},{"id":"2834"},{"id":"2867"},{"id":"2868"},{"id":"2869"},{"id":"2870"},{"id":"2871"},{"id":"2872"},{"id":"2905"},{"id":"2906"},{"id":"2907"},{"id":"2908"},{"id":"2909"},{"id":"2910"}]},"id":"2952","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2911","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2873","type":"BoxAnnotation"},{"attributes":{},"id":"2853","type":"DataRange1d"},{"attributes":{},"id":"2815","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2883","type":"Line"},{"attributes":{},"id":"2939","type":"UnionRenderers"},{"attributes":{},"id":"2868","type":"WheelZoomTool"},{"attributes":{},"id":"2817","type":"LinearScale"},{"attributes":{},"id":"2832","type":"SaveTool"},{"attributes":{},"id":"2872","type":"HelpTool"},{"attributes":{},"id":"2948","type":"UnionRenderers"},{"attributes":{},"id":"2855","type":"LinearScale"},{"attributes":{},"id":"2940","type":"Selection"},{"attributes":{},"id":"2851","type":"DataRange1d"},{"attributes":{"children":[{"id":"2953"},{"id":"2951"}]},"id":"2954","type":"Column"},{"attributes":{"text":"4-ASK"},"id":"2887","type":"Title"},{"attributes":{},"id":"2870","type":"SaveTool"}],"root_ids":["2954"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"443607b9-c7a4-4f39-b520-0f67c7990e13","root_ids":["2954"],"roots":{"2954":"1de5b360-abf7-4369-9f9b-18c1f6b7fbdb"}}];
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