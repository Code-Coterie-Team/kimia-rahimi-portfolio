interface Link{
    name:string;
    href:string;
 }

 
 interface IStoreState{
     stylePublic:{
         transform: string;
         transition: string;
         opacity:string
     },
     changeStyle:()=>void;
 
   links:Link[];
   addLink:(newlink:Link)=>void;
   setLinks: (newLinks:Link[]) => void;
 }