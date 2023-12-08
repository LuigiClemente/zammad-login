export type MenuItem = {
  href: string
  text: string
  active?: boolean
}

export type MobileMenu = {
  isOpen: boolean
  links: Array<MenuItem>
  closeMenu: () => void
}

export type LinkItem = MenuItem & {
  onClick?: () => void
}

export type HeaderLink = Omit<MenuItem, 'active'>
