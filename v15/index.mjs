import pacote from 'pacote';
import npmFetch from 'npm-registry-fetch';

process.on('log', (level, ...args) => {
  console.log('log', level, ...args);
});

async function main() {
  console.log('='.repeat(80));
  console.time('fetch -tgz');
  const result = await npmFetch('https://nexus.common-build.gcp.oreilly.com/repository/npm-group/@colors/colors/-/colors-1.6.0.tgz');
  console.log('ok', result.ok);
  console.timeEnd('fetch -tgz');

  // console.log('='.repeat(80));
  // console.time('request - manifest');
  // const manifest = await pacote.manifest('@colors/colors@1.6.0', { registry: 'https://nexus.common-build.gcp.oreilly.com/repository/npm-group/' });
  // console.log('got manifest for ' + manifest.name + '@' + manifest.version);
  // console.timeEnd('request - manifest');

  // console.log('='.repeat(80));
  // console.time('request - extract');
  // const { from, resolved, integrity } = await pacote.extract('@colors/colors@1.6.0', 'temp', { registry: 'https://nexus.common-build.gcp.oreilly.com/repository/npm-group/' });
  // console.log('extracted!', from, resolved, integrity)
  // console.timeEnd('request - extract');

  // console.log('='.repeat(80));
  // console.time('request - tarball');
  // const data = await pacote.tarball('https://nexus.common-build.gcp.oreilly.com/repository/npm-group/@colors/colors/-/colors-1.6.0.tgz');
  // console.log('got ' + data.length + ' bytes of tarball data');
  // console.timeEnd('request - tarball');
}

main();