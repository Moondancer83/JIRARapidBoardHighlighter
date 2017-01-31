// ==UserScript==
// @name         JIRA Rapid Board highlighter
// @namespace    http://www.kalee.hu
// @version      0.0.1
// @description  Highlight closed stories on JIRA Rapid Board.
// @author       Moondancer83
// @homepage     https://github.com/Moondancer83/JIRARapidBoardHighlighter
// @downloadURL  https://github.com/Moondancer83/JIRARapidBoardHighlighter/blob/master/index.js
// @updateURL    https://github.com/Moondancer83/JIRARapidBoardHighlighter/blob/master/index.js
// @include      /jira.*/secure/RapidBoard.jspa*/
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var colors = {
        done: "#e0efdc",
        my: "#efdce0"
    };
    var head = $("head");
    var username = $("#header-details-user-fullname").data('username');

    setTimeout(function() {
        setStyles();
        markMyIssues();
    }, 2000);

    function setStyles() {
        head.append("<style>" +
                    ".js-issue.ghx-issue-compact.ghx-done {background-color:" + colors.done+ "} " +
                    ".js-issue.ghx-issue-compact.ghx-issue-my {background-color: " + colors.my + "}" +
                    "</style>");
    }
    function markMyIssues() {
        $(".ghx-end img[src*=" + username +"].ghx-avatar-img").closest(".js-issue:not('.ghx-done')").addClass("ghx-issue-my");
    }
})();
