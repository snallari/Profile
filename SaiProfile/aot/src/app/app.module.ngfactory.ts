/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from './work/work.component.ngfactory';
import * as i4 from './introduction/introduction.component.ngfactory';
import * as i5 from './experience/experience.component.ngfactory';
import * as i6 from './summary/summary.component.ngfactory';
import * as i7 from './app.component.ngfactory';
import * as i8 from '@angular/common';
import * as i9 from '@angular/platform-browser';
import * as i10 from '@angular/animations/browser';
import * as i11 from '@angular/platform-browser/animations';
import * as i12 from '@angular/cdk/bidi';
import * as i13 from '@angular/cdk/platform';
import * as i14 from '@angular/cdk/scrolling';
import * as i15 from '@angular/cdk/observers';
import * as i16 from '@angular/animations';
import * as i17 from 'angularfire2';
import * as i18 from 'angularfire2/database';
import * as i19 from '@angular/router';
import * as i20 from '@angular/material';
import * as i21 from '@angular/cdk/portal';
import * as i22 from '../../../src/app/work/work.component';
import * as i23 from '../../../src/app/introduction/introduction.component';
import * as i24 from '../../../src/app/experience/experience.component';
import * as i25 from '../../../src/app/summary/summary.component';
import * as i26 from '../../../src/app/app-routing.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.WorkComponentNgFactory,i4.IntroductionComponentNgFactory,i5.ExperienceComponentNgFactory,
              i6.SummaryComponentNgFactory,i7.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i8.NgLocalization,i8.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,
              i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,
              ([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i9.DomSanitizer,i9.ɵe,[i8.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i9.DomSanitizer]),i0.ɵmpd(4608,i9.HAMMER_GESTURE_CONFIG,
              i9.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i9.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i9.ɵDomEventsPlugin(p0_0),new i9.ɵKeyEventsPlugin(p1_0),
                    new i9.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i8.DOCUMENT,i8.DOCUMENT,i8.DOCUMENT,i9.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i9.EventManager,i9.EventManager,[i9.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i9.ɵDomSharedStylesHost,i9.ɵDomSharedStylesHost,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i9.ɵDomRendererFactory2,i9.ɵDomRendererFactory2,[i9.EventManager,
              i9.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i10.AnimationDriver,i11.ɵc,([] as any[])),
          i0.ɵmpd(5120,i10.ɵAnimationStyleNormalizer,i11.ɵd,([] as any[])),i0.ɵmpd(4608,
              i10.ɵAnimationEngine,i11.ɵb,[i10.AnimationDriver,i10.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i11.ɵe,[i9.ɵDomRendererFactory2,i10.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i9.ɵSharedStylesHost,(null as any),[i9.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i9.Meta,
              i9.Meta,[i8.DOCUMENT]),i0.ɵmpd(4608,i9.Title,i9.Title,[i8.DOCUMENT]),
          i0.ɵmpd(6144,i12.DIR_DOCUMENT,(null as any),[i9.DOCUMENT]),i0.ɵmpd(4608,
              i12.Directionality,i12.Directionality,[[2,i12.DIR_DOCUMENT]]),i0.ɵmpd(4608,
              i13.Platform,i13.Platform,([] as any[])),i0.ɵmpd(5120,i14.ScrollDispatcher,
              i14.SCROLL_DISPATCHER_PROVIDER_FACTORY,[[3,i14.ScrollDispatcher],i0.NgZone,
                  i13.Platform]),i0.ɵmpd(5120,i14.ViewportRuler,i14.VIEWPORT_RULER_PROVIDER_FACTORY,
              [[3,i14.ViewportRuler],i14.ScrollDispatcher]),i0.ɵmpd(4608,i15.MdMutationObserverFactory,
              i15.MdMutationObserverFactory,([] as any[])),i0.ɵmpd(4608,i16.AnimationBuilder,
              i11.ɵBrowserAnimationBuilder,[i0.RendererFactory2,i9.DOCUMENT]),i0.ɵmpd(5120,
              i17.FirebaseApp,i17.ɵa,[i17.FirebaseAppConfigToken,i17.FirebaseAppName]),
          i0.ɵmpd(5120,i18.AngularFireDatabase,i18._getAngularFireDatabase,[i17.FirebaseApp]),
          i0.ɵmpd(5120,i19.ActivatedRoute,i19.ɵf,[i19.Router]),i0.ɵmpd(4608,i19.NoPreloading,
              i19.NoPreloading,([] as any[])),i0.ɵmpd(6144,i19.PreloadingStrategy,
              (null as any),[i19.NoPreloading]),i0.ɵmpd(135680,i19.RouterPreloader,
              i19.RouterPreloader,[i19.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i19.PreloadingStrategy]),i0.ɵmpd(4608,i19.PreloadAllModules,
              i19.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i19.ROUTER_INITIALIZER,
              i19.ɵi,[i19.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i19.ROUTER_INITIALIZER]),i0.ɵmpd(512,i8.CommonModule,i8.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i9.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i19.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i19.ɵg,i19.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i9.ɵc(p0_0,p0_1),i19.ɵh(p1_0)];
              },[[2,i9.NgProbeToken],[2,i0.NgProbeToken],i19.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i9.BrowserModule,i9.BrowserModule,[[3,i9.BrowserModule]]),i0.ɵmpd(512,
              i20.CompatibilityModule,i20.CompatibilityModule,([] as any[])),i0.ɵmpd(512,
              i12.BidiModule,i12.BidiModule,([] as any[])),i0.ɵmpd(256,i20.MATERIAL_SANITY_CHECKS,
              true,([] as any[])),i0.ɵmpd(512,i20.MdCommonModule,i20.MdCommonModule,
              [[2,i9.DOCUMENT],[2,i20.MATERIAL_SANITY_CHECKS]]),i0.ɵmpd(512,i20.MdToolbarModule,
              i20.MdToolbarModule,([] as any[])),i0.ɵmpd(512,i20.MdCardModule,i20.MdCardModule,
              ([] as any[])),i0.ɵmpd(512,i21.PortalModule,i21.PortalModule,([] as any[])),
          i0.ɵmpd(512,i13.PlatformModule,i13.PlatformModule,([] as any[])),i0.ɵmpd(512,
              i14.ScrollDispatchModule,i14.ScrollDispatchModule,([] as any[])),i0.ɵmpd(512,
              i20.MdRippleModule,i20.MdRippleModule,([] as any[])),i0.ɵmpd(512,i15.ObserversModule,
              i15.ObserversModule,([] as any[])),i0.ɵmpd(512,i20.MdTabsModule,i20.MdTabsModule,
              ([] as any[])),i0.ɵmpd(512,i20.MdLineModule,i20.MdLineModule,([] as any[])),
          i0.ɵmpd(512,i20.MdGridListModule,i20.MdGridListModule,([] as any[])),i0.ɵmpd(512,
              i20.MdChipsModule,i20.MdChipsModule,([] as any[])),i0.ɵmpd(512,i11.BrowserAnimationsModule,
              i11.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(512,i17.AngularFireModule,
              i17.AngularFireModule,([] as any[])),i0.ɵmpd(512,i18.AngularFireDatabaseModule,
              i18.AngularFireDatabaseModule,([] as any[])),i0.ɵmpd(1024,i19.ɵa,i19.ɵd,
              [[3,i19.Router]]),i0.ɵmpd(512,i19.UrlSerializer,i19.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i19.ChildrenOutletContexts,i19.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i19.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i8.LocationStrategy,i19.ɵc,[i8.PlatformLocation,[2,i8.APP_BASE_HREF],
              i19.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i8.Location,i8.Location,[i8.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i19.ROUTES,() => {
            return [[{path:'work',component:i22.WorkComponent},{path:'introduction',
                component:i23.IntroductionComponent},{path:'experience',component:i24.ExperienceComponent},
                {path:'summary',component:i25.SummaryComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i19.Router,i19.ɵe,[i0.ApplicationRef,i19.UrlSerializer,
              i19.ChildrenOutletContexts,i8.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i19.ROUTES,i19.ROUTER_CONFIGURATION,[2,i19.UrlHandlingStrategy],
              [2,i19.RouteReuseStrategy]]),i0.ɵmpd(512,i19.RouterModule,i19.RouterModule,
              [[2,i19.ɵa],[2,i19.Router]]),i0.ɵmpd(512,i26.AppRoutingModule,i26.AppRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[])),
          i0.ɵmpd(256,i17.FirebaseAppConfigToken,{apiKey:'AIzaSyBsKDTuB5Txu1hZvRwJKN_GrrvoF52JwzE',
              authDomain:'profile-42b3b.firebaseapp.com',databaseURL:'https://profile-42b3b.firebaseio.com',
              projectId:'profile-42b3b',storageBucket:'profile-42b3b.appspot.com',
              messagingSenderId:'195408057693'},([] as any[])),i0.ɵmpd(256,i17.FirebaseAppName,
              (undefined as any),([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NocnV0aW5hbGxhcmkvUHJvZmlsZS9TYWlQcm9maWxlL3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zaHJ1dGluYWxsYXJpL1Byb2ZpbGUvU2FpUHJvZmlsZS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
