import assert from 'assert';
import Haskell from '../../lib/plugins/haskell';
import githubSearch from '../../lib/resolver/github-search.js';

describe('haskell', () => {
  const path = '/user/repo/blob/d6/lib/plugins/javascript.js';
  const target = 'Foo.Bar';

  it('resolves links', () => {
    assert.deepEqual(
      Haskell.resolve({ path, target }),
      [
        '{BASE_URL}/user/repo/blob/master/src/Foo/Bar.hs',
        '{BASE_URL}/user/repo/blob/master/lib/Foo/Bar.hs',
        '{BASE_URL}/user/repo/blob/master/Foo/Bar.hs',
        githubSearch({ path, target }).toString(),
        'https://hackage.haskell.org/package/base/docs/Foo-Bar.html',
      ],
    );
  });
});