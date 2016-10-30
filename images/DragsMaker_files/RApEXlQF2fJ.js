if (self.CavalryLogger) { CavalryLogger.start_js(["iLCoc"]); }

__d("FeedbackReactionType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,CONFUSED:10,DOROTHY:11,TOTO:12,SELFIE:13};}),null);
__d('AdsPlayable.react',['cx','ix','CenteredContainer.react','Image.react','Link.react','FBOverlayBase.react','FBOverlayContainer.react','FBOverlayElement.react','React','XUIText.react'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';var n=c('React').createElement(c('Image.react'),{className:"_51o6",src:this.props.iconImage?this.props.iconImage:i('/images/calltoaction/videoendscreen/play_64dp.png')});if(this.props.onPlayClick)n=c('React').createElement(c('Link.react'),{className:"_51o7",onClick:this.props.onPlayClick},n);var o=c('React').createElement(c('CenteredContainer.react'),{vertical:true},n);if(this.props.iconText)o=c('React').createElement(c('CenteredContainer.react'),{vertical:true},n,c('React').createElement(c('XUIText.react'),{display:'block',size:'medium'},this.props.iconText));return (c('React').createElement(c('FBOverlayContainer.react'),this.props,c('React').createElement(c('FBOverlayBase.react'),null,this.props.children),c('React').createElement(c('FBOverlayElement.react'),null,o)));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={iconImage:l.object,iconText:l.string,onPlayClick:l.func};f.exports=m;}),null);
__d("XAdsVideoPlayerController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/x\/video_player\/",{video_id:{type:"String",required:true},video_container_id:{type:"String",required:true},width:{type:"Int",required:true},height:{type:"Int",required:true},show_controls:{type:"Bool",defaultValue:false},forcehd:{type:"Bool",defaultValue:false},show_captions_default:{type:"Bool",defaultValue:false},force_flash:{type:"Bool",defaultValue:false}});}),null);
__d('AdsVideoPlayer.react',['cx','fbt','AdsPlayable.react','AsyncRequest','CenteredContainer.react','FBOverlayBase.react','FBOverlayContainer.react','FBOverlayElement.react','Link.react','React','UserAgent','VideoPlayerReason','XAdsVideoPlayerController','XUISpinner.react','guid','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes,m=1000;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.playVideo=function(){if(this.props.disableVideoPlay)return;if(!this.isVideoLoaded())return;if(this.state.playerAPI){this.state.playerAPI.play(c('VideoPlayerReason').USER);this.setState({playing:true});}}.bind(this);this.closePlayer=function(){this.pause();this.seek(0);this.setState({playing:false});this.props.onPlayerClosed&&this.props.onPlayerClosed();}.bind(this);this.state={implementationUnavailable:false,playing:false,playerAPI:null};this.$AdsVideoPlayer1=null;this.$AdsVideoPlayer2='ads_video_'+c('guid')();}n.prototype.componentDidMount=function(){this.$AdsVideoPlayer3(this.props);};n.prototype.componentWillReceiveProps=function(o){var p=o.videoID,q=o.playerWidth,r=o.playerHeight,s=o.rotation,t=o.timePositionInMs;if(p!==this.props.videoID||q!==this.props.playerWidth||r!==this.props.playerHeight){this.closePlayer();this.setState({playerAPI:null});this.$AdsVideoPlayer3(o);}else if(t!=null&&this.props.timePositionInMs!==t&&this.state.playerAPI)this.state.playerAPI.seek(t/m);if(s!=null&&s!==this.props.rotation)if(this.state.playerAPI)this.state.playerAPI.setRotation(s);};n.prototype.componentDidUpdate=function(o){if(this.props.autoPlay&&(this.props.autoPlayStart!==o.autoPlayStart||this.props.autoPlayStop!==o.autoPlayStop))this.autoPlayVideo();};n.prototype.componentWillUnmount=function(){this.pause();this.seek(0);if(this.state.playerAPI)this.state.playerAPI.abortLoading();if(this.state.playerAPI)this.state.playerAPI.detachRootNode();};n.prototype.$AdsVideoPlayer3=function(o){if(this.props.loadVideoPlayer){this.props.loadVideoPlayer(this.$AdsVideoPlayer2,this,o);}else this.$AdsVideoPlayer4(o);};n.prototype.$AdsVideoPlayer4=function(o){var p=o.videoID,q=o.playerWidth,r=o.playerHeight,s=c('XAdsVideoPlayerController').getURIBuilder().setString('video_id',p).setString('video_container_id',this.$AdsVideoPlayer2).setInt('width',q).setInt('height',r).setBool('show_controls',this.props.showControls).setBool('forcehd',this.props.forceHD).setBool('show_captions_default',this.props.showCaptionsByDefault).setBool('force_flash',this.props.forceFlash).getURI();this.request=new (c('AsyncRequest'))().setMethod('GET').setRelativeTo(this).setURI(s).setReadOnly(true).setAllowCrossPageTransition(true).send();};n.prototype.isImplementationUnavailable=function(){if(this.state.playerAPI)this.setState({implementationUnavailable:this.state.playerAPI.isImplementationUnavailable()});return this.state.implementationUnavailable;};n.prototype.autoPlayVideo=function(){if(!this.state.playerAPI)return;if(this.props.autoPlayStart||this.props.autoPlayStart===0){this.state.playerAPI.seek(this.props.autoPlayStart/m);clearTimeout(this.$AdsVideoPlayer1);}this.state.playerAPI.play(c('VideoPlayerReason').AUTOPLAY);this.setState({playing:true});if(this.props.autoPlayStop)this.$AdsVideoPlayer1=setTimeout(function(){if(this.state.playerAPI)this.state.playerAPI.pause(c('VideoPlayerReason').AUTOPLAY);}.bind(this),this.props.autoPlayStop-(this.props.autoPlayStart||0));};n.prototype.getCurrentTimePosition=function(){return this.state.playerAPI?this.state.playerAPI.getCurrentTimePosition():null;};n.prototype.isVideoLoaded=function(){var o=!!this.state.playerAPI;!o;if(this.state.playerAPI&&this.state.playerAPI.isState('fallback'))return false;return o;};n.prototype.seek=function(o){if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.seek(o/m);};n.prototype.pause=function(){var o=arguments.length<=0||arguments[0]===undefined?c('VideoPlayerReason').USER:arguments[0];if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.pause(o);};n.prototype.mute=function(){if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.mute();};n.prototype.render=function(){var o=false,p=!this.state.playerAPI;if(this.state.playing){o=this.state.playerAPI;}else if(this.state.playerAPI&&this.state.playerAPI.isState('fallback'))o=true;var q=null;if(this.props.autoPlay){q=c('React').createElement('div',{className:o||p?'invisible_elem':null,style:{height:this.props.playerHeight,width:this.props.playerWidth}},this.props.children);}else q=c('React').createElement(c('AdsPlayable.react'),{className:o||p?'invisible_elem':null,iconImage:this.props.iconImage,iconText:this.props.iconText,onPlayClick:this.playVideo},this.props.children);var r=null;if(this.props.showControls&&!this.props.hideCloseButton)r=c('React').createElement(c('FBOverlayElement.react'),{horizontal:'left',vertical:'top'},c('React').createElement(c('Link.react'),{className:"_3-9a"+(' '+"_2phz")+(' '+"_4-xh")+(!o?' '+"hidden_elem":''),onClick:this.closePlayer},i._("Close video player")));var s=void 0;if(p)s=c('React').createElement(c('FBOverlayElement.react'),null,c('React').createElement(c('CenteredContainer.react'),{horizontal:true,vertical:true},c('React').createElement(c('XUISpinner.react'),{size:'large'})));var t=c('UserAgent').isBrowser('IE');return (c('React').createElement(c('FBOverlayContainer.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_4-xg")}),c('React').createElement(c('FBOverlayElement.react'),null,c('React').createElement('div',{className:o||t?null:'invisible_elem',id:this.$AdsVideoPlayer2})),s,c('React').createElement(c('FBOverlayBase.react'),null,q),r));};n.prototype.onVideoLoaded=function(){if(this.props.onVideoLoaded)this.props.onVideoLoaded();if(!this.state.playerAPI)return;if(this.props.onUpdateMetadata)this.state.playerAPI.addListener('updateMetadata',this.props.onUpdateMetadata);if(this.props.onBeginPlayback)this.state.playerAPI.addListener('beginPlayback',this.props.onBeginPlayback);if(this.props.onFinishPlayback)this.state.playerAPI.addListener('finishPlayback',this.props.onFinishPlayback);if(this.props.onPausePlayback)this.state.playerAPI.addListener('pausePlayback',this.props.onPausePlayback);if(this.props.onSeekEnd)this.state.playerAPI.addListener('seekEnd',this.props.onSeekEnd);if(this.props.autoPlay)this.autoPlayVideo();};n.prototype.getPlaybackDuration=function(){if(!this.state.playerAPI)return null;return this.state.playerAPI.getPlaybackDuration();};n.propTypes={autoPlay:l.bool,autoPlayStart:l.number,autoPlayStop:l.number,disableVideoPlay:l.bool,forceFlash:l.bool,forceHD:l.bool,hideCloseButton:l.bool,iconImage:l.object,iconText:l.string,loadVideoPlayer:l.func,playerHeight:l.number.isRequired,playerWidth:l.number.isRequired,rotation:l.number,showCaptionsByDefault:l.bool,showControls:l.bool,timePositionInMs:l.number,videoID:l.string.isRequired,onBeginPlayback:l.func,onFinishPlayback:l.func,onPausePlayback:l.func,onPlayerClosed:l.func,onSeekEnd:l.func,onUpdateMetadata:l.func,onVideoLoaded:l.func};n.defaultProps={showControls:true,showCaptionsByDefault:true,hideCloseButton:false,forceFlash:false};n.invokeVideoLoaded=function(o,p){o.setState({implementationUnavailable:p.isImplementationUnavailable()});if(p.isState('loading')){o.stateChangeListener=p.addListener('stateChange',function(){if(!p.isState('loading')){if(o.state&&o.state.playerAPI)return;o.setState({playerAPI:p},o.onVideoLoaded);if(o.stateChangeListener)o.stateChangeListener.remove();}});}else o.setState({playerAPI:p},o.onVideoLoaded);};f.exports=n;}),null);
__d('InsightsTabbedSection.react',['React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.getTabHref=function(l){'use strict';return l.tabHref;};k.getKey=function(l){'use strict';return l.sectionKey;};k.getTitle=function(l){'use strict';return l.title;};k.getSubtitle=function(l){'use strict';return l.subtitle;};k.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:this.props.className},this.props.children));};function k(){'use strict';h.apply(this,arguments);}k.propTypes={className:j.string,tabHref:j.string,sectionKey:j.string.isRequired,title:j.string.isRequired,subtitle:j.string};f.exports=k;}),null);
__d("InsightsSectionUtils",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={areSectionsEqual:function i(j,k){return (j.type.getKey(j.props)===k.type.getKey(k.props));},getSectionByKey:function i(j,k){for(var l=k.length-1;l>=0;--l){var m=k[l];if(m.type.getKey(m.props)===j)return m;}}};f.exports=h;}),null);
__d("XReactComposerRestrictionTabNuxController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/edit\/restriction_tab_nux\/",{});}),null);
__d('InsightsTabbedSectionsMixin',['fbt','cx','AsyncRequest','Image.react','InsightsSectionUtils','React','ReactLayeredComponentMixin_DEPRECATED','XReactComposerRestrictionTabNuxController','XUIAmbientNUX.react','XUIText.react','XUICard.react','XUIPageNavigation.react','joinClasses','PagesComposerAudiencesConstants'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('XUIPageNavigation.react').Group,k=c('XUIPageNavigation.react').Item,l=c('PagesComposerAudiencesConstants').TABS,m=-22,n=50,o=220,p={mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],getActiveSection:function q(){var r=null,s=c('React').Children.toArray(this.props.children);if(this.props.activeKey){r=c('InsightsSectionUtils').getSectionByKey(this.props.activeKey,s);if(!r)r=s[0];}else r=s[0];return r;},onTabClick:function q(r){var s=this.getActiveSection();if(!c('InsightsSectionUtils').areSectionsEqual(r,s)){this.props.onTabClick&&this.props.onTabClick(r);if(r.type.getKey(r.props)===l.GATING&&this.state&&this.state.showRestrictionTabNux)this._onRestrictionTabNuxClose();var t=r.props.nuxProp;if(t&&this.state.nuxShownStates[t.name])this._closeSectionNUX(t);}},getTabContent:function q(r){var s=r.type.getSubtitle(r.props);if(s){return (c('React').createElement('div',{className:this.theme.subtitledBlockClass},c('React').createElement('div',null,r.type.getTitle(r.props)),c('React').createElement('div',{className:this.theme.subtitleClass},s)));}else return (c('React').createElement('span',null,r.type.getTitle(r.props)));},componentDidMount:function q(){if(this.state&&this.state.showRestrictionTabNux){var r=c('XReactComposerRestrictionTabNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(r).setMethod('POST').setData({impression:true}).send();}},componentWillUnmount:function q(){if(this.state&&this.state.showRestrictionTabNux)this.setState({showRestrictionTabNux:false});},_onRestrictionTabNuxClose:function q(){this.setState({showRestrictionTabNux:false});var r=c('XReactComposerRestrictionTabNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(r).setMethod('POST').setData({acked:true}).send();},_renderRestrictionTabNux:function q(){return (c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:function(){return this.refs.restrictionTab;}.bind(this),onCloseButtonClick:this._onRestrictionTabNuxClose,offsetY:m,offsetX:n,position:'below',shown:true,width:'custom',customwidth:o},c('React').createElement('div',null,c('React').createElement(c('XUIText.react'),null,h._("Limit who can see this post.")))));},renderLayers:function q(){if(this.state&&this.state.showRestrictionTabNux)return this._renderRestrictionTabNux();return {};},render:function q(){var r=this.getActiveSection(),s=c('React').Children.toArray(this.props.children),t=s.map(function(u,v){var w=c('InsightsSectionUtils').areSectionsEqual(u,r),x=this.props.smallTitle?this.theme.smallNavLinkClass:this.theme.navLinkClass;if(w)x=c('joinClasses')(x,this.theme.activeNavLinkClass);var y=null;if(w){var z=null;if(u.props.nubSource){z=u.props.nubSource;}else z=this.theme.nubSrc;y=c('React').createElement('noscript',null);if(z)y=c('React').createElement(c('Image.react'),{className:this.theme.nubClass,src:z});}if(z===undefined&&this.theme.activeSelector)y=c('React').createElement('span',{className:this.theme.activeSelector});var aa=this.getTabContent(u),ba=null;if(u.type.getKey(u.props)===l.GATING)ba='restrictionTab';if(this.props.useCenteredTabsStyle){return (c('React').createElement(k,{href:u.type.getTabHref(u.props),key:'section'+u.type.getKey(u.props)},c('React').createElement('span',{onClick:this.onTabClick.bind(this,u),className:"_fjc"},aa)));}else return (c('React').createElement('a',{className:x,href:u.type.getTabHref(u.props),key:'section'+u.type.getKey(u.props),title:u.type.getTitle(u.props),onClick:this.onTabClick.bind(this,u),ref:ba},y,aa));},this);if(this.props.useCenteredTabsStyle){return (c('React').createElement('div',null,c('React').createElement(c('XUICard.react'),{className:"_fjd"},c('React').createElement('div',{className:"_fje _5vx1"},c('React').createElement(c('XUIPageNavigation.react'),{activeTabKey:'section'+r.type.getKey(r.props)},c('React').createElement(j,null,t)))),c('React').createElement('div',{className:"_2pie _2pio"},r)));}else return (c('React').createElement('div',{className:this.props.className},c('React').createElement('div',{className:this.props.longNav?this.theme.longNavClass:this.theme.navClass},t),r));},_closeSectionNUX:function q(r){this.state.nuxShownStates[r.name]=false;this.forceUpdate();r.onCloseButtonClick();}};f.exports=p;}),null);
__d('InsightsTabbedSections.react',['cx','ix','InsightsTabbedSectionsMixin','React'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'InsightsTabbedSections',mixins:[c('InsightsTabbedSectionsMixin')],theme:{activeNavLinkClass:"_5cmg",navClass:"_5cmi",longNavClass:"_3bxh",navLinkClass:"_5cmf",smallNavLinkClass:"_4d7-",nubClass:"_5cmh",nubSrc:i('/images/components/Insights/InsightsTabbedSections/nub.png'),subtitledBlockClass:"_1fkz",subtitleClass:"_1fk-"}});f.exports=j;}),null);
__d('InsightsLegendAreaKey.react',['cx','InsightsLegendKey.react','React'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('InsightsLegendKey.react'),{className:this.props.className},c('React').createElement('div',{className:"_1l46 _1l47",style:{background:this.props.color}}),this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('FeedPlaceHolderStory.react',['cx','Locale','React','XUICard.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUICard.react'),{className:c('joinClasses')("_2iwp",this.props.className)},c('React').createElement('div',{className:(c('Locale').isRTL()?"direction_rtl":'')+(' '+"_2iwo")},c('React').createElement('div',{className:"_2iwq"},c('React').createElement('div',{className:"_2iwr"}),c('React').createElement('div',{className:"_2iws"}),c('React').createElement('div',{className:"_2iwt"}),c('React').createElement('div',{className:"_2iwu"}),c('React').createElement('div',{className:"_2iwv"}),c('React').createElement('div',{className:"_2iww"}),c('React').createElement('div',{className:"_2iwx"}),c('React').createElement('div',{className:"_2iwy"}),c('React').createElement('div',{className:"_2iwz"}),c('React').createElement('div',{className:"_2iw-"}),c('React').createElement('div',{className:"_2iw_"}),c('React').createElement('div',{className:"_2ix0"})))));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('DialogExpansion',['Animation','DialogPosition','LoadingDialogDimensions','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=400,i=100;function j(k){'use strict';this._dialog=k;this._fixedTopMargin=k.getFixedTopPosition();this._ignoreFixedTopInShortViewport=k.shouldIgnoreFixedTopInShortViewport();}j.prototype.enable=function(){'use strict';this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype.setTargetWidth=function(k){'use strict';this._targetWidth=k;};j.prototype._onAfterShow=function(){'use strict';this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(c('Style').get(this._inner,'height'),10)))return;var k=this._getWidth(),l=c('LoadingDialogDimensions').HEIGHT,m=c('DialogPosition').calculateTopMargin(k,l);c('Style').apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});c('Style').apply(this._outer,{width:k+'px',height:l+'px',marginTop:m+'px',overflow:'hidden'});setTimeout(function(){var n=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)n=this._targetWidth;var o=parseInt(c('Style').get(this._inner,'height'),10),p=c('DialogPosition').calculateTopMargin(n,o,this._fixedTopMargin,this._ignoreFixedTopInShortViewport);this._growThenFade(n,o,p);}.bind(this),100);};j.prototype._growThenFade=function(k,l,m){'use strict';new (c('Animation'))(this._outer).to('width',k).to('height',l).to('marginTop',m).duration(h).ease(c('Animation').ease.both).ondone(this._fadeIn.bind(this)).go();};j.prototype._fadeIn=function(){'use strict';c('Style').set(this._outer,'overflow','');c('Style').set(this._outer,'height','');new (c('Animation'))(this._inner).from('opacity',0).to('opacity',1).ondone(function(){this._dialog.inform('afterexpand');}.bind(this)).duration(i).go();};j.prototype._getWidth=function(){'use strict';return c('LoadingDialogDimensions').WIDTH;};f.exports=j;}),null);
__d('distinctArray',['Set'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return Array.from(new (c('Set'))(i).values());}f.exports=h;}),null);
__d('Heap',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(j,k){return j<k;}function i(j,k){this._items=j||[];this._size=this._items.length;this._comparator=k||h;this._heapify();}i.prototype.empty=function(){return this._size===0;};i.prototype.pop=function(){if(this._size===0)return;var j=this._items[0],k=this._items.pop();this._size--;if(this._size>0){this._items[0]=k;this._sinkDown(0);}return j;};i.prototype.push=function(j){this._items[this._size++]=j;this._bubbleUp(this._size-1);};i.prototype.size=function(){return this._size;};i.prototype.peek=function(){if(this._size===0)return;return this._items[0];};i.prototype._heapify=function(){for(var j=Math.floor((this._size+1)/2);j>=0;j--)this._sinkDown(j);};i.prototype._bubbleUp=function(j){var k=this._items[j];while(j>0){var l=Math.floor((j+1)/2)-1,m=this._items[l];if(this._comparator(m,k))return;this._items[l]=k;this._items[j]=m;j=l;}};i.prototype._sinkDown=function(j){var k=this._items[j];while(true){var l=2*(j+1)-1,m=2*(j+1),n=-1;if(l<this._size){var o=this._items[l];if(this._comparator(o,k))n=l;}if(m<this._size){var p=this._items[m];if(this._comparator(p,k))if(n===-1||this._comparator(p,this._items[n]))n=m;}if(n===-1)return;this._items[j]=this._items[n];this._items[n]=k;j=n;}};f.exports=i;}),null);
__d("XBasicFBNuxViewController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/megaphone\/view_fbnux\/",{nux_id:{type:"Int",required:true}});}),null);