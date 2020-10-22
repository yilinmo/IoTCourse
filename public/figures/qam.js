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
    
      
      
    
      var element = document.getElementById("8459d200-1554-4549-8b6c-39a4d60aee94");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8459d200-1554-4549-8b6c-39a4d60aee94' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9b7b4494-6f88-4352-86a8-c53754e14200":{"roots":{"references":[{"attributes":{},"id":"3781","type":"DataRange1d"},{"attributes":{},"id":"3866","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3841","type":"BoxAnnotation"},{"attributes":{},"id":"3869","type":"UnionRenderers"},{"attributes":{"text":"64-QAM"},"id":"3779","type":"Title"},{"attributes":{},"id":"3870","type":"Selection"},{"attributes":{},"id":"3878","type":"UnionRenderers"},{"attributes":{},"id":"3873","type":"BasicTickFormatter"},{"attributes":{},"id":"3879","type":"Selection"},{"attributes":{"source":{"id":"3773"}},"id":"3777","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3803","type":"BoxAnnotation"},{"attributes":{},"id":"3785","type":"LinearScale"},{"attributes":{},"id":"3875","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]},"y":{"__ndarray__":"AAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","order":"little","shape":[16]}},"selected":{"id":"3861"},"selection_policy":{"id":"3860"}},"id":"3773","type":"ColumnDataSource"},{"attributes":{},"id":"3783","type":"DataRange1d"},{"attributes":{},"id":"3819","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3765","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"3740"},0,0],[{"id":"3778"},0,1],[{"id":"3816"},0,2]]},"id":"3881","type":"GridBox"},{"attributes":{"text":"256-QAM"},"id":"3817","type":"Title"},{"attributes":{"source":{"id":"3849"}},"id":"3853","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3775","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3812","type":"Circle"},{"attributes":{},"id":"3840","type":"HelpTool"},{"attributes":{},"id":"3823","type":"LinearScale"},{"attributes":{"below":[{"id":"3751"}],"center":[{"id":"3754"},{"id":"3758"}],"left":[{"id":"3755"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3776"}],"title":{"id":"3741"},"toolbar":{"id":"3766"},"toolbar_location":null,"x_range":{"id":"3743"},"x_scale":{"id":"3747"},"y_range":{"id":"3745"},"y_scale":{"id":"3749"}},"id":"3740","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3821","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3773"},"glyph":{"id":"3774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3775"},"selection_glyph":null,"view":{"id":"3777"}},"id":"3776","type":"GlyphRenderer"},{"attributes":{},"id":"3743","type":"DataRange1d"},{"attributes":{},"id":"3794","type":"BasicTicker"},{"attributes":{},"id":"3745","type":"DataRange1d"},{"attributes":{"axis":{"id":"3789"},"ticker":null},"id":"3792","type":"Grid"},{"attributes":{},"id":"3825","type":"LinearScale"},{"attributes":{},"id":"3839","type":"ResetTool"},{"attributes":{"formatter":{"id":"3875"},"ticker":{"id":"3828"}},"id":"3827","type":"LinearAxis"},{"attributes":{},"id":"3787","type":"LinearScale"},{"attributes":{},"id":"3832","type":"BasicTicker"},{"attributes":{},"id":"3828","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3866"},"ticker":{"id":"3790"}},"id":"3789","type":"LinearAxis"},{"attributes":{"axis":{"id":"3827"},"ticker":null},"id":"3830","type":"Grid"},{"attributes":{"axis":{"id":"3755"},"dimension":1,"ticker":null},"id":"3758","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRA","dtype":"float64","order":"little","shape":[36]},"y":{"__ndarray__":"AAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRA","dtype":"float64","order":"little","shape":[36]}},"selected":{"id":"3870"},"selection_policy":{"id":"3869"}},"id":"3811","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"3831"},"dimension":1,"ticker":null},"id":"3834","type":"Grid"},{"attributes":{},"id":"3790","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3873"},"ticker":{"id":"3832"}},"id":"3831","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3813","type":"Circle"},{"attributes":{"axis":{"id":"3793"},"dimension":1,"ticker":null},"id":"3796","type":"Grid"},{"attributes":{"formatter":{"id":"3864"},"ticker":{"id":"3794"}},"id":"3793","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3849"},"glyph":{"id":"3850"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3851"},"selection_glyph":null,"view":{"id":"3853"}},"id":"3852","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3857"},"ticker":{"id":"3752"}},"id":"3751","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEAAAAAAAAAcwAAAAAAAABTAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEAAAAAAAAAcwAAAAAAAABTAAAAAAAAACMAAAAAAAADwvwAAAAAAAPA/AAAAAAAACEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHMAAAAAAAAAUwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwPwAAAAAAAAhAAAAAAAAAFEAAAAAAAAAcQAAAAAAAABzAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAPC/AAAAAAAA8D8AAAAAAAAIQAAAAAAAABRAAAAAAAAAHEA=","dtype":"float64","order":"little","shape":[64]},"y":{"__ndarray__":"AAAAAAAAHMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAHMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAHMAAAAAAAAAcwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPC/AAAAAAAA8L8AAAAAAADwvwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABxAAAAAAAAAHEAAAAAAAAAcQAAAAAAAABxAAAAAAAAAHEAAAAAAAAAcQAAAAAAAABxAAAAAAAAAHEA=","dtype":"float64","order":"little","shape":[64]}},"selected":{"id":"3879"},"selection_policy":{"id":"3878"}},"id":"3849","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3850","type":"Circle"},{"attributes":{"overlay":{"id":"3765"}},"id":"3761","type":"BoxZoomTool"},{"attributes":{},"id":"3752","type":"BasicTicker"},{"attributes":{"text":"16-QAM"},"id":"3741","type":"Title"},{"attributes":{"children":[{"id":"3883"},{"id":"3881"}]},"id":"3884","type":"Column"},{"attributes":{"data_source":{"id":"3811"},"glyph":{"id":"3812"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3813"},"selection_glyph":null,"view":{"id":"3815"}},"id":"3814","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"3882"},"toolbar_location":"above"},"id":"3883","type":"ToolbarBox"},{"attributes":{"below":[{"id":"3827"}],"center":[{"id":"3830"},{"id":"3834"}],"left":[{"id":"3831"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3852"}],"title":{"id":"3817"},"toolbar":{"id":"3842"},"toolbar_location":null,"x_range":{"id":"3819"},"x_scale":{"id":"3823"},"y_range":{"id":"3821"},"y_scale":{"id":"3825"}},"id":"3816","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3835","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3835"},{"id":"3836"},{"id":"3837"},{"id":"3838"},{"id":"3839"},{"id":"3840"}]},"id":"3842","type":"Toolbar"},{"attributes":{"source":{"id":"3811"}},"id":"3815","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3759"},{"id":"3760"},{"id":"3761"},{"id":"3762"},{"id":"3763"},{"id":"3764"}]},"id":"3766","type":"Toolbar"},{"attributes":{},"id":"3836","type":"WheelZoomTool"},{"attributes":{},"id":"3838","type":"SaveTool"},{"attributes":{},"id":"3747","type":"LinearScale"},{"attributes":{},"id":"3797","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3851","type":"Circle"},{"attributes":{"formatter":{"id":"3855"},"ticker":{"id":"3756"}},"id":"3755","type":"LinearAxis"},{"attributes":{},"id":"3798","type":"WheelZoomTool"},{"attributes":{},"id":"3760","type":"WheelZoomTool"},{"attributes":{},"id":"3756","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"3766"},{"id":"3804"},{"id":"3842"}],"tools":[{"id":"3759"},{"id":"3760"},{"id":"3761"},{"id":"3762"},{"id":"3763"},{"id":"3764"},{"id":"3797"},{"id":"3798"},{"id":"3799"},{"id":"3800"},{"id":"3801"},{"id":"3802"},{"id":"3835"},{"id":"3836"},{"id":"3837"},{"id":"3838"},{"id":"3839"},{"id":"3840"}]},"id":"3882","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"3803"}},"id":"3799","type":"BoxZoomTool"},{"attributes":{},"id":"3762","type":"SaveTool"},{"attributes":{},"id":"3864","type":"BasicTickFormatter"},{"attributes":{},"id":"3763","type":"ResetTool"},{"attributes":{},"id":"3749","type":"LinearScale"},{"attributes":{},"id":"3800","type":"SaveTool"},{"attributes":{},"id":"3855","type":"BasicTickFormatter"},{"attributes":{},"id":"3801","type":"ResetTool"},{"attributes":{"axis":{"id":"3751"},"ticker":null},"id":"3754","type":"Grid"},{"attributes":{},"id":"3857","type":"BasicTickFormatter"},{"attributes":{},"id":"3764","type":"HelpTool"},{"attributes":{},"id":"3802","type":"HelpTool"},{"attributes":{},"id":"3860","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3789"}],"center":[{"id":"3792"},{"id":"3796"}],"left":[{"id":"3793"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3814"}],"title":{"id":"3779"},"toolbar":{"id":"3804"},"toolbar_location":null,"x_range":{"id":"3781"},"x_scale":{"id":"3785"},"y_range":{"id":"3783"},"y_scale":{"id":"3787"}},"id":"3778","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3774","type":"Circle"},{"attributes":{"overlay":{"id":"3841"}},"id":"3837","type":"BoxZoomTool"},{"attributes":{},"id":"3861","type":"Selection"},{"attributes":{},"id":"3759","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3797"},{"id":"3798"},{"id":"3799"},{"id":"3800"},{"id":"3801"},{"id":"3802"}]},"id":"3804","type":"Toolbar"}],"root_ids":["3884"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"9b7b4494-6f88-4352-86a8-c53754e14200","root_ids":["3884"],"roots":{"3884":"8459d200-1554-4549-8b6c-39a4d60aee94"}}];
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