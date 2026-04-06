import type { ContactMethod, Profile } from './types'

export const profile: Profile = {
  name: 'Kaidstack',
  title: 'Senior Full Stack Developer',
  subtitle: 'DevOps & Cloud Engineer',
  availability: 'Available for Hire',
  bio: 'Specializing in the kinetic monolith: building robust, scalable backend and immersive frontend experiences powered by intentional cloud infrastructure.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',
}

export const contactMethods: ContactMethod[] = [
  { label: 'Secure Mail', value: 'hello@kaidstack.dev' },
  { label: 'Base Operations', value: 'San Francisco, Neural District' },
]
