
var mapOverStylesAndTransformBackgroundImageDeclarations = require('./map-over-styles-and-transform-background-image-declarations');


// Pass in a styles object from `css.parse`
// See main module for `includeMode` values
function getBackgroundImageDeclarations(styles, includeMode, filter) {
	includeMode = includeMode || 'implicit';
	
	// First get all of the background image declarations
	var backgroundImageDeclarations = [];
	mapOverStylesAndTransformBackgroundImageDeclarations(styles, includeMode,filter, function(declaration) {
		backgroundImageDeclarations.push(declaration);
	});

	return backgroundImageDeclarations;
}





module.exports = getBackgroundImageDeclarations;