var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvas2=document.getElementById('canvas2');
var ctx2=canvas2.getContext('2d');
canvas.width = 1024;
canvas.height = 480;
var width2=1024;
var height2=480;
document.body.appendChild(canvas);
ctx.imageSmoothingEnabled= false;
var brod1= {
	speed:300,
	x:0,
	y:0,
	get livica(){
		return this.x;
	},
	get divica(){
		return this.x+30;
	},
	get givica(){
		return this.y;
	},
	get doivica(){
		return this.y+30;
	}	
};
var poeni=0;
var keysDown = {};
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
var update= function(modifier){
	if(68 in keysDown){
		ctx.beginPath();
		brod1.x += brod1.speed * modifier;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var brodlevo=new Image();
		brodlevo.src="Images/7B1.png";
		ctx.drawImage(brodlevo,brod1.x,brod1.y,30,30);
		ctx.closePath();
	}
	  if (65 in keysDown) {
	  	ctx.beginPath();
		brod1.x -= brod1.speed * modifier;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var broddesno=new Image();
		broddesno.src="Images/7B3.png";
		ctx.drawImage(broddesno,brod1.x,brod1.y,30,30);
		ctx.closePath();
	}
 	  if (83 in keysDown) {
 	  	ctx.beginPath();
		brod1.y += brod1.speed * modifier;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var broddole=new Image();
		broddole.src="Images/7B2.png";
		ctx.drawImage(broddole,brod1.x,brod1.y,30,30);
		ctx.closePath();
    }
	  if(87 in keysDown) {
	  	ctx.beginPath();
		brod1.y -= brod1.speed * modifier;;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var brodgore=new Image();
		brodgore.src="Images/7B.png";
		ctx.drawImage(brodgore,brod1.x,brod1.y,30,30); 
		ctx.closePath();
	}
}
var Meteor = function(pozicijaX,pozicijaY,src,losMeteor){
	this.pozicijaX=pozicijaX;
	this.pozicijaY=pozicijaY;
	this.prikazi=true;
	this.slika=new Image();
	this.slika.src=src;
	this.losMeteor=losMeteor;
}	
Meteor.prototype={
	get livica(){
		return this.pozicijaX;
	},
	get divica(){
		return this.pozicijaX+50;
	},
	get givica(){
		return this.pozicijaY;
	},
	get doivica(){
		return this.pozicijaY+50;
	}
}
	var meteori=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
	 meteori[0]= new Meteor(348,5,"Images/A1.png",false);
	 meteori[1]= new Meteor(645,365,"Images/A2.png",false);
	 meteori[2]= new Meteor(916,80,"Images/A1.png",false);
	 meteori[3]= new Meteor(256,412,"Images/A2.png",false);
	 meteori[4]= new Meteor(719,272,"Images/A3.png",true);
	 meteori[5]= new Meteor(935,300,"Images/A1.png",false);
	 meteori[6]= new Meteor(400,250,"Images/A2.png",false);
	 meteori[7]= new Meteor(800,400,"Images/A1.png",false);
	 meteori[8]=new Meteor(900,152,"Images/A2.png",false);
	 meteori[9]= new Meteor(654,405,"Images/A3.png",true);
	 meteori[10]= new Meteor(535,300,"Images/A1.png",false);
	 meteori[11]= new Meteor(175,50,"Images/A2.png",false);
	 meteori[12]= new Meteor(351,300,"Images/A1.png",false);
	 meteori[13]= new Meteor(531,123,"Images/A3.png",true);
	 meteori[14]= new Meteor(741,204,"Images/A1.png",false);
	 meteori[15]= new Meteor(123,90,"Images/A3.png",true);
	 meteori[16]= new Meteor(159,230,"Images/A1.png",false);
	 meteori[17]= new Meteor(160,300,"Images/A2.png",false);
	 meteori[18]=new Meteor(935,45,"Images/A3.png",true);
	 meteori[19]=new Meteor(456,234,"Images/A2.png",false);
	var brojMeteora=0;
var kolizija=function(objekat){
	if (brod1.divica>objekat.livica && brod1.divica-30<objekat.divica && (brod1.doivica>objekat.givica && brod1.doivica-30<objekat.doivica || brod1.givica<objekat.doivica && brod1.givica+30>objekat.givica)||  brod1.livica<objekat.divica && brod1.livica+30>objekat.livica &&  (brod1.doivica>objekat.givica && brod1.doivica-30<objekat.doivica || brod1.givica<objekat.doivica && brod1.givica+30>objekat.givica) ) {
		return true;
	}
	else
		return false;
};
	function crtajSliku(){	
				if(poeni==1500){
					document.getElementById('prozor').style.display="block";
 			 		document.getElementById('prozor').innerHTML="POBEDILI STE!";cancelRequestFrame(main);
				}
				for (var i = 0; i < meteori.length; i++) {
					if (meteori[i].prikazi==true) {
				 	if(meteori[i].slika.complete){
						ctx2.drawImage(meteori[i].slika,meteori[i].pozicijaX,meteori[i].pozicijaY,50,50);
				 	}
				 	else{
				 		meteori[i].slika.onload=function(){
				 		ctx2.drawImage(meteori[i].slika,meteori[i].pozicijaX,meteori[i].pozicijaY,50,50);
				 		}
					}
			}
	}	
 		for(var i=0;i<meteori.length;i++){
 		if (kolizija(meteori[i]) && meteori[i].prikazi==true) {
 			 ctx2.clearRect(0,0,canvas.width,canvas.height);
 			 meteori[i].prikazi=false;
 			 if (meteori[i].losMeteor) {
 			 	document.getElementById('prozor').style.display="block";
 			 	document.getElementById('prozor').innerHTML="IZGUBILI STE!";
 			 	cancelRequestFrame(main);
 			 }
 			 poeni+=100;
 			document.getElementById("poeni").innerHTML="Score: "+poeni;
 		}
 	}
}
var then=Date.now();
var main = function () {
	var now = Date.now();
	var delta = now - then;
	update(delta/1000);
	then = now;
	crtajSliku();
	requestAnimationFrame(main);
};

requestAnimationFrame(main);
