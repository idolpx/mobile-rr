var info;
var settings;

jQuery(document).ready(function($) {
    var ws = null;
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'media/a.mp3');
    audio.setAttribute('autoplay', 'autoplay');
    $.get();
    audio.addEventListener("load", function() {
        audio.play();
    }, true);

    // Stop WebSocket
    function stopWS() {
        // Close WS if already opened
        if (ws) {
            ws.close();
            ws = null;
        }
    }
    // Start WebSocket
    function startWS(url) {
        if (url === undefined)
            url = document.location.host;

        stopWS();
        ws = new WebSocket('ws://' + url + '/ws');
        ws.binaryType = "arraybuffer";
        ws.onopen = function(e) {
            term.echo("[[b;yellow;]Connected] to [[b;white;]" + url + "]");
            term.set_prompt(url + "[[;green;] #] ");
        };
        ws.onclose = function(e) {
            term.echo("[[b;red;]Disconnected]");
            term.set_prompt('[[;red;]>] ');
            stopWS();
        };
        ws.onerror = function(e) {
            term.echo("Error");
        };
        ws.onmessage = function(e) {
            var msg = "";
            var i;

            if (e.data instanceof ArrayBuffer) {
                // WS binary in blue
                color = 'light';
                var bytes = new Uint8Array(e.data);

                for (i = 0; i < bytes.length; i++) {
                    msg += String.fromCharCode(bytes[i]);
                }
            } else {
                // WS text in green
                color = 'green';
                msg = e.data;
            }

            if (msg.indexOf("Progress:") > -1)
            {
                i = parseInt(msg.substring(10));
                string = progress(i, 35);

                term.set_prompt(string);

                if ( i == 100)
                    term.set_prompt(url + "[[;green;] #] ");
            }
            else
            {
                term.echo(msg);
            }

            if (msg.indexOf("Rick Roll Sent") > -1)
            {
                audio.play();
                getSettings();
            }
        };
    }
    function progress(percent, width) {
        var size = Math.round(width*percent/100);
        var left = '', taken = '', i;
        for (i=size; i--;) {
            taken += '=';
        }
        if (taken.length > 0) {
            taken = taken.replace(/=$/, '>');
        }
        for (i=width-size; i--;) {
            left += ' ';
        }
        return '[' + taken + left + '] ' + percent + '%';
    }
    var term = $('#console').terminal(function(command, term) {
            if (ws === null) {
                startWS("10.10.10.1");
            } else {
                ws.send(command);
            }
            var cmd = $.terminal.parse_command(command);
            if (cmd.name == 'progress') {
                var i = 0, size = cmd.args[0];
                prompt = term.get_prompt();
                string = progress(0, size);
                term.set_prompt(progress);
                animation = true;
                (function loop() {
                    string = progress(i++, size);
                    term.set_prompt(string);
                    if (i < 100) {
                        timer = setTimeout(loop, 100);
                    } else {
                        term.echo(progress(i, size) + ' [[b;green;]OK]')
                            .set_prompt(prompt);
                    }
                })();
            }
        },
        // Default terminal settings and greetings
        {
            name: 'mobile-rr',
            prompt: '[[;red;]>] ',
            checkArity: false,
            greetings: "===========================================\n" +
                "=    ESP8266 Mobile Rick Roll Terminal    =\n" +
                "===========================================\n",
            onInit: function() {
                $(".terminal").css("text-shadow", "0 0 0 !important");
            }
        });

    // Button Bindings
    $(".command").click(function() {
        term.exec(this.value);
    });
    $("#cmdline").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            term.exec(this.value);
            this.value = "";
        }
    });

    $("#drawer").bind("tap", function() {
        $("#controls").animate({
            height: "toggle"
        }, {
            duration: 300,
            complete: function() {
                $(window).resize();
            }
        });
    });

    $("#console").doubleTap( function() {
        $("#header, #footer").animate({
            height: "toggle"
        }, {
            duration: 300,
            complete: function() {
                $(window).resize();
            }
        });

    });

    //Load info and settings on page load
    $(document).bind("pagebeforechange", function(e, data) {
        var page = data.toPage.toString();
        console.log("INFO: pagebeforechange to [" + page + "]");
        if (page.indexOf("#info") > 0) {
            $("#loader").loader("show");
            getInfo();
        }
        if (page.indexOf("#settings") > 0) {
            $("#loader").loader("show");
            getSettings();
            getMessage();
        }

        try {
            page = data.prevPage.attr("id");
            console.log("INFO: pagebeforechange from [" + page + "]");
        } catch (e) {

        }

    });

    $("#loader").loader({
        defaults: true
    });

    $("#info [data-rel='back']").click(function(e) {
        e.preventDefault();
        $.mobile.changePage("#gui", {
            reloadPage: false,
            transition: "slide",
            reverse: false
        });
    });

    $(window).resize(function() {
        if ($('#console').is(':visible') && ($('#footer').is(':visible'))) {
            $("#console").height($(window).height() - $("#console").position().top - $("#footer").outerHeight() - 20);
        } else if ($('#console').is(':visible')) {
            $("#console").height($(window).height() - $("#console").position().top - 20);
        }

    });

    function getInfo() {
        $.ajax({
                url: "http://10.10.10.1/info",
            })
            .done(function(data) {
                $("#info_json").val(data);
                info = JSON.parse(data);
                setFields( info );
                $("#loader").loader("hide");
            });
    }

    function getSettings() {
        $.ajax({
                url: "http://10.10.10.1/settings",
            })
            .done(function(data) {
                $("#settings_json").val(data);
                settings = JSON.parse(data);
                setFields( settings );
                $("#loader").loader("hide");
            });
    }

    function getMessage() {
        $.ajax({
                url: "/message.htm",
            })
            .done(function(data) {
                $("#msg").val(data);
            });
    }

    function setFields( json ) {
        $.each(json, function(k, v) {
            //check for format
            //console.log("setFields: '" + k + "'=[" + v +"]");
            f = $("#"+k).attr("format");
            if (f) {
                f = f.replace('{key}', k);
                f = f.replace('{value}', v);
                //console.log("Format: " + v);
                v = eval(f);
            }
            $("#"+k).val(v).attr("tag", v);
        });
    }

    startWS("10.10.10.1");
    $(window).resize();
    getSettings();

});

function formatString( v ) {
    return v;
}

function bytesToSize( bytes ) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i === 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

function boolToOnOff( value ) {
    return (value) ? "on" : "off";
}

(function($) {
     $.fn.doubleTap = function(doubleTapCallback) {
         return this.each(function(){
			var elm = this;
			var lastTap = 0;
			$(elm).bind('vmousedown', function (e) {
                                var now = (new Date()).valueOf();
				var diff = (now - lastTap);
                                lastTap = now ;
                                if (diff < 250) {
		                    if($.isFunction( doubleTapCallback ))
		                    {
		                       doubleTapCallback.call(elm);
		                    }
                                }
			});
         });
    };
})(jQuery);
