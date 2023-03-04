"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[162],{9162:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,i,o,a,s,c,u,d,l,m=t(4942),h=t(1413),f=t(9439),p=t(9434),g=t(2791),x=t(168),b=t(6444),j=b.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: ",";\n\n  @media (min-width: 768px) {\n    max-width: ",";\n  }\n"])),(function(n){return n.theme.spacing(64)}),(function(n){return n.theme.spacing(90)})),w=b.ZP.label(i||(i=(0,x.Z)(["\n  font-size: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.spacing(2)})),Z=b.ZP.input(o||(o=(0,x.Z)(["\n  border: 1px solid ",";\n  border-radius: ",";\n  color: ",";\n  font-size: ",";\n  height: ",";\n  margin-bottom: ",";\n  padding: ",";\n  outline: none;\n\n  &::placeholder {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.fontSizes.small})),v=b.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  max-width: 150px;\n  width: 100%;\n  margin-bottom: ",";\n  padding-block: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  &:hover {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.small})),y=t(5984),C=t(6052),k=function(n){return n.contacts.filter},z={getFilter:k,getLoading:function(n){return n.contacts.isLoading},getFilteredContacts:(0,t(6916).P1)([function(n){return n.contacts.items},k],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},F=function(){return{isLoading:(0,p.v9)(z.getLoading),filter:(0,p.v9)(z.getFilter),contacts:(0,p.v9)(z.getFilteredContacts)}},P=t(184),L=function(){var n=(0,g.useState)({name:"",number:""}),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=F().contacts,o=(0,p.I0)(),a=function(n){var e=n.currentTarget,i=e.name,o=e.value;r((0,h.Z)((0,h.Z)({},t),{},(0,m.Z)({},i,o)))},s=function(){r({name:"",number:""})},c=t.name,u=t.number;return(0,P.jsxs)(j,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=t.name.toLowerCase().split(" ").map((function(n){return n[0].toUpperCase()+n.substring(1)})).join(" ");if(i.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(e," is already in contacts")),void s();o((0,C.uK)((0,h.Z)((0,h.Z)({},t),{},{name:e,id:(0,y.x0)()}))),s()},children:[(0,P.jsx)(w,{htmlFor:"name",children:"Name"}),(0,P.jsx)(Z,{value:c,placeholder:"Rosie Simpson",onChange:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)(w,{htmlFor:"number",children:"Number"}),(0,P.jsx)(Z,{value:u,onChange:a,placeholder:"385-928-7370",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsx)(v,{type:"submit",children:"Add contact"})]})},S=b.ZP.ul(s||(s=(0,x.Z)(["\n  max-width: ",";\n\n  @media (min-width: 768px) {\n    max-width: ",";\n  }\n"])),(function(n){return n.theme.spacing(64)}),(function(n){return n.theme.spacing(90)})),_=b.ZP.li(c||(c=(0,x.Z)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n"]))),A=b.ZP.button(u||(u=(0,x.Z)(["\n  padding-block: ",";\n  padding-inline: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  &:hover {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.small})),D=t(8402),I=function(){return(0,P.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,P.jsx)(D.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"140",visible:!0})})},T=function(){var n=F(),e=n.isLoading,t=n.contacts,r=(0,p.I0)();if(t.length)return(0,P.jsx)(P.Fragment,{children:e?(0,P.jsx)(I,{}):(0,P.jsx)(S,{children:t.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,P.jsxs)(_,{children:[(0,P.jsxs)("p",{children:[t,": ",i]}),(0,P.jsx)(A,{type:"button",onClick:function(){return r((0,C.GK)(e))},children:"Delete"})]},e)}))})})},K=t(8861),N=b.ZP.label(d||(d=(0,x.Z)(["\n  display: inline-block;\n  font-size: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.spacing(2)})),q=b.ZP.input(l||(l=(0,x.Z)(["\n  display: block;\n  width: ",";\n  height: ",";\n  margin-bottom: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n\n  @media (min-width: 768px) {\n    width: ",";\n  }\n"])),(function(n){return n.theme.spacing(64)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.spacing(90)})),W=t(1538),B=function(){var n=(0,p.I0)(),e=F().filter;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(N,{htmlFor:"filter",children:"Find contacts by name"}),(0,P.jsx)(q,{type:"text",name:"filter",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,W.T)(t))}})]})},E=t(5474),G=t(803),J=function(){var n=F(),e=n.isLoading,t=n.contacts,r=(0,p.I0)();return(0,g.useEffect)((function(){r((0,C.K2)())}),[r]),(0,P.jsx)(E.x,{p:4,as:"section",children:(0,P.jsxs)(K.W,{children:[(0,P.jsx)(G.D,{fontSize:32,mb:3,as:"h1",children:"Phonebook"}),(0,P.jsx)(L,{}),(0,P.jsx)(G.D,{fontSize:24,mb:3,as:"h2",children:"Contacts"}),e?(0,P.jsx)(I,{}):(0,P.jsx)(P.Fragment,{children:0!==t.length?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(B,{}),(0,P.jsx)(T,{})]}):(0,P.jsx)("p",{children:"There are no contacts."})})]})})}}}]);
//# sourceMappingURL=162.4cc1a4e2.chunk.js.map