package ;

import jsfl.Flash;

class Linkage {
	public function new(forFlashContents:Bool){

		Flash.trace("---");

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

			if(forFlashContents){
				item.linkageExportInFirstFrame = true;
				item.linkageIdentifier = linkageIdentifier;
			}
			//HTML5 Canvas
			else{
				item.linkageClassName = linkageIdentifier;
			}

			Flash.trace(linkageIdentifier);
		}
	}
}
