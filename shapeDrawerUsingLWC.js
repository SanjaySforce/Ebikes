import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShapeDrawerUsingLWC extends LightningElement {
    @track selectedShape;
    @track selectedColor;

    shapeOptions = [
        { label: 'Select a Shape', value: '' },
        { label: 'Square', value: 'square' },
        { label: 'Circle', value: 'circle' },
        { label: 'Triangle', value: 'triangle' },
        { label: 'Rectangle', value: 'rectangle' },
    ];
    colorOptions = [
        { label: 'Select a Color', value: '' },
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
    ];

    handleShapeChange(event) {
        this.selectedShape = event.detail.value;
    }
    handleColorChange(event){
        this.selectedColor = event.detail.value;
    }
    handleShapeWithColor(event){
        this.drawShape();
    }

    drawShape() {
        const canvas = this.template.querySelector('canvas');
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        const shapeWithColor = `${this.selectedShape}_${this.selectedColor}`;
        switch (shapeWithColor) {
            case 'square_red':
                this.drawSquare(context,'red');
                break;
            case 'square_blue':
                this.drawSquare(context,'blue');
                break;
            case 'square_green':
                this.drawSquare(context,'green');
                break;
            case 'circle_red':
                this.drawCircle(context,'red');
                break;
            case 'circle_blue':
                this.drawCircle(context,'blue');
                break;
            case 'circle_red':
                this.drawCircle(context,'green');
                break;
            case 'triangle_red':
                this.drawTriangle(context,'red');
                break;
            case 'triangle_blue':
                this.drawTriangle(context,'blue');
                break;
            case 'triangle_green':
                this.drawTriangle(context,'green');
                break;
            case 'rectangle_red':
                this.drawRectangle(context,'red');
                break;
            case 'rectangle_blue':
                this.drawRectangle(context,'blue');
                break;
            case 'rectangle_green':
                this.drawRectangle(context,'green');
                break;
            default:
                this.showToast();
                break;
        }
    }
    drawSquare(context,color){
        context.beginPath();
        context.fillStyle = color;
        context.fillRect(50, 50, 200, 200);
    }
    drawCircle(context,color){
        context.beginPath();
        context.fillStyle = color;
        context.arc(150, 150, 100, 0, 2 * Math.PI);
        context.fill();
    }
    drawTriangle(context,color){
        context.beginPath();
        context.fillStyle = color;
        context.moveTo(150, 50);
        context.lineTo(50, 250);
        context.lineTo(250, 250);
        context.closePath();
        context.fill();
    }
    drawRectangle(context,color){
        context.beginPath();
        context.fillStyle = color;
        context.fillRect(50, 50, 200, 100);
    }
    showToast(){
        const event = new ShowToastEvent({
            title : 'Error',
            message : 'Please select any valid shape and color',
            variant : 'Error',
            mode : 'dismissable'
        });
        this.dispatchEvent(event);
    }
}