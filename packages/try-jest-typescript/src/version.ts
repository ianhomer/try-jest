export const version = (tag: string, commits: number, branch: string) => {
  const match = tag.match(
    /v(?<major>[0-9]+)\.(?<minor>[0-9]+)\.(?<patch>[0-9]+)/
  );
  if (!match) {
    throw `version ${tag} is not like vx.y.z`;
  }
  const { major, minor, patch } = match.groups;
  return commits == 0
    ? tag
    : branch.startsWith("release/")
    ? `v${major}.${minor}.${parseInt(patch) + 1}-rc`
    : `v${major}.${parseInt(minor) + 1}.0-rc`;
};
