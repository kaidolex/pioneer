import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'C#', 'Dart', 'Terraform (HCL)', 'Rust', 'Python', 'Java', 'PHP', 'Bash'] },
  { category: 'Frameworks', items: ['Express', 'NestJS', 'Colyseus', 'Vue', 'React', 'Nuxt', 'Next.js', 'Flutter (Dart)', 'Tauri (Rust)', 'Laravel (PHP)', 'Spring Boot (Java)', 'FastAPI (Python)'] },
  { category: 'Infrastructure and Tooling', items: ['Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Argo CD', 'Grafana', 'Prometheus', 'Git', 'GitHub Actions', 'Nginx', 'Apache', 'Vagrant', 'Helm', 'Ansible', 'Chaos Mesh', 'Apache Kafka', 'RabbitMQ'] },
  { category: 'Cloud Services', items: ['Amazon Web Services', 'Google Cloud Platform', 'Azure (PlayFab and Cloud Functions)', 'DigitalOcean', 'Linode', 'CloudFlare', 'OVH', 'Vultr', 'Hetzner', 'BrainCloud', 'AppWrite' ] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Redis / Redis Cluster', 'MongoDB', 'Firebase', 'Supabase', 'CockroachDB', 'YugabyteDB'] },
  { category: 'Game Development', items: ['Unity (C#)', 'Unreal Engine (Blueprints)', 'Blender (Beginner)'] },
  { category: 'Other Neat Stuff', items: ['WordPress', 'ShapeSpark', 'Google Analytics', 'Google Looker Studio', '3D Vista'] },
]
