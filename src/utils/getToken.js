export default function getToken(length = 10) {
  return Math.random().toString(20).substr(2, length);
}
