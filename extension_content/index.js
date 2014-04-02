(function () { "use strict";
var ExtensionIndex = function() {
	this.LINKAGE_CANSEL_JSFL = "LinkageCancel.jsfl";
	this.LINKAGE_JSFL = "Linkage.jsfl";
	window.addEventListener("load",$bind(this,this.initialize));
};
ExtensionIndex.__name__ = true;
ExtensionIndex.main = function() {
	new ExtensionIndex();
};
ExtensionIndex.prototype = {
	initialize: function(event) {
		var _g = this;
		this.csInterfaceUtil = flash_extension.csinterface.CSInterfaceUtil.create();
		var addButtonElement = new $("#add");
		addButtonElement.mousedown(function(event1) {
			_g.runJsfl(_g.LINKAGE_JSFL);
		});
		var removeButtonElement = new $("#remove");
		removeButtonElement.mousedown(function(event2) {
			_g.runJsfl(_g.LINKAGE_CANSEL_JSFL);
		});
	}
	,runJsfl: function(jsfl) {
		this.csInterfaceUtil.runJsflScript(this.csInterfaceUtil.getExtensionUri() + "/" + jsfl);
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var flash_extension = {};
flash_extension.csinterface = {};
flash_extension.csinterface.CSInterfaceUtil = function(csInterface) {
	this.csInterface = csInterface;
};
flash_extension.csinterface.CSInterfaceUtil.__name__ = true;
flash_extension.csinterface.CSInterfaceUtil.create = function() {
	return new flash_extension.csinterface.CSInterfaceUtil(new CSInterface());
};
flash_extension.csinterface.CSInterfaceUtil.prototype = {
	runJsflScript: function(jsflUri) {
		this.csInterface.evalScript("fl.runScript(\"" + jsflUri + "\")");
	}
	,flTrace: function(text) {
		this.csInterface.evalScript("fl.trace(\"" + text + "\")");
	}
	,getExtensionUri: function() {
		return "file:///" + this.csInterface.getSystemPath(SystemPath.EXTENSION);
	}
	,evalScript: function(script,callback) {
		this.csInterface.evalScript(script,callback);
	}
	,addDataToDocument: function(key,dataType,data) {
		this.csInterface.evalScript("document.addDataToDocument(\"" + key + "\", \"" + Std.string(dataType) + "\", \"" + data + "\");");
	}
	,getDataFromDocument: function(key,callback) {
		this.csInterface.evalScript("document.getDataFromDocument(\"" + key + "\");",callback);
	}
	,addEventListener: function(eventType,callbackCode,callback) {
		this.csInterface.evalScript("fl.addEventListener(\"" + Std.string(eventType) + "\", function(){ " + callbackCode + " });",callback);
	}
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var jsfl = {};
jsfl.EventType = function() { };
jsfl.EventType.__name__ = true;
jsfl.PersistentDataType = function() { };
jsfl.PersistentDataType.__name__ = true;
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
jsfl.EventType.DOCUMENT_NEW = "documentNew";
jsfl.EventType.DOCUMENT_OPENED = "documentOpened";
jsfl.EventType.DOCUMENT_CLOSED = "documentClosed";
jsfl.EventType.MOUSE_MOVE = "mouseMove";
jsfl.EventType.DOCUMENT_CHANGED = "documentChanged";
jsfl.EventType.LAYER_CHANGED = "layerChanged";
jsfl.EventType.TIMELINE_CHANGED = "timelineChanged";
jsfl.EventType.FRAME_CHANGED = "frameChanged";
jsfl.EventType.PRE_PUBLISH = "prePublish";
jsfl.EventType.POST_PUBLISH = "postPublish";
jsfl.EventType.SELECTION_CHANGED = "selectionChanged";
jsfl.EventType.DPI_CHANGED = "dpiChanged";
jsfl.PersistentDataType.INTEGER = "integer";
jsfl.PersistentDataType.INTEGER_ARRAY = "integerArray";
jsfl.PersistentDataType.DOUBLE = "double";
jsfl.PersistentDataType.DOUBLE_ARRAY = "doubleArray";
jsfl.PersistentDataType.STRING = "string";
jsfl.PersistentDataType.BYTE_ARRAY = "byteArray";
ExtensionIndex.main();
})();
