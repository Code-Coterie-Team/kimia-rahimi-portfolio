import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore=create<IStoreState>()(
 persist(
     (set,get) => (
      {
        links:[{name:"About Me",href:"/"}],         
        addLink: (newlink) =>
            set((state) => {
                if (!state.links.find((l) => l.href === newlink.href)) {
                  return { links: [...state.links,newlink] };
                }
                return state;
              }),
        setLinks: (newLinks) => 
              set(() => ({
                  links: newLinks,
              })),
            showExplore:true,
            setShowExplore:(value)=>set({showExplore: value}),
            openProject:" ",
            setOpenProject:(value)=>set({openProject: value}),
            activeLink:"/#aboutme ",
            setActiveLink:(href)=>set({activeLink: href}),
            activeSection:"",
            setActiveSection:(id)=>set({activeSection:id}),
            activeProject:"",
            setActiveProject:(id)=>set({activeProject:id}),
            showExploreItems:true,
            setShowExploreItems:(value)=>set({showExploreItems:value}),
            removeLink:(href)=>{
            const {links} = get();
            if (links.length>1){
              const filterLink = links.filter((link)=>link.href !== href);
              set ({links : filterLink})
            }
            }
      }
     ),
     {
      name : "Storage",
      partialize: (state) => ({
        links: state.links,
        openProject: state.openProject,
        activeLink: state.activeLink,
      })
     }
 )
)
