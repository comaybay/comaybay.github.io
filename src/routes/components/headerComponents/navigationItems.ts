import { readable } from "svelte/store";

export default readable([
  { href: '/stuff', text: 'Stuff' },
  { href: '/misc', text: 'Linh tinh' },
  { href: '/', text: 'Trang chủ' },
  { href: '/self', text: 'Bản thân' },
  { href: '/contact', text: 'Liên hệ' }
]);