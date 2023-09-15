import*as e from"../../core/common/common.js";import*as t from"../../core/i18n/i18n.js";import*as a from"../../ui/legacy/legacy.js";import*as n from"../../core/host/host.js";import*as s from"../../core/root/root.js";import*as o from"../../core/sdk/sdk.js";import*as r from"../../panels/mobile_throttling/mobile_throttling.js";import*as i from"../../ui/components/icon_button/icon_button.js";import*as l from"../../ui/legacy/components/utils/utils.js";import*as c from"../../core/platform/platform.js";import*as d from"../../models/bindings/bindings.js";const g=new CSSStyleSheet;g.replaceSync(':host{padding:12px}[is="dt-checkbox"]{margin:0 0 10px;flex:none}.panel-section-separator{height:1px;margin-bottom:10px;background:var(--color-details-hairline);flex:none}.panel-section-separator:last-child{background:transparent}.chrome-select-label{margin-bottom:16px}\n/*# sourceURL=renderingOptions.css */\n');const h={paintFlashing:"Paint flashing",highlightsAreasOfThePageGreen:"Highlights areas of the page (green) that need to be repainted. May not be suitable for people prone to photosensitive epilepsy.",layoutShiftRegions:"Layout Shift Regions",highlightsAreasOfThePageBlueThat:"Highlights areas of the page (blue) that were shifted. May not be suitable for people prone to photosensitive epilepsy.",layerBorders:"Layer borders",showsLayerBordersOrangeoliveAnd:"Shows layer borders (orange/olive) and tiles (cyan).",frameRenderingStats:"Frame Rendering Stats",plotsFrameThroughputDropped:"Plots frame throughput, dropped frames distribution, and GPU memory.",scrollingPerformanceIssues:"Scrolling performance issues",highlightsElementsTealThatCan:"Highlights elements (teal) that can slow down scrolling, including touch & wheel event handlers and other main-thread scrolling situations.",highlightAdFrames:"Highlight ad frames",highlightsFramesRedDetectedToBe:"Highlights frames (red) detected to be ads.",coreWebVitals:"Core Web Vitals",showsAnOverlayWithCoreWebVitals:"Shows an overlay with Core Web Vitals.",disableLocalFonts:"Disable local fonts",disablesLocalSourcesInFontface:"Disables `local()` sources in `@font-face` rules. Requires a page reload to apply.",emulateAFocusedPage:"Emulate a focused page",emulatesAFocusedPage:"Emulates a focused page.",emulateAutoDarkMode:"Enable automatic dark mode",emulatesAutoDarkMode:"Enables automatic dark mode and sets `prefers-color-scheme` to `dark`.",forcesMediaTypeForTestingPrint:"Forces media type for testing print and screen styles",forcesCssPreferscolorschemeMedia:"Forces CSS `prefers-color-scheme` media feature",forcesCssPrefersreducedmotion:"Forces CSS `prefers-reduced-motion` media feature",forcesCssPreferscontrastMedia:"Forces CSS `prefers-contrast` media feature",forcesCssPrefersreduceddataMedia:"Forces CSS `prefers-reduced-data` media feature",forcesCssColorgamutMediaFeature:"Forces CSS `color-gamut` media feature",forcesVisionDeficiencyEmulation:"Forces vision deficiency emulation",disableAvifImageFormat:"Disable `AVIF` image format",requiresAPageReloadToApplyAnd:"Requires a page reload to apply and disables caching for image requests.",disableWebpImageFormat:"Disable `WebP` image format",forcesCssForcedColors:"Forces CSS forced-colors media feature"},u=t.i18n.registerUIStrings("entrypoints/inspector_main/RenderingOptions.ts",h),p=t.i18n.getLocalizedString.bind(void 0,u);let m,S;class f extends a.Widget.VBox{constructor(){super(!0),this.#e(p(h.paintFlashing),p(h.highlightsAreasOfThePageGreen),e.Settings.Settings.instance().moduleSetting("showPaintRects")),this.#e(p(h.layoutShiftRegions),p(h.highlightsAreasOfThePageBlueThat),e.Settings.Settings.instance().moduleSetting("showLayoutShiftRegions")),this.#e(p(h.layerBorders),p(h.showsLayerBordersOrangeoliveAnd),e.Settings.Settings.instance().moduleSetting("showDebugBorders")),this.#e(p(h.frameRenderingStats),p(h.plotsFrameThroughputDropped),e.Settings.Settings.instance().moduleSetting("showFPSCounter")),this.#e(p(h.scrollingPerformanceIssues),p(h.highlightsElementsTealThatCan),e.Settings.Settings.instance().moduleSetting("showScrollBottleneckRects")),this.#e(p(h.highlightAdFrames),p(h.highlightsFramesRedDetectedToBe),e.Settings.Settings.instance().moduleSetting("showAdHighlights")),this.#e(p(h.coreWebVitals),p(h.showsAnOverlayWithCoreWebVitals),e.Settings.Settings.instance().moduleSetting("showWebVitals")),this.#e(p(h.disableLocalFonts),p(h.disablesLocalSourcesInFontface),e.Settings.Settings.instance().moduleSetting("localFontsDisabled")),this.#e(p(h.emulateAFocusedPage),p(h.emulatesAFocusedPage),e.Settings.Settings.instance().moduleSetting("emulatePageFocus")),this.#e(p(h.emulateAutoDarkMode),p(h.emulatesAutoDarkMode),e.Settings.Settings.instance().moduleSetting("emulateAutoDarkMode")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#t(p(h.forcesCssPreferscolorschemeMedia),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeaturePrefersColorScheme")),this.#t(p(h.forcesMediaTypeForTestingPrint),e.Settings.Settings.instance().moduleSetting("emulatedCSSMedia")),this.#t(p(h.forcesCssForcedColors),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeatureForcedColors")),(()=>{const e="(prefers-contrast)";return window.matchMedia(e).media===e})()&&this.#t(p(h.forcesCssPreferscontrastMedia),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeaturePrefersContrast")),this.#t(p(h.forcesCssPrefersreducedmotion),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeaturePrefersReducedMotion")),(()=>{const e="(prefers-reduced-data)";return window.matchMedia(e).media===e})()&&this.#t(p(h.forcesCssPrefersreduceddataMedia),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeaturePrefersReducedData")),this.#t(p(h.forcesCssColorgamutMediaFeature),e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeatureColorGamut")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#t(p(h.forcesVisionDeficiencyEmulation),e.Settings.Settings.instance().moduleSetting("emulatedVisionDeficiency")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#e(p(h.disableAvifImageFormat),p(h.requiresAPageReloadToApplyAnd),e.Settings.Settings.instance().moduleSetting("avifFormatDisabled")),this.#e(p(h.disableWebpImageFormat),p(h.requiresAPageReloadToApplyAnd),e.Settings.Settings.instance().moduleSetting("webpFormatDisabled")),this.contentElement.createChild("div").classList.add("panel-section-separator")}static instance(e={forceNew:null}){const{forceNew:t}=e;return m&&!t||(m=new f),m}#a(e,t,n){const s=a.UIUtils.CheckboxLabel.create(e,!1,t);return a.SettingsUI.bindCheckbox(s.checkboxElement,n),s}#e(e,t,a){const n=this.#a(e,t,a);return this.contentElement.appendChild(n),n}#t(e,t){const n=a.SettingsUI.createControlForSetting(t,e);n&&this.contentElement.appendChild(n)}wasShown(){super.wasShown(),this.registerCSSFiles([g])}}class b{static instance(e={forceNew:null}){const{forceNew:t}=e;return S&&!t||(S=new b),S}handleAction(t,a){const n=e.Settings.Settings.instance().moduleSetting("emulatedCSSMediaFeaturePrefersColorScheme");if("rendering.toggle-prefers-color-scheme"===a){const e=["","light","dark"],t=e.findIndex((e=>e===n.get()||""));return n.set(e[(t+1)%3]),!0}return!1}}var T=Object.freeze({__proto__:null,RenderingOptionsView:f,ReloadActionDelegate:b});const C=new CSSStyleSheet;C.replaceSync(".node-icon{width:28px;height:26px;background-image:var(--image-file-nodeIcon);background-size:17px 17px;background-repeat:no-repeat;background-position:center;opacity:80%;cursor:auto}.node-icon:hover{opacity:100%}.node-icon.inactive{filter:grayscale(100%)}\n/*# sourceURL=nodeIcon.css */\n");const w={main:"Main",tab:"Tab",javascriptIsDisabled:"JavaScript is disabled",openDedicatedTools:"Open dedicated DevTools for `Node.js`"},F=t.i18n.registerUIStrings("entrypoints/inspector_main/InspectorMain.ts",w),y=t.i18n.getLocalizedString.bind(void 0,F);let I,v,M,P;class x{static instance(e={forceNew:null}){const{forceNew:t}=e;return I&&!t||(I=new x),I}async run(){let e=!0;await o.Connections.initMainConnection((async()=>{const t=s.Runtime.Runtime.queryParam("v8only")?o.Target.Type.Node:"tab"===s.Runtime.Runtime.queryParam("targetType")?o.Target.Type.Tab:o.Target.Type.Frame,a=t===o.Target.Type.Frame&&"sources"===s.Runtime.Runtime.queryParam("panel"),n=t===o.Target.Type.Frame?y(w.main):y(w.tab),r=o.TargetManager.TargetManager.instance().createTarget("main",n,t,null,void 0,a),i=o.TargetManager.TargetManager.instance();if(i.observeTargets({targetAdded:e=>{e===i.primaryPageTarget()&&e.setName(y(w.main))},targetRemoved:e=>{}}),e){if(e=!1,a){const e=r.model(o.DebuggerModel.DebuggerModel);e&&(e.isReadyToPause()||await e.once(o.DebuggerModel.Events.DebuggerIsReadyToPause),e.pause())}t!==o.Target.Type.Tab&&r.runtimeAgent().invoke_runIfWaitingForDebugger()}}),l.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost),new D,new L,new r.NetworkPanelIndicator.NetworkPanelIndicator,n.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(n.InspectorFrontendHostAPI.Events.ReloadInspectedPage,(({data:e})=>{o.ResourceTreeModel.ResourceTreeModel.reloadAllPages(e)}))}}e.Runnable.registerEarlyInitializationRunnable(x.instance);class A{static instance(e={forceNew:null}){const{forceNew:t}=e;return v&&!t||(v=new A),v}handleAction(e,t){switch(t){case"inspector_main.reload":return o.ResourceTreeModel.ResourceTreeModel.reloadAllPages(!1),!0;case"inspector_main.hard-reload":return o.ResourceTreeModel.ResourceTreeModel.reloadAllPages(!0),!0}return!1}}class k{static instance(e={forceNew:null}){const{forceNew:t}=e;return M&&!t||(M=new k),M}handleAction(e,t){const a=o.TargetManager.TargetManager.instance().primaryPageTarget();return!!a&&(a.pageAgent().invoke_bringToFront(),!0)}}class R{#n;#s;constructor(){const e=document.createElement("div"),t=a.Utils.createShadowRootWithCoreStyles(e,{cssFile:[C],delegatesFocus:void 0});this.#n=t.createChild("div","node-icon"),e.addEventListener("click",(()=>n.InspectorFrontendHost.InspectorFrontendHostInstance.openNodeFrontend()),!1),this.#s=new a.Toolbar.ToolbarItem(e),this.#s.setTitle(y(w.openDedicatedTools)),o.TargetManager.TargetManager.instance().addEventListener(o.TargetManager.Events.AvailableTargetsChanged,(e=>this.#o(e.data))),this.#s.setVisible(!1),this.#o([])}static instance(e={forceNew:null}){const{forceNew:t}=e;return P&&!t||(P=new R),P}#o(e){const t=Boolean(e.find((e=>"node"===e.type&&!e.attached)));this.#n.classList.toggle("inactive",!t),t&&this.#s.setVisible(!0)}item(){return this.#s}}class D{constructor(){function t(){let t=null;e.Settings.Settings.instance().moduleSetting("javaScriptDisabled").get()&&(t=new i.Icon.Icon,t.data={iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"},a.Tooltip.Tooltip.install(t,y(w.javascriptIsDisabled))),a.InspectorView.InspectorView.instance().setPanelIcon("sources",t)}e.Settings.Settings.instance().moduleSetting("javaScriptDisabled").addChangeListener(t),t()}}class L{#r;#i;#l;constructor(){this.#r=e.Settings.Settings.instance().moduleSetting("autoAttachToCreatedPages"),this.#r.addChangeListener(this.#c,this),this.#c(),this.#i=e.Settings.Settings.instance().moduleSetting("network.adBlockingEnabled"),this.#i.addChangeListener(this.#o,this),this.#l=e.Settings.Settings.instance().moduleSetting("emulatePageFocus"),this.#l.addChangeListener(this.#o,this),o.TargetManager.TargetManager.instance().observeTargets(this)}#d(e){e.type()===o.Target.Type.Frame&&e.parentTarget()?.type()!==o.Target.Type.Frame&&(e.pageAgent().invoke_setAdBlockingEnabled({enabled:this.#i.get()}),e.emulationAgent().invoke_setFocusEmulationEnabled({enabled:this.#l.get()}))}#c(){n.InspectorFrontendHost.InspectorFrontendHostInstance.setOpenNewWindowForPopups(this.#r.get())}#o(){for(const e of o.TargetManager.TargetManager.instance().targets())this.#d(e)}targetAdded(e){this.#d(e)}targetRemoved(e){}}o.ChildTargetManager.ChildTargetManager.install();var E=Object.freeze({__proto__:null,InspectorMainImpl:x,ReloadActionDelegate:A,FocusDebuggeeActionDelegate:k,NodeIndicator:R,SourcesPanelIndicator:D,BackendSettingsSync:L});const N=new CSSStyleSheet;N.replaceSync(":host{padding:2px 1px 2px 2px;white-space:nowrap;display:flex;flex-direction:column;height:36px;justify-content:center;overflow-y:auto}.title{overflow:hidden;padding-left:8px;text-overflow:ellipsis;flex-grow:0}.subtitle{color:var(--color-text-secondary);margin-right:3px;overflow:hidden;padding-left:8px;text-overflow:ellipsis;flex-grow:0}:host(.highlighted) .subtitle{color:inherit}\n/*# sourceURL=outermostTargetSelector.css */\n");const _={targetNotSelected:"Page: Not selected",targetS:"Page: {PH1}"},U=t.i18n.registerUIStrings("entrypoints/inspector_main/OutermostTargetSelector.ts",_),j=t.i18n.getLocalizedString.bind(void 0,U);let B;class O{listItems;#g;#h;constructor(){this.listItems=new a.ListModel.ListModel,this.#g=new a.SoftDropDown.SoftDropDown(this.listItems,this),this.#g.setRowHeight(36),this.#h=new a.Toolbar.ToolbarItem(this.#g.element),this.#h.setTitle(j(_.targetNotSelected)),this.listItems.addEventListener(a.ListModel.Events.ItemsReplaced,(()=>this.#h.setEnabled(Boolean(this.listItems.length)))),this.#h.element.classList.add("toolbar-has-dropdown");const e=o.TargetManager.TargetManager.instance();e.addModelListener(o.ChildTargetManager.ChildTargetManager,o.ChildTargetManager.Events.TargetInfoChanged,this.#u,this),e.observeTargets(this),a.Context.Context.instance().addFlavorChangeListener(o.Target.Target,this.#p,this)}static instance(e={forceNew:null}){const{forceNew:t}=e;return B&&!t||(B=new O),B}item(){return this.#h}highlightedItemChanged(e,t,a,n){a&&a.classList.remove("highlighted"),n&&n.classList.add("highlighted")}titleFor(t){if(t===o.TargetManager.TargetManager.instance().primaryPageTarget())return"Main";const a=t.targetInfo()?.url;if(!a)return"<unknown>";const n=e.ParsedURL.ParsedURL.fromString(a);return n?n.lastPathComponentWithFragment():"<unknown>"}targetAdded(e){e.outermostTarget()===e&&(this.listItems.insertWithComparator(e,this.#m()),this.#h.setVisible(this.listItems.length>1),e===a.Context.Context.instance().flavor(o.Target.Target)&&this.#g.selectItem(e))}targetRemoved(e){const t=this.listItems.indexOf(e);-1!==t&&(this.listItems.remove(t),this.#h.setVisible(this.listItems.length>1))}#m(){return(e,t)=>{const a=e.targetInfo(),n=t.targetInfo();return a&&n?!a.subtype?.length&&n.subtype?.length?-1:a.subtype?.length&&!n.subtype?.length?1:a.url.localeCompare(n.url):0}}#u(e){const t=o.TargetManager.TargetManager.instance().targetById(e.data.targetId);t&&t.outermostTarget()===t&&(this.targetRemoved(t),this.targetAdded(t))}#p({data:e}){this.#g.selectItem(e?.outermostTarget()||null)}createElementForItem(e){const t=document.createElement("div");t.classList.add("target");const n=a.Utils.createShadowRootWithCoreStyles(t,{cssFile:[N],delegatesFocus:void 0}),s=n.createChild("div","title");a.UIUtils.createTextChild(s,c.StringUtilities.trimEndWithMaxLength(this.titleFor(e),100));const o=n.createChild("div","subtitle");return a.UIUtils.createTextChild(o,this.#S(e)),t}#S(e){const t=e.targetInfo();if(!t)return"";const a=[],n=d.ResourceUtils.displayNameForURL(t.url);return n&&a.push(n),t.subtype&&a.push(t.subtype),a.join(" ")}isItemSelectable(e){return!0}itemSelected(e){const t=e?j(_.targetS,{PH1:this.titleFor(e)}):j(_.targetNotSelected);this.#h.setTitle(t),e&&e!==a.Context.Context.instance().flavor(o.Target.Target)?.outermostTarget()&&a.Context.Context.instance().setFlavor(o.Target.Target,e)}}var W=Object.freeze({__proto__:null,OutermostTargetSelector:O});export{E as InspectorMain,W as OutermostTargetSelector,T as RenderingOptions};