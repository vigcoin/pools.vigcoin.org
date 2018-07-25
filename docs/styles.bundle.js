webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n        #coinName {\n            text-transform: capitalize;\n        }\n        body {\n            padding-top: 65px;\n            padding-bottom: 80px;\n            overflow-y: scroll;\n        }\n        .container {\n            font-size: 1.1em;\n        }\n        #loading {\n            font-size: 2em;\n        }\n        .stats {\n            margin-bottom: 10px;\n            margin-top: 5px;\n        }\n        .stats:last-child {\n            width: auto;\n        }\n        .stats>h3>i {\n            font-size: 0.80em;\n            width: 21px;\n        }\n        .stats>div {\n            padding: 5px 0;\n        }\n        .stats>div>.fa {\n            width: 25px;\n        }\n        .stats>div>span:first-of-type {\n            font-weight: bold;\n        }\n        #stats_updated {\n            opacity: 0;\n            float: right;\n            margin-left: 30px;\n            color: #e8e8e8;\n            line-height: 47px;\n            font-size: 0.9em;\n        }\n        footer {\n            position: fixed;\n            bottom: 0;\n            width: 100%;\n            background-color: #f5f5f5;\n        }\n        footer>div {\n            margin: 10px auto;\n            text-align: center;\n        }\n        .marketRate {\n    display: none;\n}\n        a {\n    color: #03a678;\n}\n        a:hover {\n    color: #025b42;\n}\n        body {\n    font-size: 14px;\n    line-height: 1.428571429;\n    color: #6f6e6e;\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\n}\n        h1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Roboto Condensed', Arial, sans-serif;\n}\n        h3,\n.h3 {\n    font-size: 32px;\n    margin-bottom: 14px;\n}\n        .navbar-inverse {\n    background-color: #2D5768;\n    border-color: #f9f9f8;\n    border-width: 0;\n}\n        .navbar-inverse .container {\n    background-color: rgba(0, 0, 0, 0);\n}\n        .navbar-inverse .navbar-brand {\n    color: #fff;\n}\n        .navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0);\n}\n        .navbar-inverse .navbar-text {\n    color: #CEE3E4;\n}\n        .navbar-inverse .navbar-nav>li>a {\n    color: #F0F9FA;\n}\n        .navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a:focus {\n    color: #ffffff;\n    background-color: transparent;\n}\n        .navbar-inverse .navbar-nav>.active>a,\n.navbar-inverse .navbar-nav>.active>a:hover,\n.navbar-inverse .navbar-nav>.active>a:focus {\n    color: #ffffff;\n    background-color: #03a678;\n}\n        #stats_updated {\n    color: #F4FC3D;\n}\n        hr {\n    border-top-color: #BBBBBB;\n}\n        .stats>div:not(#addressError) {\n    color: #7C7C7C;\n    padding: 10px 0px;\n}\n        .stats>div:not(#addressError).marketFooter {\n    padding: 5px 0;\n}\n        .stats>div:not(#addressError)>i.fa {\n    color: #03a678;\n    font-size: 21px;\n    width: 30px;\n    text-align: center;\n}\n        .stats>div:not(#addressError)>span:not(.input-group-btn):first-of-type {\n    font-weight: 500;\n    padding: 0 2px;\n    color: #336A80;\n}\n        .form-control {\n    border: 1px solid #03a678;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n}\n        .form-control:focus {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-color: #027454;\n}\n        .input-group-addon {\n    background-color: #03a678;\n    color: #fff;\n    border-color: #03a678;\n}\n        .btn-default {\n    color: #ffffff;\n    background-color: #03a678;\n    border-color: #03a678;\n}\n        .btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active,\n.open>.dropdown-toggle.btn-default {\n    color: #ffffff;\n    background-color: #027454;\n    border-color: #026a4d;\n}\n        .btn-default:active,\n.btn-default.active,\n.open>.dropdown-toggle.btn-default {\n    background-image: none;\n}\n        .btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n    background-color: #03a678;\n    border-color: #03a678;\n}\n        .btn-default .badge {\n    color: #03a678;\n    background-color: #ffffff;\n}\n        .table th,\n.table .miningAppTitle {\n    font-weight: 500;\n}\n        code {\n    padding: 2px 10px;\n    color: #DB2B24;\n    background-color: #FDECF1;\n    border-radius: 0;\n}\n        .container .paymentsStatHolder,\n.container .blocksStatHolder {\n    padding-top: 20px;\n}\n        .container .paymentsStatHolder>span,\n.container .blocksStatHolder>span {\n    border-width: 0;\n    padding: 6px 13px;\n}\n        .container .paymentsStatHolder>span>span,\n.container .blocksStatHolder>span>span {\n    font-weight: 500;\n}\n        .bg-primary {\n    background-color: #03a678;\n}\n        .bg-info {\n    background-color: #336A80;\n    color: #fff;\n}\n        .table>thead>tr>td.success,\n.table>tbody>tr>td.success,\n.table>tfoot>tr>td.success,\n.table>thead>tr>th.success,\n.table>tbody>tr>th.success,\n.table>tfoot>tr>th.success,\n.table>thead>tr.success>td,\n.table>tbody>tr.success>td,\n.table>tfoot>tr.success>td,\n.table>thead>tr.success>th,\n.table>tbody>tr.success>th,\n.table>tfoot>tr.success>th {\n    background-color: #f4f9ff;\n}\n        .table-hover>tbody>tr>td.success:hover,\n.table-hover>tbody>tr>th.success:hover,\n.table-hover>tbody>tr.success:hover>td,\n.table-hover>tbody>tr:hover>.success,\n.table-hover>tbody>tr.success:hover>th {\n    background-color: #dbebff;\n}\n        .table>thead>tr>th {\n    color: #336A80;\n    border-bottom-color: #336A80;\n}\n        .table>tbody>tr>td {\n    border-top-color: #c9e0e9;\n}\n        footer {\n    background-color: #FDFDFD;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map