(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={notification:"Notification_notification__36TJg"}},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),o=n.n(i),s=n(4),r=n(5),d=n(6),l=n(12),b=n(11),u=n(7),j=n.n(u),h=n(0),f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.totalFeedback,i=e.positiveFeedback;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:j.a.feedbacksList,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",a]})]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})},v=n(8),x=n.n(v),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){var t=e[0].toUpperCase()+e.slice(1);return Object(h.jsx)("button",{className:x.a.button,name:e,onClick:n,children:t},e)}))})},k=n(9),p=n.n(k),g=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:p.a.titleText,children:t}),n]})},m=n(10),F=n.n(m);var _=function(e){var t=e.message;return Object(h.jsx)("h2",{className:F.a.notification,children:t})},T=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleChange=function(t){var n=t.target.textContent.toLowerCase();e.setState((function(e){for(var t in e)if(t===n)return Object(s.a)({},t,e[t]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=0;for(var t in this.state)e+=this.state[t];return e}},{key:"countPositiveFeedbackPercentage",value:function(e){return 0===e?0:Math.round(100*this.state.good/e)}},{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e),n=this.state,a=n.good,c=n.neutral,i=n.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{title:"Please leave your feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.handleChange})}),Object(h.jsx)(g,{title:"Statistics",children:e?Object(h.jsx)(f,{good:a,neutral:c,bad:i,totalFeedback:e,positiveFeedback:t}):Object(h.jsx)(_,{message:"No feedback given"})})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={feedbacksList:"Statistics_feedbacksList__2CNlB"}},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__3bwTB"}},9:function(e,t,n){e.exports={titleText:"SectionTitle_titleText__-GYfj"}}},[[18,1,2]]]);
//# sourceMappingURL=main.f1ecd39b.chunk.js.map