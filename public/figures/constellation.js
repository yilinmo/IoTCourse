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
    
      
      
    
      var element = document.getElementById("2835d487-001d-4fbd-82ff-f89ca064fd76");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2835d487-001d-4fbd-82ff-f89ca064fd76' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2e95b11f-be1b-4e57-8c51-550a3bc5ae2e":{"roots":{"references":[{"attributes":{"axis":{"id":"12409"},"dimension":1,"ticker":null},"id":"12412","type":"Grid"},{"attributes":{},"id":"12416","type":"SaveTool"},{"attributes":{},"id":"12399","type":"DataRange1d"},{"attributes":{"axis":{"id":"12366"},"dimension":1,"ticker":null},"id":"12369","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12347","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12342","type":"Circle"},{"attributes":{},"id":"12406","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12333","type":"BoxAnnotation"},{"attributes":{},"id":"12367","type":"BasicTicker"},{"attributes":{},"id":"12328","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"12419"}},"id":"12415","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12348","type":"Line"},{"attributes":{},"id":"12332","type":"HelpTool"},{"attributes":{"data_source":{"id":"12384"},"glyph":{"id":"12385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12386"},"selection_glyph":null,"view":{"id":"12388"}},"id":"12387","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1,-1],"y":[0,0]},"selected":{"id":"12453"},"selection_policy":{"id":"12454"}},"id":"12384","type":"ColumnDataSource"},{"attributes":{},"id":"12374","type":"ResetTool"},{"attributes":{"formatter":{"id":"12462"},"ticker":{"id":"12406"}},"id":"12405","type":"LinearAxis"},{"attributes":{},"id":"12466","type":"Selection"},{"attributes":{},"id":"12397","type":"DataRange1d"},{"attributes":{"data":{"x":[0,1],"y":[0,0]},"selected":{"id":"12442"},"selection_policy":{"id":"12443"}},"id":"12341","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"12460"},"ticker":{"id":"12410"}},"id":"12409","type":"LinearAxis"},{"attributes":{"below":[{"id":"12362"}],"center":[{"id":"12365"},{"id":"12369"}],"left":[{"id":"12366"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12387"},{"id":"12392"}],"title":{"id":"12352"},"toolbar":{"id":"12377"},"toolbar_location":null,"x_range":{"id":"12354"},"x_scale":{"id":"12358"},"y_range":{"id":"12356"},"y_scale":{"id":"12360"}},"id":"12351","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12413","type":"PanTool"},{"attributes":{"formatter":{"id":"12449"},"ticker":{"id":"12367"}},"id":"12366","type":"LinearAxis"},{"attributes":{},"id":"12410","type":"BasicTicker"},{"attributes":{"data_source":{"id":"12427"},"glyph":{"id":"12428"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12429"},"selection_glyph":null,"view":{"id":"12431"}},"id":"12430","type":"GlyphRenderer"},{"attributes":{"source":{"id":"12384"}},"id":"12388","type":"CDSView"},{"attributes":{},"id":"12371","type":"WheelZoomTool"},{"attributes":{"source":{"id":"12341"}},"id":"12345","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"zTt/Zp6g5j/MO39mnqDmv847f2aeoOa/yzt/Zp6g5j8=","dtype":"float64","order":"little","shape":[4]},"y":{"__ndarray__":"zDt/Zp6g5j/NO39mnqDmP8w7f2aeoOa/zjt/Zp6g5r8=","dtype":"float64","order":"little","shape":[4]}},"selected":{"id":"12464"},"selection_policy":{"id":"12465"}},"id":"12427","type":"ColumnDataSource"},{"attributes":{},"id":"12324","type":"BasicTicker"},{"attributes":{"formatter":{"id":"12438"},"ticker":{"id":"12324"}},"id":"12323","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"12334"},{"id":"12377"},{"id":"12420"}],"tools":[{"id":"12327"},{"id":"12328"},{"id":"12329"},{"id":"12330"},{"id":"12331"},{"id":"12332"},{"id":"12370"},{"id":"12371"},{"id":"12372"},{"id":"12373"},{"id":"12374"},{"id":"12375"},{"id":"12413"},{"id":"12414"},{"id":"12415"},{"id":"12416"},{"id":"12417"},{"id":"12418"}]},"id":"12471","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"12444"},"selection_policy":{"id":"12445"}},"id":"12346","type":"ColumnDataSource"},{"attributes":{},"id":"12414","type":"WheelZoomTool"},{"attributes":{},"id":"12311","type":"DataRange1d"},{"attributes":{"axis":{"id":"12362"},"ticker":null},"id":"12365","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8uGrPB6vvvP6bDhxGs7+8/O/xrD0fb7z8QR7TvwL7vP4esx/kgmu8/ajZEhnBt7z+7X5z8ujjvP+UTLtAN/O4/d/vTfHi37j+e9vGCDGvuP4bH/WLdFu4/YRCFmAC77T8s6rGUjVftP1t6T7id7Ow/NQ5QTUx67D/vYtZ/tgDsP3rhw1b7f+s/ULTNqzv46j+DvBojmmnqP6yJbCI71Ok/RZbVx0Q46T8iJ//f3pXoP4tJAdwy7ec/bIfPxms+5z95BD06tonmP9bRmlNAz+U/yl/zpzkP5T86DuY300nkPzn1JWM/f+M/fxaf27Gv4j+VP0WYX9vhP476j8d+AuE/KQCnwUYl4D9eZYX034feP194iORnvdw/N/oRUprr2j8UFPoa7hLZP0cP4d3bM9c/Y4dn291O1T9I8fvWb2TTPwZtRfcOddE/JuRnTHMCzz8v+Hvh3hLLPxnnp8xhHMc/pkEj8P4fwz9RI9hedT2+P6iDqFk1M7Y/zab2GpZGrD9JNK6kFD+YP7xB3MVlKoC/NflCMbUzpL9mpZ2Y1Cuyv2VxK4MrObq/xOLZqOgfwb+uhWTZ3B7Fv1jY+UdtGMm/Hnp2SZYLzb+kf4nqqnvQv4RdHuNVbdK/33z5Dk1a1L9W/suhEkLWv62WkiIqJNi/LxNZixgA2r99LZ9oZNXbvy+sVviVo92/X+dySDdq379k8oAqapTgv4yu45J9b+G/Xw6p9R1G4r/fKcKNFBjjv3rGw8Yr5eO/TpWSSi+t5L+5Nr4O7G/lv/aah2EwLea/oGyP9svk5r/XSCnzj5bnv8ufUPpOQui/mjA8ON3n6L84LI1tEIfpv98kF/q/H+q/hwk+58Sx6r9ViOfx+Tzrv1dO/ZM7weu/Y7d9DWg+7L/6nRhtX7Tsv14YVpgDI+2/hg5FUziK7b8Es69H4+ntvyUI1AvsQe6/ULqeKDyS7r+iuGYfv9ruvzkVKG9iG++/ktc8mRVU779/jJIlyoTvv6qAW6Zzre+/kLQ6uwfO77+buukTfubvv3nSV3LQ9u+/FrdBrPr+778Wt0Gs+v7vv3nSV3LQ9u+/m7rpE37m77+RtDq7B87vv6qAW6Zzre+/f4ySJcqE77+T1zyZFVTvvzkVKG9iG++/o7hmH7/a7r9Rup4oPJLuvyUI1AvsQe6/BbOvR+Pp7b+HDkVTOIrtv14YVpgDI+2/+50YbV+07L9it30NaD7sv1ZO/ZM7weu/Vojn8fk867+ICT7nxLHqv+AkF/q/H+q/OiyNbRCH6b+ZMDw43efov8yfUPpOQui/2Ugp84+W57+ibI/2y+Tmv/iah2EwLea/tza+Duxv5b9QlZJKL63kv3zGw8Yr5eO/3SnCjRQY479hDqn1HUbiv4uu45J9b+G/ZvKAKmqU4L9j53JIN2rfvyysVviVo92/gS2faGTV278sE1mLGADav7SWkiIqJNi/V/7LoRJC1r/bfPkOTVrUv4ldHuNVbdK/oH+J6qp70L8uenZJlgvNv1nY+UdtGMm/n4Vk2dwexb/N4tmo6B/Bv1dxK4MrObq/d6WdmNQrsr84+UIxtTOkv8lC3MVlKoC/AzSupBQ/mD/ppvYalkasP5aDqFk1M7Y/UCPYXnU9vj+VQSPw/h/DPxHnp8xhHMc/Nvh74d4Syz8d5GdMcwLPPwVtRfcOddE/QPH71m9k0z9jh2fb3U7VP0oP4d3bM9c/EBT6Gu4S2T86+hFSmuvaP1h4iORnvdw/XmWF9N+H3j8rAKfBRiXgP4z6j8d+AuE/lj9FmF/b4T98Fp/bsa/iPzn1JWM/f+M/PA7mN9NJ5D/IX/OnOQ/lP9jRmlNAz+U/dwQ9OraJ5j9rh8/Gaz7nP4dJAdwy7ec/ICf/396V6D9GltXHRDjpP6qJbCI71Ok/g7waI5pp6j9OtM2rO/jqP3nhw1b7f+s/8GLWf7YA7D8zDlBNTHrsP1t6T7id7Ow/KuqxlI1X7T9gEIWYALvtP4bH/WLdFu4/nfbxggxr7j93+9N8eLfuP+QTLtAN/O4/u1+c/Lo47z9qNkSGcG3vP4asx/kgmu8/EUe078C+7z86/GsPR9vvP6XDhxGs7+8/Lhqzwer77z8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"12466"},"selection_policy":{"id":"12467"}},"id":"12432","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"12333"}},"id":"12329","type":"BoxZoomTool"},{"attributes":{},"id":"12360","type":"LinearScale"},{"attributes":{"source":{"id":"12427"}},"id":"12431","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12327"},{"id":"12328"},{"id":"12329"},{"id":"12330"},{"id":"12331"},{"id":"12332"}]},"id":"12334","type":"Toolbar"},{"attributes":{},"id":"12370","type":"PanTool"},{"attributes":{},"id":"12445","type":"UnionRenderers"},{"attributes":{},"id":"12460","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"12472"},{"id":"12470"}]},"id":"12473","type":"Column"},{"attributes":{},"id":"12418","type":"HelpTool"},{"attributes":{"axis":{"id":"12323"},"dimension":1,"ticker":null},"id":"12326","type":"Grid"},{"attributes":{"axis":{"id":"12319"},"ticker":null},"id":"12322","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12386","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12429","type":"Circle"},{"attributes":{},"id":"12375","type":"HelpTool"},{"attributes":{"data_source":{"id":"12346"},"glyph":{"id":"12347"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12348"},"selection_glyph":null,"view":{"id":"12350"}},"id":"12349","type":"GlyphRenderer"},{"attributes":{},"id":"12320","type":"BasicTicker"},{"attributes":{},"id":"12354","type":"DataRange1d"},{"attributes":{},"id":"12454","type":"UnionRenderers"},{"attributes":{"below":[{"id":"12319"}],"center":[{"id":"12322"},{"id":"12326"}],"left":[{"id":"12323"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12344"},{"id":"12349"}],"title":{"id":"12309"},"toolbar":{"id":"12334"},"toolbar_location":null,"x_range":{"id":"12311"},"x_scale":{"id":"12315"},"y_range":{"id":"12313"},"y_scale":{"id":"12317"}},"id":"12308","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12464","type":"Selection"},{"attributes":{"data_source":{"id":"12432"},"glyph":{"id":"12433"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12434"},"selection_glyph":null,"view":{"id":"12436"}},"id":"12435","type":"GlyphRenderer"},{"attributes":{},"id":"12403","type":"LinearScale"},{"attributes":{},"id":"12417","type":"ResetTool"},{"attributes":{},"id":"12315","type":"LinearScale"},{"attributes":{},"id":"12363","type":"BasicTicker"},{"attributes":{"source":{"id":"12432"}},"id":"12436","type":"CDSView"},{"attributes":{},"id":"12356","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12433","type":"Line"},{"attributes":{},"id":"12331","type":"ResetTool"},{"attributes":{},"id":"12444","type":"Selection"},{"attributes":{"data_source":{"id":"12341"},"glyph":{"id":"12342"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12343"},"selection_glyph":null,"view":{"id":"12345"}},"id":"12344","type":"GlyphRenderer"},{"attributes":{},"id":"12317","type":"LinearScale"},{"attributes":{},"id":"12440","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12376"}},"id":"12372","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"12440"},"ticker":{"id":"12320"}},"id":"12319","type":"LinearAxis"},{"attributes":{"data_source":{"id":"12389"},"glyph":{"id":"12390"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12391"},"selection_glyph":null,"view":{"id":"12393"}},"id":"12392","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12343","type":"Circle"},{"attributes":{},"id":"12438","type":"BasicTickFormatter"},{"attributes":{},"id":"12373","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12376","type":"BoxAnnotation"},{"attributes":{},"id":"12443","type":"UnionRenderers"},{"attributes":{},"id":"12442","type":"Selection"},{"attributes":{},"id":"12330","type":"SaveTool"},{"attributes":{"formatter":{"id":"12451"},"ticker":{"id":"12363"}},"id":"12362","type":"LinearAxis"},{"attributes":{},"id":"12401","type":"LinearScale"},{"attributes":{},"id":"12451","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"12308"},0,0],[{"id":"12351"},0,1],[{"id":"12394"},0,2]]},"id":"12470","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12370"},{"id":"12371"},{"id":"12372"},{"id":"12373"},{"id":"12374"},{"id":"12375"}]},"id":"12377","type":"Toolbar"},{"attributes":{"text":"OOK"},"id":"12309","type":"Title"},{"attributes":{"text":"QPSK"},"id":"12395","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12390","type":"Line"},{"attributes":{},"id":"12462","type":"BasicTickFormatter"},{"attributes":{"text":"BPSK"},"id":"12352","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12419","type":"BoxAnnotation"},{"attributes":{"source":{"id":"12346"}},"id":"12350","type":"CDSView"},{"attributes":{},"id":"12358","type":"LinearScale"},{"attributes":{},"id":"12449","type":"BasicTickFormatter"},{"attributes":{},"id":"12465","type":"UnionRenderers"},{"attributes":{},"id":"12455","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12385","type":"Circle"},{"attributes":{},"id":"12456","type":"UnionRenderers"},{"attributes":{},"id":"12467","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"12455"},"selection_policy":{"id":"12456"}},"id":"12389","type":"ColumnDataSource"},{"attributes":{"source":{"id":"12389"}},"id":"12393","type":"CDSView"},{"attributes":{},"id":"12453","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12391","type":"Line"},{"attributes":{"toolbar":{"id":"12471"},"toolbar_location":"above"},"id":"12472","type":"ToolbarBox"},{"attributes":{"axis":{"id":"12405"},"ticker":null},"id":"12408","type":"Grid"},{"attributes":{"below":[{"id":"12405"}],"center":[{"id":"12408"},{"id":"12412"}],"left":[{"id":"12409"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12430"},{"id":"12435"}],"title":{"id":"12395"},"toolbar":{"id":"12420"},"toolbar_location":null,"x_range":{"id":"12397"},"x_scale":{"id":"12401"},"y_range":{"id":"12399"},"y_scale":{"id":"12403"}},"id":"12394","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12413"},{"id":"12414"},{"id":"12415"},{"id":"12416"},{"id":"12417"},{"id":"12418"}]},"id":"12420","type":"Toolbar"},{"attributes":{},"id":"12327","type":"PanTool"},{"attributes":{},"id":"12313","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12428","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"12434","type":"Line"}],"root_ids":["12473"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"2e95b11f-be1b-4e57-8c51-550a3bc5ae2e","root_ids":["12473"],"roots":{"12473":"2835d487-001d-4fbd-82ff-f89ca064fd76"}}];
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