// ============================================================
// portfolioData.js — Central content configuration
// ============================================================

export const personalInfo = {
  name: "Chidera Ojimba",
  title: "Cloud Engineer",
  // My tagline
  tagline:
    "Building scalable, secure infrastructure on AWS, Azure and Cloud-native platforms.",

  bio: `I'm a Cloud Engineer with hands-on experience designing and maintaining scalable,
        secure, and highly available infrastructure on major cloud platforms.
        I specialize in Infrastructure as Code, Kubernetes orchestration, and
        building automated CI/CD pipelines that accelerate software delivery.`,
  // Professional email
  email: "chideraojimba878@gmail.com",
  // Professional LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/chidera-ojimba",
  // GitHub profile URL
  github: "https://github.com/Derakings",
  // TODO: Replace with your resume PDF URL (Google Drive, Cloudinary, or place in /public)
  resumeUrl:
    "https://drive.google.com/file/d/1_4Mi4OwmoRml3wTWBlF9pDpawBH6RyDY/view?usp=drive_link",
  // TODO: Place your photo in /public/profile.jpg, then this path auto-resolves
  photoUrl: "/DERA.jpg",
  photoAlt: "Profile photo",
};

export const introVideo = {
  //  YouTube video ID from the share URL of your YouTube video.
  youtubeId: "nWgWPt0xTRA",
  title: "Who I Am as a Cloud Engineer",
  // TODO: Update to match what you say in your video
  description:
    "A quick introduction to my background, what I do, and what excites me about cloud engineering and DevOps.",
};

export const skills = [
  {
    category: "Cloud Platforms",
    items: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Red Hat OpenShift",
    ],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "AWS CloudFormation"],
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (EKS/AKS/OKD)", "Helm", "Amazon ECS"],
  },
  {
    category: "CI/CD & DevOps",
    items: ["GitHub Actions", "Jenkins", "GitLab CI"],
  },
  {
    category: "Monitoring & Logging",
    items: ["AWS CloudWatch", "Prometheus", "Grafana"],
  },
  {
    category: "Programming & Scripting",
    items: ["Python (beginner)", "Bash"],
  },
  {
    category: "Version Control & Collaboration",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    category: "Security & Identity",
    items: ["AWS IAM", "Security Groups", "Network ACLs"],
  },
  {
    category: "Linux & Networking",
    items: [
      "Linux Server Management",
      "Linux administration",
      "TCP/IP",
      "DNS",
      "Load Balancing",
    ],
  },
  {
    category: "Web development",
    items: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    category: "Soft Skills",
    items: [
      "Effective Communication",
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
    ],
  },
];

export const certifications = [
  // TODO: Replace with your actual certifications
  // Set credentialUrl to your Credly or certification verification link
  {
    name: "HNG Internship - certified by HNGi8",
    issuer: "HNG",
    badgeUrl: "",
    credentialUrl:
      "https://drive.google.com/file/d/1PvwEk5qvimX2AKV6W9XRVzVneD8_nH53/view?usp=drive_link", // TODO: add your credential URL
    year: "2025",
  },
  {
    name: "AltSchool Africa — School of Engineering Cloud Engineering Program",
    issuer: "Altschool - expected",
    badgeUrl: "",
    credentialUrl: "",
    year: "2024",
  },
  {
    name: "Kubernetes African Developer Training Program (KADT)",
    issuer: "Andela",
    badgeUrl: "",
    credentialUrl: "#",
    year: "2026",
  },
];

export const projects = [
  {
    id: 1,
    title: "AWS Infrastructure Automation with Terraform",
    description:
      "Designed and provisioned complete AWS infrastructure using Terraform, including custom VPC, public subnets, route tables, security groups, EC2, ALB, Auto Scaling, and CloudWatch monitoring to improve scalability and deployment consistency.",
    tags: ["Terraform", "AWS VPC", "EC2", "ALB", "Auto Scaling", "CloudWatch"],
    githubUrl: "https://github.com/Derakings/Bedrock-project.git",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Kubernetes Application Deployment (Super Mario)",
    description:
      "Deployed a containerized Super Mario web application on Kubernetes, provisioned cloud resources with Terraform, and configured deployments, services, and networking for reliable application accessibility.",
    tags: ["Kubernetes", "Docker", "Terraform", "AWS"],
    githubUrl: "https://github.com/Derakings/super-mario-eks-terraform.git",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Java Microservice Web App Deployment",
    description:
      "Designed a production-grade multi-VPC AWS architecture with Terraform, Transit Gateway, NLB, EC2 Auto Scaling Group, private subnet security, IAM least privilege, custom AMIs, and CloudWatch plus VPC Flow Logs for monitoring and resilience.",
    tags: [
      "Terraform",
      "AWS",
      "Transit Gateway",
      "NLB",
      "ASG",
      "IAM",
      "Apache",
    ],
    githubUrl: "https://github.com/Derakings/VPC_project_deployment.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "CI/CD Pipeline with Azure and DevOps",
    description:
      "Designed and implemented an end-to-end CI/CD pipeline for a Python FastAPI microservice using Azure DevOps Pipelines, and OpenShift, with GitOps-driven deployments across dev, staging, and production.",
    tags: ["Azure DevOps", "OpenShift", "Kubernetes", "FastAPI", "GitOps"],
    githubUrl: "https://github.com/Derakings/AZURE_devops.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "Dockerized Next.js and Python App with AWS ECR",
    description:
      "Containerized frontend and backend applications with production-ready Docker images, pushed secure tagged artifacts to Amazon ECR, and configured IAM plus AWS CLI authentication for cloud deployment workflows.",
    tags: ["Docker", "Next.js", "Python", "AWS ECR", "AWS CLI", "IAM"],
    githubUrl: "https://github.com/Derakings/react-fastapi-app.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Oneflesh DevOps (Freelance)",
    description:
      "Automated and deployed a secure, scalable multi-tier microservice app - an international christian dating app called (OneFlesh) using AWS services and serverless architecture, including VPC, EC2, MongoDB, CloudWatch monitoring to support their web application.",
    tags: ["AWS", "AWS Lambda", "EC2", "MongoDB", "Serverless", ""],
    githubUrl: null,
    liveUrl: "https://oneflesh.ca",
    featured: false,
  }
];

export const stats = [
  { number: "3+", label: "Years Exp." },
  { number: "15+", label: "Projects" },
  { number: "3", label: "Certifications" },
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Video", to: "video" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];
