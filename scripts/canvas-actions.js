import {Circle, Rectangle, Triangle} from "./figure.js";
import {generateColor} from './functions.js';

class CanvasActions {
    constructor(canvasEl, inputEl) {
        this.canvas = canvasEl;
        this.input = inputEl;
    }

    appendFiguresOnClick(btn) {
        btn.addEventListener('click', () => {
            const figuresNumber = Number(this.input.value) ? Number(this.input.value) : 0;
            const figureColor = generateColor();

            for (let i = 0; i < figuresNumber; i++) {
                const figureInstance = this.createFigure(figureColor);
                const containerSize = {x: this.canvas.clientWidth, y: this.canvas.clientHeight};
                figureInstance.setParams(containerSize);
                this.canvas.append(figureInstance.figure);
            }
        });
    }

    createFigure(figureColor) {}
}

export class CanvasRectangleActions extends CanvasActions {
    createFigure(figureColor) {
        return new Rectangle('rectangle', figureColor);
    }
}

export class CanvasTriangleActions extends CanvasActions {
    createFigure(figureColor) {
        return new Triangle('triangle', figureColor);
    }
}

export class CanvasCircleActions extends CanvasActions {
    createFigure(figureColor) {
        return new Circle('circle', figureColor);
    }
}

