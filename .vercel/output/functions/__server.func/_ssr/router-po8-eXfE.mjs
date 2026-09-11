import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, p as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-po8-eXfE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 36 36",
		fill: "none",
		"aria-hidden": "true",
		className: cn("size-7", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "7.5",
				r: "2.35",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7.5",
				cy: "27",
				r: "2.35",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28.5",
				cy: "27",
				r: "2.35",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 7.5 7.5 27h21L18 7.5Z",
				stroke: "currentColor",
				strokeWidth: "1.35",
				strokeLinejoin: "round"
			})
		]
	});
}
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("inline-flex items-center gap-2.5 text-foreground transition-opacity duration-150 hover:opacity-80", className),
		"aria-label": "Kaliyugaa home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-sans text-sm font-semibold tracking-tight",
				children: "Kaliyugaa"
			}),
			compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden font-mono text-xs font-medium uppercase tracking-[var(--tracking-label)] text-muted-foreground sm:inline",
				children: "AGS3"
			})
		]
	});
}
var company = {
	name: "Kaliyugaa",
	product: "AGS3",
	productLong: "Kaliyugaa AGS3",
	tagline: "The operating system for modern BPO.",
	lede: "Specialist agents handle customer care, tech support, voice and non-voice work. Live feedback then steers the floor — quality, staffing, and the next playbook.",
	email: "briefings@kaliyugaa.com",
	city: "Bengaluru",
	region: "India"
};
var nav = [
	{
		to: "/ags3",
		label: "AGS3"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var capabilities = [
	"Customer care",
	"BPO operations",
	"Tech & IT support",
	"Voice",
	"Non-voice",
	"Market analysis",
	"Agentic optimization"
];
var services = [
	{
		id: "customer-care",
		number: "01",
		title: "Customer care",
		lede: "First contact, retention, and recovery — handled by agents that already know the account.",
		body: "AGS3 runs inbound and outbound care across chat, email, and voice. It greets, authenticates, resolves, and only escalates when judgment needs a person. Every contact writes back into the customer record and the floor model.",
		points: [
			"Omnichannel intake with a single customer memory",
			"Policy-aware resolution, not script recitation",
			"Supervised handoff to human specialists"
		]
	},
	{
		id: "bpo",
		number: "02",
		title: "BPO operations",
		lede: "Back-office work that used to need a bench now runs as a supervised queue.",
		body: "Claims, KYC, order ops, billing exceptions, and catalog work move through specialist agents with audit trails. Kaliyugaa does not rent seats. We install a system that takes the volume and shows you how it is doing.",
		points: [
			"Exception-first queues instead of linear headcount",
			"Dual-control on money, PII, and irreversible actions",
			"Shift-ready reporting for operations leadership"
		]
	},
	{
		id: "tech-it",
		number: "03",
		title: "Tech & IT support",
		lede: "L1 and L2 that actually close tickets — with runbooks the agents follow, and update.",
		body: "Password, access, device, network, and SaaS issues are diagnosed against your CMDB and knowledge base. AGS3 proposes the fix, executes approved actions, and files a clean ticket. Recurring incidents become playbooks automatically.",
		points: [
			"Identity-aware troubleshooting",
			"Approved remote actions with a paper trail",
			"Incident patterns fed into market and product feedback"
		]
	},
	{
		id: "voice",
		number: "04",
		title: "Voice",
		lede: "Live conversation, not an IVR maze. Agents that listen, speak, and know when to stop.",
		body: "AGS3 voice agents carry the call: intent, verification, resolution, wrap-up. They stay inside your tone and compliance envelope. Silence, frustration, and repeat callers are treated as signals, not noise.",
		points: [
			"Low-latency speech with barge-in",
			"Real-time QA against policy, not after-the-fact sampling",
			"Warm transfer with a spoken brief, not a cold dump"
		]
	},
	{
		id: "non-voice",
		number: "05",
		title: "Non-voice",
		lede: "Chat, email, social, and ticket work on one floor — same memory, same standards.",
		body: "Async channels get the same agent mesh as voice. Drafts, macros, and knowledge are generated in your voice, then sent or held for review by rule. Backlogs shrink because the system works the queue, not a roster.",
		points: [
			"Unified queue across chat, mail, and case systems",
			"Tone-matched replies with citation to policy",
			"SLA clocks the system actually respects"
		]
	},
	{
		id: "market-analysis",
		number: "06",
		title: "Market analysis through feedback",
		lede: "Every contact is a sample of the market. AGS3 treats it that way.",
		body: "We do not wait for a quarterly survey. Calls, chats, tickets, and CSAT comments are clustered into product, pricing, and operations themes. Leadership gets a daily brief: what broke, what is rising, what to change on the floor.",
		points: [
			"Theme detection across voice and text",
			"Root-cause tied to playbooks and staffing",
			"Closed-loop recommendations, not a slide dump"
		]
	}
];
var layers = [
	{
		number: "01",
		name: "Sense",
		title: "Intake that already understands",
		body: "Voice, chat, email, tickets, and product telemetry arrive as one stream. AGS3 identifies the customer, the intent, and the risk before a single action is taken."
	},
	{
		number: "02",
		name: "Act",
		title: "Specialist agents, not a general chatbot",
		body: "Care, billing, tech, KYC, and collections are separate agents with separate tools. They collaborate, they do not improvise outside policy, and they escalate with a brief a human can use."
	},
	{
		number: "03",
		name: "Steer",
		title: "The floor learns from itself",
		body: "Quality, AHT, FCR, and feedback themes write back into routing, staffing, and playbooks. This is the agentic loop: the system that runs the work also improves the work."
	}
];
var metrics = [
	{
		value: "3",
		label: "Operating layers",
		hint: "Sense, Act, Steer"
	},
	{
		value: "6",
		label: "Service lines",
		hint: "Care to market analysis"
	},
	{
		value: "24/7",
		label: "Floor coverage",
		hint: "Voice and non-voice"
	},
	{
		value: "1",
		label: "System of record",
		hint: "Every contact, one memory"
	}
];
var principles = [
	{
		title: "Agents with jobs",
		body: "A general model with a prompt is not an operation. Each AGS3 agent has a role, tools, a supervisor, and a kill switch."
	},
	{
		title: "Humans on the exceptions",
		body: "People take judgment, empathy, and irreversible actions. The system takes volume. That split is designed, not hoped for."
	},
	{
		title: "Feedback is an input",
		body: "Surveys, silence, repeats, and social mentions are routed into the same loop that runs the floor. Analysis is not a side team."
	},
	{
		title: "Audit over theatre",
		body: "Every action is attributable. Clients see the queue, the policy hit, and the outcome — not a demo that vanishes after the pitch."
	}
];
var faqs = [
	{
		q: "What does AGS3 actually replace?",
		a: "The first wave is L1 care, tech support, and back-office queues — the work that is high-volume, policy-bound, and expensive to staff overnight. It does not replace your operations leaders. It gives them a floor that reports the truth."
	},
	{
		q: "How is this different from a chatbot or an IVR?",
		a: "Chatbots deflect. IVRs route. AGS3 performs the work: authenticated actions in your systems, wrap-up, QA, and a feedback loop into staffing and product. Voice and non-voice share one memory."
	},
	{
		q: "Where do people still sit?",
		a: "On exceptions, regulated actions, and the relationships that need a named human. Kaliyugaa designs the split with you. Headcount usually moves up the stack, not out the door overnight."
	},
	{
		q: "Can it use our existing telephony and ticketing?",
		a: "Yes. AGS3 connects to the floor you already have — CCaaS, ITSM, CRM, billing — rather than asking you to rip it out. We add the agent mesh and the steering layer on top."
	},
	{
		q: "How does market analysis come out of support?",
		a: "Every contact is tagged for theme, severity, and product surface. AGS3 clusters those tags daily and recommends floor and product changes. That brief is the same system, not a consultancy add-on."
	}
];
var interests = [
	"AGS3 briefing",
	"Customer care",
	"BPO operations",
	"Tech & IT support",
	"Voice",
	"Non-voice",
	"Market analysis",
	"Partnership"
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2.5 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-tight",
								children: company.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Agentic operations for customer care, BPO, tech support, voice and non-voice — steered by the feedback the floor already produces."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
							children: [
								company.city,
								", ",
								company.region
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
						children: "Operations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							hash: s.id,
							className: "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
							children: s.title
						}) }, s.id))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["First product · ", company.productLong] })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground shadow-[var(--shadow-border)] hover:bg-elevated",
			outline: "bg-transparent text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-secondary",
			ghost: "text-foreground hover:bg-secondary",
			accent: "bg-accent text-accent-foreground hover:opacity-90",
			link: "text-foreground underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 min-h-11 px-5",
			sm: "h-9 min-h-9 px-3.5 text-xs",
			lg: "h-12 min-h-12 px-6",
			icon: "size-11 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-background p-6 pt-8 focus:outline-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-md text-foreground transition-opacity duration-150 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetTitle = DialogTitle;
