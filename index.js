// ==UserScript==
// @name         JIRA Rapid Board highlighter
// @namespace    http://kalee.hu
// @version      0.0.2
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

    var head = $("head");
    head.append("<style>.js-issue.ghx-issue-compact.ghx-done {background-color: #98FB98}</style>");
})();
