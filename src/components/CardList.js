import React from 'react';
import Card from './Card';

 const CardList =({robots})=>{
     if(true){
         throw new Error("Nooooo");
     }
     const cardsArray=robots.map((user, i )=>{
         return(
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
         );
     });
     
     return(
        <div>
       {
       cardsArray
       //here we can simply add the map function without storing it into a variable
       }
      </div>
     );
 }

 export default CardList;