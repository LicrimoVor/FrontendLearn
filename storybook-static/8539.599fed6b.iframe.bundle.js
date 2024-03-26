"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[8539],{"./src/features/Article/ArticleRecommend/ui/ArticleRecommend.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return ui_ArticleRecommend}});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),Text=__webpack_require__("./src/shared/ui/Text/index.ts"),Stack=__webpack_require__("./src/shared/ui/Stack/index.ts"),Article=__webpack_require__("./src/entities/Article/index.ts");const useArticleRecommendList=__webpack_require__("./src/shared/api/rtkApi.ts").p.injectEndpoints({endpoints:builder=>({getArticleRecommendList:builder.query({query:(limit=5)=>({url:"/articles",params:{_limit:limit}})})})}).useGetArticleRecommendListQuery;var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ArticleRecommend_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/Article/ArticleRecommend/ui/ArticleRecommend.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ArticleRecommend_module.Z,options);var ui_ArticleRecommend_module=ArticleRecommend_module.Z&&ArticleRecommend_module.Z.locals?ArticleRecommend_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ArticleRecommend=props=>{const{className:className}=props,{t:t}=(0,useTranslation.$)("article-detail"),{data:articles,error:error,isLoading:isLoading}=useArticleRecommendList(5);return error?(0,jsx_runtime.jsx)(Text.xv,{text:t("Error")}):(0,jsx_runtime.jsxs)(Stack.g,{max:!0,className:(0,classNames.A)("",{},[className]),children:[(0,jsx_runtime.jsx)(Text.xv,{size:Text.yH.L,title:t("Recommend")}),(0,jsx_runtime.jsx)(Article.wD,{className:(0,classNames.A)(ui_ArticleRecommend_module.articleRecommend,{},[className]),articles:articles,isLoading:isLoading,target:"_blank",countSceleton:5})]})};ArticleRecommend.displayName="ArticleRecommend";var ui_ArticleRecommend=(0,react.memo)(ArticleRecommend);try{ArticleRecommend.displayName="ArticleRecommend",ArticleRecommend.__docgenInfo={description:"",displayName:"ArticleRecommend",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/Article/ArticleRecommend/ui/ArticleRecommend.tsx#ArticleRecommend"]={docgenInfo:ArticleRecommend.__docgenInfo,name:"ArticleRecommend",path:"src/features/Article/ArticleRecommend/ui/ArticleRecommend.tsx#ArticleRecommend"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/Article/ArticleRecommend/ui/ArticleRecommend.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-features-Article-ArticleRecommend-ui-ArticleRecommend-module__articleRecommend{min-width:100%;height:300px;margin-top:20px;flex-wrap:nowrap;overflow-y:hidden;overflow-x:auto}","",{version:3,sources:["webpack://./src/features/Article/ArticleRecommend/ui/ArticleRecommend.module.scss"],names:[],mappings:"AAAA,oFACI,cAAA,CACA,YAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA",sourcesContent:[".articleRecommend {\n    min-width: 100%;\n    height: 300px;\n    margin-top: 20px;\n    flex-wrap: nowrap;\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={articleRecommend:"src-features-Article-ArticleRecommend-ui-ArticleRecommend-module__articleRecommend"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);