/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './work.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i3 from '@angular/material';
import * as i4 from '@angular/cdk/bidi';
import * as i5 from '@angular/common';
import * as i6 from '../../../../src/app/work/work.component';
import * as i7 from '../../../../src/app/services/experience.service';
import * as i8 from 'angularfire2/database';
const styles_WorkComponent:any[] = [i0.styles];
export const RenderType_WorkComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_WorkComponent,data:{'animation':[{type:7,name:'flyInOut',definitions:[{type:1,
        expr:'void=>*',animation:[{type:6,styles:{transform:'translateX(-100%)'},offset:(null as any)},
            {type:4,styles:{type:6,styles:{transform:'rotate(180deg)'},offset:(null as any)},
                timings:'5s 3s ease-in'}],options:(null as any)},{type:1,expr:'void=>*',
        animation:[{type:6,styles:{transform:'translateX(-100%)'},offset:(null as any)}],
        options:(null as any)}],options:{}}]}});
function View_WorkComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'md-grid-tile',
      [['class','mat-grid-tile']],(null as any),(null as any),(null as any),i2.View_MdGridTile_0,
      i2.RenderType_MdGridTile)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
      [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(49152,[[1,4]],0,i3.MdGridTile,[i1.Renderer2,i1.ElementRef],(null as any),
          (null as any)),(_l()(),i1.ɵted(0,[' '])),(_l()(),i1.ɵeld(0,(null as any),
          0,2,'a',([] as any[]),[[8,'href',4]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['',' '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),0,'img',[['class','img-rounded']],[[8,'src',
              4],[8,'alt',0]],(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit.url,
            '');
        _ck(_v,4,0,currVal_0);
        const currVal_1:any = _v.context.$implicit.id;
        _ck(_v,5,0,currVal_1);
        const currVal_2:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit.img,
            '');
        const currVal_3:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit.title,
            '');
        _ck(_v,6,0,currVal_2,currVal_3);
      });
}
export function View_WorkComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),8,'md-grid-list',[['class','mat-grid-list'],['cols','4'],['rowHeight',
          '2:1']],[[24,'@flyInOut',0]],(null as any),(null as any),i2.View_MdGridList_0,
      i2.RenderType_MdGridList)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
      [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(2211840,(null as any),1,i3.MdGridList,[i1.Renderer2,i1.ElementRef,[2,
          i4.Directionality]],{cols:[0,'cols'],rowHeight:[1,'rowHeight']},(null as any)),
      i1.ɵqud(603979776,1,{_tiles:1}),(_l()(),i1.ɵted(0,[' '])),(_l()(),i1.ɵand(16777216,
          (null as any),0,2,(null as any),View_WorkComponent_1)),i1.ɵdid(802816,(null as any),
          0,i5.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),i1.ɵpid(131072,i5.AsyncPipe,[i1.ChangeDetectorRef]),
      (_l()(),i1.ɵted(0,[' ']))],(_ck,_v) => {
    var _co:i6.WorkComponent = _v.component;
    const currVal_1:any = '4';
    const currVal_2:any = '2:1';
    _ck(_v,3,0,currVal_1,currVal_2);
    const currVal_3:any = i1.ɵunv(_v,7,0,i1.ɵnov(_v,8).transform(_co.experienceItems));
    _ck(_v,7,0,currVal_3);
  },(_ck,_v) => {
    const currVal_0:any = (undefined as any);
    _ck(_v,1,0,currVal_0);
  });
}
export function View_WorkComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'app-work',([] as any[]),
      (null as any),(null as any),(null as any),View_WorkComponent_0,RenderType_WorkComponent)),
      i1.ɵprd(512,(null as any),i7.ExperienceService,i7.ExperienceService,[i8.AngularFireDatabase]),
      i1.ɵdid(114688,(null as any),0,i6.WorkComponent,[i7.ExperienceService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,2,0);
  },(null as any));
}
export const WorkComponentNgFactory:i1.ComponentFactory<i6.WorkComponent> = i1.ɵccf('app-work',
    i6.WorkComponent,View_WorkComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NocnV0aW5hbGxhcmkvUHJvZmlsZS9TYWlQcm9maWxlL3NyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zaHJ1dGluYWxsYXJpL1Byb2ZpbGUvU2FpUHJvZmlsZS9zcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9zaHJ1dGluYWxsYXJpL1Byb2ZpbGUvU2FpUHJvZmlsZS9zcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3NocnV0aW5hbGxhcmkvUHJvZmlsZS9TYWlQcm9maWxlL3NyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC50cy5Xb3JrQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG48bWQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMjoxXCIgW0BmbHlJbk91dF0+IDxtZC1ncmlkLXRpbGVcblx0Km5nRm9yPVwibGV0IGV4cCBvZiBleHBlcmllbmNlSXRlbXMgfCBhc3luY1wiPiA8YVxuXHRocmVmPVwie3tleHAudXJsfX1cIj57e2V4cC5pZH19IDxpbWcgc3JjPVwie3tleHAuaW1nfX1cIlxuXHRjbGFzcz1cImltZy1yb3VuZGVkXCIgYWx0PVwie3tleHAudGl0bGV9fVwiPjwvYT48L21kLWdyaWQtdGlsZT4gPC9tZC1ncmlkLWxpc3Q+IiwiPGFwcC13b3JrPjwvYXBwLXdvcms+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQ29EO01BQUE7OEJBQUEsVUFBQTtNQUFBO2FBQUE7VUFBQSxlQUNQLDBCQUFDO1VBQUE7VUFBQSxnQkFDMUIseUNBQVc7VUFBQTtjQUFBOztRQUE5QjtZQUFBO1FBRDZDLFdBQzdDLFNBRDZDO1FBQzFCO1FBQUE7UUFBZ0I7WUFBQTtRQUNmO1lBQUE7UUFEVSxXQUFLLFVBQ2YsU0FEVTs7OztvQkFIL0IsdUNBQ0E7TUFBQTtVQUFBOzhCQUFBLFVBQUE7TUFBQTthQUFBOzJCQUFBO2FBQUEseUJBQW1ELDBCQUFDO1VBQUEsOERBQUE7VUFBQTtjQUFBLGtDQUNuRDtNQUUyRDs7SUFIOUM7SUFBUztJQUF2QixXQUFjLFVBQVMsU0FBdkI7SUFDQztJQURtRCxXQUNuRCxTQURtRDs7SUFBYjtJQUF2QyxXQUF1QyxTQUF2Qzs7OztvQkNEQTtNQUFBO2FBQUE7YUFBQTtVQUFBO0lBQUE7Ozs7In0=
