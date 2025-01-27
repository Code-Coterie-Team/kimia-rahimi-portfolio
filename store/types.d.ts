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
   showExplore:boolean;
   setShowExplore:(value:boolean)=> void;
   openProject : string;
   setOpenProject:(value:string)=>void;
   activeLink:string;
   setActiveLink:(href:string)=>void;

 }