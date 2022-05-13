"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{6363:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a=t(885),s=t(2791),r=t(8989),o=t(6140),c="PhonebookForm_label__a86iP",i="PhonebookForm_input__oekwR",l="PhonebookForm_button__ftF0u",d=t(184);var u=function(){var e=(0,r.Tn)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],m=(0,r.wY)().data,h=(0,s.useState)(""),b=(0,a.Z)(h,2),f=b[0],x=b[1],_=(0,s.useState)(""),j=(0,a.Z)(_,2),p=j[0],v=j[1],k=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":x(a);break;case"number":v(a);break;default:return}},N=m&&m.find((function(e){return e.name===f})),C=m&&m.find((function(e){return e.number===p}));return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N?o.ZP.error("You already have this name in your phonebook"):C?o.ZP.error("You already have this number in your phonebook"):(t({name:f,number:p}),u&&o.ZP.success("New contact was added to you phonebook"),x(""),v(""))},children:[(0,d.jsxs)("label",{className:c,children:["Name",(0,d.jsx)("input",{className:i,type:"text",name:"name",value:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:k})]}),(0,d.jsxs)("label",{className:c,children:["Number",(0,d.jsx)("input",{className:i,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:k})]}),(0,d.jsx)("button",{className:l,type:"submit",children:"Add Contact"})]})})},m="ContactItem_element__G5Yf8",h="ContactItem_name__XjpNK",b="ContactItem_delete__jQlZo";var f=function(e){var n=e.contact,t=(0,r.Nt)(),s=(0,a.Z)(t,2),c=s[0],i=s[1].isLoading,l=n.id,u=n.name,f=n.number;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("tr",{className:m,children:[(0,d.jsxs)("td",{className:h,children:[u,": "]}),(0,d.jsx)("td",{children:f}),(0,d.jsx)("td",{children:(0,d.jsx)("button",{disabled:i,className:b,onClick:function(){c(l),o.ZP.success("Contact ".concat(u," successfully deleted!"))},children:i?".....":"delete"})})]},l)})},x=t(5048),_=t(7108),j="Contacts_table__KMVeF";var p=function(){var e=(0,r.wY)(),n=e.data,t=e.isFetching,a=(0,x.v9)((function(e){return e.filter.filter})),s=null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(0,d.jsxs)(d.Fragment,{children:[t&&(0,d.jsx)(_.a,{}),(0,d.jsx)("table",{className:j,children:(0,d.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(e){return(0,d.jsx)(f,{contact:e},e.id)}))})})]})},v="Filter_filter__vxThR",k="Filter_input__N7T3z",N=t(1728),C=function(){var e=(0,x.I0)();return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("label",{children:"Find contacts by name "}),(0,d.jsx)("input",{className:k,type:"text",onChange:function(n){var t=n.currentTarget.value;e((0,N.x)(t))}})]})},w={phonebook:"PhonebookView_phonebook__EjkB1",form:"PhonebookView_form__e2V4H"};function y(){return(0,d.jsxs)("div",{className:w.phonebook,children:[(0,d.jsxs)("div",{className:w.form,children:[(0,d.jsx)("h2",{children:"Add new contact"}),(0,d.jsx)(u,{})]}),(0,d.jsxs)("div",{className:w.contactBlock,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(C,{}),(0,d.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=363.6e59b065.chunk.js.map