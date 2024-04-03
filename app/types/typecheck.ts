export function formDataValueCheckForStr(
  value: FormDataEntryValue | null
): string {
  if (value == null) return "";
  return value.toString();
}

export function formDataValueCheckForNum(
  value: FormDataEntryValue | null
): number {
  if (value == null) return 0;
  return Number(value);
}
