/**
 * In deze array zitten alle foto's in (en alle bijbehoorende informatie).
 * @type {Array}
 */
var album =
    [
        {
            url: 'images/0006787.jpg',
            id: 'image1',
            alt: 'containers',
            landscape: false,
            photographer: 'Sander',
            date: new Date('9/8/1999')
        },
        {
            url: 'images/0004713.jpg',
            id: 'image2',
            alt: 'bike in amsterdam',
            landscape: false,
            photographer: 'Brian',
            date: new Date('12/10/2009')
        },
        {
            url: 'images/0004720.jpg',
            id: 'image3',
            alt: 'desert',
            landscape: false,
            photographer: 'Frits',
            date: new Date('1/15/1999')
        },
        {
            url: 'images/0004731.jpg',
            id: 'image4',
            alt: 'chineze man',
            landscape: true,
            photographer: 'Sindy',
            date: new Date('7/9/2000')
        },
        {
            url: 'images/0004750.jpg',
            id: 'image5',
            alt: 'construction',
            landscape: true,
            photographer: 'Almira',
            date: new Date('8/15/2013')
        },
        {
            url: 'images/0004755.jpg',
            id: 'image6',
            alt: 'family on beach',
            landscape: true,
            photographer: 'Paul',
            date: new Date('6/9/2012')
        },
        {
            url: 'images/0004801.jpg',
            id: 'image7',
            alt: 'old woman',
            landscape: true,
            photographer: 'Lieke',
            date: new Date('5/1/2003')
        },
        {
            url: 'images/0004802.jpg',
            id: 'image8',
            alt: 'Little boy',
            landscape: false,
            photographer: 'Tristan',
            date: new Date('11/28/2008')
        },
        {
            url: 'images/0004827.jpg',
            id: 'image9',
            alt: 'old couple with bikes',
            landscape: false,
            photographer: 'Roos',
            date: new Date('12/20/2006')
        },
        {
            url: 'images/0004853.jpg',
            id: 'image10',
            alt: 'bridge',
            landscape: false,
            photographer: 'Hans',
            date: new Date('10/16/2007')
        },
        {
            url: 'images/0004858.jpg',
            id: 'image11',
            alt: 'tale',
            landscape: true,
            photographer: 'Elko',
            date: new Date('9/14/2013')
        },
        {
            url: 'images/0004860.jpg',
            id: 'image12',
            alt: 'beach',
            landscape: true,
            photographer: 'Ben',
            date: new Date('8/11/2005')
        },
        {
            url: 'images/0004870.jpg',
            id: 'image13',
            alt: 'locomotive',
            landscape: true,
            photographer: 'Adam',
            date: new Date('6/18/1989')
        },
        {
            url: 'images/0004874.jpg',
            id: 'image14',
            alt: 'walk in the park',
            landscape: false,
            photographer: 'Damian',
            date: new Date('5/21/1988')
        },
        {
            url: 'images/0004888.jpg',
            id: 'image15',
            alt: 'surgery',
            landscape: true,
            photographer: 'Gils',
            date: new Date('11/22/1979')
        },
        {
            url: 'images/0004902.jpg',
            id: 'image16',
            alt: 'grandma and grandpa',
            landscape: true,
            photographer: 'Lars',
            date: new Date('10/23/1995')
        },
        {
            url: 'images/0004931.jpg',
            id: 'image17',
            alt: 'london bridge',
            landscape: true,
            photographer: 'veronica',
            date: new Date('9/29/1992')
        },
        {
            url: 'images/0004969.jpg',
            id: 'image18',
            alt: 'satalite',
            landscape: true,
            photographer: 'Ken',
            date: new Date('7/27/1996')
        },
        {
            url: 'images/0004971.jpg',
            id: 'image19',
            alt: 'water',
            landscape: true,
            photographer: 'Manuel',
            date: new Date('1/19/1993')
        },
        {
            url: 'images/0006598.jpg',
            id: 'image20',
            alt: 'church',
            landscape: true,
            photographer: 'Chris',
            date: new Date('7/17/1991')
        },
        {
            url: 'images/0006630.jpg',
            id: 'image21',
            alt: 'Great summer',
            landscape: true,
            photographer: 'Micky',
            date: new Date('6/8/1990')
        },
        {
            url: 'images/0006638.jpg',
            id: 'image22',
            alt: 'castle',
            landscape: true,
            photographer: 'Rachel',
            date: new Date('5/3/1998')
        },
        {
            url: 'images/0006680.jpg',
            id: 'image23',
            alt: 'red sand',
            landscape: true,
            photographer: 'Pipo',
            date: new Date('6/13/1987')
        },
        {
            url: 'images/0006743.jpg',
            id: 'image24',
            alt: 'jail',
            landscape: true,
            photographer: 'Melisa',
            date: new Date('1/26/2023')
        },
        {
            url: 'images/0004681.jpg',
            id: 'image25',
            alt: 'shadow palm tree',
            landscape: true,
            photographer: 'Tim',
            date: new Date('12/3/2010')
        }
    ];
