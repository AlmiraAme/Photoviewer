var album=[{url:"images/0006787.jpg",id:"image1",alt:"containers",landscape:false,photographer:"Sander",date:new Date("9/8/1999")},{url:"images/0004713.jpg",id:"image2",alt:"bike in amsterdam",landscape:false,photographer:"Brian",date:new Date("12/10/2009")},{url:"images/0004720.jpg",id:"image3",alt:"desert",landscape:false,photographer:"Frits",date:new Date("1/15/1999")},{url:"images/0004731.jpg",id:"image4",alt:"chineze man",landscape:true,photographer:"Sindy",date:new Date("7/9/2000")},{url:"images/0004750.jpg",id:"image5",alt:"construction",landscape:true,photographer:"Almira",date:new Date("8/15/2013")},{url:"images/0004755.jpg",id:"image6",alt:"family on beach",landscape:true,photographer:"Paul",date:new Date("6/9/2012")},{url:"images/0004801.jpg",id:"image7",alt:"old woman",landscape:true,photographer:"Lieke",date:new Date("5/1/2003")},{url:"images/0004802.jpg",id:"image8",alt:"Little boy",landscape:false,photographer:"Tristan",date:new Date("11/28/2008")},{url:"images/0004827.jpg",id:"image9",alt:"old couple with bikes",landscape:false,photographer:"Roos",date:new Date("12/20/2006")},{url:"images/0004853.jpg",id:"image10",alt:"bridge",landscape:false,photographer:"Hans",date:new Date("10/16/2007")},{url:"images/0004858.jpg",id:"image11",alt:"tale",landscape:true,photographer:"Elko",date:new Date("9/14/2013")},{url:"images/0004860.jpg",id:"image12",alt:"beach",landscape:true,photographer:"Ben",date:new Date("8/11/2005")},{url:"images/0004870.jpg",id:"image13",alt:"locomotive",landscape:true,photographer:"Adam",date:new Date("6/18/1989")},{url:"images/0004874.jpg",id:"image14",alt:"walk in the park",landscape:false,photographer:"Damian",date:new Date("5/21/1988")},{url:"images/0004888.jpg",id:"image15",alt:"surgery",landscape:true,photographer:"Gils",date:new Date("11/22/1979")},{url:"images/0004902.jpg",id:"image16",alt:"grandma and grandpa",landscape:true,photographer:"Lars",date:new Date("10/23/1995")},{url:"images/0004931.jpg",id:"image17",alt:"london bridge",landscape:true,photographer:"veronica",date:new Date("9/29/1992")},{url:"images/0004969.jpg",id:"image18",alt:"satalite",landscape:true,photographer:"Ken",date:new Date("7/27/1996")},{url:"images/0004971.jpg",id:"image19",alt:"water",landscape:true,photographer:"Manuel",date:new Date("1/19/1993")},{url:"images/0006598.jpg",id:"image20",alt:"church",landscape:true,photographer:"Chris",date:new Date("7/17/1991")},{url:"images/0006630.jpg",id:"image21",alt:"Great summer",landscape:true,photographer:"Micky",date:new Date("6/8/1990")},{url:"images/0006638.jpg",id:"image22",alt:"castle",landscape:true,photographer:"Rachel",date:new Date("5/3/1998")},{url:"images/0006680.jpg",id:"image23",alt:"red sand",landscape:true,photographer:"Pipo",date:new Date("6/13/1987")},{url:"images/0006743.jpg",id:"image24",alt:"jail",landscape:true,photographer:"Melisa",date:new Date("1/26/2023")},{url:"images/0004681.jpg",id:"image25",alt:"shadow palm tree",landscape:true,photographer:"Tim",date:new Date("12/3/2010")}];
var numberOfImages=album.length;
var MAX_WIDTH=100;
var RIGHT_CLICK=3;
var LEFT_CLICK=1;
var SPACE_KEY=32;
var LEFTARROW_KEY=37;
var RIGHTARROW_KEY=39;
var zoomedIn=false;
var imageId=album[0].id;
var nextImage;
var previousImage;
document.oncontextmenu=function(){return false
};
document.onkeydown=function(a){keyDownZoom(a)
};
function fillPage(){var a=createAndAddContainer();
var b=setWidthDiv();
createGallery(b,a)
}function setWidthDiv(){return(MAX_WIDTH/(Math.ceil(Math.sqrt(numberOfImages))))+"%"
}function createGallery(d,a){for(var c=0;
c<numberOfImages;
c++){var e=document.createElement("div");
e.style.width=d;
var b=createImage(album[c]);
e.appendChild(b);
a.appendChild(e)
}}function createAndAddContainer(){var a=document.createElement("div");
a.id="container";
document.body.appendChild(a);
return a
}function createImage(b){var a=document.createElement("img");
a.src=b.url;
a.id=b.id;
a.alt=b.alt;
a.date=b.date;
a.photographer=b.photographer;
a.onmousedown=function(c){mouseDown(c,this)
};
return a
}function setWidthDivs(a){numberOfImages=a.childElementCount;
for(var b=0;
b<numberOfImages;
b++){a.childNodes.item(b).style.width=setWidthDiv()
}}function removeDivFromContainer(b){setVariablesForImages(b);
var c=document.getElementById(b.id).parentNode;
var a=document.getElementById("container");
a.removeChild(c);
imageId=nextImage.id;
return a
}function mouseDown(c,b){deleteDefault(c);
if(c.which===RIGHT_CLICK){var a=removeDivFromContainer(b);
setWidthDivs(a)
}else{if(c.which===LEFT_CLICK){zoomIn(b)
}}}function deleteDefault(a){a.preventDefault()
}function spaceKey(a){if(a.keyCode===SPACE_KEY){if(zoomedIn===false){zoomIn(document.getElementById(imageId))
}else{zoomOut()
}}}function rightArrowKey(a){if(a.keyCode===RIGHTARROW_KEY){if(zoomedIn===true){document.body.removeChild(document.getElementById("popup"));
fillZoom(nextImage)
}}}function leftArrowKey(a){if(a.keyCode===LEFTARROW_KEY){if(zoomedIn===true){document.body.removeChild(document.getElementById("popup"));
fillZoom(previousImage)
}}}function keyDownZoom(a){deleteDefault(a);
spaceKey(a);
rightArrowKey(a);
leftArrowKey(a)
}function createPopup(){var a=document.createElement("div");
a.className="popup";
a.id="popup";
a.onclick=function(b){zoomOut(b)
};
return a
}function getSizeOriginalImage(c,a){var d;
for(var b=0;
b<numberOfImages;
b++){if(album[b].id==c){d=album[b].input
}}return d
}function setVariablesForImages(a){setNextImage(a);
setPreviousImage(a)
}function setupImageZoom(b){setVariablesForImages(b);
var a=document.createElement("img");
a.src=b.src;
a.alt=b.alt;
a.style.maxHeight=getSizeOriginalImage(b.id,"height")+"px";
return a
}function formatDate(a){return a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear()
}function fillZoom(c){var b=createPopup();
var a=setupImageZoom(c);
var d=document.createTextNode("Photographer: "+c.photographer.toString()+", Date:"+formatDate(c.date));
b.appendChild(d);
b.appendChild(a);
document.body.appendChild(b);
imageId=c.id
}function createAndAddOverlay(){var a=document.createElement("div");
a.id="overlay";
a.className="overlay";
document.body.appendChild(a)
}function zoomOut(){document.body.removeChild(document.getElementById("overlay"));
document.body.removeChild(document.getElementById("popup"));
zoomedIn=false
}function zoomIn(a){zoomedIn=true;
createAndAddOverlay();
fillZoom(a)
}function setNextImage(a){if(document.getElementById(a.id).parentNode.nextSibling!==null){nextImage=document.getElementById(a.id).parentNode.nextSibling.firstChild
}else{nextImage=document.getElementById("container").firstChild.firstChild
}}function setPreviousImage(a){if(document.getElementById(a.id).parentNode.previousSibling!==null){previousImage=document.getElementById(a.id).parentNode.previousSibling.firstChild
}else{previousImage=document.getElementById("container").lastChild.firstChild
}};