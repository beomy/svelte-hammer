export interface SvelteAction  {
	update?: (parameters: any) => void,
	destroy?: () => void
}
