(function () { "use strict";
var LinkageCancel = function() {
	if(fl.getDocumentDOM() == null) return;
	fl.trace("---");
	var library = fl.getDocumentDOM().library;
	var items = library.getSelectedItems();
	var itemsLength = items.length;
	if(itemsLength == 0) {
		fl.trace("Select item in library.");
		return;
	}
	var _g = 0;
	while(_g < itemsLength) {
		var i = _g++;
		var item = items[i];
		if(item.itemType == "folder") continue;
		item.linkageClassName = "";
		item.linkageExportForAS = false;
	}
	fl.trace("finish");
};
LinkageCancel.main = function() {
	new LinkageCancel();
}
LinkageCancel.main();
})();
