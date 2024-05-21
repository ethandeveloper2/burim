export const extractPath = (url: string) => {
  const match = url.match(/^\/[^\/]+\/([^\/]+\/?.*)$/);
  return match ? '/' + match[1] : '';
}