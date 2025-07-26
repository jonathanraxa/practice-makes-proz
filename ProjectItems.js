const projects = [
    {
        id: "p1",
        title: "JavaScript Drum Kit",
        description: "A drum kit built with JavaScript",
        link: "./01_JavaScriptDrumKit/index-START.html"
    },
    {
        id: "p2",
        title: "JavaScript and CSS Clock",
        description: "An interactive clock built with JavaScript and CSS",
        link: "./02_JSandCSSClock/index-START.html"
    },
    {
        id: "p3",
        title: "CSS Variables",
        description: "Dynamic CSS variables with JavaScript controls",
        link: "./03 - CSS Variables/index-START.html"
    },
    {
        id: "p4",
        title: "Array Cardio Day 1",
        description: "JavaScript array methods and data manipulation",
        link: "./04 - Array Cardio Day 1/index-START.html"
    },
    {
        id: "p5",
        title: "Flex Panel Gallery",
        description: "Animated gallery using CSS flexbox",
        link: "./05 - Flex Panel Gallery/index-START.html"
    },
    {
        id: "p6",
        title: "Type Ahead",
        description: "Real-time search with type-ahead functionality",
        link: "./06 - Type Ahead/index-START.html"
    },
    {
        id: "p7",
        title: "Array Cardio Day 2",
        description: "More advanced array methods and data processing",
        link: "./07 - Array Cardio Day 2/index-START.html"
    },
    {
        id: "p8",
        title: "Fun with HTML5 Canvas",
        description: "Interactive drawing with HTML5 Canvas",
        link: "./08 - Fun with HTML5 Canvas/index-START.html"
    },
    {
        id: "p9",
        title: "Dev Tools Domination",
        description: "Mastering browser developer tools",
        link: "./09 - Dev Tools Domination/index-START.html"
    },
    {
        id: "p10",
        title: "Hold Shift and Check Checkboxes",
        description: "Multi-select functionality with shift key",
        link: "./10 - Hold Shift and Check Checkboxes/index-START.html"
    },
    {
        id: "p11",
        title: "Custom Video Player",
        description: "Custom video player with JavaScript controls",
        link: "./11 - Custom Video Player/index-START.html"
    },
    {
        id: "p12",
        title: "Key Sequence Detection",
        description: "Konami code detection and secret features",
        link: "./12 - Key Sequence Detection/index-START.html"
    },
    {
        id: "p13",
        title: "Slide in on Scroll",
        description: "Smooth scroll animations and effects",
        link: "./13 - Slide in on Scroll/index-START.html"
    },
    {
        id: "p14",
        title: "JavaScript References VS Copying",
        description: "Understanding JavaScript data types and references",
        link: "./14 - JavaScript References VS Copying/index-START.html"
    },
    {
        id: "p15",
        title: "LocalStorage",
        description: "Persistent data storage with localStorage",
        link: "./15 - LocalStorage/index-START.html"
    },
    {
        id: "p16",
        title: "Mouse Move Shadow",
        description: "Dynamic shadows following mouse movement",
        link: "./16 - Mouse Move Shadow/index-START.html"
    },
    {
        id: "p17",
        title: "Sort Without Articles",
        description: "Smart sorting excluding articles (a, an, the)",
        link: "./17 - Sort Without Articles/index-START.html"
    },
    {
        id: "p18",
        title: "Adding Up Times with Reduce",
        description: "Time calculations using reduce method",
        link: "./18 - Adding Up Times with Reduce/index-START.html"
    },
    {
        id: "p19",
        title: "Webcam Fun",
        description: "Webcam integration and image manipulation",
        link: "./19 - Webcam Fun/index-START.html"
    },
    {
        id: "p20",
        title: "Speech Detection",
        description: "Voice recognition and speech-to-text",
        link: "./20 - Speech Detection/index-START.html"
    },
    {
        id: "p21",
        title: "Geolocation",
        description: "Location-based features and mapping",
        link: "./21 - Geolocation/index-START.html"
    },
    {
        id: "p22",
        title: "Follow Along Link Highlighter",
        description: "Dynamic link highlighting on hover",
        link: "./22 - Follow Along Link Highlighter/index-START.html"
    },
    {
        id: "p23",
        title: "Speech Synthesis",
        description: "Text-to-speech functionality",
        link: "./23 - Speech Synthesis/index-START.html"
    },
    {
        id: "p24",
        title: "Sticky Nav",
        description: "Navigation that sticks to the top on scroll",
        link: "./24 - Sticky Nav/index-START.html"
    },
    {
        id: "p25",
        title: "Event Capture, Propagation, Bubbling and Once",
        description: "Understanding JavaScript event handling",
        link: "./25 - Event Capture, Propagation, Bubbling and Once/index-START.html"
    },
    {
        id: "p26",
        title: "Stripe Follow Along Nav",
        description: "Animated navigation with follow-along effects",
        link: "./26 - Stripe Follow Along Nav/index-START.html"
    },
    {
        id: "p27",
        title: "Click and Drag",
        description: "Drag and drop functionality",
        link: "./27 - Click and Drag/index-START.html"
    },
    {
        id: "p28",
        title: "Video Speed Controller",
        description: "Custom video speed controls",
        link: "./28 - Video Speed Controller/index-START.html"
    },
    {
        id: "p29",
        title: "Countdown Timer",
        description: "Interactive countdown timer with custom duration",
        link: "./29 - Countdown Timer/index-START.html"
    },
    {
        id: "p30",
        title: "Whack A Mole",
        description: "Classic whack-a-mole game",
        link: "./30 - Whack A Mole/index-START.html"
    }
];

