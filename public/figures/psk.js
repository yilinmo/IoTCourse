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
    
      
      
    
      var element = document.getElementById("38f59171-08ea-4216-aff4-fadfde45d94d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '38f59171-08ea-4216-aff4-fadfde45d94d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c9ed9a3c-c79b-4496-8110-4ed1482147d3":{"roots":{"references":[{"attributes":{},"id":"12087","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"12102","type":"Step"},{"attributes":{},"id":"12146","type":"DataRange1d"},{"attributes":{},"id":"12182","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12168"}},"id":"12164","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"12092"}},"id":"12088","type":"BoxZoomTool"},{"attributes":{},"id":"12083","type":"BasicTicker"},{"attributes":{},"id":"12162","type":"PanTool"},{"attributes":{},"id":"12191","type":"BasicTickFormatter"},{"attributes":{},"id":"12090","type":"ResetTool"},{"attributes":{},"id":"12195","type":"Selection"},{"attributes":{},"id":"12163","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12130","type":"BoxAnnotation"},{"attributes":{},"id":"12089","type":"SaveTool"},{"attributes":{"formatter":{"id":"12200"},"ticker":{"id":"12159"}},"id":"12158","type":"LinearAxis"},{"attributes":{},"id":"12076","type":"LinearScale"},{"attributes":{"formatter":{"id":"12182"},"ticker":{"id":"12083"}},"id":"12082","type":"LinearAxis"},{"attributes":{},"id":"12125","type":"WheelZoomTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12177","type":"Line"},{"attributes":{"axis":{"id":"12082"},"dimension":1,"ticker":null},"id":"12085","type":"Grid"},{"attributes":{"text":"Quadrature-PSK"},"id":"12144","type":"Title"},{"attributes":{},"id":"12079","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12162"},{"id":"12163"},{"id":"12164"},{"id":"12165"},{"id":"12166"},{"id":"12167"}]},"id":"12169","type":"Toolbar"},{"attributes":{},"id":"12124","type":"PanTool"},{"attributes":{"toolbars":[{"id":"12093"},{"id":"12131"},{"id":"12169"}],"tools":[{"id":"12086"},{"id":"12087"},{"id":"12088"},{"id":"12089"},{"id":"12090"},{"id":"12091"},{"id":"12124"},{"id":"12125"},{"id":"12126"},{"id":"12127"},{"id":"12128"},{"id":"12129"},{"id":"12162"},{"id":"12163"},{"id":"12164"},{"id":"12165"},{"id":"12166"},{"id":"12167"}]},"id":"12209","type":"ProxyToolbar"},{"attributes":{},"id":"12070","type":"DataRange1d"},{"attributes":{"text":"Baseband Signal"},"id":"12068","type":"Title"},{"attributes":{},"id":"12091","type":"HelpTool"},{"attributes":{},"id":"12127","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12168","type":"BoxAnnotation"},{"attributes":{},"id":"12128","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12140","type":"Line"},{"attributes":{"formatter":{"id":"12202"},"ticker":{"id":"12155"}},"id":"12154","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAABAAAAAAAAACEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAGEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACZAAAAAAAAAKEA=","dtype":"float64","order":"little","shape":[13]},"y":[0,0,1,1,0,1,0,0,0,1,1,0,0]},"selected":{"id":"12186"},"selection_policy":{"id":"12187"}},"id":"12100","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"12116"},"ticker":null},"id":"12119","type":"Grid"},{"attributes":{"below":[{"id":"12116"}],"center":[{"id":"12119"},{"id":"12123"}],"left":[{"id":"12120"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"12141"}],"title":{"id":"12106"},"toolbar":{"id":"12131"},"toolbar_location":null,"x_range":{"id":"12108"},"x_scale":{"id":"12112"},"y_range":{"id":"12110"},"y_scale":{"id":"12114"}},"id":"12105","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12205","type":"UnionRenderers"},{"attributes":{},"id":"12193","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12130"}},"id":"12126","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.0,0.3090169943749474,0.5877852522924731,0.8090169943749475,0.9510565162951535,1.0,0.9510565162951535,0.8090169943749475,0.5877852522924732,0.3090169943749475,1.2246467991473532e-16,-0.30901699437494773,-0.5877852522924734,-0.8090169943749473,-0.9510565162951535,-1.0,-0.9510565162951536,-0.809016994374947,-0.5877852522924734,-0.3090169943749476,-2.4492935982947064e-16,0.3090169943749472,0.5877852522924736,0.8090169943749478,0.9510565162951538,1.0,0.9510565162951536,0.8090169943749477,0.5877852522924734,0.30901699437494606,3.6739403974420594e-16,-0.30901699437494706,-0.5877852522924728,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951538,-0.8090169943749477,-0.5877852522924735,-0.3090169943749462,-4.898587196589413e-16,-0.3090169943749486,-0.5877852522924727,-0.8090169943749471,-0.951056516295154,-1.0,-0.9510565162951532,-0.8090169943749478,-0.5877852522924721,-0.3090169943749463,-6.123233995736766e-16,0.3090169943749485,0.5877852522924726,0.8090169943749481,0.9510565162951534,1.0,0.9510565162951538,0.8090169943749468,0.5877852522924708,0.3090169943749464,7.347880794884119e-16,-0.3090169943749484,-0.5877852522924725,-0.809016994374948,-0.9510565162951533,-1.0,-0.9510565162951539,-0.8090169943749469,-0.5877852522924709,-0.30901699437494656,-8.572527594031472e-16,0.3090169943749483,0.5877852522924725,0.8090169943749479,0.9510565162951533,1.0,0.9510565162951539,0.8090169943749469,0.587785252292471,0.3090169943749467,9.797174393178826e-16,0.3090169943749448,0.5877852522924751,0.8090169943749479,0.9510565162951533,1.0,0.9510565162951539,0.809016994374947,0.5877852522924711,0.3090169943749468,1.102182119232618e-15,-0.3090169943749447,-0.5877852522924751,-0.8090169943749478,-0.9510565162951532,-1.0,-0.9510565162951529,-0.8090169943749471,-0.5877852522924712,-0.3090169943749469,-1.2246467991473533e-15,-0.30901699437495134,-0.587785252292475,-0.8090169943749498,-0.9510565162951532,-1.0,-0.9510565162951529,-0.809016994374945,-0.5877852522924742,-0.309016994374947,-4.899825157862589e-15,0.3090169943749512,0.587785252292472,0.8090169943749477,0.9510565162951542,1.0,0.9510565162951519,0.8090169943749472,0.5877852522924715,0.3090169943749505,1.4695761589768238e-15,0.30901699437494773,0.5877852522924748,0.8090169943749497,0.9510565162951531,1.0,0.951056516295153,0.8090169943749452,0.5877852522924744,0.30901699437494723,-1.9606728399089416e-15,-0.30901699437495095,-0.5877852522924718,-0.8090169943749476,-0.9510565162951542,-1.0,-0.9510565162951519,-0.8090169943749473,-0.5877852522924716,-0.3090169943749507,-1.7145055188062944e-15,0.30901699437494745,0.5877852522924746,0.8090169943749496,0.951056516295153,1.0,0.951056516295153,0.8090169943749453,0.5877852522924746,0.30901699437494745,5.3896838775215305e-15,-0.3090169943749507,-0.5877852522924716,-0.8090169943749473,-0.9510565162951541,-1.0,-0.951056516295152,-0.8090169943749476,-0.5877852522924718,-0.30901699437495095,-1.959434878635765e-15,0.30901699437494723,0.5877852522924687,0.8090169943749493,0.9510565162951552,1.0,0.9510565162951531,0.8090169943749497,0.5877852522924748,0.30901699437494096,-1.4708141202500005e-15,-0.3090169943749505,-0.5877852522924715,-0.8090169943749472,-0.951056516295154,-1.0,-0.9510565162951521,-0.8090169943749518,-0.587785252292472,-0.30901699437494445,-2.204364238465236e-15,-0.309016994374947,-0.5877852522924685,-0.8090169943749492,-0.9510565162951551,-1.0,-0.9510565162951532,-0.8090169943749498,-0.587785252292475,-0.3090169943749412,-5.879542597180472e-15,0.3090169943749503,0.587785252292477,0.8090169943749471,0.951056516295154,1.0,0.9510565162951521,0.8090169943749437,0.5877852522924722,0.3090169943749447,2.4492935982947065e-15,-0.3090169943749468,-0.5877852522924798,-0.8090169943749491,-0.951056516295155,-1.0,-0.9510565162951511,-0.8090169943749416,-0.5877852522924751,-0.3090169943749482,9.809554005910593e-16,0.30901699437495006,0.5877852522924768,0.8090169943749511,0.9510565162951561,1.0,0.9510565162951544,0.8090169943749396,0.5877852522924724,0.3090169943749449,9.799650315725178e-15,0.3090169943749533,0.5877852522924796,0.8090169943749448,0.9510565162951528,1.0,0.9510565162951533,0.8090169943749459,0.5877852522924696,0.3090169943749416,6.369401316839413e-15,-0.30901699437494307,-0.5877852522924824,-0.8090169943749468,-0.9510565162951538,-1.0,-0.9510565162951523,-0.8090169943749439,-0.5877852522924784,-0.3090169943749384,-2.9391523179536475e-15]},"selected":{"id":"12195"},"selection_policy":{"id":"12196"}},"id":"12138","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12124"},{"id":"12125"},{"id":"12126"},{"id":"12127"},{"id":"12128"},{"id":"12129"}]},"id":"12131","type":"Toolbar"},{"attributes":{"formatter":{"id":"12191"},"ticker":{"id":"12121"}},"id":"12120","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12139","type":"Line"},{"attributes":{},"id":"12186","type":"Selection"},{"attributes":{},"id":"12072","type":"DataRange1d"},{"attributes":{"source":{"id":"12138"}},"id":"12142","type":"CDSView"},{"attributes":{"axis":{"id":"12120"},"dimension":1,"ticker":null},"id":"12123","type":"Grid"},{"attributes":{"toolbar":{"id":"12209"},"toolbar_location":"above"},"id":"12210","type":"ToolbarBox"},{"attributes":{"axis":{"id":"12158"},"dimension":1,"ticker":null},"id":"12161","type":"Grid"},{"attributes":{"formatter":{"id":"12193"},"ticker":{"id":"12117"}},"id":"12116","type":"LinearAxis"},{"attributes":{"formatter":{"id":"12184"},"ticker":{"id":"12079"}},"id":"12078","type":"LinearAxis"},{"attributes":{},"id":"12202","type":"BasicTickFormatter"},{"attributes":{},"id":"12155","type":"BasicTicker"},{"attributes":{"below":[{"id":"12078"}],"center":[{"id":"12081"},{"id":"12085"}],"left":[{"id":"12082"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"12103"}],"title":{"id":"12068"},"toolbar":{"id":"12093"},"toolbar_location":null,"x_range":{"id":"12070"},"x_scale":{"id":"12074"},"y_range":{"id":"12072"},"y_scale":{"id":"12076"}},"id":"12067","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12114","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12086"},{"id":"12087"},{"id":"12088"},{"id":"12089"},{"id":"12090"},{"id":"12091"}]},"id":"12093","type":"Toolbar"},{"attributes":{},"id":"12086","type":"PanTool"},{"attributes":{"text":"Binary PSK"},"id":"12106","type":"Title"},{"attributes":{"axis":{"id":"12154"},"ticker":null},"id":"12157","type":"Grid"},{"attributes":{"source":{"id":"12100"}},"id":"12104","type":"CDSView"},{"attributes":{},"id":"12204","type":"Selection"},{"attributes":{},"id":"12112","type":"LinearScale"},{"attributes":{"axis":{"id":"12078"},"ticker":null},"id":"12081","type":"Grid"},{"attributes":{},"id":"12159","type":"BasicTicker"},{"attributes":{},"id":"12187","type":"UnionRenderers"},{"attributes":{"below":[{"id":"12154"}],"center":[{"id":"12157"},{"id":"12161"}],"left":[{"id":"12158"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"12179"}],"title":{"id":"12144"},"toolbar":{"id":"12169"},"toolbar_location":null,"x_range":{"id":"12146"},"x_scale":{"id":"12150"},"y_range":{"id":"12148"},"y_scale":{"id":"12152"}},"id":"12143","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12184","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"12067"},0,0],[{"id":"12105"},1,0],[{"id":"12143"},2,0]]},"id":"12208","type":"GridBox"},{"attributes":{},"id":"12121","type":"BasicTicker"},{"attributes":{"data_source":{"id":"12138"},"glyph":{"id":"12139"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12140"},"selection_glyph":null,"view":{"id":"12142"}},"id":"12141","type":"GlyphRenderer"},{"attributes":{},"id":"12117","type":"BasicTicker"},{"attributes":{},"id":"12196","type":"UnionRenderers"},{"attributes":{},"id":"12148","type":"DataRange1d"},{"attributes":{},"id":"12200","type":"BasicTickFormatter"},{"attributes":{},"id":"12108","type":"DataRange1d"},{"attributes":{},"id":"12150","type":"LinearScale"},{"attributes":{},"id":"12129","type":"HelpTool"},{"attributes":{},"id":"12152","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[241]},"y":[0.7071067811865475,0.8910065241883678,0.9876883405951378,0.9876883405951378,0.8910065241883679,0.7071067811865476,0.45399049973954686,0.15643446504023098,-0.15643446504023073,-0.4539904997395467,-0.7071067811865475,-0.8910065241883682,-0.9876883405951379,-0.9876883405951378,-0.891006524188368,-0.7071067811865477,-0.45399049973954697,-0.15643446504023023,0.15643446504023062,0.4539904997395466,0.7071067811865474,0.8910065241883677,0.9876883405951378,0.9876883405951377,0.8910065241883676,0.7071067811865483,0.4539904997395463,0.1564344650402321,-0.15643446504023137,-0.4539904997395488,-0.7071067811865479,-0.8910065241883672,-0.9876883405951378,-0.9876883405951379,-0.8910065241883677,-0.7071067811865485,-0.4539904997395464,-0.15643446504023223,0.15643446504023126,0.4539904997395487,0.7071067811865478,-0.4539904997395435,-0.15643446504023248,0.156434465040231,0.45399049973954847,0.7071067811865451,0.8910065241883671,0.9876883405951378,0.9876883405951374,0.8910065241883662,0.7071067811865487,0.45399049973954675,0.15643446504022906,-0.1564344650402344,-0.4539904997395452,-0.7071067811865476,-0.8910065241883687,-0.9876883405951383,-0.9876883405951369,-0.8910065241883679,-0.7071067811865464,-0.4539904997395437,-0.1564344650402327,0.15643446504023079,0.4539904997395483,0.7071067811865499,0.891006524188367,0.9876883405951377,0.9876883405951374,0.8910065241883663,0.7071067811865489,0.45399049973954697,0.15643446504022931,-0.15643446504023417,-0.45399049973954503,-0.7071067811865474,-0.8910065241883686,-0.9876883405951382,-0.9876883405951369,-0.891006524188368,-0.7071067811865465,0.45399049973954697,0.15643446504022931,-0.15643446504023417,-0.45399049973954503,-0.7071067811865474,-0.8910065241883686,-0.9876883405951382,-0.9876883405951369,-0.891006524188368,-0.7071067811865465,-0.45399049973955025,-0.15643446504022593,0.15643446504023054,0.4539904997395481,0.7071067811865448,0.8910065241883701,0.9876883405951377,0.9876883405951375,0.8910065241883665,0.7071067811865491,0.45399049973954086,0.15643446504022956,-0.15643446504023392,-0.4539904997395448,-0.7071067811865471,-0.8910065241883685,-0.9876883405951382,-0.9876883405951381,-0.8910065241883681,-0.7071067811865517,-0.45399049973954414,-0.1564344650402332,0.15643446504023029,0.45399049973954786,0.7071067811865446,0.89100652418837,0.9876883405951377,0.9876883405951375,0.8910065241883698,0.7071067811865492,0.8910065241883668,0.9876883405951377,0.9876883405951375,0.8910065241883698,0.7071067811865492,0.4539904997395474,0.15643446504022981,-0.15643446504022665,-0.4539904997395446,-0.707106781186547,-0.8910065241883683,-0.9876883405951371,-0.9876883405951381,-0.8910065241883682,-0.7071067811865519,-0.45399049973954436,-0.15643446504023342,0.15643446504023004,0.4539904997395413,0.7071067811865444,0.8910065241883667,0.9876883405951375,0.9876883405951375,0.8910065241883699,0.7071067811865495,0.45399049973954764,0.15643446504023004,-0.15643446504022643,-0.45399049973954436,-0.7071067811865418,-0.8910065241883682,-0.987688340595137,-0.9876883405951382,-0.8910065241883683,-0.707106781186552,-0.4539904997395446,-0.15643446504023367,0.15643446504022981,0.4539904997395411,0.7071067811865442,0.45399049973954786,0.1564344650402373,-0.1564344650402332,-0.45399049973955047,-0.7071067811865467,-0.8910065241883681,-0.987688340595137,-0.9876883405951382,-0.8910065241883652,-0.7071067811865471,-0.4539904997395448,-0.15643446504023392,0.15643446504022956,0.4539904997395472,0.707106781186544,0.8910065241883697,0.9876883405951364,0.9876883405951377,0.8910065241883669,0.7071067811865498,0.4539904997395481,0.15643446504023756,-0.15643446504023295,-0.45399049973955025,-0.7071067811865465,-0.891006524188368,-0.9876883405951369,-0.9876883405951382,-0.8910065241883653,-0.7071067811865523,-0.45399049973954503,-0.15643446504022715,0.15643446504022931,0.45399049973954697,0.7071067811865439,0.8910065241883696,0.9876883405951374,0.9876883405951377,0.891006524188367,0.707106781186555,-0.8910065241883679,-0.9876883405951402,-0.9876883405951372,-0.8910065241883655,-0.7071067811865526,-0.45399049973953887,-0.15643446504022038,0.1564344650402291,0.45399049973954675,0.7071067811865487,0.8910065241883695,0.9876883405951385,0.9876883405951367,0.8910065241883639,0.7071067811865501,0.45399049973954847,0.156434465040217,-0.15643446504023248,-0.4539904997395498,-0.7071067811865411,-0.891006524188371,-0.9876883405951391,-0.9876883405951383,-0.8910065241883688,-0.7071067811865477,-0.4539904997395454,-0.15643446504022762,0.15643446504023586,0.45399049973955286,0.7071067811865436,0.8910065241883661,0.9876883405951397,0.9876883405951378,0.8910065241883672,0.7071067811865452,0.45399049973954236,0.15643446504022424,-0.1564344650402252,-0.4539904997395559,-0.707106781186546]},"selected":{"id":"12204"},"selection_policy":{"id":"12205"}},"id":"12176","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12178","type":"Line"},{"attributes":{"data_source":{"id":"12176"},"glyph":{"id":"12177"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12178"},"selection_glyph":null,"view":{"id":"12180"}},"id":"12179","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"12210"},{"id":"12208"}]},"id":"12211","type":"Column"},{"attributes":{},"id":"12166","type":"ResetTool"},{"attributes":{},"id":"12165","type":"SaveTool"},{"attributes":{},"id":"12167","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12092","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"12100"},"glyph":{"id":"12101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12102"},"selection_glyph":null,"view":{"id":"12104"}},"id":"12103","type":"GlyphRenderer"},{"attributes":{},"id":"12110","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"after","x":{"field":"x"},"y":{"field":"y"}},"id":"12101","type":"Step"},{"attributes":{},"id":"12074","type":"LinearScale"},{"attributes":{"source":{"id":"12176"}},"id":"12180","type":"CDSView"}],"root_ids":["12211"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c9ed9a3c-c79b-4496-8110-4ed1482147d3","root_ids":["12211"],"roots":{"12211":"38f59171-08ea-4216-aff4-fadfde45d94d"}}];
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