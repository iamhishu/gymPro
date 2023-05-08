import React, { useEffect ,useState} from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/logo.png"
import Link from './Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/actionButton';

type Props = {
    isOnTop: boolean;
    selectedPage: string,
    setSelectedPage: (value: string) => void;
    menuLinks: string[];
  
}


const Navbar = ({ isOnTop, selectedPage, setSelectedPage, menuLinks}: Props) => {
    const [menuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px');
    const navBarBg = !isOnTop ?  "bg-primary-100 drop-shadow"  :'' 
    return (
        <nav>
            <div className={`${navBarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="logo" />
                        {/* RIGHT SIDE */
                        }
                        {isAboveMediumScreens ? (
                                 <div className={`${flexBetween} w-full`}>
                                 <div className={`${flexBetween} gap-8 text-sm`}>
                                     {/* APP LINKS */}
                                     {menuLinks.map((element, index) =>
                                         <React.Fragment key={index}>
                                             <Link
                                                 page={element}
                                                 selectedPage={selectedPage}
                                                 setSelectedPage={setSelectedPage}
                                             />
                                         </React.Fragment>
                                     )
                                     }
                                 </div>
                                 <div className={`${flexBetween} gap-8 `}>
                                     {/* SIGNUP LINK */}
                                     <p>
                                         Sign In
                                     </p>
                                     <ActionButton className='bg-secondary-400 p-2 rounded-2'>
                                         Become a Member
                                     </ActionButton>
                                 </div>
     
                             </div>
                        ): (
                                <button className="rounded-full bg-secondary-400 p-2"
                                onClick = {()=> setIsMenuToggled(!menuToggled)}
                                > 
                                 <Bars3Icon className='h-6 w-6 color-white text-white' />   
                            </button>
                        )}
               

                    </div>
                    <div>
                    </div>

                </div>
            </div>
            {/** MOBILE  MENU MODEL  */}

            {!isAboveMediumScreens && menuToggled && (
                
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow'>
                    {/** Close ICON */}
                    <div className='flex justify-end p-12'>
                    <button
                                onClick = {()=> setIsMenuToggled(!menuToggled)}
                                > 
                                 <XMarkIcon className='h-6 w-6 color-white text-gray-400' />   
                            </button>
                    </div>
                    {/** MENU ITEMS */}

                    
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                                     {/* APP LINKS */}
                                     {menuLinks.map((element, index) =>
                                         <React.Fragment key={index}>
                                             <Link
                                                 page={element}
                                                 selectedPage={selectedPage}
                                                 setSelectedPage={setSelectedPage}
                                             />
                                         </React.Fragment>
                                     )
                                     }
                    </div>
                    

            </div>    
            )}

        </nav>
    )
}

export default Navbar