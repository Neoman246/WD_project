
const ceoData = {
    'elon-musk': {
        name: 'Elon Musk',
        image: './images 3/elon-musk.2.jpg',
        role: 'CEO of Tesla, SpaceX, and X',
        background: 'Born in 1971 in Pretoria, South Africa, Elon Musk is known for his entrepreneurial ventures in technology and space exploration. He co-founded PayPal and has since led multiple innovative companies.',
        achievements: [
            { year: '2002', description: 'Founded SpaceX with the goal of reducing space transportation costs' },
            { year: '2004', description: 'Joined Tesla Motors as chairman of the board of directors' },
            { year: '2008', description: 'Tesla launches its first car, the Roadster' },
            { year: '2012', description: 'SpaceX becomes first private company to send spacecraft to the ISS' },
            { year: '2022', description: 'Acquired Twitter (now X) for $44 billion' }
        ],
        companies: [
            'Tesla - Electric vehicles and clean energy',
            'SpaceX - Space exploration and transportation',
            'X (formerly Twitter) - Social media platform',
            'Neuralink - Brain-computer interfaces',
            'The Boring Company - Infrastructure and tunnel construction'
        ]
    },
    'mark-zuckerberg': {
        name: 'Mark Zuckerberg',
        image: './images 3/mrak.2.jpg',
        role: 'CEO of Meta (formerly Facebook)',
        background: 'Born in 1984 in White Plains, New York, Mark Zuckerberg founded Facebook while studying at Harvard University. He has since transformed the company into Meta, focusing on social technology and the metaverse.',
        achievements: [
            { year: '2004', description: 'Founded Facebook at Harvard University' },
            { year: '2012', description: 'Acquired Instagram for $1 billion' },
            { year: '2014', description: 'Acquired WhatsApp for $19 billion' },
            { year: '2021', description: 'Rebranded Facebook company to Meta' },
            { year: '2023', description: 'Launched Threads as a competitor to X' }
        ],
        companies: [
            'Meta - Parent company',
            'Facebook - Social networking',
            'Instagram - Photo and video sharing',
            'WhatsApp - Messaging platform',
            'Oculus - Virtual reality technology'
        ]
    },
    'sundar-pichai': {
        name: 'Sundar Pichai',
        image: './images 3/Sundar_Pichai.2.jpg',
        role: 'CEO of Google and Alphabet',
        background: 'Born in 1972 in Tamil Nadu, India, Sundar Pichai joined Google in 2004 and became CEO in 2015. He later became CEO of Alphabet, Google\'s parent company, in 2019.',
        achievements: [
            { year: '2004', description: 'Joined Google, led development of Google Chrome' },
            { year: '2015', description: 'Became CEO of Google' },
            { year: '2019', description: 'Appointed CEO of Alphabet' },
            { year: '2021', description: 'Led Google\'s AI transformation with projects like LaMDA' },
            { year: '2023', description: 'Launched Bard AI and expanded Google\'s AI capabilities' }
        ],
        companies: [
            'Alphabet - Parent company',
            'Google - Search and advertising',
            'Google Cloud - Cloud computing services',
            'YouTube - Video platform',
            'Android - Mobile operating system'
        ]
    },
    'satya-nadella': {
        name: 'Satya Nadella',
        image: './images 3/satya.2.jpeg',
        role: 'CEO of Microsoft',
        background: 'Born in 1967 in Hyderabad, India, Satya Nadella became CEO of Microsoft in 2014. Under his leadership, Microsoft has transformed into a cloud computing leader and embraced open source technology.',
        achievements: [
            { year: '2014', description: 'Appointed CEO of Microsoft' },
            { year: '2016', description: 'Led acquisition of LinkedIn for $26.2 billion' },
            { year: '2018', description: 'Acquired GitHub for $7.5 billion' },
            { year: '2022', description: 'Announced acquisition of Activision Blizzard' },
            { year: '2023', description: 'Expanded Microsoft\'s AI capabilities with OpenAI partnership' }
        ],
        companies: [
            'Microsoft - Software and cloud computing',
            'LinkedIn - Professional networking',
            'GitHub - Software development platform',
            'Xbox - Gaming division',
            'Azure - Cloud services'
        ]
    },
    'tim-cook': {
        name: 'Tim Cook',
        image: './images 3/tim.2.jpeg',
        role: 'CEO of Apple',
        background: 'Born in 1960 in Mobile, Alabama, Tim Cook became CEO of Apple in 2011 after Steve Jobs. He has led Apple to become one of the world\'s most valuable companies.',
        achievements: [
            { year: '2011', description: 'Became CEO of Apple' },
            { year: '2014', description: 'Introduced Apple Watch' },
            { year: '2016', description: 'Launched AirPods' },
            { year: '2019', description: 'Launched Apple TV+ streaming service' },
            { year: '2023', description: 'Introduced Apple Vision Pro' }
        ],
        companies: [
            'Apple - Consumer electronics',
            'Apple Services - Digital services',
            'Apple Retail - Retail stores',
            'Beats Electronics - Audio products',
            'Apple TV+ - Streaming service'
        ]
    },
    'jensen-huang': {
        name: 'Jensen Huang',
        image: './images 3/jenseng.2.jpeg',
        role: 'CEO of NVIDIA',
        background: 'Born in 1963 in Taiwan, Jensen Huang co-founded NVIDIA in 1993. Under his leadership, NVIDIA has become a leader in graphics processing units (GPUs) and AI computing.',
        achievements: [
            { year: '1993', description: 'Co-founded NVIDIA' },
            { year: '1999', description: 'Invented the GPU' },
            { year: '2016', description: 'Launched Tesla GPU for AI computing' },
            { year: '2020', description: 'Acquired Arm for $40 billion (later cancelled)' },
            { year: '2023', description: 'Led NVIDIA to trillion-dollar valuation' }
        ],
        companies: [
            'NVIDIA - GPU technology',
            'GeForce - Gaming GPUs',
            'CUDA - Parallel computing platform',
            'NVIDIA AI - AI computing',
            'Omniverse - 3D design collaboration'
        ]
    },
    'andy-jassy': {
        name: 'Andy Jassy',
        image: './images 3/andy.2.jpg',
        role: 'CEO of Amazon',
        background: 'Born in 1968 in New York, Andy Jassy became CEO of Amazon in 2021, succeeding Jeff Bezos. He previously founded and led Amazon Web Services (AWS).',
        achievements: [
            { year: '2003', description: 'Founded Amazon Web Services' },
            { year: '2016', description: 'Made AWS a $10 billion business' },
            { year: '2021', description: 'Became CEO of Amazon' },
            { year: '2022', description: 'Led Amazon through post-pandemic transformation' },
            { year: '2023', description: 'Expanded Amazon\'s AI initiatives' }
        ],
        companies: [
            'Amazon - E-commerce and technology',
            'AWS - Cloud computing',
            'Prime - Subscription service',
            'Alexa - AI assistant',
            'Ring - Smart home security'
        ]
    },
    'lisa-su': {
        name: 'Lisa Su',
        image: './images 3/lisa.2.jpg',
        role: 'CEO of AMD',
        background: 'Born in 1969 in Taiwan, Lisa Su became CEO of AMD in 2014. She has led AMD\'s remarkable turnaround and growth in the semiconductor industry.',
        achievements: [
            { year: '2014', description: 'Became CEO of AMD' },
            { year: '2017', description: 'Launched Ryzen processors' },
            { year: '2019', description: 'Introduced 7nm processors' },
            { year: '2020', description: 'Acquired Xilinx for $35 billion' },
            { year: '2023', description: 'Expanded AI computing capabilities' }
        ],
        companies: [
            'AMD - Semiconductors',
            'Ryzen - Consumer processors',
            'EPYC - Server processors',
            'Radeon - Graphics',
            'Xilinx - Adaptive computing'
        ]
    },
    'pat-gelsinger': {
        name: 'Pat Gelsinger',
        image: './images 3/pat_gelsinger.2.jpg',
        role: 'CEO of Intel',
        background: 'Born in 1961 in Pennsylvania, Pat Gelsinger returned to Intel as CEO in 2021. As a veteran of the semiconductor industry, he aims to restore Intel\'s leadership in chip manufacturing.',
        achievements: [
            { year: '2021', description: 'Became CEO of Intel' },
            { year: '2021', description: 'Launched IDM 2.0 strategy' },
            { year: '2022', description: 'Announced major fab investments' },
            { year: '2023', description: 'Advanced Intel\'s AI strategy' },
            { year: '2023', description: 'Expanded foundry services' }
        ],
        companies: [
            'Intel - Semiconductors',
            'Intel Foundry Services - Chip manufacturing',
            'Mobileye - Autonomous driving',
            'Intel Arc - Graphics',
            'Intel AI - AI computing'
        ]
    },
    'shantanu-narayen': {
        name: 'Shantanu Narayen',
        image: './images 3/shantanu.2.jpg',
        role: 'CEO of Adobe',
        background: 'Born in 1963 in Hyderabad, India, Shantanu Narayen became CEO of Adobe in 2007. He has transformed Adobe from a desktop software company to a cloud-based creative and marketing software leader.',
        achievements: [
            { year: '2007', description: 'Became CEO of Adobe' },
            { year: '2013', description: 'Launched Creative Cloud' },
            { year: '2018', description: 'Acquired Magento for $1.68 billion' },
            { year: '2020', description: 'Acquired Workfront for $1.5 billion' },
            { year: '2023', description: 'Expanded AI capabilities with Firefly' }
        ],
        companies: [
            'Adobe - Creative software',
            'Creative Cloud - Design tools',
            'Document Cloud - PDF services',
            'Experience Cloud - Marketing tools',
            'Behance - Creative community'
        ]
    }
};




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.ceo-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});


const modal = document.getElementById('ceoModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBackground = document.getElementById('modalBackground');
const modalAchievements = document.getElementById('modalAchievements');
const modalCompanies = document.getElementById('modalCompanies');

function openModal(ceoId) {
    const ceo = ceoData[ceoId];
    if (!ceo) return;

    modalImage.src = ceo.image;
    modalImage.alt = ceo.name;
    modalName.textContent = ceo.name;
    modalRole.textContent = ceo.role;
    modalBackground.textContent = ceo.background;


    modalAchievements.innerHTML = ceo.achievements.map(achievement => `
        <div class="achievement">
            <span class="achievement-year">${achievement.year}</span>
            <span class="achievement-description">${achievement.description}</span>
        </div>
    `).join('');


    modalCompanies.innerHTML = ceo.companies.map(company => `
        <li>${company}</li>
    `).join('');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


document.querySelectorAll('.ceo-card').forEach(card => {
    card.addEventListener('click', () => {
        const ceoId = card.getAttribute('data-ceo');
        openModal(ceoId);
    });
});


document.querySelector('.close-modal').addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});