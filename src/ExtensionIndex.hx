package ;
import flash_extension.csinterface.CSInterfaceUtil;
import jQuery.JQuery;
import js.Browser;
import jsfl.Flash;
class ExtensionIndex {

	private var csInterfaceUtil:CSInterfaceUtil;
	private var LINKAGE_JSFL = "Linkage.jsfl";
	private var LINKAGE_CANSEL_JSFL = "LinkageCancel.jsfl";

	public static function main(){
		new ExtensionIndex();
	}
	public function new(){
		Browser.window.addEventListener("load", initialize);
	}
	private function initialize(event){

		csInterfaceUtil = CSInterfaceUtil.create();

		var addButtonElement = new JQuery("#add");
		addButtonElement.mousedown(function(event){
			runJsfl(LINKAGE_JSFL);
		});

		var removeButtonElement = new JQuery("#remove");
		removeButtonElement.mousedown(function(event){
			runJsfl(LINKAGE_CANSEL_JSFL);
		});
	}
	private function runJsfl(jsfl:String){

		csInterfaceUtil.runJsflScript(
			csInterfaceUtil.getExtensionUri() + "/" + jsfl
		);
	}
}

