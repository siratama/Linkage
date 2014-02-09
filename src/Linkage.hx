package ;

import jsfl.Document;
import jsfl.Flash;

class Linkage {
	public static function main(){
		new Linkage();
	}
	public function new(){

		if(Flash.getDocumentDOM() == null) return;
		Flash.trace("---");

		var isHtml5CanvasContents = Flash.getDocumentDOM().exportPublishProfileString().indexOf("JavaScript/HTML") != -1;
		var library = Flash.getDocumentDOM().library;
		var items = library.getSelectedItems();
		var itemsLength = items.length;

		if(itemsLength == 0){
			Flash.trace("Select item in library.");
			return;
		}

		for(i in 0...itemsLength){
			var item = items[i];
			if(item.itemType == "folder") continue;

			var pathNames = item.name.split("/");
			var symbolName = pathNames[pathNames.length - 1];

			var linkageIdentifier = pathNames.join(".");

			item.linkageExportForAS = true;

			if(!isHtml5CanvasContents){
				item.linkageExportInFirstFrame = true;
				item.linkageIdentifier = linkageIdentifier;
			}
			else{
				item.linkageClassName = linkageIdentifier;
			}

			Flash.trace(linkageIdentifier);
		}
	}
}
