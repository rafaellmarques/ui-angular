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

export function isValidUrl(value: string): boolean {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return pattern.test(value);
}

export function removeDuplicatedOptions(list: Array<any>) {
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      continue;
    }

    if (list.findIndex(op => op.value === list[i].value) !== i) {
      list.splice(i, 1);
      i--;
    }
  }
}
