interface Link{
    name:string;
    href:string;
 }

 
 interface IStoreState{
   links:Link[];
   addLink:(newlink:Link)=>void;
   setLinks: (newLinks:Link[]) => void;
   showExplore:boolean;
   setShowExplore:(value:boolean)=> void;
   openProject : string;
   setOpenProject:(value:string)=>void;
   activeLink:string;
   setActiveLink:(href:string)=>void; 
   activeSection:string;
   setActiveSection:(id:string)=>void;
   activeProject:string;
   setActiveProject:(id:string)=>void;
   showExploreItems:boolean;
   setShowExploreItems:(value:boolean)=>void;
   removeLink:(name:string)=>void;
 }