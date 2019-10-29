/*var iconSize = '20px',
	colors = ['red', 'blue', 'green', 'yellow'],
	colorMap = {
		title: 'red',
		content: 'blue',
		explain: 'grey',
	};
exports.iconSize = iconSize;
exports.iconColor = 'red';
exports.iconsWidth = 4 * 5;
exports.colors = colors;
exports.colorMap = colorMap;*/

const size = 10;
const sizes = [10, 20,30];
const sizeMap = {
  btns: [10],
}
const bodySize = size;
const dialogSize = sizes[2];
const btnSize = sizeMap.btns[0]
const bondNode = {
  size: sizes[0], color: 'red',
}
const stackNode = {
  size, color: 'blue'
}
export {bondNode, stackNode};
