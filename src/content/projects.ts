import type { Project, Repository } from './types'
import avaloriansImage from '@/assets/images/avalorians2.png'
import livraworldImage from '@/assets/images/livraworld.png'


export const featuredProjects: Project[] = [
  {
    title: 'Avalorians',
    description: 'Avalorians is a medieval-themed, blockchain-based play-to-earn PVP game designed as a Telegram mini-app on the TON network. Players build kingdoms, collect and upgrade "creeps" (NFTs), and compete in playerversus-player combat to earn TON rewards by climbing the leaderboard. It features over 50,000 users.',
    image: avaloriansImage,
    tags: ['NestJS', 'Colyseus', 'Unity', 'AWS', 'Terraform', 'Kubernetes', 'AWS ECS', 'GitHub Actions', 'Phaser', 'React', 'Next.js'],
    url: 'https://www.youtube.com/watch?v=w1Gsg7yFbOE',
  },
  {
    title: 'Livra World',
    description: 'LIVRA WORLD is a Japanese-language online platform that lets potential homeowners browse, customize, and estimate hundreds of real Japanese model homes virtually and independently while also gaining insight via curated builder matches and educational content.',
    image: livraworldImage,
    tags: ['Unity', 'Unreal Engine', 'PHP', '3D Vista', 'ShapeSpark', 'AWS', 'Terraform', 'Kubernetes' ],
    url: 'https://livraworld.com/',
  },

]

export const repositories: Repository[] = [
  {
    name: 'Habagat',
    description: 'A developer-friendly, high-performance web server built in Rust, designed to fix the pain points of NGINX and Apache while matching their core features.',
    techs: ['Rust', 'Tauri'],
    url: 'https://github.com/praganoid-studio/habagat',
  },
  {
    name: 'Pioneer',
    description: 'A portfolio template I built to create this portfolio website',
    techs: ['Vue'],
    url: 'https://github.com/kaidolex/pioneer',
  },
  {
    name: 'Terraform Modules',
    description: 'A collection of self-made Terraform modules designed to standardize, automate, and simplify infrastructure provisioning across different cloud environments. These modules encapsulate best practices for networking, compute, storage, IAM, and CI/CD integrations, allowing reusable and consistent deployments.',
    techs: ['Terraform', 'Bash'],
    url: 'https://github.com/praganoid-studio/prometheus',
  },
  {
    name: 'Praganoid Studio',
    description: 'A GitHub Organization that I established to host and manage my opensource projects. It also serves as a curated collection of microservices designed to operate in high-availability and scalable environments. These services are built with modular architecture principles, allowing them to be deployed independently or as part of a larger distributed system.',
    techs: ['NestJS', 'Rust', 'Terraform', 'Kubernetes'],
    url: 'https://github.com/praganoid-studio',
  },
  {
    name: 'QueVault',
    description: 'A secure, offline-first password manager built with Flutter. It provides military-grade encryption, biometric authentication, and comprehensive vault management while keeping all your sensitive data stored locally on your device.',
    techs: ['Flutter', 'Dart'],
    url: 'https://github.com/kaidolex/quevault_app',
  },
]
