import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Button, u as services } from "./router-po8-eXfE.mjs";
import { t as CtaBand } from "./cta-band-DZ1a7vel.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C_RyZiPC.js
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = {
	"customer-care": {
		src: "/images/voice.jpg",
		alt: "Specialist on a customer-care voice channel."
	},
	bpo: {
		src: "/images/analysis.jpg",
		alt: "Back-office desk with case work in progress."
	},
	"tech-it": {
		src: "/images/tech.jpg",
		alt: "Server corridor used for tech and IT operations."
	},
	voice: {
		src: "/images/hero.jpg",
		alt: "Night operations floor running live voice."
	},
	"non-voice": {
		src: "/images/ags3.jpg",
		alt: "Glass planes standing in for digital non-voice queues."
	},
	"market-analysis": {
		src: "/images/analysis.jpg",
		alt: "Desk used for feedback and market analysis."
	}
};
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Operations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl",
						children: "Advanced operations support, run as a system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Kaliyugaa does not staff a floor and hope the numbers move. Each line below is executed by AGS3 — specialist agents, human exceptions, and a steering loop from live feedback."
					})
				]
			})
		}),
		services.map((s, i) => {
			const image = IMAGES[s.id];
			const reverse = i % 2 === 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: s.id,
				className: "scroll-mt-20 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid lg:grid-cols-2 ${reverse ? "lg:[&>img]:order-2" : ""}`,
					children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						className: "media h-64 w-full object-cover sm:h-80 lg:h-full",
						width: 1600,
						height: 1e3
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center px-5 py-12 sm:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: s.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl tracking-[var(--tracking-display)]",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-base leading-relaxed text-muted-foreground",
								children: s.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2",
								children: s.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
								}, p))
							})
						]
					})]
				})
			}, s.id);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-muted-foreground",
					children: "Agentic optimization is not a seventh brochure. It is how all six lines improve after the first week."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ags3",
						children: ["How AGS3 steers the floor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ServicesPage as component };
