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
	sc.ui.createApplicationWindows = function() {
		var tabGroup = Ti.UI.createTabGroup();
		
		// シングルコンテキスト用に currentTab を用意
		tabGroup.addEventListener("focus", function(e) {
			sc.ui.currentTab = e.tab;
		});
		
		var win1 = sc.ui.createTestWindow();
		var tab1 = Ti.UI.createTab({
			icon:"/images/KS_nav_ui.png",
		    title:"ダミー1",
		    window:win1
		});
		tabGroup.addTab(tab1);
		
		// デフォルトのタブを設定
		sc.ui.currentTab = tab1;
		
		var win2 = sc.ui.createTestWindow();
		var tab2 = Ti.UI.createTab({
			icon:"/images/KS_nav_ui.png",
		    title:"ダミー2",
		    window:win2
		});
		tabGroup.addTab(tab2);
		
		var win3 = sc.ui.createTestWindow();
		var tab3 = Ti.UI.createTab({
			icon:"/images/KS_nav_ui.png",
		    title:"ダミー3",
		    window:win3
		});
		tabGroup.addTab(tab3);
		
		var win4 = sc.ui.createTestWindow();
		var tab4 = Ti.UI.createTab({
			icon:"/images/KS_nav_ui.png",
		    title:"ダミー4",
		    window:win4
		});
		tabGroup.addTab(tab4);
		
		var win5 = sc.ui.createTestWindow();
		var tab5 = Ti.UI.createTab({
			icon:"/images/KS_nav_ui.png",
		    title:"ダミー5",
		    window:win5
		});
		tabGroup.addTab(tab5);
		
		return tabGroup;
	};
	
}());
