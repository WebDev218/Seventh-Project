function constructElement(type, content='', className='', attribute='', attributeValue='', append='') {
	let newElement = document.createElement(type.toUpperCase());

	if (content) {
		newElement.innerHTML = content;
	}

	if (className.length > 0 && Array.isArray(className)) {		
		newElement.classList.add(...className);
	}

	if (attribute) {
		newElement.setAttribute(attribute, attributeValue);
	}

	if (append) {
		for (i=0;i<append.length;i++) {
			newElement.appendChild(append[i]);
		}
	}
	
	return newElement;
}