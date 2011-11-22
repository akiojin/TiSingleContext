////////////////////////////////////////////////////////////////////////////////
//
//  CLOUD CREATIVE STUDIOS, INC.
//
//  Copyright (C) 2011 Cloud Creative Studios, Inc.
//  All Rights Reserved.
//
//  http://cloud-creative-studios.com
//
////////////////////////////////////////////////////////////////////////////////

sc.ui = {};

(function() {
	
	//--------------------------------------------------------------------------
	sc.ui.createPortraitWindow = function(title) {
		var win = Ti.UI.createWindow({
			title:title,
			orientationModes:[ Ti.UI.PORTRAIT ],
			backButtonTitle:"戻る",
			backgroundColor:sc.config.UI.BackgroundColor
		});
		win.orientationModes = [ Ti.UI.PORTRAIT ];
		return win;
	};
	
	//--------------------------------------------------------------------------
	sc.ui.open = function(win) {
		sc.ui.currentTab.open(win);
	};
	
	//--------------------------------------------------------------------------
	sc.ui.close = function(win) {
		win.close();
	};
	
}());

Ti.include(
	"/sources/ui/TestWindow.js",
	"/sources/ui/ApplicationWindow.js"
);
