import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as principles } from "./router-po8-eXfE.mjs";
import { t as CtaBand } from "./cta-band-DZ1a7vel.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BLnEA7uZ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl",
						children: "Named for the age we actually operate in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Legacy BPO is labour arbitrage with a headset. Kaliyugaa builds the system that takes the volume, keeps people on the exceptions, and treats every contact as a sample of the market."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/campus.jpg",
				alt: "Courtyard of a contemporary campus in Bengaluru at blue hour.",
				className: "media h-72 w-full object-cover sm:h-96 lg:h-full lg:max-h-[32rem]",
				width: 1792,
				height: 1008
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Stance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl tracking-[var(--tracking-display)] sm:text-4xl",
						children: "An operations company, not a chatbot studio."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We started in Bengaluru because that is where the world already runs its customer operations — and where those operations are under the most pressure to do more than add seats." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AGS3 is our first product: an AI-automated BPO system. It connects to the telephony, CRM, and ticketing you already have, then deploys a mesh of specialist agents for care, tech, voice, and non-voice. A steering layer reads quality and feedback and writes back into routing and playbooks." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We will not sell you a demo that cannot sit on a night shift. If a queue cannot be audited, it is not in production." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Principles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-[var(--tracking-display)]",
						children: "How the work is split."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2",
						children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-2xl bg-card p-2 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-background px-5 py-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-xs text-subtle",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl tracking-[var(--tracking-display)]",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: p.body
									})
								]
							})
						}, p.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
