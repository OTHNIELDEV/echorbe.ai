export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    category: string;
    content: string; // Made required for detail view
}

export const newsData: NewsItem[] = [
    {
        id: '1',
        title: 'Echorbe Holdings Announces Strategic Roadmap for 2026',
        summary: 'Unveiling the "Phygital" future: Integrating AI with robotics and physical reality.',
        date: '2026.01.25',
        category: 'Corporate',
        content: `
            <p>Echorbe Holdings today unveiled its strategic roadmap for the year 2026, marking a pivotal shift towards what it terms the "Phygital" future.</p>
            <p>The company plans to integrate its proprietary AI models directly into physical robotics systems, bridging the gap between digital intelligence and physical action. This move is expected to revolutionize industries ranging from manufacturing to education.</p>
            <p>"Our goal is not just to create smarter AI, but to create AI that can interact with the world in meaningful, tangible ways," stated Peter Lee, CEO of Echorbe Holdings.</p>
            <h3>Key Initiatives:</h3>
            <ul>
                <li>Launch of the "Sensor Labs" division focused on haptic feedback.</li>
                <li>Expansion of the "Pictomusic" engine for real-time generative media.</li>
                <li>Strategic partnerships with leading robotics manufacturers.</li>
            </ul>
        `
    },
    {
        id: '2',
        title: 'New "Pictomusic" AI Engine Demo Released',
        summary: 'Experience the next generation of generative art and music synchronization.',
        date: '2026.01.20',
        category: 'Technology',
        content: `
            <p>Echorbe's creative technology arm has released a public demo of its "Pictomusic" AI engine.</p>
            <p>This groundbreaking technology allows users to generate complex musical compositions based on visual inputs, and vice versa. By understanding the emotional and structural components of both media types, Pictomusic creates a seamless synesthetic experience.</p>
            <p>The demo is now available on the Echorbe website and showcases real-time synchronization capabilities that were previously thought impossible on consumer hardware.</p>
        `
    },
    {
        id: '3',
        title: 'Partnership with Global Robotics Leader',
        summary: 'Accelerating the development of embodied AI through strategic collaboration.',
        date: '2026.01.15',
        category: 'Partnership',
        content: `
            <p>Echorbe Holdings has entered into a strategic partnership with a global leader in industrial robotics.</p>
            <p>This collaboration aims to embed Echorbe's "Physical Ontological Conscious AI" directly into robotic control systems, enabling machines to understand and adapt to their environments with unprecedented autonomy.</p>
            <p>Joint research centers will be established in Seoul and Silicon Valley, with the first commercial products expected to launch in Q4 2026.</p>
        `
    },
    {
        id: '4',
        title: 'Echorbe Appoints Peter Lee as CEO',
        summary: 'Leading the charge towards a conscious AI ecosystem.',
        date: '2026.01.10',
        category: 'Leadership',
        content: `
            <p>The Board of Directors is pleased to announce the appointment of Peter Lee as the new Chief Executive Officer of Echorbe Holdings.</p>
            <p>Peter brings over two decades of experience in artificial intelligence and strategic management. His vision for "Conscious AI" aligns perfectly with Echorbe's long-term mission.</p>
            <p>"I am honored to lead Echorbe at this exciting time," said Lee. "Together, we will define the future of human-AI coexistence."</p>
        `
    },
    {
        id: '5',
        title: 'The Philosophy of "Physical Ontological Conscious AI"',
        summary: 'A deep dive into our core research philosophy and future vision.',
        date: '2026.01.05',
        category: 'Research',
        content: `
            <p>What does it mean for AI to have a physical ontology?</p>
            <p>In our latest whitepaper, Echorbe's research team explores the necessity of physical embodiment for true artificial consciousness. We argue that intelligence cannot exist in a vacuum; it requires interaction with the physical world to develop a genuine understanding of causality and self.</p>
            <p>This philosophy underpins all of Echorbe's product development, from our sensor networks to our generative models.</p>
        `
    }
];
