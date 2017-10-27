(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"BezirksklangkarteHTML_atlas_P_", frames: [[413,3618,328,328],[0,0,1080,1920],[0,3618,411,263],[1082,0,974,1900],[0,3883,325,94],[1082,1902,974,1900],[743,3618,320,320],[0,1922,832,1694]]}
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
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Abdeckung = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BezirksKlangKarte = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ebene12 = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EinKlangkunstprojektvonThomasGerwin = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LeichteFarben = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mikrofon = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PUNKTE = function() {
	this.spriteSheet = ss["BezirksklangkarteHTML_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Schild = function() {
	this.initialize(img.Schild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,221);


(lib.Mikrofon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.mikrofon();
	this.instance.parent = this;
	this.instance.setTransform(132,144,0.175,0.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.62,scaleY:0.62,x:61,y:73},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132,144,56.1,56.1);


(lib.Ausschnitt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.instance_1 = new lib.Mikrofon1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164,164,1,1,0,0,0,160,160);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{regX:160,regY:160,scaleX:1,scaleY:1,x:164,y:164}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{regX:0,regY:-0.2,scaleX:3.056,scaleY:3.102,x:-325,y:-370.6}}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,328);


(lib.Aufnahme1B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhEBFQgcgdgBgoQABgoAcgcQAcgcAogBQAoABAdAcQAdAcAAAoQAAAogdAdQgdAdgoAAQgoAAgcgdg");
	this.shape.setTransform(9.8,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("Ah+B/Qg1g1AAhKQAAhKA1g1QA1g0BJAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhJAAg1g1g");
	this.shape_1.setTransform(12,13);

	this.instance = new lib.Ausschnitt1();
	this.instance.parent = this;
	this.instance.setTransform(-147,-73.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ausschnitt1(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3300").s().p("AnfGGIAAsLIO/AAIAAMLg");
	this.shape_2.setTransform(9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Ausschnitt1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Ausschnitt1();
	this.instance.parent = this;
	this.instance.setTransform(164,164,1,1,0,0,0,164,164);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ausschnitt1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.6,-143.6,605.4,614.5);


// stage content:
(lib.BezirksklangkarteHTML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Pausieren von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
		
	}
	this.frame_1 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Pausieren von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Aufnahme 1
	this.instance = new lib.Aufnahme1B();
	this.instance.parent = this;
	this.instance.setTransform(294.9,90.8,1,1,0,0,0,9.8,9.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Aufnahme1B(), 3);

	this.instance_1 = new lib.Ausschnitt1_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(311,189,1,1,0,0,0,164,164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	// Ein Klangkunstprojekt von Thomas Gerwin
	this.instance_2 = new lib.EinKlangkunstprojektvonThomasGerwin();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37,1790);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

	// Bezirks- KlangKarte
	this.instance_3 = new lib.BezirksKlangKarte();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47,868);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

	// PUNKTE
	this.instance_4 = new lib.PUNKTE();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1));

	// Schild
	this.instance_5 = new lib.Schild();
	this.instance_5.parent = this;
	this.instance_5.setTransform(705,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1));

	// Abdeckung
	this.instance_6 = new lib.Abdeckung();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2));

	// Leichte Farben
	this.instance_7 = new lib.LeichteFarben();
	this.instance_7.parent = this;
	this.instance_7.setTransform(61,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2));

	// Ebene 12
	this.instance_8 = new lib.Ebene12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(539.5,823.4,1080.6,2056.6);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#0C2C7E",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Schild.jpg", id:"Schild"},
		{src:"images/BezirksklangkarteHTML_atlas_P_.png", id:"BezirksklangkarteHTML_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;