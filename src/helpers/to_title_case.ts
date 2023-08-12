const to_title_case = (str: string): string => str
	.split(/\s|_|-|(?=[A-Z])/g)
	.map((word): string => `${word[0].toLocaleUpperCase()}${word.substring(1)}`)
	.join(" ");

export default to_title_case;
