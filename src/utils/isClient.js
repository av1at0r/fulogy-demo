export default function isClient() {
  return !!process.browser;
}