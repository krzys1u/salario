(this.webpackJsonpsalario=this.webpackJsonpsalario||[]).push([[0],{167:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n,c,r,o=a(1),s=a.n(o),l=a(49),i=a.n(l),b=a(280),u=a(105),d=a(137),j=a(11),h=a(21),f=a(140),m=a.n(f),O=(a(167),a(18)),p=a(252),x=a(272),g=a(254),v=a(255),L=a(278),y=a(256),w=a(279),k=a(142),S=a(143),E=a(274),_=a(4),C="pl",N="en",z=(n={},Object(_.a)(n,C,"\ud83c\uddf5\ud83c\uddf1"),Object(_.a)(n,N,"\ud83c\uddec\ud83c\udde7"),n),A=(c={},Object(_.a)(c,C,{noFiltersLabel:"Nie wybrano filtr\xf3w",errorLabel:"Co\u015b posz\u0142o nie tak...",tryAgainLabel:"Pon\xf3w",salaryPerHourLabel:"na godzin\u0119",employmentTypeLabel:"Wybierz form\u0119 zatrudnienia",measuresLabel:"Wybierz miary",salaryRangesLabel:"Wybierz zakres zarobk\xf3w",submitButtonLabel:"Por\xf3wnaj",dataGeneratedLabel:"Dane wygenerowano",contractOfEmploymentLabel:"Umowa o prac\u0119 - KUP",contractOfEmploymentLegendLabel:"UoP - KUP",contractOfEmploymentEmployerCostLabel:"UoP - koszty pracodawcy",contractOfEmploymentEmployerCostNewDealLabel:"UoP N\u0141 - koszty pracodawcy",contractOfEmploymentShortLabel:"UoP",lowZusLabel:"ma\u0142y ZUS",highZusLabel:"du\u017cy ZUS",averageLabel:"\u015arednia",sumLabel:"Suma",grossLabel:"Brutto",additionalFiltersLabel:"Dodatkowe opcje",showEmployerCostLabel:"Koszty pracodawcy",showTaxesLabel:"Podatki",taxLabelSuffix:"podatki",before2022Label:"Przed 2022",before2022ShortLabel:"<2022",newDealLabel:"Nowy \u0142ad",newDealShortLabel:"N\u0141",autocompletePlaceholder:"Wybierz do %s opcji"}),Object(_.a)(c,N,{noFiltersLabel:"No filters selected",errorLabel:"Something went wrong...",tryAgainLabel:"Try again",salaryPerHourLabel:"per hour",employmentTypeLabel:"Choose types of employment",measuresLabel:"Choose measures",salaryRangesLabel:"Choose gross ranges",submitButtonLabel:"Compare",dataGeneratedLabel:"Data generated at",contractOfEmploymentLabel:"CoE - CR",contractOfEmploymentLegendLabel:"CoE - KUP",contractOfEmploymentEmployerCostLabel:"CoE - employer cost",contractOfEmploymentEmployerCostNewDealLabel:"CoE ND - employer cost",contractOfEmploymentShortLabel:"CoE",lowZusLabel:"low ZUS",highZusLabel:"high ZUS",averageLabel:"Avg",sumLabel:"Sum",grossLabel:"Gross",additionalFiltersLabel:"Additional options",showEmployerCostLabel:"Employer costs",showTaxesLabel:"Taxes",taxLabelSuffix:"taxes",before2022Label:"before 2022",before2022ShortLabel:"<2022",newDealLabel:"New Deal",newDealShortLabel:"ND",autocompletePlaceholder:"Choose up to %s options"}),c),M=a(2),T="salario::lang",P=function(e){localStorage.setItem(T,e)},D=function(){var e="pl-PL"===window.navigator.language?C:N,t=localStorage.getItem(T);return t||(e||C)},R=function(e){window.dataLayer.push({event:"language-changed",lang:e})},B=s.a.createContext({lang:D(),toggle:function(){}}),F={},I=function(){var e=Object(o.useContext)(B),t=e.lang;return{changeLanguage:e.changeLanguage,activeLang:t,translations:A[t],LANGS:z,t:function(e){return F[e]||(F[e]=Object.keys(A[t]).filter((function(t){return e.includes(t)})).reduce((function(e,a){return e.replace(a,A[t][a])}),e)),F[e]}}},Y="salario::theme",H="dark",U="light",W=function(e){localStorage.setItem(Y,e)},Z=function(){var e=!(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches),t=localStorage.getItem(Y);return t||(e||U)},G=function(e){window.dataLayer.push({event:"theme-changed",theme:e})},V=s.a.createContext({light:Z(),toggle:function(){}}),X=function(){var e=Object(o.useContext)(V),t=e.light;return{toggle:e.toggle,isLight:t,isDark:!t,theme:t?U:H}},K=s.a.createContext({width:0,height:0}),q=500,J=0,Q={},$=["#c92a2a","#862e9c","#364fc7","#2b8a3e","#5f3dc4","#e67700","#d9480f","#5c940d","#69d2e7","#f38630","#f215b7","#db6991","#cfb5fc","#ffdac9","#b71013","#dca2f2","#42e2b8","#f3dfbf","#eb8a90","#e55812","#606ff2","#dd18ca","#fffa7a","#f4bcab","#eabb10","#d4f473","#07004d","#2d82b7","#a1869e","#f4b942","#e56399","#f7ec59","#157a6e","#f75c03","#6153cc","#34e5ff","#499f68","#e0ff4f","#f90093","#00a6fb","#05a8aa","#f896d8","#5c52a4","#cc7d62","#9a02fa","#94d36f","#28e364","#216687","#4c633c","#69dbdd","#969081","#9c2c52","#94f560","#7f7672","#62ee58","#1c73dd","#b1ad90","#b7766d","#1cd3dd","#b1ad20","#bdc66d"],ee=function(e){return Q[e]||(Q[e]=$[J++]),Q[e]},te=function(e,t,a){var n=t.translations,c=t.t,r=a.datum,o=e[r.x];return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:Object(M.jsxs)("strong",{children:[n.grossLabel,": ",r.x]})}),o.map((function(e){var t=Object(j.a)(e,2),a=t[0],n=t[1],o=ee(a),s=r.label===a;return Object(M.jsxs)("div",{children:[Object(M.jsxs)("span",{style:{color:o,textDecoration:s?"underline solid ".concat(o):null,fontWeight:s?600:200},children:[c(a),":"]})," ",n]},a)}))]})},ae=function(e){var t=e.filters,a=e.dataSeries,n=e.dataPoints,c=e.dataRange,r=Object(o.useContext)(K),s=r.width,l=r.height,i=X().isLight,b=I(),u=b.translations,d=b.t,h={stroke:i?"black":"#e8eef4"},f=Object(E.a)({range:a.map((function(e){var t=e.label;return{stroke:ee(t),strokeDasharray:""}})),domain:a.map((function(e){return e.label}))}),m=Object(j.a)(c,2),_=m[0],C=m[1],N=[Math.min.apply(Math,Object(O.a)(n[_].map((function(e){var t=Object(j.a)(e,2);t[0];return t[1]}))))-q,Math.max.apply(Math,Object(O.a)(n[C].map((function(e){var t=Object(j.a)(e,2);t[0];return t[1]}))))+q],z=[t.from-q,t.to+q],A=Math.min(Math.floor(s/50),10);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(p.a,{renderTooltip:te.bind(null,n,{translations:u,t:d}),children:function(e){var t=e.onMouseLeave,n=e.onMouseMove,c=e.tooltipData;return Object(M.jsxs)(x.a,{ariaLabel:"Salaries",eventTrigger:"container",onMouseMove:n,onMouseLeave:t,renderTooltip:null,showVoronoi:!1,snapTooltipToDataX:!0,snapTooltipToDataY:!1,tooltipData:c,width:s,height:.75*l,xScale:{type:"linear",domain:z},yScale:{type:"linear",domain:N},children:[Object(M.jsx)(g.a,{label:u.grossLabel,numTicks:A,axisStyles:h,tickStyles:h}),Object(M.jsx)(v.a,{orientation:"left",numTicks:6,axisStyles:h,tickStyles:h}),a.map((function(e){var t=e.label,a=e.data,n=ee(t);return Object(M.jsx)(L.a,{data:a,seriesKey:t,strokeWidth:3,stroke:n},t)})),Object(M.jsx)(y.a,{fullHeight:!0,showHorizontalLine:!1,strokeDasharray:"",circleSize:function(e){return e.y===c.datum.y?6:4},circleStroke:function(e){var t=e.label,a=ee(t);return e.y===c.datum.y?"#fff":a},circleStyles:{strokeWidth:1.5},circleFill:function(e){var t=e.label,a=ee(t);return e.y===c.datum.y?a:"#fff"},showCircle:!0,showMultipleCircles:!0})]})}}),Object(M.jsx)(w.a,{scale:f,children:function(e){return Object(M.jsx)("div",{className:"diagram__legend",children:e.map((function(e,t){return Object(M.jsxs)(k.a,{margin:"0 5px",className:"diagram__legendItem",children:[Object(M.jsx)("svg",{width:15,height:15,children:Object(M.jsx)("rect",{fill:e.value.stroke,width:15,height:15})}),Object(M.jsx)(S.a,{align:"left",margin:"0 0 0 4px",children:d(e.text)})]},"legend-".concat(t))}))})}})]})},ne=function(e){return function(t){e.displayName||e.name;return Object(o.useEffect)((function(){return function(){}}),[]),Object(M.jsx)(e,Object(h.a)({},t))}},ce=function(){return Object(M.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsxs)("g",{children:[Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m313.604 170.975h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m395.052 132.478h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m313.604 296.662h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m395.052 258.164h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m313.604 422.349h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m395.052 383.851h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]})]})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m320.852 70.651h-129.704c-12.328 0-22.358-10.029-22.358-22.357v-25.936c.001-12.328 10.03-22.358 22.358-22.358h129.703c12.328 0 22.358 10.03 22.358 22.358v25.936c0 12.328-10.029 22.357-22.357 22.357zm-129.704-55.651c-4.057 0-7.358 3.301-7.358 7.358v25.936c0 4.057 3.301 7.357 7.358 7.357h129.703c4.057 0 7.358-3.301 7.358-7.357v-25.936c0-4.058-3.301-7.358-7.358-7.358z"})}),Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m162.917 181.028h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.332c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.102-9.033 20.135-20.136 20.135zm-33.333-58.604c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m162.917 306.715h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.333c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.103-9.033 20.136-20.136 20.136zm-33.333-58.605c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m162.917 432.402h-33.333c-11.103 0-20.136-9.033-20.136-20.137v-33.332c0-11.104 9.033-20.137 20.136-20.137h33.333c11.103 0 20.136 9.033 20.136 20.137v33.332c0 11.104-9.033 20.137-20.136 20.137zm-33.333-58.605c-2.832 0-5.136 2.305-5.136 5.137v33.332c0 2.832 2.304 5.137 5.136 5.137h33.333c2.832 0 5.136-2.305 5.136-5.137v-33.332c0-2.832-2.304-5.137-5.136-5.137z"})})]}),Object(M.jsx)("g",{children:Object(M.jsx)("path",{d:"m415.551 512h-319.102c-17.916 0-32.491-14.575-32.491-32.491v-419.193c0-17.915 14.576-32.49 32.491-32.49h44.945c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5h-44.945c-9.645 0-17.491 7.846-17.491 17.49v419.192c0 9.645 7.847 17.491 17.491 17.491h319.102c9.645 0 17.491-7.847 17.491-17.491v-419.192c0-9.645-7.847-17.49-17.491-17.49h-44.945c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h44.945c17.916 0 32.491 14.575 32.491 32.49v419.192c0 17.917-14.576 32.492-32.491 32.492z"})})]})})},re=a(288),oe=function(e){var t=e.label,a=e.code,n=e.icon,c=e.button;return Object(M.jsx)("div",{className:"info__wrapper",children:Object(M.jsxs)("div",{children:[Object(M.jsx)(re.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(M.jsx)("div",{className:"image__wrapper",children:n}),a&&a.length?Object(M.jsx)("code",{children:a}):"",c?Object(M.jsx)("div",{className:"buttons",children:c}):""]})})},se=ne((function(){var e=I().translations;return Object(M.jsx)(oe,{label:e.noFiltersLabel,icon:Object(M.jsx)(ce,{})})})),le=a(285),ie=function(){return Object(M.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsxs)("g",{children:[Object(M.jsx)("path",{d:"m494.5 60.514h-113.627c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.627c1.378 0 2.5 1.122 2.5 2.5v45.527h-482v-45.527c0-1.378 1.122-2.5 2.5-2.5h328.85c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-328.85c-9.649 0-17.5 7.851-17.5 17.5v355.973c0 9.649 7.851 17.5 17.5 17.5h399.347c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-399.347c-1.378 0-2.5-1.122-2.5-2.5v-295.446h482v97.409c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-157.936c0-9.65-7.851-17.5-17.5-17.5z"}),Object(M.jsx)("path",{d:"m504.5 262.972c-4.142 0-7.5 3.358-7.5 7.5v163.515c0 1.378-1.122 2.5-2.5 2.5h-43.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h43.13c9.649 0 17.5-7.851 17.5-17.5v-163.515c0-4.142-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m47.433 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m70.076 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m92.719 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m464.567 107.027c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.956c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(M.jsx)("path",{d:"m336.078 240.496c0-44.155-35.923-80.078-80.078-80.078s-80.078 35.923-80.078 80.078 35.923 80.078 80.078 80.078 80.078-35.923 80.078-80.078zm-80.078 65.078c-35.884 0-65.078-29.194-65.078-65.078s29.194-65.078 65.078-65.078 65.078 29.194 65.078 65.078-29.194 65.078-65.078 65.078z"}),Object(M.jsx)("path",{d:"m229.518 330.68c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h52.965c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m328.26 388.997c0-4.142-3.358-7.5-7.5-7.5h-187.453c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h187.453c4.142 0 7.5-3.358 7.5-7.5z"}),Object(M.jsx)("path",{d:"m378.693 381.497h-27.484c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h27.484c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m133.307 404.334c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.876c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(M.jsx)("path",{d:"m221.632 419.334h157.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-157.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(M.jsx)("path",{d:"m283.801 212.695c-2.929-2.929-7.678-2.929-10.606 0l-17.195 17.195-17.195-17.195c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.195 17.195-17.195 17.195c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.195-17.194 17.195 17.195c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.195-17.195 17.195-17.195c2.929-2.929 2.929-7.678 0-10.607z"})]})})},be=ne((function(e){var t=e.error,a=e.onClick,n=I().translations;return Object(M.jsx)(oe,{label:n.errorLabel,code:t.message,icon:Object(M.jsx)(ie,{}),button:Object(M.jsx)(le.a,{variant:"outlined",color:"primary",onClick:a,children:n.tryAgainLabel})})})),ue=a(29),de=a(286),je=a(262),he=void 0,fe=function(e){return Math.floor(e/160)},me=function(e){var t=e.update,a=e.min,n=e.max,c=e.step,r=e.from,o=e.to,s=I().translations,l=function(e,n){n.persist(),t(e,""===n.target.value?a:Number(n.target.value),!1)},i=function(e,c){c.persist();var s=""===c.target.value?a:Number(c.target.value),l="from"===e?r:o;return l<a?t(e,a):l>n?t(e,n):void t(e,s)};return Object(M.jsx)("div",{children:Object(M.jsxs)(de.a,{container:!0,spacing:2,alignItems:"center",children:[Object(M.jsx)(de.a,{item:!0,xs:5,children:Object(M.jsx)(je.a,{className:"filters__input",value:r,margin:"dense",onChange:l.bind(he,"from"),onBlur:i.bind(he,"from"),inputProps:{step:c,min:a,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(M.jsx)(de.a,{item:!0,xs:2,children:"-"}),Object(M.jsx)(de.a,{item:!0,xs:5,children:Object(M.jsx)(je.a,{className:"filters__input",value:o,margin:"dense",onChange:l.bind(he,"to"),onBlur:i.bind(he,"to"),inputProps:{step:c,min:a,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(M.jsxs)(de.a,{item:!0,xs:5,className:"filters__perHourValue",children:[fe(r)," ",s.salaryPerHourLabel]}),Object(M.jsx)(de.a,{item:!0,xs:2}),Object(M.jsxs)(de.a,{item:!0,xs:5,className:"filters__perHourValue",children:[fe(o)," ",s.salaryPerHourLabel]})]})})},Oe=a(266),pe=a(283),xe=ue.SALARY_MIN,ge=ue.SALARY_MAX,ve=ue.SALARY_SLIDER_STEP,Le=function(e){var t=e.from,a=e.to,n=e.onChange,c=e.setSubmitEnabled,r=I().translations;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Oe.a,{component:"legend",children:r.salaryRangesLabel}),Object(M.jsx)(pe.a,{value:[t,a],valueLabelDisplay:"auto",onChange:n,onChangeCommitted:function(){c(!0)},"aria-labelledby":"input-slider",min:xe,max:ge,step:ve})]})},ye=a(289),we=a(281),ke=function(e){var t=e.checkboxes,a=e.label,n=e.update,c=function(e){return function(t){n(e,t.target.checked)}},r=t.map((function(e){var t=e.label,a=e.name,n=e.checked;return Object(M.jsx)("div",{children:Object(M.jsx)(ye.a,{control:Object(M.jsx)(we.a,{checked:n,onChange:c(e),value:a,color:"primary"}),label:t})},a)}));return Object(M.jsxs)("div",{className:"sidebar__legend",children:[Object(M.jsx)(Oe.a,{component:"legend",children:a}),r]})},Se=[].concat(Object(O.a)(ue.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"contractOfEmploymentLabel ".concat(e,"% (before2022Label)"),name:"uop-".concat(e),legendLabel:"contractOfEmploymentLegendLabel ".concat(e,"% (before2022Label)"),shortLabel:"contractOfEmploymentShortLabel ".concat(e,"% (before2022ShortLabel)")}}))),Object(O.a)(ue.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"contractOfEmploymentLabel ".concat(e,"% (newDealLabel)"),name:"uop-".concat(e,"-nd"),legendLabel:"contractOfEmploymentLegendLabel ".concat(e,"% (newDealLabel)"),shortLabel:"contractOfEmploymentShortLabel ".concat(e,"% (newDealShortLabel)")}}))),[{label:"B2B(19%) - lowZusLabel (before2022Label)",name:"b2b-low-zus",shortLabel:"B2B - lowZusLabel (before2022ShortLabel)"},{label:"B2B(19%) - highZusLabel (before2022Label)",name:"b2b-high-zus",shortLabel:"B2B - highZusLabel (before2022ShortLabel)"},{label:"B2B(19%) - lowZusLabel (newDealLabel)",name:"b2b-low-zus-nd",shortLabel:"B2B - lowZusLabel (newDealShortLabel)"},{label:"B2B(19%) - highZusLabel (newDealLabel)",name:"b2b-high-zus-nd",shortLabel:"B2B - highZusLabel (newDealShortLabel)"}]),Ee=[{label:"Min",name:"nettoMin",additionalFields:[{name:"taxMin",labelSuffix:"taxLabelSuffix",enabler:"showTaxes"}]},{label:"Max",name:"nettoMax",additionalFields:[{name:"taxMax",labelSuffix:"taxLabelSuffix",enabler:"showTaxes"}]},{label:"averageLabel",name:"nettoAvg",additionalFields:[{name:"taxAvg",labelSuffix:"taxLabelSuffix",enabler:"showTaxes"}]},{label:"sumLabel",name:"nettoSum",additionalFields:[{name:"taxSum",labelSuffix:"taxLabelSuffix",enabler:"showTaxes"}]}],_e=[{label:"showEmployerCostLabel",name:"showEmployerCost"},{label:"showTaxesLabel",name:"showTaxes"}],Ce=function(e,t,a){var n=a.checkbox,c=a.checked;return Object(h.a)(Object(h.a)({},e),{},Object(_.a)({},t,Object(h.a)(Object(h.a)({},e[t]),{},Object(_.a)({},n.name,{checked:c,data:n}))))},Ne=ne((function(e){var t=e.enableSubmit,a=e.checkboxesState,n=e.updateAction,c=I(),r=c.translations,s=c.t,l={measures:Object(o.useCallback)((function(e,c){n(Ce(a,"measures",{checkbox:e,checked:c})),t()}),[t,a,n]),additionalFilters:Object(o.useCallback)((function(e,c){n(Ce(a,"additionalFilters",{checkbox:e,checked:c})),t()}),[t,a,n])},i=function(e){var t=function(e){return{measures:{label:e.measuresLabel,config:Ee},additionalFilters:{label:e.additionalFiltersLabel,config:_e}}}(r)[e],n=t.label,c=t.config;return{label:n,update:l[e],checkboxes:c.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{label:s(t.label),checked:(n=e,c=t.name,(a[n][c]||{checked:!1}).checked||!1)});var n,c}))}},b=i("measures"),u=i("additionalFilters");return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ke,Object(h.a)({},b)),Object(M.jsx)(ke,Object(h.a)({},u))]})})),ze=a(273),Ae=a(275),Me=a(287),Te=a(276),Pe=Se,De=function(e){var t=e.title,a=e.longTitle,n=e.additionalProps,c=e.additionalClassNames,r=s.a.useState(null),o=Object(j.a)(r,2),l=o[0],i=o[1],b=function(){i(null)},u=Boolean(l);return Object(M.jsxs)("span",{className:"filters__employmentTypes",children:[Object(M.jsx)(re.a,{"aria-owns":u?"mouse-over-popover":void 0,"aria-haspopup":"true",component:"span",onMouseEnter:function(e){i(e.currentTarget)},onMouseLeave:b,children:Object(M.jsx)(Me.a,Object(h.a)(Object(h.a)({label:t},n),{},{classes:{root:c}}))}),Object(M.jsx)(Te.a,{sx:{pointerEvents:"none"},open:u,onClose:b,anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},disableRestoreFocus:!0,classes:{paper:"filters__employmentTypesPopover"},children:a})]})},Re=ne((function(e){var t=e.values,a=e.onChange,n=I(),c=n.translations,r=n.t;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"sidebar__legend",children:Object(M.jsx)(re.a,{gutterBottom:!0,component:"legend",children:c.employmentTypeLabel})}),Object(M.jsx)(ze.a,{multiple:!0,id:"tags-standard",options:Pe,filterSelectedOptions:!0,disableCloseOnSelect:!0,disableClearable:!0,disableListWrap:!0,fullWidth:!0,getOptionLabel:function(e){return r(e.label)},isOptionEqualToValue:function(e,t){return e.name===t.name},value:t,getOptionDisabled:function(){return t.length>=ue.MAX_EMPLOYMENT_TYPES},onChange:function(e,t){a(t)},renderTags:function(e,t){return console.info("tagValue",e),e.map((function(e,a){return Object(M.jsx)(De,{title:r(e.shortLabel),longTitle:r(e.label),additionalProps:t({index:a}),additionalClassNames:e.name.includes("-nl")?"chip__newDeal":"chip__noNewDeal"},"chip-".concat(e.label))}))},renderInput:function(e){return Object(M.jsx)(Ae.a,Object(h.a)(Object(h.a)({},e),{},{variant:"standard",placeholder:c.autocompletePlaceholder.replace("%s",ue.MAX_EMPLOYMENT_TYPES)}))}})]})})),Be=ue.SALARY_MIN,Fe=ue.SALARY_MAX,Ie=function(e,t,a,n){var c=Object(h.a)(Object(h.a)({},e),{},Object(_.a)({},t,a));return n&&(c.to<c.from&&"from"===t&&(c.to=c.from),c.from>c.to&&"to"===t&&(c.from=c.to)),c},Ye=ne((function(e){var t=e.submitAction,a=e.values,n=I().translations,c=Object(o.useState)({from:a.from<Be?Be:a.from,to:a.to>Fe?Fe:a.to,checkboxes:a.checkboxes}),r=Object(j.a)(c,2),s=r[0],l=r[1];console.info("state",s);var i=Object(o.useState)(!0),b=Object(j.a)(i,2),u=b[0],d=b[1],f=Object(o.useCallback)((function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Ie(s,e,t,a);l(n),d(!0)}),[l,d,s]),m=Object(o.useCallback)((function(){t(s),d(!1)}),[t,d,s]),p={update:f,min:Be,max:Fe,step:ue.SALARY_SLIDER_STEP,from:s.from,to:s.to},x=Object(o.useCallback)((function(e,t){l(Object(h.a)(Object(h.a)({},s),{},{from:Math.min.apply(Math,Object(O.a)(t)),to:Math.max.apply(Math,Object(O.a)(t))}))}),[l,s]),g={enableSubmit:function(){return d(!0)},checkboxesState:s.checkboxes,updateAction:function(e){return l(Object(h.a)(Object(h.a)({},s),{},{checkboxes:e}))}};return Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)(Le,{from:s.from,to:s.to,onChange:x,setSubmitEnabled:d}),Object(M.jsx)(me,Object(h.a)({},p))]}),Object(M.jsx)("div",{children:Object(M.jsx)(Re,{values:Object.keys(s.checkboxes.types).filter((function(e){return!!s.checkboxes.types[e].checked})).map((function(e){return s.checkboxes.types[e].data})),onChange:function(e){console.info("choosenTypes",e);var t=e.map((function(e){return[e.name,{checked:!0,data:e}]}));l(Object(h.a)(Object(h.a)({},s),{},{checkboxes:Object(h.a)(Object(h.a)({},s.checkboxes),{},{types:Object.fromEntries(t)})})),d(!0)}})}),Object(M.jsx)(Ne,Object(h.a)({},g)),Object(M.jsx)(le.a,{variant:"outlined",color:"primary",onClick:m,disabled:!u,children:n.submitButtonLabel})]})})),He=a(63),Ue=a.n(He),We=a(88),Ze=a(284),Ge=a(270),Ve=function(){var e=X(),t=e.isLight,a=e.toggle,n=["themeSwitcher__container"];return!t&&n.push("active"),Object(M.jsx)("div",{className:n.join(" "),onClick:a,children:Object(M.jsx)("span",{})})},Xe=function(e){var t=new Date(parseInt(e));return"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())},Ke=function(){var e=Object(We.a)(Ue.a.mark((function e(){var t,a,n,c;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(ue.API_URL,"/api/metadata"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.created,e.abrupt("return",Xe(c));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=ne((function(e){var t=e.toogleSidebar,a=I().translations,n=s.a.useState(!0),c=Object(j.a)(n,2),r=c[0],l=c[1],i=Object(Ze.a)(["metadata"],Ke,{enabled:r}),b=i.loading,u=i.data;return Object(o.useEffect)((function(){!b&&u&&l(!1)}),[u,b]),Object(M.jsxs)("header",{className:"appHeader",children:[Object(M.jsx)("button",{className:"sidebarToggle",onClick:function(){return t()},children:Object(M.jsx)("svg",{className:"sidebarToggleIcon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(M.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:Object(M.jsx)("h6",{className:"appName",children:"Salario"})}),Object(M.jsxs)("div",{className:"dataGeneratedTime",children:[a.dataGeneratedLabel," ",null!==u&&void 0!==u?u:""]})]}),Object(M.jsxs)("div",{className:"header__controls",children:[Object(M.jsx)(Ve,{}),Object(M.jsx)("a",{href:"https://github.com/krzys1u/salaryComparer",className:"github__button",title:"Contribute me",children:Object(M.jsx)(Ge.a,{})})]})]})})),Je=function(){var e=I(),t=e.activeLang,a=e.changeLanguage,n=e.LANGS;return Object(M.jsx)("div",{className:"languageSelector__container",children:Object.keys(n).map((function(e){var c=["languageSelector__item"];return t===e&&c.push("active"),Object(M.jsx)("div",{className:c.join(" "),onClick:function(){a(e)},children:Object(M.jsx)("div",{children:n[e]})},"lang-".concat(e))}))})},Qe=a(271),$e=function(){return Object(M.jsx)("div",{style:{width:400,height:400},children:Object(M.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("g",{className:"loader__icon",children:Object(M.jsxs)("g",{children:[Object(M.jsx)("g",{children:Object(M.jsx)("g",{className:"loader__icon--animation",children:Object(M.jsx)("path",{strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#3f51b5",fill:"none",d:"M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77",className:"loader__icon--letter"})})}),Object(M.jsx)("g",{children:Object(M.jsx)("g",{className:"loader__icon--animation",children:Object(M.jsx)("path",{className:"loader__icon--pipe",d:"M41.631 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})}),Object(M.jsx)("g",{children:Object(M.jsx)("g",{className:"loader__icon--animation",children:Object(M.jsx)("path",{className:"loader__icon--pipe",d:"M56.746 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})})]})})})})},et=ne((function(){return Object(Qe.a)()?Object(M.jsx)("div",{className:"loader",children:Object(M.jsx)($e,{})}):null})),tt=function(e){return Object.keys(e).map((function(t){return(a=t,n=e[t],Array.isArray(n)?[n.map((function(e){return[a,e].join("=")})).join("&")]:[a,n]).join("=");var a,n})).join("&")},at=function(){var e=Object(We.a)(Ue.a.mark((function e(t){var a,n,c,r;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(ue.API_URL,"/api/salary?").concat(tt(t)),e.next=3,fetch(a,t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nt=function(){var e=Object(We.a)(Ue.a.mark((function e(t){var a,n,c,r,o;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(j.a)(t.queryKey,5),n=a[1],c=a[2],r=a[3],o=a[4],e.next=3,at({types:Object.keys(n).filter((function(e){return!!n[e].checked})),additionalFilters:Object.keys(o).filter((function(e){return!!o[e].checked})),from:c,to:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ct=function(e,t){e.types;var a=e.measures,n=e.additionalFilters,c={},r={},o=[];return t.forEach((function(e){Object.values(a).filter((function(e){return!!e.checked})).forEach((function(t){var a=t.data,s=a.name,l=a.label,i=a.additionalFields,b=e.type,u=e.gross,d=function(e,t){return"".concat(e," (").concat(function(e,t){var a=e.find((function(e){return e.name===t}));return a.legendLabel||a.label}([].concat(Object(O.a)(Se),[{label:"contractOfEmploymentEmployerCostLabel",name:"uop-employer-cost"},{label:"contractOfEmploymentEmployerCostNewDealLabel",name:"uop-employer-cost-nd"}]),t),")")}(l,b);(!o[0]||u<o[0])&&(o[0]=u),(!o[1]||u>o[1])&&(o[1]=u),r[u]||(r[u]=[]),[{name:s,label:d}].concat(Object(O.a)(i.filter((function(e){var t=e.enabler;return!(!n[t]||!n[t].checked)})).map((function(e){var t=e.name,a=e.labelSuffix;return{name:t,label:"".concat(d," - ").concat(a)}})))).forEach((function(t){var a=t.name,n=t.label;e[a]&&(r[u].push([n,e[a]]),c[n]||(c[n]=[]),c[n].push({x:u,y:e[a],label:n}))}))}))})),{dataSeries:Object.keys(c).map((function(e){return{label:e,data:c[e]}})),dataPoints:r,range:o}},rt=ne((function(e){var t=e.filters,a=function(e){var t=e.types,a=e.measures;return!Object.keys(t).filter((function(e){return!!t[e].checked})).length||!Object.keys(a).filter((function(e){return!!a[e].checked})).length}(t.checkboxes),n=Object(Ze.a)(["data",t.checkboxes.types,t.from,t.to,t.checkboxes.additionalFilters],nt,{enabled:!a}),c=n.isError,r=n.error,s=n.refetch,l=n.data,i=Object(o.useCallback)((function(){s({throwOnError:!1})}),[s]);if(!l||a)return Object(M.jsx)(se,{});if(c&&r)return Object(M.jsx)(be,{error:r,onClick:i});var b=ct(t.checkboxes,l),u=b.dataSeries,d=b.dataPoints,j=b.range;return Object(M.jsx)(ae,{filters:t,dataSeries:u,dataPoints:d,dataRange:j})})),ot=function(){var e=document.getElementById("Workspace");return{width:e.offsetWidth-25,height:e.offsetHeight}},st=ne((function(){var e=Object(o.useState)(function(){var e=window.location.search,t=new URLSearchParams(e),a=Object.fromEntries(Se.map((function(e){return[e.name,1]}))),n=Object.fromEntries(Ee.map((function(e){return[e.name,1]}))),c=Object.fromEntries(_e.map((function(e){return[e.name,1]}))),r=(t.get("types")||"uop-0").split(",").filter((function(e){return a[e]})),o=(t.get("measures")||"nettoMin").split(",").filter((function(e){return n[e]})),s=(t.get("additionalFilters")||"").split(",").filter((function(e){return c[e]})),l=parseInt(t.get("from"))||ue.SALARY_MIN,i=parseInt(t.get("to"))||ue.SALARY_MAX;return{checkboxes:{types:Object.fromEntries(r.map((function(e){return[e,{data:Se.find((function(t){return t.name===e})),checked:!0}]}))),measures:Object.fromEntries(o.map((function(e){return[e,{data:Ee.find((function(t){return t.name===e})),checked:!0}]}))),additionalFilters:Object.fromEntries(s.map((function(e){return[e,{data:_e.find((function(t){return t.name===e})),checked:!0}]})))},from:l<i?l:i,to:l>i?l:i}}()),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(o.useState)(window.innerWidth<=640),r=Object(j.a)(c,2),s=r[0],l=r[1],i=Object(o.useState)({}),b=Object(j.a)(i,2),u=b[0],d=b[1],f=Object(o.useState)(!0),O=Object(j.a)(f,2),p=O[0],x=O[1],g=X().theme,v=Object(o.useCallback)((function(){s&&x(!1)}),[s]);Object(o.useEffect)((function(){!function(e){var t=e.checkboxes,a=[["types",Object.keys(t.types).filter((function(e){return!!t.types[e].checked})).join(",")],["measures",Object.keys(t.measures).filter((function(e){return!!t.measures[e].checked})).join(",")],["additionalFilters",Object.keys(t.additionalFilters).filter((function(e){return!!t.additionalFilters[e].checked})).join(",")],["from",e.from],["to",e.to]].reduce((function(e,t){var a=Object(j.a)(t,2),n=a[0],c=a[1];return c?(e.searchParams.set(n,c),e):e}),new URL(window.location));window.history.pushState({},"",a)}(a)}),[a]);var L=Object(o.useCallback)((function(e){v(),n(e),function(e){window.dataLayer.push(Object(h.a)({event:"formSubmit"},e))}(e)}),[n,v]),y=Object(o.useCallback)((function(){x(!p)}),[p]);return Object(o.useEffect)((function(){d(ot())}),[p,s]),Object(o.useEffect)((function(){var e=m()((function(){var e=window.innerWidth<=640;s!==e&&l(e),d(ot())}),400);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(M.jsxs)("div",{className:"App","data-theme":g,children:[Object(M.jsx)(et,{}),Object(M.jsx)(qe,{toogleSidebar:y}),Object(M.jsxs)("section",{className:"content",children:[p&&Object(M.jsxs)("aside",{className:"sidebar",children:[Object(M.jsx)(Ye,{submitAction:L,values:a}),Object(M.jsx)(Je,{})]}),Object(M.jsx)("section",{className:"workspace ".concat(p?"":"nosidebar"),id:"Workspace",children:Object(M.jsx)(K.Provider,{value:u,children:Object(M.jsx)(rt,{filters:a})})})]})]})})),lt=new b.a({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}}),it=function(e){return function(){for(var t=Z(),a=Object(o.useState)(t===U),n=Object(j.a)(a,2),c=n[0],r=n[1],s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return Object(M.jsx)(V.Provider,{value:{light:c,toggle:function(){W(c?H:U),r(!c),G(c?H:U)}},children:Object(M.jsx)(e,Object(h.a)({},l))})}}((r=st,function(){for(var e=D(),t=Object(o.useState)(e),a=Object(j.a)(t,2),n=a[0],c=a[1],s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return Object(M.jsx)(B.Provider,{value:{lang:n,changeLanguage:function(e){var t=e;P(t),c(t),R(t),F={}}},children:Object(M.jsx)(r,Object(h.a)({},l))})}));function bt(){return Object(M.jsxs)(u.a,{client:lt,children:[Object(M.jsx)(it,{}),Object(M.jsx)(d.ReactQueryDevtools,{initialIsOpen:!1})]})}var ut=document.getElementById("root");i.a.render(Object(M.jsx)(bt,{}),ut)},29:function(e,t){e.exports={FIREBASE_URL:"https://salario-a6a4b.firebaseio.com",API_URL:"https://salario.vercel.app",SALARY_MIN:2e3,SALARY_MAX:5e4,SALARY_STEP:500,SALARY_SLIDER_STEP:500,CREATIVE_RIGHTS_STEPS:[0,50,60,70,80],MAX_EMPLOYMENT_TYPES:4}}},[[184,1,2]]]);
//# sourceMappingURL=main.8adc3568.chunk.js.map