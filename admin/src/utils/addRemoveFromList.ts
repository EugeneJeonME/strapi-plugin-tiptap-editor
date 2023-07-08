// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addRemoveFromList = (list: any[], val: any) => {
  if (!list.includes(val)) {
    list.push(val);
  } else {
    list.splice(list.indexOf(val), 1);
  }
  return list;
};
