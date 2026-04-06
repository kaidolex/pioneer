export interface Profile {
  name: string
  title: string
  subtitle: string
  availability: string
  bio: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface Service {
  title: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface TimelineItemData {
  company: string
  role: string
  period: string
  notes: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  url: string
}

export interface Repository {
  name: string
  description: string
  techs: string[]
  url: string
}

export interface ContactMethod {
  label: string
  value: string
}
