export function getHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export function getThumbnail(url: string) {
  const host = getHost(url)
  return `https://img.logo.dev/${host}?token=pk_RHKnMdF3Rdyhmwug7XQivw`
}
