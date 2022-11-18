export const useValidation = () => {
  const isPositiveNumber = (str: string) => {
    const num = Number(str);

    if (Number.isInteger(num) && num > 0) {
      return true;
    }

    return false;
  };

  const hasLength = (str: string, length: number) => {
    if (str.length !== length) {
      return false;
    }
    return true;
  };

  return {
    isPositiveNumber,
    hasLength,
  };
};
