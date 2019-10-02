const Nunjucks = require('nunjucks');
const path = require('path');

const RELATIVE_PATH_REGEXP = /^\.{1,2}\//;

module.exports = class IncludeWithNunjucksExtension {
  constructor({ nunjucksEnv, tagName = 'includeWith' }) {
    this._nunjucksEnv = nunjucksEnv;
    this._cwd = null;
    this.tags = [tagName];
  }

  parse(parser, nodes) {
    const tok = parser.nextToken();
    const args = parser.parseSignature(null, true);

    parser.advanceAfterBlockEnd(tok.value);
    return new nodes.CallExtension(this, 'run', args, null);
  }

  run(context, partialPath, data = {}, { useContext = false } = {}) {
    const composedData = useContext
      ? Object.assign({}, context.ctx, data)
      : Object.assign({ collections: context.ctx.collections }, data);

    const renderResult = this._nunjucksEnv.render(partialPath, composedData);
    return new Nunjucks.runtime.SafeString(renderResult);
  }
};
