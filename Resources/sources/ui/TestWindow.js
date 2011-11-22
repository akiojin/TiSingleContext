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

(function() {
	
	//--------------------------------------------------------------------------
	sc.ui.createTestWindow = function() {
		var createView = function() {
			var view = Ti.UI.createView({
				backgroundColor:sc.config.UI.BackgroundColor,
				borderWidth:sc.config.Debug.Border,
				borderColor:sc.config.Debug.BorderColor
			});
			var button = Ti.UI.createButton({
				title:"開く",
				width:200,
				height:50,
				backgroundColor:sc.config.UI.BackgroundColor,
				borderWidth:sc.config.Debug.Border,
				borderColor:sc.config.Debug.BorderColor
			});
			button.addEventListener("click", function(e) {
				var win = sc.ui.createTestWindow();
				sc.ui.open(win);
			});
			view.add(button);
			return view;
		};
		
		var win = sc.ui.createPortraitWindow("お試しウィンドウ");
		win.add(createView());
		return win;
	};
	
}());
