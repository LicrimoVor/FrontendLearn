"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[9597,442],{"./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Light:function(){return Light},Red:function(){return Red},__namedExportsOrder:function(){return __namedExportsOrder}});var _shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/themeDecorator/index.ts"),_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/lib/context/ThemeContext/index.ts"),_shared_config_storybook_storeDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/config/storybook/storeDecorator/index.ts");const meta={title:"features/CreateCommentForm",component:__webpack_require__("./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.tsx").default,args:{onCommentSend:test=>test},decorators:[(0,_shared_config_storybook_storeDecorator__WEBPACK_IMPORTED_MODULE_2__.Y)({})]};__webpack_exports__.default=meta;const Light={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Q.LIGHT)]},Dark={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Q.DARK)]},Red={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Q.RED)]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.LIGHT)]\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}},Red.parameters={...Red.parameters,docs:{...Red.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.RED)]\n}",...Red.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark","Red"]},"./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return CreateCommentForm_CreateCommentForm}});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),DynamicModuleLoader=__webpack_require__("./src/shared/lib/components/DynamicModuleLoader/index.ts"),useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/index.ts"),Button=__webpack_require__("./src/shared/ui/Button/index.ts"),Input=__webpack_require__("./src/shared/ui/Input/index.ts"),Stack=__webpack_require__("./src/shared/ui/Stack/index.ts");const getCreateCommentText=state=>state.createCommentForm?.text??"",getCreateCommentError=state=>state.createCommentForm?.error;var createCommentSlice=__webpack_require__("./src/entities/Comment/model/slice/createCommentSlice.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CreateCommentForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CreateCommentForm_module.Z,options);var CreateCommentForm_CreateCommentForm_module=CreateCommentForm_module.Z&&CreateCommentForm_module.Z.locals?CreateCommentForm_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reducers={createCommentForm:createCommentSlice.W},CreateCommentForm=(0,react.memo)((props=>{const{className:className,onCommentSend:onCommentSend}=props,{t:t}=(0,useTranslation.$)(),text=(0,es.v9)(getCreateCommentText),dispatch=((0,es.v9)(getCreateCommentError),(0,useAppDispatch.T)()),onCommentTextChange=(0,react.useCallback)((value=>{dispatch(createCommentSlice.S.setText(value))}),[dispatch]),onSendHandler=(0,react.useCallback)((()=>{onCommentSend(text||""),onCommentTextChange("")}),[onCommentSend,text,onCommentTextChange]);return(0,jsx_runtime.jsx)(DynamicModuleLoader.W,{reducers:reducers,children:(0,jsx_runtime.jsxs)(Stack.U,{max:!0,className:(0,classNames.A)(CreateCommentForm_CreateCommentForm_module.CreateCommentForm,{},[className]),children:[(0,jsx_runtime.jsx)(Input.I,{className:CreateCommentForm_CreateCommentForm_module.input,placeholder:t("Enter a comment"),value:text,onChange:onCommentTextChange}),(0,jsx_runtime.jsx)(Button.zx,{onClick:onSendHandler,children:t("Send")})]})})}));var CreateCommentForm_CreateCommentForm=CreateCommentForm;try{CreateCommentForm.displayName="CreateCommentForm",CreateCommentForm.__docgenInfo={description:"Форма создания комментария",displayName:"CreateCommentForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onCommentSend:{defaultValue:null,description:"",name:"onCommentSend",required:!0,type:{name:"(text: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.tsx#CreateCommentForm"]={docgenInfo:CreateCommentForm.__docgenInfo,name:"CreateCommentForm",path:"src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.tsx#CreateCommentForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Input/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return _ui_Input__WEBPACK_IMPORTED_MODULE_0__.I}});var _ui_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Input/ui/Input.tsx")},"./src/shared/ui/Input/ui/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/ui/Input.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.Z,options);var ui_Input_module=Input_module.Z&&Input_module.Z.locals?Input_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react.memo)((props=>{const{className:className,value:value,onChange:onChange,type:type="text",placeholder:placeholder,autofocus:autofocus,readonly:readonly,...otherProps}=props,ref=(0,react.useRef)(),[isFocused,setIsFocused]=(0,react.useState)(!1),[caretPosition,setCaretPosition]=(0,react.useState)(0),isCaretVisible=isFocused&&!readonly;(0,react.useEffect)((()=>{autofocus&&(setIsFocused(!0),ref.current.focus())}),[autofocus]);const mods={[ui_Input_module.readonly]:readonly};return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_Input_module.InputWrapper,{},[className]),children:[placeholder&&(0,jsx_runtime.jsx)("div",{className:ui_Input_module.placeholder,children:`${placeholder}>`}),(0,jsx_runtime.jsxs)("div",{className:ui_Input_module.caretWrapper,children:[(0,jsx_runtime.jsx)("input",{"data-testid":"input",ref:ref,type:type,value:value,onChange:e=>{onChange?.(e.target.value),setCaretPosition(e.target.value.length)},className:(0,classNames.A)(ui_Input_module.input,mods),...otherProps,onFocus:()=>{setIsFocused(!0)},onBlur:()=>{setIsFocused(!1)},onSelect:e=>{setCaretPosition(e?.target.selectionStart)},readOnly:readonly}),isCaretVisible&&(0,jsx_runtime.jsx)("span",{className:ui_Input_module.caret,style:{left:9*caretPosition+"px"}})]})]})}));try{Input.displayName="Input",Input.__docgenInfo={description:"Кастомный инпут.\nКаретку в продакшене не повторять!\nТакие изащрения не нужны!",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},autofocus:{defaultValue:null,description:"",name:"autofocus",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Input/ui/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/shared/ui/Input/ui/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-entities-Comment-ui-CreateCommentForm-CreateCommentForm-module__CreateCommentForm{border:1px solid var(--primary-color);padding:20px}.src-entities-Comment-ui-CreateCommentForm-CreateCommentForm-module__input{flex-grow:1}","",{version:3,sources:["webpack://./src/entities/Comment/ui/CreateCommentForm/CreateCommentForm.module.scss"],names:[],mappings:"AAAA,uFACI,qCAAA,CACA,YAAA,CAGJ,2EACI,WAAA",sourcesContent:[".CreateCommentForm {\n    border: 1px solid var(--primary-color);\n    padding: 20px;\n}\n\n.input {\n    flex-grow: 1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CreateCommentForm:"src-entities-Comment-ui-CreateCommentForm-CreateCommentForm-module__CreateCommentForm",input:"src-entities-Comment-ui-CreateCommentForm-CreateCommentForm-module__input"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/ui/Input.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Input-ui-Input-module__InputWrapper{display:flex}.src-shared-ui-Input-ui-Input-module__placeholder{margin-right:5px}.src-shared-ui-Input-ui-Input-module__input{background:transparent;border:none;outline:none;width:100%;color:transparent;text-shadow:0 0 0 var(--primary-color)}.src-shared-ui-Input-ui-Input-module__input:focus{outline:none}.src-shared-ui-Input-ui-Input-module__caretWrapper{flex-grow:1;position:relative}.src-shared-ui-Input-ui-Input-module__readonly{opacity:.8}.src-shared-ui-Input-ui-Input-module__caret{height:3px;width:9px;background:var(--primary-color);bottom:0;left:0;position:absolute;animation:src-shared-ui-Input-ui-Input-module__blink 1s forwards infinite}@keyframes src-shared-ui-Input-ui-Input-module__blink{0%{opacity:1}50%{opacity:1}60%{opacity:0}100%{opacity:0}}","",{version:3,sources:["webpack://./src/shared/ui/Input/ui/Input.module.scss"],names:[],mappings:"AAAA,mDACI,YAAA,CAGJ,kDACI,gBAAA,CAGJ,4CACI,sBAAA,CACA,WAAA,CACA,YAAA,CACA,UAAA,CACA,iBAAA,CACA,sCAAA,CAEA,kDACI,YAAA,CAIR,mDACI,WAAA,CACA,iBAAA,CAGJ,+CACI,UAAA,CAGJ,4CACI,UAAA,CACA,SAAA,CACA,+BAAA,CACA,QAAA,CACA,MAAA,CACA,iBAAA,CACA,yEAAA,CAGJ,sDACI,GACI,SAAA,CAGJ,IACI,SAAA,CAGJ,IACI,SAAA,CAGJ,KACI,SAAA,CAAA",sourcesContent:[".InputWrapper {\n    display: flex;\n}\n\n.placeholder {\n    margin-right: 5px;\n}\n\n.input {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n    color: transparent;\n    text-shadow: 0 0 0 var(--primary-color);\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.caretWrapper {\n    flex-grow: 1;\n    position: relative;\n}\n\n.readonly {\n    opacity: 0.8;\n}\n\n.caret {\n    height: 3px;\n    width: 9px;\n    background: var(--primary-color);\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    animation: blink 1s forwards infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 1;\n    }\n\n    60% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={InputWrapper:"src-shared-ui-Input-ui-Input-module__InputWrapper",placeholder:"src-shared-ui-Input-ui-Input-module__placeholder",input:"src-shared-ui-Input-ui-Input-module__input",caretWrapper:"src-shared-ui-Input-ui-Input-module__caretWrapper",readonly:"src-shared-ui-Input-ui-Input-module__readonly",caret:"src-shared-ui-Input-ui-Input-module__caret",blink:"src-shared-ui-Input-ui-Input-module__blink"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);