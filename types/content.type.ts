import type { ParsedContent } from '@nuxt/content'

export interface Bookmark extends ParsedContent {
  slug: string
  url: string
  description: string
  published: string
}

export interface Project extends ParsedContent {
  slug: string
  title: string
  url: string
  logo?: string
  thumbnail?: string
  status: 'Completed' | 'In Progress' | 'On Hold' | 'Cancelled'
  opensource: boolean
}
