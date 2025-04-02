/*
 * Thanks to:
 * - https://github.com/daviddarnes/heading-anchors
 * - https://github.com/zachleat/heading-anchors
 * - https://amberwilson.co.uk/blog/are-your-anchor-links-accessible
 */

let globalInstanceIndex = 0;

class HeadingAnchors extends HTMLElement {
	static register(tagName) {
		if ('customElements' in window) {
			customElements.define(tagName || 'heading-anchors', HeadingAnchors);
		}
	}

	static attributes = {
		exclude: 'data-ha-exclude',
		prefix: 'prefix',
		content: 'content',
	};

	static classes = {
		anchor: 'ha',
		placeholder: 'ha-placeholder',
		visuallyHidden: 'ha-visualhide',
	};

	static defaultSelector = 'h2,h3,h4,h5,h6';

	static css = `
		.${HeadingAnchors.classes.visuallyHidden} {
			clip-path: inset(50%);
			clip: rect(0 0 0 0);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
		.${HeadingAnchors.classes.anchor} {
			text-decoration: none;
			opacity: 0;
			position: absolute;

			@supports not (anchor-name: none) {
				left: var(--ha-offset-x);
				top: var(--ha-offset-y);
			}
			@supports (anchor-name: none) {
				left: anchor(left);
				top: anchor(top);
			}
		}
		.${HeadingAnchors.classes.placeholder} {
			opacity: 30%;
		}
		.${HeadingAnchors.classes.anchor}:is(:focus-within, :hover) {
			opacity: 1;
		}
		.${HeadingAnchors.classes.anchor}, .${HeadingAnchors.classes.placeholder} {
			display: inline-block;
			padding-block: 0;
			padding-inline: 0.25em;

			/* Disable selection of visually hidden label */
			-webkit-user-select: none;
			user-select: none;
		}
	`;

	get supports() {
		return 'replaceSync' in CSSStyleSheet.prototype;
	}

	get supportsAnchorPosition() {
		return CSS.supports('anchor-name: none');
	}

	constructor() {
		super();

		if (!this.supports) return;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync(HeadingAnchors.css);
		document.adoptedStyleSheets.push(sheet);

		this.headingStyles = {};
		this.instanceIndex = globalInstanceIndex++;
	}

	connectedCallback() {
		if (!this.supports) return;

		this.headings.forEach((heading, index) => {
			if (!heading.hasAttribute(HeadingAnchors.attributes.exclude)) {
				const anchor = this.getAnchorElement(heading);
				const placeholder = this.getPlaceholderElement();

				// Prefers anchor position approach for better accessibility
				// https://amberwilson.co.uk/blog/are-your-anchor-links-accessible
				if (this.supportsAnchorPosition) {
					const anchorName = `--ha_${this.instanceIndex}_${index}`;
					placeholder.style.setProperty('anchor-name', anchorName);
					anchor.style.positionAnchor = anchorName;
				}

				heading.appendChild(placeholder);
				heading.after(anchor);
			}
		});
	}

	// Polyfill-only
	positionAnchorFromPlaceholder(placeholder) {
		if (!placeholder) return;

		const heading = placeholder.closest('h1,h2,h3,h4,h5,h6');
		if (!heading.nextElementSibling) return;

		// TODO next element could be more defensive
		this.positionAnchor(heading.nextElementSibling);
	}

	// Polyfill-only
	positionAnchor(anchor) {
		if (!anchor || !anchor.previousElementSibling) return;

		// TODO previous element could be more defensive
		const heading = anchor.previousElementSibling;
		this.setFontProp(heading, anchor);

		if (this.supportsAnchorPosition) return; // quit early

		const placeholder = heading.querySelector(
			`.${HeadingAnchors.classes.placeholder}`
		);
		if (placeholder) {
			anchor.style.setProperty('--ha-offset-x', `${placeholder.offsetLeft}px`);
			anchor.style.setProperty('--ha-offset-y', `${placeholder.offsetTop}px`);
		}
	}

	setFontProp(heading, anchor) {
		const placeholder = heading.querySelector(
			`.${HeadingAnchors.classes.placeholder}`
		);
		if (placeholder) {
			const style = getComputedStyle(placeholder);
			const props = [
				'font-family',
				'font-feature-settings',
				'font-kerning',
				'font-optical-sizing',
				'font-size-adjust',
				'font-size',
				'font-stretch', // Deprecated. Appears before font-width to behave as fallback
				'font-style',
				'font-variant-alternates',
				'font-variant-caps',
				'font-variant-east-asian',
				'font-variant-emoji',
				'font-variant-ligatures',
				'font-variant-numeric',
				'font-variant-position',
				'font-variation-settings',
				'font-weight',
				'font-width',
				'letter-spacing',
				'line-height',
				'word-spacing',
			];
			for (const prop of props) {
				anchor.style.setProperty(prop, style.getPropertyValue(prop));
			}
		}
	}

	/** Useful for i18n */
	getAccessibleTextPrefix() {
		return (
			this.getAttribute(HeadingAnchors.attributes.prefix) ||
			'Permalink to section titled'
		);
	}

	getContent() {
		return this.hasAttribute(HeadingAnchors.attributes.content)
			? this.getAttribute(HeadingAnchors.attributes.content)
			: '#';
	}

	// Placeholder nests inside of heading
	getPlaceholderElement() {
		const ph = document.createElement('span');
		ph.setAttribute('aria-hidden', true);
		ph.classList.add(HeadingAnchors.classes.placeholder);
		const content = this.getContent();
		if (content) {
			ph.textContent = content;
		}

		ph.addEventListener('mouseover', (e) => {
			const placeholder = e.target.closest(
				`.${HeadingAnchors.classes.placeholder}`
			);
			if (placeholder) {
				this.positionAnchorFromPlaceholder(placeholder);
			}
		});

		return ph;
	}

	getAnchorElement(heading) {
		const anchor = document.createElement('a');
		anchor.href = `#${heading.id}`;
		anchor.classList.add(HeadingAnchors.classes.anchor);

		const content = this.getContent();
		anchor.innerHTML = `<span class="${
			HeadingAnchors.classes.visuallyHidden
		}">${this.getAccessibleTextPrefix()}: ${heading.textContent}</span>${
			content ? `<span aria-hidden="true">${content}</span>` : ''
		}`;

		anchor.addEventListener('focus', (e) => {
			const anchor = e.target.closest(`.${HeadingAnchors.classes.anchor}`);
			if (anchor) this.positionAnchor(anchor);
		});

		anchor.addEventListener('mouseover', (e) => {
			// when CSS anchor positioning is supported, this is only used to set the font
			const anchor = e.target.closest(`.${HeadingAnchors.classes.anchor}`);
			this.positionAnchor(anchor);
		});

		return anchor;
	}

	get headings() {
		return this.querySelectorAll(
			this.selector.split(',').map((entry) => `${entry.trim()}[id]`)
		);
	}

	get selector() {
		return this.getAttribute('selector') || HeadingAnchors.defaultSelector;
	}
}

HeadingAnchors.register();

export { HeadingAnchors };
