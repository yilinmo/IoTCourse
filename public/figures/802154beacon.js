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
    
      
      
    
      var element = document.getElementById("65d254ae-3f92-41b2-bb9e-8671bee5bc20");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '65d254ae-3f92-41b2-bb9e-8671bee5bc20' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f8625fc4-5438-4f17-a0cb-1900985895f9":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#8888ff"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":0.5},"y":{"value":0.5}},"id":"7441","type":"Rect"},{"attributes":{},"id":"7429","type":"SaveTool"},{"attributes":{},"id":"7416","type":"LinearScale"},{"attributes":{"axis_label":"Time","formatter":{"id":"7529"},"ticker":{"id":"7524"}},"id":"7418","type":"LinearAxis"},{"attributes":{},"id":"7423","type":"BasicTicker"},{"attributes":{},"id":"7426","type":"PanTool"},{"attributes":{"axis":{"id":"7422"},"dimension":1,"ticker":null,"visible":false},"id":"7425","type":"Grid"},{"attributes":{"formatter":{"id":"7528"},"ticker":{"id":"7423"},"visible":false},"id":"7422","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"7432","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"7445"},"glyph":{"id":"7446"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7447"},"selection_glyph":null,"view":{"id":"7449"}},"id":"7448","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#8888ff"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":0.5},"y":{"value":0.5}},"id":"7442","type":"Rect"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":12.5},"y":{"value":0.5}},"id":"7501","type":"Rect"},{"attributes":{},"id":"7410","type":"DataRange1d"},{"attributes":{"source":{"id":"7440"}},"id":"7444","type":"CDSView"},{"attributes":{"below":[{"id":"7418"}],"center":[{"id":"7421"},{"id":"7425"},{"id":"7520"},{"id":"7521"},{"id":"7522"}],"left":[{"id":"7422"}],"plot_height":200,"plot_width":1200,"renderers":[{"id":"7443"},{"id":"7448"},{"id":"7453"},{"id":"7458"},{"id":"7463"},{"id":"7468"},{"id":"7473"},{"id":"7478"},{"id":"7483"},{"id":"7488"},{"id":"7493"},{"id":"7498"},{"id":"7503"},{"id":"7508"},{"id":"7513"},{"id":"7518"}],"title":{"id":"7408"},"toolbar":{"id":"7433"},"x_range":{"id":"7410"},"x_scale":{"id":"7414"},"y_range":{"id":"7523"},"y_scale":{"id":"7416"}},"id":"7407","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":5.5},"y":{"value":0.5}},"id":"7466","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":1.5},"y":{"value":0.5}},"id":"7447","type":"Rect"},{"attributes":{},"id":"7430","type":"ResetTool"},{"attributes":{},"id":"7414","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7426"},{"id":"7427"},{"id":"7428"},{"id":"7429"},{"id":"7430"},{"id":"7431"}]},"id":"7433","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"7532"},"selection_policy":{"id":"7531"}},"id":"7440","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":9.5},"y":{"value":0.5}},"id":"7486","type":"Rect"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":1.5},"y":{"value":0.5}},"id":"7446","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"7556"},"selection_policy":{"id":"7555"}},"id":"7500","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7445"}},"id":"7449","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"7562"},"selection_policy":{"id":"7561"}},"id":"7515","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7440"},"glyph":{"id":"7441"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7442"},"selection_glyph":null,"view":{"id":"7444"}},"id":"7443","type":"GlyphRenderer"},{"attributes":{"text":"IEEE 802.15.4 Super-frame"},"id":"7408","type":"Title"},{"attributes":{},"id":"7427","type":"WheelZoomTool"},{"attributes":{"data":{},"selected":{"id":"7534"},"selection_policy":{"id":"7533"}},"id":"7445","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"7432"}},"id":"7428","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"7418"},"ticker":null,"visible":false},"id":"7421","type":"Grid"},{"attributes":{},"id":"7431","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":6.5},"y":{"value":0.5}},"id":"7471","type":"Rect"},{"attributes":{},"id":"7559","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7485"},"glyph":{"id":"7486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7487"},"selection_glyph":null,"view":{"id":"7489"}},"id":"7488","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7465"}},"id":"7469","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"7554"},"selection_policy":{"id":"7553"}},"id":"7495","type":"ColumnDataSource"},{"attributes":{},"id":"7554","type":"Selection"},{"attributes":{},"id":"7557","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":15.5},"y":{"value":0.5}},"id":"7516","type":"Rect"},{"attributes":{},"id":"7562","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":10.5},"y":{"value":0.5}},"id":"7492","type":"Rect"},{"attributes":{},"id":"7551","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7495"},"glyph":{"id":"7496"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7497"},"selection_glyph":null,"view":{"id":"7499"}},"id":"7498","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7455"}},"id":"7459","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":4.5},"y":{"value":0.5}},"id":"7462","type":"Rect"},{"attributes":{"end":1.5},"id":"7523","type":"Range1d"},{"attributes":{"data_source":{"id":"7510"},"glyph":{"id":"7511"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7512"},"selection_glyph":null,"view":{"id":"7514"}},"id":"7513","type":"GlyphRenderer"},{"attributes":{},"id":"7545","type":"UnionRenderers"},{"attributes":{"text":"Guaranteed Access","text_align":"center","text_font_size":"25px","x":12.5,"y":1},"id":"7522","type":"Label"},{"attributes":{},"id":"7553","type":"UnionRenderers"},{"attributes":{"source":{"id":"7450"}},"id":"7454","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":5.5},"y":{"value":0.5}},"id":"7467","type":"Rect"},{"attributes":{"source":{"id":"7490"}},"id":"7494","type":"CDSView"},{"attributes":{"ticks":[1,9,16]},"id":"7524","type":"FixedTicker"},{"attributes":{},"id":"7552","type":"Selection"},{"attributes":{},"id":"7547","type":"UnionRenderers"},{"attributes":{},"id":"7560","type":"Selection"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":3.5},"y":{"value":0.5}},"id":"7456","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":15.5},"y":{"value":0.5}},"id":"7517","type":"Rect"},{"attributes":{},"id":"7555","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7490"},"glyph":{"id":"7491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7492"},"selection_glyph":null,"view":{"id":"7494"}},"id":"7493","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":3.5},"y":{"value":0.5}},"id":"7457","type":"Rect"},{"attributes":{},"id":"7561","type":"UnionRenderers"},{"attributes":{},"id":"7556","type":"Selection"},{"attributes":{"data_source":{"id":"7465"},"glyph":{"id":"7466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7467"},"selection_glyph":null,"view":{"id":"7469"}},"id":"7468","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7515"},"glyph":{"id":"7516"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7517"},"selection_glyph":null,"view":{"id":"7519"}},"id":"7518","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"7538"},"selection_policy":{"id":"7537"}},"id":"7455","type":"ColumnDataSource"},{"attributes":{},"id":"7550","type":"Selection"},{"attributes":{"data_source":{"id":"7455"},"glyph":{"id":"7456"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7457"},"selection_glyph":null,"view":{"id":"7459"}},"id":"7458","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":2.5},"y":{"value":0.5}},"id":"7452","type":"Rect"},{"attributes":{"text":"Beacon","text_align":"center","text_font_size":"25px","x":0.5,"y":1},"id":"7520","type":"Label"},{"attributes":{"text":"Contention Access","text_align":"center","text_font_size":"25px","x":4.5,"y":1},"id":"7521","type":"Label"},{"attributes":{"data_source":{"id":"7460"},"glyph":{"id":"7461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7462"},"selection_glyph":null,"view":{"id":"7464"}},"id":"7463","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":2.5},"y":{"value":0.5}},"id":"7451","type":"Rect"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":10.5},"y":{"value":0.5}},"id":"7491","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":8.5},"y":{"value":0.5}},"id":"7482","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":14.5},"y":{"value":0.5}},"id":"7512","type":"Rect"},{"attributes":{},"id":"7538","type":"Selection"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":4.5},"y":{"value":0.5}},"id":"7461","type":"Rect"},{"attributes":{"source":{"id":"7515"}},"id":"7519","type":"CDSView"},{"attributes":{},"id":"7548","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"7544"},"selection_policy":{"id":"7543"}},"id":"7470","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":7.5},"y":{"value":0.5}},"id":"7476","type":"Rect"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":13.5},"y":{"value":0.5}},"id":"7506","type":"Rect"},{"attributes":{},"id":"7534","type":"Selection"},{"attributes":{"source":{"id":"7485"}},"id":"7489","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"7558"},"selection_policy":{"id":"7557"}},"id":"7505","type":"ColumnDataSource"},{"attributes":{},"id":"7549","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"7550"},"selection_policy":{"id":"7549"}},"id":"7485","type":"ColumnDataSource"},{"attributes":{},"id":"7544","type":"Selection"},{"attributes":{"data_source":{"id":"7470"},"glyph":{"id":"7471"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7472"},"selection_glyph":null,"view":{"id":"7474"}},"id":"7473","type":"GlyphRenderer"},{"attributes":{},"id":"7543","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7450"},"glyph":{"id":"7451"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7452"},"selection_glyph":null,"view":{"id":"7454"}},"id":"7453","type":"GlyphRenderer"},{"attributes":{},"id":"7542","type":"Selection"},{"attributes":{},"id":"7541","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7480"},"glyph":{"id":"7481"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7482"},"selection_glyph":null,"view":{"id":"7484"}},"id":"7483","type":"GlyphRenderer"},{"attributes":{},"id":"7558","type":"Selection"},{"attributes":{},"id":"7540","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"7548"},"selection_policy":{"id":"7547"}},"id":"7480","type":"ColumnDataSource"},{"attributes":{},"id":"7539","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":7.5},"y":{"value":0.5}},"id":"7477","type":"Rect"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":11.5},"y":{"value":0.5}},"id":"7496","type":"Rect"},{"attributes":{"data_source":{"id":"7475"},"glyph":{"id":"7476"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7477"},"selection_glyph":null,"view":{"id":"7479"}},"id":"7478","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"7542"},"selection_policy":{"id":"7541"}},"id":"7465","type":"ColumnDataSource"},{"attributes":{},"id":"7535","type":"UnionRenderers"},{"attributes":{"source":{"id":"7480"}},"id":"7484","type":"CDSView"},{"attributes":{"data_source":{"id":"7505"},"glyph":{"id":"7506"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7507"},"selection_glyph":null,"view":{"id":"7509"}},"id":"7508","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"7540"},"selection_policy":{"id":"7539"}},"id":"7460","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":14.5},"y":{"value":0.5}},"id":"7511","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":11.5},"y":{"value":0.5}},"id":"7497","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"7560"},"selection_policy":{"id":"7559"}},"id":"7510","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7500"},"glyph":{"id":"7501"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7502"},"selection_glyph":null,"view":{"id":"7504"}},"id":"7503","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":8.5},"y":{"value":0.5}},"id":"7481","type":"Rect"},{"attributes":{},"id":"7533","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":9.5},"y":{"value":0.5}},"id":"7487","type":"Rect"},{"attributes":{},"id":"7531","type":"UnionRenderers"},{"attributes":{},"id":"7528","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":12.5},"y":{"value":0.5}},"id":"7502","type":"Rect"},{"attributes":{},"id":"7546","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ff8888"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":6.5},"y":{"value":0.5}},"id":"7472","type":"Rect"},{"attributes":{"source":{"id":"7510"}},"id":"7514","type":"CDSView"},{"attributes":{"source":{"id":"7475"}},"id":"7479","type":"CDSView"},{"attributes":{"source":{"id":"7505"}},"id":"7509","type":"CDSView"},{"attributes":{},"id":"7532","type":"Selection"},{"attributes":{"source":{"id":"7470"}},"id":"7474","type":"CDSView"},{"attributes":{},"id":"7536","type":"Selection"},{"attributes":{"source":{"id":"7500"}},"id":"7504","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"7552"},"selection_policy":{"id":"7551"}},"id":"7490","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7495"}},"id":"7499","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88ff88"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"value":13.5},"y":{"value":0.5}},"id":"7507","type":"Rect"},{"attributes":{},"id":"7537","type":"UnionRenderers"},{"attributes":{"source":{"id":"7460"}},"id":"7464","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"7546"},"selection_policy":{"id":"7545"}},"id":"7475","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"7536"},"selection_policy":{"id":"7535"}},"id":"7450","type":"ColumnDataSource"},{"attributes":{},"id":"7529","type":"BasicTickFormatter"}],"root_ids":["7407"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"f8625fc4-5438-4f17-a0cb-1900985895f9","root_ids":["7407"],"roots":{"7407":"65d254ae-3f92-41b2-bb9e-8671bee5bc20"}}];
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