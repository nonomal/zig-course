if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>i(e,a),d={module:{uri:a},exports:r,require:o};s[a]=Promise.all(l.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-21a32daf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4f883ca9d07233b075e89a1ecc39ded7"},{url:"about.html",revision:"94e27e320089583980bc3631fa7fd5c7"},{url:"advanced/assembly.html",revision:"73d8dbaccf44a368eba092005fdc021a"},{url:"advanced/async.html",revision:"1696145debb9060d4d6f6ea0902827c8"},{url:"advanced/comptime.html",revision:"6529d43499a20936f651e2eab4b37d3d"},{url:"advanced/interact-with-c.html",revision:"74458f061fae883e165003c1d8082e42"},{url:"advanced/memory_manage.html",revision:"2fc713e6f3a9bb07f67acf9dee8c2aff"},{url:"advanced/package_management.html",revision:"b30b58971e3b569c4908f46c8657a70c"},{url:"advanced/type_cast.html",revision:"6d726ca965023085baa69b8641a8eacc"},{url:"appendix/community.html",revision:"62a9b15e53793a09975277511644ba03"},{url:"appendix/well-known-lib.html",revision:"536a0749d4b680aefc77a7415965caf5"},{url:"assets/about.md.ykIArmoL.js",revision:null},{url:"assets/about.md.ykIArmoL.lean.js",revision:null},{url:"assets/advanced_assembly.md.kcZHkdaY.js",revision:null},{url:"assets/advanced_assembly.md.kcZHkdaY.lean.js",revision:null},{url:"assets/advanced_async.md.VQGCngWL.js",revision:null},{url:"assets/advanced_async.md.VQGCngWL.lean.js",revision:null},{url:"assets/advanced_comptime.md.pnTIkLZt.js",revision:null},{url:"assets/advanced_comptime.md.pnTIkLZt.lean.js",revision:null},{url:"assets/advanced_interact-with-c.md.H69Ithrp.js",revision:null},{url:"assets/advanced_interact-with-c.md.H69Ithrp.lean.js",revision:null},{url:"assets/advanced_memory_manage.md.i2oFE_Ti.js",revision:null},{url:"assets/advanced_memory_manage.md.i2oFE_Ti.lean.js",revision:null},{url:"assets/advanced_package_management.md.FRSgJEnR.js",revision:null},{url:"assets/advanced_package_management.md.FRSgJEnR.lean.js",revision:null},{url:"assets/advanced_type_cast.md.8Z3dUuH7.js",revision:null},{url:"assets/advanced_type_cast.md.8Z3dUuH7.lean.js",revision:null},{url:"assets/app.A4hLQpul.js",revision:null},{url:"assets/appendix_community.md.G9EBoso1.js",revision:null},{url:"assets/appendix_community.md.G9EBoso1.lean.js",revision:null},{url:"assets/appendix_well-known-lib.md.E9mBt57o.js",revision:null},{url:"assets/appendix_well-known-lib.md.E9mBt57o.lean.js",revision:null},{url:"assets/basic_advanced_type_array.md.eOK9v2rT.js",revision:null},{url:"assets/basic_advanced_type_array.md.eOK9v2rT.lean.js",revision:null},{url:"assets/basic_advanced_type_enum.md.teTwvbO-.js",revision:null},{url:"assets/basic_advanced_type_enum.md.teTwvbO-.lean.js",revision:null},{url:"assets/basic_advanced_type_opaque.md.K5RBMZJL.js",revision:null},{url:"assets/basic_advanced_type_opaque.md.K5RBMZJL.lean.js",revision:null},{url:"assets/basic_advanced_type_pointer.md.li6jvhWa.js",revision:null},{url:"assets/basic_advanced_type_pointer.md.li6jvhWa.lean.js",revision:null},{url:"assets/basic_advanced_type_silce.md.uxKDLaLD.js",revision:null},{url:"assets/basic_advanced_type_silce.md.uxKDLaLD.lean.js",revision:null},{url:"assets/basic_advanced_type_struct.md.Laucr6YZ.js",revision:null},{url:"assets/basic_advanced_type_struct.md.Laucr6YZ.lean.js",revision:null},{url:"assets/basic_advanced_type_vector.md.5ogYL8pw.js",revision:null},{url:"assets/basic_advanced_type_vector.md.5ogYL8pw.lean.js",revision:null},{url:"assets/basic_basic_type_char-and-boolean.md.X0W9fM-3.js",revision:null},{url:"assets/basic_basic_type_char-and-boolean.md.X0W9fM-3.lean.js",revision:null},{url:"assets/basic_basic_type_function.md.4WZ2Qbdw.js",revision:null},{url:"assets/basic_basic_type_function.md.4WZ2Qbdw.lean.js",revision:null},{url:"assets/basic_basic_type_number.md.ZowYXGf7.js",revision:null},{url:"assets/basic_basic_type_number.md.ZowYXGf7.lean.js",revision:null},{url:"assets/basic_define-variable.md.iJdilg5K.js",revision:null},{url:"assets/basic_define-variable.md.iJdilg5K.lean.js",revision:null},{url:"assets/basic_error_handle.md.bKQMTYL9.js",revision:null},{url:"assets/basic_error_handle.md.bKQMTYL9.lean.js",revision:null},{url:"assets/basic_optional_type.md.QuaF4CGH.js",revision:null},{url:"assets/basic_optional_type.md.QuaF4CGH.lean.js",revision:null},{url:"assets/basic_process_control_decision.md.XIVrPQQM.js",revision:null},{url:"assets/basic_process_control_decision.md.XIVrPQQM.lean.js",revision:null},{url:"assets/basic_process_control_defer.md.9IxGuh4Y.js",revision:null},{url:"assets/basic_process_control_defer.md.9IxGuh4Y.lean.js",revision:null},{url:"assets/basic_process_control_loop.md.LOjpjVCY.js",revision:null},{url:"assets/basic_process_control_loop.md.LOjpjVCY.lean.js",revision:null},{url:"assets/basic_process_control_switch.md.ks5-3mkL.js",revision:null},{url:"assets/basic_process_control_switch.md.ks5-3mkL.lean.js",revision:null},{url:"assets/basic_process_control_unreachable.md.bkAxL_Rj.js",revision:null},{url:"assets/basic_process_control_unreachable.md.bkAxL_Rj.lean.js",revision:null},{url:"assets/basic_union.md.wRhatYVV.js",revision:null},{url:"assets/basic_union.md.wRhatYVV.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.vWKA27jj.js",revision:null},{url:"assets/chunks/framework.xodzkkLE.js",revision:null},{url:"assets/chunks/giscus-aTimukGI.jKnbteiG.js",revision:null},{url:"assets/chunks/theme.Ji6SGpFI.js",revision:null},{url:"assets/chunks/virtual_pwa-register.hH3aQ4G2.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.YIIZwX0t.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"assets/engineering_build-system.md.3BIVTetM.js",revision:null},{url:"assets/engineering_build-system.md.3BIVTetM.lean.js",revision:null},{url:"assets/engineering_unit-test.md.MtsSr4Am.js",revision:null},{url:"assets/engineering_unit-test.md.MtsSr4Am.lean.js",revision:null},{url:"assets/environment_editor.md.5JIzLNPP.js",revision:null},{url:"assets/environment_editor.md.5JIzLNPP.lean.js",revision:null},{url:"assets/environment_install-environment.md.SF7FYFSR.js",revision:null},{url:"assets/environment_install-environment.md.SF7FYFSR.lean.js",revision:null},{url:"assets/environment_zig-command.md.k5AXqUAD.js",revision:null},{url:"assets/environment_zig-command.md.k5AXqUAD.lean.js",revision:null},{url:"assets/epilogue.md.IIkM0UVC.js",revision:null},{url:"assets/epilogue.md.IIkM0UVC.lean.js",revision:null},{url:"assets/hello-world.md.2rgOk8R7.js",revision:null},{url:"assets/hello-world.md.2rgOk8R7.lean.js",revision:null},{url:"assets/index.md.mZ4-zn6L.js",revision:null},{url:"assets/index.md.mZ4-zn6L.lean.js",revision:null},{url:"assets/more_atomic.md.AGap3aE0.js",revision:null},{url:"assets/more_atomic.md.AGap3aE0.lean.js",revision:null},{url:"assets/more_builtin_func.md.33sAmGTs.js",revision:null},{url:"assets/more_builtin_func.md.33sAmGTs.lean.js",revision:null},{url:"assets/more_miscellaneous.md.N1iWHECA.js",revision:null},{url:"assets/more_miscellaneous.md.N1iWHECA.lean.js",revision:null},{url:"assets/more_reflection.md.251xBZ8_.js",revision:null},{url:"assets/more_reflection.md.251xBZ8_.lean.js",revision:null},{url:"assets/more_style_guide.md.wYAcMmkk.js",revision:null},{url:"assets/more_style_guide.md.wYAcMmkk.lean.js",revision:null},{url:"assets/more_undefined_behavior.md.yLxv5aEl.js",revision:null},{url:"assets/more_undefined_behavior.md.yLxv5aEl.lean.js",revision:null},{url:"assets/more_wasm.md.dwlqgUeU.js",revision:null},{url:"assets/more_wasm.md.dwlqgUeU.lean.js",revision:null},{url:"assets/more_zero-type.md.WDjyt19_.js",revision:null},{url:"assets/more_zero-type.md.WDjyt19_.lean.js",revision:null},{url:"assets/prologue.md.zOhSoIhc.js",revision:null},{url:"assets/prologue.md.zOhSoIhc.lean.js",revision:null},{url:"assets/style.ImankCKb.css",revision:null},{url:"basic/advanced_type/array.html",revision:"962cd9626d5e4b9d133bdd7578cd1d0e"},{url:"basic/advanced_type/enum.html",revision:"ba4eee45eb2a92be5cc1a1ac5164a278"},{url:"basic/advanced_type/opaque.html",revision:"f13c7ae488f0d49c39bcad39d098e18b"},{url:"basic/advanced_type/pointer.html",revision:"b60958262ec45262d0e29c421ce28773"},{url:"basic/advanced_type/silce.html",revision:"8e5d57fc9688eeb1a1724e7050a3fc2e"},{url:"basic/advanced_type/struct.html",revision:"b4060814ea6443a1bf0e4a73df92518e"},{url:"basic/advanced_type/vector.html",revision:"9ca73a98b8bfc874c5dfd5044e8bdaef"},{url:"basic/basic_type/char-and-boolean.html",revision:"6b04de36ce5c42558a272f03466866f5"},{url:"basic/basic_type/function.html",revision:"744688feecb0099d91b0a50f864f31de"},{url:"basic/basic_type/number.html",revision:"96dd7d484ad5a29a0c34db2476485091"},{url:"basic/define-variable.html",revision:"be4b49d43283c8fd78bf99ad84d9c6b4"},{url:"basic/error_handle.html",revision:"332c4d1497b4a67ef5861d17742ecb24"},{url:"basic/optional_type.html",revision:"c3f0dfc27e55065a512c8058ab846fa1"},{url:"basic/process_control/decision.html",revision:"4c30721d6a6c7a2d8668913f52fe6657"},{url:"basic/process_control/defer.html",revision:"4ec1eef587854413c87e4bfee9f60310"},{url:"basic/process_control/loop.html",revision:"b63f0014b08263fbcf791d4e3094ad03"},{url:"basic/process_control/switch.html",revision:"fcd03fad35dcc026ac5acefbc8795043"},{url:"basic/process_control/unreachable.html",revision:"6624051f1054bd62d77e05a4a2913879"},{url:"basic/union.html",revision:"8248565ed903f7b9c497a7c40cb7712b"},{url:"engineering/build-system.html",revision:"1dbe1e5a8f9fa9b2cebb2d63ec4f495b"},{url:"engineering/unit-test.html",revision:"86f724f2c3351efb5ed72d507be47688"},{url:"environment/editor.html",revision:"5247bc936dabbf255d5932d9d8a82be2"},{url:"environment/install-environment.html",revision:"0b9cf7c9af84873d5189ef9300a4c5f3"},{url:"environment/zig-command.html",revision:"4a3e8572755ee3cfc20263d958e11a59"},{url:"epilogue.html",revision:"438fe5de8c434304f06b60b2d8e9db1f"},{url:"hello-world.html",revision:"ad74e32f9d49b8ecff87da68cdc05c1c"},{url:"index.html",revision:"03ff9f188cf2150d113786ffe6b7842c"},{url:"more/atomic.html",revision:"8bab158a80b3ae29dc63a16b77e9eeef"},{url:"more/builtin_func.html",revision:"ebad48d540f3c6d73e1235bbedee3d49"},{url:"more/miscellaneous.html",revision:"82dfe3c3d4651687d9edcb2f92f6b4f6"},{url:"more/reflection.html",revision:"44f2f7623a7dc428a2b3647ff18cdd13"},{url:"more/style_guide.html",revision:"f7da2081fe3f71b378e7655aa8f33b68"},{url:"more/undefined_behavior.html",revision:"f54a93ec9ae9f7ea41d071de986a0d01"},{url:"more/wasm.html",revision:"b4af92b861bbda6d790796d8dacab75d"},{url:"more/zero-type.html",revision:"bab30a8d35e48bbd08e7406d2cbe7f92"},{url:"prologue.html",revision:"f5e953941175c7d2f1c600144a9582b1"},{url:"favicon.ico",revision:"5bdeb6897404e4cf8f35bae74ec66f1c"},{url:"apple-touch-icon.png",revision:"2b58137eae853c0890ccbbc7a24ba4e0"},{url:"safari-pinned-tab.svg",revision:"a0423af86cc7b79f7c8001dca33dd027"},{url:"android-chrome-192x192.png",revision:"cfa7b3ef9e2cf141fd54728cdc22a583"},{url:"android-chrome-512x512.png",revision:"61edb901e78c4a3cfcac6c18956995f0"},{url:"manifest.webmanifest",revision:"8073ded314973b7a852b95d1ac95e757"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/zig\x2dcourse\/about(\.html)?$/,/^\/zig\x2dcourse\/advanced\/assembly(\.html)?$/,/^\/zig\x2dcourse\/advanced\/async(\.html)?$/,/^\/zig\x2dcourse\/advanced\/comptime(\.html)?$/,/^\/zig\x2dcourse\/advanced\/interact\x2dwith\x2dc(\.html)?$/,/^\/zig\x2dcourse\/advanced\/memory_manage(\.html)?$/,/^\/zig\x2dcourse\/advanced\/package_management(\.html)?$/,/^\/zig\x2dcourse\/advanced\/type_cast(\.html)?$/,/^\/zig\x2dcourse\/appendix\/community(\.html)?$/,/^\/zig\x2dcourse\/appendix\/well\x2dknown\x2dlib(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/array(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/enum(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/opaque(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/pointer(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/silce(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/struct(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/vector(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/char\x2dand\x2dboolean(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/function(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/number(\.html)?$/,/^\/zig\x2dcourse\/basic\/define\x2dvariable(\.html)?$/,/^\/zig\x2dcourse\/basic\/error_handle(\.html)?$/,/^\/zig\x2dcourse\/basic\/optional_type(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/decision(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/defer(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/loop(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/switch(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/unreachable(\.html)?$/,/^\/zig\x2dcourse\/basic\/union(\.html)?$/,/^\/zig\x2dcourse\/engineering\/build\x2dsystem(\.html)?$/,/^\/zig\x2dcourse\/engineering\/unit\x2dtest(\.html)?$/,/^\/zig\x2dcourse\/environment\/editor(\.html)?$/,/^\/zig\x2dcourse\/environment\/install\x2denvironment(\.html)?$/,/^\/zig\x2dcourse\/environment\/zig\x2dcommand(\.html)?$/,/^\/zig\x2dcourse\/epilogue(\.html)?$/,/^\/zig\x2dcourse\/hello\x2dworld(\.html)?$/,/^\/zig\x2dcourse\/(\.html)?$/,/^\/zig\x2dcourse\/more\/atomic(\.html)?$/,/^\/zig\x2dcourse\/more\/builtin_func(\.html)?$/,/^\/zig\x2dcourse\/more\/miscellaneous(\.html)?$/,/^\/zig\x2dcourse\/more\/reflection(\.html)?$/,/^\/zig\x2dcourse\/more\/style_guide(\.html)?$/,/^\/zig\x2dcourse\/more\/undefined_behavior(\.html)?$/,/^\/zig\x2dcourse\/more\/wasm(\.html)?$/,/^\/zig\x2dcourse\/more\/zero\x2dtype(\.html)?$/,/^\/zig\x2dcourse\/prologue(\.html)?$/]})),e.registerRoute((({request:e,sameOrigin:s})=>s&&"navigate"===e.mode),new e.NetworkOnly({plugins:[{handlerDidError:async()=>Response.redirect("404",302),cacheWillUpdate:async()=>null}]}),"GET")}));
