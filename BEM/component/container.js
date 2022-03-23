import { Card } from "./card.js"

class Container {
    
    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('content');
        this.$card1 = new Card('ZACH', './Images/img1.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important.');
        this.$card2 = new Card('SARAH', './Images/img2.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important. I like Supercharge Vitamin Boost because it help me stay focused');
        this.$card3 = new Card('MIKE', './Images/img3.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important. I like Supercharge Vitamin Boost because it help me stay focused');
    }

    render() {
        this.$container.appendChild(this.$card1.render());
        this.$container.appendChild(this.$card2.render());
        this.$container.appendChild(this.$card3.render());

        return this.$container;
    }
}

export { Container }