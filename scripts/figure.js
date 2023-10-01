import {getRandomArbitrary} from './functions.js';

class Figure {
    constructor(type, color) {
        this.figure = null;
        this._type = type;
        this._color = color;
        this._size = 0;
    }

    setParams(containerSize) {
        this.figure = document.createElement('div');
        this._size = getRandomArbitrary(50, 200);
        this.setDimensions();
        this.setClasses();
        this.setPosition(containerSize);
    }

    setDimensions() {
        this.figure.style.width = `${this._size}px`;
        this.figure.style.height = `${this._size}px`;
        this.figure.style.backgroundColor = this._color;
    }

    setPosition(containerSize) {
        const leftPos = getRandomArbitrary(this._size, containerSize.x - this._size);
        const topPos = getRandomArbitrary(this._size, containerSize.y - this._size);
        this.figure.style.left = `${leftPos}px`;
        this.figure.style.top = `${topPos}px`;
    }

    setClasses() {
        this.figure.classList.add(this._type);
        this.figure.classList.add('figure');
    }
}

export class Rectangle extends Figure {}

export class Triangle extends Figure {
    setDimensions() {
        this.figure.style.borderColor = 'transparent';
        this.figure.style.borderStyle = 'solid';
        this.figure.style.borderWidth = `${this._size / 2}px`;
        this.figure.style.borderBottomColor = this._color;
    }
}

export class Circle extends Figure {}
