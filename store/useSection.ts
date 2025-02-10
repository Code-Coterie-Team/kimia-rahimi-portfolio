import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore=create<IStoreState>()(
 persist(
     (set) => (
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
            setActiveProject:(id)=>set({activeSection:id}),
            isShowMain : true,
            setIsShowMain:(value)=>set({isShowMain:value})
      
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
