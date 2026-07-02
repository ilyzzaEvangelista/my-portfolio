import dental1 from '../assets/appointment/DENTAL-1.png'
import dental2 from '../assets/appointment/DENTAL-2.png'
import dental3 from '../assets/appointment/DENTAL-3.png'
import dental4 from '../assets/appointment/DENTAL-4.png'
import hr1 from '../assets/hr/1.jpg'
import hr2 from '../assets/hr/2.jpg'
import hr3 from '../assets/hr/3.jpg'
import hr4 from '../assets/hr/4.jpg'
import hr5 from '../assets/hr/5.png'
import hr6 from '../assets/hr/6.png'
import inventory1 from '../assets/inventory/1.png'
import inventory2 from '../assets/inventory/2.png'
import inventory3 from '../assets/inventory/3.png'
import irms11 from '../assets/irms/1.1.png'
import irms12 from '../assets/irms/1.2.png'
import irms13 from '../assets/irms/1.3.png'
import irms3 from '../assets/irms/3.jpg'
import irms4 from '../assets/irms/4.png'
// import jobPortal1 from '../assets/job-portal/1.jpg'
import jobPortal2 from '../assets/job-portal/2.jpg'
import jobPortal3 from '../assets/job-portal/3.jpg'
import lending1 from '../assets/lending/LENDING-1.png'
import lending2 from '../assets/lending/LENDING-2.png'
import lending3 from '../assets/lending/LENDING-3.png'

export interface ProjectImage {
  src: string
  label: string
}

export interface Project {
  images: ProjectImage[]
  title: string
  description: string
  tags: string[]
  link: string | null
  badge: string | null
}

export const projects: Project[] = [
  {
    images: [
      { src: hr1, label: 'Active Employees' },
      { src: hr2, label: 'Timekeeping Dashboard' },
      { src: hr3, label: 'Generate Payroll' },
      { src: hr4, label: 'Approvals Dashboard' },
      { src: hr5, label: 'Overtime & CTO Dashboard' },
      { src: hr6, label: 'Leave Dashboard' },
    ],
    title: 'HR Management System',
    description:
      'Enterprise HRMS supporting 1,000+ active users with 10,000+ monthly HR transactions. Features payroll, leave tracking, biometric integration (ZKTeco), LDAP/AD authentication, multi-database architecture, real-time via Redis + Pusher, and org-chart visualization with D3.js.',
    tags: ['Nuxt 2', 'Vue 2', 'JavaScript', 'Vuetify 2', 'Vuex', 'Laravel 8', 'Redis', 'Pusher', 'D3.js', 'Docker'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: inventory1, label: 'Dashboard' },
      { src: inventory2, label: 'Items List' },
      { src: inventory3, label: 'Storage' },
    ],
    title: 'Inventory Management System',
    description:
      'Enterprise inventory platform tracking 5,000+ records across multiple warehouses. Features stock monitoring, item categorization, Excel/PDF reporting, and real-time stock updates shared across the internal package ecosystem.',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'Pinia', 'Laravel 12', 'Laravel Echo', 'Pusher', 'ApexCharts'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: irms12, label: 'Ticket Overview' },
      { src: irms11, label: 'Ticket Analytics' },
      { src: irms13, label: 'Recent Tickets' },
      { src: irms3, label: 'All Tickets' },
      { src: irms4, label: 'Technicians Graph' },
    ],
    title: 'Information Resource Management System',
    description:
      'Enterprise IRMS handling 3,000+ information service requests. Features ticket management, inventory tracking, real-time updates via Laravel Echo + Pusher, Excel/PDF exports and custom internal packages for Inventory and Ticket management.',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'Pinia', 'Laravel 12', 'Laravel Echo', 'Pusher', 'ApexCharts'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      // { src: jobPortal1, label: 'Job Listings' },
      { src: jobPortal2, label: 'Application Flow' },
      { src: jobPortal3, label: 'Dashboard' },
    ],
    title: 'Job Portal',
    description:
      'Full-featured recruitment portal with job postings, applicant tracking, resume management, and onboarding workflows. Features real-time notifications via Laravel Reverb, OAuth2 authentication, payment integration with Xendit, and multi-language support.',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Vuetify 4', 'Pinia', 'Laravel 12', 'Laravel Reverb', 'Sanctum', 'Xendit'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: lending1, label: 'Landing Page' },
      { src: lending2, label: 'Customer Portal' },
      { src: lending3, label: 'Admin Dashboard' },
    ],
    title: 'Lending System',
    description:
      'Full-stack loan application and repayment platform with customer and admin portals. Customers apply for loans with payslip upload, track amortization schedules, and submit payments.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Pinia', 'Vuetify 4'],
    link: 'https://github.com/ilyzzaEvangelista/lte-lending',
    badge: null,
  },
  {
    images: [
      { src: dental1, label: 'Landing Page' },
      { src: dental2, label: 'Admin Dashboard' },
      { src: dental3, label: 'Booking Flow' },
      { src: dental4, label: 'Appointments' },
    ],
    title: 'Dental Clinic System',
    description:
      'Clinic appointment system with a public booking website and admin dashboard. Patients browse services and request appointments; admins manage schedules and audit logs.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Sanctum', 'Vuetify'],
    link: 'https://github.com/ilyzzaEvangelista/urmaza-dental',
    badge: null,
  },
]
