import { create } from "zustand";

export const useStore=create<IStoreState>((set)=>({
    stylePublic:{
        transform:'translateY(50%)',
        transition:"all 1s ease-in-out",
        opacity:'0.1'

    },
    changeStyle: () =>
        set(() => ({
            stylePublic: {
                transform: 'translateY(0%)',
                transition: 'all 1s ease-in-out',
                opacity:'1'
            },
        })),
        links:[],         
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
            activeLink:" ",
            setActiveLink:(href)=>set({activeLink: href}),


        
  
}))
