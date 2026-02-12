module.exports = [
"[project]/vite-project/src/components/Fall.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vite-project/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"]);
function Fall({ children, delay = 0, color = "#ededed" }) {
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!elementRef.current || !textRef.current) return;
        const element = elementRef.current;
        const originalText = textRef.current;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            let colorBoxes = [];
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](originalText, {
                type: "words"
            });
            const words = split.words;
            colorBoxes = words.map((word)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(word, {
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
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 30%"
                },
                delay: delay,
                onComplete: ()=>{
                    colorBoxes.forEach((box)=>{
                        box.style.display = "none";
                    });
                }
            });
            tl.to(colorBoxes, {
                y: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(1200, 1600),
                x: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-150, 150),
                rotation: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-360, 360),
                duration: 1,
                ease: "power2.in",
                stagger: 0.02
            });
        }, elementRef);
        return ()=>ctx.revert();
    }, [
        delay,
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vite$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
];

//# sourceMappingURL=vite-project_src_components_Fall_jsx_997c887e._.js.map