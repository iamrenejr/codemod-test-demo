const transformer = (file, api) => {
	const j = api.jscodeshift;
	return j(file.source)
		.find(j.Identifier, {
			name: 'OldComp',
		})
		.forEach((p) => {
			p.value.name = 'NewComp';
		})
		.toSource();
};

// Jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser
module.exports = transformer;
module.exports.parser = 'tsx';
