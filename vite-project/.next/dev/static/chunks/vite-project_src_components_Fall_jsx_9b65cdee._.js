(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vite-project/src/components/Fall.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
function Fall({ children, delay = 0, color = "#ededed" }) {
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Fall.useEffect": ()=>{
            if (!elementRef.current || !textRef.current) return;
            const element = elementRef.current;
            const originalText = textRef.current;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Fall.useEffect.ctx": ()=>{
                    let colorBoxes = [];
                    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](originalText, {
                        type: "words"
                    });
                    const words = split.words;
                    colorBoxes = words.map({
                        "Fall.useEffect.ctx": (word)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(word, {
                                display: "inline-block",
                                position: "relative"
                            });
                            const wordRect = word.getBoundingClientRect();
                            const colorBox = document.createElement("div");
                            colorBox.style.position = "absolute";
                            colorBox.style.top = "0";
                            colorBox.style.left = "50%";
                            colorBox.style.transform = "translateX(-50%)";
                            colorBox.style.zIndex = "10";
                            colorBox.style.width = `${wordRect.width * 1.1}px`;
                            colorBox.style.height = `${wordRect.height * 0.9}px`;
                            colorBox.style.background = color;
                            colorBox.style.borderRadius = ".5vw";
                            colorBox.style.pointerEvents = "none";
                            word.appendChild(colorBox);
                            return colorBox;
                        }
                    }["Fall.useEffect.ctx"]);
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "bottom 30%"
                        },
                        delay: delay,
                        onComplete: {
                            "Fall.useEffect.ctx.tl": ()=>{
                                colorBoxes.forEach({
                                    "Fall.useEffect.ctx.tl": (box)=>{
                                        box.style.display = "none";
                                    }
                                }["Fall.useEffect.ctx.tl"]);
                            }
                        }["Fall.useEffect.ctx.tl"]
                    });
                    tl.to(colorBoxes, {
                        y: {
                            "Fall.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(1200, 1600)
                        }["Fall.useEffect.ctx"],
                        x: {
                            "Fall.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-150, 150)
                        }["Fall.useEffect.ctx"],
                        rotation: {
                            "Fall.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-360, 360)
                        }["Fall.useEffect.ctx"],
                        duration: 1,
                        ease: "power2.in",
                        stagger: 0.02
                    });
                }
            }["Fall.useEffect.ctx"], elementRef);
            return ({
                "Fall.useEffect": ()=>ctx.revert()
            })["Fall.useEffect"];
        }
    }["Fall.useEffect"], [
        delay,
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: textRef,
            children: children
        }, void 0, false, {
            fileName: "[project]/vite-project/src/components/Fall.jsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/vite-project/src/components/Fall.jsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_s(Fall, "T1vVCKMXXlkIqYtHVeWSXaGHKfg=");
_c = Fall;
var _c;
__turbopack_context__.k.register(_c, "Fall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vite-project_src_components_Fall_jsx_9b65cdee._.js.map