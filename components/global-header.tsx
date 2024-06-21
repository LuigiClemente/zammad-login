"use client";


import { AvatarWithText } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { CheckCircle2, ChevronsUpDown, Plus, Settings2 } from 'lucide-react'
import { signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useAppProvider } from 'provider/AppProvider';
import useLinks from 'hooks/useLinks';
import { useTranslations } from 'next-intl';

export const GlobalHeader = ({noLocalModal=false}:{noLocalModal?:boolean}) => {

  const {userData ,logout} = useAppProvider();
  const t=useTranslations('Navigation');

  const {menuNavigationLinks} = useLinks();
    const formatAvatarFallback = (teamName?: string) => {
        if (teamName !== undefined) {
          return teamName.slice(0, 1).toUpperCase();
        }
    
      };

 

  return (
    <header className="mx-auto  w-full max-w-screen-xl items-center justify-between gap-x-4 px-4 md:justify-normal md:px-8 py-3 border-b border-gray-200 hidden md:flex">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Image width={168} height={50} className="object-contain w-full h-10 " src="https://res.cloudinary.com/dizm8txou/image/upload/landing-page/assets/day/logo.webp" alt="Logo"  />
       
      </div>
      <div>
        <ul className="flex space-x-6">
         {
          menuNavigationLinks.map(({ href, text }) => {
            return (
              <li>
              <Link
                href={href}
                className="text-gray-600 hover:text-gray-900  text-sm"
              >
                {text}
              </Link>
            </li>
            )
          })
         }
       
        </ul>
      </div>
      <div>
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
     
            <DropdownMenuLabel>{t('Personal')}</DropdownMenuLabel>

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

<div className='block md:hidden'>
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

      <div className="hidden md:block">
      


       
        </div>


        <DropdownMenuItem
          className="text-destructive/90 hover:!text-destructive px-4 py-2"
          onSelect={logout}
        >
        {t('Sign out')}
        </DropdownMenuItem>
      </DropdownMenuContent >
    </DropdownMenu >
        
      </div>
    </div>
  </header>
  )
}
