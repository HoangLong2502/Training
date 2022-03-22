import { Cart } from "./cart.js"

class Container {
    
    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('content');
        this.$cart1 = new Cart('ZACH', './Images/img1.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important.');
        this.$cart2 = new Cart('SARAH', './Images/img2.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important. I like Supercharge Vitamin Boost because it help me stay focused');
        this.$cart3 = new Cart('MIKE', './Images/img3.jpg', 'im usually juggling a few projects and some large spreasheets where attention do detail is important. I like Supercharge Vitamin Boost because it help me stay focused');
    }

    render() {
        this.$container.appendChild(this.$cart1.render());
        this.$container.appendChild(this.$cart2.render());
        this.$container.appendChild(this.$cart3.render());

        return this.$container;
    }
}

export { Container }