/**
 * Het aantal foto's/divs in de container.
 * @type {Number}
 */
var numberOfImages = album.length;
/**
 *  Maximale breedte van een div
 * @type {Number}
 */
var MAX_WIDTH = 100;
/**
 * Rechter muis klik code.
 * @type {Number}
 */
var RIGHT_CLICK = 3;
/**
 * Linker muis klik code.
 * @type {Number}
 */
var LEFT_CLICK = 1;
/**
 * Spatie keycode.
 * @type {Number}
 */
var SPACE_KEY = 32 ;
/**
 * Linker pijltje keycode.
 * @type {Number}
 */
var LEFTARROW_KEY = 37;
/**
 * Rechter pijltje keycode.
 * @type {Number}
 */
var RIGHTARROW_KEY = 39;
/**
 * Geeft boolean of hij ingezoomed is of niet/
 * @type {Boolean}
 */
var zoomedIn = false;
/**
 * Geeft de id weer van het huidige image waar je op hebt geklikt of gezoomt op hebt.
 * @type {String}
 */
var imageId = album[0].id;
/**
 * De volgende image.
 */
var nextImage;
/**
 * De vorige image.
 */
var previousImage;

/**
 * Hier wordt de oncontext menu default uitgezet door een false boolean te returnen.
 *
 * @return {Boolean} false zodat de default waarde op false word gezet.
 */
document.oncontextmenu= function(){return false;};

/**
 * Hier wordt nadat je een key indrukt een functie KeyDownZoom opgeroepen en uitgevoerd.
 *
 * Hiervoor heb ik het javascriptboek 2editie geraadpleegd: the Dom Event object blz: 375
 * @param e : Het event dat wordt meegegeven.
 */
document.onkeydown= function(e){ keyDownZoom(e);};

/**
 * Deze functie is bedoelt om een pagina te vullen met alle images.
 * Eerst wordt een container gemaakt en in de body gezet.
 * Daarna word de functie createGallery opgeroepen waarbij je de container mee geeft en de maximale breedte van een div.
 */
function fillPage(){
    var container = createAndAddContainer();
    var widthDiv = setWidthDiv();
    createGallery(widthDiv, container);
}

/**
 * Hier wordt berekend hoe de grid/widt moet zijn van de divs.
 * Ik heb voor deze berekening gekozen omdat:
 * - Je een liquid div maakt en je makkelijk de breedte kan berekenen naarmaten je div's verwijdert.
 * De breedte van de div's zijn in procenten.
 * De berekenening: eerst wordt de wortel getrokken van het aantal foto's/divs die je hebt.
 *                  daarna wordt dat cijfer naar boven afgerond.
 *                  En als laatst wordt de 100 (max_width) gedeeldt door en afgronde cijfer.
 * @return {String}: Geeft het aantal procent terug dat een div width moet hebben.
 */
