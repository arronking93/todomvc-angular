# TodomvcNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

## TodoMVC-NG

[TodoMVC](http://todomvc.com/)
=> 下载模版和样式，然后自己实现功能(NG)

1. 初始化项目并启用

2. 将 `todomvc-angular\src\app\app.component.html` 文件内容替换

3. 安装模板依赖的样式文件：

```shell
npm install todomvc-app-css
```

在 `todomvc-angular\src\styles.css` 文件中导入样式文件：

```css
/* You can add global styles to this file, and also import other style files */
@import url('../node_modules/todomvc-app-css/index.css');
```

* 同样有todomvc-common模块的样式文件，但作用不显
```css
@import url('../node_modules/todomvc-common/base.css');
```

### 功能实现
* cancelSave(取消时)会触发blurSave(失去焦点)，blurSave会保存编辑后的数据，应该对取消做进一步处理，这时人为设置编辑后数据为原数据(事件顺序为先取消，后失去焦点)
