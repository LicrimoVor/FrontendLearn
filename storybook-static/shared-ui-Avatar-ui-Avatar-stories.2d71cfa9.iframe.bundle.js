"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[9669],{"./src/shared/ui/Avatar/ui/Avatar.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Size100px:function(){return Size100px},Size200px:function(){return Size200px},__namedExportsOrder:function(){return __namedExportsOrder}});var _shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/themeDecorator/index.ts"),_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/lib/context/ThemeContext/index.ts"),_shared_assets_tests_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/assets/tests/avatar.jpg");const meta={title:"shared/Avatar",component:__webpack_require__("./src/shared/ui/Avatar/ui/Avatar.tsx").q};__webpack_exports__.default=meta;const Size200px={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Q.LIGHT)],args:{src:_shared_assets_tests_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__,size:200}},Size100px={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Q.LIGHT)],args:{src:_shared_assets_tests_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__,size:100}};Size200px.parameters={...Size200px.parameters,docs:{...Size200px.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.LIGHT)],\n  args: {\n    src: AvatarImg,\n    size: 200\n  }\n}",...Size200px.parameters?.docs?.source}}},Size100px.parameters={...Size100px.parameters,docs:{...Size100px.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.LIGHT)],\n  args: {\n    src: AvatarImg,\n    size: 100\n  }\n}",...Size100px.parameters?.docs?.source}}};const __namedExportsOrder=["Size200px","Size100px"]},"./src/shared/config/storybook/themeDecorator/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return _themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W}});var _themeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/themeDecorator/themeDecorator.tsx")},"./src/shared/lib/classNames/classNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function classNames(cls,mods={},additional=[]){return[cls,...additional.filter(Boolean),...Object.entries(mods).filter((([_,value])=>Boolean(value))).map((([className])=>className))].join(" ")}__webpack_require__.d(__webpack_exports__,{A:function(){return classNames}})},"./src/shared/ui/AppImage/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return AppImage}});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AppImage=(0,react.memo)((props=>{const{className:className,src:src,alt:alt="image",fallback:fallback,errorFallback:errorFallback,...otherProps}=props,[isLoading,setIsloading]=(0,react.useState)(!0),[hasError,setHasError]=(0,react.useState)(!1);return(0,react.useLayoutEffect)((()=>{const img=new Image;img.src=src??"",img.onload=()=>{setIsloading(!1)},img.onerror=()=>{setIsloading(!1),setHasError(!0)}})),isLoading&&fallback?fallback:hasError&&errorFallback?errorFallback:(0,jsx_runtime.jsx)("img",{alt:alt,src:src,className:className,...otherProps})}));try{AppImage.displayName="AppImage",AppImage.__docgenInfo={description:"Картинка с асинхронной подгрузкой",displayName:"AppImage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},errorFallback:{defaultValue:null,description:"",name:"errorFallback",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/AppImage/ui/AppImage.tsx#AppImage"]={docgenInfo:AppImage.__docgenInfo,name:"AppImage",path:"src/shared/ui/AppImage/ui/AppImage.tsx#AppImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Avatar/ui/Avatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return Avatar}});var _path,react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var user=props=>react.createElement("svg",_extends({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{d:"M26.749 24.93A13.99 13.99 0 1 0 2 16c0 3.266 1.152 6.428 3.251 8.93l-.02.017c.07.084.15.156.222.239.09.103.187.2.28.3.28.304.568.596.87.87.092.084.187.162.28.242.32.276.649.538.99.782.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1.34-.245.67-.506.99-.782.093-.08.188-.159.28-.242.302-.275.59-.566.87-.87.093-.1.189-.197.28-.3.071-.083.152-.155.222-.24l-.022-.016ZM16 8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93 11.94 11.94 0 0 1-15.986 0Z",fill:"currentColor"}))),AppImage=__webpack_require__("./src/shared/ui/AppImage/index.ts"),Icon=__webpack_require__("./src/shared/ui/Icon/index.ts"),Skeleton=__webpack_require__("./src/shared/ui/Skeleton/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/ui/Avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.Z,options);var ui_Avatar_module=Avatar_module.Z&&Avatar_module.Z.locals?Avatar_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=props=>{const{className:className,src:src,size:size=100,alt:alt="Avatar",fallabackInverted:fallabackInverted}=props,styles=(0,react.useMemo)((()=>({width:size,height:size})),[size]);return(0,jsx_runtime.jsx)(AppImage.n,{fallback:(0,jsx_runtime.jsx)(Skeleton.O,{width:size,height:size,border:"50%"}),errorFallback:(0,jsx_runtime.jsx)(Icon.J,{Svg:user,size:size,theme:fallabackInverted?"inverted":"normal"}),src:src,style:styles,className:(0,classNames.A)(ui_Avatar_module.Avatar,{},[className]),alt:alt})};Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"Аватар",displayName:"Avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},fallabackInverted:{defaultValue:null,description:"",name:"fallabackInverted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Avatar/ui/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/shared/ui/Avatar/ui/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Icon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return Icon}});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Icon/ui/Icon.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon_module.Z,options);var ui_Icon_module=Icon_module.Z&&Icon_module.Z.locals?Icon_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const themeClass={clear:ui_Icon_module.clear,inverted:ui_Icon_module.inverted,normal:ui_Icon_module.normal},Icon=(0,react.memo)((props=>{const{className:className,Svg:Svg,size:size,theme:theme="normal"}=props;return(0,jsx_runtime.jsx)(Svg,{style:{height:size,width:size},className:(0,classNames.A)("",{},[className,themeClass[theme]])})}));try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Иконка",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},Svg:{defaultValue:null,description:"",name:"Svg",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"inverted"'},{value:'"normal"'},{value:'"clear"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Icon/ui/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/shared/ui/Icon/ui/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Skeleton/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return _ui_Skeleton__WEBPACK_IMPORTED_MODULE_0__.O}});var _ui_Skeleton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Skeleton/ui/Skeleton.tsx")},"./src/shared/ui/Skeleton/ui/Skeleton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return Skeleton}});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/ui/Skeleton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.Z,options);var ui_Skeleton_module=Skeleton_module.Z&&Skeleton_module.Z.locals?Skeleton_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton=(0,react.memo)((props=>{const{className:className,height:height,width:width,border:border}=props,styles={height:height,width:width,borderRadius:border};return(0,jsx_runtime.jsx)("div",{style:styles,className:(0,classNames.A)(ui_Skeleton_module.Skeleton,{},[className])})}));try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"Скелетон?! втф",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Skeleton/ui/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/shared/ui/Skeleton/ui/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/ui/Avatar.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Avatar-ui-Avatar-module__Avatar{border-radius:50%}","",{version:3,sources:["webpack://./src/shared/ui/Avatar/ui/Avatar.module.scss"],names:[],mappings:"AAAA,+CACI,iBAAA",sourcesContent:[".Avatar {\n    border-radius: 50%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Avatar:"src-shared-ui-Avatar-ui-Avatar-module__Avatar"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Icon/ui/Icon.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Icon-ui-Icon-module__normal{fill:var(--primary-color);color:var(--primary-color)}.src-shared-ui-Icon-ui-Icon-module__inverted{fill:var(--inverted-primary-color);color:var(--inverted-primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/Icon/ui/Icon.module.scss"],names:[],mappings:"AAAA,2CACI,yBAAA,CACA,0BAAA,CAGJ,6CACI,kCAAA,CACA,mCAAA",sourcesContent:[".normal {\n    fill: var(--primary-color);\n    color: var(--primary-color);\n}\n\n.inverted {\n    fill: var(--inverted-primary-color);\n    color: var(--inverted-primary-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={normal:"src-shared-ui-Icon-ui-Icon-module__normal",inverted:"src-shared-ui-Icon-ui-Icon-module__inverted"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/ui/Skeleton.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton{width:100%;height:50px;position:relative;box-shadow:0 2px 10px 0 var(--skeleton-shadow);overflow:hidden}.src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton::before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:80%;background:linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);animation:src-shared-ui-Skeleton-ui-Skeleton-module__load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}@keyframes src-shared-ui-Skeleton-ui-Skeleton-module__load{from{left:-150px}to{left:100%}}',"",{version:3,sources:["webpack://./src/shared/ui/Skeleton/ui/Skeleton.module.scss"],names:[],mappings:"AAAA,qDACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,8CAAA,CACA,eAAA,CAEA,6DACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,KAAA,CACA,WAAA,CACA,SAAA,CACA,iGAAA,CACA,kGAAA,CAIR,2DACI,KACI,WAAA,CAGJ,GACI,SAAA,CAAA",sourcesContent:['.Skeleton {\n    width: 100%;\n    height: 50px;\n    position: relative;\n    box-shadow: 0 2px 10px 0 var(--skeleton-shadow);\n    overflow: hidden;\n\n    &::before {\n        content: "";\n        display: block;\n        position: absolute;\n        left: -150px;\n        top: 0;\n        height: 100%;\n        width: 80%;\n        background: linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);\n        animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n    }\n}\n\n@keyframes load {\n    from {\n        left: -150px;\n    }\n\n    to {\n        left: 100%;\n    }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Skeleton:"src-shared-ui-Skeleton-ui-Skeleton-module__Skeleton",load:"src-shared-ui-Skeleton-ui-Skeleton-module__load"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src/shared/assets/tests/avatar.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/avatar.45713c54.jpg"}}]);