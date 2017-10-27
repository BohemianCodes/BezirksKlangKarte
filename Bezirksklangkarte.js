(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Bezirksklangkarte_atlas_", frames: [[413,3618,328,328],[0,0,1080,1920],[0,3618,411,263],[2164,0,1035,1900],[1082,0,1080,1920],[0,3883,325,94],[2164,1902,1035,1900],[0,1922,832,1694],[743,3618,330,221]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur !== exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 !== cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur !== exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Abdeckung = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BezirksKlangKarte = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ebene12 = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Ebene2 = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.EinKlangkunstprojektvonThomasGerwin = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.LeichteFarben = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PUNKTE = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Schild = function() {
	this.spriteSheet = ss["Bezirksklangkarte_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AlsFKIAAqTILZAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-33,73,66);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhvBvQgtgugBhBQABhAAtgvQAvgtBAgBQBBABAuAtQAvAvAABAQAABBgvAuQguAvhBAAQhAAAgvgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-15.7,31.5,31.5);


(lib.Ausschnitt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ausschnitt 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,328);


(lib.Schaltfläche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button alle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhvBvQgtgugBhBQABhAAtgvQAvgtBAgBQBBABAuAtQAvAvAABAQAABBgvAuQguAvhBAAQhAAAgvgvg");
	this.shape.setTransform(15.8,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AiKCLQg6g6AAhRQAAhQA6g6QA6g6BQAAQBRAAA6A6QA6A6AABQQAABRg6A6Qg6A6hRAAQhQAAg6g6g");
	this.shape_1.setTransform(15.8,15.8);

	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.8,15.8);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true,x:17.5,y:19.5},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


// stage content:
(lib.Bezirksklangkarte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ausschnitt 1
	this.instance = new lib.Ausschnitt1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(319,175,1,1,0,0,0,164,164);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Button 1
	this.instance_1 = new lib.Schaltfläche();
	this.instance_1.parent = this;
	this.instance_1.setTransform(297.9,91.4,0.7,0.7,0,0,0,15.9,15.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Schaltfläche(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3));

	// Button 2
	this.instance_2 = new lib.Schaltfläche();
	this.instance_2.parent = this;
	this.instance_2.setTransform(383.9,127.6,0.7,0.7,0,0,0,15.9,15.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Schaltfläche(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(2));

	// Button 3
	this.instance_3 = new lib.Schaltfläche();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300.8,182.8,0.7,0.7,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Schaltfläche(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:true},1).wait(2));

	// Button 4
	this.instance_4 = new lib.Schaltfläche();
	this.instance_4.parent = this;
	this.instance_4.setTransform(421.8,225.8,0.7,0.7,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Schaltfläche(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:true},1).wait(2));

	// Ein Klangkunstprojekt von Thomas Gerwin
	this.instance_5 = new lib.EinKlangkunstprojektvonThomasGerwin();
	this.instance_5.parent = this;
	this.instance_5.setTransform(37,1790);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:true},1).wait(2));

	// Bezirks- KlangKarte
	this.instance_6 = new lib.BezirksKlangKarte();
	this.instance_6.parent = this;
	this.instance_6.setTransform(47,868);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:true},1).wait(2));

	// PUNKTE
	this.instance_7 = new lib.PUNKTE();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:true},1).wait(2));

	// Schild
	this.instance_8 = new lib.Schild();
	this.instance_8.parent = this;
	this.instance_8.setTransform(705,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:true},1).wait(2));

	// Abdeckung
	this.instance_9 = new lib.Abdeckung();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:true},1).wait(2));

	// Leichte Farben
	this.instance_10 = new lib.LeichteFarben();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:true},1).wait(2));

	// Ebene 12
	this.instance_11 = new lib.Ebene12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:true},1).wait(2));

	// Ebene 2
	this.instance_12 = new lib.Ebene2();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:true},1).wait(2));

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ap/HlIAAvJIT/AAIAAPJg");
	this.shape.setTransform(515,93.6,0.266,0.299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("ApDFoIAArPISHAAIAALPg");
	this.shape_1.setTransform(521,92.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AqiGzIAAtlIVFAAIAANlg");
	this.shape_2.setTransform(530.5,88.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AqyGzIAAtlIVlAAIAANlg");
	this.shape_3.setTransform(541.1,88.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AqiGzIAAtlIVFAAIAANlg");
	this.shape_4.setTransform(530.5,88.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("Ao+GzIAAtlIR9AAIAANlg");
	this.shape_5.setTransform(540.5,88.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("ApmGuIAAtbITNAAIAANbg");
	this.shape_6.setTransform(593.5,108.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("An0GvIAAtdIPpAAIAANdg");
	this.shape_7.setTransform(560.1,100.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("An4F3IAArtIPxAAIAALtg");
	this.shape_8.setTransform(547.5,94.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("Ao1F3IAArtIRrAAIAALtg");
	this.shape_9.setTransform(553.6,94.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AmGGHIAAsNIMNAAIAAMNg");
	this.shape_10.setTransform(571.1,104.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("Al7F8IAAr3IL3AAIAAL3g");
	this.shape_11.setTransform(617,142.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AskFtIAArZIZJAAIAALZg");
	this.shape_12.setTransform(532.5,140.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("EAVSAvEQgVgVgGgbIgKgJQgUgUAAgcQAAgcAUgUQAUgTAcAAQAVAAAQAKQAJgBAKAAQAoAAAcAcQAcAbAAAoQAAAogcAcQgcAbgoABQgngBgcgbgAyq0cIAAiqIGQAAIAAihIHCAAIAACrImuAAIAACggA3012IAApPIDmAAIAAJPgAi96+IAAkHImcAAIAAA9IqhAAIAAg9IEEAAIAAwZMAkFAAAIAAQZItXAAIAAAtIh4AAIAABuIj3AAIAABsgAls7QIAAh8IB9AAIAAB8g");
	this.shape_13.setTransform(501.5,349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,1080,1920);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#0D2C7E",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bezirksklangkarte_atlas_.png", id:"Bezirksklangkarte_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;