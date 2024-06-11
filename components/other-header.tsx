'use client';

import { type HTMLAttributes, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { MenuIcon, SearchIcon } from 'lucide-react';


import { DesktopNav } from './desktop-nav';
import { MenuSwitcher } from './menu-switcher';
import { MobileNavigation } from './mobile-navigation';
import { cn } from '@/lib/utils';
import { AlgoliaButton } from 'pliny/search/AlgoliaButton';
import SearchButton from './SearchButton';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
noLocalModal? : boolean
};

export const OtherHeader = ({ noLocalModal=false,className, ...props }: HeaderProps) => {
  const params = useParams();

  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
 
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  return (
    <header
      className={cn(
        !noLocalModal && ' sticky top-0 z-[60] ' , 'supports-backdrop-blur:bg-background/60 bg-background/95flex h-16 w-full items-center border-b border-b-transparent backdrop-blur duration-200 flex items-center',
        (scrollY > 5 && !noLocalModal) && 'border-b-border',
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-x-4 px-4 md:justify-normal md:px-8">
        <div className="flex items-center md:hidden">
          <Image
            width={168}
            height={50}
            className="-ml-2 h-10 w-full object-contain"
            src="https://res.cloudinary.com/dizm8txou/image/upload/landing-page/assets/day/logo.webp"
            alt="Logo"
          />
        </div>

        <DesktopNav setIsCommandMenuOpen={setIsCommandMenuOpen} noLocalModal={noLocalModal} />

        <div className="flex gap-x-4 md:hidden">
          <MenuSwitcher noLocalModal={noLocalModal}  />
        </div>
 <div className="flex flex-row items-center space-x-4 md:hidden">

  {!noLocalModal &&  <SearchButton>
            
            <SearchIcon className="text-muted-foreground h-6 w-6" />
          
        </SearchButton>

  }
       

          <button onClick={() => setIsHamburgerMenuOpen(true)}>
            <MenuIcon className="text-muted-foreground h-6 w-6" />
          </button>
          
        </div>
        <MobileNavigation
        noLocalModal={noLocalModal}
            isMenuOpen={isHamburgerMenuOpen}
            onMenuOpenChange={setIsHamburgerMenuOpen}
          />
        
      </div>
    </header>
  );
};
