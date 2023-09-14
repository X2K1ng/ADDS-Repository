(function (a, d, p) { a.fn.backstretch = function (c, b) { (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch"); 0 === a(d).scrollTop() && d.scrollTo(0, 0); return this.each(function () { var d = a(this), g = d.data("backstretch"); if (g) { if ("string" == typeof c && "function" == typeof g[c]) { g[c](b); return } b = a.extend(g.options, b); g.destroy(!0) } g = new q(this, c, b); d.data("backstretch", g) }) }; a.backstretch = function (c, b) { return a("body").backstretch(c, b).data("backstretch") }; a.expr[":"].backstretch = function (c) { return a(c).data("backstretch") !== p }; a.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5E3, fade: 0 }; var r = { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 }, s = { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxHeight: "none", maxWidth: "none", zIndex: -999999 }, q = function (c, b, e) { this.options = a.extend({}, a.fn.backstretch.defaults, e || {}); this.images = a.isArray(b) ? b : [b]; a.each(this.images, function () { a("<img />")[0].src = this }); this.isBody = c === document.body; this.$container = a(c); this.$root = this.isBody ? l ? a(d) : a(document) : this.$container; c = this.$container.children(".backstretch").first(); this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container); this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({ position: "static" === c ? "relative" : c, zIndex: "auto" === b ? 0 : b, background: "none" }), this.$wrap.css({ zIndex: -999998 })); this.$wrap.css({ position: this.isBody && l ? "fixed" : "absolute" }); this.index = 0; this.show(this.index); a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () { this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize()) }, this)) }; q.prototype = { resize: function () { try { var a = { left: 0, top: 0 }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), e = b, g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(), j = e / this.$img.data("ratio"), f; j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px")); this.$wrap.css({ width: b, height: g }).find("img:not(.deleteable)").css({ width: e, height: j }).css(a) } catch (h) { } return this }, show: function (c) { if (!(Math.abs(c) > this.images.length - 1)) { var b = this, e = b.$wrap.find("img").addClass("deleteable"), d = { relatedTarget: b.$container[0] }; b.$container.trigger(a.Event("backstretch.before", d), [b, c]); this.index = c; clearInterval(b.interval); b.$img = a("<img />").css(s).bind("load", function (f) { var h = this.width || a(f.target).width(); f = this.height || a(f.target).height(); a(this).data("ratio", h / f); a(this).fadeIn(b.options.speed || b.options.fade, function () { e.remove(); b.paused || b.cycle(); a(["after", "show"]).each(function () { b.$container.trigger(a.Event("backstretch." + this, d), [b, c]) }) }); b.resize() }).appendTo(b.$wrap); b.$img.attr("src", b.images[c]); return b } }, next: function () { return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0) }, prev: function () { return this.show(0 === this.index ? this.images.length - 1 : this.index - 1) }, pause: function () { this.paused = !0; return this }, resume: function () { this.paused = !1; this.next(); return this }, cycle: function () { 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () { this.paused || this.next() }, this), this.options.duration)); return this }, destroy: function (c) { a(d).off("resize.backstretch orientationchange.backstretch"); clearInterval(this.interval); c || this.$wrap.remove(); this.$container.removeData("backstretch") } }; var l, f = navigator.userAgent, m = navigator.platform, e = f.match(/AppleWebKit\/([0-9]+)/), e = !!e && e[1], h = f.match(/Fennec\/([0-9]+)/), h = !!h && h[1], n = f.match(/Opera Mobi\/([0-9]+)/), t = !!n && n[1], k = f.match(/MSIE ([0-9]+)/), k = !!k && k[1]; l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k) })(jQuery, window);

$("body.modal").backstretch(
    [
        "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide02.jpg"
        , "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide03.jpg"
        , "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide04.jpg"
    ], { duration: 3000, fade: 750 });

//$("#forgot_password_instructions").text("Enter your Selwyn Email and we will send you a link to your password.");

// UOFA : INSERT CUSTOM SCRIPTS BELOW

$("#dashboard-activity")
    .before(
        '<div style="font-size: 16px; font-weight: bold;">Your <a href="https://access.adelaide.edu.au/" target="_blank">enrolled courses</a> appear here once published by your course coordinator.<br/>' +
        'Use Turnitin to <a href="https://myuni.adelaide.edu.au/search/all_courses/" target="_blank">check the originality</a> of your draft assignments.</div>'
    );

// UOFA JIRA MUT-455 : Disable end user ability to change default email address (Chetan)
$(".channel:not(.default)>.email_meta").html("");

