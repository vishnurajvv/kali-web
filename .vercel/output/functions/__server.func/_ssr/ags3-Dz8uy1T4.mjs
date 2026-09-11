import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronDown, o as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as faqs, d as cn, n as Button, s as layers } from "./router-po8-eXfE.mjs";
import { t as CtaBand } from "./cta-band-DZ1a7vel.mjs";
import { t as Ags3Console } from "./ags3-console-Bm3_mXDm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ags3-Dz8uy1T4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors duration-150 hover:text-accent [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var CAPABILITIES = [
	{
		title: "Voice agents",
		body: "Live conversation with barge-in, verification, and a spoken brief on transfer. Not an IVR tree with a neural voice."
	},
	{
		title: "Non-voice queues",
		body: "Chat, email, social, and tickets share the same customer memory and the same policy envelope as voice."
	},
	{
		title: "Tech & IT actions",
		body: "Approved runbooks — resets, access, device, SaaS — executed with an audit trail your ITSM already understands."
	},
	{
		title: "BPO back office",
		body: "KYC, billing exceptions, claims, and catalog work as exception-first queues instead of linear headcount."
	},
	{
		title: "Quality supervision",
		body: "Every contact is scored against policy in flight. Sampling is a report, not the control system."
	},
	{
		title: "Feedback intelligence",
		body: "Themes, severity, and product surfaces land in a daily brief. The same loop that runs the floor recommends how to change it."
	}
];
function Ags3Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden border-b border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/ags3.jpg",
					alt: "Dark glass planes in a data hall, standing in for the AGS3 mesh.",
					className: "media absolute inset-0 size-full object-cover opacity-50",
					width: 1792,
					height: 1008
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
							children: "First product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl md:text-7xl",
							children: "AGS3 — the AI-automated BPO system."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Specialist agents handle the work. Humans take the exceptions. Feedback from every contact steers routing, staffing, and the next playbook. That loop is the product."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Request a briefing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Service lines"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl",
						children: "What operations leadership actually watches."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted-foreground",
						children: "Queue, specialist load, CSAT, FCR, and the themes coming off the contacts — one surface. The numbers below move because the demo is wired to a live loop, the same way a floor is."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ags3Console, {})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl",
						children: "Three layers. Generation 3."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 divide-y divide-border border-y border-border",
						children: layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-3 py-8 md:grid-cols-12 md:items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-subtle md:col-span-2",
									children: [
										layer.number,
										" · ",
										layer.name
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl tracking-[var(--tracking-display)] md:col-span-4",
									children: layer.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground md:col-span-6",
									children: layer.body
								})
							]
						}, layer.number))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl",
						children: "Built for the work, not a chat window."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: CAPABILITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-2xl bg-card p-2 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-background px-5 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium text-foreground",
									children: c.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.body
								})]
							})
						}, c.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
							children: "Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl tracking-[var(--tracking-display)]",
							children: "Direct answers."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "w-full",
							children: faqs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `q-${i}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
							}, item.q))
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Ags3Page as component };
