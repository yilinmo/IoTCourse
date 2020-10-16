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
    
      
      
    
      var element = document.getElementById("57f36ac7-2619-49c4-86b3-5664001755d1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '57f36ac7-2619-49c4-86b3-5664001755d1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"efb6cea3-45b2-42ae-88a1-f0a6fd120463":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11775","type":"Line"},{"attributes":{"source":{"id":"11697"}},"id":"11701","type":"CDSView"},{"attributes":{},"id":"11726","type":"HelpTool"},{"attributes":{},"id":"11760","type":"WheelZoomTool"},{"attributes":{},"id":"11673","type":"LinearScale"},{"attributes":{"data_source":{"id":"11773"},"glyph":{"id":"11774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11775"},"selection_glyph":null,"view":{"id":"11777"}},"id":"11776","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"11664"},0,0],[{"id":"11702"},1,0],[{"id":"11740"},2,0]]},"id":"11805","type":"GridBox"},{"attributes":{"source":{"id":"11735"}},"id":"11739","type":"CDSView"},{"attributes":{},"id":"11686","type":"SaveTool"},{"attributes":{"formatter":{"id":"11781"},"ticker":{"id":"11676"}},"id":"11675","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11737","type":"Line"},{"attributes":{"overlay":{"id":"11765"}},"id":"11761","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11727","type":"BoxAnnotation"},{"attributes":{},"id":"11724","type":"SaveTool"},{"attributes":{},"id":"11762","type":"SaveTool"},{"attributes":{"data_source":{"id":"11735"},"glyph":{"id":"11736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11737"},"selection_glyph":null,"view":{"id":"11739"}},"id":"11738","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"11755"},"dimension":1,"ticker":null},"id":"11758","type":"Grid"},{"attributes":{"toolbars":[{"id":"11690"},{"id":"11728"},{"id":"11766"}],"tools":[{"id":"11683"},{"id":"11684"},{"id":"11685"},{"id":"11686"},{"id":"11687"},{"id":"11688"},{"id":"11721"},{"id":"11722"},{"id":"11723"},{"id":"11724"},{"id":"11725"},{"id":"11726"},{"id":"11759"},{"id":"11760"},{"id":"11761"},{"id":"11762"},{"id":"11763"},{"id":"11764"}]},"id":"11806","type":"ProxyToolbar"},{"attributes":{},"id":"11725","type":"ResetTool"},{"attributes":{},"id":"11669","type":"DataRange1d"},{"attributes":{},"id":"11711","type":"LinearScale"},{"attributes":{},"id":"11779","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"11727"}},"id":"11723","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEA=","dtype":"float64","order":"little","shape":[13]},"y":[0,0,1,1,0,1,0,0,0,1,1,0,0]},"selected":{"id":"11783"},"selection_policy":{"id":"11784"}},"id":"11697","type":"ColumnDataSource"},{"attributes":{},"id":"11721","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"11699","type":"Step"},{"attributes":{"toolbar":{"id":"11806"},"toolbar_location":"above"},"id":"11807","type":"ToolbarBox"},{"attributes":{},"id":"11759","type":"PanTool"},{"attributes":{},"id":"11743","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11736","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11759"},{"id":"11760"},{"id":"11761"},{"id":"11762"},{"id":"11763"},{"id":"11764"}]},"id":"11766","type":"Toolbar"},{"attributes":{},"id":"11801","type":"Selection"},{"attributes":{"formatter":{"id":"11799"},"ticker":{"id":"11752"}},"id":"11751","type":"LinearAxis"},{"attributes":{"axis":{"id":"11675"},"ticker":null},"id":"11678","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11774","type":"Line"},{"attributes":{},"id":"11802","type":"UnionRenderers"},{"attributes":{},"id":"11688","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11765","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"11717"},"dimension":1,"ticker":null},"id":"11720","type":"Grid"},{"attributes":{"below":[{"id":"11751"}],"center":[{"id":"11754"},{"id":"11758"}],"left":[{"id":"11755"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"11776"}],"title":{"id":"11741"},"toolbar":{"id":"11766"},"toolbar_location":null,"x_range":{"id":"11743"},"x_scale":{"id":"11747"},"y_range":{"id":"11745"},"y_scale":{"id":"11749"}},"id":"11740","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11687","type":"ResetTool"},{"attributes":{},"id":"11745","type":"DataRange1d"},{"attributes":{},"id":"11671","type":"LinearScale"},{"attributes":{"overlay":{"id":"11689"}},"id":"11685","type":"BoxZoomTool"},{"attributes":{"text":"4-ASK"},"id":"11741","type":"Title"},{"attributes":{},"id":"11781","type":"BasicTickFormatter"},{"attributes":{},"id":"11718","type":"BasicTicker"},{"attributes":{"text":"Baseband Signal"},"id":"11665","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11721"},{"id":"11722"},{"id":"11723"},{"id":"11724"},{"id":"11725"},{"id":"11726"}]},"id":"11728","type":"Toolbar"},{"attributes":{},"id":"11684","type":"WheelZoomTool"},{"attributes":{},"id":"11676","type":"BasicTicker"},{"attributes":{},"id":"11749","type":"LinearScale"},{"attributes":{},"id":"11714","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11790"},"ticker":{"id":"11714"}},"id":"11713","type":"LinearAxis"},{"attributes":{},"id":"11667","type":"DataRange1d"},{"attributes":{"formatter":{"id":"11779"},"ticker":{"id":"11680"}},"id":"11679","type":"LinearAxis"},{"attributes":{"below":[{"id":"11675"}],"center":[{"id":"11678"},{"id":"11682"}],"left":[{"id":"11679"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"11700"}],"title":{"id":"11665"},"toolbar":{"id":"11690"},"toolbar_location":null,"x_range":{"id":"11667"},"x_scale":{"id":"11671"},"y_range":{"id":"11669"},"y_scale":{"id":"11673"}},"id":"11664","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11788","type":"BasicTickFormatter"},{"attributes":{"text":"On-off Keying"},"id":"11703","type":"Title"},{"attributes":{},"id":"11797","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.3090169943749474,0.5877852522924731,0.8090169943749475,0.9510565162951535,1.0,0.9510565162951535,0.8090169943749475,0.5877852522924732,0.3090169943749475,1.2246467991473532e-16,-0.30901699437494773,-0.5877852522924734,-0.8090169943749473,-0.9510565162951535,-1.0,-0.9510565162951536,-0.809016994374947,-0.5877852522924734,-0.3090169943749476,-2.4492935982947064e-16,0.3090169943749472,0.5877852522924736,0.8090169943749478,0.9510565162951538,1.0,0.9510565162951536,0.8090169943749477,0.5877852522924734,0.30901699437494606,3.6739403974420594e-16,-0.30901699437494706,-0.5877852522924728,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951538,-0.8090169943749477,-0.5877852522924735,-0.3090169943749462,-4.898587196589413e-16,1.2360679774997945,2.3511410091698908,3.2360679774997885,3.804226065180616,4.0,3.804226065180613,3.236067977499791,2.3511410091698886,1.2360679774997851,2.4492935982947065e-15,-1.236067977499794,-2.3511410091698903,-3.2360679774997925,-3.8042260651806137,-4.0,-3.804226065180615,-3.236067977499787,-2.3511410091698832,-1.2360679774997856,-2.9391523179536475e-15,1.2360679774997936,2.35114100916989,3.236067977499792,3.8042260651806132,4.0,3.8042260651806155,3.2360679774997876,2.3511410091698837,1.2360679774997863,3.429011037612589e-15,-1.2360679774997931,-2.35114100916989,-3.2360679774997916,-3.8042260651806132,-4.0,-3.8042260651806155,-3.2360679774997876,-2.351141009169884,-1.2360679774997867,-3.91886975727153e-15,0.6180339887498896,1.1755705045849503,1.6180339887498958,1.9021130325903066,2.0,1.9021130325903077,1.618033988749894,1.1755705045849423,0.6180339887498936,2.204364238465236e-15,-0.6180339887498894,-1.1755705045849503,-1.6180339887498956,-1.9021130325903064,-2.0,-1.9021130325903057,-1.6180339887498942,-1.1755705045849425,-0.6180339887498938,-2.4492935982947065e-15,0.6180339887499027,1.17557050458495,1.6180339887498996,1.9021130325903064,2.0,1.9021130325903057,1.61803398874989,1.1755705045849485,0.618033988749894,9.799650315725178e-15,-0.6180339887499025,-1.175570504584944,-1.6180339887498953,-1.9021130325903084,-2.0,-1.9021130325903037,-1.6180339887498945,-1.175570504584943,-0.618033988749901,-2.9391523179536475e-15,0.30901699437494773,0.5877852522924748,0.8090169943749497,0.9510565162951531,1.0,0.951056516295153,0.8090169943749452,0.5877852522924744,0.30901699437494723,-1.9606728399089416e-15,-0.30901699437495095,-0.5877852522924718,-0.8090169943749476,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749473,-0.5877852522924716,-0.3090169943749507,-1.7145055188062944e-15,0.30901699437494745,0.5877852522924746,0.8090169943749496,0.951056516295153,1.0,0.951056516295153,0.8090169943749453,0.5877852522924746,0.30901699437494745,5.3896838775215305e-15,-0.3090169943749507,-0.5877852522924716,-0.8090169943749473,-0.9510565162951541,-1.0,-0.951056516295152,-0.8090169943749476,-0.5877852522924718,-0.30901699437495095,-1.959434878635765e-15,0.6180339887498945,1.1755705045849374,1.6180339887498987,1.9021130325903104,2.0,1.9021130325903062,1.6180339887498993,1.1755705045849496,0.6180339887498819,-2.941628240500001e-15,-0.618033988749901,-1.175570504584943,-1.6180339887498945,-1.902113032590308,-2.0,-1.9021130325903042,-1.6180339887499036,-1.175570504584944,-0.6180339887498889,-4.408728476930472e-15,0.618033988749894,1.175570504584937,1.6180339887498985,1.9021130325903102,2.0,1.9021130325903064,1.6180339887498996,1.17557050458495,0.6180339887498824,1.1759085194360944e-14,-0.6180339887499006,-1.175570504584954,-1.6180339887498942,-1.902113032590308,-2.0,-1.9021130325903042,-1.6180339887498874,-1.1755705045849445,-0.6180339887498894,-4.898587196589413e-15,0.9270509831248404,1.7633557568774394,2.4270509831248472,2.853169548885465,3.0,2.8531695488854534,2.4270509831248246,1.7633557568774254,0.9270509831248446,-2.942866201773178e-15,-0.9270509831248501,-1.7633557568774303,-2.4270509831248535,-2.853169548885468,-3.0,-2.853169548885463,-2.427050983124819,-1.763355756877417,-0.9270509831248347,-2.939895094717554e-14,0.9270509831248599,1.7633557568774387,2.4270509831248344,2.8531695488854583,3.0,2.85316954888546,2.427050983124838,1.7633557568774088,0.9270509831248248,1.910820395051824e-14,-0.9270509831248293,-1.7633557568774472,-2.4270509831248406,-2.8531695488854614,-3.0,-2.853169548885457,-2.4270509831248317,-1.7633557568774352,-0.9270509831248153,-8.817456953860943e-15]},"selected":{"id":"11801"},"selection_policy":{"id":"11802"}},"id":"11773","type":"ColumnDataSource"},{"attributes":{},"id":"11756","type":"BasicTicker"},{"attributes":{},"id":"11763","type":"ResetTool"},{"attributes":{},"id":"11792","type":"Selection"},{"attributes":{"formatter":{"id":"11788"},"ticker":{"id":"11718"}},"id":"11717","type":"LinearAxis"},{"attributes":{"children":[{"id":"11807"},{"id":"11805"}]},"id":"11808","type":"Column"},{"attributes":{"below":[{"id":"11713"}],"center":[{"id":"11716"},{"id":"11720"}],"left":[{"id":"11717"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"11738"}],"title":{"id":"11703"},"toolbar":{"id":"11728"},"toolbar_location":null,"x_range":{"id":"11705"},"x_scale":{"id":"11709"},"y_range":{"id":"11707"},"y_scale":{"id":"11711"}},"id":"11702","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"11697"},"glyph":{"id":"11698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11699"},"selection_glyph":null,"view":{"id":"11701"}},"id":"11700","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11773"}},"id":"11777","type":"CDSView"},{"attributes":{},"id":"11683","type":"PanTool"},{"attributes":{},"id":"11790","type":"BasicTickFormatter"},{"attributes":{},"id":"11752","type":"BasicTicker"},{"attributes":{},"id":"11709","type":"LinearScale"},{"attributes":{},"id":"11783","type":"Selection"},{"attributes":{},"id":"11722","type":"WheelZoomTool"},{"attributes":{},"id":"11799","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"11698","type":"Step"},{"attributes":{},"id":"11764","type":"HelpTool"},{"attributes":{},"id":"11793","type":"UnionRenderers"},{"attributes":{},"id":"11707","type":"DataRange1d"},{"attributes":{"axis":{"id":"11751"},"ticker":null},"id":"11754","type":"Grid"},{"attributes":{},"id":"11680","type":"BasicTicker"},{"attributes":{},"id":"11784","type":"UnionRenderers"},{"attributes":{"axis":{"id":"11713"},"ticker":null},"id":"11716","type":"Grid"},{"attributes":{"formatter":{"id":"11797"},"ticker":{"id":"11756"}},"id":"11755","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.3090169943749486,0.5877852522924727,0.8090169943749471,0.951056516295154,1.0,0.9510565162951532,0.8090169943749478,0.5877852522924721,0.3090169943749463,6.123233995736766e-16,-0.3090169943749485,-0.5877852522924726,-0.8090169943749481,-0.9510565162951534,-1.0,-0.9510565162951538,-0.8090169943749468,-0.5877852522924708,-0.3090169943749464,-7.347880794884119e-16,0.3090169943749484,0.5877852522924725,0.809016994374948,0.9510565162951533,1.0,0.9510565162951539,0.8090169943749469,0.5877852522924709,0.30901699437494656,8.572527594031472e-16,-0.3090169943749483,-0.5877852522924725,-0.8090169943749479,-0.9510565162951533,-1.0,-0.9510565162951539,-0.8090169943749469,-0.587785252292471,-0.3090169943749467,-9.797174393178826e-16,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.30901699437495134,0.587785252292475,0.8090169943749498,0.9510565162951532,1.0,0.9510565162951529,0.809016994374945,0.5877852522924742,0.309016994374947,4.899825157862589e-15,-0.3090169943749512,-0.587785252292472,-0.8090169943749477,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749472,-0.5877852522924715,-0.3090169943749505,-1.4695761589768238e-15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.309016994374947,0.5877852522924685,0.8090169943749492,0.9510565162951551,1.0,0.9510565162951532,0.8090169943749498,0.587785252292475,0.3090169943749412,5.879542597180472e-15,-0.3090169943749503,-0.587785252292477,-0.8090169943749471,-0.951056516295154,-1.0,-0.9510565162951521,-0.8090169943749437,-0.5877852522924722,-0.3090169943749447,-2.4492935982947065e-15,0.3090169943749468,0.5877852522924798,0.8090169943749491,0.951056516295155,1.0,0.9510565162951511,0.8090169943749416,0.5877852522924751,0.3090169943749482,-9.809554005910593e-16,-0.30901699437495006,-0.5877852522924768,-0.8090169943749511,-0.9510565162951561,-1.0,-0.9510565162951544,-0.8090169943749396,-0.5877852522924724,-0.3090169943749449,-9.799650315725178e-15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0]},"selected":{"id":"11792"},"selection_policy":{"id":"11793"}},"id":"11735","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"11679"},"dimension":1,"ticker":null},"id":"11682","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11683"},{"id":"11684"},{"id":"11685"},{"id":"11686"},{"id":"11687"},{"id":"11688"}]},"id":"11690","type":"Toolbar"},{"attributes":{},"id":"11705","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11689","type":"BoxAnnotation"},{"attributes":{},"id":"11747","type":"LinearScale"}],"root_ids":["11808"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"efb6cea3-45b2-42ae-88a1-f0a6fd120463","root_ids":["11808"],"roots":{"11808":"57f36ac7-2619-49c4-86b3-5664001755d1"}}];
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