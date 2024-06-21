'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CheckCircle2, ChevronsUpDown, Plus, Settings2 } from 'lucide-react';
import { signOut } from 'next-auth/react';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { AvatarWithText } from './ui/avatar';
import { cn } from '@/lib/utils';
import { useAppProvider } from 'provider/AppProvider';
import useLinks from 'hooks/useLinks';
import { useTranslations } from 'next-intl';



export const MenuSwitcher = ({noLocalModal}:{noLocalModal : boolean}) => {
  const pathname = usePathname();
  const t= useTranslations('Navigation')

  const {userData ,logout} = useAppProvider();


  const formatAvatarFallback = (teamName?: string) => {
    if (teamName !== undefined) {
      return teamName.slice(0, 1).toUpperCase();
    }

   
  };


 

  const menuNavigationLinks =!noLocalModal ? [
    {
      href: '/blog',
      text: 'Blog',
    },
  
  ]:[];

  return (
    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <Button
        data-testid="menu-switcher"
        variant="ghost"
        className="relative flex h-12 flex-row items-center px-0 py-2 ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-transparent md:px-2 md:min-w-[200px]"
      >
        <AvatarWithText
          avatarFallback={formatAvatarFallback(userData.firstname) as string}
          primaryText={userData.firstname + userData.lastname}
          secondaryText={t('Personal')}
          rightSideComponent={
            <ChevronsUpDown className="text-muted-foreground ml-auto h-4 w-4" />
          }
          textSectionClassName="hidden lg:flex"
        />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className={cn('z-[60] ml-6 w-full md:ml-0 min-w-[320px]')}
      align="end"
      forceMount
    >
   
          <DropdownMenuLabel>t('Personal')</DropdownMenuLabel>

          <DropdownMenuItem asChild>
            <Link href={'/'}>
              <AvatarWithText
                avatarFallback={formatAvatarFallback(userData.firstname) as string}
                primaryText={userData.firstname + userData.lastname}
                secondaryText={t('Personal')}
                rightSideComponent={
                
                    <CheckCircle2 className="ml-auto fill-black text-white dark:fill-white dark:text-black" />
                  
                }
              />
            </Link>
          </DropdownMenuItem>

        

     
      

      <DropdownMenuSeparator />

<div className='block md:none'>
{
  menuNavigationLinks.map(({ href, text }) => {
    return (

      <DropdownMenuItem className="text-muted-foreground px-4 py-2" asChild>
      <Link href={href}>{text}</Link>
    </DropdownMenuItem>
    )
  })
}
</div>

 

      <DropdownMenuItem
        className="text-destructive/90 hover:!text-destructive px-4 py-2"
        onSelect={logout}
      >
        {t('Sign out')}
      </DropdownMenuItem>
    </DropdownMenuContent >
  </DropdownMenu >
  );
};
