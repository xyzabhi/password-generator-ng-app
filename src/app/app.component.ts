import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  length=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;

  onChangeLength(event: Event){
    const parsedValue=parseInt((event.target as HTMLInputElement).value);
    if(!isNaN(parsedValue))
    {
      this.length=parsedValue;
    }
    else{
      this.length=0;
      this.password=""
    }
  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers=!this.includeNumbers
  }

  onChangeSymbols(){
    this.includeSymbols=!this.includeSymbols
  }

  onButtonClick(){
   const numbers='1234567890';
   const letters='abcdefghijklmnopqrstuvwxyz';
   const symbols='!@#$%^&*()';
   let validChars='';
   if(this.includeLetters)
   {
     validChars+=letters;
   }
   if(this.includeNumbers)
   {
     validChars+=numbers;
   }
   if(this.includeSymbols)
   {
     validChars+=symbols;
   }
   let generatedPassword='';
   for(let i=0;i<this.length;i++)
   {
     const index=Math.floor(Math.random()*validChars.length);
     generatedPassword+=validChars[index];
   }
   this.password=generatedPassword;
  }
  getPassword(){
    return this.password
  }
}
