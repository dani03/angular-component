import { observable } from 'rxjs';

 export interface Destructor {
   delete():void;

 }
 export class Trash {
    detroy(obj: Destructor){
      obj.delete();
      console.log("objet detruit")
    }
 }

 export class Jpeg implements Destructor{
    delete():void{
      console.log("jpeg supprimé");
    }
 }

 export class Mp3 implements Destructor{
  delete():void{
    console.log("mp3 supprimé");
  }
}
 const poubelle = new Trash();
 const image = new Jpeg();

 poubelle.detroy(image);