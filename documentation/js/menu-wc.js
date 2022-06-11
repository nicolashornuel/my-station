'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-station documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' : 'data-target="#xs-components-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' :
                                            'id="xs-components-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' : 'data-target="#xs-injectables-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' :
                                        'id="xs-injectables-links-module-AppModule-07c21416e0606797f4b517e5232026ec4dcb39ddc572442a7bf8892c868901d44e41232c914347415576a58c0adb3ce64ec9474d16ed60f30573146964fda4a7"' }>
                                        <li class="link">
                                            <a href="injectables/FxcmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FxcmService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3848622019673de23669c9368c55aec20d630d823df7c21d75ee22cf5c132fd29341b5f02073b561df3d3f6cc40ff5fb6e3bfe69832b03e0dd7e121a3f7c5209"' : 'data-target="#xs-components-links-module-AuthModule-3848622019673de23669c9368c55aec20d630d823df7c21d75ee22cf5c132fd29341b5f02073b561df3d3f6cc40ff5fb6e3bfe69832b03e0dd7e121a3f7c5209"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3848622019673de23669c9368c55aec20d630d823df7c21d75ee22cf5c132fd29341b5f02073b561df3d3f6cc40ff5fb6e3bfe69832b03e0dd7e121a3f7c5209"' :
                                            'id="xs-components-links-module-AuthModule-3848622019673de23669c9368c55aec20d630d823df7c21d75ee22cf5c132fd29341b5f02073b561df3d3f6cc40ff5fb6e3bfe69832b03e0dd7e121a3f7c5209"' }>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NebularModule.html" data-type="entity-link" >NebularModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-9ccce36fa09b568d11d94d58f456ad5512e8f6840a2de87783dde890b467a22f632632c7c961746c7a3eb36deac7994e6cfff55b4e6c7b11b38093c049bbca2f"' : 'data-target="#xs-components-links-module-SettingsModule-9ccce36fa09b568d11d94d58f456ad5512e8f6840a2de87783dde890b467a22f632632c7c961746c7a3eb36deac7994e6cfff55b4e6c7b11b38093c049bbca2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-9ccce36fa09b568d11d94d58f456ad5512e8f6840a2de87783dde890b467a22f632632c7c961746c7a3eb36deac7994e6cfff55b4e6c7b11b38093c049bbca2f"' :
                                            'id="xs-components-links-module-SettingsModule-9ccce36fa09b568d11d94d58f456ad5512e8f6840a2de87783dde890b467a22f632632c7c961746c7a3eb36deac7994e6cfff55b4e6c7b11b38093c049bbca2f"' }>
                                            <li class="link">
                                                <a href="components/TradingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' : 'data-target="#xs-components-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' :
                                            'id="xs-components-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableCellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' : 'data-target="#xs-directives-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' :
                                        'id="xs-directives-links-module-SharedModule-4193a6d61df87bcbd7d683af3c19b2cacd68001da3f76dbc5fdbc82609a43fb583d7ff6a56cf27181501f349daa22d43ff843251f3a36fb0b4d6bdaff7ec3bd9"' }>
                                        <li class="link">
                                            <a href="directives/CellHostDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CellHostDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TradingModule.html" data-type="entity-link" >TradingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' : 'data-target="#xs-components-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' :
                                            'id="xs-components-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' }>
                                            <li class="link">
                                                <a href="components/InstrumentDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstrumentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RightBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RightBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetAnalysisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetAnalysisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetForexHeatMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetForexHeatMapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' : 'data-target="#xs-directives-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' :
                                        'id="xs-directives-links-module-TradingModule-0f4cc9e3954350b17df9484249df7ea15e72d13f1340cba91e36a284077a07cd1d2d7cb77ce51ede1acec620183803420395321be47a67a012a303a55f8c9319"' }>
                                        <li class="link">
                                            <a href="directives/WidgetAnalysisDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetAnalysisDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/WidgetForexHeatMapDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetForexHeatMapDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/WidgetScreenerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetScreenerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TradingRoutingModule.html" data-type="entity-link" >TradingRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DestroyService.html" data-type="entity-link" >DestroyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScriptService.html" data-type="entity-link" >ScriptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TradingService.html" data-type="entity-link" >TradingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link" >UtilService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChartConf.html" data-type="entity-link" >ChartConf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnSet.html" data-type="entity-link" >ColumnSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FxcmOffer.html" data-type="entity-link" >FxcmOffer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Instrument.html" data-type="entity-link" >Instrument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableSet.html" data-type="entity-link" >TableSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TvAnalysis.html" data-type="entity-link" >TvAnalysis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TvForexHeatMap.html" data-type="entity-link" >TvForexHeatMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TvScreener.html" data-type="entity-link" >TvScreener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});