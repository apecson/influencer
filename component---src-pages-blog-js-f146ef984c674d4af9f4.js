(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return v});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=(a(141),a(152)),c=a.n(l),u=a(151),s=a.n(u),d=a(214),m=a.n(d),p=a(146),f=a(158),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.allContentfulBlogPost.edges");return o.a.createElement(p.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(s.a,{title:e}),o.a.createElement("div",{className:m.a.hero},"Blog"),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent articles"),o.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return o.a.createElement("li",{key:t.slug},o.a.createElement(f.a,{article:t}))})))))},t}(o.a.Component);t.default=g;var v="2680190156"},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(140),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(142),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},143:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},144:function(e,t,a){},145:function(e,t,a){e.exports={navigation:"navigation-module--navigation--3wdaI",navigationItem:"navigation-module--navigationItem--2gSPx"}},146:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(141),c=(a(144),function(e){var t=e.children;return o.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),u=a(145),s=a.n(u),d=function(){return o.a.createElement("nav",{role:"navigation"},o.a.createElement("ul",{className:s.a.navigation},o.a.createElement("li",{className:s.a.navigationItem},o.a.createElement(l.Link,{to:"/"},"Home")),o.a.createElement("li",{className:s.a.navigationItem},o.a.createElement(l.Link,{to:"/blog/"},"Blog"))))},m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/gatsby-contentful-starter/",o.a.createElement(c,null,o.a.createElement(d,null),t)},t}(o.a.Component);t.a=m},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(141),o=a(150),l=a.n(o),c=a(159),u=a.n(c);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:u.a.preview},r.a.createElement(l.a,{alt:"",fluid:t.heroImage.fluid}),r.a.createElement("h3",{className:u.a.previewTitle},r.a.createElement(i.Link,{to:"/blog/"+t.slug},t.title)),r.a.createElement("small",null,t.publishDate),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))}},159:function(e,t,a){e.exports={previewTitle:"article-preview-module--previewTitle--Ov6Ba",tag:"article-preview-module--tag--1RLpq"}},214:function(e,t,a){e.exports={hero:"blog-module--hero--TCejO"}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f146ef984c674d4af9f4.js.map