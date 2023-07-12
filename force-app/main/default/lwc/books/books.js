import { LightningElement,wire } from 'lwc';
import BOOKS from '@salesforce/resourceUrl/Books';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';
import getAllBooks from '@salesforce/apex/Books.getAllBooks'

export default class Books extends LightningElement {
    // directly reference this
    // create a variable and you can refer that variable
    bookResources = BOOKS +'/booksPic/atomicHabits.jpg'; 
    bookInfo;

    @wire(getAllBooks)
    books({error,data}){
        if(data){
            console.log("Book records: ",data);
            this.bookInfo = data;
        }
        else if(error){
            console.log('error ',error);
        }
    }
}