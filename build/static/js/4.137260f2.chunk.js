(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{102:function(e,t,a){e.exports={Auth:"Auth_Auth__1Zul_"}},103:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a(5),l=a(6),r=a(8),u=a(7),o=a(9),s=a(0),c=a.n(s),d=a(14),p=a(18),h=a(34),m=a(97),v=a(102),g=a.n(v),f=a(15),b=a(42),I=a(3),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},a.switchAuthModeHandler=function(){a.setState((function(e){return{isSignup:!e.isSignup}}))},a.inputChangedHandler=function(e,t){var i=Object(I.b)(a.state.controls,Object(n.a)({},t,Object(I.b)(a.state.controls[t],{value:e.target.value,valid:Object(I.a)(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:i});var l=!0;for(var r in i)l=i[r].valid&&l;a.setState({orderForm:i,formIsValid:l})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignup)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return c.a.createElement(m.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,errorId:t.config.elementConfig.placeholder,changed:function(a){return e.inputChangedHandler(a,t.id)}})}));this.props.loading&&(n=c.a.createElement(b.a,null));var i=null;return this.props.isAuthenticated&&(i=c.a.createElement(p.a,{to:this.props.authRedirectPath})),c.a.createElement("div",{className:g.a.Auth},i,this.props.error?c.a.createElement("p",null,this.props.error.message):null,c.a.createElement("form",{onSubmit:this.submitHandler},n,c.a.createElement(h.a,{btnType:"Success"},"SUBMIT")),c.a.createElement(h.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"}," SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"," "))}}]),t}(s.Component);t.default=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(f.b(t,a,n))},onSetAuthRedirectPath:function(){return e(f.j("/"))}}}))(y)},97:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(98),r=a.n(l);t.a=function(e){var t=null,a=[r.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid);var n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=i.a.createElement("p",null," Please key in '",e.errorId,"'")),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",{className:a.join(" "),value:e.value})}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),t,n)}},98:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}}}]);
//# sourceMappingURL=4.137260f2.chunk.js.map