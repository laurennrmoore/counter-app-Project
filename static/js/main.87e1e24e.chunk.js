(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),u=n(7),o=n.n(u),s=(n(12),n(2)),a=n(3),i=n(5),j=n(4),h=n(0),l=function(t){var e=t.countUp;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:e,children:"Add One"})})},b=function(t){var e=t.countDown;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:e,children:"Subtract One"})})},p=function(t){Object(i.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),u=0;u<c;u++)r[u]=arguments[u];return(t=e.call.apply(e,[this].concat(r))).state={count:""},t.handleChange=function(e){t.setState({count:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.inputNum(t.state.count),t.setState({count:""})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.count}),Object(h.jsx)("button",{children:"Input"})]})}}]),n}(c.Component),d=function(t){var e=t.reset;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:e,children:"Reset"})})},O=function(t){Object(i.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),u=0;u<c;u++)r[u]=arguments[u];return(t=e.call.apply(e,[this].concat(r))).state={count:0},t.countUp=function(){t.setState({count:t.state.count+1})},t.countDown=function(){t.setState({count:t.state.count-1})},t.inputNum=function(e){var n=parseInt(e);t.setState({count:t.state.count+n})},t.reset=function(){t.setState({count:0})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{children:"My First React App: Count With Me!"}),Object(h.jsx)("h4",{children:this.state.count})]}),Object(h.jsxs)("div",{className:"container-two",children:[Object(h.jsx)(l,{countUp:this.countUp}),Object(h.jsx)(b,{countDown:this.countDown})]}),Object(h.jsxs)("div",{className:"container-three",children:[Object(h.jsx)(p,{inputNum:this.inputNum}),Object(h.jsx)(d,{reset:this.reset})]})]})}}]),n}(c.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.87e1e24e.chunk.js.map