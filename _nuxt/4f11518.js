(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{162:function(t,e,n){"use strict";(function(t){var o=n(159),r=n(165),l=n(166),c=n(167),f=n.n(c),m=n(168),v=n.n(m),d=n(169),x=n.n(d),h=n(170),_=n.n(h),w=n(171),C=n.n(w),k=n(172),y=n.n(k),S=n(173),I=n(174),N=n(164);e.a={components:{Navbar:N.default,FacebookIcon:f.a,LinkedinIcon:v.a,TwitterIcon:x.a,GithubIcon:_.a,StackOverflowIcon:C.a,StravaIcon:y.a},directives:{mouseMove:r.a},data:function(){return{firstName:l.c,lastName:l.e,position:l.g,aboutMe:l.a,intro:l.d,outro:l.f,academicInterest:["Software Engineering","Human-Computer Interaction","Computer Vision","Machine Learning"],otherInterest:["Psychology","Bioinformatics","Badminton","Tennis","Table Tennis","Football"],publicPath:t.env.BASE_URL,facebook:S.a,linkedin:S.c,github:S.b,stackoverflow:S.d,links:I.a,strava:S.e}},computed:{age:function(){return Object(o.a)(l.b)}}}}).call(this,n(107))},163:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0f2cc046",content,!0,{sourceMap:!1})},186:function(t,e,n){"use strict";var o=n(163);n.n(o).a},187:function(t,e,n){var o=n(41),r=n(175),l=n(188);e=o(!1);var c=r(l);e.push([t.i,".line-transform[data-v-f000664e]{transform:translate(-5px,-50%)}.interest[data-v-f000664e]{background:#14a26b}#photo[data-v-f000664e]{background-image:url("+c+")}",""]),t.exports=e},188:function(t,e,n){t.exports=n.p+"img/mosharaf4.ed0422b.jpg"},193:function(t,e,n){"use strict";n.r(e);var o=n(162).a,r=(n(186),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Navbar"),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row md:justify-center md:mt-32 w-11/12 m-auto"},[n("div",{staticClass:"flex-1 pl-6 md:pr-6 mt-4 md:mt-0 text-left"},[n("h1",{staticClass:"text-black text-sm md:text-sm leading-none mb-5 \t",staticStyle:{"font-family":"Nunito,serif","letter-spacing":"0.25em"}},[t._v("\n        ABOUT ME\n        ")]),t._v(" "),n("div",[n("p",{staticClass:"leading-7 text-xs md:text-base font-mono font-bold text-blacktext pr-6 mb-4",staticStyle:{"font-family":"Nunito,serif"}},[t._v("\n          "+t._s(t.intro)+"\n        ")]),t._v(" "),n("p",{staticClass:"leading-7 text-xs md:text-base font-mono text-blacktext pr-6 mb-4",staticStyle:{"font-family":"Nunito,serif"}},[t._v("\n          "+t._s(t.aboutMe)+"\n        ")]),t._v(" "),n("p",{staticClass:"leading-7 text-xs md:text-base font-mono text-blacktext pr-6",staticStyle:{"font-family":"Nunito,serif"}},[t._v("\n          "+t._s(t.outro)+"\n        ")])]),t._v(" "),n("div",{staticClass:"mt-4"},[n("div",{staticClass:"mb-4",staticStyle:{"font-family":"Nunito,serif"}},[n("div",{staticClass:"font-mono text-blacktext text-base"},[t._v("Academic & Professional Interests")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},t._l(t.academicInterest,(function(e){return n("span",{staticClass:"text-white text-xs py-1 px-4 m-2 rounded-xl font-mono",staticStyle:{"background-color":"#0071e3"}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._v(" "),n("div",{staticStyle:{"font-family":"Nunito,serif"}},[n("div",{staticClass:"font-mono text-blacktext text-base"},[t._v("Other Interests")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},t._l(t.otherInterest,(function(e){return n("span",{staticClass:"text-white text-xs py-1 px-4 m-2 rounded-xl font-mono",staticStyle:{"background-color":"#0071e3"}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])]),t._v(" "),n("div",{staticClass:"flex justify-between link-section rounded-2xl mb-4 md:mb-0 p-4 mt-8",staticStyle:{"background-color":"#f2f2f2"}},[t._m(0),t._v(" "),n("div",[n("dd",[n("ul",{staticClass:"flex"},[t.linkedin?n("li",{staticClass:"mr-4"},[n("a",{attrs:{href:"https://www.linkedin.com/in/mosharaf13/",target:"_blank",rel:"noopener","aria-label":"Get to know be better via Linkedin"}},[n("linkedin-icon",{staticClass:"svg-inline"})],1)]):t._e(),t._v(" "),t.twitter?n("li",{staticClass:"mr-4"},[n("a",{attrs:{href:t.twitter,target:"_blank",rel:"noopener","aria-label":"Follow me on Twitter"}},[n("twitter-icon",{staticClass:"svg-inline"})],1)]):t._e(),t._v(" "),t.github?n("li",{staticClass:"mr-4"},[n("a",{attrs:{href:t.github,target:"https://github.com/mosharaf13",rel:"noopener","aria-label":"Discover my projects on Github"}},[n("github-icon",{staticClass:"svg-inline"})],1)]):t._e(),t._v(" "),t.stackoverflow?n("li",{staticClass:"mr-4"},[n("a",{attrs:{href:t.stackoverflow,target:"https://stackoverflow.com/users/6049005/mosharaf",rel:"noopener","aria-label":"See how I help people on Stackoverflow"}},[n("stack-overflow-icon",{staticClass:"svg-inline"})],1)]):t._e(),t._v(" "),t.strava?n("li",{staticClass:"mr-4"},[n("a",{attrs:{href:t.strava,target:"https://www.strava.com/athletes/76022349",rel:"noopener","aria-label":"Take a look at my Strava profile"}},[n("strava-icon",{staticClass:"svg-inline"})],1)]):t._e()])])])])]),t._v(" "),t._m(1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cv-button",staticStyle:{"font-family":"Nunito,serif"}},[e("span",{staticClass:"flex"},[e("a",{staticStyle:{color:"#06c"},attrs:{href:"/Resume%20of%20Md%20Mosharaf%20Hossan.pdf"}},[this._v("Academic CV")]),this._v(" "),e("a",{staticStyle:{color:"#06c","margin-left":"10px"},attrs:{href:"/Professional%20Resume%20of%20Md%20Mosharaf%20Hossan.pdf"}},[this._v("Professional CV")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-2/4"},[e("div",{staticClass:"bg-center bg-white bg-contain bg-no-repeat w-full h-full",attrs:{id:"photo"}})])}],!1,null,"f000664e",null);e.default=component.exports;installComponents(component,{Navbar:n(164).default})}}]);