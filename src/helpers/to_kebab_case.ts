const to_kebab_case = (str: string): string => str.split(/\s|_/g).join("-").toLocaleLowerCase();

export default to_kebab_case;
