export function convertToBoolean(value: any): boolean {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
    return value === 'true' || value === 'on' || value === '';
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  return !!value;
}
