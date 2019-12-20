const compareValues = (items, value, key) => {
  const getMin = () => {
    const minValue = items.reduce((accumulator, currentValue) => {
      return accumulator < currentValue.node[key]
        ? accumulator
        : currentValue.node[key];
    }, 0);

    return minValue;
  };

  const getMax = () => {
    const maxValue = items.reduce((accumulator, currentValue) => {
      return accumulator > currentValue.node[key]
        ? accumulator
        : currentValue.node[key];
    }, 0);

    return maxValue;
  };

  return (value - getMin()) / (getMax() - getMin());
};

export default compareValues;
