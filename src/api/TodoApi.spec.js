const chai = require('chai')
	, expect = chai.expect
	, TodoApi = require('./TodoApi')
	, TodoRequestOptions = require('./TodoRequestOptions')
	, nock = require('nock')
	, url = require("url");


function parsedUrl(todoRequestOptions, filter) {
	const apiUrl = todoRequestOptions.getUrl(filter)
	const parsedUrl = url.parse( apiUrl )
	const host = parsedUrl.protocol + '//' + parsedUrl.hostname
	const path = parsedUrl.pathname

	return {
		host: host,
		path: path
	}
}

describe('TodoApi', () => {
	const host = 'http://mockedapi.test/'
		, todoUrl = 'todo/'
		, todoRequestOptions = new TodoRequestOptions( host, todoUrl )
		, todoApi = new TodoApi(todoRequestOptions);

	it('getList() should return 6 mocked itens', (done) => {
		const filter = {}
		const urlParsed = parsedUrl(todoRequestOptions, filter)

		nock( urlParsed.host, {
		      reqheaders: {
		        'Content-Type': 'application/json'
		      }
		    })
			.get( urlParsed.path )
			.reply(200,
				[
					{
						"_id": "59ac76d803ffa8151932d6fb",
						"description": "test5",
						"createdAt": "2017-09-03T21:40:40.891Z",
						"done": false
					},
					{
						"_id": "59b299ff747883040351430c",
						"description": "test1",
						"createdAt": "2017-09-08T13:24:15.711Z",
						"done": false
					},
					{
						"_id": "59b29a10747883040351430d",
						"description": "test2",
						"createdAt": "2017-09-08T13:24:32.075Z",
						"done": false
					},
					{
						"_id": "59b29a16747883040351430e",
						"description": "test3",
						"createdAt": "2017-09-08T13:24:38.064Z",
						"done": false
					},
					{
						"_id": "59b29a1f747883040351430f",
						"description": "test4",
						"createdAt": "2017-09-08T13:24:47.393Z",
						"done": false
					}
				]
			);


		todoApi.getList( filter )
			.then( (body, response) => {
				expect( body ).to.be.an('array').to.have.lengthOf(5);
				done();
			})
			.catch( error => done(error) );

	});


	it('getDetail() should return mocked item', (done) => {
		const filter = { id: '59b29a10747883040351430d'}
		const urlParsed = parsedUrl(todoRequestOptions, filter)

		const object = {
		    "_id": filter.id,
		    "description": "test2",
		    "createdAt": "2017-09-08T13:24:32.075Z",
		    "done": false
		}

		nock( urlParsed.host, {
		      reqheaders: {
		        'Content-Type': 'application/json'
		      }
		    })
			.get( urlParsed.path )
			.reply(200, object );


		todoApi.getDetail( filter )
			.then( (body, response) => {
				expect( body ).to.be.an('object')
				expect( body._id ).to.equal(object._id)
				expect( body ).to.deep.equal(object)
				done();
			})
			.catch( error => done(error) );

	});


	it('create() should return mocked new item', (done) => {
		const urlParsed = parsedUrl(todoRequestOptions)

		const formData = {
		    description: "test2",
		    done: false
		}
		const created = {
		    "_id": '19304h13f893egf',
		    "description": formData.description,
		    "createdAt": "2017-09-08T13:24:32.075Z",
		    "done": false
		}

		nock( urlParsed.host, {
		      reqheaders: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      }
		    })
			.matchHeader('accept', 'application/json')
			.post( urlParsed.path )
			.reply(200, created);


		todoApi.create( formData )
			.then( (body, response) => {
				expect( body ).to.have.deep.property('_id', created._id);
				expect( body ).to.deep.equal(created)
				done();
			})
			.catch( error => done(error) );
	});


	it('update() should return updated item', (done) => {
		const filter = { id: '59b29a10747883040351430d' }
		const urlParsed = parsedUrl(todoRequestOptions, filter)

		const formData = {
		    description: "test3",
		    done: true
		}
		const updated = {
		    "_id": filter.id,
		    "description": formData.description,
		    "createdAt": "2017-09-08T13:24:32.075Z",
		    "done": formData.done
		}

		nock( urlParsed.host, {
		      reqheaders: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      }
		    })
			.put( urlParsed.path )
			.reply(200, updated);


		todoApi.update( filter, formData )
			.then( (body, response) => {
				console.log(body)
				expect( body ).to.have.deep.property('_id', updated._id);
				expect( body ).to.deep.equal(updated)
				done();
			})
			.catch( error => done(error) );
	});


	it('delete() should return null', (done) => {
		const filter = { id: '59b29a10747883040351430d' }
		const urlParsed = parsedUrl(todoRequestOptions, filter)

		nock( urlParsed.host )
			.delete( urlParsed.path )
			.reply(200, '');


		todoApi.delete( filter )
			.then( (body, response) => {
				done();
			})
			.catch( error => done(error) );
	});

});