// UOFA JIRA MUT-483 : Maintaining email configuration in Canvas
$("select#default_email_id option:not(:selected)").remove();

// UOFA JIRA MUT-200 : TAT Google Analytics Code (Chetan)
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-15181647-9', 'auto', 'uofa');
ga('uofa.send', 'pageview');

// UOFA JIRA AAD-198 : Custom footer links
var copyrightLink = '<a href="https://www.adelaide.edu.au/library/copyright/" target="_blank">Copyright</a>';

var touLink = '<a href="https://www.canvaslms.com/policies/intl-terms-of-use" target="_blank">Terms of Use</a>';

var securityLink = '<a href="https://www.adelaide.edu.au/policies/2783/" target="_blank">IT Acceptable Use and Security Policy</a>';

var privacyLink = '<a href="https://www.adelaide.edu.au/policies/62/" target="_blank">Privacy</a>';

$('<div class="ic-app-footer ic-app-footer__links">' + copyrightLink + touLink + securityLink + privacyLink + '</div>').insertBefore('#footer');



//////////////////////////////////////////////////////////////
//DATACAMP LIGHT IMPLEMENTATION FOR PEARSON PYTHON COURSES //
////////////////////////////////////////////////////////////

// add the Datacamp Light JS (to allow inline instances)
var dclScript = document.createElement("script");
dclScript.src = 'https://cdn.datacamp.com/dcl-react.js.gz'; // 'all new version'
//dclScript.src = 'https://cdn.datacamp.com/datacamp-light-latest.min.js'; // 'old version'
dclScript.type = 'text/javascript';
dclScript.onload = function() {
	console.log('Datacamp Light JS loaded');
};
document.body.appendChild(dclScript);


// set the keyboard keys to use for the shortcuts (using the 'accesskey' attribute)
var exitAccessKey = '2';
var runAccessKey = '1';

// set up a mutation observer to see when the cursor appears within a DCL instance (i.e. when the editor becomes active)
var cursorObserver = new MutationObserver(function(mutations) {
	if($('.ace_cursor-layer').not('.ace_hidden-cursors').length > 0) {
		var dclInstance = $('.ace_cursor-layer').not('.ace_hidden-cursors').eq(0).closest('.datacamp-exercise');

		if(dclInstance.length > 0) {
			// flag which editor is the current one (remains 'current' until another instance becomes active)
			$('.datacamp-exercise').not(dclInstance).removeClass('current-editor');
			dclInstance.addClass('current-editor');

			// this editor is active, so move the exit point to before this instance & set its accesskey
			dclInstance.before($('.dcl-exit-point'));
			$('.dcl-exit-point').attr('accesskey', exitAccessKey);

			// remove any previous 'run' shortcut, and apply it to this DCL instance
			$('button[class*="Button-module__primary"]').removeAttr('accesskey');
			$('button[class*="Button-module__primary"]', dclInstance).attr('accesskey', runAccessKey);
		}
	} else {
		// remove the accesskey (shortcut) for the exit as there's no active editor
		$('.dcl-exit-point').removeAttr('accesskey');
	}
});
var cursorObserverConfig = { attributes: true, childList: false, subtree: false	};

// set up a mutation observer for when content has been added to the page (to check if a Datacamp Light instance has been added)
var dclObserver = new MutationObserver(function(mutations) {
	if($('.datacamp-exercise').length > 0) {
		// add an exit point to get out of DCL via the keyboard (only one is needed on the page)
		if($('.dcl-exit-point').length == 0) {
			$('h1.page-title').after('<a href="#" class="dcl-exit-point sr-only" accesskey="'+exitAccessKey+'">Code editor exit point</a>');
			$('.dcl-exit-point').click(function(e) { e.preventDefault(); })
		}

		var numDCLSetUp = 0;
		$('.datacamp-exercise').each(function(index) {
			// check if instance has been initialised
			if($('.ace_text-input', $(this)).length > 0) {
				if($('.dcl-skip-link', $(this)).length == 0) {
					numDCLSetUp++;

					$(this)
						.prepend('<a class="dcl-skip-link sr-only" href="#editor'+index+'">Skip over code editor</a>')
						.append('<a name="editor'+index+'" id="editor'+index+'"></a>');

					// remove any previous 'run' shortcut, and apply it to this DCL instance
					$('button[class*="Button-module__primary"]').removeAttr('accesskey');
					$('button[class*="Button-module__primary"]', $(this)).attr('accesskey', runAccessKey);

					// add the cursor mutation observer to this instance of DCL
					$('.ace_cursor-layer', $(this)).each(function(index) {
						cursorObserver.observe($(this)[0], cursorObserverConfig);
					})
				}
			}
		})

		if(numDCLSetUp == $('.datacamp-exercise').length) dclObserver.disconnect();
	}
});
var dclObserverConfig = { attributes: false, childList: true, subtree: true };
dclObserver.observe($('body')[0], dclObserverConfig);

