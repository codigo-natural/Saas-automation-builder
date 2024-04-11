import { Category } from "@/components/icons/category"
import { Logs } from "@/components/icons/clipboard"
import { Home } from "@/components/icons/home"
import { Payment } from "@/components/icons/payment"
import { Settings } from "@/components/icons/settings"
import { Templates } from "@/components/icons/templates"
import { Workflows } from "@/components/icons/workflows"

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

export const products = [
  {
    title: 'Moonbeam',
    link: '',
    thumbnail: '/p1.png',
  },
  {
    title: 'Cursor',
    link: '',
    thumbnail: '/p2.png',
  },
  {
    title: 'Rogue',
    link: '',
    thumbnail: '/p3.png',
  },

  {
    title: 'Editorially',
    link: '',
    thumbnail: '/p4.png',
  },
  {
    title: 'Editrix AI',
    link: '',
    thumbnail: '/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: '',
    thumbnail: '/p6.png',
  },

  {
    title: 'Algochurn',
    link: '',
    thumbnail: '/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: '',
    thumbnail: '/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: '',
    thumbnail: '/p3.png',
  },
  {
    title: 'SmartBridge',
    link: '',
    thumbnail: '/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: '',
    thumbnail: '/p5.png',
  },

  {
    title: 'Creme Digital',
    link: '',
    thumbnail: '/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: '',
    thumbnail: '/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: '',
    thumbnail: '/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: '',
    thumbnail: '/p3.png',
  },
]

export const menuOptions = [
  {
    name: 'Dashboard',
    Component: Home,
    href: '/dashboard'
  },
  {
    name: 'Workflows',
    Component: Workflows,
    href: '/workflows'
  },
  {
    name: 'Settings',
    Component: Settings,
    href: '/settings'
  },
  {
    name: 'Connections',
    Component: Category,
    href: '/connections'
  },
  {
    name: 'Billing',
    Component: Payment,
    href: '/billing'
  },
  {
    name: 'Templates',
    Component: Templates,
    href: '/templates'
  },
  {
    name: 'Logs',
    Component: Logs,
    href: '/logs'
  },
]