export default function createFragmentFromTemplate(selector) {
	//if (selector === undefined || selector === null) return console.warn("The selector required to locate the template is undefined or null.");

	const template = document.querySelector(selector);

	//if (!template) return console.warn("The template does not exist.");

	const content = template.content.cloneNode(true);
	const fragment = document.createDocumentFragment();

	fragment.appendChild(content);

	return fragment;
}
