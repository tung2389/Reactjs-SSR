(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AkcN:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-targetnumber",function(){var t=s("SLpT");return{page:t.default||t}}])},SLpT:function(t,e,s){"use strict";s.r(e);var a=s("0iUn"),n=s("sLSF"),u=s("MI3g"),i=s("a7VT"),l=s("AT/M"),r=s("Tit0"),c=s("q1tI"),m=s.n(c),o=(s("Q8kY"),{backgroundColor:"#FFD712",fontSize:60}),h={backgroundColor:"#39D1B4",fontSize:90},g={backgroundColor:"#FF0000",fontSize:30};function b(t,e){var s=Math.random();return Math.floor(s*(e-t+1)+t)}for(var d=b(10,60),f=b(10,60),y=b(10,60),v=b(10,60),k=b(10,60),S=b(10,60),E=b(10,60),j=b(10,60),O=b(10,60),p=[d,f,y,v,k,S,E,j,O],w=0,C=0;C<9;C++)w+=p[b(0,8)];var M=function(t){function e(t){var s;return Object(a.default)(this,e),(s=Object(u.default)(this,Object(i.default)(e).call(this,t))).state={Mytarget:w,sum:0,time:20,start:!1},s.getsum1=s.getsum1.bind(Object(l.default)(s)),s.getsum2=s.getsum2.bind(Object(l.default)(s)),s.getsum3=s.getsum3.bind(Object(l.default)(s)),s.getsum4=s.getsum4.bind(Object(l.default)(s)),s.getsum5=s.getsum5.bind(Object(l.default)(s)),s.getsum6=s.getsum6.bind(Object(l.default)(s)),s.getsum7=s.getsum7.bind(Object(l.default)(s)),s.getsum8=s.getsum8.bind(Object(l.default)(s)),s.getsum9=s.getsum9.bind(Object(l.default)(s)),s.Start=s.Start.bind(Object(l.default)(s)),s.countdown=s.countdown.bind(Object(l.default)(s)),s.restart=s.restart.bind(Object(l.default)(s)),s.Reset=s.Reset.bind(Object(l.default)(s)),s}return Object(r.default)(e,t),Object(n.default)(e,[{key:"Reset",value:function(){this.setState({sum:0,Mytarget:w,time:20,start:!1}),d=b(10,60),f=b(10,60),y=b(10,60),v=b(10,60),k=b(10,60),S=b(10,60),E=b(10,60),j=b(10,60),O=b(10,60),p=[d,f,y,v,k,S,E,j,O],w=0;for(var t=0;t<9;t++)w+=p[b(0,8)]}},{key:"componentDidUpdate",value:function(){this.state.sum>this.state.Mytarget||this.state.time<0?(alert("you lose"),this.Reset()):this.state.sum===this.state.Mytarget&&(alert("you win"),this.Reset())}},{key:"countdown",value:function(){this.state.start&&this.setState({time:this.state.time-1})}},{key:"componentDidMount",value:function(){setInterval(this.countdown,1e3)}},{key:"Start",value:function(){this.setState({start:!0})}},{key:"getsum1",value:function(){var t=this.state.sum+d;this.setState({sum:t})}},{key:"getsum2",value:function(){var t=this.state.sum+f;this.setState({sum:t})}},{key:"getsum3",value:function(){var t=this.state.sum+y;this.setState({sum:t})}},{key:"getsum4",value:function(){var t=this.state.sum+v;this.setState({sum:t})}},{key:"getsum5",value:function(){var t=this.state.sum+k;this.setState({sum:t})}},{key:"getsum6",value:function(){var t=this.state.sum+S;this.setState({sum:t})}},{key:"getsum7",value:function(){var t=this.state.sum+E;this.setState({sum:t})}},{key:"getsum8",value:function(){var t=this.state.sum+j;this.setState({sum:t})}},{key:"getsum9",value:function(){var t=this.state.sum+O;this.setState({sum:t})}},{key:"restart",value:function(){this.setState({start:!1}),alert("the game has been restart !"),this.Reset()}},{key:"render",value:function(){var t={visibility:this.state.start?"visible":"hidden"};return m.a.createElement("div",null,m.a.createElement("h1",{align:"center"},m.a.createElement("button",{onClick:this.Start,style:g},"Start")),m.a.createElement("h1",{align:"center"},m.a.createElement("button",{onClick:this.restart,style:g},"Restart")),m.a.createElement("h1",{align:"center"},"Time remaining: ",this.state.time),m.a.createElement("h1",{align:"center"},m.a.createElement("button",{style:h},this.state.Mytarget)),m.a.createElement("h1",{align:"center",style:t},m.a.createElement("button",{onClick:this.getsum1,style:o},d),m.a.createElement("button",{onClick:this.getsum2,style:o},f),m.a.createElement("button",{onClick:this.getsum3,style:o},y)),m.a.createElement("h1",{align:"center",style:t},m.a.createElement("button",{onClick:this.getsum4,style:o},v),m.a.createElement("button",{onClick:this.getsum5,style:o},k),m.a.createElement("button",{onClick:this.getsum6,style:o},S)),m.a.createElement("h1",{align:"center",style:t},m.a.createElement("button",{onClick:this.getsum7,style:o},E),m.a.createElement("button",{onClick:this.getsum8,style:o},j),m.a.createElement("button",{onClick:this.getsum9,style:o},O)),m.a.createElement("h1",{align:"center"},"Total sum:",this.state.sum))}}]),e}(c.Component);e.default=M}},[["AkcN",1,0]]]);