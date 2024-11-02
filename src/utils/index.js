export const extractAndValidateVariables = (str) => {
  // Regex to match anything between {{ and }}
  const regex = /{{(.*?)}}/g;
  const matches = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    const variableName = match[1].trim();
    // Regex for valid JavaScript identifier
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(variableName)) {
      matches.push(variableName);
    }
  }

  return matches;
};