function setWidthDiv(){
    return (MAX_WIDTH/(Math.ceil(Math.sqrt(numberOfImages))))+'%';
}

/**
 * Hier wordt de gallarij gecreeërt.
 * Er wordt een loop gemaakt voor het aantal foto's die er zijn en wordt in de container gevuld.
 * Eerst wordt er een div gemaakt waar je de div.width in set zodat het mooi gerasterd zal worden.
 * Dan wordt er een image gecreeërt door de functie createImage waarbij je de image meegeeft.
 * Daarna zet je de image in de div en de div in de container.
 * @param widthDiv : De breedte dat elk div moet hebben.
 * @param container : De container waar je de div's (met de images erin) in zet.
 */
function createGallery(widthDiv, container) {
    for (var i = 0; i < numberOfImages; i++) {
        var div = document.createElement('div');
        div.style.width = widthDiv;
        var img = createImage(album[i]);
        div.appendChild(img);
        container.appendChild(div);
    }
}

/**
 * Hier wordt een container gecreeërt en in de body gezet.
 * Eerst wordt een element div gemaakt met als id container.
 * Hij zet de container in de body en returnt deze zodat indien je er meerdere wil maken dit mogenlijk is.
 * @return {HTMLElement} : Geeft een div html element terug met als id container.
 */
function createAndAddContainer() {
    var container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    return container;
}

/**
 * Hier wordt een image(img) element gecreeërt nadat je als parameter een image meegeeft.
 * Als eerst wordt er een element gecreeërt voor de foto/image.
 * Daarna worden de waardes/attributes geset voor het element(de url wordt de src, en hij neem de id, date en photopgrapher over)
 * Wanneer je op een image klik wordt er een event opgeroepen en daarin de functie mouseDown.
 * Voor de functie mouseDown geeft je de event door en de image zelf(this).
 * De reden dat ik de onmousedown hier heb bijgezet is omdat de functie alleen mag worden opgeroepen voor de image.
 * @param image : De image die je meegeeft uit de album.
 * @return {HTMLElement}: Geeft een img html element terug met de bijbehorende attributes.
 */
function createImage(image){
    var img = document.createElement('img');
    img.src = image.url;
    img.id = image.id;
    img.alt = image.alt;
    img.date = image.date;
    img.photographer = image.photographer;
    img.onmousedown= function (e){mouseDown(e, this);};
    return img;
}

/**
 * Set de width van alle divs die in de container zitten.
 * Eerst wordt de numberOfImages geset, hierbij wordt het aantal div's in de container berekend en meegegeven.
 * Daarna komt er een loop voor het aantal images/divs in de container en wordt voor elke child element de width geset.
 * Ik heb hiervoor gekozen omdat dit uitgevoert moet worden nadat er een foto of foto's worden verwijdert.
 * Dit is ook makkelijk te herbruiken in het geval je de raster wil veranderen.
 *
 * Hiervoor heb ik de javascript book 2edition geraadpleegd --> Node Relationships blz 264.
 * @param container : De container waar alle div's zitten (met de images erin).
 */
function setWidthDivs(container) {
    numberOfImages = container.childElementCount;
    for (var i = 0; i < numberOfImages; i++) {
        container.childNodes.item(i).style.width = setWidthDiv();
    }
}

/**
 * Met deze functie kun je een image verwijderen uit de photoviewer(container).
 * Eerst wordt de next image geset in het geval je op de spatie drukt om de image in te zoomen,
 * de zoom gaat op deze manier meteen naar de volgende foto. De nextimage en previous (door de functie setVariablesForImages) van de image wordt als eerst geset omdat erna de image wordt verwijdert uit de container.
 * Daarna wordt een variable aangemaakt om de div van de image die je hebt meegegeven in te zetten.
 * Dan wordt een variable aangemaakt voor de container (deze wordt opgehaald en opgeslagen in de container).
 * Daarna wordt de div uit de container verwijdert.
 * De imageId wordt geset naar de nextImage.id (omdat image niet meer bestaat in de container) in het geval er op een spatie wordt gedrukt om een image in te zoomen.
 * @param image : De image die verwijdert moet worden uit de container.
 * @return {HTMLElement} : De container nadat de image is verwijdert.
 */
