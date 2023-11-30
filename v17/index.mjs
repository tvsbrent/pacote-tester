import pacote from 'pacote';

async function main() {
  console.time('request - manifest');
  const manifest = await pacote.manifest('@colors/colors@1.6.0', { registry: 'https://nexus.common-build.gcp.oreilly.com/repository/npm-group/' });
  console.log('got manifest for ' + manifest.name + '@' + manifest.version);
  console.timeEnd('request - manifest');

  console.time('request - tarball');
  const data = await pacote.tarball('https://nexus.common-build.gcp.oreilly.com/repository/npm-group/@colors/colors/-/colors-1.6.0.tgz');
  console.log('got ' + data.length + ' bytes of tarball data');
  console.timeEnd('request - tarball');
}

main();