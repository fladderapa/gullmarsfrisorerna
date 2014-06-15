bucket = require("bucket-node").bucket
_      = require "underscore"
flash = require "connect-flash"


#ADMIN SITE

exports.authenticateAdmin = (req, res, next) ->
	if req.session.user?
		next()
	else
		res.redirect "/admin"
		
exports.index = (req, res) ->
	aboutUs = bucket.where {type: "aboutUs"}
	brands = bucket.where {type: "brands"}
	category1 = bucket.where {category: "Klippning"}
	category2 = bucket.where {category: "Färgning"}
	category3= bucket.where {category: "Permanent"}
	category4 = bucket.where {category: "Folieslingor"}
	category5 = bucket.where {category: "Fransar&Bryn"}
	category6 = bucket.where {category: "Slingor i hätta"}
	category7 = bucket.where {category: "Håltagning Öron"}
	console.log(category2)
	
	if aboutUs.length > 0 
		res.render "admin/index",
			aboutUs: aboutUs.pop()
			brands: brands
			category1: category1
			category2: category2
			category3: category3
			category4: category4
			category5: category5
			category6: category6
			category7: category7
	else if aboutUs.length == 0
		storePost "Lorem ipsum..", "Title", "aboutUs", "new", (err) ->
		exports.index req, res
	else if contact.length == 0
		storePost "Lorem ipsum..", "Title", "contact", "new", (err) ->
		exports.index req, res
	else if other.length == 0
		storePost "Lorem ipsum..", "Title", "other", "new", (err) ->
		exports.index req, res
	

exports.edit = (req, res) ->
	id = req.params.id
	textPost = bucket.getById(id)
	
	if id == "newBrand"
		res.render "admin/newBrand"
	else if id == "newProduct"
		res.render "admin/newProduct"
	else if textPost.type == "products"
		res.render "admin/editProduct",
			textPost: textPost
	else if textPost.type == "brands"
		res.render "admin/editBrands",
			textPost: textPost
	else
		res.render "admin/edit",
			textPost: textPost

exports.new = (req, res) ->
	res.render "admin/newBrand"

exports.newProduct = (req, res) ->
	res.render "admin/newProduct"
			
	

storePost = (text, title, type, id, category, callback) ->
	
	if id == "newBrand" or id == "newProduct"
		blogPost = {}
		blogPost = {type: type}
		blogPost = _.extend(blogPost, {title: title, text: text, category: category})
		bucket.set(blogPost)
		bucket.store (err) ->
			callback(err)
	else
		blogPost = bucket.getById(id)
		blogPost = _.extend(blogPost, {title: title, text: text, type: type, id:id, category: category})
		bucket.set (blogPost)
		bucket.store (err) ->
			callback(err)
		

exports.savePost = (req, res) ->
	title = req.body.title
	type = req.body.type
	id = req.params.id
	text = req.body.text
	category = req.body.category
	
	storePost text, title, type, id, category, (err) ->
		if err?
			req.flash('info', 'Something went wrong when saving blog post.')
		else
			req.flash('info', 'Saved.')
		exports.index req, res

exports.deletePost = (req, res) ->
	id = req.params.id
	if id?
		bucket.deleteById(id);
		bucket.store (err) ->
			if err?
				req.flash('info', 'Something went wrong when deleting blog post.')
			else
				req.flash('info', 'Deleted.')
			exports.index req, res


		




