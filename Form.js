class Form {

    constructor() {
      this.button = createButton('Play');
    }
    hide(){
    
     this.button.hide();
    }
  
    display(){

      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.button.hide();
        
      });
  
    
    }
  }
  