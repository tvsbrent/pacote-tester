import pacote from 'pacote';

async function main() {
  console.time('request');
  const data = await pacote.tarball('https://nexus.common-build.gcp.oreilly.com/repository/npm-group/@colors/colors/-/colors-1.6.0.tgz');
  console.log('got ' + data.length + ' bytes of tarball data');
  console.timeEnd('request');
}

main();