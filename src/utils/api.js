export function buildApiData(type, attributes) {
  return {
    data: {
      type,
      id: attributes.id,
      attributes
    }
  };
}