function removeDivFromContainer(image) {
    setVariablesForImages(image);
    var div = document.getElementById(image.id).parentNode;
    var container = document.getElementById('container');
    container.removeChild(div);
    imageId = nextImage.id;
    return container;
}

/**
 * De functie mouseDown geeft weer wat er moet gebeuren nadat je op de muis klikt.
 * Eerst wordt de default verwijdert zodat je hier geen last van hebt in de browsers.
 * Daarna wordt er gekeken of het event property gelijk is aan de rechter muisklik code.
 * In het geval dit zo is wordt de image die meeggeven is verwijdert en een nieuwe container gemaakt.
 * Dan wordt de with van alle divs geset van de container.
 * In het geval de event property gelijk is aan de linker muisklik wordt de functie zoomIn opgeroepen en de parameter image wordt meegegeven.
 * @param e : Het event dat wordt meegegeven.
 * @param image : De image die wordt meegegeven.
 */
function mouseDown(e, image) {
    deleteDefault(e);
    if (e.which === RIGHT_CLICK) {
        var container = removeDivFromContainer(image);
        setWidthDivs(container);
    }
    else if(e.which === LEFT_CLICK){
        zoomIn(image);
    }
}

/**
 * Hier verwijder je de default van een event.
 *
 * Hiervoor heb ik de javascript book 2edition geraadpleegd --> Cross-Browser Event object blz 381.
 * @param e : Het event dat wordt meegegven.
 */
function deleteDefault(e) {
    e.preventDefault();
   //event.returnValue = false;
}

/**
 * De functie spaceKey is in het geval je op de spatie drukt.
 * Wanneer de event property gelijk is aan de keycode van de spatie wordt er eerst gekeken of hij al in zoom mood is.
 * Indien de foto niet is ingezoomed voert hij de zoomIn functie en geeft de image van de elementbyid imageId mee
 * Wanneer een foto niet is ingezoomed voert hij de zoomUit functie.
 * @param e : De event die wordt meegegeven.
 */
function spaceKey(e) {
    if (e.keyCode === SPACE_KEY) {
        if (zoomedIn === false) {
            zoomIn(document.getElementById(imageId));
        }
        else {
            zoomOut();
        }
    }
}

/**
 * De functie rightArrowKey is in het geval je de rechter pijl drukt om de volgende image te zien.
 * Wanneer de event property gelijk is aan de keycode van de rechterpijl wordt er eerst gekeken of hij al in de zoom mode is.
 * Dit om veilig te zijn zodat hij het alleen uitvoert in de zoom mode.
 * Daarna wordt eerst de popup verwijdert, om de oude image te verwijderen en de nieuwe in te zetten, dit gebeurt door filmZoom met als meegegeven parameter nextImage (een image).
 * @param e : De event die wordt meegegeven.
 */
function rightArrowKey(e) {
    if (e.keyCode === RIGHTARROW_KEY) {
        if (zoomedIn === true) {
            document.body.removeChild(document.getElementById('popup'));
            fillZoom(nextImage);
        }
    }
}

/**
 * De functie leftArrowKey is in het geval je de linker pijl drukt om de vorige image te zien.
 * Wanneer de event property gelijk is aan de keycode van de linkerpijl wordt er eerst gekeken of hij al in de zoom mode is.
 * Dit om veilig te zijn zodat hij het alleen uitvoert in de zoom mode.
 * Daarna wordt eerst de popup verwijdert,om  de oude image te verwijderen en de nieuwe in te zetten, dit gebeurt door filmZoom met als meegegeven parameter previousImage (een image).
 * @param e : De event die wordt meegegeven.
 */
