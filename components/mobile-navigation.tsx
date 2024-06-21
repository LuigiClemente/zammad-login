'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Sheet, SheetContent } from './ui/sheet';
import useLinks from 'hooks/useLinks';


export type MobileNavigationProps = {
  isMenuOpen: boolean;
  onMenuOpenChange?: (_value: boolean) => void;
  noLocalModal:boolean;
};

export const MobileNavigation = ({ isMenuOpen, onMenuOpenChange , noLocalModal }: MobileNavigationProps) => {
  const params = useParams();
  const {menuNavigationLinks} = useLinks();
  const handleMenuItemClick = () => {
    onMenuOpenChange?.(false);
  };

  const rootHref = '';

  const globalRoutes = [
    {
      href: `${rootHref}/documents`,
      text: 'Home',
    },
    {
      href: `${rootHref}/templates`,
      text: 'About',
    },
    {
      href: '/settings/teams',
      text: 'Service',
    },
    {
      href: '/settings/profile',
      text: 'Contact Us',
    },
    ...(!noLocalModal ? [
   
      {
        href: '/settings/profile',
        text: 'Admin Panel',
      }
    ] : [])
  ];
  
  return (
    <Sheet open={isMenuOpen} onOpenChange={onMenuOpenChange} >
      <SheetContent className="flex w-full max-w-[350px] flex-col">
        <div className="mt-8 flex w-full flex-col items-start gap-y-4">
          {globalRoutes.map(({ href, text }) => (
            <Link
              key={href}
              className="text-foreground hover:text-foreground/80 text-md font-semibold"
              href={href}
              onClick={() => handleMenuItemClick()}
            >
              {text}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
