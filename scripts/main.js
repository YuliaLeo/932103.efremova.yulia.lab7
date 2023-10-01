import {CanvasRectangleActions, CanvasTriangleActions, CanvasCircleActions} from "./canvas-actions.js"

const inputEl = document.querySelector('.input-block__input');

const rectangleBtn = document.querySelector('.rectangle-btn');
const triangleBtn = document.querySelector('.triangle-btn');
const circleBtn = document.querySelector('.circle-btn');

const canvas = document.querySelector('.canvas');

const rectActions = new CanvasRectangleActions(canvas, inputEl);
const triangleActions = new CanvasTriangleActions(canvas, inputEl);
const circleActions = new CanvasCircleActions(canvas, inputEl);

rectActions.appendFiguresOnClick(rectangleBtn);
triangleActions.appendFiguresOnClick(triangleBtn);
circleActions.appendFiguresOnClick(circleBtn);

canvas.addEventListener('focus', ($event) => {
    if ($event.target.classList.contains('figure')) {
        const el = $event.target;

        if (el.classList.contains('triangle')) {
            el.style.borderBottomColor = 'yellow';
        }
        else {
            el.style.backgroundColor = 'yellow';
        }
    }
});

canvas.addEventListener('dblclick', ($event) => {
    if ($event.target.classList.contains('figure')) {
        $event.target.remove();
    }
});
