const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor(field) {
    this._field = field;
    this._locationX = 0;
    this._locationY = 0;
    this.gameStatus = false;
  }
  get () {
    return this._field;
  }
  set (input) {
    this._field = input;
  }

  print() {
    for(let i=0; i<this._field.length; i++){
      
        console.log(this._field[i].join(''));
      }
      
    
  }
  
  generateField(heigth, width, percentage) {
    
    
    let fieldArray = [];
    let fieldArrayX = [];
    for(let i=0; i< heigth; i++){
      for(let j=0; j< width; j++){
        let randomNumber = Math.floor(Math.random()*2*percentage/100);
        if(randomNumber == 0){
        fieldArrayX.push(fieldCharacter);
        } else {
          fieldArrayX.push(hole);
        }
      }
    fieldArray.push(fieldArrayX);
    fieldArrayX = [];
    }
    this._locationX = Math.floor(Math.random()*width);
    this._locationY = Math.floor(Math.random()*heigth);
    console.log(this._locationX, this._locationY)
    fieldArray[this._locationY][this._locationX] = pathCharacter;
    fieldArray[Math.floor(Math.random()*width)][Math.floor(Math.random()*heigth)] = hat;
    this._field = fieldArray;
}
  
  move(input) {
    if(input == 'u'){
      this._locationY -= 1 ;
      if(this._locationY < 0) {
        console.log("This is beyond of limits. Please select a valid direction");
        return this._locationY += 1;
      } else if(this._field[this._locationY][this._locationX] == hat) {
        console.log("Congrulations! You Win!")
        return this.gameStatus = true
      } else if (this._field[this._locationY][this._locationX] == pathCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else if(this._field[this._locationY][this._locationX] == fieldCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else {
        console.log("Upps you died!")
        return this.gameStatus = true
      }
    } else if(input == 'd'){
      this._locationY += 1 ;
      
      if(this._locationY > this._field.length-1) {
        console.log("This is beyond of limits. Please select a valid direction");
        return this._locationY -= 1;
      } else if(this._field[this._locationY][this._locationX] == hat) {
        console.log("Congrulations! You Win!")
        return this.gameStatus = true
      } else if (this._field[this._locationY][this._locationX] == pathCharacter) {
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else if(this._field[this._locationY][this._locationX] == fieldCharacter) {
        this._field[this._locationY][this._locationX] = pathCharacter;
        } else {
        console.log("Upps you died!")
        return this.gameStatus = true
      }
    } else if(input == 'r'){
      this._locationX += 1 ;
      if(this._locationX > this.generateField.length-1) {
        console.log("This is beyond of limits. Please select a valid direction");
        return this._locationX -= 1;
      } else if(this._field[this._locationY][this._locationX] == hat) {
        console.log("Congrulations! You Win!")
        return this.gameStatus = true
      } else if (this._field[this._locationY][this._locationX] == pathCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else if(this._field[this._locationY][this._locationX] == fieldCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
       } else {
        console.log("Upps you died!")
        return this.gameStatus = true
      }
    } else if(input == 'l'){
      this._locationX -= 1 ;
      if(this._locationX < 0) {
        console.log("This is beyond of limits. Please select a valid direction");
        return this._locationX += 1;
      } else if(this._field[this._locationY][this._locationX] == hat) {
        console.log("Congrulations! You Win!")
        return this.gameStatus = true
      } else if (this._field[this._locationY][this._locationX] == pathCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else if(this._field[this._locationY][this._locationX] == fieldCharacter){
        this._field[this._locationY][this._locationX] = pathCharacter;
      } else {
        console.log("Upps you died!")
        return this.gameStatus = true
      }
    }
   
  }

  game () {
    this.generateField(10,20,60);
    while(this.gameStatus == false) {
    this.print();
    /*console.log(this._locationY, this._locationX); */
    let direction = prompt('which way? u: up, r: right, d: down, l: left  ') 
    this.move(direction);
    }
  }
}

const myField = new Field([]);

/*myField.generateField();*/
myField.game();


