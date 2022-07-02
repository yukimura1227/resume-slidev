import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'j',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'l',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'k',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
    {
      key: 'h',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