function leftArrowKey(e) {
    if (e.keyCode === LEFTARROW_KEY) {
        if (zoomedIn === true) {
            document.body.removeChild(document.getElementById('popup'));
            fillZoom(previousImage);
        }
    }
}

/**
 * Hier is de functie keyDownZoom die wordt opgeroepen tijdens het onkeydown event.
 * Hij reset eerst de default waardes. Daarna kijkt hij welke key wordt uitgevoert en indien dit zo is wordt de functie ook echt uitgevoert.
 * @param e
 */
function keyDownZoom(e){
    deleteDefault(e);
    spaceKey(e);
    rightArrowKey(e);
    leftArrowKey(e);
}

/**
 * De createPopup is een functie die een popup div creeërt en dit returnt. Deze functie is vaker te gebruiken vooral als je naar een volgende of vorige foto wil.
 * Eerst wordt er een element gecreeërt met de id en classname(voor de stylesheet) popup.
 * Aan deze popup wordt er een onclick event toegevoegt, dit in het geval je uit wil zoomen. Daarom wordt er voor dit event de functie zoomOut ook opgeroepen.
 * @return {HTMLElement}  : Geeft een div html element terug met als id popup.
 */
function createPopup() {
    var popupDiv = document.createElement('div');
    popupDiv.className = 'popup';
    popupDiv.id = 'popup';
    popupDiv.onclick = function (e) { zoomOut(e);};
    return popupDiv;
}

/**
 * De functie getSizeOriginalImage is in het geval je de width en/of height wil hebben van de originele image uit de album.
 * Je kunt ook meerde attributes krijgen van een orginele image.
 * Ik heb deze functie gemaakt omdat het makkelijk is om informatie/attributes te krijgen van de image, je kunt hier makkelijk de photograaf, date, url etc.
 * @param imageId : De image id van de image waar je de waardes van wil
 * @param input : Height of width maar je kunt hiervoor meerdere attributes van een image krijgen. Het is een string voor het geval je een attribut wil ophalen.
 * @return {*} : De return waarde hangt af van de input ( de waarde die je opvraagt).
 */
function getSizeOriginalImage(imageId, input){
    var imageAttribute;
    for(var i = 0; i < numberOfImages; i++) {
        if(album[i].id == imageId){
            imageAttribute = album[i].input;
        }
    }
    return imageAttribute;
}

/**
 * Hier is een functie waarbij je zowel de previous als de next image gelijk set.
 * @param image : De image die wordt meegeven waarbij je de volgende en vorige foto voor moet setten.
 */
function setVariablesForImages(image) {
    setNextImage(image);
    setPreviousImage(image);
}

/**
 * In deze functie wordt de image die gezoomd wordt geset.
 * Eerst set hij de previous en next image.
 * Daarna creeërt hij de img element en set de attributes aan de img element, deze set hij door die van de image attribute te gebruiken.
 * Aan het einde set hij de maxHeight per image waarbij het ook liquid is.
 * @param image : de image die gezoomt moet worden.
 * @return {HTMLElement} : geeft de img html element terug  die gecreeërt is met de bijbehorende attributen.
 */
function setupImageZoom(image) {
    setVariablesForImages(image);
    var img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.style.maxHeight = getSizeOriginalImage(image.id,'height')+'px';
    return img;
}

/**
 * Hier format je de date naar een string
 * Je haalt eerst de dag, daarna de maand en als laatsts de jaar op en zet dat bij elkaar in een string.
 * @param date : Is de date die je binnen krijgt van bv image.
 * @return {String} : De datum als een string.
 */
function formatDate(date){
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
}

/**
 * Hier maak je eerst een popup div aan dmv de functie createPopup.
 * Daarna maak je een image aan en de bijbehorende informatie dmv de functie setupImageZoom en geeft de parameter image mee.
 * Dan maak je een textnode aan waar de photograaf en datum in staan.
 * Als eerst wordt de textnode toegevoegd aan de popupDiv zodat hij bovenaan staan, dan wordt de image toegevoegt aan de popupdiv.
 * En aan het einde wordt de popupDiv in de body gezet. De imageId wordt ook geupdate zodat je voor de overige functies die dit gebruiken doorgeeft op welke image hij gezoomed is.
 *
 * Hiervoor heb ik de javascript book 2edition geraadpleegd --> Creating Text Nodes blz 290.
 * @param image : De image die wordt meegegeven die ingezoomed moet worden.
 */
