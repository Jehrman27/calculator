<script>
  import Button from "@/components/ui/button/button.svelte";
  import Card from "@/components/ui/card/card.svelte";
  import Textarea from "@/components/ui/textarea/textarea.svelte";

	const keys = [ "C",
		"CE",
		"/",
		"1",
		"2",
		"3",
		"*",
		"4",
		"5",
		"6",
		"-",
		"7",
		"8",
		"9",
		"+",
		"0",
		".",
		"=",
	];

	let count = $state(0);
	let display = $state("0");
	let currentValue = $state("");
	let previousValue = $state("");
	let operation = $state("");

	const handleNumberClick = (value) => {
		if (currentValue === "0" || operation) {
			currentValue = value;
		} else {
			currentValue += value;
		}
		display = currentValue;
	};
</script>


<Card class="max-w-sm">
	<Textarea readonly value={display} class="resize-none"/>
	<div class="grid grid-cols-4 gap-1">
		{#each keys as key}
			<Button>{key}</Button>
		{/each}
	</div>
</Card>