/////////////////////////////////////////////////////////////
// END DATACAMP LIGHT IMPLEMENTATION                      //
///////////////////////////////////////////////////////////

// H5P TOOL CONFIG AAD-722 : adjust the size of the content in iframe
var h5pScript = document.createElement('script');
h5pScript.setAttribute('charset', 'UTF-8');
h5pScript.setAttribute('src', 'https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js');
document.body.appendChild(h5pScript);

// AAD-1082 Installation of Atomic Search
var atomicSearchConfig = {
    accountId: 1,
    externalToolId: 1928,
  };
   
  var atomicSearchWidgetScript = document.createElement("script");
  atomicSearchWidgetScript.src = "https://d2u53n8918fnto.cloudfront.net/atomic_search_widget.js" + "?ts=" + new Date().getTime();
  document.getElementsByTagName("head")[0].appendChild(atomicSearchWidgetScript); 

// TAPP-2266 Explorance Blue Start
var BLUE_CANVAS_SETUP={connectorUrl:"https://eselt.adelaide.edu.au/BlueConnector/",canvasAPI:"https://myuni.adelaide.edu.au",domainName:"com.explorance",consumerID:"4ka4tx4nLdejNUrQDGL9zA==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://eselt.adelaide.edu.au/BlueConnector//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);
// TAPP-2266 Explorance Blue End

// TAPP-3037, Google Analytics 4
var ga4 = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4L9R7GR0S9"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4L9R7GR0S9');
    </script>
`;

$(ga4).insertAfter("head");


// ==================================
// Snippet for Canvas theme JS to inject an iFrame that can pass through the student, course and week data.
// ==================================

window.addEventListener('load', function() {
// only do this when the DOM has loaded - don't need all styles or images yet - just the HTML structure
    var userID, courseID;
    userID = this.ENV.current_user_id; //grab the de-identified Canvas API ID for the user
    courseID = this.ENV.COURSE_ID; //grab the current course

    if ($('#injectionSite').length != 0) { //check to see if the div exists; don't do anything if the div doesn't exist

        // grab the current week too? Or can we chuck that into the div?
        let activity = $("#injectionSite").attr("data-activity"); //should return either 'checkin' or 'plan'
        let programme = $("#injectionSite").attr("data-programme");

        // create base url; we then build upon this with paramaters.
        var BASE_URL;
        var param;
        if (activity == "plan") {
            BASE_URL = "https://mediaproduction.adelaide.edu.au/alliance-interactives/#/planning";

            param = "?student=" + userID + "&" + "course=" + courseID;
            if(programme){
                param = param + "&p=" + programme;
            }
            $('#injectionSite').append("<p style='text-align:center'><a style='color: #ffffff; background: #102535; padding: 13px; margin-bottom: 10px; margin: auto; border-radius: 5px; cursor: pointer; text-decoration: none;' target='_blank' href=" + BASE_URL + param + ">Launch the planning tool</a></p>");
        }

    } else {
        console.log("No injection site found");
    }

// create the supervisor view of students in the course and then link out to their planner and check-ins

    var arr = [];
    var courseID = this.ENV.COURSE_ID; //grab the current course

    if($('#supervisorView').length != 0) { // look for the div, don't do anything if there's no supervisor view div
        let programme = $("#supervisorView").attr("data-programme");
        $.get("/api/v1/courses/" + courseID + "/students", function(e) {
            arr = e;
            console.log(arr);

            const uniqueIds = [];
            students = arr.filter(element => {
                const isDuplicate = uniqueIds.includes(element.id);

                if (!isDuplicate) {
                    uniqueIds.push(element.id);

                    return true;
                }
            });

                for(var i = 0; i < students.length; i++){
                    var link;
                    console.log(students[i]);
                    //build a link to the planner and the check-in
                    var planURL = "https://mediaproduction.adelaide.edu.au/alliance-interactives/#/planning?s=true&student=" + students[i].id + "&" + "course=" + courseID + "&" + "p=" + programme;

                    // for each student, create a link to their planner and check-ins
                    link = "<p><strong>" + students[i].name + "</strong></p><a href=" + planURL + ">Plan </a>";

                    $('#supervisorView').append(link);

                }

        });
    }
});


// ==================================
// END Planner and Check-In injection
// ======