import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { d as cn } from "./router-po8-eXfE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ags3-console-Bm3_mXDm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		accent: "border-transparent bg-accent text-accent-foreground",
		outline: "border-border text-muted-foreground",
		live: "border-accent/30 bg-accent/10 text-accent"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var AGENTS = [
	{
		id: "care-03",
		line: "care",
		channel: "voice",
		load: 91
	},
	{
		id: "billing-07",
		line: "bpo",
		channel: "voice",
		load: 86
	},
	{
		id: "tech-12",
		line: "it",
		channel: "chat",
		load: 78
	},
	{
		id: "kyc-02",
		line: "bpo",
		channel: "email",
		load: 64
	},
	{
		id: "retain-11",
		line: "care",
		channel: "chat",
		load: 88
	},
	{
		id: "field-04",
		line: "it",
		channel: "ticket",
		load: 71
	}
];
var THEMES = [
	{
		label: "OTP delivery lag",
		delta: "+18%",
		action: "Playbook 14 pushed"
	},
	{
		label: "SIM-swap verification",
		delta: "+9%",
		action: "Extra KYC agent"
	},
	{
		label: "Plan-change confusion",
		delta: "−4%",
		action: "Script retracted"
	}
];
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function Ags3Console() {
	const [queue, setQueue] = (0, import_react.useState)({
		voice: 12,
		chat: 19,
		email: 5,
		ticket: 2
	});
	const [csat, setCsat] = (0, import_react.useState)(4.82);
	const [fcr, setFcr] = (0, import_react.useState)(91);
	const [clock, setClock] = (0, import_react.useState)("00:00:00");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			setClock((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
				timeZone: "Asia/Kolkata"
			}));
		};
		tick();
		const clockId = window.setInterval(tick, 1e3);
		const qId = window.setInterval(() => {
			setQueue((q) => ({
				voice: clamp(q.voice + (Math.random() > .5 ? 1 : -1), 6, 22),
				chat: clamp(q.chat + (Math.random() > .5 ? 1 : -1), 8, 28),
				email: clamp(q.email + (Math.random() > .6 ? 1 : -1), 2, 12),
				ticket: clamp(q.ticket + (Math.random() > .7 ? 1 : -1), 1, 8)
			}));
			setCsat((v) => clamp(Number((v + (Math.random() - .5) * .04).toFixed(2)), 4.6, 4.95));
			setFcr((v) => clamp(v + (Math.random() > .5 ? 1 : -1), 86, 96));
		}, 2200);
		return () => {
			window.clearInterval(clockId);
			window.clearInterval(qId);
		};
	}, []);
	const waiting = queue.voice + queue.chat + queue.email + queue.ticket;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "live",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot mr-1.5 inline-block size-1.5 rounded-full bg-accent" }), "Live floor"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
							children: "AGS3 · floor 04"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs tabular-nums text-muted-foreground",
						children: [clock, " IST"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "In queue",
							value: String(waiting)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Active agents",
							value: "142"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "CSAT",
							value: csat.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "FCR",
							value: `${fcr}%`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-px bg-border lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							title: "Queue",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Channel, {
									name: "Voice",
									value: queue.voice,
									max: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Channel, {
									name: "Chat",
									value: queue.chat,
									max: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Channel, {
									name: "Email",
									value: queue.email,
									max: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Channel, {
									name: "Ticket",
									value: queue.ticket,
									max: 28
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Specialist agents",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								children: AGENTS.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate font-mono text-xs text-foreground",
											children: agent.id
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden capitalize sm:inline",
											children: agent.channel
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums",
											children: [agent.load, "%"]
										})]
									})]
								}, agent.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Feedback intelligence",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: THEMES.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-foreground",
										children: theme.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tabular-nums text-accent",
										children: theme.delta
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: theme.action
								})] }, theme.label))
							})
						})
					]
				})
			]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-3xl tabular-nums tracking-[var(--tracking-display)] text-foreground",
			children: value
		})]
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 font-mono text-[0.65rem] uppercase tracking-[var(--tracking-label)] text-subtle",
			children: title
		}), children]
	});
}
function Channel({ name, value, max }) {
	const pct = Math.round(value / max * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 last:mb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-baseline justify-between text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tabular-nums text-foreground",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1 overflow-hidden rounded-full bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-accent transition-[width] duration-500 ease-out",
				style: { width: `${pct}%` }
			})
		})]
	});
}
//#endregion
export { Ags3Console as t };
