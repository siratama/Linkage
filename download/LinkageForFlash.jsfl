(function () { "use strict";
var Linkage = function(forFlashContents) {
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
		var pathNames = item.name.split("/");
		var symbolName = pathNames[pathNames.length - 1];
		var linkageIdentifier = pathNames.join(".");
		item.linkageExportForAS = true;
		if(forFlashContents) {
			item.linkageExportInFirstFrame = true;
			item.linkageIdentifier = linkageIdentifier;
		} else item.linkageClassName = linkageIdentifier;
		fl.trace(linkageIdentifier);
	}
};
var LinkageForFlash = function() { }
LinkageForFlash.main = function() {
	new Linkage(true);
}
LinkageForFlash.main();
})();
