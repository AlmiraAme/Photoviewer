describe('The fillPage function', function(){
    it('schould create an container',function(){
        var expected = createAndAddContainer();
        expect(document.getElementById('container')).toNotBe(null);
    });

    it('should create de width for the divs', function(){
        var expected = '20%';
        expect(setWidthDiv()).toEqual(expected);
    });

    it('should create 25 divs and put in the container', function(){
        var widthDiv = setWidthDiv();
        var container = createAndAddContainer();
        createGallery(widthDiv,container);
        var expected = 25;
        var result = container.getElementsByTagName('div').length;
        expect(result).toBe(expected)
    });

    it('should have element img with id image16 in div', function(){
        fillPage();
        var result = document.getElementById('image16');
        expect(result).toNotBe(null);
    });
});

describe('The createPopup functions',function(){
    it('should create a div named popup',function(){
        var popup = createPopup();
        expect(popup).toNotBe(null);
    });
});

describe('The getSizeOriginalImage functions',function(){
    it('should give a size height or width',function(){
        var result = getSizeOriginalImage('image1','height');
        var expected = album[0].height
        expect(result).toEqual(expected)
    });
});

describe('The getNextImage and getPreviousImage functions',function(){
    it('should have nextImage',function(){
        fillPage();
        var image = document.getElementById('image2');
        setNextImage(image);
        expect(nextImage).toEqual(document.getElementById('image3'));
    });

    it('should have previousImage',function(){
        fillPage();
        var image = document.getElementById('image16');
        setPreviousImage(image);
        expect(previousImage).toEqual(document.getElementById('image15'));
    });
});

describe('The createAndaddOverlay functions',function(){
    it('should create div overlay',function(){
        fillPage();
        createAndAddOverlay();
        expect(document.getElementById('overlay')).toNotBe(null);
    });
});

describe('The setupImageZoom functions',function(){
    it('should set up image zoomed and return',function(){
        fillPage();
        var image = document.getElementById('image15');
        var result = setupImageZoom(image);
        expect(result).toNotBe(null);
    });
});

describe('The formatDate functions',function(){
    it('should convert date to string',function(){
        var date = new Date('9/8/1991')
        var result= formatDate(date);
        expect(result).toEqual("8-9-1991");
    });
});

