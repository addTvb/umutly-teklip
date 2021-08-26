let select = document.querySelector('#lang-select');

const openSelect = () => {
	console.log(select)
	if (select.className.includes('opened-select')) {
		select.className = 'closed-select ';
	} else {
		select.className = 'opened-select'
	}
}
