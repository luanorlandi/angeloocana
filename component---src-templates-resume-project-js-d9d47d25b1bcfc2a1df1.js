webpackJsonp([0xdace0953a2c5],{453:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0;var r=l(["\n  padding-bottom: ",";\n"],["\n  padding-bottom: ",";\n"]),u=l(["\n  margin-top: 1rem;\n\n  dt, dd {\n    display: inline-block;\n  }\n\n  dt: {\n  }\n\n  dt:after {\n    content: ': ';\n    margin-right: ",";\n  }\n"],["\n  margin-top: 1rem;\n\n  dt, dd {\n    display: inline-block;\n  }\n\n  dt: {\n  }\n\n  dt:after {\n    content: ': ';\n    margin-right: ",";\n  }\n"]),d=n(2),i=a(d),s=n(4),o=a(s),c=n(30),f=a(c),m=n(26),g=a(m),p=n(7),b=n(6),h=a(b),E=n(63),j=a(E),q=n(15),k=a(q),R=n(35),_=a(R),v=n(11),y=h.default.header(r,function(e){var t=e.theme;return t.scale(1)}),M=function(e,t){return[{link:"/"+e+"/resume/jobs-and-clients/",label:"resume.jobsAndClients"},{link:"/"+e+"/resume/jobs-and-clients"+t.slug,label:t.name}]},x=h.default.dl(u,function(e){var t=e.theme;return t.scale(-2)}),C=function(e){return e.link?i.default.createElement(x,null,i.default.createElement(p.FormattedMessage,{id:"resume.project.link",tagName:"dt"}),i.default.createElement("dd",null,i.default.createElement(_.default,{href:e.link,target:"_blank"},e.link))):null},F=function(e){return(0,v.head)(e)-(0,v.last)(e)+1},w=function(e){var t=(0,v.head)(e),n=(0,v.last)(e),a=t===n?t:t+"/"+n;return[i.default.createElement(x,null,i.default.createElement(p.FormattedMessage,{id:"resume.project.years",tagName:"dt",values:{nYears:F(e)}}),i.default.createElement("dd",null,a))]},N=function(e){return e.technologies?i.default.createElement(j.default,{technologies:e.technologies}):null},Q=function(e){var t=e.pathContext,n=t.job,a=t.project,l=e.data.site.siteMetadata.resume.menu,r=a.description;return i.default.createElement(g.default,{menu:l,selectedPage:"/resume/jobs-and-clients/",breadCrumb:M(e.intl.locale,n)},i.default.createElement(p.FormattedMessage,{id:"resume"},function(e){return i.default.createElement(k.default,{title:e+" - "+n.name+" - "+a.name,meta:[{name:"description",content:r}]})}),i.default.createElement(y,null,i.default.createElement(f.default,null,a.name)),C(a),w(a.years),N(a))};Q.propTypes={intl:o.default.object.isRequired,pathContext:o.default.shape({project:o.default.shape({name:o.default.string.isRequired,slug:o.default.string.isRequired,technologies:o.default.array.isRequired}).isRequired,job:o.default.shape({name:o.default.string.isRequired,slug:o.default.string.isRequired}).isRequired}).isRequired,data:o.default.object.isRequired},t.default=(0,p.injectIntl)(Q),e.exports=t.default},495:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),r=a(l),u=n(453),d=a(u),i=n(13),s=(a(i),function(e){return r.default.createElement(d.default,e)});t.default=s;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-resume-project-js-d9d47d25b1bcfc2a1df1.js.map