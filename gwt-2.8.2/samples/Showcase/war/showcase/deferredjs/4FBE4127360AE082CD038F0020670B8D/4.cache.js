$wnd.showcase.runAsyncCallback4("function tp(b,a){b.multiple=a}\nfunction dSb(a,b,c){this.a=a;this.c=b;this.b=c}\nfunction vmc(a){jmc();umc.call(this);tp((Tac(),this.hb),a)}\nfunction rmc(a,b){var c,d;Quc((Tac(),a.hb),'',b);d=a.hb.options.length;for(c=0;c<d;c++){Quc(a.hb.options[c],b,'item'+c)}}\nfunction RFb(a){var b,c;b=kfb(bFc(a.a,PSc),5);if(b==null){c=xeb(reb(zAb,1),uPc,2,6,['Cars','Sports','Vacation Spots']);eFc(a.a,PSc,c);return c}else{return b}}\nfunction QFb(a){var b,c;b=kfb(bFc(a.a,OSc),5);if(b==null){c=xeb(reb(zAb,1),uPc,2,6,['compact','sedan','coupe','convertible','SUV','truck']);eFc(a.a,OSc,c);return c}else{return b}}\nfunction TFb(a){var b,c;b=kfb(bFc(a.a,RSc),5);if(b==null){c=xeb(reb(zAb,1),uPc,2,6,['Carribean','Grand Canyon','Paris','Italy','New York','Las Vegas']);eFc(a.a,RSc,c);return c}else{return b}}\nfunction SFb(a){var b,c;b=kfb(bFc(a.a,QSc),5);if(b==null){c=xeb(reb(zAb,1),uPc,2,6,['Baseball',MSc,'Football','Hockey','Lacrosse','Polo','Soccer','Softball',NSc]);eFc(a.a,QSc,c);return c}else{return b}}\nfunction aSb(a,b,c){var d,e;(Tac(),b.hb).options.length=0;e=null;switch(c){case 0:e=QFb(a.a);break;case 1:e=SFb(a.a);break;case 2:e=TFb(a.a);}for(d=0;d<e.length;d++){kmc(b,e[d])}}\nfunction _Rb(a){var b,c,d,e,f,g,h;d=new ylc;d.e[QRc]=20;b=new vmc(false);f=RFb(a.a);for(e=0;e<f.length;e++){kmc(b,f[e])}rmc(b,'cwListBox-dropBox');c=new fvc;c.e[QRc]=4;cvc(c,new Nhc('<b>Select a category:<\\/b>'));cvc(c,b);vlc(d,c);g=new vmc(true);rmc(g,SSc);(Tac(),g.hb).style[JNc]='11em';g.hb.size=10;h=new fvc;h.e[QRc]=4;cvc(h,new Nhc('<b>Select all that apply:<\\/b>'));cvc(h,g);vlc(d,h);Kh(b,new dSb(a,g,b),(zt(),zt(),yt));aSb(a,g,0);rmc(g,SSc);return d}\nvar OSc='cwListBoxCars',PSc='cwListBoxCategories',QSc='cwListBoxSports',RSc='cwListBoxVacations',SSc='cwListBox-multiBox';xCb(430,1,nQc,dSb);_.Rc=function eSb(a){aSb(this.a,this.c,eh(this.b).selectedIndex);rmc(this.c,SSc)};var orb=GBc(AQc,'CwListBox/1',430);xCb(431,1,vQc);_.Bc=function hSb(){REb(this.b,_Rb(this.a))};xCb(102,273,NNc,vmc);YMc(zl)(4);\n//# sourceURL=showcase-4.js\n")
