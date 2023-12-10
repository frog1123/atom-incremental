const convertToDecimal = obj => {
  // number | string
  if (typeof obj === "number" || (typeof obj === "string" && /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/.test(obj))) return new Decimal(obj);

  // array
  if (Array.isArray(obj)) return obj.map(convertToDecimal);

  // object
  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = convertToDecimal(obj[key]);
      }
    }
    return result;
  }

  return obj;
};
