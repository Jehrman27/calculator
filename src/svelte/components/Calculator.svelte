<script lang="ts">
  import Button from "@/components/ui/button/button.svelte";
  import Card from "@/components/ui/card/card.svelte";
  import Textarea from "@/components/ui/textarea/textarea.svelte";

	const keys = [ 
		"C",
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

	let display: string = $state("0");
	let currentValue: string = $state("");
	let previousValue: string = $state("");
	let operation: string | null = $state("");

	const handleNumberClick = (num: string) => {
		if (currentValue === "0" || operation) {
			currentValue = num;
		} else {
			currentValue += num;
		}
		display = currentValue;
	};

	const handleOperationClick = (op: string) => {
		console.log("Operation clicked: ", op)
		switch (op) {
			case "C":
				display = "0";
				previousValue = "";
				currentValue = "";
				operation = null;
				break;
			case "CE":
				display = "0";
				currentValue = "";
				break;
			case "=":
				// if (previousValue && currentValue) {
					calculateResult();
					previousValue = "";
					operation = null;
				// }
				break;
			default:
				// if (currentValue) {
					if (previousValue && operation) {
						calculateResult();
					}
					previousValue = currentValue === "" ? "0" : currentValue;
					currentValue = "";
					operation = op;
				// }
				break;
		}
	}

	const calculateResult = () => {
    let result = 0;
    switch (operation) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case "/":
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
      default:
        return;
    }
		display = result.toString();
		currentValue = result.toString();
		previousValue = "";
		operation = null;
  };
</script>


<Card class="max-w-sm">
	<Textarea readonly value={display} class="resize-none"/>
	<div class="grid grid-cols-4 gap-1">
		{#each keys as key}
			<Button onclick={() => 
				isNaN(parseInt(key))
				? handleOperationClick(key)
				: handleNumberClick(key)
			}
			class={["C", "0"].includes(key) ? "col-span-2" : ""}>
			{key}
		</Button>
		{/each}
	</div>
</Card>