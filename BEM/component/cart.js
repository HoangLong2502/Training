class Cart {
    $container;
    $imgMember;
    $svgPlay;
    $img;
    $body;
    $nameMember;
    $txtFeedback;
    
    $helpSession;
    $title;
    $detailSession;
    $strength;
    $imgStrength;
    $txtStrength;
    $weight;
    $imgWeigth;
    $txtWeigth;

    $shop;
    $txtHeader;
    $item;
    $imgItem;
    $hr;
    $detail;
    $detailTitle;
    $detailPrice;
    $detailFeedback;
    $star1;
    constructor(name, img, feedback) {
        this.$container = document.createElement('div');
        this.$container.classList.add('cart');

        this.$imgMember = document.createElement('div');
        this.$imgMember.classList.add('cart__imgMember');
        this.$svgPlay = document.createElement('img');
        this.$svgPlay.src = './SVG/OrangeVideoPlayButton.svg'
        this.$img = document.createElement('img');
        this.$img.src = img

        this.$body = document.createElement('div');
        this.$body.classList.add('cart__body');
        this.$nameMember = document.createElement('h1');
        this.$nameMember.classList.add('cart__header')
        this.$nameMember.innerHTML = name;
        this.$txtFeedback = document.createElement('p');
        this.$txtFeedback.classList.add('cart__txt')
        this.$txtFeedback.innerHTML = feedback;

        this.$helpSession = document.createElement('div');
        this.$helpSession.classList.add('cart__helpSession');
        this.$title = document.createElement('h3');
        this.$title.classList.add('cart__title');
        this.$title.innerHTML = 'VeggieShake helped ' + name + ' with...';
        this.$detailSession = document.createElement('div');
        this.$detailSession.classList.add('cart__helpSession__session')
        this.$strength = document.createElement('div');
        this.$imgStrength = document.createElement('img');
        this.$imgStrength.src = './SVG/PlusSign.svg';
        this.$txtStrength = document.createElement('p');
        this.$txtStrength.innerHTML = 'Strength'
        this.$weight = document.createElement('div');
        this.$imgWeigth = document.createElement('img');
        this.$imgWeigth.src = './SVG/MinusSign.svg'
        this.$txtWeigth = document.createElement('p');
        this.$txtWeigth.innerHTML = 'Weight Loss'
        
        this.$shop = document.createElement('div');
        this.$shop.classList.add('cart__shop');
        this.$txtHeader = document.createElement('h3');
        this.$txtHeader.classList.add('cart__title');
        this.$txtHeader.innerHTML = 'Accomplished with ...';
        this.$item = document.createElement('div');
        this.$item.classList.add('cart__item');
        this.$imgItem = document.createElement('img');
        this.$imgItem.src = './Images/draf.png';

        this.$hr = document.createElement('hr');
        this.$hr.style.width = '1px';
        this.$hr.style.height = '20px';

        this.$detail = document.createElement('div');
        this.$detailTitle = document.createElement('p');
        this.$detailTitle.classList.add('cart__title');
        this.$detailTitle.innerHTML = 'Shop Green Almighty All-In-One';
        this.$detailPrice = document.createElement('p');
        this.$detailPrice.innerHTML = '$40';
        this.$detailFeedback = document.createElement('div');
        this.$star1 = document.createElement('img');
        this.$star1.src = './SVG/ReviewStar.svg';
        this.$star2 = document.createElement('img');
        this.$star2.src = './SVG/ReviewStar.svg';
        this.$star3 = document.createElement('img');
        this.$star3.src = './SVG/ReviewStar.svg';
        this.$star4 = document.createElement('img');
        this.$star4.src = './SVG/ReviewStar.svg';
        this.$star5 = document.createElement('img');
        this.$star5.src = './SVG/ReviewStar.svg';
        

    }

    render() {
        this.$imgMember.appendChild(this.$img);
        this.$imgMember.appendChild(this.$svgPlay);

        this.$body.appendChild(this.$nameMember);
        this.$body.appendChild(this.$txtFeedback);

        this.$strength.appendChild(this.$imgStrength);
        this.$strength.appendChild(this.$txtStrength);
        this.$weight.appendChild(this.$imgWeigth);
        this.$weight.appendChild(this.$txtWeigth);

        this.$detailSession.appendChild(this.$strength);
        this.$detailSession.appendChild(this.$weight);

        this.$helpSession.appendChild(this.$title);
        this.$helpSession.appendChild(this.$detailSession);

        this.$detailFeedback.appendChild(this.$star1)
        this.$detailFeedback.appendChild(this.$star2)
        this.$detailFeedback.appendChild(this.$star3)
        this.$detailFeedback.appendChild(this.$star4)
        this.$detailFeedback.appendChild(this.$star5)

        this.$detail.appendChild(this.$detailTitle);
        this.$detail.appendChild(this.$detailPrice);
        this.$detail.appendChild(this.$detailFeedback);

        this.$item.appendChild(this.$imgItem);
        this.$item.appendChild(this.$detail);

        this.$shop.appendChild(this.$txtHeader);
        this.$shop.appendChild(this.$item);

        this.$container.appendChild(this.$imgMember);
        this.$container.appendChild(this.$body);
        this.$container.appendChild(this.$helpSession);
        this.$container.appendChild(this.$shop)
        return this.$container
    }
}

export { Cart }