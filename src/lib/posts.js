// Sample blog posts data
const posts = [
    {
        slug: "future-of-ai-development",
        title: "The Future of AI Development: Trends to Watch in 2024",
        excerpt:
            "Explore the latest trends in artificial intelligence development and discover what the future holds for AI technology.",
        content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence continues to evolve at an unprecedented pace. As we move through 2024, several key trends are shaping the future of AI development.</p>
      
      <h2>Key Trends</h2>
      <h3>1. Multimodal AI Systems</h3>
      <p>The integration of text, image, and audio processing in single AI systems is revolutionizing how we interact with technology.</p>
      
      <h3>2. Edge AI Computing</h3>
      <p>Moving AI processing closer to data sources is reducing latency and improving privacy protection.</p>
      
      <h3>3. Ethical AI Frameworks</h3>
      <p>The development of comprehensive ethical guidelines is becoming crucial for responsible AI deployment.</p>
      
      <h2>Conclusion</h2>
      <p>The future of AI development is bright, with innovations that promise to transform industries and improve lives worldwide.</p>
    `,
        category: "AI",
        tags: ["artificial-intelligence", "machine-learning", "technology-trends"],
        date: "Dec 15, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",
    },
    {
        slug: "quantum-computing-breakthrough",
        title: "Quantum Computing: The Next Technological Revolution",
        excerpt:
            "Dive deep into quantum computing breakthroughs and understand how they will reshape our digital landscape.",
        content: `
      <h2>Understanding Quantum Computing</h2>
      <p>Quantum computing represents a fundamental shift in how we process information, leveraging quantum mechanical phenomena to solve complex problems.</p>
      
      <h2>Recent Breakthroughs</h2>
      <p>Recent advances in quantum error correction and qubit stability are bringing us closer to practical quantum applications.</p>
      
      <h2>Applications</h2>
      <ul>
        <li>Cryptography and Security</li>
        <li>Drug Discovery</li>
        <li>Financial Modeling</li>
        <li>Climate Simulation</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>While challenges remain, the potential of quantum computing to solve previously intractable problems makes it one of the most exciting frontiers in technology.</p>
    `,
        category: "Quantum",
        tags: ["quantum-computing", "technology", "innovation"],
        date: "Dec 12, 2024",
        readTime: "7 min read",
        image: "/futureofai.jpg?height=400&width=600",
    },
    {
        slug: "blockchain-beyond-crypto",
        title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
        excerpt:
            "Discover how blockchain technology is being applied beyond digital currencies to solve real-world problems.",
        content: `
      <h2>Beyond Digital Currency</h2>
      <p>While blockchain gained fame through cryptocurrencies, its applications extend far beyond digital money.</p>
      
      <h2>Supply Chain Management</h2>
      <p>Blockchain provides transparency and traceability in supply chains, helping combat fraud and ensure product authenticity.</p>
      
      <h2>Healthcare Records</h2>
      <p>Secure, immutable health records that patients control while maintaining privacy and enabling better care coordination.</p>
      
      <h2>Digital Identity</h2>
      <p>Self-sovereign identity solutions that give individuals control over their personal data and digital identity.</p>
      
      <h2>Conclusion</h2>
      <p>The true potential of blockchain lies in its ability to create trust and transparency in systems where it was previously difficult to achieve.</p>
    `,
        category: "Blockchain",
        tags: ["blockchain", "web3", "decentralization"],
        date: "Dec 10, 2024",
        readTime: "6 min read",
        image: "/futureofai.jpg?height=400&width=600",
    },
    {
        slug: "sustainable-tech-innovations",
        title: "Sustainable Technology: Innovations for a Greener Future",
        excerpt:
            "Explore cutting-edge sustainable technologies that are helping create a more environmentally friendly world.",
        content: `
      <h2>The Green Tech Revolution</h2>
      <p>Technology is playing a crucial role in addressing climate change and environmental challenges.</p>
      
      <h2>Renewable Energy Innovations</h2>
      <p>Advanced solar panels, wind turbines, and energy storage solutions are making renewable energy more efficient and accessible.</p>
      
      <h2>Smart Cities</h2>
      <p>IoT sensors and AI-driven systems are optimizing energy usage, reducing waste, and improving quality of life in urban areas.</p>
      
      <h2>Circular Economy Tech</h2>
      <p>Technologies that enable recycling, upcycling, and waste reduction are creating more sustainable business models.</p>
      
      <h2>The Path Forward</h2>
      <p>Sustainable technology is not just about environmental protection—it's about creating a better future for all.</p>
    `,
        category: "Sustainability",
        tags: ["sustainability", "green-tech", "climate-change"],
        date: "Dec 8, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "cybersecurity-in-2024",
        title: "Cybersecurity Trends: Protecting Our Digital Future",
        excerpt:
            "Learn about the latest cybersecurity threats and the innovative solutions being developed to combat them.",
        content: `
      <h2>The Evolving Threat Landscape</h2>
      <p>As our digital footprint expands, so do the challenges in protecting our data and systems from cyber threats.</p>
      
      <h2>AI-Powered Security</h2>
      <p>Machine learning algorithms are being used to detect and respond to threats in real-time, staying ahead of cybercriminals.</p>
      
      <h2>Zero Trust Architecture</h2>
      <p>The principle of "never trust, always verify" is becoming the foundation of modern cybersecurity strategies.</p>
      
      <h2>Quantum-Safe Cryptography</h2>
      <p>Preparing for the quantum computing era by developing encryption methods that can withstand quantum attacks.</p>
      
      <h2>Building Resilience</h2>
      <p>The future of cybersecurity lies in building systems that are not just secure, but resilient and adaptive.</p>
    `,
        category: "Security",
        tags: ["cybersecurity", "privacy", "data-protection"],
        date: "Dec 5, 2024",
        readTime: "6 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "metaverse-development-guide",
        title: "Building for the Metaverse: A Developer's Guide",
        excerpt: "A comprehensive guide for developers looking to create immersive experiences in virtual worlds.",
        content: `
      <h2>Understanding the Metaverse</h2>
      <p>The metaverse represents a convergence of virtual reality, augmented reality, and persistent digital worlds.</p>
      
      <h2>Development Platforms</h2>
      <p>Popular platforms like Unity, Unreal Engine, and web-based solutions are making metaverse development more accessible.</p>
      
      <h2>Key Technologies</h2>
      <ul>
        <li>3D Graphics and Rendering</li>
        <li>Real-time Networking</li>
        <li>Spatial Audio</li>
        <li>Blockchain Integration</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Focus on user experience, performance optimization, and creating meaningful social interactions.</p>
      
      <h2>The Future</h2>
      <p>The metaverse is still in its early stages, offering tremendous opportunities for innovative developers.</p>
    `,
        category: "Development",
        tags: ["metaverse", "vr", "ar", "game-development"],
        date: "Dec 3, 2024",
        readTime: "8 min read",
        image: "/futureofai.jpg?height=400&width=600",

        slug: "ai-in-healthcare-2024",
        title: "AI in Healthcare: Revolutionizing Patient Care",
        excerpt: "Explore how artificial intelligence is transforming diagnostics, treatment planning, and patient care in 2024.",
        content: `
          <h2>Transforming Healthcare</h2>
          <p>AI technologies are being applied in radiology, pathology, and predictive analytics to improve patient outcomes and reduce costs.</p>
          
          <h2>Diagnostics and Imaging</h2>
          <p>Deep learning models help identify anomalies in scans faster and more accurately than traditional methods.</p>
          
          <h2>Personalized Treatment</h2>
          <p>AI-driven platforms are tailoring treatment plans based on patient data, history, and genetic markers.</p>
          
          <h2>Conclusion</h2>
          <p>The intersection of AI and healthcare holds immense potential to enhance the quality and efficiency of medical care.</p>
        `,
        category: "AI",
        tags: ["healthcare", "ai", "medtech"],
        date: "Dec 1, 2024",
        readTime: "6 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "5g-technology-impact",
        title: "5G Technology: What It Means for Innovation",
        excerpt: "Understand how 5G is set to transform industries and unlock new technological frontiers.",
        content: `
          <h2>5G Overview</h2>
          <p>5G offers faster speeds, lower latency, and more reliable connections compared to previous generations.</p>
          
          <h2>Industrial Applications</h2>
          <p>From smart factories to autonomous vehicles, 5G is enabling real-time data exchange and automation.</p>
          
          <h2>Consumer Experiences</h2>
          <p>Enhanced mobile experiences, gaming, and AR/VR are all benefiting from 5G advancements.</p>
        `,
        category: "Telecom",
        tags: ["5g", "connectivity", "networking"],
        date: "Nov 28, 2024",
        readTime: "4 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "robotics-in-manufacturing",
        title: "Robotics in Manufacturing: The Smart Factory Era",
        excerpt: "Discover how robotics and automation are driving efficiency and innovation in modern manufacturing.",
        content: `
          <h2>Automation Advances</h2>
          <p>Collaborative robots, or cobots, are working alongside humans to streamline production processes.</p>
          
          <h2>AI Integration</h2>
          <p>Intelligent robots are now capable of learning and adapting to new tasks with minimal human input.</p>
        `,
        category: "Robotics",
        tags: ["robotics", "automation", "industry-4.0"],
        date: "Nov 25, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "decentralized-finance-explained",
        title: "DeFi Explained: A Beginner’s Guide to Decentralized Finance",
        excerpt: "Get started with DeFi—what it is, how it works, and why it's reshaping the financial world.",
        content: `
          <h2>What is DeFi?</h2>
          <p>Decentralized Finance refers to financial services built on blockchain networks without traditional intermediaries.</p>
          
          <h2>Popular Platforms</h2>
          <p>Ethereum-based protocols like Uniswap, Aave, and Compound are at the forefront of DeFi.</p>
          
          <h2>Risks and Considerations</h2>
          <p>While offering greater accessibility, DeFi also presents new risks including volatility, smart contract bugs, and scams.</p>
        `,
        category: "Blockchain",
        tags: ["defi", "blockchain", "finance"],
        date: "Nov 20, 2024",
        readTime: "7 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "climate-tech-startups",
        title: "Top Climate Tech Startups to Watch in 2025",
        excerpt: "Meet the startups that are using technology to address the climate crisis and create sustainable change.",
        content: `
          <h2>Innovation in Sustainability</h2>
          <p>New companies are tackling carbon capture, renewable energy, and sustainable agriculture.</p>
          
          <h2>Impact and Investment</h2>
          <p>Venture capital interest in climate tech has surged, with record funding levels for green startups.</p>
        `,
        category: "Sustainability",
        tags: ["climate-tech", "startups", "environment"],
        date: "Nov 18, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "ai-for-small-businesses",
        title: "AI for Small Businesses: Tools to Boost Productivity",
        excerpt: "Learn how small businesses can leverage AI tools to optimize operations and grow efficiently.",
        content: `
          <h2>Accessible AI Solutions</h2>
          <p>From automated customer support to AI-powered marketing tools, small businesses are embracing AI like never before.</p>
          
          <h2>Choosing the Right Tools</h2>
          <p>Look for platforms that integrate easily with existing workflows and require minimal technical expertise.</p>
        `,
        category: "AI",
        tags: ["small-business", "productivity", "automation"],
        date: "Nov 15, 2024",
        readTime: "4 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "wearable-tech-trends",
        title: "The Future of Wearable Tech: What’s Next?",
        excerpt: "From health monitoring to immersive AR, explore the next generation of wearable technologies.",
        content: `
          <h2>Health-Focused Wearables</h2>
          <p>Wearables are evolving into medical-grade devices, capable of detecting early signs of illness.</p>
          
          <h2>Beyond Fitness</h2>
          <p>Expect innovations in smart glasses, brain-computer interfaces, and emotion-tracking devices.</p>
        `,
        category: "Wearables",
        tags: ["wearable-tech", "healthtech", "ar"],
        date: "Nov 10, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "ai-regulation-and-policy",
        title: "AI Regulation: What Policymakers Are Doing in 2025",
        excerpt: "A look at global efforts to regulate AI development and deployment responsibly.",
        content: `
          <h2>Regulatory Landscape</h2>
          <p>Governments are implementing policies to ensure AI transparency, accountability, and ethical use.</p>
          
          <h2>Global Collaboration</h2>
          <p>International frameworks are emerging to standardize AI regulations across borders.</p>
        `,
        category: "Policy",
        tags: ["ai-regulation", "ethics", "policy"],
        date: "Nov 8, 2024",
        readTime: "6 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "green-cloud-computing",
        title: "Green Cloud Computing: Reducing the Digital Carbon Footprint",
        excerpt: "Learn how data centers and cloud providers are going green through energy-efficient solutions.",
        content: `
          <h2>Sustainable Infrastructure</h2>
          <p>Companies are investing in renewable energy and cooling systems to reduce the environmental impact of data centers.</p>
          
          <h2>Cloud Optimization</h2>
          <p>Serverless architectures and intelligent load balancing contribute to energy savings at scale.</p>
        `,
        category: "Cloud",
        tags: ["green-tech", "cloud", "sustainability"],
        date: "Nov 5, 2024",
        readTime: "5 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
    {
        slug: "ethics-in-tech-design",
        title: "Ethics in Tech Design: Building with Purpose",
        excerpt: "Explore how ethical design principles can create more inclusive and responsible technologies.",
        content: `
          <h2>User-Centered Ethics</h2>
          <p>Incorporating fairness, accessibility, and privacy from the design phase is key to ethical innovation.</p>
          
          <h2>Frameworks and Guidelines</h2>
          <p>Initiatives like design justice and human-centered AI are guiding responsible tech development.</p>
        `,
        category: "Design",
        tags: ["ethics", "ux", "human-centered"],
        date: "Nov 2, 2024",
        readTime: "6 min read",
        image: "/futureofai.jpg?height=400&width=600",

    },
];



export async function getAllPosts() {
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostBySlug(slug) {
    return posts.find((post) => post.slug === slug) || null
}

export async function getPostsByCategory(category) {
    return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}