var SheetDescription = DialogDescription;
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("inline-flex h-11 items-center px-3 text-sm transition-colors duration-150", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request a briefing"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "md:hidden",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
								className: "sr-only",
								children: "Kaliyugaa site navigation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-12 flex flex-col gap-1",
								"aria-label": "Mobile",
								children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "font-display text-4xl tracking-[var(--tracking-display)] text-foreground transition-opacity duration-150 hover:opacity-70",
										children: item.label
									})
								}, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											children: "Request a briefing"
										})
									})
								})
							})
						] })]
					})]
				})
			]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				toastOptions: { className: "bg-card text-foreground border-border shadow-[var(--shadow-lift)]" }
			})
		]
	});
}
var styles_default = "/assets/styles-C3n001cO.css";
var APP_NAME = "Kaliyugaa";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Kaliyugaa builds AGS3, an AI-automated BPO system for customer care, tech support, voice and non-voice operations, steered by live feedback."
			},
			{
				name: "theme-color",
				content: "#090A09"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-5fKR4l8A.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-BLnEA7uZ.mjs");
var Route$3 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "About · Kaliyugaa" }, {
		name: "description",
		content: "Kaliyugaa is an operations company. We build agentic systems that run BPO, customer care, and tech support — then improve them from live feedback."
	}] })
});
var $$splitComponentImporter$2 = () => import("./ags3-Dz8uy1T4.mjs");
var Route$2 = createFileRoute("/ags3")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "AGS3 · Kaliyugaa" }, {
		name: "description",
		content: "Kaliyugaa AGS3 is an AI-automated BPO system: specialist agents, supervised exceptions, and market analysis from live feedback."
	}] })
});
var $$splitComponentImporter$1 = () => import("./contact-B4OGcRlx.mjs");
var Route$1 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Contact · Kaliyugaa" }, {
		name: "description",
		content: "Request a Kaliyugaa AGS3 briefing for customer care, BPO, tech support, or market analysis."
	}] })
});
var $$splitComponentImporter = () => import("./services-C_RyZiPC.mjs");
var Route = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Services · Kaliyugaa" }, {
		name: "description",
		content: "Customer care, BPO, tech and IT support, voice, non-voice, and market analysis — run through Kaliyugaa AGS3."
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	Ags3Route: Route$2.update({
		id: "/ags3",
		path: "/ags3",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { faqs as a, metrics as c, cn as d, company as i, principles as l, Button as n, interests as o, capabilities as r, layers as s, router_exports as t, services as u };
