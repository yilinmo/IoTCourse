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
    
      
      
    
      var element = document.getElementById("e7c3d856-8d97-48f1-b417-48be8645a812");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e7c3d856-8d97-48f1-b417-48be8645a812' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0d4f45c5-a6ce-4206-ba70-62301a9d55ba":{"roots":{"references":[{"attributes":{"axis_label":"Time","formatter":{"id":"5166"},"ticker":{"id":"5162"}},"id":"5078","type":"LinearAxis"},{"attributes":{},"id":"5167","type":"UnionRenderers"},{"attributes":{},"id":"5089","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":8.5},"y":{"value":4}},"id":"5131","type":"Rect"},{"attributes":{},"id":"5168","type":"Selection"},{"attributes":{},"id":"5070","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":5}},"id":"5142","type":"Rect"},{"attributes":{},"id":"5176","type":"Selection"},{"attributes":{},"id":"5165","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3.5},"y":{"value":1}},"id":"5112","type":"Rect"},{"attributes":{},"id":"5087","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":1}},"id":"5127","type":"Rect"},{"attributes":{},"id":"5175","type":"UnionRenderers"},{"attributes":{},"id":"5173","type":"UnionRenderers"},{"attributes":{},"id":"5090","type":"ResetTool"},{"attributes":{},"id":"5179","type":"UnionRenderers"},{"attributes":{"source":{"id":"5120"}},"id":"5124","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":1}},"id":"5107","type":"Rect"},{"attributes":{"text":"Slotted ALOHA"},"id":"5068","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6.5},"y":{"value":4}},"id":"5157","type":"Rect"},{"attributes":{"data_source":{"id":"5120"},"glyph":{"id":"5121"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5122"},"selection_glyph":null,"view":{"id":"5124"}},"id":"5123","type":"GlyphRenderer"},{"attributes":{},"id":"5174","type":"Selection"},{"attributes":{"source":{"id":"5125"}},"id":"5129","type":"CDSView"},{"attributes":{"source":{"id":"5135"}},"id":"5139","type":"CDSView"},{"attributes":{},"id":"5172","type":"Selection"},{"attributes":{"data_source":{"id":"5125"},"glyph":{"id":"5126"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5127"},"selection_glyph":null,"view":{"id":"5129"}},"id":"5128","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":3}},"id":"5101","type":"Rect"},{"attributes":{},"id":"5182","type":"Selection"},{"attributes":{"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":3}},"id":"5146","type":"Rect"},{"attributes":{"below":[{"id":"5078"}],"center":[{"id":"5081"},{"id":"5085"}],"left":[{"id":"5082"}],"plot_width":1200,"renderers":[{"id":"5103"},{"id":"5108"},{"id":"5113"},{"id":"5118"},{"id":"5123"},{"id":"5128"},{"id":"5133"},{"id":"5138"},{"id":"5143"},{"id":"5148"},{"id":"5153"},{"id":"5158"}],"title":{"id":"5068"},"toolbar":{"id":"5093"},"x_range":{"id":"5070"},"x_scale":{"id":"5074"},"y_range":{"id":"5072"},"y_scale":{"id":"5076"}},"id":"5067","subtype":"Figure","type":"Plot"},{"attributes":{"data":{},"selected":{"id":"5180"},"selection_policy":{"id":"5179"}},"id":"5130","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"5178"},"selection_policy":{"id":"5177"}},"id":"5125","type":"ColumnDataSource"},{"attributes":{},"id":"5178","type":"Selection"},{"attributes":{},"id":"5074","type":"LinearScale"},{"attributes":{"overlay":{"id":"5092"}},"id":"5088","type":"BoxZoomTool"},{"attributes":{"ticks":[1,2,3,4,5,6,7,8,9,10]},"id":"5162","type":"FixedTicker"},{"attributes":{},"id":"5181","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":5.5},"y":{"value":5}},"id":"5122","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"5186"},"selection_policy":{"id":"5185"}},"id":"5145","type":"ColumnDataSource"},{"attributes":{},"id":"5180","type":"Selection"},{"attributes":{},"id":"5183","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"5165"},"major_label_overrides":{"1":"Node 1","2":"Node 2","3":"Node 3","4":"Node 4","5":"Node 5"},"ticker":{"id":"5160"}},"id":"5082","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5145"},"glyph":{"id":"5146"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5147"},"selection_glyph":null,"view":{"id":"5149"}},"id":"5148","type":"GlyphRenderer"},{"attributes":{},"id":"5187","type":"UnionRenderers"},{"attributes":{"source":{"id":"5150"}},"id":"5154","type":"CDSView"},{"attributes":{"data_source":{"id":"5115"},"glyph":{"id":"5116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5117"},"selection_glyph":null,"view":{"id":"5119"}},"id":"5118","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":9.5},"y":{"value":1}},"id":"5137","type":"Rect"},{"attributes":{},"id":"5166","type":"BasicTickFormatter"},{"attributes":{},"id":"5091","type":"HelpTool"},{"attributes":{},"id":"5186","type":"Selection"},{"attributes":{"source":{"id":"5115"}},"id":"5119","type":"CDSView"},{"attributes":{"ticks":[1,2,3,4,5]},"id":"5160","type":"FixedTicker"},{"attributes":{},"id":"5086","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"5174"},"selection_policy":{"id":"5173"}},"id":"5115","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5110"}},"id":"5114","type":"CDSView"},{"attributes":{"data_source":{"id":"5105"},"glyph":{"id":"5106"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5107"},"selection_glyph":null,"view":{"id":"5109"}},"id":"5108","type":"GlyphRenderer"},{"attributes":{},"id":"5169","type":"UnionRenderers"},{"attributes":{},"id":"5184","type":"Selection"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":7.5},"y":{"value":1}},"id":"5126","type":"Rect"},{"attributes":{"source":{"id":"5140"}},"id":"5144","type":"CDSView"},{"attributes":{},"id":"5185","type":"UnionRenderers"},{"attributes":{},"id":"5170","type":"Selection"},{"attributes":{},"id":"5190","type":"Selection"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":4.5},"y":{"value":1}},"id":"5116","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":8.5},"y":{"value":4}},"id":"5132","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"5170"},"selection_policy":{"id":"5169"}},"id":"5105","type":"ColumnDataSource"},{"attributes":{},"id":"5189","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"5184"},"selection_policy":{"id":"5183"}},"id":"5140","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":3.5},"y":{"value":1}},"id":"5111","type":"Rect"},{"attributes":{"source":{"id":"5155"}},"id":"5159","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":4.5},"y":{"value":1}},"id":"5117","type":"Rect"},{"attributes":{"source":{"id":"5145"}},"id":"5149","type":"CDSView"},{"attributes":{},"id":"5076","type":"LinearScale"},{"attributes":{"data_source":{"id":"5155"},"glyph":{"id":"5156"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5157"},"selection_glyph":null,"view":{"id":"5159"}},"id":"5158","type":"GlyphRenderer"},{"attributes":{},"id":"5188","type":"Selection"},{"attributes":{"data_source":{"id":"5100"},"glyph":{"id":"5101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5102"},"selection_glyph":null,"view":{"id":"5104"}},"id":"5103","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5105"}},"id":"5109","type":"CDSView"},{"attributes":{"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6.5},"y":{"value":2}},"id":"5151","type":"Rect"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":1.5},"y":{"value":1}},"id":"5106","type":"Rect"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5086"},{"id":"5087"},{"id":"5088"},{"id":"5089"},{"id":"5090"},{"id":"5091"}]},"id":"5093","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":5.5},"y":{"value":5}},"id":"5121","type":"Rect"},{"attributes":{"source":{"id":"5130"}},"id":"5134","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6.5},"y":{"value":2}},"id":"5152","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"5176"},"selection_policy":{"id":"5175"}},"id":"5120","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":5}},"id":"5141","type":"Rect"},{"attributes":{"data_source":{"id":"5130"},"glyph":{"id":"5131"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5132"},"selection_glyph":null,"view":{"id":"5134"}},"id":"5133","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5135"},"glyph":{"id":"5136"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5137"},"selection_glyph":null,"view":{"id":"5139"}},"id":"5138","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"5168"},"selection_policy":{"id":"5167"}},"id":"5100","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":2.5},"y":{"value":3}},"id":"5147","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"5172"},"selection_policy":{"id":"5171"}},"id":"5110","type":"ColumnDataSource"},{"attributes":{},"id":"5177","type":"UnionRenderers"},{"attributes":{"axis":{"id":"5078"},"ticker":null},"id":"5081","type":"Grid"},{"attributes":{"data_source":{"id":"5150"},"glyph":{"id":"5151"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5152"},"selection_glyph":null,"view":{"id":"5154"}},"id":"5153","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5092","type":"BoxAnnotation"},{"attributes":{"data":{},"selected":{"id":"5188"},"selection_policy":{"id":"5187"}},"id":"5150","type":"ColumnDataSource"},{"attributes":{},"id":"5171","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":0.5},"y":{"value":3}},"id":"5102","type":"Rect"},{"attributes":{"data":{},"selected":{"id":"5190"},"selection_policy":{"id":"5189"}},"id":"5155","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5140"},"glyph":{"id":"5141"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5142"},"selection_glyph":null,"view":{"id":"5144"}},"id":"5143","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#888888"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":6.5},"y":{"value":4}},"id":"5156","type":"Rect"},{"attributes":{"axis":{"id":"5082"},"dimension":1,"ticker":null,"visible":false},"id":"5085","type":"Grid"},{"attributes":{},"id":"5072","type":"DataRange1d"},{"attributes":{"source":{"id":"5100"}},"id":"5104","type":"CDSView"},{"attributes":{"fill_color":{"value":"#ffffff"},"height":{"units":"data","value":0.5},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"value":9.5},"y":{"value":1}},"id":"5136","type":"Rect"},{"attributes":{"data_source":{"id":"5110"},"glyph":{"id":"5111"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5112"},"selection_glyph":null,"view":{"id":"5114"}},"id":"5113","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"5182"},"selection_policy":{"id":"5181"}},"id":"5135","type":"ColumnDataSource"}],"root_ids":["5067"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"0d4f45c5-a6ce-4206-ba70-62301a9d55ba","root_ids":["5067"],"roots":{"5067":"e7c3d856-8d97-48f1-b417-48be8645a812"}}];
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