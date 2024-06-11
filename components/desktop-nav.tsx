import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { AlgoliaButton } from 'pliny/search/AlgoliaButton';
import SearchButton from './SearchButton';


export type DesktopNavProps = HTMLAttributes<HTMLDivElement> & {
  setIsCommandMenuOpen: (value: boolean) => void;
  noLocalModal : boolean;
};

export const DesktopNav = ({noLocalModal, className, setIsCommandMenuOpen, ...props }: DesktopNavProps) => {
  

const navigationLinks = !noLocalModal ?[
  {
    href: '/blog',
    label: 'Blog',
  },
 
]: [];

  const pathname = usePathname();
  const params = useParams();

  const [modifierKey, setModifierKey] = useState(() => 'Ctrl');

  const rootHref = '';

  useEffect(() => {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown';
    const isMacOS = /Macintosh|Mac\s+OS\s+X/i.test(userAgent);

    setModifierKey(isMacOS ? '⌘' : 'Ctrl');
  }, []);

  if(noLocalModal) return (<></>)
  return (
    <div
      className={cn(
        'ml-2 hidden flex-1 items-center gap-x-12 md:flex md:justify-between',
        className,
      )}
      {...props}
    >
      <div className="flex items-baseline gap-x-6">
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={`${rootHref}${href}`}
            className={cn(
              'text-muted-foreground dark:text-muted-foreground/60 focus-visible:ring-ring ring-offset-background rounded-md font-medium leading-5 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2',
              {
                'text-foreground dark:text-muted-foreground': pathname?.startsWith(
                  `${rootHref}${href}`,
                ),
              },
            )}
          >
            {label}
          </Link>
        ))}
      </div>

 <SearchButton>

      <Button
        variant="outline"
        className="text-muted-foreground flex w-96 items-center justify-between rounded-lg"
       
      >
        <div className="flex items-center">
          <Search className="mr-2 h-5 w-5" />
          Search
        </div>

        <div>
          <div className="text-muted-foreground bg-muted flex items-center rounded-md px-1.5 py-0.5  text-xs tracking-wider">
            {modifierKey}+K
          </div>
        </div>
      </Button>
</SearchButton>

    </div>
  );
};
