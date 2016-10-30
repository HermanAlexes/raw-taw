if (self.CavalryLogger) { CavalryLogger.start_js(["\/hYxz"]); }

__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={createSpec:function j(k){return {displayName:k.displayName,propTypes:{behaviors:h.object,className:h.string,modal:h.bool,autohide:h.number,width:h.number,titleID:h.string,causalElement:h.object,causalElementRef:h.func,shown:h.bool,layerHideOnBlur:h.bool,hideOnEscape:h.bool,onToggle:h.func,fixedTopPosition:h.number},createLayer:function l(m){var n=this.props.className,o=babelHelpers['extends']({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:n?n.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},k||{}),p=babelHelpers['extends']({},k.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)p.LayerHideOnBlur=c('LayerHideOnBlur');if(this.props.hideOnEscape===true)p.LayerHideOnEscape=c('LayerHideOnEscape');o.addedBehaviors=this.enumerateBehaviors(p);var q=new (c('DialogX'))(o,m);q.conditionShow(this.props.shown);return q;},receiveProps:function l(m,n){this.updateBehaviors(n.behaviors,m.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(m.shown);this.layer.setWidth(m.width);m.shown&&this.layer.updatePosition();}},_getCausalElement:function l(){var m;if(this.props.causalElementRef){m=c('ReactDOM').findDOMNode(this.props.causalElementRef());}else m=this.props.causalElement;return m;}};}};f.exports=i;}),null);
__d('PopoverMenuContextMinWidth',['cx','CSS','Style','shield'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};i.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateWidth,this));var j=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateWidth();};i.prototype._updateWidth=function(){'use strict';var j=this._menu.getRoot(),k=this._popoverMenu.getTriggerElem(),l=k.offsetWidth;c('Style').set(j,'min-width',l+'px');c('CSS').conditionClass(j,"_575s",l>=j.offsetWidth);};Object.assign(i.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();this._triggerElem=j.getTriggerElem();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};i.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateBorder,this));var j=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateBorder();};i.prototype._updateBorder=function(){'use strict';var j=this._menu.getRoot(),k=this._triggerElem.offsetWidth,l=Math.max(j.offsetWidth-k,0);c('Style').set(this._shortBorder,'width',l+'px');};i.prototype._renderShortBorder=function(j){'use strict';this._shortBorder=c('DOM').create('div',{className:"_54hx"});c('DOM').appendContent(j,this._shortBorder);c('CSS').addClass(j,"_54hy");};i.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){c('DOM').remove(this._shortBorder);this._shortBorder=null;c('CSS').removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};i.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(i.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('ReactSelectorUtils',['React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={processMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=void 0,n=c('React').Children.map(j,function(o){if(o){var p=o.props.value===k;o=c('React').cloneElement(o,{selected:p});if(p)m=o;return o;}});return {items:n,selectedItem:m};},processMultiMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=[],n=j;if(k)n=c('React').Children.map(j,function(o){if(o){var p=k.some(function(q){return q===o.props.value;});o=c('React').cloneElement(o,{selected:p});if(p)m.push(o);return o;}});return {items:n,selectedItems:m};}};f.exports=h;}),null);
__d('AbstractSelector.react',['cx','invariant','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','React','ReactSelectorUtils','intlList','joinClasses'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;function k(m,n,o){if(m[n]==null)return;var p=Array.isArray(m[n]);if(m.multiple){if(!p)return new Error('You are trying to set a single value for `'+n+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(p)return new Error('You are trying to set an array of values for `'+n+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var l=c('React').createClass({displayName:'AbstractSelector',propTypes:{config:j.object.isRequired,alignh:j.oneOf(['left','center','right']),name:j.string,overlappingborder:j.bool,onChange:j.func,disabled:j.bool,maxheight:j.number,multiple:j.bool,defaultLabel:j.string,defaultValue:k,value:k,initialValue:k},getInitialState:function m(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function m(n){!(this.refs&&this.refs.popover)?i(0):void 0;this._internalChange=true;this.refs.popover.getMenu().setValue(n);this._internalChange=false;},onChange:function m(n,o){if(this._internalChange)return;if(this.props.value==null){var p=null;if(this.props.multiple){p=o.map(function(q){return q.value;});}else p=o.value;this.setState({value:p});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(o);},componentWillReceiveProps:function m(n){if(n.value!=null){this.setState({value:n.value});}else if(this.props.multiple!==n.multiple)this.setState({value:n.multiple?[this.state.value]:this.state.value[0]});},render:function m(){var n=this.props.config,o=!this.props.multiple?c('ReactSelectorUtils').processMenuItems(this.props.children,this.state.value):c('ReactSelectorUtils').processMultiMenuItems(this.props.children,this.state.value),p=c('React').cloneElement(n.menu,{children:o.items,className:c('joinClasses')("_575t",n.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),q='',r=null;if(!this.props.multiple){var s=o.selectedItem;q=s.props.label||s.props.children;if(s.props.icon)r=c('React').cloneElement(s.props.icon,{});}else{var t=o.selectedItems;if(!t.length){q=this.props.defaultLabel;}else q=c('intlList')(t.map(function(ba){return ba.props.children;}),c('intlList').CONJUNCTIONS.NONE);}var u={label:q,disabled:this.props.disabled};if(r)u.image=r;var v=c('React').cloneElement(n.button,u),w=[c('ContextualLayerAutoFlip')];if(n.layerBehaviors)w=w.concat(n.layerBehaviors);var x=[c('PopoverMenuContextMinWidth')];if(this.props.overlappingborder)x.push(c('PopoverMenuOverlappingBorder'));var y=null;if(this.props.multiple){var z=this.props.name+'[]',aa;if(this.state.value)aa=this.state.value.map(function(ba){return (c('React').createElement('input',{key:ba,type:'hidden',name:z,value:ba}));});y=c('React').createElement('div',null,aa);}else y=c('React').createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle',name:null}),c('React').createElement(c('PopoverMenu.react'),{ref:'popover',menu:p,alignh:this.props.alignh,layerBehaviors:w,behaviors:x,disabled:this.props.disabled},v),y));},showMenu:function m(){!this.isMounted()?i(0):void 0;this.refs.popover.showPopover();},hideMenu:function m(){!this.isMounted()?i(0):void 0;this.refs.popover.hidePopover();}});f.exports=l;}),null);
__d('Spotlight',['csx','cx','Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','joinClasses','mixin'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('classWithMixins')(c('Layer'),c('mixin')(c('ArbiterMixin'))));k=j&&j.prototype;function l(n,o){'use strict';k.constructor.call(this,n,o);this.stageMinSize=new (c('Vector'))(0,0);this.stagePadding=new (c('Vector'))(0,0);}l.prototype._buildWrapper=function(n,o){'use strict';var p=c('joinClasses')("_n8 _3qx",n.rootClassName);return (c('JSXDOM').div({className:p},c('JSXDOM').div({className:"_n9"},o)));};l.prototype._getDefaultBehaviors=function(){'use strict';return k._getDefaultBehaviors.call(this).concat([m,c('LayerAutoFocus'),c('LayerTabIsolation'),c('ModalLayer')]);};l.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=c('DOM').find(this.getRoot(),"div._n3");return this._content;};l.prototype.configure=function(n){'use strict';if(n.stageMinSize)this.stageMinSize=n.stageMinSize;if(n.stagePadding)this.stagePadding=n.stagePadding;};l.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};l.prototype.updatePermalink=function(n){'use strict';this.inform('permalinkchange',n);};Object.assign(l.prototype,{stageMinSize:null,stagePadding:null});function m(n){'use strict';this._layer=n;}m.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(n,o){if(n==='show'){c('Arbiter').inform('layer_shown',{type:'Spotlight'});}else c('Arbiter').inform('layer_hidden',{type:'Spotlight'});});};m.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(m.prototype,{_subscription:null});f.exports=l;}),null);
__d('Spotlight.react',['LayerHideOnBlur','LayerHideOnEscape','ReactLayer','Spotlight'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('ReactLayer').createClass({getDefaultEnabledBehaviors:function i(){return {hideOnBlur:c('LayerHideOnBlur'),hideOnEscape:c('LayerHideOnEscape')};},createLayer:function i(j){var k=this.enumerateBehaviors(this.props.behaviors),l={addedBehaviors:k,rootClassName:this.props.rootClassName},m=new (c('Spotlight'))(l,j);m.conditionShow(this.props.shown);if(this.props.onBeforeHide)m.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)m.subscribe('hide',this.props.onHide);return m;},receiveProps:function i(j){this.layer.conditionShow(j.shown);}});f.exports=h;}),null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("OK")})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};f.exports=m;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('XUIDialogBody.react',['cx','React','joinClasses','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_4-i2"+(!this.props.useCustomPadding?' '+"_57_a":'');return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m),display:'block',size:this.props.fontSize}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),useCustomPadding:k.bool};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_5a8u"+(this.props.fullBleedBorder?' '+"_27qq":'');return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m)}),c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,this.props.leftContent),c('React').createElement('div',null,this.props.children)))));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),fullBleedBorder:k.bool,leftContent:k.object};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=445,j={show:function k(l,m,n,o){var p=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});return this.showEx(l,m,p,n,o);},showConfirm:function k(l,m,n,o){var p=false,q=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:function s(){p=false;}}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',className:o&&o.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function s(){p=true;}}));function r(){n(p);}return this.showEx(l,m,q,r,o);},showEx:function k(l,m,n,o,p){p=p||{};var q=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerRefocusOnHide')];if(p.hideOnBlur!==false)q.push(c('LayerHideOnBlur'));if(p.useReactFocusBehavior)q.push(c('LayerAutoFocusReact'));var r={width:p.width||i,xui:true,addedBehaviors:q,causalElement:p.causalElement};if(m)m=c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:p.showCloseButton!==false},m);if(n)n=c('React').createElement(c('XUIDialogFooter.react'),{'data-testid':'simple_xui_dialog_footer'},n);var s=c('React').createElement('div',null,m,c('React').createElement(c('XUIDialogBody.react'),null,l),n),t=new (c('DialogX'))(r,s);if(o)t.subscribe('hide',o);t.show();return t;}};f.exports=j;}),null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('ReactLayer').createClass(c('AbstractDialog.react').createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:c('LayerFadeOnShow')}}));f.exports=h;}),null);
__d('XUISelectorButton.react',['invariant','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';!!this.props.theme?h(0):void 0;return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{theme:'dark'})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUISelector.react',['invariant','AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactXUIMenu','XUISelectorButton.react'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('ReactXUIMenu').SelectableMenu,j=c('ReactXUIMenu').SelectableItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:k.array,maxheight:k.number,multiple:k.bool,disabled:k.bool,haschevron:k.bool,maxwidth:k.number,size:k.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:k.bool,use:k.oneOf(['default','special','confirm'])},statics:{getButtonSize:function m(n){return n.size||'medium';}},getDefaultProps:function m(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function m(){var n,o=[];c('React').Children.forEach(this.props.children,function(q){if(q)o.push(q);});if(o[0]&&o[0].type===c('XUISelectorButton.react')){n=o[0];o=o.slice(1);}else n=c('React').createElement(c('XUISelectorButton.react'),{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var p={button:n,menu:c('React').createElement(i,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([c('ContextualLayerPositionClassOnContext')])};return (c('React').createElement(c('AbstractSelector.react'),babelHelpers['extends']({},this.props,{ref:'abstractSelector',config:p}),o));},showMenu:function m(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.showMenu();},hideMenu:function m(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.hideMenu();}});l.Option=j;f.exports=l;}),null);