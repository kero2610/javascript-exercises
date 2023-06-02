const findTheOldest = function(arr) {
    return arr.reduce(function(oldest, currentPerson){
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        const oldestPersonAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        if(currentPersonAge > oldestPersonAge){
            return currentPerson;
        }
        return oldest;
    });
};

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
