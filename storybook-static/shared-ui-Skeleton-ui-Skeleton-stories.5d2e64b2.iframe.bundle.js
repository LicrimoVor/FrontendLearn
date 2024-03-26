"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[2845],{"./src/shared/ui/Skeleton/ui/Skeleton.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircleDart:function(){return CircleDart},CircleLight:function(){return CircleLight},CircleRed:function(){return CircleRed},DefaultDark:function(){return DefaultDark},DefaultLight:function(){return DefaultLight},DefaultRed:function(){return DefaultRed},__namedExportsOrder:function(){return __namedExportsOrder}});var _shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/lib/context/ThemeContext/index.ts"),_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/themeDecorator/index.ts");const meta={title:"shared/Skeleton",component:__webpack_require__("./src/shared/ui/Skeleton/ui/Skeleton.tsx").O,decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Q.LIGHT)],args:{width:"100%",height:200}};__webpack_exports__.default=meta;const DefaultLight={},DefaultDark={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Q.DARK)]},DefaultRed={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Q.RED)]},CircleLight={args:{border:"50%",width:100,height:100}},CircleDart={args:{border:"50%",width:100,height:100},decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Q.DARK)]},CircleRed={args:{border:"50%",width:100,height:100},decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Q.RED)]};DefaultLight.parameters={...DefaultLight.parameters,docs:{...DefaultLight.parameters?.docs,source:{originalSource:"{}",...DefaultLight.parameters?.docs?.source}}},DefaultDark.parameters={...DefaultDark.parameters,docs:{...DefaultDark.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.DARK)]\n}",...DefaultDark.parameters?.docs?.source}}},DefaultRed.parameters={...DefaultRed.parameters,docs:{...DefaultRed.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.RED)]\n}",...DefaultRed.parameters?.docs?.source}}},CircleLight.parameters={...CircleLight.parameters,docs:{...CircleLight.parameters?.docs,source:{originalSource:"{\n  args: {\n    border: '50%',\n    width: 100,\n    height: 100\n  }\n}",...CircleLight.parameters?.docs?.source}}},CircleDart.parameters={...CircleDart.parameters,docs:{...CircleDart.parameters?.docs,source:{originalSource:"{\n  args: {\n    border: '50%',\n    width: 100,\n    height: 100\n  },\n  decorators: [themeDecorator(Theme.DARK)]\n}",...CircleDart.parameters?.docs?.source}}},CircleRed.parameters={...CircleRed.parameters,docs:{...CircleRed.parameters?.docs,source:{originalSource:"{\n  args: {\n    border: '50%',\n    width: 100,\n    height: 100\n  },\n  decorators: [themeDecorator(Theme.RED)]\n}",...CircleRed.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultLight","DefaultDark","DefaultRed","CircleLight","CircleDart","CircleRed"]},"./src/shared/config/storybook/themeDecorator/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return _themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W}});var _themeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/themeDecorator/themeDecorator.tsx")},"./src/shared/lib/classNames/classNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function classNames(cls,mods={},additional=[]){return[cls,...additional.filter(Boolean),...Object.entries(mods).filter((([_,value])=>Boolean(value))).map((([className])=>className))].join(" ")}__webpack_require__.d(__webpack_exports__,{A:function(){return classNames}})},"./src/shared/ui/Skeleton/ui/Skeleton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return Skeleton}});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/ui/Skeleton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.Z,options);var ui_Skeleton_module=Skeleton_module.Z&&Skeleton_module.Z.locals?Skeleton_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton=(0,react.memo)((props=>{const{className:className,height:height,width:width,border:border}=props,styles={height:height,width:width,borderRadius:border};return(0,jsx_runtime.jsx)("div",{style:styles,className:(0,classNames.A)(ui_Skeleton_module.Skeleton,{},[className])})}));try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"Скелетон?! втф",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Skeleton/ui/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/shared/ui/Skeleton/ui/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/ui/Skeleton.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton{width:100%;height:50px;position:relative;box-shadow:0 2px 10px 0 var(--skeleton-shadow);overflow:hidden}.src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton::before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:80%;background:linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);animation:src-shared-ui-Skeleton-ui-Skeleton-module__load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}@keyframes src-shared-ui-Skeleton-ui-Skeleton-module__load{from{left:-150px}to{left:100%}}',"",{version:3,sources:["webpack://./src/shared/ui/Skeleton/ui/Skeleton.module.scss"],names:[],mappings:"AAAA,qDACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,8CAAA,CACA,eAAA,CAEA,6DACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,KAAA,CACA,WAAA,CACA,SAAA,CACA,iGAAA,CACA,kGAAA,CAIR,2DACI,KACI,WAAA,CAGJ,GACI,SAAA,CAAA",sourcesContent:['.Skeleton {\n    width: 100%;\n    height: 50px;\n    position: relative;\n    box-shadow: 0 2px 10px 0 var(--skeleton-shadow);\n    overflow: hidden;\n\n    &::before {\n        content: "";\n        display: block;\n        position: absolute;\n        left: -150px;\n        top: 0;\n        height: 100%;\n        width: 80%;\n        background: linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);\n        animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n    }\n}\n\n@keyframes load {\n    from {\n        left: -150px;\n    }\n\n    to {\n        left: 100%;\n    }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Skeleton:"src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton",load:"src-shared-ui-Skeleton-ui-Skeleton-module__load"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);