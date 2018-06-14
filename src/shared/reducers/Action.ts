export type Action = {
  type: 'SETTINGS_CHANGE',
  payload: string,
} | {
  type: 'RESET_COUNTER',
}
