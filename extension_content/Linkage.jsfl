(function () { "use strict";
var Linkage = function() {
	if(fl.getDocumentDOM() == null) return;
	fl.trace("---");
	var isHtml5CanvasContents = fl.getDocumentDOM().exportPublishProfileString().indexOf("JavaScript/HTML") != -1;
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
		if(!isHtml5CanvasContents) {
			item.linkageExportInFirstFrame = true;
			item.linkageIdentifier = linkageIdentifier;
		} else item.linkageClassName = linkageIdentifier;
		fl.trace(linkageIdentifier);
	}
};
Linkage.main = function() {
	new Linkage();
}
Linkage.main();
})();
