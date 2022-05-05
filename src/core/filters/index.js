/**
 * @returns {() => (import ('angular').IFilterService) => void}
 */
export const exist = () => (input) => {
	return input === null ? "No Disponible" : input;
};

/**
 * @returns {() => (import ('angular').IFilterService) => void}
 */
export const decimal = () => (input) => {
	if (typeof input === "number" && (input % 1 === 0.5 || input % 1 === 0)) {
		return input.toFixed(3).toString().replace(".", ",");
	}

	return input;
};

/**
 * @returns {() => (import ('angular').IFilterService) => void}
 */
export const decimalRounded = () => (input) => {
	if (
		(typeof input === "number" && input.toString().indexOf(".") !== -1) ||
		/^[0-9]+$/.test(input)
	) {
		if (input.toFixed && input !== 0) {
			var fixed = Number(input).toFixed(3);

			return fixed.toString().replace(".", ",");
		} else {
			return input.toString().replace(".", ",");
		}
	}

	return input;
};

export const capitalizeLower = () => (input) => {
	if (typeof input === "string") {
		var transform = input.toLowerCase();

		var splitted = transform.split(" ");

		var capitalized = splitted.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

		return capitalized.join(" ");
	}

	return input;
};
