import { Injectable } from "../../../node_modules/@angular/core";
import { BehaviorSubject } from "../../../node_modules/rxjs";

@Injectable()
export class dataService{

    private messageSource=new BehaviorSubject<string>("");

    currentMessage=this.messageSource.asObservable();

    constructor(){}

changeMessage(message:string){
    this.messageSource.next(message);
}
getMessage(){return this.messageSource;}

}