function usernameExtracor(array) {
    let allName = [];

    for (let i = 0; i < array.length; i++) {
        let fullDomain = array[i];
        let nameIndex = fullDomain.indexOf('@');
        let name = (fullDomain.substring(0, nameIndex)) + '.';
        
        fullDomain = fullDomain.substring(nameIndex + 1).split('.').forEach(element => {
            name += element[0];
        });;

        allName.push(name);
    }

    console.log(allName.join(', '));
}

usernameExtracor(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])