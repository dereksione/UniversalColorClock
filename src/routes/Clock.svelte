<script>
	export let hue = {
		r: undefined,
		g: undefined,
		b: undefined
	};

	export let strTime = "bull";
</script>

<div>
	<h1 style="color: rgb({`${hue.r},${hue.g},${hue.b}`})">{strTime}</h1>
</div>
