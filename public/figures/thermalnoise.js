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
    
      
      
    
      var element = document.getElementById("badf17aa-84c0-47b0-bcae-04c36b1f98b7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'badf17aa-84c0-47b0-bcae-04c36b1f98b7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9cf4fe92-e20b-469d-b706-eb0aac8675ad":{"roots":{"references":[{"attributes":{"formatter":{"id":"4070"},"ticker":{"id":"4031"}},"id":"4030","type":"LinearAxis"},{"attributes":{},"id":"4028","type":"LinearScale"},{"attributes":{},"id":"4061","type":"BasicTickFormatter"},{"attributes":{},"id":"4064","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4015","type":"Line"},{"attributes":{},"id":"4035","type":"BasicTicker"},{"attributes":{"axis":{"id":"3992"},"ticker":null},"id":"3995","type":"Grid"},{"attributes":{},"id":"4031","type":"BasicTicker"},{"attributes":{},"id":"4065","type":"Selection"},{"attributes":{"axis":{"id":"4030"},"ticker":null},"id":"4033","type":"Grid"},{"attributes":{"children":[{"id":"4078"},{"id":"4076"}]},"id":"4079","type":"Column"},{"attributes":{},"id":"3993","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4053","type":"Line"},{"attributes":{"source":{"id":"4052"}},"id":"4056","type":"CDSView"},{"attributes":{"formatter":{"id":"4059"},"ticker":{"id":"3997"}},"id":"3996","type":"LinearAxis"},{"attributes":{"axis":{"id":"4034"},"dimension":1,"ticker":null},"id":"4037","type":"Grid"},{"attributes":{"formatter":{"id":"4068"},"ticker":{"id":"4035"}},"id":"4034","type":"LinearAxis"},{"attributes":{},"id":"4022","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4054","type":"Line"},{"attributes":{"data_source":{"id":"4014"},"glyph":{"id":"4015"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4016"},"selection_glyph":null,"view":{"id":"4018"}},"id":"4017","type":"GlyphRenderer"},{"attributes":{"end":0.002314675372982417},"id":"4057","type":"Range1d"},{"attributes":{},"id":"3997","type":"BasicTicker"},{"attributes":{},"id":"4074","type":"Selection"},{"attributes":{},"id":"4073","type":"UnionRenderers"},{"attributes":{"text":"Power Spectra Density"},"id":"4020","type":"Title"},{"attributes":{"data_source":{"id":"4052"},"glyph":{"id":"4053"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4054"},"selection_glyph":null,"view":{"id":"4056"}},"id":"4055","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4014"}},"id":"4018","type":"CDSView"},{"attributes":{"below":[{"id":"4030"}],"center":[{"id":"4033"},{"id":"4037"}],"left":[{"id":"4034"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"4055"}],"title":{"id":"4020"},"toolbar":{"id":"4045"},"toolbar_location":null,"x_range":{"id":"4022"},"x_scale":{"id":"4026"},"y_range":{"id":"4057"},"y_scale":{"id":"4028"}},"id":"4019","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"4007"},{"id":"4045"}],"tools":[{"id":"4000"},{"id":"4001"},{"id":"4002"},{"id":"4003"},{"id":"4004"},{"id":"4005"},{"id":"4038"},{"id":"4039"},{"id":"4040"},{"id":"4041"},{"id":"4042"},{"id":"4043"}]},"id":"4077","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"3996"},"dimension":1,"ticker":null},"id":"3999","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4006","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[501]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[501]}},"selected":{"id":"4065"},"selection_policy":{"id":"4064"}},"id":"4014","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"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AAAAAAAwfEAAAAAAAEB8QAAAAAAAUHxAAAAAAABgfEAAAAAAAHB8QAAAAAAAgHxAAAAAAACQfEAAAAAAAKB8QAAAAAAAsHxAAAAAAADAfEAAAAAAANB8QAAAAAAA4HxAAAAAAADwfEAAAAAAAAB9QAAAAAAAEH1AAAAAAAAgfUAAAAAAADB9QAAAAAAAQH1AAAAAAABQfUAAAAAAAGB9QAAAAAAAcH1AAAAAAACAfUAAAAAAAJB9QAAAAAAAoH1AAAAAAACwfUAAAAAAAMB9QAAAAAAA0H1AAAAAAADgfUAAAAAAAPB9QAAAAAAAAH5AAAAAAAAQfkAAAAAAACB+QAAAAAAAMH5AAAAAAABAfkAAAAAAAFB+QAAAAAAAYH5AAAAAAABwfkAAAAAAAIB+QAAAAAAAkH5AAAAAAACgfkAAAAAAALB+QAAAAAAAwH5AAAAAAADQfkAAAAAAAOB+QAAAAAAA8H5AAAAAAAAAf0AAAAAAABB/QAAAAAAAIH9AAAAAAAAwf0AAAAAAAEB/QAAAAAAAUH9AAAAAAABgf0AAAAAAAHB/QAAAAAAAgH9AAAAAAACQf0AAAAAAAKB/QAAAAAAAsH9AAAAAAADAf0AAAAAAANB/QAAAAAAA4H9AAAAAAADwf0A=","dtype":"float64","order":"little","shape":[511]},"y":{"__ndarray__":"iIj4lw9HWj/vvdOq32NcPwHAHNofEl8/e9OOzLFLXj86jqFqbiJbP7J23YmEu1w/HDnXChMMXT8AOvZnTm9fP3uhxtk4YGI/pg9Nds1sYD89Ocu8MhRfP0H1jUB1iWA/wNcaKCtDYT9F1JdEVjphP7JZKxrQ+V8/w1TTwT1hXT+dVMzrXL9bP50/tNEcAl0/BAsWUtb6Xj95VaNVDL9gP5lTcpHAO2E/Jvq29omFYT/yd/haAaZgP+77DRnbZWA/uVJh4Y1ZYD9m5RMlWzlfP6aT8NeiBF8/Ug1OlhVwYD8o07wdjnZdP6DNqyCTWl0/xN/RjZoXYj9aZIsxwQVhP01xQb3A4WA/JtpRYlljXj95ws7/df1gPzFykm69KV8/j4vYwaneXT9Sw6Tgeg1fP0/S6ucnYV4/zZGiVnWnYD/QWOv1X6RgP/fajjZAP18/Zd8JmZsNYD/bM9L56KhdP2zWrEWYcF8//wr3Uvi4XT9ja0a2OhpfP05ICcl+o2A/DHdY8smBXz9FmZKCo6xbP8oRNOrroGA/hR19o9R0YT/uWylg+jxfP0rtrsf+7F8/sj3Lz5faXj9vmS2rBXpgP/ctUIzk7GA/c66pejjIXD+x692ocIVcP8dDGFH/pmA/RzXWNblnYD/bUhkNQ7ldPyQuiDgrl1w/2unEQXf2Xj9BIIspj/BfP3ne2sNB9V4/7EjPifLfXj8wQ5BCFTBgP0vKu4RIC2A/fIM/pwegXT+Ghw/vqR9gP5gZEr0N114/ETIjDj/2XT/xlXctP+haP3+xEonP714/mFE/VWNVYj8xWryYEdVhP4ATCDOv9Vs//CAOMgfCWz/ol+maJndZP/RHJDAx9lk/+2hKA0HRXj8VtThxbM9gP4NOAVYtOWA/N/uoFsDiXj//wDVWVDNfP1Z55S++T14/O6YzX4S9Xz8apPem2kFgPwn0q/53J14//qp16uIcYD+WE/Gi0l9eP18FGgwF2V4/5r72p/sbYT8T9vJpUKJgP0SFNJz5WWA/WI7qcjScYT81/LzD5nZgP32f31OQNmA/DCS0ZQk9Xz9ogPl2LtVdP9TO/29Vi18/4HGPaIP3YT8UzgyOCOhgPzBA1Pfjp14/lmYspAxCXT+xh3NYOkpgPzo+X4aaOWA/T6HMEyyUYD+7X3/a+a5eP6aBNDka9l4/sLy1KnedYD+30yfV6NRfP7+TuA9ow2A/Y6fhGUV1YD/rV/rbSMhfP3vu3t0mql4/hGjDgnfOXT8kTC4X8qZfP3v1zpHvlmE/PfsEoLE5Xj/4Q3OoqKRdP3bFXh9MDGA/N+dj+v1tXj+12+N/wuRhP7Lx5oshimA/EqaW7LEVYD9TiaQGQyNfP8uprAMRYl8/6tcviIOiXz/Jki/O8ltdPy5JJ2eCsV4/ZnrqAtsxYD/sb25WJ1lhP+bZULWeb2E/LwAu+cksYj/7R5mep9NgP64/FQQ4CWA/ZP3H++gqYT88cAc1dxVgP9f3ljm1bls/tcZGYdF4Xz90M9BU8TRfP4PUkaEBkl0/ludbe9w/XT/Hy11hFkVfP/8uEEXwn2A/daOU8qa0YD+NOv0iFSJhP8deXj9oYV8/dsW+P3cDYD9S+yeklf9cP0EJqHYUjWA/3bLi7tsqYj81nC+lmEheP3Rl4N9Ue1o/R5aTBlSTXT8g47JXHStgP5USBY7NhmE/CW4G6+IwXz/xgbLPCm1gP5A1U1V/BWE/mMe+Pg6cXj8BD7/hlghhP8dx5aUcPGA/lgHiRQz7Xz9zK9O1ij1hPzMzz8ytmWE/vcqcL08XYD9jM6XgAHtdP2bxphstSl8/AGz8TCX9Xz9YE2yTiMJePx6Trgp0KWA/ziUuynDXXz8FL+huw9lfP7aJoL1dH18/Iq4eHK7/Xj8cFjhGkARfPwiVw+J20mA/1Icc8mMPYD9TcYZrNL1eP4dDzchl72A/z+zX5XNZYD+XPFuXj5JgP5yG58s+hmE/ZO4ZzmIqYD9gkGZ+mbJgP8nvxEYgoWA/41ScYVNoXz9P9+rNeSpfP17gR7ekeF8/CzAUAeYQYD9eLQJF1xhfPzMSrPLtA18/lVq7h+DNXT+Y/9sRpM5aP5ArCaj10F4/X4O36Qe3Xz/is5YyaPVgP+KsrzYlzl4/Zp06E4KZXz+3Ch5z5IVcP52fPn1fZF4/rSqrNL5UYD9FCUbrJxBhP8sfGcCYKV0/FJgs/OIhXD+1xBj5pZBdP94LebEEYWA/3J4ZyA/RYD+UOXP4xyRhPwRRHKX082A/8HjFp3XsYD8RR5XXCPpgP1IsH1vIxF4/QgZ0XuFAYD/mG+3KAvlgP0lSB2cQ9l8/cAtAgBc1Xj9Gb90QdX1fP7tQPk4nmF4/9E257vsJXD+JyIRfkx1dP8rEKgLJnV8/GNFv8BryXz9JO5Vt/ZtfP/gdnh84Dl8/MPd7cNo/YD/1x8iTochgP1YkcZpGJGA/9fOOg1eLYD+sMR9DjeZdP3vLqbU0eF0/0gwjVlRPYD+a9CtvL51dPyJN+6av218/eW2idgkEYT8Wr5w33EVhP3uywI+LzmA/PhsHElEXYT+/GKsRx2hgP4/HENhmC2A/dvtX5+M7YT+9POUmt5deP1T4KRbTxl8/MJgbCxGqXT91GBKwKeRbP2v28SCfQ2A/5730WnxGXD/r4iZjE8JbPyaDXX59oV0/7ERE0UOUXj/fsy/pUc9fPyhSOA61N2E/u89EaXKoXz/j0I/s2MddP08CFWf7JV8/RoOVclFIXD/x8Ym+FrlgP/xcjCXtP2A/pdr1+UPSXz/wWvdKvatdP67jSQT4ZmA/+RmSTuTdYT+Df0peUAxgP1KHd/YsrV4/S+RoTWDKXD9L3JMSFRFaP4MJlnWjYl4/aqS4LfStYD9CTakE+HNhPzrns2wjrl8/jhAUDC9YYD9ZJznewYdgP55CXcRlSF8/V+TYIwUBYD9Gf5q4JbNdPz1dkJUZeV8/oqWH3Ha+YT/8CR0xj3JgP5rM+b4csF8/O8WmA0VPYD98ftRb/WNgP5zzpyZdemA/eZ/KcOh8YD+H9cq3t51hP1L4GhlPGGE/VsU6PPlqYD8THkIM4ENgP+7zk6wUel4/nsOhKN6LXz90DRGly9dfP9QCS9Hhr10/T5XuR5X/Xz/uj1g5ddxgP/gjmFH2J2A/fIpdwR1xXz9kI8ofjCxhP+/aR8DmNWA/4AmSr7cLYD/5egAgyI9gP55SSzWD4Fs/V8u4wPngXD900cNSYZ5cP+xJqLTzmF0/a3BKAIbfXj/7MakM+r9hP8XsJMH94GI/CVjAx+B0YT9Dx8FILH5hP56E5mxYpWA/z7KUWTuIWz+E4C67ycdcP3llNo1g9mA/MfEcx5wLYT+DKrLY5D1gP/EURkAl2GA/Ia7h4OTQYD9irex8ev5fP5Y1LWQ+32E/x3hyDKJTYD8UWMgZUQ5fP4EwYK4bD18/HmKKW++wXj9B47vmAyphP014TBhm3WA/yjXRKV58Xz/L09XP4v9gP6dHOaSUeGA/xov1AW23Xj9exr+qEzJeP+g1PZu0Kl8/ZILhx2mfYD9GFE/KyYpdP8FfeUzU7l0/Fle/YxPAXz99yDQ9XIFgP17s0MOTzmE/W5NLbhs8YT/X9vxlXY1fPy2vimifjl4/16zWdG3hXz/19WPTPi9hP3A4H+eKdF8/Wm6IbrZPYD/JRNc01VheP3P8+mKkd18/Oh/pHUldYT9YT6Aa8AtgPw/+Ih3JtV8/bPPmp/tWYD9UA+z09pteP6oRgT2Uk10/dyWd1Wp0Xj8aFYDz7bxePzutuCNcn10/T70xW93pXz8jC/Sk8+FgP0LMwMLkA2A/GNf/+SqWXj9N2GOfVIRcP1y7WOu2RVo/lW10sZHiXD8Fx9Qu57hYP757Pc3SIFw/jIXmCfbOYD8NglSU8JpgP5qA0wBm8l4/km4kGINSYD8S3Vw64G5gP3M8cP/qaGA/+583Y08hXj/3/bnWur5fPxh7YtHdHF8/iaHDDUrDXT+doG+QrkNgP+rQ4wBkrWA/cARtMmpeYD9Q5V/wU69gP9cGv6Ig0F8/haOp0mRlYD/Pg7Uk69pgP8Zn6ErAL2A/avanwf3fXz/vlE82XpRfPxbDvgllP2E/v4paUO9JYD+66+Zm9gJeP8dCDPxdMGA/5lZ5VUz0YD+AS2uRTtheP6LdxcC+bmA/QiXGdONaYj96Yhd7GFZgP5LPYpJXfGA/j5m4NP1hXz8z2xjn8NtdP6HwLWtfblw/heL+NU+4Xj8cHGRHYaZhP+zixDuGfWA/qU0rwv0JXz8UorI8tZZeP2ozOWrWc14/h8nOOlixYD9QxRp4qpFhP720FD+pS2E/2zMLNKyyYT9chW6YcWBhP/PDQfaf/l8/T2Txlgx4Xz8qSxVci6tbP7tIM5dQNF0/EOCt2H0PYD8JMe4HU/ldP80l2L4JZWA/Ga8mZp69Xj8PHepUW1ldP+TmnBnVgFw/HFQB7qBnXj9c9FYam01gPwe3Ds0jcmA/GKYkJy7tXD+le7ar2ztfP47e4+A59mI/fz4FA3yCYT8kMZ27XV1dP2jMhxuwhF0/O+rxTBJkXz+/XV4O5a9bP6HJUrlDvF4/83jDUT8fYD+Bg+MXk+tfP8i/dywbI2A/OCSVHvTCYD8P05D4z+tfP6y6T7ZjJmA/5IHZqdsiYD99YRFToQNiPyjjy/8xTWE/o9tS3VWTYD9n1ZzY9jtgP67BgJn7bV8/6PVqELMlXj9TLmN1QuFgP2bjrdn9HV8/4NzYqoz6XD/XcjRqZd5gP+3kxRK8HWI/jK+UNS2tYD9GEa2vY5NcP2thSyO3oVw/7FoJ+40EXT8xx8bITuhdP+UkvYUiAWA/8Cu0hboOYj/krB9VvgRhP/a7FnAGwWA/ycRq97HqYD//QM04VsdcP8eYH4GRxVw/D++D5xi4Xj9cweKWSzZgP0E27uZ+Il8//9YASsFUXT8O6xVl3SxgP6YoIeDuKGA/pNMze707YD+lOWSHLjxgP5JqTyBof2A/xUfWRc2bXj9iM1/0MtpfP7ZMorbUsl4/m/hW3VhqYT+q7UeN+ahgPybAfnFvnF8/0GbLjPUzYD8S1M0SL25eP8GSDitPE14/MQtq02SEXT/4S3rGZNVfP9lHwGbYGGA/pRsOXxRWYT9d4S17X3ZiP6lB4RHjLGE/1w5urS03Xz/nnOp7KG9fP9Z8/tgB2V8/fer+OxJZXz9wB/K54V5hP60jFKghvWE/91chmxq3YD95T1BmVFdgP/lqM/Y1dF0/W9jLAWFnXT+BLQA7b9RcP/vOL6v3N18/QO55ZOViYT/fjceJir9gP1rQMyZ5t2E/XQW48sdqYj/DH7O5hDtgP1Jv7L4Wxl8/g2ZK2UVCYT+fDMhsHSRgP9/b2eU9rF4/vzPasOaQYT9GJJLoxzFhP7dYUsqsBWE/iD6i6kSrYD8=","dtype":"float64","order":"little","shape":[511]}},"selected":{"id":"4074"},"selection_policy":{"id":"4073"}},"id":"4052","type":"ColumnDataSource"},{"attributes":{},"id":"4038","type":"PanTool"},{"attributes":{},"id":"3990","type":"LinearScale"},{"attributes":{},"id":"3986","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4044","type":"BoxAnnotation"},{"attributes":{},"id":"4000","type":"PanTool"},{"attributes":{},"id":"3988","type":"LinearScale"},{"attributes":{},"id":"4039","type":"WheelZoomTool"},{"attributes":{},"id":"4001","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"4077"},"toolbar_location":"above"},"id":"4078","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"4044"}},"id":"4040","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"4061"},"ticker":{"id":"3993"}},"id":"3992","type":"LinearAxis"},{"attributes":{"overlay":{"id":"4006"}},"id":"4002","type":"BoxZoomTool"},{"attributes":{"text":"White Noise"},"id":"3982","type":"Title"},{"attributes":{},"id":"4041","type":"SaveTool"},{"attributes":{},"id":"4003","type":"SaveTool"},{"attributes":{},"id":"3984","type":"DataRange1d"},{"attributes":{},"id":"4026","type":"LinearScale"},{"attributes":{},"id":"4059","type":"BasicTickFormatter"},{"attributes":{},"id":"4042","type":"ResetTool"},{"attributes":{},"id":"4068","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3992"}],"center":[{"id":"3995"},{"id":"3999"}],"left":[{"id":"3996"}],"plot_height":300,"plot_width":1200,"renderers":[{"id":"4017"}],"title":{"id":"3982"},"toolbar":{"id":"4007"},"toolbar_location":null,"x_range":{"id":"3984"},"x_scale":{"id":"3988"},"y_range":{"id":"3986"},"y_scale":{"id":"3990"}},"id":"3981","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4004","type":"ResetTool"},{"attributes":{},"id":"4070","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"3981"},0,0],[{"id":"4019"},1,0]]},"id":"4076","type":"GridBox"},{"attributes":{},"id":"4043","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4016","type":"Line"},{"attributes":{},"id":"4005","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4038"},{"id":"4039"},{"id":"4040"},{"id":"4041"},{"id":"4042"},{"id":"4043"}]},"id":"4045","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4000"},{"id":"4001"},{"id":"4002"},{"id":"4003"},{"id":"4004"},{"id":"4005"}]},"id":"4007","type":"Toolbar"}],"root_ids":["4079"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"9cf4fe92-e20b-469d-b706-eb0aac8675ad","root_ids":["4079"],"roots":{"4079":"badf17aa-84c0-47b0-bcae-04c36b1f98b7"}}];
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