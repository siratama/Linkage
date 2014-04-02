package ;

import jsfl.ItemType;
import jsfl.Lib;
import jsfl.Document;

class Linkage {
	public static function main(){
		new Linkage();
	}
	public function new(){

		if(Lib.fl.getDocumentDOM() == null) return;
		Lib.fl.trace("---");

		var isHtml5CanvasContents = Lib.fl.getDocumentDOM().exportPublishProfileString().indexOf("JavaScript/HTML") != -1;
		var library = Lib.fl.getDocumentDOM().library;
		var items = library.getSelectedItems();
		var itemsLength = items.length;

		if(itemsLength == 0){
			Lib.fl.trace("Select item in library.");
			return;
		}

		for(i in 0...itemsLength){
			var item = items[i];
			if(item.itemType == ItemType.FOLDER) continue;

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

			Lib.fl.trace(linkageIdentifier);
		}
	}
}
