import type { Project, Repository } from './types'

export const featuredProjects: Project[] = [
  {
    title: 'OmniNode Engine',
    description: 'A distributed microservice orchestrator built for low-latency routing and deep observability.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Go', 'Redis', 'Kubernetes'],
  },
  {
    title: 'Flux Shader Lab',
    description: 'Experimental GLSL workflows applying procedural vectors and kinetic typography.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['GLSL', 'WebGL'],
  },
  {
    title: 'KaidOS CLI',
    description: 'A high-performance command line interface for devops machine automation and deployment.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    tags: ['CLI', 'Rust'],
  },
  {
    title: 'Kinetic UI Framework',
    description: 'A design system implementation focused on fluid transitions and tonal uplift spacing logic.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vue', 'TypeScript', 'Tailwind'],
  },
]

export const repositories: Repository[] = [
  { name: 'monolith-core', description: 'Internal state manager for heavy-lifting data pipelines.', tech: 'TypeScript' },
  { name: 'cyan-logger', description: 'High-visibility logging utility for distributed Node services.', tech: 'Node.js' },
  { name: 'react-gen-wasm', description: 'WASM-based checksum generator for high-performance build pipelines.', tech: 'Rust' },
  { name: 'kinetic-hooks', description: 'Reusable UI utility hooks styled for kinetic interactions.', tech: 'Vue' },
  { name: 'stack-deployer', description: 'Terraform wrapper for automated Kaidstack cloud provisioners.', tech: 'Terraform' },
  { name: 'auth-shield-v2', description: 'Zero-trust authentication protocol for enterprise portals.', tech: 'Go' },
]
