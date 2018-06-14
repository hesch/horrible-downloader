export type Action = {
  type: 'SETTINGS_CHANGE',
  payload: number,
} | {
  type: 'RESET_COUNTER',
}
