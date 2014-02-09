(function () { "use strict";
var _Either = {}
_Either.Either_Impl_ = function() { }
var ExtensionIndex = function() {
	this.LINKAGE_CANSEL_JSFL = "LinkageCancel.jsfl";
	this.LINKAGE_JSFL = "Linkage.jsfl";
	js.Browser.window.addEventListener("load",$bind(this,this.initialize));
};
ExtensionIndex.main = function() {
	new ExtensionIndex();
}
ExtensionIndex.prototype = {
	runJsfl: function(jsfl) {
		this.csInterfaceUtil.runJsflScript(this.csInterfaceUtil.getExtensionUri() + "/" + jsfl);
	}
	,initialize: function(event) {
		var _g = this;
		this.csInterfaceUtil = flash_extension.csinterface.CSInterfaceUtil.create();
		var addButtonElement = new $("#add");
		addButtonElement.mousedown(function(event1) {
			_g.runJsfl(_g.LINKAGE_JSFL);
		});
		var removeButtonElement = new $("#remove");
		removeButtonElement.mousedown(function(event1) {
			_g.runJsfl(_g.LINKAGE_CANSEL_JSFL);
		});
	}
}
var flash_extension = {}
flash_extension.csinterface = {}
flash_extension.csinterface.CSInterfaceUtil = function(csInterface) {
	this.csInterface = csInterface;
};
flash_extension.csinterface.CSInterfaceUtil.create = function() {
	return new flash_extension.csinterface.CSInterfaceUtil(new CSInterface());
}
flash_extension.csinterface.CSInterfaceUtil.prototype = {
	getExtensionUri: function() {
		return "file:///" + this.csInterface.getSystemPath(SystemPath.EXTENSION);
	}
	,flTrace: function(text) {
		this.csInterface.evalScript("fl.trace(\"" + text + "\")");
	}
	,runJsflScript: function(jsflUri) {
		this.csInterface.evalScript("fl.runScript(\"" + jsflUri + "\")");
	}
}
var js = {}
js.Browser = function() { }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
js.Browser.window = typeof window != "undefined" ? window : null;
ExtensionIndex.main();
})();
