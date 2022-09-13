const increment = (part: string) => parseInt(part) + 1;
export const version = (version: string, commits: number, branch: string) => {
  const { major, minor, patch } = version.match(
    /v(?<major>[0-9]+)\.(?<minor>[0-9]+)\.(?<patch>[0-9]+)/
  ).groups;
  if (!major) {
    throw `Version ${version} is not like vx.y.z`;
  }
  if (commits == 0) {
    return version;
  }
  if (branch.startsWith("release/")) {
    return `v${major}.${minor}.${increment(patch)}-rc`;
  }
  return `v${major}.${increment(minor)}.0-rc`;
};
