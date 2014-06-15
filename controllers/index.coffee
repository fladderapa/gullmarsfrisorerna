bucket = require("bucket-node").bucket
_      = require "underscore"
flash = require "connect-flash"

#exports.index = (req, res) ->
  #res.render("index")

exports.login = (req, res) ->
	res.render "admin/login"


exports.loginAdmin = (req, res) ->
	username = req.body.username
	password = req.body.password
	user = bucket.findWhere {type: "adminUser", name: username, password: password}
	if user? && _.contains user.permissions, "ksite"
		req.session.user = user
		res.redirect ("/admin/index")
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

	res.render "index",
		aboutUs: aboutUs.pop(),
		brands: brands
		category1: category1
		category2: category2
		category3: category3
		category4: category4
		category5: category5
		category6: category6
		category7: category7
