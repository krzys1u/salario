(this.webpackJsonpsalario=this.webpackJsonpsalario||[]).push([[0],{120:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var n,a=c(1),r=c.n(a),s=c(70),i=c.n(s),o=c(208),j=c(76),l=c(97),b=c(23),u=c(18),d=c(98),h=c.n(d),O=(c(120),c(39)),m=c(48),f=c(181),x=c(215),p=c(214),v=c(177),g=c(180),y=c(209),k=c(2),w=Object(v.a)((function(e){return{root:{marginTop:"15px"},formControl:{}}})),S=function(e){var t=e.checkboxes,c=e.label,n=e.update,a=w(),r=function(e){return function(t){n(e,t.target.checked)}},s=t.map((function(e){var t=e.label,c=e.name,n=e.checked;return Object(k.jsx)("div",{children:Object(k.jsx)(g.a,{control:Object(k.jsx)(y.a,{checked:n,onChange:r(c),value:c,color:"primary"}),label:t})},c)}));return Object(k.jsxs)("div",{className:a.root,children:[Object(k.jsx)(f.a,{component:"legend",children:c}),s]})},_=function(e){return function(t){e.displayName||e.name;return Object(a.useEffect)((function(){return function(){}}),[]),Object(k.jsx)(e,Object(u.a)({},t))}},z=c(182),M=c(212),N=void 0,A=Object(v.a)({root:{},input:{width:80}}),L=function(e){return Math.floor(e/160)},C=function(e){var t=e.update,c=e.min,n=e.max,a=e.step,r=e.from,s=e.to,i=A(),o=function(e,n){n.persist(),t(e,""===n.target.value?c:Number(n.target.value),!1)},j=function(e,a){a.persist();var i=""===a.target.value?c:Number(a.target.value),o="from"===e?r:s;return o<c?t(e,c):o>n?t(e,n):void t(e,i)};return Object(k.jsx)("div",{children:Object(k.jsxs)(z.a,{container:!0,spacing:2,alignItems:"center",children:[Object(k.jsx)(z.a,{item:!0,xs:5,children:Object(k.jsx)(M.a,{className:i.input,value:r,margin:"dense",onChange:o.bind(N,"from"),onBlur:j.bind(N,"from"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(k.jsx)(z.a,{item:!0,xs:2,children:"-"}),Object(k.jsx)(z.a,{item:!0,xs:5,children:Object(k.jsx)(M.a,{className:i.input,value:s,margin:"dense",onChange:o.bind(N,"to"),onBlur:j.bind(N,"to"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(k.jsxs)(z.a,{item:!0,xs:5,className:"filters__perHourValue",children:[L(r)," na godzin\u0119"]}),Object(k.jsx)(z.a,{item:!0,xs:2}),Object(k.jsxs)(z.a,{item:!0,xs:5,className:"filters__perHourValue",children:[L(s)," na godzin\u0119"]})]})})},E=c(28),R=[].concat(Object(O.a)(E.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"Umowa o prac\u0119 - KUP ".concat(e,"%"),name:"uop-".concat(e)}}))),[{label:"B2B(19%) - ma\u0142y ZUS",name:"b2b-low-zus"},{label:"B2B(19%) - du\u017cy ZUS",name:"b2b-high-zus"}]),I=[{label:"Min",name:"nettoMin"},{label:"Max",name:"nettoMax"},{label:"\u015arednia",name:"nettoAvg"}],T=E.SALARY_MIN,P=E.SALARY_MAX,D=E.SALARY_SLIDER_STEP,W=_((function(e){var t=e.submitAction,c=e.values,n=Object(a.useState)({from:c.from,to:c.to,types:c.types,measures:c.measures}),r=Object(b.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(!0),j=Object(b.a)(o,2),l=j[0],d=j[1],h=Object(a.useCallback)((function(e,t){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Object(u.a)(Object(u.a)({},s),{},Object(m.a)({},e,t));c&&(n.to<n.from&&"from"===e&&(n.to=n.from),n.from>n.to&&"to"===e&&(n.from=n.to)),i(n),d(!0)}),[i,d,s]),v=Object(a.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},s),{},{types:Object(u.a)(Object(u.a)({},s.types),{},Object(m.a)({},e,t))})),d(!0)}),[d,s,i]),g=Object(a.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},s),{},{measures:Object(u.a)(Object(u.a)({},s.measures),{},Object(m.a)({},e,t))})),d(!0)}),[d,s,i]),y=Object(a.useCallback)((function(){t(s),d(!1)}),[t,d,s]),w={update:h,min:T,max:P,step:E.SALARY_SLIDER_STEP,from:s.from,to:s.to},_={label:"Wybierz form\u0119 zatrudnienia",checkboxes:R.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{checked:s.types[e.name]||!1})})),update:v},z={label:"Wybierz miar\u0119",checkboxes:I.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{checked:s.measures[e.name]||!1})})),update:g},M=Object(a.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},s),{},{from:Math.min.apply(Math,Object(O.a)(t)),to:Math.max.apply(Math,Object(O.a)(t))}))}),[i,s]);return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(f.a,{component:"legend",children:"Wybierz zakres zarobk\xf3w"}),Object(k.jsx)(p.a,{value:[s.from,s.to],valueLabelDisplay:"auto",onChange:M,onChangeCommitted:function(){d(!0)},"aria-labelledby":"input-slider",min:T,max:P,step:D}),Object(k.jsx)(C,Object(u.a)({},w))]}),Object(k.jsx)(S,Object(u.a)({},_)),Object(k.jsx)(S,Object(u.a)({},z)),Object(k.jsx)(x.a,{variant:"outlined",color:"primary",onClick:y,disabled:!l,children:"Por\xf3wnaj"})]})})),B=c(41),H=c.n(B),Y=c(59),U=c(213),V=c(183),F="salario::theme",G="dark",X="light",K=function(e){localStorage.setItem(F,e)},q=function(){var e=!(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches),t=localStorage.getItem(F);return t||(e||X)},J=function(e){window.dataLayer.push({event:"theme-changed",theme:e})},Z=r.a.createContext({light:q(),toggle:function(){}}),Q=function(){var e=Object(a.useContext)(Z),t=e.light;return{toggle:e.toggle,isLight:t,isDark:!t,theme:t?X:G}},$=function(){var e=Q(),t=e.isLight,c=e.toggle,n=["themeSwitcher__container"];return!t&&n.push("active"),Object(k.jsx)("div",{className:n.join(" "),onClick:c,children:Object(k.jsx)("span",{})})},ee=function(e){var t=new Date(parseInt(e));return"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())},te=function(){var e=Object(Y.a)(H.a.mark((function e(){var t,c,n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(E.API_URL,"/api/metadata"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,a=n.created,e.abrupt("return",ee(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=_((function(e){var t=e.toogleSidebar,c=r.a.useState(!0),n=Object(b.a)(c,2),s=n[0],i=n[1],o=Object(U.a)(["metadata"],te,{enabled:s}),j=o.loading,l=o.data;return Object(a.useEffect)((function(){!j&&l&&i(!1)}),[l,j]),Object(k.jsxs)("header",{className:"appHeader",children:[Object(k.jsx)("button",{className:"sidebarToggle",onClick:function(){return t()},children:Object(k.jsx)("svg",{className:"sidebarToggleIcon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(k.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("h6",{className:"appName",children:"Salario"})}),Object(k.jsxs)("div",{className:"dataGeneratedTime",children:["Dane wygenerowano ",null!==l&&void 0!==l?l:""]})]}),Object(k.jsxs)("div",{className:"header__controls",children:[Object(k.jsx)($,{}),Object(k.jsx)("a",{href:"https://github.com/krzys1u/salaryComparer",className:"github__button",title:"Contribute me",children:Object(k.jsx)(V.a,{})})]})]})})),ne=c(184),ae=function(){return Object(k.jsx)("div",{style:{width:400,height:400},children:Object(k.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("g",{className:"loader__icon",children:Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsx)("g",{className:"loader__icon--animation",children:Object(k.jsx)("path",{strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#3f51b5",fill:"none",d:"M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77",className:"loader__icon--letter"})})}),Object(k.jsx)("g",{children:Object(k.jsx)("g",{className:"loader__icon--animation",children:Object(k.jsx)("path",{className:"loader__icon--pipe",d:"M41.631 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})}),Object(k.jsx)("g",{children:Object(k.jsx)("g",{className:"loader__icon--animation",children:Object(k.jsx)("path",{className:"loader__icon--pipe",d:"M56.746 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})})]})})})})},re=_((function(){return Object(ne.a)()?Object(k.jsx)("div",{className:"loader",children:Object(k.jsx)(ae,{})}):null})),se=function(){return Object(k.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsxs)("g",{children:[Object(k.jsx)("path",{d:"m494.5 60.514h-113.627c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.627c1.378 0 2.5 1.122 2.5 2.5v45.527h-482v-45.527c0-1.378 1.122-2.5 2.5-2.5h328.85c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-328.85c-9.649 0-17.5 7.851-17.5 17.5v355.973c0 9.649 7.851 17.5 17.5 17.5h399.347c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-399.347c-1.378 0-2.5-1.122-2.5-2.5v-295.446h482v97.409c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-157.936c0-9.65-7.851-17.5-17.5-17.5z"}),Object(k.jsx)("path",{d:"m504.5 262.972c-4.142 0-7.5 3.358-7.5 7.5v163.515c0 1.378-1.122 2.5-2.5 2.5h-43.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h43.13c9.649 0 17.5-7.851 17.5-17.5v-163.515c0-4.142-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m47.433 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m70.076 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m92.719 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m464.567 107.027c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.956c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(k.jsx)("path",{d:"m336.078 240.496c0-44.155-35.923-80.078-80.078-80.078s-80.078 35.923-80.078 80.078 35.923 80.078 80.078 80.078 80.078-35.923 80.078-80.078zm-80.078 65.078c-35.884 0-65.078-29.194-65.078-65.078s29.194-65.078 65.078-65.078 65.078 29.194 65.078 65.078-29.194 65.078-65.078 65.078z"}),Object(k.jsx)("path",{d:"m229.518 330.68c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h52.965c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m328.26 388.997c0-4.142-3.358-7.5-7.5-7.5h-187.453c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h187.453c4.142 0 7.5-3.358 7.5-7.5z"}),Object(k.jsx)("path",{d:"m378.693 381.497h-27.484c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h27.484c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m133.307 404.334c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.876c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(k.jsx)("path",{d:"m221.632 419.334h157.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-157.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(k.jsx)("path",{d:"m283.801 212.695c-2.929-2.929-7.678-2.929-10.606 0l-17.195 17.195-17.195-17.195c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.195 17.195-17.195 17.195c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.195-17.194 17.195 17.195c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.195-17.195 17.195-17.195c2.929-2.929 2.929-7.678 0-10.607z"})]})})},ie=c(137),oe=function(e){var t=e.label,c=e.code,n=e.icon,a=e.button;return Object(k.jsx)("div",{className:"info__wrapper",children:Object(k.jsxs)("div",{children:[Object(k.jsx)(ie.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(k.jsx)("div",{className:"image__wrapper",children:n}),c&&c.length?Object(k.jsx)("code",{children:c}):"",a?Object(k.jsx)("div",{className:"buttons",children:a}):""]})})},je=_((function(e){var t=e.error,c=e.onClick;return Object(k.jsx)(oe,{label:"Co\u015b posz\u0142o nie tak...",code:t.message,icon:Object(k.jsx)(se,{}),button:Object(k.jsx)(x.a,{variant:"outlined",color:"primary",onClick:c,children:"Pon\xf3w"})})})),le=c(199),be=c(204),ue=c(201),de=c(202),he=c(206),Oe=c(203),me=c(207),fe=c(103),xe=c(104),pe=c(205),ve=r.a.createContext({width:0,height:0}),ge=500,ye=["#c92a2a","#862e9c","#5f3dc4","#364fc7","#2b8a3e","#5c940d","#e67700","#d9480f","#69d2e7","#f38630","#f215b7","#db6991","#cfb5fc","#ffdac9","#b71013","#dca2f2","#606ff2","#dd18ca","#fffa7a","#f4bcab","#eabb10","#d4f473"],ke=function(e){return ye[e]},we=function(e,t){var c=t.datum,n=e[c.x];return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsxs)("strong",{children:["Gross: ",c.x]})}),n.map((function(e,t){var n=Object(b.a)(e,2),a=n[0],r=n[1],s=ke(t),i=c.label===a;return Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{style:{color:s,textDecoration:i?"underline solid ".concat(s):null,fontWeight:i?600:200},children:"".concat(a," ")}),r]},a)}))]})},Se=function(e){var t=e.filters,c=e.dataSeries,n=e.dataPoints,r=e.dataRange,s=Object(a.useContext)(ve),i=s.width,o=s.height,j={stroke:Q().isLight?"black":"#e8eef4"},l=Object(pe.a)({range:c.map((function(e,t){return{stroke:ke(t),strokeDasharray:""}})),domain:c.map((function(e){return e.label}))}),u=Object(b.a)(r,2),d=u[0],h=u[1],m=[Math.min.apply(Math,Object(O.a)(n[d].map((function(e){var t=Object(b.a)(e,2);t[0];return t[1]}))))-ge,Math.max.apply(Math,Object(O.a)(n[h].map((function(e){var t=Object(b.a)(e,2);t[0];return t[1]}))))+ge],f=[t.from-ge,t.to+ge],x=Math.min(Math.floor(i/50),10);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(le.a,{renderTooltip:we.bind(null,n),children:function(e){var t=e.onMouseLeave,n=e.onMouseMove,a=e.tooltipData;return Object(k.jsxs)(be.a,{ariaLabel:"Salaries",eventTrigger:"container",onMouseMove:n,onMouseLeave:t,renderTooltip:null,showVoronoi:!1,snapTooltipToDataX:!0,snapTooltipToDataY:!1,tooltipData:a,width:i,height:.75*o,xScale:{type:"linear",domain:f},yScale:{type:"linear",domain:m},children:[Object(k.jsx)(ue.a,{label:"Gross",numTicks:x,axisStyles:j,tickStyles:j}),Object(k.jsx)(de.a,{orientation:"left",numTicks:6,axisStyles:j,tickStyles:j}),c.map((function(e,t){var c=e.label,n=e.data,a=ke(t);return Object(k.jsx)(he.a,{data:n,seriesKey:c,strokeWidth:3,stroke:a},c)})),Object(k.jsx)(Oe.a,{fullHeight:!0,showHorizontalLine:!1,strokeDasharray:"",circleSize:function(e){return e.y===a.datum.y?6:4},circleStroke:function(e){var t=e.label,c=ke(Object.keys(a.series).indexOf(t));return e.y===a.datum.y?"#fff":c},circleStyles:{strokeWidth:1.5},circleFill:function(e){var t=e.label,c=ke(Object.keys(a.series).indexOf(t));return e.y===a.datum.y?c:"#fff"},showCircle:!0,showMultipleCircles:!0})]})}}),Object(k.jsx)(me.a,{scale:l,children:function(e){return Object(k.jsx)("div",{className:"diagram__legend",children:e.map((function(e,t){return Object(k.jsxs)(fe.a,{margin:"0 5px",className:"diagram__legendItem",children:[Object(k.jsx)("svg",{width:15,height:15,children:Object(k.jsx)("rect",{fill:e.value.stroke,width:15,height:15})}),Object(k.jsx)(xe.a,{align:"left",margin:"0 0 0 4px",children:e.text})]},"legend-".concat(t))}))})}})]})},_e=function(){return Object(k.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsxs)("g",{children:[Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m313.604 170.975h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m395.052 132.478h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m313.604 296.662h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m395.052 258.164h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m313.604 422.349h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m395.052 383.851h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]})]})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m320.852 70.651h-129.704c-12.328 0-22.358-10.029-22.358-22.357v-25.936c.001-12.328 10.03-22.358 22.358-22.358h129.703c12.328 0 22.358 10.03 22.358 22.358v25.936c0 12.328-10.029 22.357-22.357 22.357zm-129.704-55.651c-4.057 0-7.358 3.301-7.358 7.358v25.936c0 4.057 3.301 7.357 7.358 7.357h129.703c4.057 0 7.358-3.301 7.358-7.357v-25.936c0-4.058-3.301-7.358-7.358-7.358z"})}),Object(k.jsxs)("g",{children:[Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m162.917 181.028h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.332c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.102-9.033 20.135-20.136 20.135zm-33.333-58.604c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m162.917 306.715h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.333c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.103-9.033 20.136-20.136 20.136zm-33.333-58.605c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m162.917 432.402h-33.333c-11.103 0-20.136-9.033-20.136-20.137v-33.332c0-11.104 9.033-20.137 20.136-20.137h33.333c11.103 0 20.136 9.033 20.136 20.137v33.332c0 11.104-9.033 20.137-20.136 20.137zm-33.333-58.605c-2.832 0-5.136 2.305-5.136 5.137v33.332c0 2.832 2.304 5.137 5.136 5.137h33.333c2.832 0 5.136-2.305 5.136-5.137v-33.332c0-2.832-2.304-5.137-5.136-5.137z"})})]}),Object(k.jsx)("g",{children:Object(k.jsx)("path",{d:"m415.551 512h-319.102c-17.916 0-32.491-14.575-32.491-32.491v-419.193c0-17.915 14.576-32.49 32.491-32.49h44.945c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5h-44.945c-9.645 0-17.491 7.846-17.491 17.49v419.192c0 9.645 7.847 17.491 17.491 17.491h319.102c9.645 0 17.491-7.847 17.491-17.491v-419.192c0-9.645-7.847-17.49-17.491-17.49h-44.945c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h44.945c17.916 0 32.491 14.575 32.491 32.49v419.192c0 17.917-14.576 32.492-32.491 32.492z"})})]})})},ze=_((function(){return Object(k.jsx)(oe,{label:"Nie wybrano filtr\xf3w",icon:Object(k.jsx)(_e,{})})})),Me=function(e){return Object.keys(e).map((function(t){return(c=t,n=e[t],Array.isArray(n)?[n.map((function(e){return[c,e].join("=")})).join("&")]:[c,n]).join("=");var c,n})).join("&")},Ne=function(){var e=Object(Y.a)(H.a.mark((function e(t){var c,n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(E.API_URL,"/api/salary?").concat(Me(t)),e.next=3,fetch(c,t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(Y.a)(H.a.mark((function e(t){var c,n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(b.a)(t.queryKey,4),n=c[1],a=c[2],r=c[3],e.next=3,Ne({types:Object.keys(n).filter((function(e){return!!n[e]})),from:a,to:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(e,t){e.types;var c=e.measures,n={},a={},r=function(e,t){return e.find((function(e){return e.name===t})).label},s=[];return t.forEach((function(e){Object.keys(c).filter((function(e){return!!c[e]})).forEach((function(t){var c=e.type,i=e.brutto,o=function(e,t){return"".concat(r(I,e)," (").concat(r(R,t),")")}(t,c);(!s[0]||i<s[0])&&(s[0]=i),(!s[1]||i>s[1])&&(s[1]=i),n[o]||(n[o]=[]),a[i]||(a[i]=[]),a[i].push([o,e[t]]),n[o].push({x:i,y:e[t],label:o})}))})),{dataSeries:Object.keys(n).map((function(e){return{label:e,data:n[e]}})),dataPoints:a,range:s}},Ce=_((function(e){var t=e.filters,c=function(e){var t=e.types,c=e.measures;return!Object.keys(t).filter((function(e){return!!t[e]})).length||!Object.keys(c).filter((function(e){return!!c[e]})).length}(t),n=Object(U.a)(["data",t.types,t.from,t.to],Ae,{enabled:!c}),r=n.isError,s=n.error,i=n.refetch,o=n.data,j=Object(a.useCallback)((function(){i({throwOnError:!1})}),[i]);if(!o||c)return Object(k.jsx)(ze,{});if(r&&s)return Object(k.jsx)(je,{error:s,onClick:j});var l=Le(t,o),b=l.dataSeries,u=l.dataPoints,d=l.range;return Object(k.jsx)(Se,{filters:t,dataSeries:b,dataPoints:u,dataRange:d})})),Ee=function(){var e=document.getElementById("Workspace");return{width:e.offsetWidth-25,height:e.offsetHeight}},Re=_((function(){var e=Object(a.useState)({types:{"uop-0":!0},measures:{nettoMin:!0},from:E.SALARY_MIN,to:E.SALARY_MAX}),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(window.innerWidth<=640),s=Object(b.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)({}),l=Object(b.a)(j,2),d=l[0],O=l[1],m=Object(a.useState)(!0),f=Object(b.a)(m,2),x=f[0],p=f[1],v=Q().theme,g=Object(a.useCallback)((function(){i&&p(!1)}),[i]),y=Object(a.useCallback)((function(e){g(),n(e),function(e){window.dataLayer.push(Object(u.a)({event:"formSubmit"},e))}(e)}),[n,g]),w=Object(a.useCallback)((function(){p(!x)}),[x]);return Object(a.useEffect)((function(){O(Ee())}),[x,i]),Object(a.useEffect)((function(){var e=h()((function(){var e=window.innerWidth<=640;i!==e&&o(e),O(Ee())}),400);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(k.jsxs)("div",{className:"App","data-theme":v,children:[Object(k.jsx)(re,{}),Object(k.jsx)(ce,{toogleSidebar:w}),Object(k.jsxs)("section",{className:"content",children:[x&&Object(k.jsx)("aside",{className:"sidebar",children:Object(k.jsx)(W,{submitAction:y,values:c})}),Object(k.jsx)("section",{className:"workspace ".concat(x?"":"nosidebar"),id:"Workspace",children:Object(k.jsx)(ve.Provider,{value:d,children:Object(k.jsx)(Ce,{filters:c})})})]})]})})),Ie=new o.a({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}}),Te=(n=Re,function(){for(var e=q(),t=Object(a.useState)(e===X),c=Object(b.a)(t,2),r=c[0],s=c[1],i=arguments.length,o=new Array(i),j=0;j<i;j++)o[j]=arguments[j];return Object(k.jsx)(Z.Provider,{value:{light:r,toggle:function(){K(r?G:X),s(!r),J(r?G:X)}},children:Object(k.jsx)(n,Object(u.a)({},o))})});function Pe(){return Object(k.jsxs)(j.a,{client:Ie,children:[Object(k.jsx)(Te,{}),Object(k.jsx)(l.ReactQueryDevtools,{initialIsOpen:!1})]})}var De=document.getElementById("root");i.a.render(Object(k.jsx)(Pe,{}),De)},28:function(e,t){e.exports={FIREBASE_URL:"https://salario-a6a4b.firebaseio.com",API_URL:"https://salario.vercel.app",SALARY_MIN:2e3,SALARY_MAX:5e4,SALARY_STEP:250,SALARY_SLIDER_STEP:500,CREATIVE_RIGHTS_STEPS:[0,50,60,70,80]}}},[[136,1,2]]]);
//# sourceMappingURL=main.69a8676c.chunk.js.map