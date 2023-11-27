
class DataValidation {
    isItEmpty = (...data) => {

        data.forEach((data, index) => {
            if (data === null) {
                throw new TypeError(`O Argumento no index: ${index} é nulo`)
            }
            else if (data === undefined) {
                throw new TypeError(`O Argumento no index: ${index} é indefinido`)
            }
            else if (typeof data === "string" && data.trim() === "") {
                throw new TypeError(`O Argumento no index: ${index} é uma string vazia`)
            }
        })

        return true
    }


    isIdValid(...data) {
        data.forEach((data, index) => {
            if (isNaN(data)) {
                throw new TypeError(`O Argumento no index: ${index} não é um número`)
            }
        });

        return true
    }
}

module.exports = DataValidation