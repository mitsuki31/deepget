import { expect } from 'chai';
import DeepGet from '../dist/esm/index.mjs';

describe('DeepGet', () => {
  it('should retrieve a value from a simple object', () => {
    const obj = { a: { b: { c: 42, d: { _: 'foo' } } } };
    expect(DeepGet(obj, 'a.b.d._')).to.equal('foo');
  });

  it('should retrieve a value from an array in an object', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    expect(DeepGet(obj, 'a.b.c[1]')).to.equal(2);
  });

  it('should return undefined for non-existent keys', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(DeepGet(obj, 'a.b.x')).to.be.undefined;
  });

  it('should return undefined for invalid input types', () => {
    expect(DeepGet(null, 'a.b.c')).to.be.undefined;
    expect(DeepGet({}, 123)).to.be.undefined;
    expect(DeepGet({}, '')).to.be.undefined;
  });

  it('should handle nested arrays', () => {
    const obj = { a: { b: { c: [[1, 2], [3, 4]] } } };
    expect(DeepGet(obj, 'a.b.c[1][0]')).to.equal(3);
  });

  it('should handle complex nested structures', () => {
    const obj = { a: { b: { c: { d: [ { e: 'value' } ] } } } };
    expect(DeepGet(obj, 'a.b.c.d[0].e')).to.equal('value');
  });

  it('should return undefined for out of bounds array indices', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    expect(DeepGet(obj, 'a.b.c[5]')).to.be.undefined;
  });
});
