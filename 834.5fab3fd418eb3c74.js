"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[834],{834:(K,g,c)=>{c.r(g),c.d(g,{ShoppingModule:()=>L});var m=c(6895),t=c(4650),p=c(6582);let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop-home"]],decls:2,vars:0,consts:[[1,"content-body"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[p.lC],styles:[".content-body[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#F5F5F5;margin:0 auto}"]}),n})();var h=c(898),_=c(5017),x=c(6308),l=c(7155),C=c(5380),P=c(7392),s=c(9017),u=c(4859),b=c(6709);function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"th",28)(1,"mat-checkbox",29),t.NdJ("change",function(r){t.CHM(e);const a=t.oxw();return t.KtG(r?a.toggleAllRows():null)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())}}function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",30)(1,"mat-checkbox",31),t.NdJ("click",function(r){return r.stopPropagation()})("change",function(r){const d=t.CHM(e).$implicit,G=t.oxw();return t.KtG(G.changeCheckBox(r,d))}),t.qZA()()}if(2&n){const e=o.$implicit,i=t.oxw();t.xp6(1),t.Q6J("checked",i.selection.isSelected(e))("disabled",e.check)}}function Z(n,o){1&n&&(t.TgZ(0,"th",28)(1,"span"),t._uU(2,"No."),t.qZA()())}function y(n,o){if(1&n&&(t.TgZ(0,"div",32),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.return.flightNumber)}}function k(n,o){if(1&n&&(t.TgZ(0,"td",30)(1,"span",32),t._uU(2),t.qZA(),t.YNc(3,y,2,1,"div",33),t.qZA()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.from.flightNumber),t.xp6(1),t.Q6J("ngIf",null==e||null==e.return?null:e.return.flightNumber)}}function v(n,o){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Flight"),t.qZA())}function A(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.return.flight.from+" \u2014 "+e.return.flight.destination," ")}}function M(n,o){if(1&n&&(t.TgZ(0,"td",30)(1,"div"),t._uU(2),t.qZA(),t.YNc(3,A,2,1,"div",34),t.qZA()),2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",e.from.flight.from+" \u2014 "+e.from.flight.destination," "),t.xp6(1),t.Q6J("ngIf",null==e||null==e.return?null:e.return.flightNumber)}}function w(n,o){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Type trip"),t.qZA())}function N(n,o){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.flightType)}}function D(n,o){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Data & Time"),t.qZA())}function U(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.lnq(" ",t.xi3(2,3,e.return.flightDate.from,"longDate")," ",t.xi3(3,6,e.return.flightDate.from,"shortTime")," \u2014 ",t.xi3(4,9,e.return.flightDate.return,"shortTime")," ")}}function S(n,o){if(1&n&&(t.TgZ(0,"td",30)(1,"div"),t._uU(2),t.ALo(3,"date"),t.ALo(4,"date"),t.ALo(5,"date"),t.qZA(),t.YNc(6,U,5,12,"div",34),t.qZA()),2&n){const e=o.$implicit;t.xp6(2),t.lnq(" ",t.xi3(3,4,e.from.flightDate.from,"longDate")," ",t.xi3(4,7,e.from.flightDate.from,"shortTime")," \u2014 ",t.xi3(5,10,e.from.flightDate.return,"shortTime")," "),t.xp6(4),t.Q6J("ngIf",null==e||null==e.return?null:e.return.flightNumber)}}function q(n,o){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Passengers"),t.qZA())}function F(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.passengerAmount.adults+" x Adults"," ")}}function Y(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.passengerAmount.child+" x Child"," ")}}function Q(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.passengerAmount.infant+" x Infant"," ")}}function J(n,o){if(1&n&&(t.TgZ(0,"td",30)(1,"div"),t.YNc(2,F,2,1,"div",34),t.YNc(3,Y,2,1,"div",34),t.YNc(4,Q,2,1,"div",34),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Q6J("ngIf",e.passengerAmount.adults>0),t.xp6(1),t.Q6J("ngIf",e.passengerAmount.child>0),t.xp6(1),t.Q6J("ngIf",e.passengerAmount.infant>0)}}function I(n,o){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Price"),t.qZA())}function $(n,o){if(1&n&&(t.TgZ(0,"td",30)(1,"div",35),t._uU(2),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.hij("$ ",e.price.toFixed(2),"")}}function B(n,o){1&n&&t._UZ(0,"th",28)}function R(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",36),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(1,"button",37)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",38,39)(6,"button",40),t.NdJ("click",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteItem(a))}),t.TgZ(7,"span"),t._uU(8,"Delete"),t.qZA()(),t.TgZ(9,"button",40),t.NdJ("click",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.editItem(a))}),t.TgZ(10,"span"),t._uU(11,"Edit"),t.qZA()()()()}if(2&n){const e=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",e)}}function H(n,o){1&n&&t._UZ(0,"tr",41)}function E(n,o){1&n&&t._UZ(0,"tr",42)}const j=function(){return["/main"]};let z=(()=>{class n{constructor(e){this.cartService=e,this.displayedColumns=["select","No.","Flight","Type trip","Data & Time","Passengers","Price","btn"],this.dataSource=new l.by,this.selection=new _.Ov(!0,[]),this.commonPrice=0}ngOnInit(){this.cartService.getAllTrips().subscribe(e=>{this.cartService.items=e.map(i=>({...i.data,id:i.id})),this.getData=e.map(i=>({...i.data,id:i.id})),this.selectItem(this.getData),this.cartService.cartNumber.next(this.getData.length)})}selectItem(e){this.dataSource.data=e;for(let i=0;i<e.length;i++)this.selection.toggle(e[i]),this.commonPrice+=e[i].price}changeCheckBox(e,i){e&&this.selection.toggle(i);const r=this.selection.selected.find(a=>a.id===i.id);e.checked?this.commonPrice+=r.price:this.commonPrice-=i.price}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}ngAfterViewInit(){this.dataSource.sort=this.sort}deleteItem(e){this.selection.clear(),this.commonPrice=0,this.cartService.removeTrip(e.id).subscribe(i=>{this.cartService.items=i.map(r=>({...r.data,id:r.id})),this.getData=i.map(r=>({...r.data,id:r.id})),this.selectItem(this.getData),this.cartService.cartNumber.next(this.getData.length)})}editItem(e){}payment(){alert("mission compleat")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-order-page"]],viewQuery:function(e,i){if(1&e&&t.Gf(x.YE,5),2&e){let r;t.iGM(r=t.CRH())&&(i.sort=r.first)}},decls:53,vars:7,consts:[[1,"order-block"],[1,"order-card"],[1,"order-title"],[1,"order-body"],["mat-table","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","No."],["matColumnDef","Flight"],["matColumnDef","Type trip"],["matColumnDef","Data & Time"],["matColumnDef","Passengers"],["matColumnDef","Price"],["matColumnDef","btn"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"card-footer"],[1,"footer-top-block"],[1,"add-trip-block"],["mat-stroked-button","",3,"routerLink"],[1,"total-price-block"],[1,"footer-bottom-block"],[1,"promo-code-block"],["type","text","placeholder","Promo code"],[1,"payment-btn-block"],["color","primary","mat-raised-button","",3,"click"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","change"],["mat-cell",""],["color","primary",3,"checked","disabled","click","change"],[1,"flight-name"],["class","flight-name",4,"ngIf"],[4,"ngIf"],[1,"price-name"],["mat-cell","",3,"click"],["mat-icon-button","","aria-label","menu btn",3,"matMenuTriggerFor"],["yPosition","below","xPosition","after"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Cart"),t.qZA()(),t.TgZ(5,"div",3)(6,"table",4),t.ynx(7,5),t.YNc(8,O,2,2,"th",6),t.YNc(9,T,2,2,"td",7),t.BQk(),t.ynx(10,8),t.YNc(11,Z,3,0,"th",6),t.YNc(12,k,4,2,"td",7),t.BQk(),t.ynx(13,9),t.YNc(14,v,2,0,"th",6),t.YNc(15,M,4,2,"td",7),t.BQk(),t.ynx(16,10),t.YNc(17,w,2,0,"th",6),t.YNc(18,N,2,1,"td",7),t.BQk(),t.ynx(19,11),t.YNc(20,D,2,0,"th",6),t.YNc(21,S,7,13,"td",7),t.BQk(),t.ynx(22,12),t.YNc(23,q,2,0,"th",6),t.YNc(24,J,5,3,"td",7),t.BQk(),t.ynx(25,13),t.YNc(26,I,2,0,"th",6),t.YNc(27,$,3,1,"td",7),t.BQk(),t.ynx(28,14),t.YNc(29,B,1,0,"th",6),t.YNc(30,R,12,1,"td",15),t.BQk(),t.YNc(31,H,1,0,"tr",16),t.YNc(32,E,1,0,"tr",17),t.qZA()(),t.TgZ(33,"div",18)(34,"div",19)(35,"div",20)(36,"button",21),t._uU(37,"+ Add new trip"),t.qZA()(),t.TgZ(38,"div",22)(39,"h4"),t._uU(40,"Total"),t.qZA(),t.TgZ(41,"div"),t._uU(42),t.qZA()()(),t.TgZ(43,"div",23)(44,"div",24),t._UZ(45,"input",25),t.TgZ(46,"button"),t._uU(47,"APPLY"),t.qZA()(),t.TgZ(48,"div",26)(49,"p"),t._uU(50),t.qZA(),t.TgZ(51,"button",27),t.NdJ("click",function(){return i.payment()}),t._uU(52,"Payment"),t.qZA()()()()()()),2&e&&(t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(4),t.Q6J("routerLink",t.DdM(6,j)),t.xp6(6),t.hij("$ ",i.commonPrice.toFixed(2),""),t.xp6(8),t.hij("",i.selection.selected.length," selected"))},dependencies:[m.O5,p.rH,P.Hw,s.VK,s.OP,s.p6,u.lW,u.RK,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,b.oG,m.uU],styles:[".order-block[_ngcontent-%COMP%]{margin-top:130px;width:100%;height:77vh}.order-card[_ngcontent-%COMP%]{background:#FFFFFF;box-shadow:0 1px 4px #0003;border-radius:8px;padding:32px 33px;width:100%}h2[_ngcontent-%COMP%]{color:#11397e}tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:500;font-size:18px;line-height:32px;letter-spacing:.5px;color:#000}th.mat-mdc-header-cell[_ngcontent-%COMP%]{background:#F5F5F5;margin:0 -33px}td[_ngcontent-%COMP%]{padding:10px}.flight-name[_ngcontent-%COMP%]{color:#0090bd!important}.price-name[_ngcontent-%COMP%]{color:#7f8906}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.card-footer[_ngcontent-%COMP%]   .footer-bottom-block[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%]   .footer-top-block[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.card-footer[_ngcontent-%COMP%]   .footer-top-block[_ngcontent-%COMP%]{border-top:1px solid #E1E5EB;border-bottom:1px solid #E1E5EB;margin-bottom:36px}.card-footer[_ngcontent-%COMP%]   .total-price-block[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.card-footer[_ngcontent-%COMP%]   .total-price-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:30px;line-height:36px;background:linear-gradient(90deg,#11397E 0%,#005ABC 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.card-footer[_ngcontent-%COMP%]   .total-price-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:20px;line-height:20px;display:flex;align-items:center;color:#000}.card-footer[_ngcontent-%COMP%]   .promo-code-block[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}.card-footer[_ngcontent-%COMP%]   .promo-code-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:374px;height:40px;border-radius:4px;padding:0 18px;font-size:14px;border:1px solid #74767A}.card-footer[_ngcontent-%COMP%]   .promo-code-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;position:absolute;right:0;top:0;height:42px;padding:0 10px;background-color:transparent;border:none;cursor:pointer;font-family:Roboto;font-style:normal;font-weight:500;font-size:14px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:.1px;color:#11397e}.card-footer[_ngcontent-%COMP%]   .promo-code-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:rgba(224,224,224,.3882352941);border-radius:4px}.card-footer[_ngcontent-%COMP%]   .payment-btn-block[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.card-footer[_ngcontent-%COMP%]   .payment-btn-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:24px;display:flex;align-items:center;letter-spacing:.5px;color:#74767a}.add-trip-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#F4F6F9;border-radius:4px;border:none;font-family:Roboto;font-style:normal;font-weight:500;font-size:14px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:.1px;color:#11397e}"]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,p.Bz.forChild([{path:"",component:f,children:[{path:"",component:z}]}]),h.q]}),n})()}}]);