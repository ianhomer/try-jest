export const version = (version: string, commits: number, branch: string) => {
  const match = version.match(/v([0-9]+)\.([0-9]+)\.([0-9]+)/);
  if (!match) {
    throw "Version ${version} is not like vx.y.z";
  }
  if (commits == 0) {
    return version;
  }
  if (branch.startsWith("release/")) {
    return `v${match[1]}.${match[2]}.${parseInt(match[3]) + 1}-rc`;
  }
  return `v${match[1]}.${parseInt(match[2]) + 1}.0-rc`;
};
