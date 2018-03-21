# gulp-css-spriter-filter

修改自 gulp-css-spriter，增加筛选项，使得可以筛选出需要合并的图片。

# 安装

```
npm install gulp-css-spriter-filter
```

# 使用

可使用 [gulp-css-spriter](https://github.com/MadLittleMods/gulp-css-spriter) 的所有方法和属性

```js
var gulp = require('gulp');
var spriter = require('gulp-css-spriter-filter');

gulp.task('css', function() {
	return gulp.src('./src/css/styles.css')
		.pipe(spriter({
			'spriteSheet': './dist/images/spritesheet.png',
			'pathToSpriteSheetFromCSS': '../images/spritesheet.png',
			'filter':{
			    parttner: '\\?__spriter',  // 筛选出 url 中带有 ?__spliter 的图片合成一张雪碧图
			    attributes: 'i' // 非必须，(i,g,m)
			}
		}))
		.pipe(gulp.dest('./dist/css'));
});
```


