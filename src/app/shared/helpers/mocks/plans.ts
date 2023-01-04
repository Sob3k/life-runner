import { Plan } from "src/app/models/plan";

export const plans: Plan[] = [
  {
    id: 1,
    imgUrl: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg",
    tags: ["Beginner", "10 weeks", "Starter"],
    name: "Run your first 10 kilometers",
    length: "10 Week Course",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci...",
    membersNumber: 867,
  },
  {
    id: 2,
    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-runner-running-at-summer-park-trail-healthy-royalty-free-image-1591373138.jpg",
    tags: ["Medium", "18 weeks", "Half-marathon"],
    name: "Prepare for half-marathon",
    length: "18 Week Course",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci...",
    membersNumber: 437,
  },
  {
    id: 3,
    imgUrl: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltfbc56ab180b53476/5f8833d53f52332642077bd5/header_02_1023x630.jpg?format=pjpg&auto=webp&quality=76&width=1232",
    tags: ["Advanced", "24 weeks", "Marathon"],
    name: "Become a marathon runner",
    length: "24 Week Course",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci...",
    membersNumber: 321,
  }
]