function fillZoom(image){
    var popupDiv = createPopup();
    var img = setupImageZoom(image);
    var text = document.createTextNode("Photographer: "+image.photographer.toString()+", "+ "Date:" + formatDate(image.date));
    popupDiv.appendChild(text);
    popupDiv.appendChild(img);
    document.body.appendChild(popupDiv);
    imageId = image.id;
}

/**
 * In deze functie wordt de overlay gecreeërt. De overlay zorgt voor een zwarte transparante div/look.
 * Eerst wordt een element div gecreeërt met als id en classname overlay(voor de css stylesheet).
 * Dan wordt de overlay in de body gezet en deze blijft in de body zolang je ingezoomd bent, hij wordt pas verwijdert wanneer je uitzoomt.
 */
function createAndAddOverlay(){
    var overlay = document.createElement("div");
    overlay.id = 'overlay';
    overlay.className= 'overlay';
    document.body.appendChild(overlay);
}

/**
 * De zoomout methode zorgt voor de zoomout, hij verwijdert eerst de div element overlay en dan de popup div.
 * Ook wordt de zoomedIn variable op false gezet.
 */
function zoomOut() {
    document.body.removeChild(document.getElementById('overlay'));
    document.body.removeChild(document.getElementById('popup'));
    zoomedIn = false;
}

/**
 * De zoomIn functie zet eerst de zoomedIn variable op true.
 * Daarna wordt de functie createAndAddOverlay aangeroept voor de overlay en daarna de fillZoom en geeft de parameter image mee(de image die ingezoomed moet worden)
 * De reden dat ik een zoomIn heb en een fillZoom functie is voor het feit wanneer je gewoon inzoomt en wanneer je een volgende of vorige foto wil bekijken.
 * Door fillzoom alleen te gebruiken wordt alleen de popupdiv verandert/ingevuld met bijbehorende img elemenet en textnode. deze functie wordt gebruikt voor de next en prev.
 * ZoomIn functie wordt gebruikt als je uitgezoomed bent en je wil inzoomen.
 * @param image : De image die wordt meegegeven die ingezoomed moet worden.
 */
function zoomIn(image) {
    zoomedIn = true;
    createAndAddOverlay();
    fillZoom(image);
}

/**
 * Hier wordt de nextImage variable geset.
 * Eerst wordt er gekeken of er een div naast de div is waar de image in zit(de volgende div).
 * Zo ja wordt de nextImage de image in de next div.
 * Ander wordt er automatisch gekeken naar de eerste div in de container en wordt de nextImage de image in die div.
 * @param image : De huidige image waarvan je de nextImage wil weten.
 */
function setNextImage(image) {
    if(document.getElementById(image.id).parentNode.nextSibling !== null){
        nextImage=document.getElementById(image.id).parentNode.nextSibling.firstChild;
    }
    else{
        nextImage = document.getElementById('container').firstChild.firstChild;
    }
}

/**
 * Hier wordt de previousImage variable geset.
 * Eerst wordt er gekeken of er een div naast de div is waar de image in zit(de vorige div).
 * Zo ja wordt de previousImage de image in de previous div.
 * Ander wordt er automatisch gekeken naar de laatste div in de container en wordt de nextImage de image in die div.
 * @param image : De huidige image waarvan je de previousImage wil weten.
 */
function setPreviousImage(image) {
    if(document.getElementById(image.id).parentNode.previousSibling !== null){
        previousImage=document.getElementById(image.id).parentNode.previousSibling.firstChild;
    }
    else{
        previousImage = document.getElementById('container').lastChild.firstChild;
    }
}