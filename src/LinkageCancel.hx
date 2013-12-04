package ;

import jsfl.Flash;

class LinkageCancel {
	public static function main(){
		new LinkageCancel();
	}

	public function new(){

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

			item.linkageClassName = "";
			item.linkageExportForAS = false;
		}
		Flash.trace("finish");
	}
}
