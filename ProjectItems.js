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
        description: "",
        link: "./02_JSandCSSClock/index-START.html"
    },


];

// what is template?
// template is a class that represents a template element
// it is used to define a template for an HTML element
const template = document.createElement("template");
// what are slots?
// slots are placeholders for content that can be filled by the user
// they are used to define a template for an HTML element
template.innerHTML = `
    <ul>
        ${projects.map(project => `
                <h2 slot="title">${project.title}</h2>
                <p slot="description">${project.description}</p>
                <a href="${project.link}" target="_blank">View</a>
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