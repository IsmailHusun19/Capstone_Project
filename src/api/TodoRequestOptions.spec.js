/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-spaces-and-tabs */
const chai = require('chai');

const { expect } = chai;
const TodoRequestOptions = require('./TodoRequestOptions');

describe('TodoRequestOptions', () => {
  const host = 'http://mockedurl.test/';
  const todoUrl = 'todo/';
  const todoRequestOptions = new TodoRequestOptions(host, todoUrl);

  // getTodoIdUrl
  it('getTodoIdUrl() should return empty', () => {
    expect(todoRequestOptions.getTodoIdUrl()).to.be.empty;
  });

  it('getTodoIdUrl({id: Int}) should return Int/', () => {
    let filter = { id: 1 };
    expect(todoRequestOptions.getTodoIdUrl(filter)).to.equal(`${filter.id}/`);

    filter = { id: 2 };
    expect(todoRequestOptions.getTodoIdUrl(filter)).to.equal(`${filter.id}/`);

    filter = { id: 13467839 };
    expect(todoRequestOptions.getTodoIdUrl(filter)).to.equal(`${filter.id}/`);
  });

  // getQueryFilters
  it('getQueryFilters() should return empty', () => {
    expect(todoRequestOptions.getQueryFilters()).to.be.empty;
  });

  it('getQueryFilters({description: String}) should return description regex query url', () => {
    let filter = { description: 'find' };
    expect(todoRequestOptions.getQueryFilters(filter)).to.have.string('find');

    filter = { description: 'found' };
    expect(todoRequestOptions.getQueryFilters(filter)).to.have.string('found');
  });

  // getUrl
  it('getUrl() should return url', () => {
    let url = host + todoUrl;
    expect(todoRequestOptions.getUrl()).to.equal(url);
  });
  it('getUrl({id: Int}) should return url with task id', () => {
    let filter = { id: 1123 };
    let url = host + todoUrl + todoRequestOptions.getTodoIdUrl(filter);
    expect(todoRequestOptions.getUrl(filter)).to.equal(url);
  });

  it('getUrl({description: Int}) should return url with queryString filter', () => {
    let filter = { description: 'searchText' };
    let url = host + todoUrl + todoRequestOptions.getQueryFilters(filter);
    expect(todoRequestOptions.getUrl(filter)).to.equal(url);
  });

  // testing constructor
  it('new TodoRequestOptions(host, url) should get different urls', () => {
    let host2 = 'http://mockedurl-different.test';
    let todoUrl2 = 'diff/';
    let todoRequestOptions2 = new TodoRequestOptions(host2, todoUrl2);

    let url = host2 + todoUrl2;
    expect(todoRequestOptions2.getUrl()).to.equal(url);
  });
});