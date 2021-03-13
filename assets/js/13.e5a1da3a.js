(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(e,t,s){"use strict";s.r(t);var a=s(41),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"client-credentials-grant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-credentials-grant"}},[e._v("#")]),e._v(" Client Credentials Grant")]),e._v(" "),s("p",[e._v("When applications request an access token to access their own resources, not on behalf of a user.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The client_credentials grant should only be used by clients that can hold a secret. No Browser or Native Mobile Apps should be using this grant.")])]),e._v(" "),s("h3",{attrs:{id:"flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow"}},[e._v("#")]),e._v(" Flow")]),e._v(" "),s("p",[e._v("The client sends a "),s("strong",[e._v("POST")]),e._v(" to the "),s("code",[e._v("/token")]),e._v(" endpoint with the following body:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("grant_type")]),e._v(" must be set to "),s("code",[e._v("client_credentials")])]),e._v(" "),s("li",[s("strong",[e._v("client_id")]),e._v(" is the client identifier you received when you first created the application")]),e._v(" "),s("li",[s("strong",[e._v("client_secret")]),e._v(" is the client secret")]),e._v(" "),s("li",[s("strong",[e._v("scope")]),e._v(" is a string with a space delimited list of requested scopes. The requested scopes must be valid for the client.")])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("View sample client_credentials request")]),e._v(" "),s("p",[s("em",[e._v("Did you know?")]),e._v(" You can authenticate by passing the "),s("code",[e._v("client_id")]),e._v(" and "),s("code",[e._v("client_secret")]),e._v(" as a query string, or through basic auth.")]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Query String",active:""}},[s("div",{staticClass:"language-http request extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /token HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(' example.com\n\ngrant_type=client_credentials\n&client_id=xxxxxxxxxx\n&client_secret=xxxxxxxxxx\n&scope="contacts.read contacts.write"\n')])])])]),e._v(" "),s("code-block",{attrs:{title:"Basic Auth"}},[s("div",{staticClass:"language-http request extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /token HTTP/1.1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" example.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Authorization:")]),e._v(' Basic MTpzdXBlci1zZWNyZXQtc2VjcmV0\n\ngrant_type=client_credentials\n&scope="contacts.read contacts.write"\n')])])])])],1)],1),e._v(" "),s("p",[e._v("The authorization server will respond with the following response.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("token_type")]),e._v(" will always be "),s("code",[e._v("Bearer")])]),e._v(" "),s("li",[s("strong",[e._v("expires_in")]),e._v(" is the time the token will live in seconds")]),e._v(" "),s("li",[s("strong",[e._v("access_token")]),e._v(" is a JWT signed token and can be used to authenticate into the resource server")]),e._v(" "),s("li",[s("strong",[e._v("scope")]),e._v(" is a space delimited list of scopes the token has access to")])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("View sample client_credentials response")]),e._v(" "),s("div",{staticClass:"language-http request extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" application/json; charset=UTF-8\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" no-store\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Pragma:")]),e._v(" no-cache\n \n{\n  token_type: 'Bearer',\n  expires_in: 3600,\n  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDE3MDY0NjYsIm5iZiI6MTYwMTcwMjg2NiwiaWF0IjoxNjAxNzAyODY2LCJqdGkiOiJuZXcgdG9rZW4iLCJjaWQiOiJ0ZXN0IGNsaWVudCIsInNjb3BlIjoiIn0.KcXoCP6u9uhvtOoistLBskESA0tyT2I1SDe5Yn9iM4I',\n  scope: 'contacts.create contacts.read'\n}\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);