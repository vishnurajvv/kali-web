import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as cn, i as company, n as Button, o as interests } from "./router-po8-eXfE.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B4OGcRlx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground shadow-[var(--shadow-border)] transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-xs font-medium tracking-[var(--tracking-label)] text-muted-foreground uppercase", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-input bg-secondary px-3 py-3 text-sm text-foreground shadow-[var(--shadow-border)] transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var empty = {
	name: "",
	companyName: "",
	role: "",
	email: "",
	interest: interests[0],
	message: ""
};
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function update(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
	}
	function validate() {
		const next = {};
		if (!form.name.trim()) next.name = "Name is required.";
		if (!form.companyName.trim()) next.companyName = "Company is required.";
		if (!form.email.trim()) next.email = "Email is required.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
		if (!form.message.trim() || form.message.trim().length < 12) next.message = "Tell us a little about the queue you want to put on AGS3.";
		setErrors(next);
		return Object.keys(next).length === 0;
	}
	function onSubmit(e) {
		e.preventDefault();
		if (!validate()) return;
		const record = {
			...form,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem("kaliyugaa-briefings") ?? "[]");
			localStorage.setItem("kaliyugaa-briefings", JSON.stringify([record, ...existing].slice(0, 20)));
		} catch {}
		setSent(true);
		toast.success("Briefing request received.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent",
						children: "Briefing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl",
						children: "Tell us the queue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-muted-foreground",
						children: "Start with one line — care, tech, voice, or back-office. We reply with a working plan, not a deck of logos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
							children: "Operations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 text-sm text-foreground",
							children: [
								company.city,
								", ",
								company.region
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle",
							children: "Briefings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "text-foreground underline-offset-4 hover:underline",
								children: company.email
							})
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-background px-6 py-10 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl tracking-[var(--tracking-display)]",
								children: "Received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
								children: [
									"Thank you, ",
									form.name,
									". An operations lead will follow up on ",
									form.email,
									" about ",
									form.interest.toLowerCase(),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-8",
								variant: "outline",
								onClick: () => {
									setForm(empty);
									setSent(false);
								},
								children: "Send another"
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit,
					noValidate: true,
					className: "rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-background p-5 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										error: errors.name,
										htmlFor: "name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											autoComplete: "name",
											value: form.name,
											onChange: (e) => update("name", e.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company",
										error: errors.companyName,
										htmlFor: "company",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "company",
											autoComplete: "organization",
											value: form.companyName,
											onChange: (e) => update("companyName", e.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Role",
										htmlFor: "role",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "role",
											autoComplete: "organization-title",
											value: form.role,
											onChange: (e) => update("role", e.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Work email",
										error: errors.email,
										htmlFor: "email",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											autoComplete: "email",
											value: form.email,
											onChange: (e) => update("email", e.target.value)
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "interest",
									children: "Interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "interest",
									value: form.interest,
									onChange: (e) => update("interest", e.target.value),
									className: "mt-2 flex h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
									children: interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item,
										children: item
									}, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "What should we look at first?",
									error: errors.message,
									htmlFor: "message",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										rows: 6,
										value: form.message,
										onChange: (e) => update("message", e.target.value),
										placeholder: "Queue, volume, systems, and what good looks like in 90 days."
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle",
									children: "We read every briefing. No automated drip."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "lg",
									children: "Send briefing request"
								})]
							})
						]
					})
				})
			})]
		})
	}) });
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor,
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				role: "alert",
				children: error
			}) : null
		]
	});
}
//#endregion
export { ContactPage as component };
