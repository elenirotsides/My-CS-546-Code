function tags() {
	string = 'hello,this,is,a,tag,array';
	let tagsArr = [];
	let tag = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i] === ',') {
			tagsArr.push(tag);
			tag = '';
		} else {
			tag += string[i];
		}
	}
	tagsArr.push(tag);
	console.log(tagsArr);
}

function improvedTags() {
	string = '    hello,this,is,a,tag,array';
	tagsArr = string.trim().split(',');
	console.log(tagsArr);
}
improvedTags();
