const mongoose= require('mongoose');

/**LOCAL BB */
// mongoose.connect('mongodb://localhost:27017/library');

//ATLAS//
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.gxk2j.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const PartnershipApplicationSchema = new Schema({
    name                    : String,
    course_title            : String,
    firstname               : String,
    lastname                : String,
    emailaddress            : String,
    phoneno                 : String,
    employed                : String,
    graduation              : String,
    message                 : String,
    creation_date           : Date
});

var PartnershipApplicationdata = mongoose.model('partnershipapplication',PartnershipApplicationSchema);

module.exports = PartnershipApplicationdata;