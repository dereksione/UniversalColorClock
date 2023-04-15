<script>
	import { onMount } from "svelte";
	import { normalHue } from "../ucc-script/retrieve";

	let time = new Date();

	$: mins = time.getMinutes();
	$: hours = time.getHours();
	$: strTime = formatTime(hours, mins);
	$: [r, g, b] = normalHue(time);

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	/**
	 * @param {number} hours
	 * @param {number} mins
	 */
	function formatTime(hours, mins) {
		let ampm = hours >= 12 ? "PM" : "AM";
		let shours = hours % 12;
		shours = shours ? shours : 12;
		let smins = mins < 10 ? "0" + mins : mins;
		return `${shours}:${smins} ${ampm}`;
	}
</script>

<div>
	<h1 style="color: rgb({`${r},${g},${b}`})">{strTime}</h1>
</div>
