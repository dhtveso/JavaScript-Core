let crudOperation = (() => {

    function listAds() {
        return remote.get('appdata', 'adverts', 'Kinvey')
    }

    function createAd(title, description, publisher, imgPath, datePublished, price) {
        let obj = { title, description, publisher, imgPath, datePublished, price }

        return remote.post('appdata', 'adverts', 'Kinvey', obj)
    }

    function editAd(title, description, publisher, imgPath, datePublished, price, id) {
        let obj = { title, description, publisher, imgPath, datePublished, price }

        return remote.update('appdata', `adverts/${id}`, 'Kinvey', obj)
    }

    function deleteAd(id) {
        return remote.remove('appdata', `adverts/${id}`, 'Kinvey')
    }

    return {
        listAds,
        createAd,
        editAd,
        deleteAd
    }
})()