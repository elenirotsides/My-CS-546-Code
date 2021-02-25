const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require('mongodb');

async function getBand(id) {
    if (!id) throw 'Please provide an id';
    //if (typeof id !== 'string') throw 'ID must be a string';
    if (arguments.length !== 1) throw 'Please provide the correct number of arguments';

    const bandCollection = await bands();

    if (typeof id === 'string') {
        const objId = ObjectId.createFromHexString(id);
        const band = await bandCollection.findOne({ _id: objId });
        if (band === null) throw 'Sorry, no band exists with that ID';
        return band;
    } else {
        const band2 = await bandCollection.findOne({ _id: id });
        if (band2 === null) throw 'Sorry, no band exists with that ID';
        return band2;
    }
}

async function addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
    // error handling
    if (!bandName) throw 'Please provide a band name';
    if (!bandName.trim()) throw 'Band name cannot contain only spaces';
    if (typeof bandName !== 'string') throw 'Band name must be a string';
    if (!bandMembers) throw 'Please provide an array of band members';
    if (!Array.isArray(bandMembers)) throw 'Band members must be provided in an array';
    if (bandMembers.length <= 0) 'Array cannot be empty';
    if (!yearFormed) throw 'Please provide a year that this band formed';
    if (typeof yearFormed !== 'number') throw 'Year formed must be a number';
    if (!genres) throw 'Please provide an array of genres';
    if (!Array.isArray(genres)) throw 'Genres must be provided in an array';
    if (genres.length <= 0) 'Array cannot be empty';
    if (!recordLabel) throw 'Please provide a record label';
    if (!recordLabel.trim()) throw 'Record label cannot contain only spaces';
    if (typeof recordLabel !== 'string') throw 'Record label must be a string';
    if (arguments.length !== 5) return 'Incorrect number of argumnts have been provided';

    const bandCollection = await bands();

    let newBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel,
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Error adding band';

    const newID = insertInfo.insertedId;

    return await this.getBand(newID);
}
async function getAllBands() {
    const bandCollection = await bands();

    const bandList = await bandCollection.find({}).toArray();
    if (bandList.length === 0) throw 'Collection is empty, no bands to display.';

    return bandList;
}

async function updateBand(bandId, bandName, bandMembers, yearFormed, genres, recordLabel) {
    if (!bandId) throw 'Please provide a band ID';
    if (!bandName) throw 'Please provide a band name';
    if (!bandName.trim()) throw 'Band name cannot contain only spaces';
    if (typeof bandName !== 'string') throw 'Band name must be a string';
    if (!bandMembers) throw 'Please provide an array of band members';
    if (!Array.isArray(bandMembers)) throw 'Band members must be provided in an array';
    if (bandMembers.length <= 0) 'Array cannot be empty';
    if (!yearFormed) throw 'Please provide a year that this band formed';
    if (typeof yearFormed !== 'number') throw 'Year formed must be a number';
    if (!genres) throw 'Please provide an array of genres';
    if (!Array.isArray(genres)) throw 'Genres must be provided in an array';
    if (genres.length <= 0) 'Array cannot be empty';
    if (!recordLabel) throw 'Please provide a record label';
    if (!recordLabel.trim()) throw 'Record label cannot contain only spaces';
    if (typeof recordLabel !== 'string') throw 'Record label must be a string';
    if (arguments.length !== 6) throw 'Please provide all the arugments needed';

    const bandCollection = await bands();

    let updateBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel,
    };

    if (typeof bandId === 'string') {
        const objId = ObjectId.createFromHexString(bandId);
        const updatedInfo = await bandCollection.updateOne({ _id: objId }, { $set: updateBand });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update band';
        return await this.getBand(objId);
    } else {
        const updatedInfo = await bandCollection.updateOne({ _id: bandId }, { $set: updateBand });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update band';
        return await this.getBand(bandId);
    }
}
async function removeBand(id) {
    if (!id) throw 'Please provide an ID';
    if (arguments.length !== 1) throw 'Please provide the correct number of arguments';

    const bandCollection = await bands();

    if (typeof id === 'string') {
        const objId = ObjectId.createFromHexString(id);
        const deletionInfo = await bandCollection.deleteOne({ _id: objId });
        if (deletionInfo.deletedCount === 0) throw 'Error deleting band';
    } else {
        const deletionInfo = await bandCollection.deleteOne({ _id: id });
        if (deletionInfo.deletedCount === 0) throw 'Error deleting band';
    }

    return true;
}

module.exports = { addBand, getAllBands, getBand, updateBand, removeBand };
