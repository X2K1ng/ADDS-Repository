(function (a, d, p) { a.fn.backstretch = function (c, b) { (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch"); 0 === a(d).scrollTop() && d.scrollTo(0, 0); return this.each(function () { var d = a(this), g = d.data("backstretch"); if (g) { if ("string" == typeof c && "function" == typeof g[c]) { g[c](b); return } b = a.extend(g.options, b); g.destroy(!0) } g = new q(this, c, b); d.data("backstretch", g) }) }; a.backstretch = function (c, b) { return a("body").backstretch(c, b).data("backstretch") }; a.expr[":"].backstretch = function (c) { return a(c).data("backstretch") !== p }; a.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5E3, fade: 0 }; var r = { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 }, s = { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxHeight: "none", maxWidth: "none", zIndex: -999999 }, q = function (c, b, e) { this.options = a.extend({}, a.fn.backstretch.defaults, e || {}); this.images = a.isArray(b) ? b : [b]; a.each(this.images, function () { a("<img />")[0].src = this }); this.isBody = c === document.body; this.$container = a(c); this.$root = this.isBody ? l ? a(d) : a(document) : this.$container; c = this.$container.children(".backstretch").first(); this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container); this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({ position: "static" === c ? "relative" : c, zIndex: "auto" === b ? 0 : b, background: "none" }), this.$wrap.css({ zIndex: -999998 })); this.$wrap.css({ position: this.isBody && l ? "fixed" : "absolute" }); this.index = 0; this.show(this.index); a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () { this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize()) }, this)) }; q.prototype = { resize: function () { try { var a = { left: 0, top: 0 }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), e = b, g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(), j = e / this.$img.data("ratio"), f; j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px")); this.$wrap.css({ width: b, height: g }).find("img:not(.deleteable)").css({ width: e, height: j }).css(a) } catch (h) { } return this }, show: function (c) { if (!(Math.abs(c) > this.images.length - 1)) { var b = this, e = b.$wrap.find("img").addClass("deleteable"), d = { relatedTarget: b.$container[0] }; b.$container.trigger(a.Event("backstretch.before", d), [b, c]); this.index = c; clearInterval(b.interval); b.$img = a("<img />").css(s).bind("load", function (f) { var h = this.width || a(f.target).width(); f = this.height || a(f.target).height(); a(this).data("ratio", h / f); a(this).fadeIn(b.options.speed || b.options.fade, function () { e.remove(); b.paused || b.cycle(); a(["after", "show"]).each(function () { b.$container.trigger(a.Event("backstretch." + this, d), [b, c]) }) }); b.resize() }).appendTo(b.$wrap); b.$img.attr("src", b.images[c]); return b } }, next: function () { return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0) }, prev: function () { return this.show(0 === this.index ? this.images.length - 1 : this.index - 1) }, pause: function () { this.paused = !0; return this }, resume: function () { this.paused = !1; this.next(); return this }, cycle: function () { 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () { this.paused || this.next() }, this), this.options.duration)); return this }, destroy: function (c) { a(d).off("resize.backstretch orientationchange.backstretch"); clearInterval(this.interval); c || this.$wrap.remove(); this.$container.removeData("backstretch") } }; var l, f = navigator.userAgent, m = navigator.platform, e = f.match(/AppleWebKit\/([0-9]+)/), e = !!e && e[1], h = f.match(/Fennec\/([0-9]+)/), h = !!h && h[1], n = f.match(/Opera Mobi\/([0-9]+)/), t = !!n && n[1], k = f.match(/MSIE ([0-9]+)/), k = !!k && k[1]; l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k) })(jQuery, window);

$("body.modal").backstretch(
    [
        "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide02.jpg"
        , "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide03.jpg"
        , "https://s3.amazonaws.com/SSL_Assets/Adelaide/Styles/Headers/slide04.jpg"
    ], { duration: 3000, fade: 750 });

//$("#forgot_password_instructions").text("Enter your Selwyn Email and we will send you a link to your password.");

// UOFA : INSERT CUSTOM SCRIPTS BELOW

$("#dashboard-activity").before(
    '<div id="uofa_dashboard_text"style="font-size: 16px; font-weight: bold;">Your <a href = "https://myadelaide.uni.adelaide.edu.au/" target = "_blank" >enrolled courses</a> appear here once published by your course coordinator.<br /> ' +
    '<a href="https://myuni.adelaide.edu.au/search/all_courses/" target="_blank">Click here</a> to use Turnitin to check the originality of your draft assignments or to self-enrol in Library training courses.</div>'
);

// UOFA JIRA MUT-455 : Disable end user ability to change default email address (Chetan)
$(".channel:not(.default)>.email_meta").html("");

// UOFA JIRA MUT-483 : Maintaining email configuration in Canvas
$("select#default_email_id option:not(:selected)").remove();

$("<span style='color: red; font-weight: bold;'> Default email address cannot be changed!</span>").insertAfter("#default_email_id");

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

////////////////////////////////////////////////////
// Cidilabs DESIGN TOOLS CONFIG AAD-722           //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '46402',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
         // OPTIONAL: Limit by course format
         limitByFormat: false, // Change to true to limit by format
         // adjust the formats as needed. Format must be set for the course and in this array for tools to load
         formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Make assignment rubrics sortable
        sortableRubrics: true,
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1234',
            '987654'
        ]
};

// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {
        console.log('master_controls.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

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
    externalToolId: 5038,
  };

  var atomicSearchWidgetScript = document.createElement("script");
  atomicSearchWidgetScript.src = "https://d2u53n8918fnto.cloudfront.net/atomic_search_widget.js" + "?ts=" + new Date().getTime();
  document.getElementsByTagName("head")[0].appendChild(atomicSearchWidgetScript);

// TAPP-3369 Explorance Blue
var BLUE_CANVAS_SETUP={connectorUrl:"https://eselt.adelaide.edu.au/BlueConnector/",canvasAPI:"https://myuni.adelaide.edu.au",domainName:"com.explorance",consumerID:"CWN1RxHsa4vY9b2QgVC7jQ==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://eselt.adelaide.edu.au/BlueConnector//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);

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

// TAPP-3251, Global announcement filter
$(window).on("load", function () {
  if ((admin_settings = window.location.href.match(/\/accounts\/([\d]+)\//))) {
    var account_id = admin_settings[1];

    var tab_header = `
        <li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-filtered-announcements" aria-labelledby="tab-filtered-announcements-link" aria-selected="false">
            <a href="#tab-filtered-announcements" id="tab-filtered-announcements-link" class="ui-tabs-anchor" role="presentation" tabindex="-1">Filter Announcements</a>
        </li>
    `;
    $(tab_header).insertAfter('li[aria-controls="tab-announcements"]');

    var tab_content = `
        <div id="tab-filtered-announcements" aria-labelledby="tab-filtered-announcements-link" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="true" aria-hidden="false style="display: none;">
            <h2>Filter announcements</h2>
            <div class="grid-row">
                <div class="col-xs-12 col-lg-2">
                    <div class="ic-Form-control">
                        <label for="filtered_announcements_start" class="ic-Label">
                        Start date
                        </label>
                        <input value="" class="ic-Input" id="filtered_announcements_start" type="text" placeholder="YYYY-MM-DD"/>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-2">
                    <div class="ic-Form-control">
                        <label for="filtered_announcements_end" class="ic-Label">
                        End date
                        </label>
                        <input value="" class="ic-Input" id="filtered_announcements_end" type="text" placeholder="YYYY-MM-DD"/>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-2">
                    <button type="button" class="Button" id="filtered_announcements_button" style="top: 26px">Apply</button>
                </div>
            </div>
            <p>Note: Only announcements that are visible for your role get returned!</p>
            <div id="filtered_announcements_result"></div>
        </div>
    `;
    $(tab_content).insertAfter("div#tab-announcements");

    $("div#account_settings_tabs").tabs("refresh");

    $("button#filtered_announcements_button").click(() =>
      filter_announcements()
    );

    var announcements = [];
    fetch(
      `${window.location.origin}/api/v1/accounts/${account_id}/account_notifications?include_past=1`
    )
      .then((response) => response.json())
      .then(
        (data) =>
        (announcements = data.sort((a, b) => {
          return (
            a.start_at.localeCompare(b.start_at) ||
            a.end_at.localeCompare(b.end_at)
          );
        }))
      );
  }

  function map_icon(icon) {
    switch (icon) {
      case "information":
        return "info";
        break;
      case "error":
        return "warning";
        break;
      case "calendar":
        return "calendar-month";
        break;
      default:
        return icon;
    }
  }

  function map_notification(icon) {
    switch (icon) {
      case "calendar":
      case "information":
      case "question":
        return "info";
        break;
      case "error":
        return "danger";
        break;
      case "warning":
        return "alert";
        break;
      default:
        return icon;
    }
  }

  function filter_announcements() {
    $("div#filtered_announcements_result").html("");
    let start = new Date(
      $("input#filtered_announcements_start").val() + " 00:00:00"
    ).toISOString();
    let end = new Date(
      $("input#filtered_announcements_end").val() + " 23:59:59"
    ).toISOString();
    let filtered = announcements.filter((item) => {
      return (
        (item.start_at <= start && item.end_at >= end) ||
        (item.start_at >= start && item.start_at <= end) ||
        (item.end_at >= start && item.end_at <= end)
      );
    });
    let elements = [];
    elements.push(
      `<p>Number of visible announcements during selected time period: ${filtered.length}</p>`
    );
    elements.push('<ul class="announcements_list unstyled_list">');
    for (const item of filtered) {
      let html = `
            <li class="announcements_list_item">
                <div class="ic-notification ic-notification--admin-created ic-notification--${map_notification(item.icon)}">
                    <div class="ic-notification__icon" role="presentation">
                        <i class="icon-${map_icon(item.icon)}"></i>
                    </div>
                    <div class="notification_account_content">
                        <div class="ic-notification__content">
                            <div class="ic-notification__message">
                                <h2 class="ic-notification__title notification_subject">
                                    ${item.subject}
                                </h2>
                                <span class="notification_message">
                                    ${item.message}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="announcement-details">
                    <div class="announcement-details-post-info">
                        <div class="announcement-details-post-info__datetime">
                            from ${new Date(item.start_at).toLocaleString()} to ${new Date(item.end_at).toLocaleString()}
                        </div>
                    </div>
                    <div class="announcement-details-roles">
                        Send only to the following types of users:
                        (If none are selected, show to everyone in the entire account)<br />
                        ${item.roles.sort().join(", ")}
                    </div>
                </div>
            </li>
        `;
      elements.push(html);
    }
    elements.push("</ul>");

    $("div#filtered_announcements_result").html(elements.join(""));
  }

});
