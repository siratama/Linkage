package ;

import jsfl.ItemType;
import jsfl.Lib;
import jsfl.Lib.fl;

class LinkageCancel {
	public static function main(){
		new LinkageCancel();
	}

	public function new(){

		if(Lib.fl.getDocumentDOM() == null) return;
		Lib.fl.trace("---");

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

			if(item.linkageClassName != null)
				item.linkageClassName = "";

			item.linkageExportForAS = false;
		}
		Lib.fl.trace("finish");
	}
}
