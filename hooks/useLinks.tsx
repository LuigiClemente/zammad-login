import { routes } from '@/lib/routes';
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

const useLinks = () => {
    const t = useTranslations('Navigation');
    const locale = useLocale();

    console.log({routes , locale})
    const menuNavigationLinks = [
        {
          href: routes[locale]['resources'],
          text: t('Resources'),
        },
        {
          href: routes[locale]['store'],
          text: t('Store'),
        },
        {
          href: routes[locale]['plans'],
          text: t('Plans'),
        },
        {
          href: routes[locale]['appointments'],
          text: t('Appointments'),
        },
        {
            href: routes[locale]['payments'],
            text: t('Payments'),
          },
          {
            href: routes[locale]['documents'],
            text: t('Documents'),
          },
      ];

    // const menuNavigationLinks = [];
  return {menuNavigationLinks};
}

export default useLinks