// what is template?
// template is a class that represents a template element
// it is used to define a template for an HTML element
const template = document.createElement("template");
// what are slots?
// slots are placeholders for content that can be filled by the user
// they are used to define a template for an HTML element
template.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            padding: 2rem;
            max-width: 1400px;
            margin: 0 auto;
            list-style: none;
        }

        li {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        li::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }

        li:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        li:hover::before {
            opacity: 0.1;
        }

        a {
            display: block;
            padding: 2rem;
            text-decoration: none;
            color: white;
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            line-height: 1.3;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        p {
            font-size: 0.95rem;
            line-height: 1.5;
            opacity: 0.9;
            margin-top: auto;
        }

        /* Project number indicator */
        li::after {
            content: attr(data-project-number);
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            z-index: 3;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            ul {
                grid-template-columns: 1fr;
                padding: 1rem;
                gap: 1rem;
            }

            li {
                border-radius: 12px;
            }

            a {
                padding: 1.5rem;
            }

            h2 {
                font-size: 1.25rem;
            }

            p {
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            ul {
                padding: 0.5rem;
            }

            a {
                padding: 1.25rem;
            }

            h2 {
                font-size: 1.1rem;
            }
        }

        /* Loading animation */
        li {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        li:nth-child(1) { animation-delay: 0.1s; }
        li:nth-child(2) { animation-delay: 0.2s; }
        li:nth-child(3) { animation-delay: 0.3s; }
        li:nth-child(4) { animation-delay: 0.4s; }
        li:nth-child(5) { animation-delay: 0.5s; }
        li:nth-child(6) { animation-delay: 0.6s; }
        li:nth-child(7) { animation-delay: 0.7s; }
        li:nth-child(8) { animation-delay: 0.8s; }
        li:nth-child(9) { animation-delay: 0.9s; }
        li:nth-child(10) { animation-delay: 1.0s; }
        li:nth-child(11) { animation-delay: 1.1s; }
        li:nth-child(12) { animation-delay: 1.2s; }
        li:nth-child(13) { animation-delay: 1.3s; }
        li:nth-child(14) { animation-delay: 1.4s; }
        li:nth-child(15) { animation-delay: 1.5s; }
        li:nth-child(16) { animation-delay: 1.6s; }
        li:nth-child(17) { animation-delay: 1.7s; }
        li:nth-child(18) { animation-delay: 1.8s; }
        li:nth-child(19) { animation-delay: 1.9s; }
        li:nth-child(20) { animation-delay: 2.0s; }
        li:nth-child(21) { animation-delay: 2.1s; }
        li:nth-child(22) { animation-delay: 2.2s; }
        li:nth-child(23) { animation-delay: 2.3s; }
        li:nth-child(24) { animation-delay: 2.4s; }
        li:nth-child(25) { animation-delay: 2.5s; }
        li:nth-child(26) { animation-delay: 2.6s; }
        li:nth-child(27) { animation-delay: 2.7s; }
        li:nth-child(28) { animation-delay: 2.8s; }
        li:nth-child(29) { animation-delay: 2.9s; }
        li:nth-child(30) { animation-delay: 3.0s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
    <ul>
        ${projects.map((project, index) => `
            <li data-project-number="${String(index + 1).padStart(2, '0')}">
                <a href="${project.link}" target="_blank">
                    <h2 slot="title">${project.title}</h2>
                    <p slot="description">${project.description}</p>
                </a>
            </li>
        `).join("")}
    </ul>
`;

// what is HTMLElement?
// HTMLElement is a class that represents an HTML element
class ProjectItems extends HTMLElement {
    constructor() {
        super();
        // what is attachShadow?
        // attachShadow is a method that attaches a shadow DOM to the element
        // mode: "open" means that the shadow DOM is open to the public
        const shadow = this.attachShadow({ mode: "open" });

        // what is this.innerHTML?
        // this.innerHTML is the HTML content of the element
        shadow.append(template.content.cloneNode(true));
        // this.title = this.shadowRoot.querySelector("[data-title]");

        // this.title.textContent = this.innerText;
        // this.title.addEventListener("click", () => {
        //     this.title.textContent = "Clicked";
        // });
    }

}

// what is customElements?
// customElements is a global object that allows you to define custom elements
// it is a part of the Web Components API
customElements.define("project-items", ProjectItems);